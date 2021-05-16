<template>
  <div
    id="hero"
    class="w-full h-screen bg-center bg-no-repeat bg-cover"
  >
    <div class="w-full h-screen bg-opacity-20 bg-black flex justify-center items-center">
      <div class="mx-4 text-center text-white">
        <h1 class="font-bold text-6xl mb-4 bg-black">
          BPC League (beta)
        </h1>
        <h2 class="font-bold text-3xl mb-12 bg-gray-900">
          4 Facciones / 20 jugadores / 0 manos
        </h2>
        <div class="space-x-4">
          <router-link
            :to="{ name: 'Liga' }"
            class="rounded hover:rounded-lg font-bold text-white px-4 py-5 transition duration-300 ease-in-out bg-green-600 hover:bg-green-500 shadow"
          >
            Mas informacion de la liga
          </router-link>
          <router-link
            :to="{ name: 'Equipos' }"
            class="rounded hover:rounded-lg font-bold text-white px-4 py-5 transition duration-300 ease-in-out bg-indigo-500 hover:bg-indigo-400 shadow"
          >
            Equipos
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#hero {
  background-image: url('https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/mw-wz/WZ-WW001-TOUT.jpg');
  background-position: top;
}
</style>
