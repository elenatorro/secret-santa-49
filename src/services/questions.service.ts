import { ECategories } from '@/types/categories/categories'
import { QUESTION_TYPES, EQuestion, IQuestionPlaceholder } from '@/types/questions'
import { EFriend, friends } from '@/types/categories/friend'

import i18n from '@/i18n'
import { IBoard } from '@/types/game/board'
import { categories } from '@/constants/categories'

export function buildQuestion (board: IBoard) {
  const friend = getFriend()
  const questionCategoryA = getCategoryA()
  const questionCategoryB = getCategoryB(questionCategoryA)
  const questionType = getRandomType() as EQuestion

  return buildQuestionsByType[questionType](
    friend,
    board,
    questionCategoryA,
    questionCategoryB
  )
}

const buildQuestionsByType = {
  positive: buildPositiveQuestion,
  negative: buildNegativeQuestion
}

function getFriend () {
  return getRandomFriend(friends)
}

function getCategoryA () {
  return getRandomCategory(categories)
}

function getCategoryB (questionCategoryA: ECategories) {
  if (questionCategoryA === ECategories.Friend) {
    return getRandomCategory(categories.filter(c => c !== questionCategoryA && c !== ECategories.Present))
  }

  if (questionCategoryA === ECategories.Present) {
    return getRandomCategory(categories.filter(c => c !== questionCategoryA && c !== ECategories.Friend))
  }

  return getRandomCategory(categories.filter(c => c !== questionCategoryA))
}

function buildPositiveQuestion (friend: EFriend, board: IBoard, categoryA: ECategories, categoryB: ECategories) {
  const boardRow = board.get(friend)
  const valueA = boardRow ? boardRow[categoryA] : null
  const valueB = boardRow ? boardRow[categoryB] : null
  const questionPlaceholderA = i18n.t(`questions.placeholders.${categoryA}.${valueA}`)
  const questionPlaceholderB = i18n.t(`questions.placeholders.${categoryB}.${valueB}`)

  const placeholders = {} as IQuestionPlaceholder
  placeholders[categoryA] = questionPlaceholderA
  placeholders[categoryB] = questionPlaceholderB

  const text = i18n.t(`questions.templates.${categoryA}.${EQuestion.Positive}.${categoryA}-${categoryB}`, placeholders)

  return {
    valueA,
    valueB,
    categoryA,
    categoryB,
    text
  }
}

function buildNegativeQuestion (friend: EFriend, board: IBoard, categoryA: ECategories, categoryB: ECategories) {
  const friend2 = getRandomFriend(friends.filter(f => f !== friend))
  const board1Row = board.get(friend)
  const board2Row = board.get(friend2)
  const valueA = board1Row ? board1Row[categoryA] : null
  const valueB = board2Row ? board2Row[categoryB] : null

  const questionPlaceholderA = i18n.t(`questions.placeholders.${categoryA}.${valueA}`)
  const questionPlaceholderB = i18n.t(`questions.placeholders.${categoryB}.${valueB}`)

  const placeholders = {} as IQuestionPlaceholder
  placeholders[categoryA] = questionPlaceholderA
  placeholders[categoryB] = questionPlaceholderB

  const text = i18n.t(`questions.templates.${categoryA}.${EQuestion.Negative}.${categoryA}-${categoryB}`, placeholders)

  return {
    valueA,
    valueB,
    categoryA,
    categoryB,
    text
  }
}

function getRandomFriend (friends: Array<EFriend>) {
  return _random(friends)
}

function getRandomCategory (categories: Array<ECategories>) {
  return _random(categories)
}

function getRandomType () {
  return _random(QUESTION_TYPES)
}

function _random (items: any) {
  return items[~~(items.length * Math.random())]
}
