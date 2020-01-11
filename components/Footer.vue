<template>
    <div>
        <footer class="footer bg-dark">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 h-100 text-center text-lg-left my-auto">
                        <ul class="list-inline mb-2">
                            <li class="list-inline-item">
                                <nuxt-link :to="'/' + $i18n.locale + '/' +  $t('pages.about')">{{ $t('menu_items.about') }}</nuxt-link>
                            </li>
                            <li class="list-inline-item">&sdot;</li>
                            <li class="list-inline-item">
                                <nuxt-link :to="'/' + $i18n.locale + '/' +  $t('pages.contact')">{{ $t('menu_items.contact') }}</nuxt-link>
                            </li>
                            <li class="list-inline-item">&sdot;</li>
                            <li class="list-inline-item">
                                <nuxt-link :to="'/' + $i18n.locale + '/' +  $t('pages.terms_of_use')">{{ $t('menu_items.terms_of_use') }}</nuxt-link>
                            </li>
                            <li class="list-inline-item">&sdot;</li>
                            <li class="list-inline-item">
                                <nuxt-link :to="'/' + $i18n.locale + '/' +  $t('pages.privacy_policy')">{{ $t('menu_items.privacy_policy') }}</nuxt-link>
                            </li>
                        </ul>
                        <p class="text-white mt-4 mb-4 mb-lg-0">
                            <a v-if="phone" :href="'tel:'+phone" class="text-white">
                                <font-awesome-icon :icon="['fas', 'phone']" class="text-white"/> {{ phone }}
                            </a>
                            &nbsp;&nbsp;
                            <a v-if="mobile" :href="'tel:'+mobile" class="text-white">
                                <font-awesome-icon v-if="mobile" :icon="['fas', 'mobile-alt']" class="text-white" /> {{ mobile }}
                            </a>
                        </p>
                        <p class="text-white mb-4 mb-lg-0">
                            <a v-if="emailAddress" :href="'mailto:'+emailAddress" class="text-white">
                                <font-awesome-icon :icon="['fas', 'envelope']" class="text-white"/> {{ emailAddress }}
                            </a>
                            &nbsp;&nbsp;
                        </p>
                        <p class="text-white mb-4 mb-lg-0">
                            {{ address }}<br>
                            {{ zipcode }} {{ city }} ({{ state }}).
                        </p>
                        <p class="text-muted small mt-3 mb-4 mb-lg-0">&copy; {{ companyInfo }} {{ currentYear }}. {{ $t('messages.all_rights_reserved') }}.</p>
                    </div>
                    <div class="col-lg-6 h-100 text-center text-lg-right my-auto">
                        <ul class="list-inline mb-0">
                            <li class="list-inline-item mr-3">
                                <a :href="facebook">
                                    <font-awesome-icon :icon="['fab', 'facebook-square']" class="fa-2x fa-fw"/>
                                </a>
                            </li>
                            <li class="list-inline-item mr-3">
                                <a :href="twitter">
                                    <font-awesome-icon :icon="['fab', 'twitter-square']" class="fa-2x fa-fw"/>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a :href="linkedin">
                                    <font-awesome-icon :icon="['fab', 'linkedin']" class="fa-2x fa-fw"/>
                                </a>
                            </li>
                        </ul>
                    </div> 
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                company: null,
                title: null,
                description: null,
                year: null,
                facebook: process.env.socialMedia.facebookUrl,
                twitter: process.env.socialMedia.twitterUrl,
                linkedin: process.env.socialMedia.linkedinUrl,
                phone: process.env.contactInfo.phone,
                mobile: process.env.contactInfo.mobile,
                mobile: process.env.contactInfo.mobile,
                emailAddress: process.env.contactInfo.emailAddress,
                address: process.env.contactInfo.address,
                city: process.env.contactInfo.city,
                state: process.env.contactInfo.state,
                zipcode: process.env.contactInfo.zipcode
            }
        },
        computed: {
            companyInfo () {
                this.company = process.env.brand.company
                return this.company
            },

            currentYear () {
                const y = new Date()
                this.year = y.getFullYear()
                return this.year
            }
        }
    }
</script>

<style scoped>
footer.footer {
  padding-top: 4rem;
  padding-bottom: 4rem;
}
</style>