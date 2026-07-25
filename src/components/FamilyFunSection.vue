<script setup>
import decorating from '../assets/images/m7.jpg'
import cart from '../assets/images/cart.jpg'

const kidsTakeoverPdf = '/pdfs/kidstakeover.pdf'
const partyCartPdf = '/pdfs/kart.pdf'
</script>

<template>
  <section class="relative overflow-hidden bg-[#FFF6A1] py-16 sm:py-20">
    <!-- Curvy top edge — kulay maja-bg dahil yan din ang background ng MenuSection sa itaas nito, kaya smooth ang daloy pababa -->
    <svg
      class="absolute top-0 left-0 w-full h-16 sm:h-24 text-maja-bg"
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M0,0 C240,90 480,90 720,45 C960,0 1200,0 1440,55 L1440,0 L0,0 Z"
      />
    </svg>

    <!-- Curvy bottom edge — puti dahil FaqAccordion (white bg) ang sumusunod na section -->
    <svg
      class="absolute bottom-0 left-0 w-full h-16 sm:h-24 text-white"
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M0,120 C240,10 480,10 720,60 C960,110 1200,110 1440,50 L1440,120 L0,120 Z"
      />
    </svg>

    <div class="relative z-10 mx-auto grid max-w-6xl gap-16 px-5 sm:px-8">
      <div class="grid gap-10 md:grid-cols-2 items-center">
        <div>
          <h2 class="text-3xl sm:text-4xl font-bold">
            Kid&rsquo;s <span class="text-maja-orange">Takeover</span>
          </h2>
          <p class="mt-4 text-black/70 leading-relaxed">
            Calling all young chefs and baristas! Join us for three fun-filled workshops: become a Mini Pizza Chef, a Mini Barista, or a Mini Donut Decorator. Let&rsquo;s cook, brew, and decorate your way to delicious fun.
          </p>
          <a
            :href="kidsTakeoverPdf"
            class="mt-6 inline-flex items-center justify-center rounded-full bg-maja-orange px-7 py-3 text-sm font-semibold text-white shadow-md hover:bg-maja-orange-dark transition-colors duration-200"
          >
            Learn More
          </a>
        </div>

        <div class="overflow-hidden rounded-2xl shadow-xl">
          <img
            :src="decorating"
            alt="Child decorating a donut during Maja's Kid's Takeover workshop"
            class="w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      <div class="grid gap-10 md:grid-cols-2 items-center">
        <div class="order-2 md:order-1 overflow-hidden rounded-2xl shadow-xl">
          <img
            :src="cart"
            alt="Maja donut party cart decorated with balloons for events"
            class="w-full object-cover"
            loading="lazy"
          />
        </div>
        <div class="order-1 md:order-2">
          <h2 class="text-3xl sm:text-4xl font-bold">
            Party <span class="text-maja-orange">Cart</span>
          </h2>
          <p class="mt-4 text-black/70 leading-relaxed">
            Because parties should never be boring, we are introducing our most unique and creative donut party cart! Contact us today to learn more.
          </p>
          <a
            :href="partyCartPdf"
            class="mt-6 inline-flex items-center justify-center rounded-full bg-maja-orange px-7 py-3 text-sm font-semibold text-white shadow-md hover:bg-maja-orange-dark transition-colors duration-200"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  </section>
</template>