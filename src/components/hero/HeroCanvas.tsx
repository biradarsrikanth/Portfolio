'use client';

import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const PARTICLE_COUNT = 200;
const CONNECTION_DISTANCE = 2.5;
const FPS_CAP = 30;
const FRAME_INTERVAL = 1 / FPS_CAP;

/* ── Floating particles with connection lines ── */
function NetworkParticles() {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const lastFrameTime = useRef(0);

  const { positions, velocities } = useMemo(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3);
    const vel = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 4;
      vel[i * 3] = (Math.random() - 0.5) * 0.003;
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.003;
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.001;
    }
    return { positions: pos, velocities: vel };
  }, []);

  const maxLineVertices = PARTICLE_COUNT * 20; // reasonable cap
  const linePositions = useMemo(
    () => new Float32Array(maxLineVertices * 3),
    [maxLineVertices]
  );

  // Set up geometries imperatively
  useEffect(() => {
    if (pointsRef.current) {
      const geom = pointsRef.current.geometry;
      geom.setAttribute(
        'position',
        new THREE.BufferAttribute(positions, 3)
      );
    }
    if (linesRef.current) {
      const geom = linesRef.current.geometry;
      geom.setAttribute(
        'position',
        new THREE.BufferAttribute(linePositions, 3)
      );
      geom.setDrawRange(0, 0);
    }
  }, [positions, linePositions]);

  useFrame((_, delta) => {
    lastFrameTime.current += delta;
    if (lastFrameTime.current < FRAME_INTERVAL) return;
    lastFrameTime.current = 0;

    if (!pointsRef.current || !linesRef.current) return;

    const posAttr = pointsRef.current.geometry.attributes
      .position as THREE.BufferAttribute;
    const posArr = posAttr.array as Float32Array;

    // Update particle positions
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const ix = i * 3;
      posArr[ix] += velocities[ix];
      posArr[ix + 1] += velocities[ix + 1];
      posArr[ix + 2] += velocities[ix + 2];

      if (Math.abs(posArr[ix]) > 5) velocities[ix] *= -1;
      if (Math.abs(posArr[ix + 1]) > 4) velocities[ix + 1] *= -1;
      if (Math.abs(posArr[ix + 2]) > 2) velocities[ix + 2] *= -1;
    }
    posAttr.needsUpdate = true;

    // Draw connection lines
    let lineIndex = 0;
    for (let i = 0; i < PARTICLE_COUNT && lineIndex < maxLineVertices * 3 - 6; i++) {
      for (let j = i + 1; j < PARTICLE_COUNT && lineIndex < maxLineVertices * 3 - 6; j++) {
        const dx = posArr[i * 3] - posArr[j * 3];
        const dy = posArr[i * 3 + 1] - posArr[j * 3 + 1];
        const dz = posArr[i * 3 + 2] - posArr[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < CONNECTION_DISTANCE) {
          linePositions[lineIndex++] = posArr[i * 3];
          linePositions[lineIndex++] = posArr[i * 3 + 1];
          linePositions[lineIndex++] = posArr[i * 3 + 2];
          linePositions[lineIndex++] = posArr[j * 3];
          linePositions[lineIndex++] = posArr[j * 3 + 1];
          linePositions[lineIndex++] = posArr[j * 3 + 2];
        }
      }
    }

    const lineGeom = linesRef.current.geometry;
    const lineAttr = lineGeom.attributes.position as THREE.BufferAttribute;
    lineAttr.needsUpdate = true;
    lineGeom.setDrawRange(0, lineIndex / 3);
  });

  return (
    <>
      <points ref={pointsRef}>
        <bufferGeometry />
        <pointsMaterial
          color="#06b6d4"
          size={0.04}
          transparent
          opacity={0.7}
          sizeAttenuation
        />
      </points>

      <lineSegments ref={linesRef}>
        <bufferGeometry />
        <lineBasicMaterial color="#06b6d4" transparent opacity={0.12} />
      </lineSegments>
    </>
  );
}

/* ── Labeled floating nodes ── */
function LabelNode({
  position,
  delay,
}: {
  position: [number, number, number];
  label: string;
  delay: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const time = useRef(delay);

  useFrame((_, delta) => {
    time.current += delta;
    if (meshRef.current) {
      meshRef.current.position.y =
        position[1] + Math.sin(time.current * 0.8) * 0.15;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.12, 16, 16]} />
      <meshBasicMaterial color="#06b6d4" transparent opacity={0.9} />
      <pointLight
        color="#06b6d4"
        intensity={0.3}
        distance={2}
        position={[0, 0, 0]}
      />
    </mesh>
  );
}

/* ── Flow edges between nodes ── */
function FlowEdge({
  start,
  end,
}: {
  start: [number, number, number];
  end: [number, number, number];
}) {
  const groupRef = useRef<THREE.Group>(null);

  useEffect(() => {
    if (!groupRef.current) return;
    const geom = new THREE.BufferGeometry();
    geom.setFromPoints([
      new THREE.Vector3(...start),
      new THREE.Vector3(...end),
    ]);
    const mat = new THREE.LineBasicMaterial({
      color: '#3b82f6',
      transparent: true,
      opacity: 0.35,
    });
    const line = new THREE.Line(geom, mat);
    groupRef.current.add(line);

    return () => {
      groupRef.current?.remove(line);
      geom.dispose();
      mat.dispose();
    };
  }, [start, end]);

  return <group ref={groupRef} />;
}

/* ── Main canvas ── */
export default function HeroCanvas() {
  return (
    <div className="absolute inset-0 z-0" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        gl={{
          antialias: false,
          alpha: true,
          depth: false,
          powerPreference: 'low-power',
        }}
        dpr={[1, 1.5]}
        style={{ background: 'transparent' }}
      >
        <NetworkParticles />
        <LabelNode position={[-3, 0.5, 0]} label="Data" delay={0} />
        <LabelNode position={[0, -0.3, 0]} label="Backend" delay={1} />
        <LabelNode position={[3, 0.5, 0]} label="Cloud" delay={2} />
        <FlowEdge start={[-3, 0.5, 0]} end={[0, -0.3, 0]} />
        <FlowEdge start={[0, -0.3, 0]} end={[3, 0.5, 0]} />
      </Canvas>

      {/* HTML overlay labels */}
      <div className="absolute inset-0 pointer-events-none">
        <span className="absolute left-[20%] top-[45%] text-xs font-mono text-accent-cyan/60 -translate-x-1/2">
          Data
        </span>
        <span className="absolute left-1/2 top-[55%] text-xs font-mono text-accent-cyan/60 -translate-x-1/2">
          Backend
        </span>
        <span className="absolute left-[80%] top-[45%] text-xs font-mono text-accent-cyan/60 -translate-x-1/2">
          Cloud
        </span>
      </div>
    </div>
  );
}
