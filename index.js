// const R = require('ramda')
import * as path from "https://deno.land/std@0.83.0/path/mod.ts";
import { Settings } from './lib/settings.js'

const defaultSettingsPath = path.join(Deno.cwd(), 'data/config.json');

const conf = ((path = defaultSettingsPath) => new Settings(path))()

export { conf }
