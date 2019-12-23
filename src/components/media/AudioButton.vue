<template>
  <button class="AudioButton"
    @click="play">
    <CategoryImage src="/img/categories/note/notes.png" alt="note" />
  </button>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import CategoryImage from '@/components/media/CategoryImage.vue'
import pages from '@/constants/pages'
import { Howl } from 'howler'

@Component({
  components: {
    CategoryImage
  }
})
export default class AudioButton extends Vue {
  @Prop(Object) sound!: Howl
  @Prop(String) note!: string

  protected play () {
    this.sound.play()
  }
}
</script>
<style scoped lang="scss">
.AudioButton {
  background-color: white;
  border: 2px solid var(--ss--secondary-color-dark);
  border-bottom-width: 6px;
  border-radius: 50%;
  width: 44px;
  height: 46px;
  margin-left: 18px;
  display: flex;

  &:active,
  &:focus {
    border-bottom-width: 2px;
  }

  img {
    min-height: auto;
    min-width: auto;
    max-height: 100%;
    max-width: 100%;
  }
}
</style>
