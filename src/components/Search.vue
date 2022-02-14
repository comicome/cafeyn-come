<template>
  <v-container class="mt-16">
    <v-text-field
      v-model="text"
      prepend-inner-icon="mdi-magnify"
      placeholder="Rechercher un titre de presse ou un article"
      @input="onInput($event)"
    >
    </v-text-field>
    <v-row v-if="isLoading" class="pa-5">
      <v-col
        v-for="newspaper in [1, 2, 3, 4, 5, 6]"
        :key="newspaper"
        cols="6"
        sm="3"
        md="4"
        lg="2"
      >
        <v-sheet color="grey lighten-4'" class="pa-3">
          <v-skeleton-loader
            class="mx-auto"
            max-width="300"
            type="card"
          ></v-skeleton-loader>
        </v-sheet>
      </v-col>
    </v-row>
    <v-row v-else class="pa-5">
      <v-col
        v-for="newspaper in searchIssues"
        :key="newspaper.publicationId"
        cols="6"
        sm="3"
        md="4"
        lg="2"
      >
        <Issue :issue="newspaper" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapGetters, mapMutations } from 'vuex'
import Issue from '@/components/Issue.vue'

export default Vue.extend({
  name: 'Search',
  components: {
    Issue,
  },
  data: () => ({
    timeout: 0,
    isLoading: false,
  }),
  computed: {
    ...mapState([
      'selectedCategory',
      'subCategories',
      'searchText',
      'inResearch',
    ]),
    ...mapGetters(['searchIssues']),
    text: {
      get() {
        return this.$store.state.searchText
      },
      set(value) {
        this.$store.commit('setSearchText', value)
      },
    },
  },
  methods: {
    ...mapMutations(['setSearchText']),
    onInput(event: string) {
      this.isLoading = true
      if (this.timeout) {
        clearTimeout(this.timeout)
      }
      this.timeout = setTimeout(() => {
        this.$store.commit('setSearchText', event)
        if (event.length > 0 || this.searchText.length == 0) {
          this.isLoading = false
        }
      }, 1000)
    },
  },
})
</script>
