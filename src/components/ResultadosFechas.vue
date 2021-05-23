<template>
  <section class="text-gray-600 body-font pt-12">
    <div
      v-if="data"
      class="space-y-12"
    >
      <div
        v-for="fecha in data.allCodLeagueWeeks"
        :key="fecha.id"
      >
        <!-- cabecera -->
        <div class="bg-green-500 rounded text-white flex flex-col justify-center items-center py-1">
          <h1 class="text-xl font-bold">
            Fecha {{ fecha.week }}
          </h1>
          <h2 class="text-xs uppercase font-medium tracking-wider">
            {{ fecha.date }}
          </h2>
        </div>
        <!-- resultados -->
        <div
          v-for="resultado in fecha.results"
          :key="resultado.id"
          class="grid grid-cols-11 border-b"
        >
          <div class="text-right col-start-1 col-end-5">
            {{ resultado.homeFaction.name }}
          </div>
          <div class="text-right col-start-5 col-end-6">
            {{ resultado.homeScore }}
          </div>
          <div class="text-center col-start-6 col-end-7">
            vs
          </div>
          <div class="text-left col-start-7 col-end-8">
            {{ resultado.awayScore }}
          </div>
          <div class="text-left col-start-8 col-end-12">
            {{ resultado.awayFaction.name }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useQuery } from 'villus'

export default {
  name: 'ResultadosFechas',
  setup () {
    const allCodLeagueWeeks = `
      query allCodLeagueWeeks{
        allCodLeagueWeeks {
          id
          week
          date
          results {
            id
            season
            week {
              week
            }
            homeFaction {
              name
            }
            awayFaction {
              name
            }
            homeScore
            awayScore
            homeRounds
            awayRounds      
          }
        }
      }
    `
    const { data } = useQuery({
      query: allCodLeagueWeeks
    })

    return { data }
  }
}
</script>

<style>

</style>
