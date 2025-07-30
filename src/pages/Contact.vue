<template>
  <div class="max-w-5xl mx-auto p-4 shadow-md rounded-md flex flex-col lg:flex-row bg-current mt-30	">
    <div class="lg:w-1/2 p-8 space-y-10">
      <div class="flex items-center space-x-3">
        <i class="fas fa-map-marker-alt text-indigo-600 text-xl"></i>
        <div>
          
          <p class="text-gray-700">
            Addiss Ababa, Ethiopia
          </p>
        </div>
      </div>
      <div class="flex items-center space-x-3">
        <i class="fas fa-phone text-indigo-600 text-xl"></i>
        <div>
          
          <p class="text-gray-700">
            +2519 64422715
          </p>
        </div>
      </div>
      <div class="flex items-center space-x-3">
        <i class="fas fa-envelope text-indigo-600 text-xl"></i>
        <div>
          <p class="text-gray-700">
            ababahelen9@gmail.com
          </p>
        </div>
      </div>
    </div>
    <div class="lg:w-2/3 p-4">
    
      <form @submit.prevent="sendEmail">
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            v-model="form.name"
            placeholder="Enter Your Name"
            required
            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
          />
        </div>
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            v-model="form.email"
            placeholder=" Enter Your Email"
            required
            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
          />
        </div>
        <div class="mb-4">
          <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            id="message"
            v-model="form.message"
            placeholder="Enter Your Message"
            required
            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
          ></textarea>
        </div>
        <button
          type="submit"
          class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Send
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import emailjs from "emailjs-com";
import { multipier } from "../components/Waves.vue";
import { useHead } from "@vueuse/head";
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    sendEmail() {
      const serviceID = "service_f0l1z8g"; // Replace with your actual Service ID
      const templateID = "template_hhr5ek6"; // Replace with your actual Template ID
      const userID = "B0XlPFpHevI5VrlVY"; // Replace with your actual User ID

      emailjs
        .send(serviceID, templateID, this.form, userID)
        .then(
          (response) => {
            alert("Message sent successfully!");
            this.resetForm();
          },
          (error) => {
            console.error("Failed to send the message", error);
            alert("Failed to send the message. Please try again.");
          }
        );
    },
    resetForm() {
      this.form.name = "";
      this.form.email = "";
      this.form.message = "";
    },
  },
  created() {
    useHead({
      title: "Contact | Helen.me",
    });
  },
};
</script>

<style scoped>
/* Tailwind CSS is used, so no custom styles are necessary */
</style>
