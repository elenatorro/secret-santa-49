import { TranslateResult } from 'vue-i18n'
import { categories } from './categories/categories'

export enum EQuestion {
  Positive = 'positive',
  Negative = 'negative',
}

export interface IQuestionPlaceholder {
  [key: string]: TranslateResult
}

export const QUESTION_TYPES = ['positive', 'negative'] as Array<EQuestion>
export const MAX_QUESTIONS = categories.length * (categories.length - 1)
