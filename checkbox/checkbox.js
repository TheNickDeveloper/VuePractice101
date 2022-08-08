console.log('You are using vue')

const app = {
    data(){
        return{
           displayLabels:false,
           withValue: null,
           myCheckboxes:[],
           myRadios:'first',
           mySelect:"",
           myMultiple:[],
           myDynamic:"",
           myOptions:[
               {text:"First",value:1},
               {text:"Second",value:2},
               {text:"Thrid",value:3},
               {text:"Fourth",value:4}
           ]
        }
    }
}

Vue.createApp(app).mount('#checkbox')