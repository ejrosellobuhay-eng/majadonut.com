<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const visible = ref(false)

function onScroll() {
  visible.value = window.scrollY > 480
}
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <Transition name="pop">
    <button
      v-if="visible"
      type="button"
      aria-label="Scroll back to top"
      class="fixed bottom-6 right-5 sm:right-8 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-maja-orange text-white shadow-lg hover:bg-maja-orange-dark transition-colors duration-200"
      @click="scrollToTop"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 19V5M5 12l7-7 7 7" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </button>
  </Transition>
</template>

<style scoped>
.pop-enter-active,
.pop-leave-active {
  transition: transform 0.25s ease, opacity 0.25s ease;
}
.pop-enter-from,
.pop-leave-to {
  transform: scale(0.5);
  opacity: 0;
}
</style>
