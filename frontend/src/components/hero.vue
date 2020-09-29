<template>
  <!--Hero-->
  <div v-if="hero" class="pt-24">
    <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
      <!--Left Col-->
      <div class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
        <p v-if="hero.subline" v-html="hero.subline" class="uppercase tracking-loose w-full"/>
        <h1 v-html="hero.headline" class="my-4 text-5xl font-bold leading-tight"/>
        <p v-if="hero.description" class="leading-normal text-2xl mb-8">
          <VueShowdown
          :markdown="hero.description"
          flavor="github"
          :options="{ emoji: true }"/>  
        </p>
        <a :href="hero.button.target" target="_blank" class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg">
          {{ hero.button.text }}
        </a>
      </div>
      <!--Right Col-->
      <div class="w-full md:w-3/5 text-center p-6">
        <img class="w-full z-50" :src="hero.imageSrc">
        <div class="px-6 pt-4 pb-2" v-if="hero.sociallinklist">
          <span v-for="(item, index) in hero.sociallinklist" :key="index">
            <a class="text-5xl p-5 transition duration-700 ease-in-out hover:bg-red-500 transform hover:-translate-y-1" :href="item.link" target="_blank">
              <font-awesome-icon :icon='[ "fab", item.icon ]' />
            </a>
          </span>    
        </div>
      </div>
    </div>
    <section v-if="hero.textboxes.length > 0" class="bg-white border-b py-8">
	
      <div class="container mx-auto flex flex-wrap pt-4 pb-12">
      
        <h1 v-if="hero.textboxesheadline" class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          {{ hero.textboxesheadline }}
        </h1>
        <div class="w-full mb-4">	
          <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
      
        <div v-for="(item, index) in hero.textboxes" :key="index" class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
            <a href="#" class="flex flex-wrap no-underline hover:no-underline">
              <p class="w-full text-gray-600 text-xs md:text-sm px-6">
                {{ item.subline }}
              </p>
              <div class="w-full font-bold text-xl text-gray-800 px-6">
                {{ item.headline }}
              </div>
              <p v-if="item.text" class="text-gray-800 text-base px-6 mb-5">
                <VueShowdown
                :markdown="item.text"
                flavor="github"
                :options="{ emoji: true }"/>  
              </p>
            </a>
          </div>
          <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
            <div class="flex items-center justify-start">
              <a :href="item.linktarget" target="_blank" class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg">
                {{ item.linktext }}
              </a>
            </div>
          </div>
        </div>
      </div>
    
    </section>
  </div>
  
</template>

<script>
import Strapi from 'strapi-sdk-javascript/build/main'
import { VueShowdown } from 'vue-showdown'

const apiUrl = process.env.API_URL || 'http://127.0.0.1:1337'
const strapi = new Strapi(apiUrl)

export default {
  name: 'hero',
  components: {
    VueShowdown
  },
  data () {
    return {
      hero: null
    }
  },
  created() {
    console.log('created')  
    const response = strapi.request('post', '/graphql', {
      data: {
        query: `query {
            startpage {
              id
              hero
                {
                  headline
                  subline
                  description
                  image {
                    url
                  }
                  button {
                    text
                    target
                  }
                  sociallinklist {
                    icon
                    link
                  }
                  textboxesheadline
                  textboxes {
                    headline
                    subline
                    text
                    linktext
                    linktarget
                  }
                }
            }
          }
          `
      }
    })
    .then((response) => {
      console.log(response)
      this.hero = response.data.startpage.hero
      this.hero.imageSrc = `${apiUrl}${this.hero.image[0].url}`
    })
    .catch((error) => {
      console.error(error);
    })
  }  
}
</script>