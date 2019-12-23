<template>
  <ul class="QuestionList"
    v-if="selectedFriend">
    <li v-for="(question, index) in askedQuestionsList"
      :key="index">
      <span>{{ question.text }}</span>
      <CategoryMedia v-if="question.categoryA === 'note' && settings.audio"
        :category="question.valueA"
        :type="question.categoryA"/>
      <CategoryMedia v-if="question.categoryB === 'note' && settings.audio"
        :category="question.valueB"
        :type="question.categoryB"/>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import CategoryMedia from '@/components/media/CategoryMedia.vue'

@Component({
  components: {
    CategoryMedia
  }
})
export default class QuestionList extends Vue {
  @Prop(Array) public askedQuestionsList!: Array<String>

  get selectedFriend () {
    return this.$store.getters['selectedFriend']
  }

  get settings () {
    return this.$store.getters['settings']
  }

  @Watch('askedQuestionsList')
  protected scrollToEnd () {
    this.$nextTick(() => {
      this.$el.scrollTop = this.$el.scrollHeight
    })
  }
}
</script>
<style scoped lang="scss">
.QuestionList {
  overflow-y: scroll;
  margin: 0;
  height: 100%;
  background-color: var(--ss--white-color);
  width: 90%;
  border-radius: 24px 24px 0 0;
  color: var(--ss--secondary-color-dark);

  li {
    padding: 2em 2em 1em 2em;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
