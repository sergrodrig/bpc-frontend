<template>
  <section class="text-gray-600 body-font pt-12">
    <div v-if="isFetching">
      <p>fetching...</p>
    </div>
    <div
      v-if="data"
      class="space-y-12"
    >
      <div
        v-for="week in data.allCodLeagueWeeks"
        :key="week.id"
      >
        <!-- cabecera -->
        <div class="bg-green-500 rounded text-white flex flex-col justify-center items-center py-1">
          <h1 class="text-xl font-bold">
            Fecha {{ week.week }}
          </h1>
          <h2 class="text-xs uppercase font-medium tracking-wider">
            {{ humanFriendlyDate(week.date) }} ({{ diffForHumans(week.date) }})
          </h2>
        </div>
        <!-- resultados -->
        <div
          v-for="result in week.results"
          :key="result.id"
          class="grid grid-cols-11 border-b"
        >
          <div class="text-right col-start-1 col-end-5">
            {{ result.homeFaction.name }}
          </div>
          <div class="text-right col-start-5 col-end-6">
            {{ result.homeScore }}
          </div>
          <div class="text-center col-start-6 col-end-7">
            vs
          </div>
          <div class="text-left col-start-7 col-end-8">
            {{ result.awayScore }}
          </div>
          <div class="text-left col-start-8 col-end-12">
            {{ result.awayFaction.name }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useQuery } from 'villus'

import dayjs from 'dayjs'
import localeEs from 'dayjs/locale/es'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

export default {
  name: 'ResultadosFechas',
  setup () {
    const obtenerResultados = `
      query obtenerResultados {
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
    const { data, isFetching } = useQuery({
      query: obtenerResultados
    })

    return { data, isFetching }
  },
  methods: {
    diffForHumans (date) {
      return dayjs(date).locale(localeEs).fromNow()
    },
    humanFriendlyDate (date) {
      return dayjs(date).locale(localeEs).format('D MMMM')
    }
  }
}
</script>
