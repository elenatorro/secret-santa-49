<template>
  <section class="GameOver">
    <section class="GameOver--win ss-page__header" v-if="!error">
      <h3>{{ $t('components.game-over.congrats-header', { friend: selectedFriend }) }}</h3>
      <p>{{ $t('components.game-over.congrats-message', { secretSanta: selectedSecretSanta }) }}</p>
    </section>

    <section class="GameOver--error ss-page__header" v-if="error">
      <h3>{{ $t('components.game-over.error-header') }}</h3>
      <p>{{ $t('components.game-over.error-message', { friend: selectedFriend, secretSanta: selectedSecretSanta }) }}</p>
    </section>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import pages from '@/constants/pages'
import { EFriend } from '@/types/categories/friend'
import { EPresent } from '@/types/categories/present'

@Component({})
export default class GameOver extends Vue {
  @Prop(String) selectedFriend!: EFriend
  @Prop(String) selectedSecretSanta!: EFriend
  @Prop(String) selectedPresent!: EPresent
  @Prop(Boolean) error!: boolean
}
</script>
<style scoped lang="scss">
.GameOver {
  h3 {
    margin-bottom: 12px;
  }
}
</style>
