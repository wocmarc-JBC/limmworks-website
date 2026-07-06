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
          className="h-12 w-11 shrink-0 object-contain sm:h-14 sm:w-12"
          height={56}
          priority
          src={officialIcon}
          width={52}
        />
      ) : (
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[var(--limm-ink)] text-sm font-semibold text-white">
          LW
        </span>
      )}
      <span className="min-w-0">
        <span className="block truncate text-[1.05rem] font-semibold leading-tight text-[var(--limm-ink)] sm:text-lg">
          {siteConfig.shortName}
        </span>
        <span className="hidden text-xs font-medium text-[var(--limm-muted)] sm:block">
          Pte Ltd
        </span>
      </span>
    </Link>
  );
}
