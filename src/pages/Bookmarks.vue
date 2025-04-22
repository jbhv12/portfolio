<template>
    <Layout>
      <transition name="fade" appear>
        <main class="mt-1 mb-14">
          <div class="contain flex flex-col gap-7">
            <h1 class="font-semibold text-4xl">
              Bookmarks
            </h1>
              <p class="text-dimGrey leading-8">
                Explore my curated collection of intriguing articles and resources from around the web.
              </p>
          </div>
  
          <!-- Article List Section -->
          <div class="contain mt-16 flex flex-col gap-3">
            <div class="flex flex-col gap-3">
              <article class="flex md:flex-row flex-col md:items-center items-start md:gap-10 gap-0 md:pb-3 pb-5">
                <a href="https://www.kalzumeus.com/2011/10/28/dont-call-yourself-a-programmer/" class="text-dimGrey decoration-cuppy underline underline-offset-4">
                  Don't Call Yourself A Programmer, And Other Career Advice
                </a>
              </article>
              
              <article class="flex md:flex-row flex-col md:items-center items-start md:gap-10 gap-0 md:pb-3 pb-5">
                <a href="https://joshcollinsworth.com/blog/antiquated-react" class="text-dimGrey decoration-cuppy underline underline-offset-4">
                  Things you forgot (or never knew) because of React
                </a>
              </article>

              <article class="flex md:flex-row flex-col md:items-center items-start md:gap-10 gap-0 md:pb-3 pb-5">
                <a href="https://www.joelonsoftware.com/2003/10/08/the-absolute-minimum-every-software-developer-absolutely-positively-must-know-about-unicode-and-character-sets-no-excuses/" class="text-dimGrey decoration-cuppy underline underline-offset-4">
                  The Absolute Minimum Every Software Developer Absolutely, Positively Must Know About Unicode and Character Sets (No Excuses!)
                </a>
              </article>

              <article class="flex md:flex-row flex-col md:items-center items-start md:gap-10 gap-0 md:pb-3 pb-5">
                <a href="https://graphics.stanford.edu/~seander/bithacks.html" class="text-dimGrey decoration-cuppy underline underline-offset-4">
                  Bit Twiddling Hacks
                </a>
              </article>

              <article class="flex md:flex-row flex-col md:items-center items-start md:gap-10 gap-0 md:pb-3 pb-5">
                <a href="http://www.catb.org/~esr/open-source.html" class="text-dimGrey decoration-cuppy underline underline-offset-4">
                  Goodbye, "free software"; hello, "open source"
                </a>
              </article>
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
      title: "Bookmarks",
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
  