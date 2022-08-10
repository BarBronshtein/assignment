<template>
    <section class="testimonial-list main-layout full">
        <div class="testimonial-list__inner">
            <ul class="testimonial-wrapper clean-list flex justify-center">
                <li v-for="testimonial in testimonials" :key="testimonial.id">
                    <testimonial-preview :testimonial="testimonial" />
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
import testimonialPreview from './testimonial-preview.vue'
export default {
    data() {
        return {
            testimonials: []
        }
    },
    components: {
        testimonialPreview
    },
}
</script>

<style>
</style>