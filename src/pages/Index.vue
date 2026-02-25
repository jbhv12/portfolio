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

        <!-- Badges Section -->
        <div class="contain mt-16 flex flex-col gap-2">
          <div class="badges-section justify-left flex flex-wrap gap-3 items-center">
            <div class="toptal-badge">
              <div class="tb-h">
                <div class="tb-a">
                <svg width="64" viewBox="0 0 60 17" xmlns="http://www.w3.org/2000/svg"><path d="m20.85 6.38 6.06-.89 2.72-5.49 2.71 5.49 6.06.89-4.39 4.28 1.04 6.03-5.42-2.85-5.43 2.85 1.04-6.03zm33.06 7.17 1.85-.27.82-1.67.83 1.67 1.84.27-1.33 1.31.31 1.83-1.65-.87-1.66.87.32-1.83zm-3.38-3.01-3.61-.52-1.61-3.26-1.62 3.26-3.6.52 2.6 2.55-.61 3.59 3.23-1.69 3.21 1.69-.61-3.59zm-45.19 3.01-1.85-.27-.82-1.67-.83 1.67-1.84.27 1.33 1.31-.31 1.83 1.65-.87 1.65.87-.31-1.83zm3.38-3.01 3.61-.52 1.61-3.26 1.61 3.26 3.61.52-2.6 2.55.61 3.59-3.23-1.69-3.22 1.69.62-3.59z" fill="#00c3ff"/></svg>
                <h3 class="tb-b">TOP 3% TALENT</h3>
                <div class="tb-c"></div>
                <span class="tb-d">Vetted by</span>
                <svg style="width:100px;" viewBox="0 0 108 30" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.11 0L14.82 6.7C14.87 6.75 14.91 6.8 14.97 6.85L20.82 12.7L11.31 22.16L15.66 26.52L12.75 29.41L6.09 22.75C6.01 22.68 5.93 22.6 5.85 22.52L0 16.68L9.48 7.25L5.16 2.94L8.11 0ZM12.36 10.5C12.27 10.48 12.18 10.48 12.1 10.5C12.01 10.53 11.94 10.57 11.78 10.72L6.37 16.11C6.21 16.27 6.17 16.34 6.15 16.42C6.12 16.51 6.12 16.6 6.15 16.68C6.17 16.77 6.22 16.85 6.37 17L8.09 18.72C8.24 18.87 8.31 18.91 8.4 18.94C8.49 18.96 8.57 18.96 8.66 18.94C8.75 18.91 8.82 18.87 8.97 18.72L14.38 13.33C14.54 13.18 14.58 13.1 14.61 13.02C14.63 12.93 14.63 12.85 14.61 12.76C14.59 12.67 14.54 12.6 14.39 12.45L12.67 10.73C12.52 10.57 12.44 10.53 12.36 10.5Z" fill="#204ecf"/><path fill-rule="evenodd" clip-rule="evenodd" d="M62.65 7.76C64.76 7.76 66.56 8.58 67.99 10.16C69.45 11.69 70.18 13.8 70.17 16.42C70.17 18.98 69.42 21.22 67.93 22.8C66.46 24.37 64.59 25.17 62.35 25.17C60.42 25.16 58.67 24.47 57.51 23.28L57.35 23.11L57.34 29.86L53.52 29.85V29.57L53.56 7.96L57.36 7.96L57.35 10.6C58.6 9.19 60.61 7.76 62.65 7.76ZM87.1 7.82C89.28 7.82 90.78 8.31 91.94 9.26C93.05 10.18 93.64 11.82 93.69 13.55L93.69 13.81L93.67 24.95H89.8L89.8 24.49C89.8 24.01 89.8 23.52 89.8 23.02C88.68 24.57 87.12 25.32 85.04 25.32C83.39 25.32 81.99 24.82 80.97 23.9C79.94 22.95 79.39 21.66 79.39 20.16C79.41 17.33 81.41 15.37 84.91 14.76L85.18 14.71L89.82 13.98V13.61C89.82 12.83 89.59 11.89 89.13 11.5C88.66 11.1 88.09 10.77 87.1 10.77C84.37 10.77 83.81 12.78 83.78 13.79L83.78 13.88L80.36 13.92C80.36 12.43 81.05 10.5 82.44 9.29C83.56 8.32 85.19 7.87 86.77 7.82L87.07 7.82H87.1ZM72.12 3.46L75.93 3.46L75.92 8.02L79.45 8.02L79.45 11.2L75.91 11.19L75.9 19.73C75.9 20.67 76.09 21.29 76.5 21.58C76.93 21.88 77.8 21.6 77.8 21.6L78.14 24.92C78.14 24.92 76.94 25.23 76.18 25.23C75.19 25.23 74.34 24.98 73.69 24.48C72.63 23.68 72.09 22.28 72.09 20.31L72.11 11.19L68.92 8L72.12 8.01L72.12 3.46ZM49.66 10.26C50.76 11.39 52.07 13.4 52.06 16.52C52.05 19.63 50.74 21.63 49.65 22.76C48.15 24.3 46.11 25.18 44.06 25.18C43.98 25.18 43.9 25.18 43.81 25.17C41.62 25.16 39.68 24.38 38.06 22.84C36.43 21.29 35.6 19.16 35.6 16.48C35.6 13.8 36.44 11.66 38.07 10.12C39.69 8.59 41.62 7.82 43.82 7.82C45.99 7.75 48.11 8.65 49.66 10.26ZM40.85 3.22V6.99L33.49 7L33.51 24.97L29.54 24.96V24.62L29.57 6.99H22.06L22.07 3.22H40.85ZM95.53 3.47L98.95 3.48V3.57L98.92 24.95L95.5 24.94V24.84L95.53 3.47ZM89.82 17.05L86.01 17.69C84.15 18.01 83.29 18.73 83.28 19.99C83.27 21.14 84.09 21.91 85.37 21.98L85.53 21.98H85.55C87.99 21.98 89.72 20.08 89.81 17.31L89.82 17.09V17.05ZM43.8 11.21C42.52 11.21 41.41 11.7 40.51 12.68C39.63 13.64 39.18 14.92 39.18 16.49C39.18 18.07 39.63 19.35 40.51 20.31C41.4 21.29 42.51 21.78 43.79 21.79C45.09 21.79 46.21 21.3 47.1 20.32C48 19.34 48.45 18.06 48.46 16.51C48.47 14.95 48.01 13.67 47.11 12.69C46.21 11.71 45.1 11.21 43.8 11.21ZM61.74 11.33H61.72C60.44 11.33 59.38 11.79 58.48 12.76C57.58 13.7 57.13 14.92 57.12 16.39C57.12 17.88 57.57 19.22 58.47 20.2C59.39 21.14 60.45 21.61 61.72 21.61C63.01 21.61 64.1 21.13 64.97 20.2C65.88 19.23 66.32 17.9 66.33 16.41C66.33 14.93 65.87 13.71 64.99 12.78C64.12 11.82 63.03 11.33 61.74 11.33Z" fill="#262d3d"/></svg>
                <a class="tb-f" href="https://www.toptal.com/developers/resume/jay-bhavsar#BxKoYd" target="_blank" rel="noopener noreferrer">Hire me</a>
                </div>
              </div>
            </div>
            <a href="https://www.credly.com/badges/c8720cc2-acca-4507-a402-bd7feff16150/public_url" target="_blank" rel="noopener noreferrer" class="aws-badge" title="AWS Certified Solutions Architect - Professional">
              <img src="/aws-certified-solutions-architect-professional.png" alt="AWS Certified Solutions Architect - Professional" />
            </a>
            <a href="https://www.credly.com/badges/db482e87-c99d-4804-9d67-f49a4ecbeb15/public_url" target="_blank" rel="noopener noreferrer" class="aws-badge" title="AWS Certified Solutions Architect - Professional">
              <img src="/aws-certified-solutions-architect-associate.png" alt="AWS Certified Solutions Architect - Associate" />
            </a>
            <a href="https://www.credly.com/badges/04dc0a64-40b8-4d5d-bc8e-e3e51629d39a/public_url" target="_blank" rel="noopener noreferrer" class="aws-badge" title="AWS Certified Solutions Architect - Professional">
              <img src="/professional-data-engineer-certification.png" alt="GCP Data Engineer" />
            </a>
            <!-- Add more badges here -->
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

