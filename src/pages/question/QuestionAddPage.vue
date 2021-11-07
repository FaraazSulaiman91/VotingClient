<template>
  <div id="question-add">
    <input name="title" type="text" size="50" v-model="title" placeholder="Enter the full question"/>
    <br>
    <button name="add" v-on:click="add()">Add</button>
    <button name="add" v-on:click="back()">Back</button>
  </div>
</template>

<script>
const { QUESTION_CREATE } = require('@/pages/question/api/QuestionAPI');
export default {
  name: 'QuestionAddPage',
  data: function ()
  {
    return {
      title: ''
    };
  },
  methods: {
    add: function ()
    {
      let sessionCode = this.$store.getters['session/getSessionCode'];
      QUESTION_CREATE(this.title, sessionCode).then((rsp) =>
      {
        if (rsp.data)
          this.$router.push('/' + sessionCode)
      });
    },
    back: function ()
    {
      let sessionCode = this.$store.getters['session/getSessionCode'];
      this.$router.push('/' + sessionCode)
    }
  }
}
</script>

<style scoped>

</style>