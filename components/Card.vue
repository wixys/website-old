<template>
  <div>
    <b-container>
      <b-row class="mt-2">
        <b-card-group deck>
          <b-col
            v-for="(item, index) in items"
            :key="index"
            :data-index="index"
            class="col-lg-4 col-md-4 mb-3"
          >
            <b-card
              footer="Card Footer"
              footer-tag="footer"
              :title="item.title"
              class="h-100"
            >
              <b-card-text v-html="item.description"></b-card-text>
              <b-button href="#" variant="primary">
                <nuxt-link :to="'/' + $i18n.locale + '/' + item.slug" class="btn btn-brand">
								  {{ $t('links.see_more') }} <i class="fas fa-angle-right"></i>
							  </nuxt-link>
              </b-button>
            </b-card>
          </b-col>
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
