<template>
    <section class="join-form main-layout full">
        <div class="join-form__inner flex flex-column justify-center items-center">
            <form>
                <h2>Get early access today</h2>
                <p>
                    It only takes a minute to
                    sign up and our free starter tier is extremely generous.
                    If you have any questions, our support team would be happy to help you.
                </p>
                <div class="form-input">
                    <input type="email" placeholder="email@example.com">
                    <action-btn>get started for free</action-btn>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
import actionBtn from './action-btn.vue'
export default {
    name: 'join-form',
    components: {
        actionBtn
    },
}
</script>
