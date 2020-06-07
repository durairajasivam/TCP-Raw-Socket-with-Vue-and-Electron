const net = require('net')

const server = new net.Server()
server.listen(8085)
server.on('connection', (client) => {
  client.on('data', (data) => console.log(data.toString()))
  client.write('hello from server')
})
