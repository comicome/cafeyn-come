<template>
  <v-container fluid>
    <v-row class="categories-container" align="center">
      <v-chip-group
        mandatory
        next-icon=""
        prev-icon=""
        active-class="primary--text"
        class="ml-lg-8 categry-group"
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

<style scoped>
.categories-container {
  height: 100px;
  margin-top: 68px;
  border-top: 1px solid #ececec;
  border-bottom: 1px solid #ececec;
}

.filters-btn {
  font-family: 'Soleil-Bold', Helvetica, Arial;
  font-size: 12px;
  letter-spacing: 0.9px;
}
.filters-btn:hover {
  background: rgba(103, 131, 155, 0.08);
  color: #67839b;
}

.active-btn {
  background: rgba(103, 131, 155, 0.08);
  color: #67839b;
}

@media (max-width: 960px) {
  button.v-btn:not(.v-btn--round).v-size--default {
    padding: 0 11px;
  }
  .categry-group {
    padding: 16px 24px;
  }
  .categories-container {
    height: 100px;
    margin-top: 60px;
    border: none;
  }
}

@media (max-width: 600px) {
  .navbar {
    min-height: 70px !important;
    display: flex;
    align-items: center;
  }
  button.v-btn:not(.v-btn--round).v-size--default {
    padding: 0 19px;
  }
}
@media (max-width: 900px) {
  .categry-group {
    border-top: 1px solid #ececec;
  }
}
</style>
