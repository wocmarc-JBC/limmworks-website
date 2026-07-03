import { existsSync } from "node:fs";
import { join } from "node:path";

export function getExistingPublicAsset(src: string) {
  const publicPath = join(process.cwd(), "public", src.replace(/^\//, ""));

  return existsSync(publicPath) ? src : null;
}
