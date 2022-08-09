# Vue.js - Computed content
 
>The computed() function expects to be passed a getter function, and the returned value is a computed ref. - Vue.js, 2022

The computed function can be treated as class property with get & set function. Benefit of using computed is that the business logic can be landed in JS file, and make HTML file looks simpler.


```js
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
    }
}
```
<p align = "center">code - js file_with business logic</p>


```html
<div id="computed">
    <div>
        Ramdom : {{ (this.rand=10000) && (rand) }}
    </div>
</div>
```
<p align = "center">code - HTML file_use get set from computed value</p>

<br/>

>Instead of a computed property, we can define the same function as a method. For the end result, the two approaches are indeed exactly the same. However, the difference is that computed properties are cached based on their reactive dependencies. A computed property will only re-evaluate when some of its reactive dependencies have changed. - Vue.js, 2022

As mentioned above, also support to call method directly from js file and display result in HTML file.

```js
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
```
<p align = "center">code - js file_methods</p>

```html
<div id="methods">
    <div v-for="n in 10">
        {{n}}: {{rand(n)}}
    </div>
</div>
```
<p align = "center">code - HTML file with method from js</p>

<br/>

>Computed properties allow us to declaratively compute derived values. However, there are cases where we need to perform "side effects" in reaction to state changes. With the Options API, we can use the watch option to trigger a function whenever a reactive property changes. - Vue.js, 2022

Can use watch function to monitor state of change, and react correspondingly from your js code.

```js
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
```
<p align = "center">code - js file_methods</p>

```html
<div id="watch">
    <label for="max-price" class="form-label">Max Price</label>
    <input v-model.lazy="max" type="number" class="form-control" id="max-price" aria-describedby="maxHelp">
    <div id="maxHelp" class="form-test">set the maximum price to {{max}}</div>
    {{myAlert}}
</div>
```
<p align = "center">code - HTML file with method from js</p>