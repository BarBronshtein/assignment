<template>
    <section class="cards-list main-layout full">
        <div class="cards-list__inner flex flex-column items-center justify-center">
            <ul class="cards__wrapper clean-list flex items-center justify-between">
                <li v-for="card in cards" :key="card.id">
                    <card :card="card" />
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
import card from './card.vue'
export default {
    name: 'cards-list',
    data() {
        return {
            cards: [],

        }
    },
    components: {
        card
    },
}
</script>
