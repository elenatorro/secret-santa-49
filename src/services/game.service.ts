import { IBoard, IBoardRow } from '@/types/game/board'
import { shuffleRow, secretSantaFriendPairs } from './board.service'
import { colors } from '@/types/categories/color'
import { days } from '@/types/categories/day'
import { EFriend, friends } from '@/types/categories/friend'
import { notes } from '@/types/categories/note'
import { presents } from '@/types/categories/present'
import { sins } from '@/types/categories/sin'
import { tattoos } from '@/types/categories/tattoo'
import { getRandomFriend } from '@/services/questions.service'

export function initBoard (friend: EFriend, level: number) {
  const board = new Map() as IBoard
  const boardFriends = [friend]

  for (let i = 1; i < level; i++) {
    const newFriend = getRandomFriend(friends.filter(f => f !== friend && !boardFriends.includes(f)))
    boardFriends.push(newFriend)
  }

  const pairs = secretSantaFriendPairs(boardFriends)
  const colorsRow = shuffleRow(colors).slice(0, level)
  const daysRow = shuffleRow(days).slice(0, level)
  const notesRow = shuffleRow(notes).slice(0, level)
  const presentsRow = shuffleRow(presents).slice(0, level)
  const sinsRow = shuffleRow(sins).slice(0, level)
  const tattoosRow = shuffleRow(tattoos).slice(0, level)

  pairs.forEach((pair, index) => {
    const { giver, receiver } = pair

    switch (level) {
      case 3:
        const threeRow = {
          friend: giver,
          present: presentsRow[index],
          color: colorsRow[index]
        } as IBoardRow

        board.set(receiver, threeRow)
        break
      case 4:
        const fourRow = {
          friend: giver,
          present: presentsRow[index],
          color: colorsRow[index],
          day: daysRow[index]
        } as IBoardRow

        board.set(receiver, fourRow)
        break
      case 5:
        const fiveRow = {
          friend: giver,
          present: presentsRow[index],
          color: colorsRow[index],
          day: daysRow[index],
          note: notesRow[index]
        } as IBoardRow

        board.set(receiver, fiveRow)
        break
      case 6:
        const sixRow = {
          friend: giver,
          present: presentsRow[index],
          color: colorsRow[index],
          day: daysRow[index],
          note: notesRow[index],
          sin: sinsRow[index]
        } as IBoardRow

        board.set(receiver, sixRow)
        break
      case 7:
        const sevenRow = {
          friend: giver,
          present: presentsRow[index],
          color: colorsRow[index],
          day: daysRow[index],
          note: notesRow[index],
          sin: sinsRow[index],
          tattoo: tattoosRow[index]
        } as IBoardRow

        board.set(receiver, sevenRow)
        break
    }
  })

  return board
}
