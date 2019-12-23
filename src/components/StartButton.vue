<template>
  <button
    class="StartButton"
    @click="startGame()">
    {{ $t('components.start-button.start') }}
  </button>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import pages from '@/constants/pages'

@Component({})
export default class StartButton extends Vue {
  protected startGame () {
    this.$router.push(pages.QUESTIONS_PATH)
  }
}
</script>
