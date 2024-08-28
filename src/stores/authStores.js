// authStores.js
import { defineStore } from 'pinia';
import axios from 'axios';
import emailjs from 'emailjs-com';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('token') || null,
    user: null,
    userId: localStorage.getItem('userId') || null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
  actions: {
    async login(username, password) {
      try {
        const response = await axios.post('http://localhost:3000/auth/login', {
          username,
          password,
        });
        this.token = response.data.token;
        this.userId = response.data.user.id;
        localStorage.setItem('token', this.token);
        localStorage.setItem('userId', this.userId);
        axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;
        await this.fetchUserData();
      } catch (error) {
        throw new Error('Login failed');
      }
    },
    async signup(username, password) {
      try {
        await axios.post('http://localhost:3000/user/signup', {
          username,
          password,
        });
      } catch (error) {
        throw new Error('Signup failed', error);
      }
    },
    async forgotpassword(email, username) {
      try {
        const response = await axios.post('http://localhost:3000/auth/forgotpassword', {
          email,
          username
        });
        this.newPassword = response.data.newPassword;

        // Send the email using emailjs
        const templateParams = {
          to_name: username,
          to_email: email,
          message: `Your new password is: ${this.newPassword}`,
        };

        emailjs.send(
          'your_service_id', // Replace with your EmailJS service ID
          'your_template_id', // Replace with your EmailJS template ID
          templateParams,
          'your_user_id'      // Replace with your EmailJS user ID
        ).then((result) => {
          console.log('Email sent successfully:', result.text);
        }, (error) => {
          console.error('Failed to send email:', error.text);
        });

        console.log("New password sent to your email", this.newPassword);
      } catch (error) {
        throw new Error('Forgot password failed', error);
      }
    },
    async fetchUserData() {
      try {
        const response = await axios.get('auth/me');
        this.user = response.data;
      } catch (error) {
        throw new Error('Failed to fetch user data');
      }
    },
    async logout() {
      this.token = null;
      this.user = null;
      this.userId = null;
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      delete axios.defaults.headers.common['Authorization'];
    },
  },
});
