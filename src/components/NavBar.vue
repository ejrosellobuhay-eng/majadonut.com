<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import logo from '../assets/images/majalogo.png'

defineProps({
  activeSection: { type: String, default: 'home' },
})

const isOpen = ref(false)
const isScrolled = ref(false)
const links = [
  { id: 'home', label: 'Home' },
  { id: 'menu', label: 'Menu' },
  { id: 'faqs', label: 'FAQs' },
  { id: 'contact', label: 'Contact Us' },
]

function closeMenu() {
  isOpen.value = false
}

function handleScroll() {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header :class="['fixed top-0 inset-x-0 z-50 transition-colors duration-300', isScrolled ? 'bg-white shadow-md' : 'bg-transparent shadow-none']">
    <nav class="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-12 py-5" aria-label="Main navigation">
      <a href="#home" class="flex items-center gap-3 shrink-0" @click="closeMenu">
        <img :src="logo" alt="Maja Café & Donuts logo" class="h-20 w-20 sm:h-24 sm:w-24 object-contain" />
      </a>

      <ul class="hidden md:flex items-center gap-12">
        <li v-for="link in links" :key="link.id">
          <a
            :href="`#${link.id}`"
            class="font-semibold text-lg tracking-wide transition-colors duration-200 hover:text-maja-orange"
            :class="activeSection === link.id ? 'text-maja-orange' : 'text-black'"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>

      <button
        type="button"
        class="md:hidden flex h-10 w-10 flex-col items-center justify-center gap-1.5"
        :aria-expanded="isOpen"
        aria-controls="mobile-menu"
        aria-label="Toggle navigation menu"
        @click="isOpen = !isOpen"
      >
        <span
          class="h-0.5 w-6 bg-black transition-transform duration-300"
          :class="isOpen ? 'translate-y-2 rotate-45' : ''"
        />
        <span class="h-0.5 w-6 bg-black transition-opacity duration-300" :class="isOpen ? 'opacity-0' : ''" />
        <span
          class="h-0.5 w-6 bg-black transition-transform duration-300"
          :class="isOpen ? '-translate-y-2 -rotate-45' : ''"
        />
      </button>
    </nav>

    <!-- Mobile backdrop -->
    <Transition name="fade">
      <div v-if="isOpen" class="fixed inset-0 top-[64px] z-40 bg-black/40 md:hidden" @click="closeMenu" />
    </Transition>

    <!-- Mobile menu -->
    <Transition name="slide">
      <div
        v-if="isOpen"
        id="mobile-menu"
        class="md:hidden fixed top-[64px] inset-x-0 z-40 bg-white shadow-lg border-t border-black/5"
      >
        <ul class="flex flex-col px-6 py-4 gap-1">
          <li v-for="link in links" :key="link.id">
            <a
              :href="`#${link.id}`"
              class="block py-3 font-medium text-base"
              :class="activeSection === link.id ? 'text-maja-orange' : 'text-black'"
              @click="closeMenu"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateY(-8px);
  opacity: 0;
}
</style>
