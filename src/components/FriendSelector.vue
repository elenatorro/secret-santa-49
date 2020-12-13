<template>
  <section class="FriendSelector">

    <section class="FriendSelector__SelectedFriend" v-if="selectedFriend">
      <CategoryMedia class="FriendSelected_Image" :category="selectedFriend" type="friend"/>
      <CategoryMedia class="FriendSelected_Image" :category="selectedPresent" type="present" />
      <h3>
        {{ $t(`components.friend-selector.hello`, { selectedFriend })}}
        {{ $t(`components.friend-selector.present`) }}
        {{ $t(`questions.placeholders.present.${selectedPresent}`)}}
      </h3>
    </section>

    <section class="FriendSelector__Buttons" v-if="!selectedFriend">
      <h3>{{ $t(`components.friend-selector.question`) }}</h3>

      <FriendList :friends="friends" @friendClicked="onFriendClicked"/>

      <h3>{{ $t(`components.level-selector.friends-number`) }}</h3>

      <LevelOptions @levelClicked="onLevelClicked" />

      <button
        class="ss_Button ss_PrimaryButton"
        @click="onStartClicked">
        {{ $t(`components.play-button.play`) }}
      </button>

      <BackButton class="ss_Button ss_PrimaryButton" />
    </section>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { EFriend, friends } from '@/types/categories/friend'
import CategoryMedia from '@/components/media/CategoryMedia.vue'
import FriendList from '@/components/FriendList.vue'
import BackButton from '@/components/BackButton.vue'
import LevelOptions from '@/components/LevelOptions.vue'

@Component({
  components: {
    FriendList,
    LevelOptions,
    CategoryMedia,
    BackButton
  }
})
export default class FriendSelector extends Vue {
  protected friends: Array<EFriend> = friends
  protected friend: EFriend = EFriend.Alice
  protected level: Number = 7

  get selectedFriend () {
    return this.$store.getters['selectedFriend']
  }

  get selectedPresent () {
    return this.$store.getters['selectedPresent']
  }

  protected onFriendClicked (friend: EFriend) {
    this.friend = friend
  }

  protected onLevelClicked (level: Number) {
    this.level = level
  }

  protected onStartClicked () {
    this.$store.dispatch('init', {
      selectedFriend: this.friend,
      selectedLevel: this.level
    })
  }
}
</script>
<style scoped lang="scss">
.FriendSelector__SelectedFriend {
  display: flex;
  align-items: center;

  h3 {
    font-size: 18px;
    padding-left: 12px;
  }
}

.FriendButton_Image {
  width: 60%;
}

.FriendSelected_Image {
  min-width: 48px;
  min-height: 48px;
  max-width: 48px;
  max-height: 48px;
}

.FriendSelector__Buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.FriendSelector__ButtonList {
  display: flex;
  box-sizing: border-box;
  flex-wrap: wrap;
  justify-content: center;
  margin: 4em 0;

  button {
    margin: 0.5em;
  }
}

.ss_Button {
  margin: .5em 0;
}
</style>
