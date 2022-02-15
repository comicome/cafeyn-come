<template>
  <v-container fluid class="subcategories-container">
    <v-row align="center" justify="space-around">
      <v-col
        cols="12"
        class="pa-lg-5 pb-lg-0 pt-lg-10 pl-lg-10 pb-sm-3 pl-sm-9 pl-10"
      >
        <h1 class="category-title">{{ selectedCategory }}</h1>
        <h2 class="category-subtitle">L'actu à très très chaud</h2>
      </v-col>
      <v-col
        cols="12"
        class="mr-16 ml-sm-5 mr-sm-0 ml-md-auto mr-md-0 pl-0 pt-7 pt-md-3 pb-sm-0 pr-0 pr-md-4"
      >
        <v-tabs
          class='tabs'
          next-icon=""
          prev-icon=""
          slider-color="#67839b"
          slider-size="4"
        >
          <v-tab
            v-for="subCategory in subCategories"
            :key="subCategory"
            active-class="subcategory-active"
            class="subcategory"
            @click="setSelectedSubCategory(subCategory)"
          >
            {{ subCategory }}
          </v-tab>
        </v-tabs>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapMutations, mapState } from 'vuex'

export default Vue.extend({
  name: 'SubCategories',
  data: () => ({
    tab: null,
    items: ['Tout', 'Presse Nationale', 'Presse Régionale'],
  }),
  computed: {
    ...mapState(['selectedCategory', 'subCategories']),
  },
  methods: {
    ...mapMutations(['setSelectedSubCategory']),
  },
})
</script>

<style lang="scss" scoped>
@import '../scss/subcategories.scss';
</style>
