<template>
  <v-card elevation="0">
    <v-img
      class="issue"
      contain
      :aspect-ratio="issue.ratio"
      :src="issue.coverUrl"
      height="200"
      width="170"
    />
    <v-card-title class="publication-title pl-0 pl-sm-3 pl-md-4">
      {{ trimTitle(issue.publication.title) }}
    </v-card-title>
    <v-card-subtitle class="publication-date pl-0 pl-sm-3 pl-md-4">
      {{ readableDate(issue.releaseDate) }}
    </v-card-subtitle>
  </v-card>
</template>
<script lang="ts">
import Vue from 'vue'
import Issue from '@/store/interfaces/issue'
export default Vue.extend({
  name: 'IssueComponent',
  data: () => ({
    months: [
      'janv.',
      'févr.',
      'mars',
      'avr.',
      'mai',
      'juin',
      'juill.',
      'août',
      'sept.',
      'oct.',
      'nov.',
      'déc.',
    ],
  }),
  props: {
    issue: {
      type: Object as () => Issue,
      required: true,
    },
  },
  methods: {
    readableDate(releaseDate: Date): string {
      const dateToParse = new Date(releaseDate)
      const dayNumber = dateToParse.getDate()
      const year = dateToParse.getFullYear()
      const month = dateToParse.getMonth() - 1
      return `${dayNumber} ${this.months[month]} ${year}`
    },

    trimTitle(title: string): string {
      if (title.length > 19) {
        return `${title.slice(0, 19)}...`
      } else {
        return title
      }
    },
  },
})
</script>

<style lang="scss" scoped>
@import '../scss/issue.scss';
</style>
