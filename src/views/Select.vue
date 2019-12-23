<template>
  <div class="SolveView ss-page">
    <header class="ss-page__header">
      <h3>Who are you?</h3>
    </header>

    <FriendList :friends="friends" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import FriendList from '@/components/FriendList.vue'

@Component({
  components: {
    FriendList
  }
})
export default class SolveView extends Vue {}
</script>
<style scoped lang="scss">
.SolveView {}
</style>
