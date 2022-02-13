<template>
  <v-container class="mt-16">
    <v-text-field
      ref="search"
      v-model="text"
      prepend-inner-icon="mdi-magnify"
      placeholder="Rechercher un titre de presse ou un article"
      @input="onInput($event)"
    >
    </v-text-field>
    <v-row class="pa-5">
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
    timeout: 0
  }),
  computed: {
    ...mapState(['selectedCategory', 'subCategories', 'searchText']),
    ...mapGetters(['searchIssues']),
    text: { 
      get() {
        return this.$store.state.searchText
      },
      set(value) {
        this.$store.commit('setSearchText', value)
      }
    },
  search(): any {
    return this.$refs.search as any;
  },

  },
  methods: {
    ...mapMutations(['setSearchText']),
    onInput(event: string) {
      if (this.timeout) {
        clearTimeout(this.timeout)
      }

      this.timeout = setTimeout(() => {
        this.setSearchText(event)
      }, 500)
    }
  },
})
</script>

<style scoped></style>
