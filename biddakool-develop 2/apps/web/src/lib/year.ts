// Next 16 (cache components) blocks raw `new Date()` during prerender; this
// caches the year at build time instead of computing it on every request.
// Shared by the marketing landing and the login page footers.
export async function getYear() {
  "use cache";
  return new Date().getFullYear();
}
