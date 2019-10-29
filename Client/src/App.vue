<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="getHello">Show hello</button>
    <button @click="getByebye">Show goodbye</button>
    <p>{{serverMessage}}</p>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import * as requests from './request';

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data: function() {
    return {
      serverMessage: ""
    }
  },
  methods: {
    getHello() {
      requests.getHello()
        .then(serverReply => {
          this.serverMessage = serverReply.data;
        })
        .catch(wat => {
          // eslint-disable-next-line
          console.error(wat)
        })
    },
    getByebye() {
      requests.getGoodbye()
        .then(serverReply => {
          this.serverMessage = serverReply.data;
        })
        .catch(wat => {
          // eslint-disable-next-line
          console.error(wat)
        })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
