# wasteof-client
wasteof-client is an npm package for wasteof.money.
# Installation
In the shell, run `npm install wasteof-client`
# Quickstart
```
const WasteOfSession = require("wasteof-client")
const pass = "password"

let wasteof = new wasteofclient("jeffalo", pass)
wasteof.login()
  .then(data => {
    wasteof.post("aaa", null)
  })
```
# Docs
For the docs, please visit the wiki