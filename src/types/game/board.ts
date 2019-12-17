import { EFriend } from '../categories/friend';
import { ICategories } from '../categories/categories';

export type IBoardRow = ICategories
export type IBoard = Map<EFriend, IBoardRow>
