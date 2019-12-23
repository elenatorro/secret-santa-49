<template>
  <div class="GameOverView ss-page">
    <GameOver
      :selectedSecretSanta="selectedSecretSanta"
      :selectedFriend="selectedFriend"
      :selectedPresent="selectedPresent"
      :error="error"/>
    <GameBoard />
    <RestartButton class="ss_Button ss_PrimaryButton" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import FriendList from '@/components/FriendList.vue'
import RestartButton from '@/components/RestartButton.vue'
import GameOver from '@/components/GameOver.vue'
import GameBoard from '@/components/GameBoard.vue'

@Component({
  components: {
    GameOver,
    GameBoard,
    RestartButton
  }
})
export default class GameOverView extends Vue {
  get selectedFriend () {
    return this.$store.getters['selectedFriend']
  }

  get selectedPresent () {
    return this.$store.getters['selectedPresent']
  }

  get selectedSecretSanta () {
    return this.$store.getters['selectedSecretSanta']
  }

  get error () {
    return this.$store.getters['error']
  }
}
</script>
<style scoped lang="scss">
.GameOverView {
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    max-width: 200px;
  }
}
</style>
