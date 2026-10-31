<div align="center">
  <br />
  <p>
    <a href="https://www.npmjs.com/package/rpc-nyrrcly"><img src="https://img.shields.io/npm/v/rpc-nyrrcly.svg?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/rpc-nyrrcly"><img src="https://img.shields.io/npm/dt/rpc-nyrrcly.svg?maxAge=3600" alt="NPM downloads" /></a>
  </p>
  <p>
    <a href="https://nodei.co/npm/rpc-nyrrcly/"><img src="https://nodei.co/npm/rpc-nyrrcly.png?downloads=true&stars=true" alt="NPM info" /></a>
  </p>
</div>

# Discord.js RPC Extension (FORK OF [DISCORD.JS RPC](https://github.com/discordjs/RPC))

### [Documentation](https://discord.js.org/#/docs/rpc/)

### [Rich Presence Example](https://github.com/discordjs/RPC/blob/master/example)

### __Browser__ Example

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
