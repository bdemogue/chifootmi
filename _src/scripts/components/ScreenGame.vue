<template>
    <div class="screen-game">
        <p>Match in 3 sets</p>
        <div >
            <div class="">Choice</div>
            <div class="-score"><span>You</span><span>Computer</span></div>
            <div class="-list-card">
                <player-card
                        v-for="(player, index) in players"
                        @click.native="selectPlayer(player)"
                        :key="index"
                        :select="true"
                        :player="player" format="horizontal"
                />

                <div> <!-- choix de l'ordinateur --> </div>
            </div>
        </div>
    </div>
</template>
<script>
    import PlayerCard from './PlayerCard.vue'

    const randomArrayElement = myArray => {
        return myArray[Math.floor(Math.random()*myArray.length)];
    }

    export default {
        props: ['players'],

        components: {
            PlayerCard,
        },

        data() {
            return {
                rounds: 3,
                currentRound: 1,
                playerScore: 0,
                computerScore: 0,
                playerChoice: {},
                computerChoice: {},
            }
        },

        methods: {
            selectPlayer(player) {
                this.playerChoice = player;
                this.computerChoice = randomArrayElement(this.players);

                this.computeRound();
            },

            computeRound() {
                switch (this.computerChoice.type) {
                    case this.playerChoice.type:
                        this.playerScore += 1;
                        this.computerScore += 1;
                        break;

                    case "rock":
                        this.playerChoice.type === "paper" ? this.playerScore += 1 : this.computerScore += 1;
                        break;
                    case "scissors":
                        this.playerChoice.type === "paper" ? this.computerScore += 1 : this.playerScore += 1;
                        break;
                    case "paper":
                        this.playerChoice.type === "rock" ? this.computerScore += 1 : this.playerScore += 1;
                        break;
                }

                if (this.currentRound + 1 > this.rounds) {
                    return this.$emit('game-end', this.playerScore - this.computerScore);
                }

                this.currentRound += 1;
            }
        }

    }
</script>
