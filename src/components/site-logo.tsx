import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import Link from "next/link";
import { brandAssets } from "@/data/assets";

function getExistingBrandAsset(src: string) {
  const publicPath = join(process.cwd(), "public", src.replace(/^\//, ""));

  return existsSync(publicPath) ? src : null;
}

export function SiteLogo() {
  const officialLogo = getExistingBrandAsset(brandAssets.logoDark);
  const officialIcon = getExistingBrandAsset(brandAssets.icon);

  return (
    <Link className="flex min-w-0 items-center gap-3" href="/">
      {officialLogo ? (
        <Image
          alt="LIMM Works"
          className="h-10 w-auto shrink-0 object-contain"
          height={40}
          priority
          src={officialLogo}
          width={180}
        />
      ) : officialIcon ? (
        <Image
          alt="LIMM Works"
          className="h-10 w-10 shrink-0 rounded-md object-contain"
          height={40}
          src={officialIcon ?? brandAssets.icon}
          width={40}
        />
      ) : (
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[var(--limm-ink)] text-sm font-semibold text-white">
          LW
        </span>
      )}
      <span className="min-w-0">
        <span className="block truncate text-base font-semibold text-[var(--limm-ink)]">
          LIMM Works
        </span>
        <span className="hidden text-xs text-[var(--limm-muted)] sm:block">
          Pte Ltd
        </span>
      </span>
    </Link>
  );
}
