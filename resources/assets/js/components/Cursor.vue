<template>
    <span id="germinate-cursor" :style="style"></span>
</template>

<script>
    export default {
        data() {
            return {
                top: {
                    type: String,
                    default: '0px',
                },
                left: {
                    type: String,
                    default: '0px',
                }
            }
        },
        computed: {
            style() {
                return {
                    top: this.top + 'px',
                    left: this.left + 'px',
                }
            }
        },
        mounted() {
            addEventListener("mousemove", (event) => {
                this.top = event.clientY
                this.left = event.clientX
            })
        }
    }
</script>

<style lang="scss">
    @import '~GlobalSass';
    #germinate-cursor {
        position: fixed;
        width: 50px;
        height: 50px;
        border: 1px solid $brand-color-primary;
        border-radius: 50%;
        pointer-events: none;
        transform: translate(-50%, -50%);
        transition: .1s;
        z-index: $z-top + 1;
    }
</style>