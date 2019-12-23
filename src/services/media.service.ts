import { ECategories } from '@/types/categories/categories'
import { Howl } from 'howler'
import { INoteSounds } from '@/types/categories/note'

const imagePath = '/img/categories'
const imageExtension = 'png'
const soundsPath = '/sounds/notes'
const soundsExtension = 'mp3'

const sounds = {
  a: getNoteSound('A'),
  b: getNoteSound('B'),
  c: getNoteSound('C'),
  d: getNoteSound('D'),
  e: getNoteSound('E'),
  f: getNoteSound('F'),
  g: getNoteSound('G')
} as INoteSounds

export function getCategoryMedia (type: ECategories, category: string) {
  return categoryMediaType[type](category.toLowerCase())
}

const categoryMediaType = {
  color: getColorCategoryMedia,
  day: getDayCategoryMedia,
  friend: getFriendCategoryMedia,
  note: getNoteCategoryMedia,
  present: getPresentCategoryMedia,
  sin: getSinCategoryMedia,
  tattoo: getTattooCategoryMedia
}

function getColorCategoryMedia (color: string) {
  return getImage('color', color)
}

function getDayCategoryMedia (day: string) {
  return getImage('day', day)
}

function getFriendCategoryMedia (friend: string) {
  return getImage('friend', friend)
}

function getNoteCategoryMedia (note: string) {
  return sounds[note]
}

function getPresentCategoryMedia (present: string) {
  return getImage('present', present)
}
function getSinCategoryMedia (sin: string) {
  return getImage('sin', sin)
}
function getTattooCategoryMedia (tattoo: string) {
  return getImage('tattoo', tattoo)
}

function getNoteSound (note: string) {
  const src = `${soundsPath}/${note}.${soundsExtension}`
  const howl = new Howl({ src, volume: 1 })

  return howl
}

function getImage (type: string, category: string) {
  return `${imagePath}/${type}/${category}.${imageExtension}`
}
