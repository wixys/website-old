<template>
    <div>
        <footer class="footer bg-dark">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 h-100 text-center text-lg-left my-auto">
                        <ul class="list-inline mb-2">
                            <li class="list-inline-item">
                                <a href="#">{{ $t('menu_items.about') }}</a>
                            </li>
                            <li class="list-inline-item">&sdot;</li>
                            <li class="list-inline-item">
                                <a href="#">{{ $t('menu_items.contact') }}</a>
                            </li>
                            <li class="list-inline-item">&sdot;</li>
                            <li class="list-inline-item">
                                <a href="#">{{ $t('menu_items.terms_of_use') }}</a>
                            </li>
                            <li class="list-inline-item">&sdot;</li>
                            <li class="list-inline-item">
                                <a href="#">{{ $t('menu_items.privacy_policy') }}</a>
                            </li>
                        </ul>
                        <p class="text-muted small mb-4 mb-lg-0">&copy; {{ companyInfo }} {{ currentYear }}. {{ $t('messages.all_rights_reserved') }}.</p>
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
                linkedin: process.env.socialMedia.linkedinUrl
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