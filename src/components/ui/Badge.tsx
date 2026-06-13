interface BadgeProps {
  label: string;
  variant?: 'cyan' | 'blue' | 'muted';
}

export default function Badge({ label, variant = 'cyan' }: BadgeProps) {
  const variantClasses = {
    cyan: 'badge-advanced',
    blue: 'badge-proficient',
    muted: 'badge-familiar',
  };

  return (
    <span
      className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium ${variantClasses[variant]}`}
    >
      {label}
    </span>
  );
}
