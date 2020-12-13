import { EFriend } from '../categories/friend'

export interface IBoardRow {
  [key: string]: string
}

export interface IGameBoardRow {
  [key: string]: IBoardRow
}

export interface IBoardCategories {
  [key: string]: Array<String>
}

export type IBoard = Map<EFriend, IBoardRow>
