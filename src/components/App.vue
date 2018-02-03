<template lang="html">
  <div id='wordLibKeywords' class='wordLibContainer' v-if='currentStatus==statusKey.SUCCESS && isShow'>
    <keywords></keywords>
  </div>
  <div id='wordLibController' class='wordLibContainer' v-else>
    <controller></controller>
  </div>
</template>

<script>
import Keywords from './Keywords.vue'
import Controller from './Controller.vue'
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    currentStatus: 'status',
    statusKey: 'statusKey',
    isShow: 'isShow'
  }),
  components: {
    Keywords,
    Controller
  }
}
</script>

<style lang="css">
.wordLibContainer {
  margin: 0;
  padding: 0;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 2147483647;
}
</style>
