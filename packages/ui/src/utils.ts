export function range(start: number, end: number) {
  return Array.from({ length: end - start }, (_, k) => k + start);
}
