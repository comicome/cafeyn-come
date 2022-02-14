import Vue from 'vue'
import Vuex from 'vuex'
import { filter } from 'lodash-es'
import Issue from './interfaces/issue'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectedCategory: 'Accueil',
    inResearch: false,
    selectedSubCategory: 'Tout',
    searchText: '',
    publications: require('@/assets/json/category_quotidien.json'),
    subCategories: ['Tout', 'Presse Nationale', 'Presse Régionale'],
  },
  getters: {
    filteredPublicationsCategory: (state) => {
      if (state.selectedSubCategory === 'Tout') {
        return state.selectedCategory === 'Accueil'
          ? state.publications.issues
          : filter(
              state.publications.issues,
              (issue: Issue) =>
                issue.publication.category.name === state.selectedCategory
            )
      } else {
        return state.selectedCategory === 'Accueil'
          ? filter(
              state.publications.issues,
              (issue: Issue) =>
                issue.publication.category.subCategories[0].name ===
                state.selectedSubCategory
            )
          : filter(
              state.publications.issues,
              (issue: Issue) =>
                issue.publication.category.name === state.selectedCategory &&
                issue.publication.category.subCategories[0].name ===
                  state.selectedSubCategory
            )
      }
    },
    searchIssues: (state) => {
      if (state.searchText.length === 0) {
        return []
      }
      return filter(state.publications.issues, (issue: Issue) =>
        issue.publication.title.match(state.searchText)
      )
    },
  },
  mutations: {
    setSelectedCategory(state, category) {
      return (state.selectedCategory = category)
    },
    setInResearch(state, boolean) {
      return (state.inResearch = boolean)
    },
    setSearchText(state, text: string) {
      return (state.searchText = text)
    },
    setSelectedSubCategory(state, subCategory) {
      return (state.selectedSubCategory = subCategory)
    },
  },
  actions: {},
  modules: {},
})
