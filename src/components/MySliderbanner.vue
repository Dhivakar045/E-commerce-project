<template>
    <div class="brand-slider">
      <swiper
        :slides-per-view="5"
        :space-between="30"
        :loop="true"
        :autoplay="{ delay: 3000 }"
        :pagination="false"
        :navigation="true"
      >
        <!-- Loop through the brands array to render each brand's logo -->
        <swiper-slide v-for="(brand, index) in brands" :key="index">
          <img :src="brand.image" :alt="brand.name" class="brand-logo" />
        </swiper-slide>
      </swiper>
    </div>
  </template>
  
  <script>
  import { Swiper, SwiperSlide } from 'swiper/vue'; // Import Swiper components
  import 'swiper/swiper-bundle.min.css'; // Import Swiper styles
  
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    data() {
      return {
        brands: [
          { name: 'Brand 1', image: 'path-to-brand1-logo.png' },
          { name: 'Brand 2', image: 'path-to-brand2-logo.png' },
          { name: 'Brand 3', image: 'path-to-brand3-logo.png' },
          { name: 'Brand 4', image: 'path-to-brand4-logo.png' },
          { name: 'Brand 5', image: 'path-to-brand5-logo.png' },
          { name: 'Brand 6', image: 'path-to-brand6-logo.png' },
          // Add more brands as needed
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .brand-slider {
    width: 100%;
    padding: 20px;
  }
  
  .brand-logo {
    width: 100%;
    max-width: 150px; /* Adjust the size of the brand logos */
    height: auto;
    object-fit: contain;
  }
  </style>
  