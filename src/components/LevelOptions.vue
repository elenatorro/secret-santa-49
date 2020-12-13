<template>
  <ul class="LevelOptions">
    <li v-for="index in options"
        :key="index"
        :class="selectedLevel === index + 2 ? 'ss_LevelOption--selected' : ''">
        <button
            class="ss_LevelOptionButton ss_LevelOption"
            @click="selectOption(index + 2)">
            <p>{{ index + 2 }}</p>
        </button>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
@Component
export default class LevelOptions extends Vue {
  protected options: Number = 5
  protected selectedLevel: Number = 7

  protected selectOption (level: Number) {
    this.selectedLevel = level
    this.$emit('levelClicked', level)
  }
}
</script>
<style scoped lang="scss">
.LevelOptions {
    display: flex;
    flex-direction: row;
}

.ss_LevelOption {
    margin: .5em;
    border-radius: 50%;
    width: 50px;
    height: 50px;
}

.ss_LevelOption--selected {
  border-radius: 50%;
  background-color: greenyellow;
}
</style>
