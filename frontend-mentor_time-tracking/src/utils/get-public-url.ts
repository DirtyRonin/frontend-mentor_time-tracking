export function getPublicUrl(url: string) {
  return `${process.env.PUBLIC_URL || ''}${url}`;
}
