import Vue from 'vue'
import Vuex from 'vuex'
import { IBoard } from '@/types/game/board'
import { initBoard } from '@/services/game.service'
import { EFriend } from '@/types/categories/friend'
import { EPresent } from '@/types/categories/present'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    board: new Map() as IBoard,
    askedQuestions: new Set(),
    questionCount: 0,
    selectedSecretSanta: '' as EFriend,
    selectedPresent: '' as EPresent
  },
  mutations: {
    init: (state, game) => {
      state.board = game.board
      state.askedQuestions = new Set()
      state.questionCount = 0
      state.selectedSecretSanta = game.friend
      state.selectedPresent = game.present
    }
  },
  actions: {
    init: ({ commit }, friend: EFriend) => {
      const board = initBoard()
      const secretSanta = board.get(friend)

      if (secretSanta) {
        const present = secretSanta.present
        commit('init', { board, friend, present })
      }
    }
  },
  getters: {
    board: (state) => {
      return state.board
    }
  }
})
