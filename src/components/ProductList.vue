<template>
    <div v-if="selectedProduct">
      <div class="product-details">
        <h2>{{ selectedProduct.name }}</h2>
        <img :src="selectedProduct.image" alt="Product Image" />
        <p>{{ selectedProduct.description }}</p>
        <p style="font-weight: bold">Price: ${{ selectedProduct.price }}</p>
        <p>Rating:<span style="color: red;"><span  v-for="n in Math.floor(selectedProduct.ratings)" :key="n">&#9733;</span>
            <span v-if="selectedProduct.ratings % 1 !== 0">&#9734;</span></span> </p>
        <p>Status <span style="font-weight: bold; color: red;">: In Stock</span></p>
        <button @click="goBack">Back to Products</button>
        <button style="background-color:tomato;margin-left: 2rem;" @click="handleCart">Buy Now</button>
        <div v-if="showPopup" class="popup">
      <div class="popup-content">
        <h2>🎉 Order Completed Successfully!</h2>
        <p>Thank you for your purchase.</p>
        <button @click="closePopup">Close</button>
      </div>
    </div>
      </div>
    </div>
  <div v-else class="products-container">
    <div class="product-card" v-for="(product, index) in products" :key="index">
      <img :src="product.image" alt="Product Image" class="product-image" />
      <h2 class="product-title">{{ product.name }}</h2>
      <p class="product-description">{{ product.description }}</p>
      <div class="product-rating">
        <span v-for="(star, i) in 5" :key="i" class="star">
          <i v-if="i < product.rating" class="fas fa-star"></i>
          <i v-else class="far fa-star"></i>
        </span>
        <span class="reviews">({{ product.reviews }} Reviews)</span>
      </div>
      <p class="product-price">${{ product.price }}</p>
      <button  class="view-details-btn" @click="viewDetails(product)">View Details</button>
    </div>
    
  </div>
</template>

<script>

