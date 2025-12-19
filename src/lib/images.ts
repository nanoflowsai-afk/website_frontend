// Prefer explicit backend base URL for serving images from /uploads.
// In development, default to the local backend so hero/team/blog images
// are always read from the backend's public/uploads directory.
const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL ?? "http://localhost:5001").replace(/\/+$/, "");

export function normalizeImageUrl(url?: string | null) {
  const placeholderSvg = `<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64'><rect width='100%' height='100%' fill='%23e2e8f0'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%2394a3b8' font-size='18'>N</text></svg>`;
  const placeholder = `data:image/svg+xml;utf8,${placeholderSvg}`;

  if (!url) return placeholder;
  if (/^data:/i.test(url)) return url;

  // Handle external URLs - return as-is
  if (/^https?:\/\//i.test(url)) return url;

  // If starts with /uploads/, prepend API base URL if configured (for separate frontend/backend)
  if (url.startsWith("/uploads/")) {
    if (API_BASE_URL) return `${API_BASE_URL}${url}`;
    // Fallback to current origin on client-side when no API base is set
    if (typeof window !== "undefined") return `${window.location.origin}${url}`;
    return url;
  }

  // If starts with slash, assume it's a public path - return as-is for both SSR and client
  if (url.startsWith("/")) {
    return url;
  }

  // If it looks like a filename with a common image extension, prefix with slash
  if (/\.(jpg|jpeg|png|webp|gif|svg)(\?.*)?$/i.test(url)) {
    return "/" + url.replace(/^\/+/, "");
  }

  // Not a recognizable image URL — return placeholder to avoid 404s
  return placeholder;
}

export const placeholderImage = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64'><rect width='100%' height='100%' fill='%23e2e8f0'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%2394a3b8' font-size='18'>N</text></svg>";
