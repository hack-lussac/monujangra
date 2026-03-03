export function sanitizeText(input: string) {
  return input.replace(/[<>"'`;(){}]/g, '').trim();
}

export function sanitizeObject<T extends Record<string, unknown>>(obj: T): T {
  const sanitized = Object.entries(obj).map(([k, v]) => {
    if (typeof v === 'string') return [k, sanitizeText(v)];
    return [k, v];
  });
  return Object.fromEntries(sanitized) as T;
}
