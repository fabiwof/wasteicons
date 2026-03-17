// Single source of truth — read from root package.json at build time
import pkg from "../../../package.json";

export const version: string = pkg.version;
