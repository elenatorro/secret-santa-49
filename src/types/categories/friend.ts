export enum EFriend {
  Alice = 'Alice',
  Bob = 'Bob',
  Charlie = 'Charlie',
  Daniel = 'Daniel',
  Eve = 'Eve',
  Fabiana = 'Fabiana',
  Gloria = 'Gloria'
}

export const friends = [
  EFriend.Alice,
  EFriend.Bob,
  EFriend.Charlie,
  EFriend.Daniel,
  EFriend.Eve,
  EFriend.Fabiana,
  EFriend.Gloria
]

export interface SecretSantaPair {
  giver: EFriend,
  receiver: EFriend
}
