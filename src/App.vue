<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import util from '@/libs/util'
export default {
  name: 'app',
  watch: {
    '$i18n.locale': 'i18nHandle'
  },
  created () {
    this.i18nHandle(this.$i18n.locale)
  },
  methods: {
    i18nHandle (val, oldVal) {
      util.cookies.set('lang', val)
      document.querySelector('html').setAttribute('lang', val)
    }

  },
  mounted () {
    window.onbeforeunload = function (e) {
      // e = e || window.event

      // // 兼容IE8和Firefox 4之前的版本
      // if (e) {
      //   e.returnValue = '关闭提示'
      // }

      // // Chrome, Safari, Firefox 4+, Opera 12+ , IE 9+
      // return '关闭提示'
    }
  }
}
</script>

<style lang="scss">
@import '~@/assets/style/public-class.scss';
</style>
