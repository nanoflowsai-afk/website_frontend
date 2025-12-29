const rawApiBase =
  import.meta.env.VITE_API_BASE_URL?.replace(/\/+$/, "") || "http://localhost:5001";

export const API_BASE_URL = rawApiBase;

export async function apiFetch(path: string, options: RequestInit = {}) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const url = `${API_BASE_URL}${normalizedPath}`;

  const headers = new Headers(options.headers);
  const token = typeof window !== "undefined" ? localStorage.getItem("nano_admin_token") : null;

  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  return fetch(url, {
    ...options,
    headers,
  });
}

export const userApi = {
  getRegistrations: async () => {
    const res = await apiFetch('/user/registrations');
    if (!res.ok) {
      console.error("Failed to fetch registrations", await res.text());
      return { data: { registrations: [] } }; // Fallback or throw
    }
    const data = await res.json();
    return { data }; // Mimic Axios structure
  }
};
