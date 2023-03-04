<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Home from '@/views/Home.vue'
</script>

<template>
  <Header id="Header"/>

  <main>
    <Home />
  </main>

  <Footer />
</template>