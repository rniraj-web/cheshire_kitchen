const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

// Wraps a data fetch so a slow/unreachable API degrades to an empty state
// instead of crashing page rendering.
export async function safe(promise, fallback) {
  try {
    return await promise;
  } catch (err) {
    console.error(err);
    return fallback;
  }
}

async function request(path, options = {}) {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.message || `Request to ${path} failed with ${res.status}`);
  }

  if (res.status === 204) return null;
  return res.json();
}

export function getRanges(type) {
  const query = type ? `?type=${type}` : "";
  return request(`/api/ranges${query}`, { next: { revalidate: 3600 } });
}

export function getGalleryProjects() {
  return request("/api/gallery", { next: { revalidate: 3600 } });
}

export function getBlogPosts() {
  return request("/api/blog", { next: { revalidate: 3600 } });
}

export function getBlogPost(slug) {
  return request(`/api/blog/${slug}`, { next: { revalidate: 3600 } });
}

export function submitEnquiry(data) {
  return request("/api/enquiries", { method: "POST", body: JSON.stringify(data) });
}

export function adminLogin(email, password) {
  return request("/api/admin/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
}

function authHeaders(token) {
  return { Authorization: `Bearer ${token}` };
}

export function adminList(resource, token) {
  return request(`/api/admin/${resource}`, { headers: authHeaders(token) });
}

export function adminCreate(resource, token, data) {
  return request(`/api/admin/${resource}`, {
    method: "POST",
    headers: authHeaders(token),
    body: JSON.stringify(data),
  });
}

export function adminUpdate(resource, token, id, data) {
  return request(`/api/admin/${resource}/${id}`, {
    method: "PUT",
    headers: authHeaders(token),
    body: JSON.stringify(data),
  });
}

export function adminDelete(resource, token, id) {
  return request(`/api/admin/${resource}/${id}`, {
    method: "DELETE",
    headers: authHeaders(token),
  });
}

export async function adminUploadImage(token, file) {
  const formData = new FormData();
  formData.append("image", file);

  const res = await fetch(`${API_BASE_URL}/api/admin/upload`, {
    method: "POST",
    headers: authHeaders(token),
    body: formData,
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.message || "Upload failed");
  }

  return res.json();
}

export function adminGetEnquiries(token) {
  return request("/api/admin/enquiries", { headers: authHeaders(token) });
}

export function resolveImageUrl(url) {
  if (!url) return url;
  if (url.startsWith("http")) return url;
  return `${API_BASE_URL}${url}`;
}
