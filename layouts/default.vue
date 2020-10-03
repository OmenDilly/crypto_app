<template>
  <div class="main__container">
    <Nav/>
    <Nuxt />
  </div>
</template>

<script>
import Nav from '~/components/Nav'
export default {
  components: {
    Nav
  }
}
</script>

<style lang='sass'>
html 
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif
  font-size: 16px
  word-spacing: 1px
  -ms-text-size-adjust: 100%
  -webkit-text-size-adjust: 100%
  -moz-osx-font-smoothing: grayscale
  -webkit-font-smoothing: antialiased
  box-sizing: border-box
  height: 100%
  body
    height: 100%
  .main__container
    height: 100%
    display: grid

* 
  box-sizing: border-box
  margin: 0
  padding: 0

</style>
