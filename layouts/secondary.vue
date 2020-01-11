<template>
  <div>
    <div id="page-top"></div>
    <div v-show="topNavBar">
      <TopNavBar />
    </div>
    <NavBar />
    <!--<Breadcrumb />-->

    <div class="container">
      <div class="row mt-5">
        <nuxt />
      </div>
    </div>
    <Footer />
    <CookiesPolicyMessage />
  </div>
</template>

<script>
import TopNavBar from "~/components/TopNavBar.vue";
import NavBar from "~/components/NavBar.vue";
import Breadcrumb from "~/components/Breadcrumb.vue";
import SideBar from "~/components/SideBar.vue";
import Footer from "~/components/Footer.vue";
import CookiesPolicyMessage from "~/components/CookiesPolicyMessage.vue";

export default {
  components: {
    TopNavBar,
    NavBar,
    Breadcrumb,
    SideBar,
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
