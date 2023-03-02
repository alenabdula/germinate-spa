<template>
    <div id="germinate">
        <!-- COMPONENTS -->
        <germinate-cursor v-if="!store.debug"></germinate-cursor>
        <germinate-spinner :isLoading="store.isLoading"></germinate-spinner>
        <germinate-hamburger></germinate-hamburger>
        <!-- NAVIGATION -->
        <div id="navigation" :class="navigationStyles">
            <nav>
                <router-link :to="{ name: 'home', params: {}}">Home</router-link>
                <router-link :to="{ name: 'example', params: {}}">Example</router-link>
            </nav>
        </div>
        <!-- VIEW -->
        <div id="view">
            <router-view v-slot="{ Component, route }">
                <transition :name="route.meta.transition || 'fade'">
                    <div v-if="!store.isLoading"><component :is="Component" /></div>
                </transition>
            </router-view>
        </div>
    </div>
</template>

<script>
    import { store } from './store.js'
    import Hamburger from './components/Hamburger.vue'
    export default {
        data() {
            return {
                store,
            }
        },
        components: {
            'germinate-hamburger': Hamburger,
        },
        computed: {
            fadeTransitionSpeed() {
                return store.fadeTransitionSpeed()
            },
            navigationStyles() {
                return {
                    'is-open': store.isNavigationOpen,
                    'is-closed': !store.isNavigationOpen,
                }
            },
        },
    }
</script>

<style lang="scss">
    @import '~GlobalSass';
    #germinate {

        #navigation {
            position: fixed;
            top: 0;
            left:0;
            width:100%;
            height:100%;
            background-color: $black;
            transition: all v-bind(fadeTransitionSpeed) ease;
            z-index: $z-middle;
            &.is-open {
                transform: translateY(0);
            }
            &.is-closed {
                transform: translateY(-100%);
            }
            a {
                display: inline-block;
                padding: $space;
                &.active {
                    border-bottom: 2px $brand-color-primary solid;
                }
                &:hover {
                    border-bottom: 2px $brand-color-primary solid;
                }
            }
        }
    }
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity v-bind(fadeTransitionSpeed) ease;

    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }
</style>