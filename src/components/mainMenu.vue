<template>
  <nav class="navbar row">
      <div >
        <div class="navbar-brand" @click="reloadPage">
          <img style="width: 3rem; cursor: pointer;" class="logo-img" src="../assets/DHIVAKAR.png" />
        </div>
      </div>

      <ul class="menu-items">
        <li 
          v-for="(category, index) in categories" 
          :key="category.name" 
          class="menu-item"
          @mouseover="showDropdown(index)" 
          @mouseleave="hideDropdown(index)"
        >
          <a href="#">{{ category.name }}</a>
          <div v-if="category.showDropdown" class="dropdown">
            <ul v-if="category.subcategories" class="dropdown-list">
              <li v-for="sub in category.subcategories" :key="sub" class="dropdown-item">
                <a href="#">{{ sub }}</a>
              </li>
            </ul>
          </div>
        </li>
      </ul>

      

      <div class="col-12 col-md-3 mt-4 mt-md-0 text-center" style="color:'white'">
         <img style="color: white;" src="cart.jpg" alt="" width="50px">
      </div>
    </nav>
    

  
</template>

<script>
// import lo from '../assets/DHIVAKAR.png'
export default {
  name: 'mainMenu',
  
  data() {
    return {
      categories: [
        { name: "Fashion", subcategories: ["T-shirts", "Casual Shirts", "Sarees"], showDropdown: false },
        { name: "Electronics & Furnitures", subcategories: ["SmartPhones", "Speakers", "Living Room Furnitures"], showDropdown: false },
        { name: "Beauty, Toys & more", subcategories: ["Toy Cars", "Baby Care", "Sports & fitness"], showDropdown: false },
      ],
    };
  },
  methods: {
    reloadPage() {
      window.location.reload(); 
    },
    showDropdown(index) {
      this.categories[index].showDropdown = true;
    },
    hideDropdown(index) {
      this.categories[index].showDropdown = false;
    },
  },

  
}
</script>

<style scoped>
  *{
    padding: 0;
    margin: 0;
  }
  .main-container{
    background-color: aqua;
    width: 100%;
    height: 5vw;
  }
 .menu-items {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.menu-item {
  position: relative;
  padding: 10px 20px;
}

.menu-item a {
  color: white;
  text-decoration: none;
}

.menu-item:hover {
  background-color: #444;
}

.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 100;
  min-width: 200px;
}

.dropdown-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.dropdown-item {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.dropdown-item:hover {
  background-color: #f1f1f1;
}

.dropdown-item a {
  color: #333;
  text-decoration: none;
}
.logo-img {
  width: 2.5rem;
  transition: transform 0.3s ease; /* Smooth transition */
}

.logo-img:hover {
  transform: scale(1.3); /* Enlarge the image to 1.5x its original size */
}

</style>


