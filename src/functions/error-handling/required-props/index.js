export function isRequired(component, prop) {
  throw new Error(`The ${component} component requires ${prop} as a prop.`);
}
