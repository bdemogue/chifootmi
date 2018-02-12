<template>
    <figure :class="cardClass">
        <img :src="player.image" alt="Zinedine Zidane">
        <figcaption>
            <h2>{{ player.firstName}} <span>{{ player.lastName}}</span></h2>
            <p>{{ player.label}}</p>
        </figcaption>
        <slot name="icon"></slot>
    </figure>
</template>

<script>
    export default {
        props: {
            format: {
                type: String,
                required: false,
                default: 'vertical',
            },

            player: {
                type: Object,
                required: true,
            },

        },

        data() {
            return {
            }
        },

        computed: {
            cardClass() {
                return `-item -${this.format}`
            }
        },

    }
</script>
