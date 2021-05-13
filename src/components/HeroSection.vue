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
        <div>
          <router-link
            :to="{ name: 'Liga' }"
            class="bg-indigo-800 rounded-md font-bold text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-indigo-600 mr-2"
          >
            Mas info
          </router-link>
          <router-link
            :to="{ name: 'Equipos' }"
            class="bg-green-400 rounded-md font-bold text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-green-300 ml-2"
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
