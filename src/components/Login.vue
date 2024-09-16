<template>
    <div class="login-container">
      <div class="login-card">
        <h2 v-if="!isAuthenticated">Welcome to Our App!</h2>
        <h2 v-if="isAuthenticated">Welcome back, {{ username }}!</h2>
        <form @submit.prevent="login">
          <div class="form-group">
            <label for="username">Username</label>
            <input
              type="text"
              id="username"
              v-model="username"
              placeholder="Enter your username"
              required
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              v-model="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" class="login-btn">Login</button>
          <p>username: <span style="color: green;">dhivakar</span></p>
          <p>password: <span style="color:red">1234</span></p>
          <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UserLogin',
    data() {
      return {
        username: '',
        password: '',
        errorMessage: '',
        isAuthenticated: false, // Track authentication state
      };
    },
    methods: {
      login() {
        const trimmedUsername = this.username.trim();
        const trimmedPassword = this.password.trim();
  
        if (trimmedUsername === 'dhivakar' && trimmedPassword === '1234') {
          localStorage.setItem('user', JSON.stringify({ username: trimmedUsername }));
          this.isAuthenticated = true;
          this.$emit('login-success');
        } else {
          this.errorMessage = 'Invalid username or password';
        }
      }
    },
    mounted() {
      const user = localStorage.getItem('user');
      if (user) {
        this.isAuthenticated = true;
        this.username = JSON.parse(user).username; // Set username if authenticated
      }
    }
  };
  </script>
  
  <style scoped>
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(to right, #fbc2eb, #a6c0fe);
  }
  
  .login-card {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    width: 300px;
    text-align: center;
  }
  
  .login-card h2 {
    margin-bottom: 1.5rem;
    font-family: 'Arial', sans-serif;
    color: #333;
  }
  
  .form-group {
    margin-bottom: 1rem;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
  }
  
  .form-group input {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
  }
  
  .form-group input::placeholder {
    color: #aaa;
  }
  
  .login-btn {
    width: 100%;
    padding: 0.8rem;
    background-color: #fa9c23;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 1.1rem;
    cursor: pointer;
  }
  
  .login-btn:hover {
    background-color: #f78c1d;
  }
  
  .error {
    margin-top: 1rem;
    color: red;
    font-size: 0.9rem;
  }
  </style>
  