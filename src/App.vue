<template>
  <div class="bg-gray-50 font-sans leading-normal tracking-normal">
    <!-- Progress Bar only on Post -->
    <progress-bar
      v-if="currentRoute !== 'Home'"
      :progress="progress"
    />

    <!-- NavBar -->
    <the-navbar />

    <!-- Router View -->
    <div class="min-h-screen">
      <router-view v-slot="{ Component }">
        <transition
          name="fade"
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </div>

    <!-- Footer -->
    <the-footer />
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar'
import TheFooter from '@/components/TheFooter'
import ProgressBar from '@/components/ProgressBar'

export default {
  components: {
    TheNavbar,
    TheFooter,
    ProgressBar
  },
  data () {
    return {
      progress: 0
    }
  },
  computed: {
    currentRoute () {
      return this.$route.name
    }
  },
  mounted: function () {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeUnmount: function () {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll () {
      const scroll = (document.documentElement.scrollTop || document.body.scrollTop) / ((document.documentElement.scrollHeight || document.body.scrollHeight) - document.documentElement.clientHeight) * 100
      if (scroll > 100) {
        this.progress = 1
      } else if (scroll < 0) {
        this.progress = 0
      } else {
        this.progress = scroll
      }
    }
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>
