<template>
    <Layout>
        <transition name="fade" appear>
            <main class="contain mt-14 mb-14">
                <h1 class="text-2xl font-semibold mb-10">Projects</h1>
                
                <div class="md:grid md:grid-cols-3 md:gap-5 gap-7 flex flex-col">
                    
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
    
                    <!-- Fifth project -->
                    <div class="bg-[#31363B] flex flex-col justify-center gap-3 rounded-sm h-40 pl-3">
                        <h2 class="font-semibold text-xl">Resume</h2>
                        <p class="text-dimGrey">Clean, ATS Optimized, Auto-Generated Resume</p>
    
                        <div class="flex gap-5">
                            <a href="https://jay.is-savvy.dev/" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1 text-cuppy">
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
    export default {
      metaInfo: {
        title: "Notable projects ⚒",
      },
    };
    </script>