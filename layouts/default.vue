<template>
  <div>
    <div id="page-top"></div>
    <div v-show="topNavBar">
      <TopNavBar />
    </div>
    <NavBar />
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
  import TopNavBar from '~/components/TopNavBar.vue'
  import NavBar from "@/components/NavBar";
  import Header from "@/components/Header";
  import Footer from "@/components/Footer";

  export default {
    data() {
      return {
        showTopNavBar: false,
      }
    },
    components: {
        TopNavBar,
        NavBar,
        Header,
        Footer
    },
    computed: {
      topNavBar () {
        this.showTopNavBar = process.env.topNavBar
        return this.showTopNavBar
      }
    }
  }
</script>