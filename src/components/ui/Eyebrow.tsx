interface EyebrowProps {
  label: string;
}

/** Malá červená značka nad nadpisem sekce, např. "— O MNĚ". Barva je stejná na světlém i tmavém pozadí. */
export default function Eyebrow({ label }: EyebrowProps) {
  return (
    <div className="flex items-center gap-3 mb-6 font-body">
      <div className="h-px w-10 bg-red" />
      <span className="text-xs uppercase tracking-widest font-semibold text-red">{label}</span>
    </div>
  );
}
