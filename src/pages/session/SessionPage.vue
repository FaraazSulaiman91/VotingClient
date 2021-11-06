<template>
  <div id="session-page">
    <button v-on:click="createSession()">Create Session</button>
    <span> OR </span>
    <button v-on:click="joinSession()">Join Session</button>
    <input name="existingSession" placeholder="Enter Session Code">
  </div>
</template>

<script>
import { SESSION_CREATE, SESSION_JOIN } from '@/pages/session/api/SessionAPI';

export default {
  name: 'SessionPage',
  data()
  {
    return {
      existingSessionCode: 0
    }
  },
  methods: {
    createSession: function ()
    {
      SESSION_CREATE().then((response) =>
      {
        if (response.data)
        {
          this.$store.commit('session/setMasterSessionCode', response.data.code);
          this.$router.push('/question');
        }
      }).catch(err =>
      {
        console.error(err);
      });

    },
    joinSession()
    {
      SESSION_JOIN(this.existingSessionCode).then((response) =>
      {
        if (response.data)
        {
          this.$store.commit('session/setChildSessionCode', response.data.code);
          this.$router.push('/question');
        }
      }).catch((error) =>
      {
        console.log(error);
      });
    }
  }
}
</script>

<style scoped>

</style>