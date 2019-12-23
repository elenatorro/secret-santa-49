<template>
  <img class="CategoryImage" :src="src">
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import pages from '@/constants/pages'

@Component({})
export default class CategoryImage extends Vue {
  @Prop(String) src!: string
}
</script>
<style scoped lang="scss">
.CategoryImage {
  min-width: 48px;
  min-height: 48px;
  max-width: 48px;
  max-height: 48px;
}
</style>
