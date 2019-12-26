<template>
  <div class="LanguageSelector">
    <select v-model="$i18n.locale">
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
    </select>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class LanguageSelector extends Vue {
  protected data () {
    return { langs: ['en', 'es'] }
  }
}
</script>
