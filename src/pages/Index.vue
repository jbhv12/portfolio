<template>
  <Layout>
    <transition name="fade" appear>
      <main class="mt-1 mb-14">
        <div class="contain flex flex-col gap-7">
          <h1 class="font-semibold text-4xl text-textPrimary">
            Hey <span class="wave" @click="startAnimation">👋</span>, I'm Jay
          </h1>
          <p class="text-textPrimary leading-8">
            I'm a Backend and Cloud Engineer who thrives to craft solutions that are both simple and elegant. 
            I leverage a diverse array of technologies and tools (including AI) to solve the problem at hand.
            I have worked with many teams, small and large, across the globe to solve some of the most complex challenges in tech.
            I'm a Super Engineer who is on the journey to set new benchmarks of excellence!
            My email is:
            
          </p>
          <Email :loopMessage="true" />
          <div class="flex items-center gap-5 text-textPrimary">
            <p>Also on:</p>

            <a href="https://www.linkedin.com/in/jbhv12" target="_blank">
                <app-icon icon="fab fa-linkedin" size="lg"></app-icon>
            </a>

            <a href="https://github.com/jbhv12" target="_blank">
              <app-icon icon="fab fa-github" size="lg"></app-icon>
            </a>

            <a href="https://twitter.com/jbhv12" target="_blank">
              <app-icon icon="fab fa-twitter" size="lg"></app-icon>
            </a>

            <a
              href="https://discordapp.com/users/apesnape"
              target="_blank"
            >
              <app-icon icon="fab fa-discord" size="lg"></app-icon>
            </a>

            <a href="mailto:dev.adewale@gmail.com">
              <app-icon icon="at" size="lg"></app-icon>
            </a>
          </div>
        </div>

        <!-- Article List Section -->
        <div class="contain mt-16 flex flex-col gap-3">
          <a href="https://dev.to/jbhv12" target="_blank" class="font-semibold text-xl text-textPrimary">
            Posts
            <app-icon class="text-textPrimary" icon="link" size="sm"></app-icon>
          </a>
          <div class="flex flex-col gap-3">
            <article class="flex md:flex-row flex-col md:items-center items-start md:gap-10 gap-0 md:pb-3 pb-5">
              <p class="text-textMuted">22 Apr 2025</p>
              <a
                href="https://dev.to/jbhv12/how-to-make-the-most-of-a-cheap-ipv6-only-vps-a-guide-for-self-hosting-enthusiasts-1ibg"
                class="text-textPrimary decoration-primaryAccent underline underline-offset-4"
                target="_blank" rel="noopener noreferrer"
              >
                How to Make the Most of a Cheap IPv6-Only VPS
              </a>
            </article>
            <article class="flex md:flex-row flex-col md:items-center items-start md:gap-10 gap-0 md:pb-3 pb-5">
              <p class="text-textMuted">04 Apr 2024</p>
              <a
                href="https://dev.to/jbhv12/inversion-of-control-ioc-demystifying-the-familiar-pattern-2003"
                class="text-textPrimary decoration-primaryAccent underline underline-offset-4"
                target="_blank" rel="noopener noreferrer"
              >
                Inversion of Control (IoC): Demystifying the Familiar Pattern
              </a>
            </article>
            <article class="flex md:flex-row flex-col md:items-center items-start md:gap-10 gap-0 md:pb-3 pb-5">
              <p class="text-textMuted">09 Feb 2024</p>
              <a
                href="https://dev.to/jbhv12/oauth-terms-explained-in-one-sentence-2all"
                class="text-textPrimary decoration-primaryAccent underline underline-offset-4"
                target="_blank" rel="noopener noreferrer"
              >
                OAuth Terms Explained in One Sentence
              </a>
            </article>
            <article class="flex md:flex-row flex-col md:items-center items-start md:gap-10 gap-0 md:pb-3 pb-5">
              <p class="text-textMuted">15 Dec 2023</p>
              <a
                href="https://dev.to/jbhv12/red-jingles-a-holiday-theme-based-ai-chatbot-5fl8"
                class="text-textPrimary decoration-primaryAccent underline underline-offset-4"
                target="_blank" rel="noopener noreferrer"
              >
                Scaling Cheer: A Deep Dive into the Architecture of Red Jingles AI Chatbot
              </a>
            </article>
          </div>
        </div>

        <!-- Work Experience Section -->
        <div class="contain mt-16 flex flex-col gap-3">
          <h2 class="text-xl font-semibold text-textPrimary">Work Highlights</h2>
          <tabs :mode="mode">
            <tab
              title="QAD"
              :roles="[
                { position: 'Module Lead', itemList: qadItemList1 },
                { position: 'Principal Software Engineer', itemList: qadItemList2 }
              ]"
              company="QAD"
              companyURL="https://qad.com/"
            />
            <tab title="Haiku" :roles="[{ position: 'Lead Cloud Architect and Backend Engineer', itemList: haikuItemList }]" company="Haiku" companyURL="https://haikuinc.io/"/>
            <tab title="Media.net" :roles="[{ position: 'Senior Software Engineer', itemList: mnetItemList }]" company="Media.net" companyURL="https://www.media.net/" />
            <tab title="Gartner" :roles="[{ position: 'DevOps Engineer', itemList: gartnerItemList }]" company="Gartner" companyURL="https://gartner.com/" />
            <tab title="Taskit" :roles="[{ position: 'Backend Developer', itemList: taskitItemList }]" company="Taskit" companyURL="https://task.it/" />
            <tab title="TCS" :roles="[{ position: 'Research Engineer', itemList: tcsItemList }]" company="TCS" companyURL="https://tcs.com/" />
          </tabs>


