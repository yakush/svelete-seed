/**
 * this is a fix for rollup-plugin-dotenv
 * problem : in case of no environment variables found - an empty object will be passed to the replace plugin...
 * this will unfortunately crash the build process....
 * fix : this wrapper will skip the rollup-plugin-dotenv if necessary. (return null) 
 */
const fs = require('fs');
const path = require('path');
const glob = require('glob');
const dotenv = require('dotenv');
const dotenvPlugin = require("rollup-plugin-dotenv").default;

const withDefaults = ({ cwd = ".", envKey = "NODE_ENV" } = {}) => ({
  cwd: path.resolve(process.cwd(), cwd),
  envKey
});

export default function (inputOptions) {
  const _withDefaults = withDefaults(inputOptions);
  const cwd = _withDefaults.cwd;
  const envKey = _withDefaults.envKey;

  //collect relevant .env files and their content:
  const envFiles = [
    ...glob.sync(path.resolve(cwd, ".env")),
    ...glob.sync(path.resolve(`.env.${process.env[envKey]}*`))
  ];
  const envVars = envFiles
    .map(file => fs.readFileSync(file))
    .map(fileContent => dotenv.parse(fileContent))
    .reduce((acc, vars) => ({ ...acc, ...vars }), {});
  const envVarsKeys = Object.keys(envVars);

  if (envVarsKeys.length === 0) {
    console.log(".env file/s empty or not found. skipping dot-env plugin");
    return null;
  } else {
    return dotenvPlugin(inputOptions);
  }
}
