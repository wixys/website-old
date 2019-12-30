<template>
  <div>
    <NavBar />
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  components: {
    NavBar,
    Header,
    Footer
  }
};
</script>