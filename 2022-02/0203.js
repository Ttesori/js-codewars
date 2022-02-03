function remainder(a, b) {
  if (Math.min(a, b) === 0) return NaN;
  return Math.max(a, b) % Math.min(a, b);
}