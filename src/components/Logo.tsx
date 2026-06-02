/**
 * 1st Law — official brand logo (gold, transparent PNG).
 *  - "compact" → wordmark "1ˢᵗ LAW" (navbar)
 *  - "full"    → complete lockup w/ tagline + columns (footer)
 */
export default function Logo({
  variant = "compact",
  className = "",
}: {
  variant?: "full" | "compact";
  className?: string;
}) {
  const src = variant === "full" ? "/logo.png" : "/logo-wordmark.png";
  const alt = "1st Law — Legal Practitioners / Consultants";

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={className}
      style={{ width: "auto", display: "block" }}
    />
  );
}
