<template>
  <footer class="bg-white border-t border-gray-400 shadow">
    <div class="container max-w-4xl mx-auto flex py-8">
      <div class="w-full mx-auto flex flex-wrap">
        <div class="flex w-full md:w-1/2 ">
          <div class="px-8">
            <h3 class="font-bold text-gray-900">
              BPC
            </h3>
            <p class="py-4 text-gray-600 text-sm">
              Somos mancos pero francos.
            </p>
          </div>
        </div>

        <div class="flex flex-col w-full md:w-1/2">
          <div class="px-8">
            <h3 class="font-bold text-gray-900">
              RRSS
            </h3>
            <ul class="list-reset items-center text-sm pt-3">
              <li>
                <a
                  class="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-1"
                  href="https://www.twitch.tv/bulletsproofcompany"
                >
                  <svg-twitch />
                </a>
              </li>
              <li>
                <a
                  class="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-1"
                  href="https://www.facebook.com/chernobyl.gaming.9"
                ><svg-facebook /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import SvgTwitch from '@/components/SvgTwitch'
import SvgFacebook from '@/components/SvgFacebook'

export default {
  components: { SvgFacebook, SvgTwitch }
}
</script>

<style>

</style>
