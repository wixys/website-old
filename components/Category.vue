<template>
	<div>
		<div v-if="category.title != $t('menu_items.home')">
			<div class="container">	
				<h1 class="mb-3">{{ category.title }}
					<small v-html="category.subtitle"></small>
				</h1>
				<div class="row">
					<div class="col-md-12">
						<p v-html="category.description"></p>
					</div>
				</div>
			</div>
		</div>
		<div else>
			<h1 class="mb-3"></h1>
		</div>
		<section id="services" v-if="category.categories">
			<div class="container"
				v-for="(subcategory, index) in category.categories"
				:key="index"
				:data-index="index"
			>
				<div class="section-header">
					<h2>{{ subcategory.title }}</h2>
					<p v-html="subcategory.description"></p>
				</div>
				<div class="row">
					<div v-for="(item, index) in subcategory.articles"
						:key="index"
						:data-index="index"
						:class="'col-lg-' + item.columns + ' col-md-' + item.columns + ' mt-3'"
					>
						<div :class="'card ' + item.class">
							<div v-if="item.icon" class="mt-5">
								<font-awesome-icon :icon="['fas', item.icon]" class="fa-5x"/>
							</div>
							<div v-else>
								<img v-if="item.media" :src="item.media.cover" class="card-img-top" :alt="item.title">
							</div>
							<div class="card-body">
								<h3 class="title">{{ item.title }}</h3>
								<div v-html="item.description"></div>
							</div>
							<div v-if="item.icon">
								
							</div>
							<div v-else>
								<div class="card-footer">
									<nuxt-link :to="'/' + $i18n.locale + '/' + subcategory.slug + '/' + item.slug" class="btn btn-brand btn-lg">
										{{ $t('links.read_more') }} <font-awesome-icon :icon="['fas', 'angle-right']" />
									</nuxt-link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<div class="container">
			<div class="row mb-5">
				<Article 
					v-for="(article, index) in category.articles"
					:key="index"
					:article="article"
					:data-index="index"
				/>
			</div>
		</div>
	</div>
</template>
<script>
	import Article from '@/components/Article.vue'
	
	export default {
		name: 'Category',
		components: {
			Article
		},
		props: {
			category: Object
		}
	}
</script>
