## deprecated
wasteof-client 3.0 will come out very soon, please use that instead. The new source will be at https://github.com/Oren-Lindsey/wasteof-client3
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
