<template>
    <div>
        <!-- SideBar -->
        <ul class="list-group">
            <li class="list-group-item">
                <nuxt-link :to="'/' + $i18n.locale + '/categorias'"> > Categoría</nuxt-link>
            </li>
            <li class="list-group-item">
                <nuxt-link :to="'/' + $i18n.locale + '/aplicacion'"> > Aplicación</nuxt-link>
            </li>
            <li class="list-group-item">
                <nuxt-link :to="'/' + $i18n.locale + '/gama'"> > Gama</nuxt-link>
            </li>
        </ul>
        <br>
    </div>
</template>

<script>

    export default {

    }
</script>
