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
      if (state.selectedSubCategory === 'Tout') {
        return state.selectedCategory === 'Accueil'
        ? state.publications.issues
        : filter(
            state.publications.issues,
            (issue: any) =>
              issue.publication.category.name === state.selectedCategory
          )
      } else {
        return state.selectedCategory === 'Accueil'
        ? state.publications.issues
        : filter(
            state.publications.issues,
            (issue: any) =>
              issue.publication.category.name === state.selectedCategory && issue.publication.category.subCategories[0].name ===
              state.selectedSubCategory
          )
      }

    },
    searchIssues: (state) => {
      return filter(
            state.publications.issues,
            (issue: any) =>
              issue.publication.title.match(state.searchText)
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
    setSearchText(state, text: string) {
      console.log(text)
      return (state.searchText = text)
    },
    setSelectedSubCategory(state, subCategory) {
      return (state.selectedSubCategory = subCategory)
    }
  },
  actions: {},
  modules: {},
})
