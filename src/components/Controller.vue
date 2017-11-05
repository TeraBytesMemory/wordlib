<template lang="html">
  <div class="wordLibController">
    <div v-if='currentStatus == statusKey.NOT_RUNNING'>
      <span>WordLib</span>
      <div class="wordLibStart enable" @click='analyze()'>
        解析
      </div>
    </div>
    <div v-else-if='currentStatus == statusKey.ANALYZE'>
      <span>WordLib</span>
      <div class="wordLibStart disable">
        解析中...
      </div>
    </div>
    <div v-else-if='currentStatus == statusKey.SUCCESS'>
      <span>WordLib</span>
      <div class="wordLibStart enable" @click='toggle()'>
        解析結果
      </div>
    </div>
    <div v-else-if='currentStatus == statusKey.FAILURE'>
      <span>WordLib</span>
      <span class="wordLibMessage error">解析失敗</span>
      <div class="wordLibStart enable" @click='analyze()'>
        解析
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters({
    currentStatus: 'status',
    statusKey: 'statusKey',
    isShow: 'isShow',
    message: 'message'
  }),
  methods: mapActions([
    'analyze',
    'toggle'
  ])
}
</script>

<style lang="css">
.wordLibController {
  position: relative;
  top: 20px;
  right: 20px;
  background-color: #f8f8ff;
  box-shadow: 0 1px 3px rgba(172,172,255,0.12), 0 1px 2px rgba(172,172,255,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}
.wordLibStart {
  background-color: #f8f8ff;
  box-shadow: 0 3px 6px rgba(172,172,255,0.16), 0 3px 6px rgba(172,172,255,0.23);
}
.wordLibStart.enable {
  color: #6060ff;
  cursor: pointer;
}
.wordLibStart.disable {
  color: #dfdfff;
  cursor: default;
}
.wordLibMessage.error {
  color: #ffacac;
}
</style>
