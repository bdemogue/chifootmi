<template>
    <div class="screen-final">
        <div> {{ resultText }}</div>
        <button @click="playAgain" class="btn-replay">Play Again</button>
        <button @click="goHome" class="btn-replay">Back Home</button>
    </div>
</template>
<script>
    export default {
        props: ['scoreDifference'],

        computed: {
            resultText() {
                if (this.scoreDifference === 0) {
                    return "It's a tie!"
                }

                if (this.scoreDifference > 0) {
                    return "You win";
                }

                return 'You lose';
            }
        },

        methods: {
            playAgain() {
                this.$emit('play-again', true)
            },

            goHome() {
                this.$emit('go-home', true);
            },
        }
    }
</script>