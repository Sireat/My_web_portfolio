<template>
  <div>
    <h2 class="mb-8 text-3xl sm:text-4xl lg:text-5xl">Experiance</h2>
    <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-base sm:text-lg">
      <li v-for="experience in experiences" :key="experience.company" 
          class="bg-slate-800 p-6 rounded-lg hover:bg-slate-700 transition-colors duration-300">
        <div>
          <h2 class="block text-xl font-semibold leading-tight text-white">{{ experience.company }}</h2>
          <p class="mt-2 text-gray-400">{{ experience.location }} · {{ experience.date }}</p>
        </div>
        <div class="mt-4">
          <p class="text-gray-300" v-html="experience.description"></p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { useHead } from "@vueuse/head";

export default {
  data() {
    return {
      experiences: [
        {
          company: "Getnet Company",
          location: "Addis Ababa, Ethiopia",
          date: "2024",
          description: "Internship experience where I contributed to key projects and honed technical skills.<br>Responsibilities included:<br>- Data mining<br>- Data warehouse development<br>Enhanced expertise in data analysis and database management."
        },
        {
          company: "Machine Learning & Deep Learning",
          location: "Online Learning",
          date: "2023-Present",
          description: "Studied advanced concepts through online sessions with Daniel.<br>Gained practical knowledge in:<br>- Building predictive models<br>- Deploying AI solutions<br>Enhanced expertise in AI technologies."
        },
        {
          company: "Mobile App Development",
          location: "Bahir Dar University",
          date: "2023",
          description: "Led development of mobile applications with cross-functional teams.<br>Key achievements:<br>- User-friendly application design<br>- Seamless functionality implementation<br>- Successful deployment"
        },
        {
          company: "Coffee Leaf Disease Detection",
          location: "Mobile Application",
          date: "2025",
          description: "Final year project at Bahir Dar University.<br>React Native-based mobile app helping Ethiopian farmers:<br>- Identify coffee leaf diseases<br>- Uses computer vision<br>- Implements machine learning"
        },
        {
          company: "Coffee Leaf Disease Detection",
          location: "Web Application",
          date: "2025",
          description: "Final year project at Bahir Dar University.<br>React.js web application for researchers and farmers:<br>- Auto train/test disease models<br>- Computer vision implementation<br>- Machine learning integration"
        }
      ]
    };
  },
  created() {
    useHead({
      title: "Experience | Helen.me",
      meta: [
        {
          name: "description",
          content: "Professional experience and projects"
        }
      ]
    });
  }
};
</script>

<style scoped>
/* Custom animation on hover */
li {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

li:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
</style>