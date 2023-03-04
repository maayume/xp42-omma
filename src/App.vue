<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Home from '@/views/Home.vue'

export default {
  components: {
    Header,
    Home,
    Footer,
  }
}
</script>

<template>
  <Header />

  <router-view />

  <Footer />
</template>