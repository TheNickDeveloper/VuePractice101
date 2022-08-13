# Vue.js - Shopping cart

This is shopping cart practice powered by Vue.js, and the application was styled scss. The example code was referring by the youtube link below, please check out the link below for more details:
>youtube link: https://www.youtube.com/watch?v=Ul82ILpfBBk

<br/>

## Shopping cart function overview

The web page cab seperate into two section, the shopping cart and displayed items. Whole picture can refer figure from below:

![image](https://github.com/TheNickDeveloper/VuePractice101/blob/main/shopping%20cart/shoppingCart.png)

<br/>

### Shopping cart
* Able to display total number of items you have added in the shopping cart above the cart image.
* Able to show total quanity and total price of added items in the cart.
* Able to show the item name, quanity of added item, and sub total of added items.

### Displayed item
* Displayed avaiable items on UI, with pridcut name, image, and its product description.
* Have '+' button and '-' button for add/delete the quanity of each product.
* Able to interate with the shopping cart on the top, including quanity, sub total, ans total price of items.  

<br/>

## Model code
Following are the html example for shopping cart and pridction sections.
<br/>

### Shopping Cart
```html
<nav class="nav">
    <h2 class="nav__header">Products</h2>
    <div class="nav__cart">
        <button @click="showCart = !showCart">
            CART
        </button>
        <span class="total-quantity">{{ totalQuantity }}</span>
        <div v-if="showCart" class="cart-dropdown">
            <ul class="cart-dropdown__list">
                <li>Total Quantity:{{ totalQuantity }}</li>
                <li>Total Price:${{ totalPrice }}</li>
                <li>----------------------</li>
                <!-- get the product which quanity is no zero from produts -->
                <li
                    
                    v-for="product in cart"
                    :key="product.id"
                >
                    {{ product.name }} 
                    ({{ product.quantity }};${{product.subTotal}})
                </li>
            </ul>
        </div>
    </div>
</nav>
```
<p align = "center">html code - shopping cart</p>

<br>

### Product

```html
<section class="products">
    <!-- Iterate all product in array poducts -->
    <div v-for="product in products" :key="product.id" class="product">
        <h3 class="product__header">{{ product.name }}</h3>
        <!-- v-bind_image -->
        <img src="https://via.placeholder.com/200" :alt="product.name" class="product__image">
        <p class="product__description">
            {{ product.description }}
        </p>
        <div class="cart">
            <!-- vue event -->
            <button @click="updateCart(product, 'subtract')" class="cart__button">
                -
            </button>
            <span class="cart__quantity">
                {{ product.quantity }}
            </span>
            <button @click="updateCart(product, 'add')" class="cart__button">
                +
            </button>
        </div>
    </div>
</section>
```
<p align = "center">html code - displayed products</p>