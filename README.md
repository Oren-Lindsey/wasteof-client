## Edit: this is not the actual source of it, its a few commits behind and has bugs. I'm too lazy to merge the actual source
# wasteof-client
wasteof-client is an npm package for wasteof.money.
# Installation
In the shell, run `npm install wasteof-client`
# Quickstart
```
const WasteOfSession = require("wasteof-client")
const pass = "password"

let wasteof = new WasteOfSession("jeffalo", pass)
wasteof.login()
  .then(async function() {
    await wasteof.post("aaa", null)
  })
```
# Docs
For the docs, please visit the wiki
