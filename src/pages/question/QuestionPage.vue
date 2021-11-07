<template>
  <div id="question-page">
    <div>
      Session Id: {{ sessionId }}
      Session Type: {{ sessionType }}
    </div>
    <table>
      <tr>
        <th>Id</th>
        <th>Title</th>
<!--        <th>Action</th>-->
      </tr>
      <tr v-for="question in questions" :key="question.id">
        <td>{{ question.id }}</td>
        <td>{{ question.title }}</td>
        <!--        <td>-->
        <!--          <button name="openQuestion" v-on:onclick="openQuestion(question.id)">Open</button>-->
        <!--        </td>-->
      </tr>
    </table>
    <div>
      <button v-if="canAddQuestion()" v-on:click="addQuestion()">Add</button>
      <button v-on:click="goHome()">Home</button>
    </div>
  </div>
</template>

<script>

import { QUESTION_GET_ALL } from '@/pages/question/api/QuestionAPI';

export default {
  name: 'QuestionPage',
  data: function ()
  {
    return {
      questions: [],
      sessionType: 'Unknown',
      sessionId: 0
    }
  },
  methods: {
    addQuestion()
    {
      this.$router.push('/' + this.sessionId + '/question/add');
    },
    // openQuestion(questionId)
    // {
    //   this.$router.push('/' + this.sessionId + '/question/view/' + questionId);
    // },
    goHome()
    {
      this.$store.commit('session/resetSessionCode')
      this.$router.push('/');
    },
    canAddQuestion()
    {
      return this.$store.getters['session/isMasterConnTypeId'];
    }
  },
  created: function ()
  {
    this.sessionId = this.$store.getters['session/getSessionCode'];
    QUESTION_GET_ALL(this.sessionId).then((rsp) =>
    {
      if (rsp.data)
        this.questions = rsp.data;
    });

    this.sessionType = this.$store.getters['session/displayConnType'];
  }
}
</script>

<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>