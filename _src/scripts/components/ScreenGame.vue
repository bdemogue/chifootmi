<template>
    <div class="screen-game">
        <p>Match in {{ rounds }} sets</p>
        <div >

            <div class="-score">
                <div class="-gamer"><span>You</span> {{ playerScore }} </div>
                <div class="-gamer">{{ computerScore }} <span>Computer</span></div>
            </div>
            <div v-for="round in rounds"
                 v-if="canShowRound(round)"
                 :key="round"
                 :class="['-list-card', roundClass(round)]"
            >

                <player-card
                        v-for="player in players"
                        @click.native="selectPlayer(player, round)"
                        :class="isSelected(player, round)"
                        :key="player.id"
                        :select="true"
                        :player="player" format="horizontal"
                >
                    <svg slot="icon" :class="`icon icon-${player.type}`"><use :xlink:href="`#icon-${player.type}`"></use></svg>
                </player-card>

                <player-card
                        v-if="computerChoices[round - 1]"
                        class="-selected -computer"
                        :select="false"
                        :player="computerChoices[round - 1]" format="horizontal"
                >
                    <svg slot="icon" :class="`icon icon-${computerChoices[round - 1].type}`"><use :xlink:href="`#icon-${computerChoices[round - 1].type}`"></use></svg>
                </player-card>

            </div>
            <div v-show="currentRound <= rounds" class="-label-choice">Choose your weapon</div>
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
                playerChoices: [],
                computerChoices: [],
            }
        },

        methods: {
            selectPlayer(player, round) {
                if (!this.canInteract(round)) {
                    return false;
                }

                this.playerChoices.push(player);
                this.computerChoices.push(randomArrayElement(this.players));

                this.computeRound(round - 1);
            },

            computeRound(round) {
                switch (this.computerChoices[round].type) {
                    case this.playerChoices[round].type:
                        this.playerScore += 1;
                        this.computerScore += 1;
                        break;

                    case "rock":
                        this.playerChoices[round].type === "paper" ? this.playerScore += 1 : this.computerScore += 1;
                        break;
                    case "scissors":
                        this.playerChoices[round].type === "paper" ? this.computerScore += 1 : this.playerScore += 1;
                        break;
                    case "paper":
                        this.playerChoices[round].type === "rock" ? this.computerScore += 1 : this.playerScore += 1;
                        break;
                }

                if (this.currentRound + 1 > this.rounds) {

                    setTimeout(() => {
                        return this.$emit('game-end', this.playerScore - this.computerScore);
                    }, 2000)
                }

                this.currentRound += 1;
            },

            canShowRound(round) {
                return this.currentRound >= round;
            },

            canInteract(round) {
                return this.currentRound === round;
            },

            roundClass(round) {
                if (this.currentRound > round) {
                    return '-played'
                }
            },

            isSelected(player, round) {
                if (!this.playerChoices[round - 1]) {
                    return;
                }

                if (player.id === this.playerChoices[round - 1].id) {
                    return '-selected';
                }
            },

            onScreenPlayers() {
                if (!this.playerChoices[this.currentRound]) {
                    return this.players;
                }

                return this.players.filter(player => player.id === this.playerChoices[this.currentRound])
            }
        }

    }
</script>
