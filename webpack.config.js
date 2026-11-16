import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  mode: 'production',
  entry: require.resolve('.'),
  output: {
    path: __dirname,
    filename: 'browser.js',
    library: {
      name: 'RPC',
      type: 'umd',
    },
  },
};
