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