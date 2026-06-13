interface TagProps {
  label: string;
}

export default function Tag({ label }: TagProps) {
  return (
    <span className="inline-block px-3 py-1 rounded-lg text-xs font-mono bg-bg-secondary text-accent-cyan border border-glass-border">
      {label}
    </span>
  );
}
