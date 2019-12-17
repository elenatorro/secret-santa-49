import { EFriend, SecretSantaPair } from '@/types/categories/friend'
import { EColor } from '@/types/categories/color'
import { EDay } from '@/types/categories/day'
import { ENote } from '@/types/categories/note'
import { EPresent } from '@/types/categories/present'
import { ESin } from '@/types/categories/sin'
import { ETattoo } from '@/types/categories/tattoo'

export function shuffleRow (row: Array<EColor|EDay|ENote|EFriend|EPresent|ESin|ETattoo>) {
  const arr = row.map((item) => item)

  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)) as number
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }

  return arr
}

export function secretSantaFriendPairs (friends: Array<EFriend>) {
  const pairs = [] as Array<SecretSantaPair>
  const friendsRow = shuffleRow(friends) as Array<EFriend>

  pairs.push({
    giver: friendsRow[friendsRow.length - 1],
    receiver: friendsRow[0]
  })

  for (let i = 0; i < friendsRow.length; i++) {
    pairs.push({
      giver: friendsRow[i - 1],
      receiver: friendsRow[i]
    })
  }

  return pairs
}
