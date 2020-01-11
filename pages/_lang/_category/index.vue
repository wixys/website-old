<template>
    <div>
        <Category :category="category"/>
    </div>
</template>

<script>
    import Category from '@/components/Category.vue'
    import { mapState } from 'vuex'

    export default {
        layout: 'secondary',
        components: {
            Category
        },
        head() {
            return {
                title: this.category.title,
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: this.category.description
                    }
                ]
            }
        },
        async fetch({ store, error, params }) {
            try {
                await store.dispatch('category/fetchCategory', params)
            } catch(e) {
                error({ statusCode: 404, message: 'Post not found' })
            }
        },
        computed: mapState({
            category: state => state.category.category
        })
    }
</script>
