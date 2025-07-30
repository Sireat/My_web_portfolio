<template>
  <div class="w-full p-4 sm:p-6 lg:p-8 mt-15">
    <h1 class="mb-8 text-3xl sm:text-4xl lg:text-5xl font-bold">Projects</h1>
    <div>
      <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 text-base sm:text-lg">
        <li
          v-for="project in projects"
          :key="project.title"
          class="bg-slate-800 opacity-80 p-6 rounded-lg shadow-lg hover:opacity-100 transition-opacity duration-300 transform hover:-translate-y-1"
        >
          <div>
            <a class="block font-medium leading-tight text-center" :href="project.link" target="_blank">
              <img
                :src="project.image"
                :alt="project.imageAlt"
                class="object-cover w-full h-48 rounded-lg shadow-md"
              />
            </a>
          </div>
          <div class="mt-4">
            <a class="block text-xl font-semibold leading-tight text-center text-blue-300 hover:text-blue-100" :href="project.link" target="_blank">
              {{ project.title }}
            </a>
            <p class="mt-3 text-gray-300" v-html="project.description"></p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useHead } from "@vueuse/head";

// Import all images from src/images
const images = import.meta.glob("/src/images/*.{png,jpg}", { eager: true });

export default {
  data() {
    return {
      projects: [
        {
          title: "E-commerce Platform",
          link: "https://github.com/eshetuhelen/django_website.git",
          image: images["/src/images/capture16.png"].default,
          imageAlt: "E-commerce Platform",
          description: `Multivendor e-commerce platform designed to streamline vendor management and enhance customer engagement. Built with Django focusing on scalability and user experience.`
        },
        {
          title: "Sales Data Visualization",
          link: "https://github.com/eshetuhelen/tableau_data_mining_visualization.git",
          image: images["/src/images/capture15.png"].default,
          imageAlt: "Tableau Sales Visualization",
          description: `Tableau dashboard visualizing sales transaction data to provide actionable insights through interactive visualizations. Enables exploration of complex data patterns and trends.`
        },
        {
          title: "Food Delivery App",
          link: "https://github.com/eshetuhelen/food_delivery_app.git",
          image: images["/src/images/4.jpg"].default,
          imageAlt: "Food Delivery App",
          description: `Comprehensive food delivery mobile app offering intuitive ordering experience and efficient delivery services. Designed for both customers and delivery personnel.`
        },
        {
          title: "Sales Data Mining",
          link: "https://github.com/eshetuhelen/sales-transaction-data-mining.git",
          image: images["/src/images/decomposition_plot.png"].default,
          imageAlt: "Sales Data Mining",
          description: `Data analysis and pattern recognition in sales data using machine learning. Identifies trends, predicts customer behavior, and uncovers actionable insights.`
        },
        {
          title: "Coffee Disease Detection",
          link: "https://github.com/eshetuhelen/coffee_diseases_detection_system.git",
          image: images["/src/images/capture21.png"].default,
          imageAlt: "Coffee Disease Detection",
          description: `AI-powered system using computer vision to identify coffee leaf diseases (Cercospora, Leaf Rust, Phoma). Provides accurate predictions and treatment recommendations.`
        },
        {
          title: "Farmer Mobile App",
          link: "https://github.com/eshetuhelen/coffee_leaf_detection_system_mobile_app.git",
          image: images["/src/images/capture20.png"].default,
          imageAlt: "Coffee Mobile App",
          description: `React Native app for Ethiopian farmers. Features real-time disease prediction via camera, offline-first design, and treatment recommendations in local languages.`
        },
        {
          title: "Researcher Portal",
          link: "https://github.com/eshetuhelen/coffee_leaf_detection_system_frontend.git",
          image: images["/src/images/capture22.png"].default,
          imageAlt: "Researcher Web Portal",
          description: `React-based portal for researchers. Includes bulk image upload for model retraining, performance analytics dashboard, and annotation tools for new disease types.`
        },
        {
          title: "AI Backend System",
          link: "https://github.com/eshetuhelen/coffee_leaf_detection_system_backend.git",
          image: images["/src/images/capture23.png"].default,
          imageAlt: "AI Backend Architecture",
          description: `Django backend serving both mobile and web apps. Features custom CNN model (85% accuracy), automated data augmentation pipeline, and REST API endpoints.`
        }
      ]
    };
  },
  created() {
    useHead({
      title: "Projects | Helen.me",
      meta: [
        {
          name: "description",
          content: "Portfolio projects showcasing web and mobile development expertise"
        }
      ]
    });
  }
};
</script>

<style scoped>
li {
  transition: all 0.3s ease;
}

li:hover {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}
</style>