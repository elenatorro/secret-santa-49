import Vue from 'vue'
import Vuex from 'vuex'
import { IBoard } from '@/types/game/board'
import { initBoard } from '@/services/game.service'
import { EFriend } from '@/types/categories/friend'
import { EPresent } from '@/types/categories/present'
import { buildQuestion } from '@/services/questions/questions.service'
import { MAX_QUESTIONS } from '@/types/questions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    board: new Map() as IBoard,
    askedQuestions: new Set(),
    selectedFriend: '' as EFriend,
    selectedSecretSanta: '' as EFriend,
    selectedPresent: '' as EPresent,
    finished: false,
    error: '' as String
  },
  mutations: {
    init: (state, game) => {
      state.board = game.board
      state.askedQuestions = new Set()
      state.selectedFriend = game.selectedFriend
      state.selectedSecretSanta = game.selectedSantaFriend
      state.selectedPresent = game.present
    },
    askQuestion: (state, question) => {
      state.askedQuestions.add(question)
    },
    finish: (state) => {
      state.finished = true
    },
    correctAnswer: (state) => {
      state.finished = true
    },
    wrongAnser: (state) => {
      state.finished = true
      state.error = 'ERROR' // TODO
    }
  },
  actions: {
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
        if (state.askedQuestions.has(question)) {
          dispatch('askQuestion')
        } else {
          commit('askQuestion', question)
        }
      }
    },
    answer: ({ state, commit }, friend: EFriend) => {
      if (state.selectedSecretSanta === friend) {
        commit('correctAnswer')
      } else {
        commit('wrongAnser')
      }
    }
  },
  getters: {
    board: (state) => {
      return state.board
    },
    hasQuestion: (state, question: String) => {
      return state.askedQuestions.has(question)
    }
  }
})
