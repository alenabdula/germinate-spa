//
//  State Management
//
import { reactive } from 'vue'

export const store = reactive({
    debug: true,               // 
    timeout: 500,               // route transition timeout for animations
    isLoading: true,            // determines if current route is being loaded
    isNavigationOpen: true,     // navigation status
    //
    //  TO-DO
    //  
    fadeTransitionSpeed() {
        return this.timeout / 1000 + 's'
    }
})