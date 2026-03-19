export function getSiteUrl() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    getVercelUrl(process.env.VERCEL_PROJECT_PRODUCTION_URL) ||
    getVercelUrl(process.env.VERCEL_URL) ||
    "http://localhost:3000";

  return siteUrl.endsWith("/") ? siteUrl.slice(0, -1) : siteUrl;
}

function getVercelUrl(value) {
  if (!value) {
    return "";
  }

  if (value.startsWith("http://") || value.startsWith("https://")) {
    return value;
  }

  return `https://${value}`;
}
