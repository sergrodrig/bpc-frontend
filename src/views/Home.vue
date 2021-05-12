<template>
  <div>
    <hero-section />
    <hero-quote />
  </div>
</template>

<script>
import HeroSection from '@/components/HeroSection'
import HeroQuote from '@/components/HeroQuote'

export default {
  name: 'Home',
  components: {
    HeroQuote,
    HeroSection
  }
}
</script>

<style scoped>

</style>
