import { EFriend } from '../categories/friend'

export interface IBoardRow {
  [key: string]: string
}

export interface IGameBoardRow {
  [key: string]: IBoardRow
}

export type IBoard = Map<EFriend, IBoardRow>
