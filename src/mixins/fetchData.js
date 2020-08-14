import {api} from '@/services/services.js';

export default {
    data() {
        return {
            api: []
        }
    },
    methods: {
        getData(){
            return api.get()
            .then(r => {                
                this.api = r.data;
            })
        }
    },
}