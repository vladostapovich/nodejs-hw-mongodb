import dotenv from 'dotenv';
dotenv.config();

export const env = (name, defaultValue) => {
  console.log(name);
  const value = process.env[name];
  if (value) return value;
  if (defaultValue) return defaultValue;
  throw new Error(`${name} variable doesn't exist`);
};
