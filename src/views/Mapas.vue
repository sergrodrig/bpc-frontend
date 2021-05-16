<template>
  <section
    class="text-gray-600 body-font"
  >
    <div class="container px-5 py-24 mx-auto max-w-6xl">
      <div class="flex flex-col text-center w-full mb-20">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-200 bg-black inline-block p-2">
          Mapas disponibles en la liga
        </h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
          Cada faccion se puede especializar en un mapa. Elijan los suyos pensando en sus cualidades.
        </p>
      </div>
      <transition name="fade">
        <!-- Cargando -->
        <div
          v-if="isFetching"
          class="flex flex-wrap -m-4"
        >
          <div
            v-for="skeleton in 12"
            :key="skeleton"
            class="lg:w-1/3 sm:w-1/2 p-4"
          >
            <div class="bg-gray-400 w-full h-48 min-w-full min-h-full animate-pulse" />
          </div>
        </div>
      </transition>
      <transition name="fade">
        <!-- Mapas cargados -->
        <div
          v-if="data"
          class="flex flex-wrap -m-4"
        >
          <div
            v-for="image in data.allMapas"
            :key="image.id"
            class="lg:w-1/3 sm:w-1/2 lg:h-60 p-4"
          >
            <map-card
              :name="image.name"
              :url="image.url"
              :description="image.description"
            />
          </div>
        </div>
      </transition>
    </div>
  </section>
</template>

<script>
// import AnimationIcon from '@/components/AnimationIcon'
import MapCard from '@/components/MapCard'
import { useQuery } from 'villus'

export default {
  name: 'Mapas',
  components: {
    // AnimationIcon,
    MapCard
  },
  setup () {
    const obtenerMapas = `
      query obtenerMapas{
        allMapas{
          id
          name
          url
        }
      }
    `
    const { data, isFetching } = useQuery({
      query: obtenerMapas
    })

    return { data, isFetching }
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
