console.log('You are using vue')

const app = {
  data() {
    return {
      products: [
        {
          id: 1,
          name: 'Product 1',
          description: 'This is an incredibly awesome product',
          quantity: 0,
          price: 10,
          subTotal: 0,
        },
        {
          id: 2,
          name: 'Product 2',
          description: 'This is an incredibly awesome product',
          quantity: 0,
          price: 20,
          subTotal: 0,
        },
        {
          id: 3,
          name: 'Product 3',
          description: 'This is an incredibly awesome product',
          quantity: 0,
          price: 30,
          subTotal: 0,
        },
      ],
      showCart: false
    };
  },
  // able to add calculation logic inside the computedm, and return the value 
  computed: {
    cart() {
      return this.products.filter(product => product.quantity > 0);
    },
    totalQuantity() {
      return this.products.reduce(
        (total, product) => total + product.quantity,
        0
      );
    },
    totalPrice() {
      return this.products.reduce(
        (total, product) => total + product.subTotal,
        0
      );
    }
  },
  methods: {
    updateCart(product, updateType) {
      for (let i = 0; i < this.products.length; i++) {
        if (this.products[i].id === product.id) {
          if (updateType === 'subtract') {
            if (this.products[i].quantity !== 0) {
              this.products[i].quantity--;
              this.products[i].subTotal -= product.price;
            }
          }
          else {
            this.products[i].quantity++;
            this.products[i].subTotal += product.price;
          }
          break;
        }
      }
    }
  }
}

Vue.createApp(app).mount('#app')