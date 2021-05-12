<template>
  <nav
    id="header"
    class="fixed w-full z-10 top-0 transition duration-300 ease-in-out"
    :class="{
      'bg-white shadow': !transparentNavBar || currentRoute === 'Home',
      'transform-gpu -translate-y-full': !showNavbar
    }"
  >
    <!-- nav -->
    <div class="w-full md:max-w-4xl mx-auto flex flex-wrap items-center justify-between mt-0 py-3">
      <!-- logo -->
      <div class="pl-4">
        <router-link
          class="text-gray-900 no-underline hover:no-underline font-extrabold text-xl"
          :to="{ name: 'Home' }"
        >
          <div class="lg:hidden">
            BPC <span class="text-gray-400 ml-2">{{ currentRoute }}</span>
          </div>
          <div class="hidden lg:block">
            BPC
          </div>
        </router-link>
      </div>

      <!-- Menu hamburgesa -->
      <div class="block lg:hidden pr-4">
        <button
          id="nav-toggle"
          class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-900 hover:border-green-500 appearance-none focus:outline-none"
          @click="toggleHamburger"
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <!-- menu -->
      <div
        id="nav-content"
        class="w-full flex-grow lg:flex lg:items-center lg:w-auto mt-2 lg:mt-0 bg-gray-100 md:bg-transparent z-20"
        :class="{ 'hidden': !hamburger }"
      >
        <ul class="list-reset lg:flex justify-end flex-1 items-center">
          <li class="rounded m-2">
            <router-link
              class="block py-2 px-4 text-black lg:text-white lg:text-gray-900 no-underline hover:font-bold"
              :class="{ 'text-gray-900 font-bold': currentRoute === 'Torneo' }"
              :to="{ name: 'Torneo'}"
              @click="toggleHamburger"
            >
              Torneo
            </router-link>
          </li>
          <li class="rounded m-2">
            <router-link
              class="block py-2 px-4 text-black lg:text-white lg:text-gray-900 no-underline hover:font-bold"
              :class="{ 'text-gray-900 font-bold': currentRoute === 'Equipos' }"
              :to="{ name: 'Equipos' }"
              @click="toggleHamburger"
            >
              Equipos
            </router-link>
          </li>
          <li class="rounded m-2">
            <router-link
              class="block py-2 px-4 text-black lg:text-white lg:text-gray-900 no-underline hover:font-bold"
              :class="{ 'text-gray-900 font-bold': currentRoute === 'Mapas' }"
              :to="{ name: 'Mapas' }"
              @click="toggleHamburger"
            >
              Mapas
            </router-link>
          </li>
          <li class="rounded lg:rounded-none m-2">
            <router-link
              class="block py-2 px-4 text-black lg:text-white lg:text-gray-900 no-underline hover:font-bold"
              :class="{ 'text-gray-900 font-bold': currentRoute === 'Resultados' }"
              :to="{ name: 'Resultados' }"
              @click="toggleHamburger"
            >
              Resultados
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TheNavbar',
  data () {
    return {
      onTop: true,
      showNavbar: true,
      hamburger: false,
      lastScrollPosition: 0,
      postId: this.$store.state.postId,
      transparentNavBar: true
    }
  },
  computed: {
    currentRoute () {
      return this.$route.name
    },
    authUser () {
      return this.$store.state.authUser
    },
    users () {
      return this.$store.state.users
    },
    user () {
      return this.users.find(user => user.id === this.authUser)
    }
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeUnmount: function () {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll () {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition < 0) {
        return
      }
      // Si la pagina esta en su maxima posicion de arriba, devuelve true
      this.onTop = currentScrollPosition === 0
      this.transparentNavBar = currentScrollPosition < 50

      // Si el scroll va bajando se esconde el navbar, si va subiendo se muestra
      this.showNavbar = currentScrollPosition < this.lastScrollPosition
      this.lastScrollPosition = currentScrollPosition
    },
    toggleHamburger () {
      this.hamburger = !this.hamburger
    }
  }
}
</script>

<style scoped>
.progress {
  background: linear-gradient(to right, #F9EC31 var(--scroll), transparent 0);
  background-repeat: no-repeat;
  position: fixed;
  width: 100%;
  height: 4px;
  z-index: 1;
}
</style>
