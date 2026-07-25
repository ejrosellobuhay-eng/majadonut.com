<script setup>
import logo from '../assets/images/logo2.png'

const year = new Date().getFullYear()
const links = [
  { id: 'home', label: 'Home' },
  { id: 'menu', label: 'Menu' },
  { id: 'faqs', label: 'FAQs' },
  { id: 'contact', label: 'Contact Us' },
]

const socials = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/MAJAdoughsanddoughnuts',
    svg: 'M13 22v-9h3l.5-4H13V6.5C13 5.3 13.4 4.5 15 4.5h1.5V1.1C16 .9 14.9.8 13.7.8 11 .8 9 2.4 9 5.2V9H6v4h3v9h4z',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/maja_doughsanddoughnuts?igsh=MWc3MnFwbXdhcjV3cg%3D%3D',
    svg: null,
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@maja_cafeanddonuts?_r=1&_t=ZS-98Jy6pq3IMn',
    svg: 'M15 3c.4 2 2 3.6 4 4v3c-1.5 0-2.9-.4-4-1.2V14a5 5 0 11-5-5c.3 0 .7 0 1 .1v3.1a2 2 0 100 3.8V3h4z',
  },
]
</script>

<template>
  <footer class="relative bg-[#1a1210] text-white">
  
    <div class="h-[3px] w-full bg-gradient-to-r from-maja-orange/0 via-maja-orange to-maja-orange/0" aria-hidden="true" />

    <div class="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-14 sm:px-8 md:grid-cols-4">
      <div>
        <div class="flex items-center gap-2">
        <img :src="logo" alt="Maja Café & Donuts logo" class="h-25 w-24 object-contain" />
        </div>
        <p class="mt-4 text-sm leading-relaxed text-white/55">
          &rsquo; Experience the comforting taste of our Best Champorado and the irresistible goodness of Maja Donuts in every bite.
        </p>
      </div>

      <div>
        <h3 class="text-sm font-semibold uppercase tracking-wide text-maja-orange/80">Navigate</h3>
        <ul class="mt-4 space-y-2">
          <li v-for="link in links" :key="link.id">
            <a :href="`#${link.id}`" class="text-sm text-white/70 transition-colors duration-200 hover:text-maja-orange">
              {{ link.label }}
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="text-sm font-semibold uppercase tracking-wide text-maja-orange/80">Contact Information</h3>
        <ul class="mt-4 space-y-2 text-sm text-white/70">
          <li><a href="tel:+639205324748" class="transition-colors duration-200 hover:text-maja-orange">0920 532 4748</a></li>
          <li><a href="tel:+63495467620" class="transition-colors duration-200 hover:text-maja-orange">(049) 546 7620</a></li>
          <li>
            <a href="mailto:maja.doughsanddoughnuts@gmail.com" class="break-all transition-colors duration-200 hover:text-maja-orange">
              maja.doughsanddoughnuts@gmail.com
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="text-sm font-semibold uppercase tracking-wide text-maja-orange/80">Opening Hours</h3>
        <ul class="mt-4 space-y-1 text-sm text-white/70">
          <li>Monday&ndash;Sunday: <br />10:00 AM &ndash; 9:00 PM</li>
        </ul>
        <div class="mt-5 flex gap-3">
          <a
            v-for="s in socials"
            :key="s.name"
            :href="s.href"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="`Maja Donut on ${s.name}`"
            class="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-200 hover:-translate-y-1 hover:bg-maja-orange hover:text-white hover:shadow-lg hover:shadow-maja-orange/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-maja-orange"
          >
            <svg v-if="s.name === 'Instagram'" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" stroke-width="2" />
              <circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
            </svg>
            <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path :d="s.svg" />
            </svg>
          </a>
        </div>
      </div>
    </div>

    <div class="border-t border-white/10 py-6">
      <p class="text-center text-xs text-white/40">
        &copy; {{ year }} Maja Caf&eacute; &amp; Donuts. All rights reserved.
      </p>
    </div>
  </footer>
</template>