export default {
  data() {
    return {
      products: [{
    "name": "OPPO F21s Pro 5G",
    "price": 245.67,
    "description": "OPPO F21s Pro 5G is a powerful device with a RAM extension feature, that offers brilliant operational speed to users.",
    "ratings": 4.5,
    "image": 'oppoF21.jpg',
    "category": "Mobile Phones",
    "seller": "Amazon",
    "stock": 5
  },
  {
    "name": "WRISTIO HD, Bluetooth Calling Smart Watch",
    "price": 150.32,
    "description": "Minix watches are exclusively designed to fulfill the advanced tech needs of today’s generation.",
    "ratings": 3.5,
    "image": 'smartwatch.jpg', 
    "category": "Accessories",
    "seller": "Flipkart",
    "stock": 9
  },
  {
    "name": "Dell Inspiron 3511 Laptop",
    "price": 440.57,
    "description": "Dell Inspiron 3511 11th Generation Intel Core i5-1135G7 Processor (8MB Cache, up to 4.2 GHz);Operating System: Windows 10 Home Single Language, English",
    "ratings": 2,
    "image": 'laptop.jpg',
    "category": "Laptops",
    "seller": "Ebay",
    "stock": 9
  },
  {
    "name": "Lenovo IdeaPad Slim 3 Laptop",
    "price": 250.45,
    "description": "Lenovo IdeaPad Slim 311th Gen Intel Core i5-1135G7 | Speed: 2.4 GHz (Base) - 4.2 GHz (Max) | 4 Cores | 8 Threads | 8 MB Cache",
    "ratings": 4,
    "image": "lenevo.jpg",
      
    
    "category": "Laptops",
    "seller": "Ebay",
    "stock": 9
  },
  {
    "name": "ASUS VivoBook 15 Laptop",
    "price": 767.32,
    "description": "ASUS VivoBook 15 15.6-inch (39.62 cm) HD, Dual Core Intel Celeron N4020, Thin and Light Laptop (4GB RAM/256GB SSD/Integrated Graphics/Windows 11 Home/Transparent Silver/1.8 Kg), X515MA-BR011W",
    "ratings": 5,
    "image": "asus.jpg",
      
    "category": "Laptops",
    "seller": "Ebay",
    "stock": 9
  },
  {
    "name": "PTron Newly Launched Tangent Sports, 60Hrs Playtime",
    "price": 15.46,
    "description": "Gigantic 60 + Hours of music playtime on a single charge; BT5.2 Wireless headphones with ENC (Environmental Noise Cancellation) Technology to enhance your voice quality over the voice calls",
    "ratings": 5,
     "image": "bluetooth.jpg",
      
    "category": "Headphones",
    "seller": "Amazon",
    "stock": 4
  },
  {
    "name": "Campus Men's Maxico Running Shoes",
    "price": 10.12,
    "description": "The high raised back cover with extra padding.",
    "ratings": 3,
    "image": "shoe.jpg",
      
    "category": "Sports",
    "seller": "Ebay",
    "stock": 6
  },
  {
    "name": "Dyson V15 Detect Vacuum Cleaner",
    "price": 699.99,
    "description": "Dyson V15 Detect Cordless Vacuum Cleaner with Laser Illumination and LCD Screen, Blue, Includes Multiple Attachments",
    "ratings": 4.9,
    "image": "cleaner.jpeg",
    "category": "Home Appliances",
    "seller": "Dyson Store",
    "stock": 8
  },
  {
    "name": "Nikon D3500 DSLR Camera",
    "price": 499.99,
    "description": "Nikon D3500 DSLR Camera with 18-55mm VR Lens, 24.2MP Sensor, Full HD Video Recording, Black",
    "ratings": 4.6,
    "image": "camera.jpg",
    "category": "Cameras",
    "seller": "B&H Photo",
    "stock": 15
  },
],
  selectedProduct: null,
  cartmessage:'',
  showPopup: false
    };
  },
  methods:{
    viewDetails(product) {
    
      this.selectedProduct = product;
    },
    goBack() {
      
      this.selectedProduct = null;
    },
    handleCart(){
        this.cartmessage = 'Added to cart'
        this.showPopup = true;

},
closePopup() {
    window.location.reload();
}
  }
  
};
</script>

<style scoped>
.products-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
  
  background: url('/public/background_img.jpg') no-repeat center center fixed;
  /* background-size: cover; */
  height: 100%;

}

.product-card {
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  width: 300px;
  margin: 20px auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background-color: white;
}

.product-image {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
}

.product-title {
  font-size: 1.2em;
  margin: 10px 0;
}

.product-description {
  color: #666;
  font-size: 0.9em;
}

.product-rating {
  margin: 10px 0;
}

.star {
  color: gold;
}

.reviews {
  font-size: 0.8em;
  color: #555;
}

.product-price {
  font-size: 1.4em;
  color: #333;
}

.view-details-btn {
  background-color: #ff9900;
  border: none;
  padding: 10px 15px;
  color: white;
  font-size: 1em;
  border-radius: 5px;
  cursor: pointer;
}

.view-details-btn:hover {
  background-color: #e68a00;
}
.product-details {
    background: url('../assets/back.png') no-repeat center center fixed;
    background-size: cover;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  position: relative;
  top: 0; 
  min-height: 100vh; 
  box-sizing: border-box; 
  overflow-y: auto; 
}

.product-details img {
  width: 50%;
  height: auto;
  border-radius: 10px;
}

.product-details button {
  background-color: #ff9900;
  border: none;
  padding: 10px 20px;
  color: white;
  font-size: 1em;
  border-radius: 5px;
  cursor: pointer;
}

.product-details button:hover {
  background-color: #e68a00;
}
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-content {
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.popup-content h2 {
  margin-bottom: 1rem;
  color: green;
}

.popup-content button {
  background-color: tomato;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}





</style>




