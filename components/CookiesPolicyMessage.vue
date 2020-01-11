<template>
  <div>
    <section v-show="messageCookiePolicy">
      <b-container>
        <b-row>
          <b-col class="col-lg-4 col-md-4">
            <div class="box-cookies">
              <h5 class="pt-2">{{ $t('titles.cookies_policy') }}</h5>
              <p>{{ $t('messages.cookies_policy_message') }}</p>
              <button
                type="button"
                class="btn btn-success"
                @click="setCookiePolicy"
              >{{ $t('buttons.accept') }}</button>
              <nuxt-link
                :to="'/' + $i18n.locale + '/' + $t('pages.cookies_policy')"
                class="btn btn-light"
              >{{ $t('buttons.read_more') }}</nuxt-link>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
import Cookies from "js-cookie";

export default {
  data() {
    return {
      messageCookiePolicy: true
    };
  },
  created() {
    this.getCookiePolicy();
  },
  methods: {
    setCookiePolicy() {
      const cookiePolicy = "cookiePolicyHasBeenAccepted";
      Cookies.set("cookie_policy", cookiePolicy, { expires: 60, path: "" });
      this.messageCookiePolicy = false;
    },
    getCookiePolicy() {
      if (Cookies.get("cookie_policy")) {
        this.messageCookiePolicy = false;
      } else {
        this.messageCookiePolicy = true;
      }
    }
  }
};
</script>

<style scoped>
.box-cookies {
  z-index: 1000;
  position: fixed;
  bottom: 10px;
  left: 20px;
  right: 20px;
  background-color: #333;
  opacity: 0.8;
  filter: alpha(opacity=20);
  padding: 10px 20px 10px 20px;
  color: #fff;
  border-radius: 0.4rem;
  box-shadow: 10px 10px 15px rgba(73, 78, 92, 0.1);
}
</style>