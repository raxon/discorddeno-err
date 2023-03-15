

import { createRestManager } from '@discordeno/rest'

const REST = createRestManager({
  // YOUR BOT TOKEN HERE
  token: "process.env.TOKEN",
})

console.log(REST)


