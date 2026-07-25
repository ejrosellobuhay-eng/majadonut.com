<script setup>
import { onMounted, onBeforeUnmount, watch } from 'vue'

const props = defineProps({
  src: { type: String, default: '' },
  alt: { type: String, default: '' },
  open: { type: Boolean, default: false },
})
const emit = defineEmits(['close'])

function onKeydown(e) {
  if (e.key === 'Escape') emit('close')
}

watch(
  () => props.open,
  (isOpen) => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
  }
)

onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <Transition name="modal-fade">
    <div
      v-if="open"
      class="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      :aria-label="alt || 'Image preview'"
      @click.self="emit('close')"
    >
      <button
        type="button"
        class="absolute top-4 right-4 sm:top-6 sm:right-6 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white text-2xl leading-none hover:bg-maja-orange transition-colors duration-200"
        aria-label="Close image preview"
        @click="emit('close')"
      >
        &times;
      </button>
      <img
        :src="src"
        :alt="alt"
        class="max-h-[85vh] max-w-full rounded-xl shadow-2xl animate-scaleIn object-contain"
        @click.stop
      />
    </div>
  </Transition>
</template>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.25s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
</style>
