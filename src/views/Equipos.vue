<template>
  <transition name="fade">
    <div class="pt-12">
      <section
        v-if="isFetching"
        class="text-gray-600 body-font min-h-screen animate-pulse space-y-24"
      >
        <div
          v-for="keya in 3"
          :key="keya"
          class="container mx-auto max-w-5xl"
        >
          <div class="w-full mb-4">
            <div class="bg-gray-300 h-14 p-2 mb-8" />
            <div class="lg:w-2/3 mx-auto leading-relaxed text-base" />
          </div>
          <div class="flex flex-wrap -m-2">
            <div
              v-for="keyb in 6"
              :key="keyb"
              class="w-full lg:w-1/3 md:w-1/2 p-2"
            >
              <div class="h-256 flex items-center border-gray-200 bg-gray-300 border p-4 rounded-lg">
                <div class="w-16 h-16 bg-gray-200 object-cover object-center flex-shrink-0 rounded-full mr-4 flex justify-center items-center">
                  <div class="text-center text-gray-50" />
                </div>
                <div class="flex-grow">
                  <div class="text-gray-900 title-font font-medium" />
                  <div class="text-gray-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        v-if="data"
        class="text-gray-600 body-font min-h-screen space-y-24"
      >
        <div
          v-for="faccion in data.allCodFactions"
          :key="faccion.id"
          class="container mx-auto max-w-5xl"
        >
          <div class="flex flex-col text-center w-full mb-4">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-200 bg-black p-2">
              {{ faccion.name }} [{{ faccion.initials }}]
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              {{ faccion.description }}
            </p>
          </div>
          <div class="flex flex-wrap -m-2">
            <div
              v-for="soldado in faccion.soldiers"
              :key="soldado.id"
              class="p-2 lg:w-1/3 md:w-1/2 w-full"
            >
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <div class="w-16 h-16 bg-gray-500 object-cover object-center flex-shrink-0 rounded-full mr-4 flex justify-center items-center">
                  <p class="text-center text-gray-50">
                    {{ faccion.initials }}
                  </p>
                </div>
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                    {{ soldado.nick }}
                  </h2>
                  <p class="text-gray-500">
                    @{{ soldado.nick }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </transition>
</template>

<script>
import { useQuery } from 'villus'

export default {
  name: 'Equipos',
  setup () {
    const obtenerFacciones = `
      query obtenerFacciones{
        allCodFactions{
          id
          name
          initials
          soldiers{
            id
            nick
          }
        }
      }
    `
    const { data, isFetching } = useQuery({
      query: obtenerFacciones
    })

    return { data, isFetching }
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.9s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
