import Client from './client.js';
import { registerProtocol } from './util.js';

function register(id) {
  return registerProtocol(`discord-${id}`);
}

export {
  Client,
  register,
};
