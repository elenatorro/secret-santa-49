<template>
  <section class="QuestionButtons">
    <button
      class="QuestionButton ss_Button ss_PrimaryButton"
      @click="goToSolve()">
      {{ $t(`components.question-button.resolve`) }}
    </button>
    <button
      class="QuestionButton ss_Button ss_PrimaryButton"
      @click="askQuestion()">
      {{ $t(`components.question-button.hint`) }}
    </button>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import pages from '@/constants/pages'

@Component({})
export default class QuestionButton extends Vue {
  protected askQuestion () {
    this.$store.dispatch('askQuestion')
  }

  protected goToSolve () {
    this.$router.push(pages.SOLVE_PATH)
  }
}
</script>
<style scoped lang="scss">
.QuestionButtons {
  display: flex;
}

.QuestionButton {
  margin: 0.5em;
}
</style>
