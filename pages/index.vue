<template>
  <div>
    <Card :items="items" />
  </div>
</template>

<script>
import Card from "@/components/Card";
import { mapState } from "vuex";

export default {
  components: {
    Card
  },
  async fetch({ store, error }) {
    try {
      await store.dispatch("catalog/fetchCatalog");
    } catch (e) {
      error({ statusCode: 404, message: "Post not found" });
    }
  },
  computed: mapState({
    items: state => state.catalog.catalog
  })
};
</script>
