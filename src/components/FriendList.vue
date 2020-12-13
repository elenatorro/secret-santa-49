<template>
  <ul class="FriendList">
    <li v-for="(friend, index) in friends"
      :key="index"
      :class="selected == friend ? 'ss_FriendButton--selected' : ''"
      :friend="friend">
      <button
        class="ss_FriendButton"
        @click="selectFriend(friend)">
        <CategoryMedia class="FriendButton_Image" :category="friend" type="friend" />
        <p>{{ friend }}</p>
      </button>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { EFriend, friends } from '@/types/categories/friend'
import CategoryMedia from '@/components/media/CategoryMedia.vue'

@Component({
  components: {
    CategoryMedia
  }
})
export default class FriendList extends Vue {
  @Prop(Array) friends!: Array<EFriend>
  protected selected: EFriend = EFriend.Alice

  get selectedFriend () {
    return this.$store.getters['selectedFriend']
  }

  protected selectFriend (friend: EFriend) {
    this.selected = friend
    this.$emit('friendClicked', this.selected)
  }
}
</script>
<style scoped lang="scss">
.FriendList {
  display: flex;
  box-sizing: border-box;
  flex-wrap: wrap;
  justify-content: center;
  margin: .5em 0;

  button {
    margin: 0.5em;
  }
}

.ss_FriendButton--selected {
  border-radius: 50%;
  background-color: greenyellow;
}
</style>
