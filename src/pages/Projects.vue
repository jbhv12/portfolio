<template>
    <Layout>
     <transition name="fade" appear>
      <main class="mt-1 mb-14">
       <div class="contain flex flex-col gap-7">
        <h1 class="font-semibold text-4xl text-textPrimary">Projects</h1>
        <p class="text-textPrimary leading-8">
            A glimpse into my side quests and weekend wins, built with love, duct tape, and too many browser tabs.
        </p>
       </div>
   
       <div class="contain mt-16 flex flex-col gap-3">
        <article class="flex flex-col gap-2 md:pb-3 pb-7">
         <h2 class="font-semibold text-xl text-textPrimary">My Portfolio</h2>
         <p class="text-textMuted leading-8">This personal portfolio you're appreciating!</p>
         <div class="flex gap-5 flex-wrap">
          <a href="https://jay.is-savvy.dev/" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1 text-primaryAccent decoration-primaryAccent underline underline-offset-4">
           <app-icon icon="eye" size="sm"></app-icon>
           Live
          </a>
          <a href="https://github.com/jbhv12/portfolio" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1 text-primaryAccent decoration-primaryAccent underline underline-offset-4">
           <app-icon icon="code-fork" size="sm"></app-icon>
           Code
          </a>
         </div>
        </article>

        <article class="flex flex-col gap-2 md:pb-3 pb-7">
         <h2 class="font-semibold text-xl text-textPrimary">Credible Crypto</h2>
         <p class="text-textMuted leading-8">Soulbound Non Fungible Testimonials (SNFTs)</p>
         <div class="flex gap-5 flex-wrap">
          <a href="https://credible-crypto.jay.is-savvy.dev/" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1 text-primaryAccent decoration-primaryAccent underline underline-offset-4">
           <app-icon icon="eye" size="sm"></app-icon>
           Live
          </a>
          <a href="https://github.com/jbhv12/credible-crypto" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1 text-primaryAccent decoration-primaryAccent underline underline-offset-4">
           <app-icon icon="code-fork" size="sm"></app-icon>
           Code
          </a>
          <a href="https://devpost.com/software/credible-crypto" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1 text-primaryAccent decoration-primaryAccent underline underline-offset-4">
           <font-awesome-icon :icon="['fas', 'trophy']" />
           Winner
          </a>
         </div>
        </article>

        <article class="flex flex-col gap-2 md:pb-3 pb-7">
         <h2 class="font-semibold text-xl text-textPrimary">Red Jingles</h2>
         <p class="text-textMuted leading-8">A theme based AI chatbot focusing on scalability</p>
         <div class="flex gap-5 flex-wrap">
          <a href="https://credible-crypto.jay.is-savvy.dev/" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1 text-primaryAccent decoration-primaryAccent underline underline-offset-4">
           <font-awesome-icon :icon="['fas', 'file-lines']" />
           Doc
          </a>
          <a href="https://github.com/jbhv12/red-jingles" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1 text-primaryAccent decoration-primaryAccent underline underline-offset-4">
           <app-icon icon="code-fork" size="sm"></app-icon>
           Code
          </a>
          <a href="https://www.youtube.com/watch?v=iGKpq-T21J8" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1 text-primaryAccent decoration-primaryAccent underline underline-offset-4">
           <font-awesome-icon :icon="['fas', 'trophy']" />
           Winner
          </a>
         </div>
        </article>

        <article class="flex flex-col gap-2 md:pb-3 pb-7">
         <h2 class="font-semibold text-xl text-textPrimary">Resume</h2>
         <p class="text-textMuted leading-8">Clean, ATS Optimized, Auto-Generated Resume</p>
         <div class="flex gap-5 flex-wrap">
          <a href="https://github.com/jbhv12/resume/releases/download/2025-04-22/resume-2025-04-22.pdf" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1 text-primaryAccent decoration-primaryAccent underline underline-offset-4">
           <app-icon icon="eye" size="sm"></app-icon>
           Live
          </a>
          <a href="https://github.com/jbhv12/resume" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1 text-primaryAccent decoration-primaryAccent underline underline-offset-4">
           <app-icon icon="code-fork" size="sm"></app-icon>
           Code
          </a>
         </div>
        </article>

        <article class="flex flex-col gap-2 md:pb-3 pb-7">
         <h2 class="font-semibold text-xl text-textPrimary">Workouts Tracker API</h2>
         <p class="text-textMuted leading-8">Showcase of my skills as a cloud developer</p>
         <div class="flex gap-5 flex-wrap">
          <a href="https://jmb6cgzee2.execute-api.us-west-2.amazonaws.com/" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1 text-primaryAccent decoration-primaryAccent underline underline-offset-4">
           <app-icon icon="eye" size="sm"></app-icon>
           Live
          </a>
          <a href="https://github.com/jbhv12/serverless-workout-tracker-api" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1 text-primaryAccent decoration-primaryAccent underline underline-offset-4">
           <app-icon icon="code-fork" size="sm"></app-icon>
           Code
          </a>
         </div>
        </article>

        <article class="flex flex-col gap-2 md:pb-3 pb-7">
         <h2 class="font-semibold text-xl text-textPrimary">LFS</h2>
         <p class="text-textMuted leading-8">My custom linux distro made from scratch</p>
         <div class="flex gap-5 flex-wrap">
          <a href="https://www.linuxfromscratch.org/" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1 text-primaryAccent decoration-primaryAccent underline underline-offset-4">
           <font-awesome-icon :icon="['fas', 'file-lines']" />
           Doc
          </a>
         </div>
        </article>
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