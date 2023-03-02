<template>
    <a id="germinate-hamburger" :class="style" @click.prevent="toggleNavigation()" href="">
        <svg viewBox="0 0 100 80" width="30" height="30">
            <rect class="svg-line svg-line-top" width="100" height="20"></rect>
            <rect class="svg-line svg-line-mid" y="30" width="100" height="20"></rect>
            <rect class="svg-line svg-line-bot" y="60" width="100" height="20"></rect>
        </svg>
    </a>
</template>

<script>
    import { store } from '.././store.js'
    export default {
        data() {
            return {
                store: store,
            }
        },
        props: {},
        computed: {
            fadeTransitionSpeed() {
                return store.fadeTransitionSpeed()
            },
            style() {
                return {
                    'has-navigation-open': store.isNavigationOpen,
                }
            }
        },
        methods: {
            toggleNavigation() {
                store.isNavigationOpen = !store.isNavigationOpen
            },
        }
    }
</script>

<style lang="scss">
    @import '~GlobalSass';
    a#germinate-hamburger {
        // TO-DO
        // you trippn
        * {
            transition: all 0.5s ease-in;
        }
        position: fixed;
        right: $space;
        top: $space;
        z-index: $z-top;
        svg {
            fill: $brand-color-primary;
        }
        .svg-line {}
        .svg-line-top {}
        .svg-line-mid {}
        .svg-line-bot {}
        // state change
        &:hover {}
        &.has-navigation-open {
            .svg-line {}
            .svg-line-top {
                opacity: 0;
            }
            .svg-line-mid {

            }
            .svg-line-bot {
                opacity: 0;
            }
        }
    }
</style>