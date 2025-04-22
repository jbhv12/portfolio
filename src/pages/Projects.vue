<template>
    <Layout>
     <transition name="fade" appear>
      <main class="mt-1 mb-14">
       <div class="contain flex flex-col gap-7">
        <h1 class="font-semibold text-4xl">Projects</h1>
        <p class="text-dimGrey leading-8">
            A glimpse into my side quests and weekend wins, built with love, duct tape, and too many browser tabs.
        </p>
       </div>
   
       <div class="contain mt-16 md:grid md:grid-cols-3 md:gap-5 gap-7 flex flex-col">
        <div class="bg-[#31363B] flex flex-col justify-center gap-3 rounded-sm h-40 pl-3">
         <h2 class="font-semibold text-xl">My Portfolio</h2>
         <p class="text-dimGrey">This personal portfolio you're appreciating!</p>
   
         <div class="flex gap-5">
          <a href="https://jay.is-savvy.dev/" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1 text-cuppy">
           <app-icon icon="eye" size="sm"></app-icon>
           Live
          </a>
          <a href="https://github.com/jbhv12/portfolio" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1 text-cuppy">
           <app-icon icon="code-fork" size="sm"></app-icon>
           Code
          </a>
         </div>
        </div>
   
        <div class="bg-[#31363B] flex flex-col justify-center gap-3 rounded-sm h-40 pl-3">
         <h2 class="font-semibold text-xl">Credible Crypto</h2>
         <p class="text-dimGrey">Soulbound Non Fungible Testimonials (SNFTs)</p>
   
         <div class="flex gap-5">
          <a href="https://credible-crypto.jay.is-savvy.dev/" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1 text-cuppy">
           <app-icon icon="eye" size="sm"></app-icon>
           Live
          </a>
          <a href="https://github.com/jbhv12/credible-crypto" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1 text-cuppy">
           <app-icon icon="code-fork" size="sm"></app-icon>
           Code
          </a>
          <a href="https://devpost.com/software/credible-crypto" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1 text-cuppy">
           <font-awesome-icon :icon="['fas', 'trophy']" />
           Winner
          </a>
         </div>
        </div>
   
        <div class="bg-[#31363B] flex flex-col justify-center gap-3 rounded-sm h-40 pl-3">
         <h2 class="font-semibold text-xl">Red Jingles</h2>
         <p class="text-dimGrey">A theme based AI chatbot focusing on scalability</p>
   
         <div class="flex gap-5">
          <a href="https://credible-crypto.jay.is-savvy.dev/" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1 text-cuppy">
           <font-awesome-icon :icon="['fas', 'file-lines']" />
           Doc
          </a>
          <a href="https://github.com/jbhv12/red-jingles" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1 text-cuppy">
           <app-icon icon="code-fork" size="sm"></app-icon>
           Code
          </a>
          <a href="https://www.youtube.com/watch?v=iGKpq-T21J8" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1 text-cuppy">
           <font-awesome-icon :icon="['fas', 'trophy']" />
           Winner
          </a>
         </div>
        </div>
   
        <div class="bg-[#31363B] flex flex-col justify-center gap-3 rounded-sm h-40 pl-3">
         <h2 class="font-semibold text-xl">Resume</h2>
         <p class="text-dimGrey">Clean, ATS Optimized, Auto-Generated Resume</p>
   
         <div class="flex gap-5">
          <a href="https://github.com/jbhv12/resume/releases/download/2025-04-22/resume-2025-04-22.pdf" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1 text-cuppy">
           <app-icon icon="eye" size="sm"></app-icon>
           Live
          </a>
          <a href="https://github.com/jbhv12/resume" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1 text-cuppy">
           <app-icon icon="code-fork" size="sm"></app-icon>
           Code
          </a>
         </div>
        </div>
   
        <div class="bg-[#31363B] flex flex-col justify-center gap-3 rounded-sm h-40 pl-3">
         <h2 class="font-semibold text-xl">Workouts Tracker API</h2>
         <p class="text-dimGrey">Showcase of my skills as a cloud developer</p>
   
         <div class="flex gap-5">
          <a href="https://jmb6cgzee2.execute-api.us-west-2.amazonaws.com/" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1 text-cuppy">
           <app-icon icon="eye" size="sm"></app-icon>
           Live
          </a>
          <a href="https://github.com/jbhv12/serverless-workout-tracker-api" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1 text-cuppy">
           <app-icon icon="code-fork" size="sm"></app-icon>
           Code
          </a>
         </div>
        </div>
   
        <div class="bg-[#31363B] flex flex-col justify-center gap-3 rounded-sm h-40 pl-3">
         <h2 class="font-semibold text-xl">LFS</h2>
         <p class="text-dimGrey">My custom linux distro made from scratch</p>
   
         <div class="flex gap-5">
          <a href="https://www.linuxfromscratch.org/" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1 text-cuppy">
           <font-awesome-icon :icon="['fas', 'file-lines']" />
           Doc
          </a>
         </div>
        </div>
       </div>
      </main>
     </transition>
    </Layout>
   </template>
   
   <script>
  import Tab from '../components/Tab.vue'
  import Tabs from '../components/Tabs.vue'
  import Email from '../components/Email.vue'
  export default {
    metaInfo: {
      title: "Projects",
    },
    components: {
      Tab,
      Tabs,
      Email
    },
    data () {
      return {
        mode: 'dark'
      }
    },
    mounted() {
      // Google Analytics script
      const analyticsScript = document.createElement('script');
      analyticsScript.async = true;
      analyticsScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-83T283YBYQ';
      document.body.appendChild(analyticsScript);
  
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-83T283YBYQ');
    },
    methods: {
      changeStyle () {
        if (this.mode === 'dark') {
          this.mode = 'light'
        } else {
          this.mode = 'dark'
        }
      }
    }
  };
  </script>