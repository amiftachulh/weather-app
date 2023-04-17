export function capitalizeEachWords(text) {
  return text
    .split(' ')
    .map((t) => t[0].toUpperCase() + t.substring(1))
    .join(' ');
}

export function isInRange(value, min, max) {
  return value >= min && value <= max;
}