<template>
  <div id="question-add">
    <input name="title" type="text" v-model="title" placeholder="Enter the full question"/>
    <button name="add" v-on:click="add()">Add</button>
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
      QUESTION_CREATE(this.title, this.$store.getters['session/getSessionCode']).then((rsp) =>
      {
        if (rsp.data)
          this.$router.push('/question')
      });
    }
  }
}
</script>

<style scoped>

</style>