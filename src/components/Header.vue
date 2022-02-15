<template>
  <v-app-bar
    app
    absolute
    color="white"
    elevation="0"
    height="80"
    class="navbar"
  >
    <v-btn
      class="hidden-sm-and-up pl-4"
      icon
      @click="setInResearch(!inResearch)"
    >
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-toolbar-title class="cafeyn-logo mr-lg-16 pr-2">
      <v-img
        alt="Cafeyn Logo"
        contain
        :src="require('../assets/img/cafeyn.svg')"
        transition="scale-transition"
        height="40"
        :width="isMobile()"
      />
    </v-toolbar-title>
    <v-spacer class="hidden-md-and-up"></v-spacer>
    <v-responsive
      v-show="!inResearch"
      class="mr-0 ml-lg-16 mr-md-3 hidden-xs-only transition-swing pl-md-10 pl-lg-0"
      max-width="420"
    >
      <v-text-field
        ref="search"
        label="Rechercher un titre de presse ou un article"
        flat
        hide-details
        append-icon="mdi-magnify"
        solo
        class="search-field"
        @click="setInResearch(true)"
      />
    </v-responsive>
    <v-spacer class="hidden-sm-and-down"></v-spacer>

    <div v-if="!inResearch" class="d-flex align-center pr-sm-5 pl-sm-16 pr-4">
      <v-btn
        elevation="1"
        icon
        outlined
        height="38"
        width="38"
        class="rounded-circle gift-btn mr-2 mr-sm-4"
        color="#ececec"
      >
        <a target="_blank" href="https://www.cafeyn.co/fr/gift/offers">
          <v-img
            alt="Gift"
            contain
            :src="require('../assets/img/giftHeader.svg')"
            transition="scale-transition"
            height="20"
          />
        </a>
      </v-btn>
      <v-divider class="separator" inset vertical></v-divider>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            elevation="1"
            outlined
            rounded
            color="grey lighten-2"
            class="hidden-md-and-up menu ml-2 ml-sm-4 lk-login"
            v-bind="attrs"
            v-on="on"
          >
            <v-img
              contain
              :src="require('../assets/img/lk-login.svg')"
              height="20"
              width="20"
            />
            <v-icon color="black" small>mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index">
            <v-list-item-title>{{ item }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <div class="pl-md-5 ml-lg-5">
        <v-btn
          class="header-btn hidden-sm-and-down"
          rounded
          outlined
          color="#1e323d"
          dark
        >
          Se connecter
        </v-btn>
        <v-btn
          class="header-btn hidden-sm-and-down ml-lg-5 mr-lg-10 login-btn"
          rounded
        >
          S'inscrire
        </v-btn>
      </div>
    </div>
    <v-btn
      small
      v-show="inResearch"
      class="ml-10 mr-md-10"
      icon
      outlined
      @click="setInResearch(!inResearch)"
    >
      <v-icon>mdi-close</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapMutations } from 'vuex'
export default Vue.extend({
  name: 'HeaderComponent',
  data: () => ({
    timeout: null,
    items: ['Se connecter', "S'inscrire"],
  }),
  computed: {
    ...mapState(['inResearch']),
    text: {
      get() {
        return this.$store.state.searchText
      },
      set(value: string) {
        this.$store.commit('setSearchText', value)
      },
    },
  },
  methods: {
    ...mapMutations(['setInResearch']),
    isMobile(): string {
      if (
        /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        return '100%'
      } else if (/Tablet|iPad/i.test(navigator.userAgent)) {
        return '110'
      } else {
        return '110'
      }
    },
  },
})
</script>

<style lang="scss" scoped>
@import '../scss/header.scss';
</style>
