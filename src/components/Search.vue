<template>
  <v-container class="mt-16">
    <v-text-field
      prepend-inner-icon="mdi-magnify"
      placeholder="Rechercher un titre de presse ou un article"
    >
    </v-text-field>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
  name: 'Search',
  data: () => ({}),
  computed: {
    ...mapState(['selectedCategory', 'subCategories']),
  },
})
</script>

<style scoped></style>
