<template>
  <section class="CategoryMedia">
    <CategoryImage v-if="!isAudio" :src="media"/>
    <AudioButton v-if="isAudio" :sound="media" :note="category"/>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { getCategoryMedia } from '@/services/media.service'
import CategoryImage from '@/components/media/CategoryImage.vue'
import AudioButton from '@/components/media/AudioButton.vue'
import { ECategories } from '@/types/categories/categories'

@Component({
  components: {
    AudioButton,
    CategoryImage
  }
})
export default class CategoryMedia extends Vue {
  @Prop(String) category!: string
  @Prop(String) type!: ECategories

  get isAudio () {
    return this.type === 'note'
  }

  get media () {
    return getCategoryMedia(this.type, this.category)
  }
}
</script>
