<template>
  <div class="GameBoard">
  <table>
    <thead>
      <th v-for="(header, index) in headers" :key="index">
        <tr>{{ header }}</tr>
      </th>
    </thead>
    <tbody>
      <tr v-for="friend in friends"
        :key="friend">
        <td>{{ friend }}</td>
        <td v-for="category in categories" :key="category">
          {{ friendCategory(friend, category) }}
        </td>
      </tr>
    </tbody>
  </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { categories } from '@/constants/categories'
import { EFriend, friends } from '@/types/categories/friend'

@Component
export default class GameBoard extends Vue {
  protected friends: Array<EFriend> = friends
  protected categories: Array<string> = categories

  get headers () {
    return ['receiver', ...this.categories]
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
  padding: 0 3em;
  box-sizing: border-box;
  margin: 0 2em 2em 0;
}

table {
  background-color: white;
  box-shadow: 0 0 20px silver inset;
  border-radius: 20px;
}

th, td {
  padding: 1em;
}
</style>
