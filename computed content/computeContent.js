console.log('You are using vue')

const app_methods = {
    data(){
        return{
           aNumber: 10
        }
    },
    methods:{
        rand(value){
            return Math.floor(Math.random() * this.aNumber * value);
        }
    },
}
Vue.createApp(app_methods).mount('#methods')

const app_computed = {
    data(){
        return{
           aNumber: 1000
        }
    },
    computed:{
        rand:{
            get(){
                return Math.floor(Math.random() * this.aNumber);
            },
            set(setNumber){
                this.aNumber = setNumber;
            }
        }
    },
}
Vue.createApp(app_computed).mount('#computed')

const app_watch = {
    data(){
        return{
            max: 5,
            myAlert: 'Affordable'
        }
    },
    watch:{
        max(myValue){
            (myValue > 100)? this.myAlert='Over budget':this.myAlert='Affordable'
        }
    }
}
Vue.createApp(app_watch).mount('#watch')