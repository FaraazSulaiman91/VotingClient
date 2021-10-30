<template>
  <div id="question-page">
    <input v-model:questionName>{{ questionName }}<input/>
    <ul id="example-1">
      <li v-for="option in options" :key="option.name">
        {{ option.name }}
      </li>
    </ul>
    <input name="NewOption" placeholder="Capture New Option" v-model:newOption> <input/>
    <button v-on:click="addOption()">Add</button>
    <button v-on:click="publishQuestion()">Publish</button>
  </div>
</template>

<script>

import QuestionAPIUtil from '@/pages/question/api/QuestionAPIUtil';

export default {
  name: 'QuestionPage',
  data: {
    newOption: null,
    questionName: 'What is the best programming language?',
    options: [
      {
        name: 'Java'
      },
      {
        name: 'Kotlin'
      },
      {
        name: 'SQL'
      }
    ]
  },
  methods: {
    addOption()
    {
      if (this.newOption !== null)
      {
        let option = { name: this.newOption }
        this.options.push(option);
        this.newOption = null;
      }
    },
    publishQuestion()
    {
      QuestionAPIUtil.CREATE(this.questionName, this.options)
    }
  }
}
</script>

<style scoped>

</style>