<div style="margin-top: 10px; align-self: flex-start; display: flex; align-items: flex-end;">
  
  <span style="margin-left: 10px;
               font-size: 12px;
               color: #00FF52; 
               position: relative;
               bottom: 2px;
               line-height: 1;
               font-size: 12px;"> 
    <!-- <a href="https://github.com/jbhv12/resume" target="_blank">See how it's generated!</a> -->
  </span>
</div>



  
        </div>

        <div class="contain mt-16" style="width: 100%; margin: 60px 0 0 0;">
          <div class="mb-5" style="margin: 0;">
            <div class="senja-embed" data-id="c852e66c-9a22-40c8-8a9f-8039ccc00a18" data-lazyload="false"></div>
          </div>
        </div>

        <!-- Technologies List Section -->
        <div class="contain mt-5">
          <div class="mb-5">
            <h2 class="text-xl font-semibold text-textPrimary">Lets's Connect!</h2>
            <p class="mt-5 text-textPrimary leading-8">Feel free to reach out. Shoot me an <a href="mailto:hi@jay-is-savvy.dev" class="decoration-primaryAccent underline underline-offset-4">email</a> or <a href="https://cal.com/jbhv12" target="_blank" class="decoration-primaryAccent underline underline-offset-4">schedule a call</a>.</p>
            <p class="mt-5 text-textPrimary leading-8">Looking for mentorship? Connect with me on <a href="https://adplist.org/mentors/jay-bhavsar" target="_blank" class="decoration-primaryAccent underline underline-offset-4">ADPList</a> — it's free!</p>
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
    title: "Hello",
  },
  components: {
    Tab,
    Tabs,
    Email
  },
  data () {
    return {
      mode: 'dark',
      qadItemList1: [
        'Lead a cross-functional team of 7 to build a greenfield, cloud-native application and API for real-time trade compliance checks',
        'Drive strategic initiatives including roadmap planning, architecture reviews, code reviews, mentoring through weekly 1:1s and team hiring (onboarded 4 engineers)',
        'Foster a high-performance, collaborative culture by promoting ownership, continuous learning, and teamwork'
      ],
      qadItemList2: [
        'Refactored critical components of a monolithic, resulting in improved maintainability and deployment flexibility',
        'Migrated legacy systems to a scalable SaaS architecture on AWS, introducing containerization (Docker) and automated database change management with Liquibase',
        'Improved test coverage from 10% to 60% by implementing automated testing pipelines and enforcing quality gates',
      ],
      mnetItemList: [
        'Simplified and maintained a large-scale data-intensive application for powering 300+ million internet ads daily',
        'Administered server-side header bidding platforms, providing Media.net with a competitive market edge and maximizing revenue for 21000+ publishers',
        'Engineered caching technologies (MySQL, Redis, Caffeine Cache, Varnish, Akamai) for impressive QPS of 15000 and a 99th percentile response time under 10ms'
      ],
      haikuItemList: [
        'Responsible for designing and implementing a game play solution in Kubernetes (AWS EKS), achieving an 80% reduction in game load time, from approximately 27 seconds to around 5 seconds',
        'Fixed, optimized, and deployed many games that help students make a career in cybersecurity. These games provide a Kali Linux cloud computer on demand and simulate vulnerable software',
        'Led the creation and implementation of a dynamic lab environment for university students, designed to simulate a vulnerable small business network. This was hosted on AWS, offering features such as on-demand creation, destruction, and secure access via VPN'
      ],
      taskitItemList: [
        'Implemented a scheduling algorithm from scratch, achieving zero error rate and capacity to handle millions of users',
        'Leveraged the Google Cloud platform (including App Engine, Cloud Tasks, Cloud Run, Cloud Scheduler, and other advanced tools) to deploy the service, scale up performance, and reducing operational costs by 70%',
        'Overhauled the code formatting, testing, and deployment processes with the implementation of GitHub Actions pipelines, saving 10+ hours of developer time every week'
      ],
      tcsItemList: [
        'Orchestrated a real-time, large-scale security analysis platform by leveraging open source big data tools and analytical expertise, while reporting directly to the Global Head of the Cyber Security Unit',
        'Developed a robust threat intelligence platform using Apache Metron, Kafka, Storm and Elasticsearch, resulting in a 40% reduction in false positives',
      ],
      gartnerItemList: [
        'Delivered a full-scale disaster recovery (DR) solution for Gartner.com in AWS US East (N. Virginia and Ohio), ensuring business continuity with an RTO of under 15 minutes',
        'Deployed 120+ applications and managed 100+ cloud infrastructure services, including S3, Lambda, Glue ETL, Kinesis, SageMaker, SQS, SNS, SES, and EFS',
        'Implemented Cloudflare failover automation and Route 53 ARC spike handling for global availability',
        'Maintained 7 production databases with high availability and performance under strict RTO/RPO targets'
      ]
    }
  },
  mounted() {
    const script = document.createElement('script');
    script.async = true;
    script.type = 'text/javascript';
    script.src = 'https://static.senja.io/dist/platform.js';
    document.body.appendChild(script);

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
    },
    startAnimation() {
      this.isAnimating = true;
      setTimeout(() => {
        this.isAnimating = false;
      }, 1700); 
    }
  }
};
</script>

<style>
.wave {
  animation-name: wave-animation;
  animation-duration: 2.5s;
  transform-origin: 70% 70%;
  display: inline-block;
}

@keyframes wave-animation {
    0% { transform: rotate( 0.0deg) }
   10% { transform: rotate(14.0deg) }
   20% { transform: rotate(-8.0deg) }
   30% { transform: rotate(14.0deg) }
   40% { transform: rotate(-4.0deg) }
   50% { transform: rotate(10.0deg) }
   60% { transform: rotate( 0.0deg) }
  100% { transform: rotate( 0.0deg) }
}

.wave:hover {
  animation-play-state: running;
}

.wave.running {
  animation-play-state: running;
}
</style>

<page-query>
query {
  posts: allArticles(perPage: 3) {
    edges {
      node {
        id
        title
        path
        date
      }
    }
  }
}
</page-query>
