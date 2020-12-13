import Vue from 'vue'
import Vuex from 'vuex'
import { IBoard, IGameBoardRow, IBoardCategories } from '@/types/game/board'
import { initBoard } from '@/services/game.service'
import { EFriend } from '@/types/categories/friend'
import { EPresent } from '@/types/categories/present'
import { buildQuestion } from '@/services/questions.service'
import { IQuestion } from '@/types/questions'

const DEFAULT_LEVEL = 7

Vue.use(Vuex)

const initialState = {
  board: new Map() as IBoard,
  askedQuestions: new Set(),
  askedQuestionsList: [] as Array<IQuestion>,
  selectedFriend: '' as EFriend,
  selectedLevel: DEFAULT_LEVEL as Number,
  selectedSecretSanta: '' as EFriend,
  selectedPresent: '' as EPresent,
  finished: false,
  error: false,
  settings: {
    audio: false
  },
  locale: 'es'
}

export default new Vuex.Store({
  state: Object.assign({}, initialState),
  mutations: {
    init: (state, game) => {
      state.board = game.board
      state.askedQuestions = new Set()
      state.askedQuestionsList = []
      state.selectedFriend = game.selectedFriend
      state.selectedLevel = game.selectedLevel
      state.selectedSecretSanta = game.selectedSantaFriend
      state.selectedPresent = game.present
    },
    askQuestion: (state, question: IQuestion) => {
      state.askedQuestions.add(question)
      state.askedQuestionsList.push(question)
    },
    finish: (state) => {
      state.finished = true
    },
    correctAnswer: (state) => {
      state.finished = true
    },
    wrongAnser: (state) => {
      state.finished = true
      state.error = true
    },
    reset: (state) => {
      Object.assign(state, initialState)
    },
    changeLocale: (state, locale) => {
      state.locale = locale
    }
  },
  actions: {
    reset: ({ commit }) => {
      commit('reset')
    },
    init: ({ commit }, options = { selectedFriend: EFriend, selectedLevel: Number }) => {
      const board = initBoard(options.selectedFriend, options.selectedLevel)
      const secretSanta = board.get(options.selectedFriend)

      if (secretSanta) {
        const present = secretSanta.present
        const selectedSantaFriend = secretSanta.friend
        commit('init', {
          board,
          selectedFriend: options.selectedFriend,
          selectedLevel: options.selectedLevel,
          selectedSantaFriend,
          present
        })
      }
    },
    askQuestion: ({ state, commit, dispatch }) => {
      const selectedLevel = state.selectedLevel as number
      const MAX_QUESTIONS = ((selectedLevel) * (selectedLevel - 1) * (selectedLevel - 2))
      const question = buildQuestion(state.board)
      const questionList = state.askedQuestionsList.map((question) => question.text) as Array<String>

      if (state.askedQuestions.size === MAX_QUESTIONS) {
        commit('finish')
      } else {
        if (questionList.includes(question.text as String)) {
          dispatch('askQuestion')
        } else {
          commit('askQuestion', question)
        }
      }
    },
    solve: ({ state, commit }, friend: EFriend) => {
      if (state.selectedSecretSanta === friend) {
        commit('correctAnswer')
      } else {
        commit('wrongAnser')
      }
    },
    changeLocale: ({ commit }, locale: String) => {
      commit('changeLocale', locale)
    }
  },
  getters: {
    board: (state) => {
      const board = {} as IGameBoardRow

      for (let [key, value] of state.board.entries()) {
        board[key] = value
      }

      return board
    },

    boardFriends: (state) => {
      return [...state.board.keys()]
    },

    categories: (state) => {
      return [...state.board.values()]
    },

    boardCategories: (state) => {
      const values = [...state.board.values()]
      const boardCategories = {} as IBoardCategories

      values.forEach((value) => {
        const keys = Object.keys(value)

        keys.forEach((key) => {
          if (key in boardCategories) {
            boardCategories[key].push(value[key])
          } else {
            boardCategories[key] = [value[key]]
          }
        })
      })

      return boardCategories
    },

    error: (state) => {
      return state.error
    },
    hasQuestion: (state, question: String) => {
      return state.askedQuestions.has(question)
    },
    selectedFriend: (state) => {
      return state.selectedFriend
    },
    selectedLevel: (state) => {
      return state.selectedLevel
    },
    maxQuestions: (state) => {
      const selectedLevel = state.selectedLevel as number
      return ((selectedLevel) * (selectedLevel - 1) * (selectedLevel - 2))
    },
    selectedSecretSanta: (state) => {
      return state.selectedSecretSanta
    },
    selectedPresent: (state) => {
      return state.selectedPresent
    },
    askedQuestionsList: (state) => {
      return state.askedQuestionsList
    },
    settings: (state) => {
      return state.settings
    },
    locale: (state) => {
      return state.locale
    }
  }
})
