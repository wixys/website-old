<template>
    <div>
        <div class="container">
            <h1 class="mb-3">{{ article.title }}<br>
            <small v-html="article.subtitle"></small>
            </h1>
            <div class="row mb-3">
                <div class="col-lg-6">
                    <img v-if="article.media" class="img-fluid rounded mb-4" :src="article.media.cover" :alt="article.media.cover">
                </div>
                <div class="col-lg-6">
                    <div v-html="article.content"></div>
                </div>
            </div>
		</div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        layout: 'secondary',
        head() {
            return {
                title: 'Implementing article',
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'Working on it'
                    }
                ]
            }
        },
        async fetch({ store, error, params }) {
            try {
                await store.dispatch('article/fetchArticle', params)
            } catch(e) {
                error({
                    statusCode: 503,
                    message: 'Unable to fetch contents at this moment. Please try again later.'
                })
            }
        },
        computed: mapState({
            article: state => state.article.article
        })
    }
</script>
