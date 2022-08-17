# TCP-Raw-Socket-with-Vue-and-Electron

Add the following lines in Vue.config.js

```javascript
module.exports = {
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true
    }
  }
}
```
![alt text](https://miro.medium.com/max/700/1*4pWcETXh9UJIrB21J_yvJg.png "Vue.config.js")

my vue.config.js
In Background.js enable node integration, the true and false states are taken from env variable

```javascript
function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({ width: 800, height: 600, webPreferences: {
    // Use pluginOptions.nodeIntegration, leave this alone
    // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
    nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION
  } })
  
  ```
  
  ![alt text]( https://miro.medium.com/max/700/1*_hbRZnUYE1lJna0hQZcYuA.png "VuBackground.js ")


my background.js
Create a new js file and name it reader.js and add following codes, change the IP address or changes to localhost for testing with a local server
```javascript
import net from 'net'

export default {
  data() {
    return {
      ip: '192.168.1.118',
      port: '8085',
      message: 'test message',
      socket: null
    }
  },
  mounted() {
    const socket = new net.Socket()
    this.socket = socket
    socket.on('data', (data) => console.log(data.toString()))
  },
  methods: {
    connect() {
      this.socket.connect(this.port, this.ip)
    },
    sendMessage() {
      this.socket.write(this.message)
    }
  }
}

```
 ![alt text](https://miro.medium.com/max/700/1*iRmnwf5RtrwUp_F-1UYXBA.png "background.js")



my reader.js
Add new vue file in your project and name it whatever you want for me I called it client.vue and added the following code, and you can notice that I am importing reader.js in the script.

```javascript
<template>
  <div>
    ip:
    <input type="text" v-model="ip" />
    port:
    <input type="text" v-model="port" />
    <button @click="connect">connect</button>
    message:
    <input type="text" v-model="message" />
    <button @click="sendMessage">send</button>
  </div>
</template>

<script src="./Reader.js">
export default {
  name: 'reader',
  props: {
    msg: String
  }
}
</script>

```


At this stage, everything ready to receive and send data with the TCP server; we need a test server to test our code.

Here is my server code in js run with node

```javascript
const net = require('net')

const server = new net.Server()
server.listen(8085)
server.on('connection', (client) => {
  client.on('data', (data) => console.log(data.toString()))
  client.write('hello from server')
})

```


start the electron serve and TCP server with node, for me like in the following picture

 ![alt text](https://miro.medium.com/max/700/1*v6OZ6jId0uZzu8K6KvqcQw.png "background.js")

left-hand side electron and the right-hand side is TCP server
Click connect and start sending messages to the TCP server. Happy Coding :)

you can clone the whole project from git repo
