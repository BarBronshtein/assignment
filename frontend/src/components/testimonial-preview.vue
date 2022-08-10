<template>
    <div class="testimonial flex flex-column">
        <!-- <p>{{testimonail description}}</p> -->
        <div class="testimonial-user-profile flex justify-between">
            <!-- <img :src="testimonial img"> -->
            <div class="testimonial-user-profile__details">
                <!-- <h4>{{testimonial name}}</h4> -->
                <!-- <p>{{testimonial job/role}}</p> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: '',
    props: {
        testimonial: Object,
    }
}
</script>

<style>
</style>