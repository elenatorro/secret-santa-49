import { EFriend } from './categories/friend'
import { EPresent } from './categories/present'

export interface State {
  board: [],
  questionCount: number,
  selectedFriend: EFriend,
  selectedPresent: EPresent,
  askedQuestions: Set<String>
}
