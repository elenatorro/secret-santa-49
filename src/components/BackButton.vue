<template>
  <button
    class="BackButton"
    @click="back()">
    {{ $t('components.back-button.back') }}
  </button>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class BackButton extends Vue {
  protected back () {
    this.$router.go(-1)
  }
}
</script>
