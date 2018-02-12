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
                <button @click="play" class="btn-play"><i>&nbsp;</i>Play</button>
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
                        firstName: 'Zinédine',
                        lastName: 'Zidane',
                        image: "http://www.fanafoot.com/wp-content/uploads/2014/04/zinedine-zidane.jpg",
                        label: "This is rock",
                        type: 'rock'
                    },
                    {
                        firstName: 'Marco',
                        lastName: 'Materazzi',
                        image: "https://static.foba1.com/bilder/spieler/gross/1343.jpg",
                        label: "This is scissors",
                        type: 'scissors'
                    },
                    {
                        firstName: 'Horacio',
                        lastName: 'Elizondo',
                        image: "http://img.spokeo.com/public/900-600/horacio_elizondo_2006_07_01.jpg",
                        label: "This is paper",
                        type: 'paper',
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