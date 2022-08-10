<template>
    <section class="home">
        <app-header />
        <app-hero />
        <cards-list />
        <review-list />
        <join-form />
        <app-footer />
    </section>
</template>

<script>
import appHeader from '../components/app-header.vue'
import appHero from '../components/app-hero.vue'
import cardsList from '../components/cards-list.vue'
import reviewList from '../components/review-list.vue'
import joinForm from '../components/join-form.vue'
import appFooter from '../components/app-footer.vue'
export default {
    name: 'home',
    components: {
        appHeader,
        appHero,
        cardsList,
        reviewList,
        joinForm,
        appFooter
    },
}
</script>

<style>
</style>