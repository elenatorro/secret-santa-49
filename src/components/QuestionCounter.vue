<template>
  <div class="QuestionCounter">
      {{questionCounterInfo}}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class QuestionCounter extends Vue {
  @Prop(Array) public askedQuestionsList!: Array<String>

  get questionCounterInfo () {
    const maxQuestions = this.$store.getters['maxQuestions']
    const countQuestions = this.askedQuestionsList ? this.askedQuestionsList.length : 0
    return `${this.askedQuestionsList.length} / ${maxQuestions}`
  }
}
</script>
<style scoped lang="scss">
.QuestionCounter {
  position: absolute;
  background-color: white;
  padding: .5em 1.5em;
  left: .5em;
  top: 5.5em;
  border-bottom: 4px solid var(--ss--secondary-color);
  border-right: 4px solid var(--ss--secondary-color);
}
</style>
