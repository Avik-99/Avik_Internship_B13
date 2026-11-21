// A memory-only UI gate, not authentication. No credentials or identity are retained.
let signedIn = false;
export function hasDemoSession() {
  return signedIn;
}
export function startDemoSession() {
  signedIn = true;
}
export function endDemoSession() {
  signedIn = false;
}
