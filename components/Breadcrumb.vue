<template>
    <div>
        <div class="container-fluid">
            <nav aria-label="breadcrumb">
                <div class="row">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item" aria-current="page">
                            <nuxt-link to="./">Inicio</nuxt-link>
                        </li>
                        <li class="breadcrumb-item" aria-current="page" v-for="item in crumbs" v-bind:key="item.id">
                            <nuxt-link :to="'/' + $i18n.locale + '/' + item">{{ item.charAt(0).toUpperCase() + item.slice(1).replace(/-/g, " ") }}</nuxt-link>
                        </li>
                    </ol>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            crumbs() {
                let breadcrumb = this.$route.path.split('/')
                breadcrumb.shift()
                breadcrumb.splice(0, 1)
                return breadcrumb
            }
        }
    }
</script>
