export function capitalizeEachWords(text) {
  return text
    .split(' ')
    .map((t) => t[0].toUpperCase() + t.substring(1))
    .join(' ');
}

export function isInRange(value, min, max) {
  return value >= min && value <= max;
}

export function getCountryNameByCode(code) {
  try {
    return new Intl.DisplayNames(['en'], { type: 'region' }).of(code);
  } catch (error) {
    return null;
  }
}
