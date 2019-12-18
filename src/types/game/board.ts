import { EFriend } from '../categories/friend'
import { ICategories } from '../categories/categories'

export interface IBoardRow {
  [key: string]: string
}

export type IBoard = Map<EFriend, IBoardRow>
