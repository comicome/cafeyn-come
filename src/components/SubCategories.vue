<template>
  <v-container fluid class="subcategories-container">
    <v-row align="center" justify="space-around">
      <v-col
        cols="12"
        class="pa-lg-5 pb-lg-0 pt-lg-10 pl-lg-10 pb-sm-3 pl-sm-9 pl-5"
      >
        <h1 class="category-title">{{ selectedCategory }}</h1>
        <h2 class="category-subtitle">L'actu à très très chaud</h2>
      </v-col>
      <v-col
        cols="12"
        md="4"
        sm="12"
        offset-md="8"
        class="mr-16 ml-sm-5 mr-sm-0 mr-md-0 pl-0 pt-7 pt-md-3 pb-sm-0 ml-md-auto"
      >
        <v-tabs
          next-icon=""
          prev-icon=""
          slider-color="#67839B"
          slider-size="4"
        >
          <v-tab active-class="subcategory-active" class="subcategory"
            >Tout</v-tab
          >
          <v-tab active-class="subcategory-active" class="subcategory"
            >Presse Nationale</v-tab
          >
          <v-tab active-class="subcategory-active" class="subcategory"
            >Presse Régionale</v-tab
          >
        </v-tabs>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
  name: 'SubCategories',
  data: () => ({
    tab: null,
    items: ['Tout', 'Presse Nationale', 'Presse Régionale'],
  }),
  computed: {
    ...mapState(['selectedCategory', 'subCategories']),
  },
})
</script>

<style scoped>
.subcategories-container {
  height: 167px;
  border-bottom: 1px solid #ececec;
}

.subcategory {
  font-family: 'Soleil-bold', Helvetica, Arial;
  font-size: 12px;
  color: #8b8b8b;
}

.v-tab--active.subcategory-active {
  color: #1e323d;
}

.category-title {
  font-family: 'Soleil-Light', Helvetica, Arial;
  font-size: 28px;
  color: #67839b;
}

.category-subtitle {
  font-family: 'Soleil', Helvetica, Arial;
  font-size: 16px;
  color: #1e323d;
}
</style>
