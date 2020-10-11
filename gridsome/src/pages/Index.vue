<template>
  <Layout>
  <hero />
  </Layout>
</template>


<script>
import hero from '~/components/hero.vue'

export default {
  siteDescription: 'Website Testiing mit Codeception und Cypress IO für Teams auch als PHP Training',
  metaInfo: {
    title: 'PHP-Training und PHP Freelancer für Website Testing mit Codeception und Cypress.io',
    meta: [
      {
        key: 'description',
        name: 'description',
        content: 'Website Testiing mit Codeception und Cypress IO für Teams auch als PHP Training'
      }
    ]
    
  },
  components: {
    hero
  }
}
</script>

<style src="~/tailwind.css">

