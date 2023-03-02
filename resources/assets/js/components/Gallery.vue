<template>
    <!-- GALLERY -->
    <div id="germinate-gallery" :class="galleryStyles">
        <!-- GALLERY VIEW -->
        <div class="germinate-gallery-view" :class="viewStyle">
            <transition name="fade" appear>
                <figure v-if="viewing">
                    <a @click.prevent="close()">
                        <img :src="image.src" :alt="image.alt" :title="image.title">
                    </a>
                    <figcaption v-text="image.title"></figcaption>
                </figure>
            </transition>
        </div>
        <!-- \GALLERY VIEW -->
        <!-- GALLERY IMAGES -->
        <div class="germinate-gallery-wrapper">
            <div class="germinate-gallery-images">
                <a v-for="(image, index) in images" :key="image" @click.prevent="show(image)">
                    <img :src="image.src_small" :alt="image.alt" :title="image.title">
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                image: {},
                viewing: false,
                preloading: false,
                delay: 1000,
            }
        },
        watch: {
            preloading(new_val, old_val) {
                console.log(new_val, old_val)
            }
        },
        props: {
            images: {
                type: Array,
                required: true,
                default: [],
            },
            title: {
                type: String,
                required: true,
                default: 'Gallery Title',
            },
            description: {
                type: String,
                required: true,
                default: 'Gallery Description',
            }
        },
        computed: {
            transitionSpeed() {
                return this.delay / 1000 + 's'
            },
            galleryStyles() {
                return {
                    'is-preloading': this.preloading,
                    'has-view-open': this.viewing,
                    'has-view-closed': !this.viewing,
                }
            },
            viewStyle() {
                return {
                    'is-closed': !this.viewing,
                    'is-open': this.viewing,
                }
            }
        },
        methods: {
            show(image) {
                if (this.image === image) return
                this.preloading = true
                setTimeout(() => {
                    this.preloading = false
                    this.image = image
                    this.viewing = true
                }, this.delay)
            },
            close() {
                this.viewing = false
                setTimeout(() => {
                    this.image = {}
                }, this.delay)
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '~GlobalSass';
    #germinate-gallery {
        position: relative;
        background-color: $grey-lightest;
        padding: $space-xlarge;
        // gallery
        &.is-preloading {
            .germinate-gallery-images a {
                animation-name: wigglewiggle;
                animation-delay: 0s;
                animation-duration: v-bind(transitionSpeed);
                animation-iteration-count: 1;
            }
        }
        &.has-view-open {}
        &.has-view-closed {}
        .gallery-heading {
            // align-self: flex-start;
        }
        //
        //  Images Wrapper
        //
        .germinate-gallery-wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        //
        //  Images
        //
        .germinate-gallery-images {
            display: grid;
            grid-template-columns: repeat(3, 33%);
            grid-template-rows: 1fr 1fr 1fr;
            column-gap: $space-small;
            row-gap: $space-small;
            a {
                display: inline-block;
                &:hover {
                    animation-name: wigglewiggle;
                    animation-delay: 0s;
                    animation-duration: v-bind(transitionSpeed);
                }
            }
        }
        //
        //  View
        //
        .germinate-gallery-view {
            transform: translateY(-100%);
            position: fixed;
            top: 0;
            left: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100vw;
            height: 100vh;
            background-color: $black;
            // opacity: 0;
            transition: all v-bind(transitionSpeed) ease-in v-bind(transitionSpeed);
            &.is-closed {}
            &.is-open {
                transition: all v-bind(transitionSpeed) ease-out;
                // opacity: 1;
                transform: translateY(0);
            }
        }
    }
    //
    //  Transition Fade
    //
    .fade-enter-active {
        transition: opacity v-bind(transitionSpeed) ease-out v-bind(transitionSpeed);
    }
    .fade-leave-active {
        transition: opacity v-bind(transitionSpeed) ease-in;
    }
    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }
    //
    //  Animations
    //
    @keyframes wigglewiggle {
        0% {
            transform: translateX(0);
        }
        6.5% {
            transform: translateX(-6px) rotateY(-9deg);
        }
        18.5% {
            transform: translateX(5px) rotateY(7deg);
            opacity: 0.7;
        }
        31.5% {
            transform: translateX(-3px) rotateY(-5deg) scale(0.9);
        }
        43.5% {
            transform: translateX(2px) rotateY(3deg);
        }
        50% {
            transform: translateX(0);
        }
    }
</style>