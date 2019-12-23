import Vue from 'vue'
import Vuex from 'vuex'
import { IBoard, IGameBoardRow, IBoardRow } from '@/types/game/board'
import { initBoard } from '@/services/game.service'
import { EFriend } from '@/types/categories/friend'
import { EPresent } from '@/types/categories/present'
import { buildQuestion } from '@/services/questions.service'
import { MAX_QUESTIONS, IQuestion } from '@/types/questions'

Vue.use(Vuex)

const initialState = {
  board: new Map() as IBoard,
  askedQuestions: new Set(),
  askedQuestionsList: [] as Array<IQuestion>,
  selectedFriend: '' as EFriend,
  selectedSecretSanta: '' as EFriend,
  selectedPresent: '' as EPresent,
  finished: false,
  error: false,
  settings: {
    audio: false
  }
}

export default new Vuex.Store({
  state: Object.assign({}, initialState),
  mutations: {
    init: (state, game) => {
      state.board = game.board
      state.askedQuestions = new Set()
      state.askedQuestionsList = []
      state.selectedFriend = game.selectedFriend
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
    }
  },
  actions: {
    reset: ({ commit }) => {
      commit('reset')
    },
    init: ({ commit }, selectedFriend: EFriend) => {
      const board = initBoard()
      const secretSanta = board.get(selectedFriend)

      if (secretSanta) {
        const present = secretSanta.present
        const selectedSantaFriend = secretSanta.friend
        commit('init', { board, selectedFriend, selectedSantaFriend, present })
      }
    },
    askQuestion: ({ state, commit, dispatch }) => {
      const question = buildQuestion(state.board)

      if (state.askedQuestions.size === MAX_QUESTIONS) {
        commit('finish')
      } else {
        if (state.askedQuestions.has(question.text)) {
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
    error: (state) => {
      return state.error
    },
    hasQuestion: (state, question: String) => {
      return state.askedQuestions.has(question)
    },
    selectedFriend: (state) => {
      return state.selectedFriend
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
    }
  }
})
