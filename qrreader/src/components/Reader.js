import net from 'net'

export default {
  data() {
    return {
      ip: '192.168.1.100',
      port: '9004',
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



