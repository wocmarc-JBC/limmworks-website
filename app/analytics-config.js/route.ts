export const dynamic = "force-dynamic";

export function GET() {
  const tagId = process.env.GOOGLE_TAG_ID?.trim() || "G-CZNHKGLLT3";
  const isSupportedTag = tagId && /^(G|GT|AW|DC)-[A-Z0-9]+$/i.test(tagId);
  const source = isSupportedTag
    ? `window.dataLayer=window.dataLayer||[];window.gtag=window.gtag||function(){window.dataLayer.push(arguments)};window.gtag("js",new Date());window.gtag("config",${JSON.stringify(tagId)});var s=document.createElement("script");s.async=true;s.src="https://www.googletagmanager.com/gtag/js?id="+encodeURIComponent(${JSON.stringify(tagId)});document.head.appendChild(s);`
    : "/* Google tag not configured. */";

  return new Response(source, {
    headers: {
      "content-type": "application/javascript; charset=utf-8",
      "cache-control": "public, max-age=300",
      "x-content-type-options": "nosniff",
    },
  });
}
