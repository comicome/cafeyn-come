<template>
  <v-app-bar app absolute color="white" elevation="0" height="80" class="navbar">
    <v-btn class="hidden-sm-and-up" icon @click="setOnSearch(!onSearch)">
        <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-toolbar-title class="cafeyn-logo mr-lg-16">
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
      v-show="!onSearch"
      class="mr-0 ml-lg-16 mr-md-3 hidden-xs-only transition-swing"
      max-width="420"
    >
      <v-text-field
        ref="search"
        v-model="text"
        label="Rechercher un titre de presse ou un article"
        flat
        hide-details
        append-icon="mdi-magnify"
        solo
        class="search-field"
        @click="setOnSearch(true)"
      />
    </v-responsive>
    <v-spacer class="hidden-sm-and-down"></v-spacer>

    <div v-if="!onSearch" class="d-flex align-center pr-sm-5 pl-sm-16">
     <v-btn
        elevation="1"
        icon
        outlined
        height="38"
        width="38"
        class="rounded-circle gift-btn mr-2  mr-sm-4"
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
            class="hidden-md-and-up menu ml-2 ml-sm-4"  
            v-bind="attrs" 
            v-on="on"
          >
          <v-img
              alt="Cafeyn Logo"
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
    <v-btn class="header-btn hidden-sm-and-down ml-lg-5" rounded outlined color="#1e323d" dark> Se connecter </v-btn>
    <v-btn class="header-btn hidden-sm-and-down ml-lg-5 mr-lg-10 login-btn" rounded> S'inscrire </v-btn>
    </div>
    <v-btn small v-show="onSearch" class="mr-10" icon outlined @click="setOnSearch(!onSearch)">
        <v-icon>mdi-close</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState, mapMutations} from 'vuex'
export default Vue.extend({
  name: 'HeaderComponent',
    data: () => ({
    timeout: null,
    items: ['Se connecter', "S'inscrire"]
  }),
  computed: {
    ...mapState(['onSearch']),
    text: {
      get() {
        return this.$store.state.searchText
      },
      set(value: string) {
        this.$store.commit('setSearchText', value)
      }
    }
  },
    methods: {
    ...mapMutations(['setOnSearch']),
     isMobile(): string {
      if(/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return '100%'
      }
      else if(/Tablet|iPad/i.test(navigator.userAgent)){
        return '110'
      }
       else {
        return '110'
      }
    }
  }

});

</script>

<style scoped>
@media (max-width: 400px) {
  .navbar{
    min-height: 70px !important;
    display: flex;
    align-items: center;
  }
  .cafeyn-logo{
    width: 190px;
  }
  .v-btn--rounded.menu{
    padding: 0 10px !important;
  }
  .gift-btn {
    height: 36px !important;
    width: 36px !important;
  }
}

.separator{
  height: 40px;
}

.search-field{
  color: #536067;
  border: 1px solid #e0e0e0;
}

div.v-toolbar__content{
  border-bottom: 1px solid #ececec !important;
}

.header-btn{
  font-family: 'Soleil-Bold';
  font-size: 10px !important;
}

button.login-btn{
  color: #1e323d !important; 
  background-color: #fedc84 !important;
}

</style>

