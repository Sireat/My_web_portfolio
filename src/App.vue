<template>
  <div class="relative min-h-screen">
    <Waves />
    <!-- Fixed navigation bar -->
    <div class="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900">
      <nav class="flex justify-start m-4 gap-6 text-lg">
        <Logo class="color-blue-500 dark:color-white fill-current mr-auto" />
        <router-link
          v-for="(item, index) in menuArray"
          :key="index"
          class="no-underline hover:underline text-gray-700 dark:text-white"
          :to="item.path"
        >
          {{ item.title }}
        </router-link>
      </nav>
    </div>

    <div class="relative z-10 flex flex-col min-h-screen">
  <main class="flex items-center flex-1 p-4 md:p-8 mt-16 mb-16"> <!-- Add margin-top and margin-bottom to avoid overlap -->
    <router-view v-slot="{ Component }">
      <transition name="scale" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
</div>


    <div class="absolute top-4 right-4 mt-23 z-20 fixed"> <!-- Resume button -->
      <a class="bg-red-500 text-white py-4 px-8 rounded-3xl inline-flex no-underline bg-opacity-90 hover:bg-opacity-100 transition-colors  mt-5 " href="/helen_eshetu_resume.pdf" target="_blank" rel="noopener">
        <span>My_Resume</span>
      </a>
    </div>

    <!-- Content of your page -->

    <div class="fixed bottom-0 left-0 right-0 bg-gray-800 py-4 overflow-hidden">
  <div class="flex animate-scroll whitespace-nowrap">
    <!-- GitHub -->
    <a href="https://github.com" target="_blank" rel="noopener noreferrer" class="text-white hover:text-gray-400 px-4">
      <i class="fab fa-github fa-2x"></i>
    </a>

    <!-- Flutter -->
    <a href="https://flutter.dev" target="_blank" rel="noopener noreferrer" class="text-white hover:text-gray-400 px-4">
      <i class="fab fa-flutter fa-2x"></i>
    </a>

    <!-- Vue -->
    <a href="https://vuejs.org" target="_blank" rel="noopener noreferrer" class="text-white hover:text-gray-400 px-4">
      <i class="fab fa-vuejs fa-2x"></i>
    </a>

    <!-- NestJS -->
    <a href="https://nestjs.com" target="_blank" rel="noopener noreferrer" class="text-white hover:text-gray-400 px-4">
      <i class="fab fa-nestjs fa-2x"></i>
    </a>

    <!-- React -->
    <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer" class="text-white hover:text-gray-400 px-4">
      <i class="fab fa-react fa-2x"></i>
    </a>

    <!-- JavaScript -->
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer" class="text-white hover:text-gray-400 px-4">
      <i class="fab fa-js fa-2x"></i>
    </a>

    <!-- PHP -->
    <a href="https://www.php.net" target="_blank" rel="noopener noreferrer" class="text-white hover:text-gray-400 px-4">
      <i class="fab fa-php fa-2x"></i>
    </a>

    <!-- Tailwind CSS -->
    <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" class="text-white hover:text-gray-400 px-4">
      <i class="fab fa-tailwindcss fa-2x"></i>
    </a>

    <!-- Golang -->
    <a href="https://golang.org" target="_blank" rel="noopener noreferrer" class="text-white hover:text-gray-400 px-4">
      <i class="fab fa-go fa-2x"></i>
    </a>

    <!-- HTML -->
    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer" class="text-white hover:text-gray-400 px-4">
      <i class="fab fa-html5 fa-2x"></i>
    </a>

    <!-- CSS -->
    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer" class="text-white hover:text-gray-400 px-4">
      <i class="fab fa-css3-alt fa-2x"></i>
    </a>

    <!-- Python -->
    <a href="https://www.python.org" target="_blank" rel="noopener noreferrer" class="text-white hover:text-gray-400 px-4">
      <i class="fab fa-python fa-2x"></i>
    </a>

    <!-- Docker -->
    <a href="https://www.docker.com" target="_blank" rel="noopener noreferrer" class="text-white hover:text-gray-400 px-4">
      <i class="fab fa-docker fa-2x"></i>
    </a>

    <!-- AWS -->
    <a href="https://aws.amazon.com" target="_blank" rel="noopener noreferrer" class="text-white hover:text-gray-400 px-4">
      <i class="fab fa-aws fa-2x"></i>
    </a>

    <!-- Figma -->
    <a href="https://www.figma.com" target="_blank" rel="noopener noreferrer" class="text-white hover:text-gray-400 px-4">
      <i class="fab fa-figma fa-2x"></i>
    </a>

    <!-- Linux -->
    <a href="https://www.linux.org" target="_blank" rel="noopener noreferrer" class="text-white hover:text-gray-400 px-4">
      <i class="fab fa-linux fa-2x"></i>
    </a>

    <!-- Git -->
    <a href="https://git-scm.com" target="_blank" rel="noopener noreferrer" class="text-white hover:text-gray-400 px-4">
      <i class="fab fa-git-alt fa-2x"></i>
    </a>

    <!-- Angular -->
    <a href="https://angular.io" target="_blank" rel="noopener noreferrer" class="text-white hover:text-gray-400 px-4">
      <i class="fab fa-angular fa-2x"></i>
    </a>

    <!-- C++ -->
    <a href="https://isocpp.org" target="_blank" rel="noopener noreferrer" class="text-white hover:text-gray-400 px-4">
      <i class="fab fa-cuttlefish fa-2x"></i>
    </a>

    <!-- TypeScript -->
    <a href="https://www.typescriptlang.org" target="_blank" rel="noopener noreferrer" class="text-white hover:text-gray-400 px-4">
      <i class="fab fa-js fa-2x"></i> <!-- No specific icon for TypeScript in FontAwesome -->
    </a>
  </div>
</div>

  </div>
</template>

<script setup>
import { defineAsyncComponent } from "vue";
import Logo from "./images/ar.svg";
const Waves = defineAsyncComponent(() => import("./components/Waves.vue"));

const menuArray = [
  { title: "Home", path: "/" },
  { title: "Experiance", path: "/experiance" },
  { title: "Projects", path: "/projects" },
  { title: "Contact", path: "/Contact" },
];
</script>

<style scoped>
.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

@keyframes scroll {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.animate-scroll {
  display: flex;
  animation: scroll 20s linear infinite;
}
</style>
