console.log('You are using vue')

const app = {
    data(){
        return{
            displayLabel:true,
            max: 100,
            products:[
                {
                    "id":"1",
                    "name":"Apple",
                    "description":"this is one of most popular fruit of all time",
                    "price":"100",
                    "image_title":"fruit_apple",
                    "image":"https://5.imimg.com/data5/CE/GT/MY-35754189/fresh-apple-500x500.jpg"
                },
                {
                    "id":"2",
                    "name":"Orange",
                    "description":"this is an fruit with tons of vC",
                    "price":"60",
                    "image_title":"fruit_orange",
                    "image":"https://golden-fruits.com/wp-content/uploads/2018/02/orange-xrysikos-500x500.jpg?x96950"
                }
                ,
                {
                    "id":"3",
                    "name":"Banana",
                    "description":"this is an fruit that monkey like the most",
                    "price":"10",
                    "image_title":"fruit_orange",
                    "image":"https://freepngimg.com/thumb/banana/35116-6-banana-bunch.png"
                }
            ]
        }
    }
}

Vue.createApp(app).mount('#app')




