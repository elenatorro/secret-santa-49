<template>
  <div class="GameBoard">
  <table>
    <thead>
      <th v-for="(header, index) in headers" :key="index">
        <tr>{{ $t(`components.game-board.${header}`) }}</tr>
      </th>
    </thead>
    <tbody>
      <tr v-for="friend in friends"
        :key="friend">
        <td>{{ friend }}</td>
        <td v-for="category in categories" :key="category">
          <span>{{ $t(`components.info.${category}.${friendCategory(friend, category)}`) }}</span>
        </td>
      </tr>
    </tbody>
  </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { EFriend } from '@/types/categories/friend'

@Component
export default class GameBoard extends Vue {
  get headers () {
    return ['receiver', ...this.categories]
  }

  get categories () {
    const categories = this.$store.getters['categories']
    return Object.keys(categories[0])
  }

  get friends () {
    return this.$store.getters['boardFriends']
  }

  protected friendCategory (friend: string, category: string) {
    return this.board[friend][category]
  }

  get board () {
    return this.$store.getters['board']
  }
}
</script>
<style scoped lang="scss">
.GameBoard {
  width: 100%;
  overflow-x: scroll;
  padding: 0 2em;
  box-sizing: border-box;
  margin: 0;
  margin: 0 0 2em 0;
}

table {
  background-color: white;
  box-shadow: 0 0 20px silver inset;
  border-radius: 20px;
}

th, td {
  padding: 0.75em;
  width:1%;
  white-space:nowrap;
}
</style>
