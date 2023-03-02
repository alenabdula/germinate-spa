<template>
    <div id="germinate-spinner" v-show="isLoading || show">
        <div class="spinner-rotate spinner-rotate--1">
            <div class="spinner-rotate spinner-rotate--2"></div>
            <div class="spinner-rotate spinner-rotate--3"></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: false,
        }
    },
    props: {
        isLoading: {
            type: Boolean,
            default: false,
        },
    },
    mounted() {
        this.Events.on('spinner', (response) => {
            this.show = response
        })
    }
}
</script>

<style lang="scss">
    @import '~GlobalSass';
    #germinate-spinner {
        text-align: center;
        position: absolute;
        top: 50vh;
        left: 50%;
        z-index: $z-top;
        .spinner-rotate {
            width:25px;
            height:25px;
            background-color: $grey-darkest;
            border-radius: 100%;
            opacity: 0.8;
        }
        .spinner-rotate--1 {
            animation: spinerAnimation 0.4s 0s infinite cubic-bezier(.7,-.13,.22,.86);
        }
        .spinner-rotate--2 {
            background-color: $grey-dark;
            position: absolute;
            top: 0;
            left: -50px;
        }
        .spinner-rotate--3 {
            background-color: $grey-dark;
            position: absolute;
            top: 0;
            left: 50px;
        }
    }
    @keyframes spinerAnimation {
        0% { transform: rotate(0deg); }
        50% { transform: rotate(180deg);}
        100% { transform: rotate(360deg);}
    }
</style>