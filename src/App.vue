<template>
  <v-app>
    <Header />
    <main>
      <div v-if="!inResearch">
        <Categories />
        <SubCategories />
        <Grid />
      </div>
      <div v-else>
        <Search />
      </div>
    </main>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
import Header from '@/components/Header.vue'
import Categories from '@/components/Categories.vue'
import SubCategories from '@/components/SubCategories.vue'
import Grid from '@/components/Grid.vue'
import Search from '@/components/Search.vue'

export default {
  name: 'IndexPage',
  components: {
    Header,
    Categories,
    SubCategories,
    Grid,
    Search,
  },
  computed: {
    ...mapState(['inResearch']),
  },
}
</script>

<style lang="scss">
@font-face {
  font-family: 'Soleil';
  src: local('Soleil'),
    url(./assets/fonts/Soleil/Soleil_Regular.ttf) format('truetype');
}
@font-face {
  font-family: 'Soleil-Bold';
  src: local('Soleil-Bold'),
    url(./assets/fonts/Soleil/Soleil_Bold.ttf) format('truetype');
}
@font-face {
  font-family: 'Soleil-Light';
  src: local('Soleil-Light'),
    url(./assets/fonts/Soleil/Soleil_Light.ttf) format('truetype');
}

.v-application {
  font-family: 'Soleil', sans-serif !important;
}
</style>
