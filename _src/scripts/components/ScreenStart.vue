<template>
    <div>
        <transition name="fade">
            <div v-show="home" class="screen-start">
                <div class="legend">
                   <player-card
                           v-for="(player, index) in players"
                           :key="index"
                           :player="player"
                   />
                </div>
                <button @click="play" class="btn btn-play"><i>&nbsp;</i>Play</button>
            </div>
        </transition>
        <transition name="fade">
            <screen-game @game-end="goToEnd" v-if="playing" :players="players"></screen-game>
        </transition>
        <transition name="fade">
            <screen-final @play-again="play" @go-home="reset" v-if="end" :score-difference="scoreDifference"></screen-final>
        </transition>


    </div>

</template>
<script>
    import ScreenGame from './ScreenGame';
    import ScreenFinal from './ScreenFinal';
    import PlayerCard from './PlayerCard';

    export default {

        components: {
            ScreenGame,
            ScreenFinal,
            PlayerCard,
        },

        data() {
            return {
                home: true,
                playing: false,
                end: false,
                scoreDifference: null,

                players: [
                    {
                        id: 1,
                        firstName: 'Zinédine',
                        lastName: 'Zidane',
                        image: "assets/styles/images/zinedine-zidane.jpg",
                        label: "This is rock",
                        type: 'rock'
                    },
                    {
                        id: 2,
                        firstName: 'Horacio',
                        lastName: 'Elizondo',
                        image: "assets/styles/images/horacio-elizondo.jpg",
                        label: "This is paper",
                        type: 'paper',
                    },
                    {
                        id: 3,
                        firstName: 'Marco',
                        lastName: 'Materazzi',
                        image: "assets/styles/images/marco-materazzi.jpg",
                        label: "This is scissors",
                        type: 'scissors'
                    },
                ]
            }
        },
        methods: {
            reset() {
                this.playing = false;
                this.end = false;
                this.home = true;
            },

            play() {
                this.playing = true;
                this.end = false;
                this.home = false;
            },

            goToEnd(scoreDifference) {
                this.scoreDifference = scoreDifference;

                this.playing = false;
                this.end = true;
            }
        }
    }
</script>