<style>
/* Toptal badge */
@import "https://use.typekit.net/kmj5qkr.css";

.toptal-badge {
  --tb-h: polygon(50% 0, 100% 24%, 100% 76%, 50% 100%, 0 76%, 0 24%);
  font-family: proxima-nova, Arial, sans-serif;
  transform: scale(0.757)
}

.toptal-badge .tb-h {
  display: inline-block;
  background: #25a9ef;
  padding: 4px;
  clip-path: var(--tb-h);
}

.toptal-badge .tb-a {
  width: 160px;
  padding: 18px 0 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: #204ecf;
  text-align: center;
  background: radial-gradient(circle at 20% -10%, #00c3ff -80%, #fff 30%), radial-gradient(circle at -20% 20%, #00c3ff -80%, #fff 30%), radial-gradient(circle at 70% 100%, #00c3ff -80%, #fff 30%), radial-gradient(circle at 120% 80%, #00c3ff -80%, #fff 30%);
  background-blend-mode: multiply;
  clip-path: var(--tb-h);
  box-shadow: 0 28px 50px rgba(6, 30, 96, 0.35);
}

.toptal-badge .tb-b {
  margin: 0;
  font-size: 15px;
  font-weight: 700;
  line-height: 1;
}

.toptal-badge .tb-c {
  width: 95px;
  height: 1px;
  background: #25a9ef;
}

.toptal-badge .tb-d {
  font-size: 13px;
  margin-bottom: -6px;
}

.toptal-badge .tb-f {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 3px 14px;
  border-radius: 6px;
  background: #296bff;
  color: #fff;
  font-size: 13px;
  font-weight: 500;
  text-decoration-thickness: 0.5px;
  text-underline-offset: 2px;
}

/* AWS badge - matched to Toptal badge size and alignment */
.aws-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  flex-shrink: 0;
}

.aws-badge img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
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
