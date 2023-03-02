import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { store } from './store.js'
//
//  Application
//
import App from './App.vue'
//
//  Application Views
//
import Home from './views/Home.vue'
import Example from './views/Example.vue'
import NotFound from './views/NotFound.vue'
//
//  Global Components
//
import Gallery from './components/Gallery.vue'
import Spinner from './components/Spinner.vue'
import Cursor from './components/Cursor.vue'
//
//  Global Mixins
//
import Utilities from './mixins/utilities.js';
//
//  Events Bus
//
import mitt from 'mitt'
const emitter = mitt();
//
//  Application Routes
//
const routes = [
    // Home
    {
        path: '/',
        name: 'home',
        component: Home,
        props: {},
        meta: {
            transition: '',
        },
        beforeEnter: (to, from) => {
          console.log('app.js---beforeEnter:' + to.name)
        },
    },
    // Example
    {
        path: '/example',
        name: 'example',
        component: Example,
        props: {},
        meta: {
            transition: '',
        },
        beforeEnter: (to, from) => {
          console.log('app.js---beforeEnter:' + to.name)
        },
    },
    // 404 Not Found
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound,
        props: {},
        meta: {
            transition: '',
        },
        beforeEnter: (to, from) => {
          console.log('app.js---beforeEnter:' + to.name)
        },
    },
]
//
//  Router Instance
//
const router = createRouter({
    history: createWebHashHistory(),
    routes,
    linkActiveClass: "active",
    linkExactActiveClass: "exact-active",
})

router.beforeEach((to, from) => {
    console.log('app.js---beforeEach')
    store.isLoading = true
        //
        //  Delay loading of route
        //
    setTimeout(() => { store.isLoading = false }, store.timeout + 300)
    // ...
    // return false
    return true
})

router.afterEach((to, from, failure) => {
    if (!failure) {
        console.log('app.js---afterEach')
        //
        //  Close Navigation
        //
        store.isNavigationOpen = false
        //
        //  Delay loading of route
        //
        setTimeout(() => { store.isLoading = false }, store.timeout + 300)
    }
})
//
//  Application Instance
//
const app = createApp({ data: {store} })
//
//  Application Configurations
//
app.config.globalProperties.Events = emitter
app.mixin({ mixins: [Utilities]})
app.component('germinate-app', App)
app.component('germinate-gallery', Gallery)
app.component('germinate-cursor', Cursor)
app.component('germinate-spinner', Spinner)
app.use(router)
app.mount('#app');