import Image from "next/image";
import Link from "next/link";
import { brandAssets } from "@/data/assets";
import { siteConfig } from "@/data/site";
import { getExistingPublicAsset } from "@/lib/public-assets";

export function SiteLogo() {
  const officialIcon = getExistingPublicAsset(brandAssets.icon);

  return (
    <Link className="flex min-w-0 items-center gap-3" href="/">
      {officialIcon ? (
        <Image
          alt=""
          aria-hidden="true"
          className="h-11 w-10 shrink-0 object-contain sm:h-12 sm:w-11"
          height={52}
          priority
          src={officialIcon}
          width={47}
        />
      ) : (
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[var(--limm-ink)] text-sm font-semibold text-white">
          LW
        </span>
      )}
      <span className="min-w-0">
        <span className="block truncate text-base font-semibold text-[var(--limm-ink)]">
          {siteConfig.shortName}
        </span>
        <span className="hidden text-xs text-[var(--limm-muted)] sm:block">
          Pte Ltd
        </span>
      </span>
    </Link>
  );
}
