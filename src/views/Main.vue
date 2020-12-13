<template>
  <div class="MainView ss-page ss-u-background-stripes-pattern-secondary">
    <div class="MainView__Title">
      <h1><span>Secret</span><span>Santa</span><span>49</span></h1>
    </div>

    <section class="MainView__Buttons">
      <StartButton class="ss_Button ss_PrimaryButton" />
      <InstructionsButton class="ss_Button ss_PrimaryButton" />
    </section>

    <LanguageSelector />

    <p>💖 by <a href="https://elenatorro.com">Elena Torró</a> 💖</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import StartButton from '@/components/StartButton.vue'
import InstructionsButton from '@/components/InstructionsButton.vue'
import LanguageSelector from '@/components/LanguageSelector.vue'

@Component({
  components: {
    StartButton,
    InstructionsButton,
    LanguageSelector
  }
})
export default class MainView extends Vue {}
</script>
<style scoped lang="scss">

.MainView {
  align-content: center;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.MainView__Title {
  h1 {
    color: var(--ss--white-color);
    font-size: 64px;
    text-align: center;
    display: flex;
    flex-direction: column;
  }
}

p {
  color: var(--ss--white-color);
  opacity: 0.8;
  margin: 8px 0;
}

.MainView__Buttons {
  align-items: self-start;
  display: flex;
  flex-direction: column;
  min-height: 32vh;
  justify-content: center;
  justify-content: space-around;
  margin: 28px 0;
}
</style>
