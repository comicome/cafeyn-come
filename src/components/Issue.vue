<template>
  <v-card elevation="0">
    <v-img class="issue" contain :src="issue.coverUrl"  height="200" width="170"/>
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
export default Vue.extend({
  name: 'IssueComponent',
  data: ()=> ({
    months: [
      "janv.",
      "févr.",
      "mars",
      "avr.",
      "mai",
      "juin",
      "juill.",
      "août",
      "sept.",
      "oct.",
      "nov.",
      "déc.",
    ]
  }),
  props: {
    issue: {
      type: Object,
      required: true
    }
  },
  methods:{
    readableDate(releaseDate: Date): string {
      const dateToParse = new Date(releaseDate);
      const dayNumber = dateToParse.getDate();
      const year = dateToParse.getFullYear();
      const month = dateToParse.getMonth() - 1;
      return `${dayNumber} ${this.months[month]} ${year}`;
    },

    trimTitle(title: string): string {
      if (title.length > 19) {
        return `${title.slice(0, 19)}...`;
      } else {
        return title;
      }
    }
  }
})
</script>

<style scoped>

.publication-title {
  font-family: "Soleil", Helvetica, Arial;
  font-size: 14px;
  color: #1e323d;
  padding: 5px 0px 10px 5px;
}

.publication-date {
  font-family: "Soleil", Helvetica, Arial;
  font-size: 12px;
  color: #536067;
  padding-left: 5px;
}

.issue {
  cursor: pointer;
  position: relative;
  top: 0;
  transition: top ease 0.5s;
  box-shadow: 0 1px 3px rgb(0 0 0 / 12%);
  transition: all .3s cubic-bezier(.25,.8,.25,1);
}
.issue:hover {
  top: -10px;
}


</style>