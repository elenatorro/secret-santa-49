<template>
  <div class="App" :class="{ 'App--loading': loading }">
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class App extends Vue {
  protected loading: boolean = true

  public async mounted () {
    this.loading = false
  }
}
</script>

<style lang="scss">
@import '@/styles/main.scss';

.App {
  height: 100%;
}

.App--loading::after {
  align-items: center;
  background-color: white;
  content: 'loading...';
  display: flex;
  font-size: 24px;
  height: 100%;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}
</style>
