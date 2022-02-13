import Vue from 'vue'
import Vuex from 'vuex'
import { filter } from 'lodash-es'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectedCategory: 'Accueil',
    onSearch: false,
    selectedSubCategory: 'Tout',
    searchText: '',
    publications: require('@/assets/json/category_quotidien.json'),
    subCategories: ['Tout', 'Presse Nationale', 'Presse Régionale'],
  },
  getters: {
    filteredPublicationsCategory: (state) => {
      return state.selectedCategory === 'Accueil'
        ? state.publications.issues
        : filter(
            state.publications.issues,
            (issue: any) =>
              issue.publication.category.name === state.selectedCategory
          )
    },
    filteredPublicationsSubCategory: (state) => {
      return state.selectedCategory === 'Tout'
        ? state.publications.issues
        : filter(
            state.publications.issues,
            (issue: any) =>
              issue.publication.category.subCategories[0].name ===
              state.selectedSubCategory
          )
    },
  },
  mutations: {
    setSelectedCategory(state, category) {
      return (state.selectedCategory = category)
    },
    setOnSearch(state, boolean) {
      return (state.onSearch = boolean)
    },
    setSelectedSubCategory(state, subCategory) {
      return (state.selectedSubCategory = subCategory)
    },
    setSearchText(state, value) {
      return (state.searchText = value)
    },
  },
  actions: {},
  modules: {},
})
