import slugify from "slugify";

export function slug(string) {
  return slugify(string, {
    lower: true,
    trim: true,
    locale: 'tr'
  })
}