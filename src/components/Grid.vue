<template>
  <v-container fluid class="mt-sm-12 mt-0 mt-5">
    <v-row :no-gutters="isMobileOrTablet()" class="pa-5 pa-md-auto">
      <v-col
        v-for="newspaper in filteredPublicationsCategory"
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
import { mapGetters } from 'vuex'
import Issue from '@/components/Issue.vue'

export default Vue.extend({
  name: 'NewsPapers',
  components: {
    Issue,
  },
  computed: {
    ...mapGetters(['filteredPublicationsCategory']),
  },
  methods: {
    isMobileOrTablet(): boolean {
      if (
        /Android|webOS|iPhone|iPod|BlackBerry|Tablet|iPad|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        return false
      } else {
        return true
      }
    },
  },
})
</script>
