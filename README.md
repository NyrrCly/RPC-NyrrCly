<div align="center">
  <br />
  <p>
    <a href="https://www.npmjs.com/package/@nyrrcly/discord-rpc"><img src="https://img.shields.io/npm/v/@nyrrcly/discord-rpc.svg?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/@nyrrcly/discord-rpc"><img src="https://img.shields.io/npm/dt/@nyrrcly/discord-rpc.svg?maxAge=3600" alt="NPM downloads" /></a>
  </p>
  <p>
    <a href="https://nodei.co/npm/@nyrrcly/discord-rpc/"><img src="https://nodei.co/npm/@nyrrcly/discord-rpc.png?downloads=true&stars=true" alt="NPM info" /></a>
  </p>
</div>

# RPC Extension (Fork of [Discord.js RPC](https://github.com/discordjs/RPC))

Rewritten from CommonJS to native ES Modules.
Includes extra features not available in original Discord.js RPC, such as `type`, `largeImageUrl`, `smallImageUrl`, `stateUrl`, and `detailsUrl`.

## [Documentation](https://discord.js.org/#/docs/rpc/)

## [Rich Presence Example](https://github.com/NyrrCly/discord-rpc/tree/master/example)

## __Browser__ Example

```javascript
const clientId = '287406016902594560';
const scopes = ['rpc', 'rpc.api', 'messages.read'];

const client = new RPC.Client({ transport: 'websocket' });

client.on('ready', () => {
  console.log('Logged in as', client.application.name);
  console.log('Authed for user', client.user.username);

  client.selectVoiceChannel('81384788862181376');
});

// Log in to RPC with client id
client.login({ clientId, scopes });
```
