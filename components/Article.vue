<template>
	<div>
        <div class="container-fluid">
            <div class="row mb-4">
                <div class="col-md-4 mb-4">
                    <img v-if="article.media" :src="article.media.cover" class="card-img-top" :alt="article.title">
                </div>
                <div class="col-md-8">                    
                    <h3 class="card-title">{{ article.title }}</h3>
                    <p class="card-text" v-html="article.description"></p>
                    <nuxt-link :to="this.$route.params.category+'/'+article.slug" class="btn btn-brand">{{ $t('links.read_more') }}</nuxt-link>     
                </div>
            </div>
        </div>
	</div>
</template>

<script>
	export default {
		name: 'Article',
		props: {
            article: Object,
            category: Object
		}
	}
</script>
