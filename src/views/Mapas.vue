<template>
  <transition name="fade">
    <div>
      <section
        v-if="isFetching"
        class="text-gray-600 body-font min-h-screen flex justify-center items-center"
      >
        <p>
          <animation-icon />
        </p>
      </section>
      <section
        v-if="data"
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
          <div class="flex flex-wrap -m-4">
            <div
              v-for="image in data.allMapas"
              :key="image.id"
              class="lg:w-1/3 sm:w-1/2 p-4"
            >
              <map-card
                :name="image.name"
                :url="image.url"
                :description="image.description"
              />
            </div>
          </div>
        </div>
      </section>
      <div>
        <transition name="fade" />
      </div>
    </div>
  </transition>
</template>

<script>
import AnimationIcon from '@/components/AnimationIcon'
import MapCard from '@/components/MapCard'
import { useQuery } from 'villus'

export default {
  name: 'Mapas',
  components: {
    AnimationIcon,
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
