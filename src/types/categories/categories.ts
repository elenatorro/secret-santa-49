import { ENote } from '@/types/categories/note'
import { EColor } from '@/types/categories/color'
import { EDay } from '@/types/categories/day'
import { EFriend } from '@/types/categories/friend'
import { EPresent } from '@/types/categories/present'
import { ESin } from '@/types/categories/sin'
import { ETattoo } from '@/types/categories/tattoo'

export interface ICategories {
  color: EColor,
  day: EDay,
  friend: EFriend,
  note: ENote,
  present: EPresent,
  sin: ESin,
  tattoo: ETattoo
}

export enum ECategories {
  Color = 'color',
  Day = 'day',
  Friend = 'friend',
  Note = 'note',
  Present = 'present',
  Sin = 'sin',
  Tattoo = 'tattoo'
}

export interface ICategoryMedia {
  [key: string]: String
}
