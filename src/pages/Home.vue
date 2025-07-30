<template>
  <div class="w-auto md:w-3/4 lg:w-1/2 mt-15">
    <h1 class="mb-8 text-5xl">Hi there, my name is Helen.</h1>
    <h2>Machine Learning Engineer | AI Solutions for Emerging Markets</h2><br>
    <p class="intro-text">
                    <strong>Hi, I'm Helen!</strong> A passionate Machine Learning Engineer freshly graduated in Software Engineering from Bahir Dar University. My journey revolves around building intelligent systems that tackle <strong>real-world agricultural and business challenges</strong> in Ethiopia through AI. 
                    
                    Specializing in <strong>Computer Vision (TensorFlow, OpenCV)</strong> and <strong>Predictive Analytics</strong>, I've developed solutions like the Coffee Leaf Disease Detection System (85% accuracy) and data pipelines that boosted business decisions by 30%. My toolkit includes Python, Deep Learning, REST APIs, and full-stack development with React.
                    
                    I believe AI should be <strong>accessible, practical, and transformative</strong>
                </p> 

    <div class="flex flex-wrap mt-8 -m-2">
      <a class="bg-purple-500 btn hover:bg-purple-600" href="https://github.com/eshetuhelen">
        <div class="i-ph-github-logo-bold"></div>
        <span>GitHub</span>
      </a>
      <a class="bg-blue-500 btn hover:bg-blue-600" href="https://www.linkedin.com/in/helen-eshetu-31157b307/">
        <div class="i-ph-linkedin-logo-bold"></div>
        <span>LinkedIn</span>
      </a>
      
    </div>
  </div>
</template>
<script setup></script>
<script>
import { multipier } from "../components/Waves.vue";
import { useHead } from "@vueuse/head";
export default {
  created() {
    useHead({
      title: "This is Helen | Helen.me",
    });
  },
  mounted() {
    multipier.value = 9;
  },
};
</script>
<style scoped>
.btn {
  --at-apply: text-white py-2 px-4 m-2 rounded-3xl inline-flex items-center no-underline bg-opacity-90 "hover:bg-opacity-100" transition-colors gap-2;
}
</style>
