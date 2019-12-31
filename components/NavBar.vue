<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light" class="shadow" fixed="top">
      <b-navbar-brand href="#">
        <Logo />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            <nuxt-link :to="'/' + $i18n.locale">
              {{ $t('menu_items.home') }}
            </nuxt-link>
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <div v-if="search">
            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" :placeholder="$t('menu_items.search')"></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">{{ $t('menu_items.search') }}</b-button>
            </b-nav-form>
          </div>

          <div v-if="multilang">
            <b-nav-item-dropdown :text="$t('menu_items.languages')" right>
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">ES</b-dropdown-item>
            </b-nav-item-dropdown>
          </div>
          <div v-if="profile">
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template v-slot:button-content>
                {{ $t('menu_items.user') }}
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </div>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import Logo from "@/components/Logo";

export default {
  data() {
    return {
      searchBox: false,
      multilangSelector: false,
      userProfileMenu: false
    }
  },
  components: {
    Logo
  },
  computed: {
    search () {
      this.searchBox = process.env.search
      return this.searchBox
    },
    multilang () {
      this.multilangSelector = process.env.multilang
      return this.multilangSelector
    },
    profile () {
      this.userProfileMenu = process.env.profile
      return this.userProfileMenu
    }
  }
};
</script>