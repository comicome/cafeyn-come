<template>
  <v-container fluid>
    <v-row class="categories-container" align="center">
      <v-chip-group
        mandatory
        next-icon=""
        prev-icon=""
        active-class="primary--text"
        class="pl-7 pl-sm-auto category-group"
      >
        <v-btn
          v-for="category in categories"
          :key="category"
          :class="`${
            category === selectedCategory
              ? 'filters-btn active-btn'
              : 'filters-btn'
          } category-btn mr-md-5 mr-lg-3 ml-sm-5 mr-sm-3`"
          text
          @click="setSelectedCategory(category)"
        >
          {{ category }}
        </v-btn>
      </v-chip-group>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapMutations } from 'vuex'

export default Vue.extend({
  name: 'CategoriesComponent',
  data: () => ({
    categories: [
      'Accueil',
      'Quotidiens',
      'Actualités',
      'People & TV',
      'Technologie',
      'Auto & Moto',
      'Culture',
      'Savoirs',
    ],
  }),
  computed: {
    ...mapState(['selectedCategory']),
  },
  methods: {
    ...mapMutations(['setSelectedCategory']),
  },
})
</script>

<style lang="scss" scoped>
@import '../scss/categories.scss';
</style>
