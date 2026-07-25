<script setup>
import { ref } from 'vue'
import heroProducts from '../assets/images/m3.png'

const imgLoaded = ref(false)
</script>

<template>
  <section
    id="home"
    class="relative overflow-hidden min-h-[100svh] md:h-screen pt-24 pb-10 flex items-center"
    style="background: repeating-linear-gradient(90deg, #F5F5DC 0 140px, #f7e0c0 0 280px);"
  >
    <div class="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-6 px-4 xs:px-5 sm:px-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.7fr)]">
      <div class="order-2 md:order-1 text-center md:text-left" data-reveal>
        <p class="text-xs xs:text-sm sm:text-base font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-maja-orange">
          Cafe &amp; Donuts
        </p>
        <h1 class="mt-2 sm:mt-3 text-5xl xs:text-6xl sm:text-7xl md:text-[9.5rem] font-extrabold leading-[0.9] text-maja-orange">
          Maja
        </h1>
        <p class="mt-4 sm:mt-5 max-w-xs xs:max-w-sm sm:max-w-xl mx-auto md:mx-0 text-base xs:text-lg sm:text-xl text-black/80">
          Experience the comforting taste of our Best Champorado and the irresistible goodness of Maja Donuts in every bite.
        </p>
        <div class="mt-6 sm:mt-8 md:mt-12 flex flex-col xs:flex-row items-center justify-center md:justify-start gap-3 sm:gap-4 w-full max-w-xs xs:max-w-xl mx-auto md:mx-0">
          <a
            href="#booktable"
            class="w-full xs:w-auto inline-flex items-center justify-center rounded-full bg-maja-orange px-6 sm:px-8 py-2.5 sm:py-3 text-sm font-semibold text-white shadow-lg shadow-maja-orange/30 hover:bg-maja-orange-dark transition-all duration-200 hover:-translate-y-0.5"
          >
            Order Now
          </a>

          <a
            href="#menu"
            class="w-full xs:w-auto inline-flex items-center justify-center rounded-full border-2 border-black/80 bg-transparent px-6 sm:px-8 py-2.5 sm:py-3 text-sm font-semibold text-black hover:bg-black hover:text-white transition-all duration-200"
          >
            View Menu
          </a>
        </div>
      </div>

      <div class="order-1 md:order-2 flex justify-center md:justify-end" data-reveal>
        <img
          :src="heroProducts"
          alt="Maja Donuts boxes, drinks, and pastries assortment"
          class="w-full max-w-[15rem] xs:max-w-[18rem] sm:max-w-[28rem] md:max-w-[55rem] lg:max-w-[80rem] rounded-[1.25rem] drop-shadow-[0_28px_60px_rgba(0,0,0,0.14)] opacity-0 animate-scaleIn transition-transform duration-300 hover:scale-[1.03]"
          loading="eager"
          @load="imgLoaded = true"
        />
      </div>
    </div>
  </section>
</template>