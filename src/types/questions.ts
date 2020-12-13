import { TranslateResult } from 'vue-i18n'
import { ECategories } from './categories/categories'
import { categories } from '@/constants/categories'

export enum EQuestion {
  Positive = 'positive',
  Negative = 'negative',
}

export interface IQuestionPlaceholder {
  [key: string]: TranslateResult
}

export interface IQuestion {
  valueA: String,
  valueB: String,
  categoryA: ECategories,
  categoryB: ECategories,
  text: String
}

export const QUESTION_TYPES = ['positive', 'negative'] as Array<EQuestion>
