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
    <CookiesPolicyMessage />
  </div>
</template>

<script>
import TopNavBar from "~/components/TopNavBar.vue";
import NavBar from "@/components/NavBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookiesPolicyMessage from "~/components/CookiesPolicyMessage.vue";

export default {
  data() {
    return {
      showTopNavBar: false
    };
  },
  components: {
    TopNavBar,
    NavBar,
    Header,
    Footer,
    CookiesPolicyMessage
  },
  computed: {
    topNavBar() {
      this.showTopNavBar = process.env.topNavBar;
      return this.showTopNavBar;
    }
  }
};
</script>