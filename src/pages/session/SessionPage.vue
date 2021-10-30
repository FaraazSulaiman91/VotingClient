<template>
  <div id="session-page">
    <button v-on:click="createSession()">Create Session</button>
    <span> OR </span>
    <button v-on:click="joinSession()">Join Session</button>
    <input name="existingSession" placeholder="Enter Session ID">
  </div>
</template>

<script>
import SessionAPIUtil from '@/pages/session/api/SessionAPIUtil';

export default {
  name: 'SessionPage',
  methods: {
    createSession(){
        SessionAPIUtil.CREATE
    },
    joinSession(){

    }
  }
}
</script>

<style scoped>

</style>