export function get(p, o) {
  return p.reduce((xs, x) =>
    (xs && xs[x]) ? xs[x] : null, o);
}

export function getPath(root, path) {
  const pathArray = path.split(".");
  return get(pathArray, root);
}
