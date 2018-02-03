<template lang="html">
  <ul class="wordLibList">
    <li class="wordLibClose" @click='close()'>閉じる</li>
    <li v-for='keyword in keywords'>
      <a :href="href(keyword)" TARGET="_blank">
        {{keyword}}
      </a>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    keywords: 'keywords'
  }),
  methods: {
    close () {
      this.$store.commit('TOGGLE')
    },
    href (query) {
      return `http://www.weblio.jp/content/${query}`
    }
  }
}
</script>

<style lang="css">
.wordLibList {
  position: relative;
  top: 0;
  right: 0;
  height: 100vh;
  overflow: scroll;
}
.wordLibList > li {
  background-color: #f8f8ff;
}
.wordLibList > li > a {
  text-decoration: none;
  color: #6060ff;
}
.wordLibList > li > a:visited {
  text-decoration: none;
  color: #ffacac;
}
.wordLibList > li.wordLibClose {
  color: #6060ff;
  cursor: pointer;
}
</style>
