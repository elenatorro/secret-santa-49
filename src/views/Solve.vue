<template>
  <div class="SolveView ss-page">
    <header class="ss-page__header">
      <CategoryMedia class="FriendSelected_Image"
        type="friend"
        :category='selectedFriend'/>
      <h3>{{ $t('views.solve.question') }}</h3>
    </header>

    <FriendList
      @friendClicked="onFriendClicked"
      :friends="friendList"/>

    <BackButton class="ss_Button ss_PrimaryButton" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import FriendList from '@/components/FriendList.vue'
import CategoryMedia from '@/components/media/CategoryMedia.vue'
import BackButton from '@/components/BackButton.vue'
import pages from '@/constants/pages'
import { EFriend, friends } from '@/types/categories/friend'

@Component({
  components: {
    FriendList,
    CategoryMedia,
    BackButton
  }
})
export default class SolveView extends Vue {
  protected friends = friends

  get selectedFriend () {
    return this.$store.getters['selectedFriend']
  }

  get friendList () {
    return this.friends.filter((f) => f !== this.selectedFriend)
  }

  protected onFriendClicked (friend: EFriend) {
    this.$store.dispatch('solve', friend)
    this.$router.push(pages.GAME_OVER_PATH)
  }
}
</script>
<style scoped lang="scss">
.SolveView {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
