<script setup>
import { ref, computed } from 'vue'
import { useActiveSection } from './composables/useScrollReveal'

import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import FoodMarquee from './components/FoodMarquee.vue'
import FeaturedSection from './components/FeaturedSection.vue'
import MenuSection from './components/MenuSection.vue'
import FamilyFunSection from './components/FamilyFunSection.vue'
import FaqAccordion from './components/FaqAccordion.vue'
import FranchisePackage from './components/FranchisePackage.vue'
import BookTable from './components/BookTable.vue'
import ContactSection from './components/ContactSection.vue'
import VideoSection from './components/VideoSection.vue'
import FooterSection from './components/FooterSection.vue'
import ScrollToTop from './components/ScrollToTop.vue'
import ImageModal from './components/ImageModal.vue'

const activeSection = useActiveSection(['home', 'menu', 'faqs', 'contact'])

const modalOpen = ref(false)
const modalImage = ref({ src: '', alt: '' })

function openImage(payload) {
  modalImage.value = payload
  modalOpen.value = true
}
function closeImage() {
  modalOpen.value = false
}

const modalSrc = computed(() => modalImage.value.src)
const modalAlt = computed(() => modalImage.value.alt)
</script>

<template>
  <div class="min-h-screen w-full overflow-x-hidden bg-maja-bg">
    <NavBar :active-section="activeSection" />

    <main>
      <HeroSection @view-image="openImage" />
      <VideoSection />
      <FoodMarquee @view-image="openImage" />
      <FeaturedSection @view-image="openImage" />
      <MenuSection @view-image="openImage" />
      <FamilyFunSection @view-image="openImage" />
      <FaqAccordion />
      <FranchisePackage @view-image="openImage" />
      <BookTable />
      <ContactSection />
    </main>

    <FooterSection />
    <ScrollToTop />

    <ImageModal :open="modalOpen" :src="modalSrc" :alt="modalAlt" @close="closeImage" />
  </div>
</template>