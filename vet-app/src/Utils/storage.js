export function setItem(key, data) {
  return localStorage.setItem(key, data);
}

export function getItem(key) {
  return localStorage.getItem(key);
}

export function removeItem(key) {
  return localStorage.removeItem(key);
}
