import { TranslateResult } from 'vue-i18n';

export enum EQuestion {
  Positive = 'positive',
  Negative = 'negative',
}

export interface IQuestionPlaceholder {
  [key: string]: TranslateResult
}

export const QUESTION_TYPES = ['positive', 'negative'] as Array<EQuestion>
