<template>
    <div class="screen-final">
        <div class="-result"> {{ resultText }}</div>
        <div class="dflex">
            <button @click="playAgain" class="btn btn-replay">Play Again</button>
            <button @click="goHome" class="btn btn-replay">Back Home</button>
        </div>
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
                    return "You win!";
                }

                return 'You lose!';
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