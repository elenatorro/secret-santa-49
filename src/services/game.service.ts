import { IBoard, IBoardRow } from '@/types/game/board'
import { shuffleRow, secretSantaFriendPairs } from './board.service'
import { colors } from '@/types/categories/color'
import { days } from '@/types/categories/day'
import { friends } from '@/types/categories/friend'
import { notes } from '@/types/categories/note'
import { presents } from '@/types/categories/present'
import { sins } from '@/types/categories/sin'
import { tattoos } from '@/types/categories/tattoo'

export function initBoard () {
  const board = new Map() as IBoard
  const pairs = secretSantaFriendPairs(friends)
  const colorsRow = shuffleRow(colors)
  const daysRow = shuffleRow(days)
  const notesRow = shuffleRow(notes)
  const presentsRow = shuffleRow(presents)
  const sinsRow = shuffleRow(sins)
  const tattoosRow = shuffleRow(tattoos)

  pairs.forEach((pair, index) => {
    const { giver, receiver } = pair

    const row = {
      friend: giver,
      color: colorsRow[index],
      day: daysRow[index],
      note: notesRow[index],
      present: presentsRow[index],
      sin: sinsRow[index],
      tattoo: tattoosRow[index]
    } as IBoardRow

    board.set(receiver, row)
  })

  return board
}
