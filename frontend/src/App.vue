<template>
    <hero />
</template>

<script>
import Strapi from 'strapi-sdk-javascript/build/main'
import hero from './components/hero.vue'

const apiUrl = process.env.API_URL || 'http://127.0.0.1:1337'
const strapi = new Strapi(apiUrl)

console.error('app');

export default {
  name: 'app',
  components: {
    hero
  },
  data () {
    return {
      hero: {}
    }
  },
  async fetch({ store }) {
    console.error('fetch');
    hero = await strapi.request('post', '/graphql', {
      data: {
        query: `query {
            startpage {
              id
              hero
                {
                  headline
                  subline
                  image {
                    url
                  }
                  sociallinklist {
                    icon
                    link
                  }
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
  }
}
</script>

<style src="./assets/tailwind.css">
