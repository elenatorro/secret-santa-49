<template>
  <section class="CategoryLegend">
    <button
      class="CategoryLegend__Button ss_Button"
      @click="toggleLegend()" aria-label="toggle legend">
      <span v-if="!showLegend">{{ $t('components.category-legend.info') }}</span>
      <span v-if="showLegend">{{ $t('components.category-legend.close') }}</span>
    </button>

    <div class="CategoryLegendModal" v-show="showLegend">
      <dl v-for="category in categories" :key="category">
        <dt>{{ $t(`components.category-legend.${category}s`) }}:</dt>
        <dd>
          <span v-for="boardCategory in boardCategories[category].sort(() => Math.random() - 0.5)" :key="boardCategory">
            {{ $t(`components.info.${category}.${boardCategory}`)}},
          </span>
        </dd>
      </dl>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import pages from '@/constants/pages'
import { categories } from '@/constants/categories'

@Component({})
export default class CategoryLegend extends Vue {
  protected showLegend: boolean = false

  protected toggleLegend () {
    this.showLegend = !this.showLegend
  }

  get categories () {
    return Object.keys(this.boardCategories)
  }

  get boardCategories () {
    return this.$store.getters['boardCategories']
  }
}
</script>
<style scoped lang="scss">
.CategoryLegendModal {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #fffffff2;
  display: flex;
  flex-direction: column;
  padding: 6em 3em 0 3em;
  box-sizing: border-box;
  z-index: 1;
  overflow-y: scroll;

  dt {
    font-weight: 600;
    margin-bottom: 2px;
  }

  dd {
    padding: 0;
  }
}

.CategoryLegend__Button {
  position: absolute;
  background-color: white;
  width: 48px;
  height: 48px;
  padding: 0 2em;
  right: 0.5em;
  top: 5.5em;
  z-index: 2;
}
</style>
