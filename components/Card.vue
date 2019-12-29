<template>
  <div>
    <b-container>
      <b-row class="mt-2">
        <b-card-group deck>
          <b-card
            v-for="(item, index) in items"
            :key="index"
            class="col-lg-4 col-md-4 mb-3"
            :header="item.title"
            header-tag="header"
            footer="Card Footer"
            footer-tag="footer"
            :title="item.title"
          >
            <b-card-text v-html="item.description"></b-card-text>
            <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>
        </b-card-group>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  props: {
    items: Array
  }
};
</script>
