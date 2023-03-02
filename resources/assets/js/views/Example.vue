<template>
    <div id="germinate-example">
        <div class="container">
            <div class="content">
                <h1>Example</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aliquid laborum, quos dolorum ea, doloribus, perferendis qui provident vel expedita enim veniam in repudiandae maxime explicabo reiciendis quasi magnam beatae.</p>
            </div>
        </div>
        <germinate-gallery
            title="Example View Gallery"
            description="Example Description"
            :images="images"
        ></germinate-gallery>
        <div class="container">
            <div class="content">
                <h2>Example</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nam tempora deleniti deserunt dolore corrupti molestiae debitis doloribus veniam tenetur sequi explicabo aspernatur ab nesciunt, veritatis praesentium, temporibus totam, harum.</p>
                <img src="img/img1.jpg" alt="">
                <p>Cumque harum quam eligendi, nostrum voluptatem voluptatibus perferendis. Expedita qui delectus accusantium deserunt, amet. Aliquam culpa molestias necessitatibus maiores reiciendis voluptatibus. Libero quaerat illo ut, iusto cupiditate, doloribus voluptas optio?</p>
                <p>Voluptates mollitia iure, libero. Minus earum nemo nobis ex, doloremque amet nulla iusto dolore debitis aperiam. Voluptate facere quidem nihil minima animi cum distinctio incidunt ipsam quasi, necessitatibus possimus iure.</p>
                <p>Ea at beatae, non aliquid culpa, in harum, accusamus labore ex temporibus itaque impedit numquam, tenetur quos. Voluptate voluptatem placeat itaque eaque architecto, quae perferendis, autem nulla, in dolorem, omnis.</p>
            </div>
            <img src="img/img1.jpg" alt="">
            <div class="content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aliquid laborum, quos dolorum ea, doloribus, perferendis qui provident vel expedita enim veniam in repudiandae maxime explicabo reiciendis quasi magnam beatae.</p>
            </div>
        </div>
    </div>
</template>

<script>
    const EXAMPLE_API_RESPONSE = [
        {alt: 'alt1',title: 'Title 1',src: 'img/gallery/img1.jpg',src_small: 'img/gallery/img1_240.jpg',},
        {alt: 'alt2',title: 'Title 2',src: 'img/gallery/img2.jpg',src_small: 'img/gallery/img2_240.jpg',},
        {alt: 'alt3',title: 'Title 3',src: 'img/gallery/img3.jpg',src_small: 'img/gallery/img3_240.jpg',},
        {alt: 'alt4',title: 'Title 4',src: 'img/gallery/img4.jpg',src_small: 'img/gallery/img4_240.jpg',},
        {alt: 'alt5',title: 'Title 5',src: 'img/gallery/img5.jpg',src_small: 'img/gallery/img5_240.jpg',},
        {alt: 'alt6',title: 'Title 6',src: 'img/gallery/img6.jpg',src_small: 'img/gallery/img6_240.jpg',},
        {alt: 'alt7',title: 'Title 7',src: 'img/gallery/img7.jpg',src_small: 'img/gallery/img7_240.jpg',},
        {alt: 'alt8',title: 'Title 8',src: 'img/gallery/img8.jpg',src_small: 'img/gallery/img8_240.jpg',},
        {alt: 'alt9',title: 'Title 9',src: 'img/gallery/img9.jpg',src_small: 'img/gallery/img9_240.jpg',},
    ]
    export default {
        data() {
            return {
                images: [],
            }
        },
        computed: {},
        mounted() {
            this.images = EXAMPLE_API_RESPONSE
        },
        beforeRouteEnter(to, from, next) {
            console.log('Example.vue---beforeRouteEnter: ' + to.name)
            next()
        },
    }
</script>

<style lang="scss">
    @import '~GlobalSass';
</style>