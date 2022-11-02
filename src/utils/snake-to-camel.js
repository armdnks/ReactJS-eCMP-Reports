export default function snakeToCamel(json) {
  let output = {};

  Object.keys(json).forEach((key) => {
    const value = json[key];
    const newkey = key.replace(/[-_](\w)/g, (c) => {
      return c.toUpperCase().replace("-", "").replace("_", "");
    });
    output[newkey] = value;
  });

  return output;
}
