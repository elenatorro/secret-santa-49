<template>
  <button
    class="InstructionsButton"
    @click="goToInstructions()">
    {{ $t('components.instructions-button.instructions') }}
  </button>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import pages from '@/constants/pages'

@Component({})
export default class InstructionsButton extends Vue {
  protected goToInstructions () {
    this.$router.push(pages.INSTRUCTIONS_VIEW)
  }
}
</script>
