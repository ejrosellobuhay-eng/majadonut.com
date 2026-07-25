<script setup>
import signature from '../assets/images/signature.jpg'
import premium from '../assets/images/premium.jpg'
import elite from '../assets/images/elite.jpg'

defineEmits(['view-image'])

const baseInclusions = [
  'Supply of Initial Inventory',
  'POS, Equipment, & Appliances',
  'Use of Brand & Trademark, Menu & Brand Elements',
  'Full Training',
  'Operations Manual',
  'Marketing Assistance',
  'Social Media Marketing',
]

const packages = [
  {
    name: 'Signature',
    tier: 'Lowest Cost',
    format: 'Kiosk or In-line',
    where: 'Ideal within Malls & Supermarkets',
    img: signature,
    inclusions: baseInclusions,
  },
  {
    name: 'Premium',
    tier: 'Moderate Cost',
    format: 'In-Line or Stand Alone',
    where: 'Ideal within Malls, Supermarkets & Commercial Areas',
    img: premium,
    inclusions: [...baseInclusions.slice(0, 5), 'Food Panda & Grab Assistance', 'Social Media Marketing'],
  },
  {
    name: 'Elite',
    tier: 'Highest Cost',
    format: 'In-Line or Stand Alone',
    where: 'Ideal within Commercial Area',
    img: elite,
    inclusions: baseInclusions,
  },
]
</script>

<template>
  <section class="relative py-16 sm:py-20 bg-[#FFF6A1] overflow-hidden">
    
    <svg
      class="absolute top-0 left-0 w-full h-16 sm:h-24 text-white"
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M0,0 C240,90 480,90 720,45 C960,0 1200,0 1440,55 L1440,0 L0,0 Z"
      />
    </svg>

    <div class="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 text-center" data-reveal>
      <h2 class="text-3xl sm:text-4xl font-bold text-black">
        Franchise <span class="text-maja-orange">Package</span>
      </h2>
      <p class="mt-3 text-black/70">Your Gateway to Business Success!</p>
    </div>

    <div class="relative z-10 mt-12 grid max-w-6xl mx-auto grid-cols-1 gap-8 px-5 sm:px-8 md:grid-cols-3">
      <article
        v-for="pkg in packages"
        :key="pkg.name"
        class="flex flex-col rounded-2xl bg-white/70 ring-1 ring-black/10 overflow-hidden"
        data-reveal
      >
        <button
          type="button"
          class="focus-visible:outline focus-visible:outline-3 focus-visible:outline-maja-orange"
          :aria-label="`View ${pkg.name} franchise location photo larger`"
          @click="$emit('view-image', { src: pkg.img, alt: `${pkg.name} franchise storefront example` })"
        >
          <img
            :src="pkg.img"
            :alt="`${pkg.name} franchise storefront example`"
            class="h-48 w-full object-cover hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </button>

        <div class="flex flex-1 flex-col p-6">
          <h3 class="text-xl font-bold text-maja-orange">{{ pkg.name }}</h3>
          <p class="mt-1 text-sm font-medium text-black/70">{{ pkg.tier }}</p>
          <p class="text-sm text-black/70">{{ pkg.format }}</p>
          <p class="text-sm text-black/50">{{ pkg.where }}</p>

          <p class="mt-4 text-xs font-semibold uppercase tracking-wide text-black/60">Package Inclusions</p>
          <ul class="mt-2 space-y-2 text-sm text-black/80">
            <li v-for="item in pkg.inclusions" :key="item" class="flex items-start gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" class="mt-0.5 shrink-0 text-maja-orange" aria-hidden="true">
                <path d="M5 13l4 4L19 7" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </article>
    </div>
  </section>
</template>