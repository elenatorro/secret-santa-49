export enum EFriend {
  Alice = 'Alice',
  Bob = 'Bob',
  Charlie = 'Charlie',
  Daniel = 'Daniel',
  Eve = 'Eve',
  Fabiana = 'Fabiana',
  Gloria = 'Gloria'
}

export const FRIENDS = [
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

export enum EGender {
  M = 'Male',
  F = 'Female'
}

export const gender = {
  Alice: EGender.F,
  Bob: EGender.M,
  Charlie: EGender.M,
  Daniel: EGender.M,
  Eve: EGender.F,
  Fabiana: EGender.F,
  Gloria: EGender.F
}
