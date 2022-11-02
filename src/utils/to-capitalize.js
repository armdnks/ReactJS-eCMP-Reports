export default function toCapitalize(string) {
  return string.trim().replace(/(\b[\w](?!\s))/g, (c) => c.toUpperCase());
}
