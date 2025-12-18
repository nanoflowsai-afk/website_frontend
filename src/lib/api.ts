const rawApiBase =
  process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/+$/, "") || "http://localhost:5001";

export const API_BASE_URL = rawApiBase;

/**
 * Joins the configured API base URL (if provided) with a path.
 * Falls back to the relative path so the app still works when the
 * frontend and backend are deployed together.
 */
export function apiUrl(path: string) {
  if (/^https?:\/\//i.test(path)) return path;
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${API_BASE_URL}${normalizedPath}`;
}

/**
 * Thin wrapper around fetch that prefixes the API base URL when needed.
 */
export function apiFetch(input: string, init?: RequestInit) {
  const url = apiUrl(input);
  const token = (typeof window !== "undefined" && localStorage.getItem("nano_admin_token")) || undefined;
  const defaultHeaders: Record<string, string> = token ? { Authorization: `Bearer ${token}` } : {};
  // Ensure headers are merged in a way that preserves the Authorization token
  const mergedHeaders = { ...(init as any)?.headers, ...defaultHeaders };
  const merged: RequestInit = {
    ...init,
    credentials: "include",
    headers: mergedHeaders,
  };
  return fetch(url, merged);
}

