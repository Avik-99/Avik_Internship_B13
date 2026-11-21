import Image from "next/image";
import logo from "@/assets/logo-trn.png";

export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`brand ${compact ? "brand-compact" : ""}`}>
      <Image src={logo} alt="" width={150} height={150} unoptimized />
      <span>
        Biddakool<span className="brand-tagline">Empowering Education</span>
      </span>
    </span>
  );
}
