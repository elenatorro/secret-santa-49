<template>
  <button
    class="RestartButton"
    @click="restart()">
    {{ $t('components.restart-button.restart') }}
  </button>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import pages from '@/constants/pages'

@Component({})
export default class RestartButton extends Vue {
  protected restart () {
    this.$store.dispatch('reset')
    this.$router.push(pages.MAIN_PATH)
  }
}
</script>
