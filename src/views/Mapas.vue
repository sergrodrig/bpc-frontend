<template>
  <section class="text-gray-600 body-font pt-12">
    <div class="container px-5 mx-auto max-w-6xl">
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
          class="flex flex-wrap -m-4 justify-center"
        >
          <div
            v-for="image in data.allCod_Mapas"
            :key="image.id"
            class="lg:w-1/3 sm:w-1/2 lg:h-60 p-4"
          >
            <map-card
              :name="image.name"
              :url="image.photo.image.publicUrlTransformed"
              :description="image.photo.altText"
              class="hover:shadow-xl"
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
query obtenerMapas {
  allCod_Mapas {
    id
    name
    size
    photo {
      image {
        publicUrl
        publicUrlTransformed(
          transformation: {
            format: "auto"
            crop: "scale"
            quality: "auto"
            width: "600"
          }
        )
      }
      altText
    }
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
