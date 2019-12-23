<template>
  <div class="InstructionsView ss-page">
    <header class="ss-page__header">
      <h2>{{ $t('views.instructions.title') }}</h2>
      <p>{{ $t('views.instructions.subtitle') }}</p>
      <BackButton class="ss_Button ss_PrimaryButton" />
    </header>
    <section class="InstructionsView__Text">
      <p>{{ $t('views.instructions.sentence1') }}</p>
      <p>{{ $t('views.instructions.sentence2') }}</p>
      <p>{{ $t('views.instructions.sentence3') }}</p>
      <p>{{ $t('views.instructions.sentence4') }}</p>
      <p>{{ $t('views.instructions.sentence5') }}</p>
      <p>{{ $t('views.instructions.sentence6') }}</p>
      <p>{{ $t('views.instructions.sentence7') }}</p>
      <p>{{ $t('views.instructions.sentence8') }}</p>
      <p>{{ $t('views.instructions.sentence9') }}</p>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import BackButton from '@/components/BackButton.vue'

@Component({
  components: {
    BackButton
  }
})
export default class InstructionsView extends Vue {}
</script>
<style scoped lang="scss">
.InstructionsView {
  padding: 0 1em;
  display: flex;
  flex-direction: column;
}

.InstructionsView__Text {
  padding: 1em 2em;
  background-color: white;
  border-radius: 20px;
  margin-bottom: 2em;
}

p {
  margin: 12px 0;
  line-height: 24px;
}

.BackButton {
  width: 120px;
  margin: 0 auto;
}
</style>
