<template>
  <!--Hero-->
  <div v-if="hero.hero" class="pt-24">
    <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
      <!--Left Col-->
      <div class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
        <p v-if="hero.hero.subline" v-html="hero.hero.subline" class="uppercase tracking-loose w-full"/>
        <h1 v-html="hero.hero.headline" class="my-4 text-5xl font-bold leading-tight"/>
        <p class="leading-normal text-2xl mb-8">
          <VueShowdown
          :markdown="hero.hero.description"
          flavor="github"
          :options="{ emoji: true }"/>  
        </p>
        
      
        <a :href="hero.hero.button.target" target="_blank" class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg">
          {{ hero.hero.button.text }}
        </a>
        
      </div>
      <!--Right Col-->
      <div class="w-full md:w-3/5 text-center p-6">
        <img class="w-full z-50" :src="hero.hero.image.url">
        <div class="px-6 pt-4 pb-2" v-if="hero.hero.sociallinklist">
          <span v-for="(item, index) in hero.hero.sociallinklist" :key="index">
            <a class="text-5xl p-5 transition duration-700 ease-in-out hover:bg-red-500 transform hover:-translate-y-1" :href="item.link" target="_blank">
              <font-awesome-icon :icon='[ "fab", item.icon ]' />
            </a>
          </span>    
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VueShowdown } from 'vue-showdown'

export default {
  name: 'hero',
  components: {
    VueShowdown
  },
  data () {
    return {
      hero: {}
    }
  },
  
}
</script>