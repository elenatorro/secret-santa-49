<template>
  <div class="QuestionsView ss-page">
    <CategoryLegend v-if="selectedFriend" />
    <QuestionCounter v-if="selectedFriend" :askedQuestionsList="askedQuestionsList" />

    <header class="ss-page__header" :class="!selectedFriend ? 'ss-page__full' : ''">
      <FriendSelector />
    </header>

    <section class="QuestionsView__List">
      <QuestionList :askedQuestionsList="askedQuestionsList" />
    </section>

    <footer class="ss-page__footer ss-u-background-stripes-pattern-secondary ss-u-dark-shadow"
      v-if="selectedFriend">
      <QuestionButton />
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import FriendSelector from '@/components/FriendSelector.vue'
import QuestionList from '@/components/QuestionList.vue'
import QuestionButton from '@/components/QuestionButton.vue'
import CategoryLegend from '@/components/CategoryLegend.vue'
import QuestionCounter from '@/components/QuestionCounter.vue'

@Component({
  components: {
    FriendSelector,
    QuestionList,
    QuestionButton,
    QuestionCounter,
    CategoryLegend
  }
})
export default class QuestionsView extends Vue {
  get selectedFriend () {
    return this.$store.getters['selectedFriend']
  }

  get askedQuestionsList () {
    return this.$store.getters['askedQuestionsList']
  }
}
</script>
<style scoped lang="scss">
.QuestionsView {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  overflow-y: scroll;
}

.QuestionsView__List {
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  width: 100%;
  height: 100%;
  align-items: center;
}
</style>
