<template>
  <transition name="fade">
    <div class="pt-12">
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
        class="text-gray-600 body-font min-h-screen space-y-24"
      >
        <div
          v-for="faccion in data.allFacciones"
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
import AnimationIcon from '@/components/AnimationIcon'
import { useQuery } from 'villus'

export default {
  name: 'Equipos',
  components: {
    AnimationIcon
  },
  setup () {
    const obtenerFacciones = `
      query obtenerFacciones{
        allFacciones{
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

</style>
