<template>
   <h1 style="text-align: center; background-color: #F0F8FF;padding: 0;margin: 0;"> Top Brands</h1>
    <div class="carousel">
        
        <button style="border: none; background-color: #F0F8FF; cursor: pointer; font-weight: bold;" @click="previousSlide">&lt;</button>
        
        <div class="carousel-inner">
            
            <div class="carousel-item" v-for="(slide,index) in slides"   :key="index"  v-show="currentSlide === index" >
                
                <img :src="slide" width="100%" height="400px"/>
            </div>
        </div>
        <button style="border: none; background-color: #F0F8FF; cursor: pointer;font-weight: bold;" @click="nextSlide">></button>

        
    </div>
    
</template>

<script>
export default {
    name: "ProductCarousal",
    data: ()=> ({
        slides:[
            "coca-cola-can.jpeg",
            "Disney.jpg",
            "ipl.jpeg",
            "dabur.png"
        ],
        currentSlide:0,
        slideInterval: null

    }),
    methods:{
        setCurrentSlide(index){
            console.log("Current slide index:", index, "Total slides:", this.slides.length);
    this.currentSlide = index;
        },
        nextSlide() {
      const nextIndex = this.currentSlide < this.slides.length - 1 
        ? this.currentSlide + 1 
        : 0;
      this.setCurrentSlide(nextIndex);
    },
    previousSlide() {
      const prevIndex = this.currentSlide > 0 
        ? this.currentSlide - 1 
        : this.slides.length - 1;
      this.setCurrentSlide(prevIndex);
    }

    },
    
    // mounted(){
    //     this.slideInterval = setInterval(() => {
    //   const nextIndex = this.currentSlide < this.slides.length - 1 
    //     ? this.currentSlide + 1 
    //     : 0;
    //   this.setCurrentSlide(nextIndex);
    // }, 3000);

    // console.log('Total slides:', this.slides.length);
    // },
    // beforeUnmount(){
    //     clearInterval(this.slideInterval)
    // }
}
</script>

<style scoped>
    .carousel{
        display: flex;
        justify-content: center;
        background-color: aliceblue;
    }
    .carousel-inner{
        position: relative;
        width: 500px;
        height: 450px;
        overflow:hidden;
    }
    .carousel-item{
        position: absolute;
        top: 20px;
        left: 0;
        right: 0;
        bottom: 0;
    }




</style>