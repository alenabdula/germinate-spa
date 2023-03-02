export default {
    data() {
        return {
            dimensions: {
                window: {
                    width: {
                        type: Number,
                        default: 0,
                    },
                    height: {
                        type: Number,
                        default: 0,     
                    },
                },
                document: {
                    width: {
                        type: Number,
                        default: 0,
                    },
                    height: {
                        type: Number,
                        default: 0,     
                    },
                },
            },
        }
    },
    emits: ['dimensions'],
    methods: {
        Utilities_getDimensions() {
            return new Promise((resolve, reject) => {
                let w = window,
                    d = document,
                    e = d.documentElement,
                    b = d.getElementsByTagName('body')[0],
                    dx = w.innerWidth || e.clientWidth,
                    dy = w.innerHeight|| e.clientHeight,
                    wx = b.clientWidth,
                    wy = b.clientHeight;
                let response = {
                    window: { width: wx, height: wy },
                    document: { width: dx, height: dy }
                };
                resolve(response);
            } )
        },
        Utilities_setDimensions() {
            this.Utilities_getDimensions().then((response) => {
                this.Events.emit('dimensions', response)
            });
        },
        Utilities_resized(a, b) {
            window.onresize = () => {
                window.clearTimeout(b);
                b = window.setTimeout(a, 500);
            };
            return a;
        },
    },
    mounted() {
        this.Utilities_resized(() => { this.Utilities_setDimensions() })
        this.Events.on('dimensions', (response) => { this.dimensions = response; })


        // DO-TO
        // wait for page to load, otherwise
        // window height is incorrect

        // https://developer.mozilla.org/en-US/docs/Web/API/Window#load_unload_events
        // https://developer.mozilla.org/en-US/docs/Web/API/Window/visualViewport
        // https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
        // window.addEventListener('DOMContentLoaded', (event) => { console.log(event) });

        // https://developer.mozilla.org/en-US/docs/Web/API/Document#load_unload_events
        // https://developer.mozilla.org/en-US/docs/Web/API/Document/readyState
        // document.onreadystatechange = (event) => {
        //     if (document.readyState === 'loading') console.log('loading', event)
        //     if (document.readyState === 'interactive') console.log('interactive', event)
        //     if (document.readyState === 'complete') console.log('complete', event)
        // }

        setTimeout(() => { this.Utilities_setDimensions() }, this.timeout * 2)
    },
}