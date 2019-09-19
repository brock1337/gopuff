<template>
  <v-container>
    <v-card>
      <h2>{{ this.products.length }} Products</h2>
      <v-list shaped dense two-line>
        <ProductItem :prods="this.products" />
      </v-list>

      Original Total: ${{ this.originalCost }}
      <v-divider />
      Discount: ${{ this.totalDiscount }}

      <v-divider />
      <b>Final Total: ${{ this.originalCost - this.totalDiscount }}</b>
    </v-card>
  </v-container>
</template>

<script>
import ProductItem from "./ProductItem";
import httpService from "../../services/http-axios";

export default {
  components: { ProductItem },
  props: [],
  data: () => ({
    totalDiscount: 0,
    originalCost: 0,
    products: []
  }),
  methods: {
    getOrder() {
      httpService.getOrder().then(resp => {
        this.products = resp.cart.products;
        this.calculateOriginalTotal()
        this.calculateDiscount()
      });
    },
    calculateOriginalTotal () {
      // Calculate the total cost of products then subtract discounts
      // TODO: move to computed property?
      let cost = 0
      this.products.forEach(product => {
        cost += product.price
      })

      this.originalCost = cost
    },
    calculateDiscount () {
      let discount = 0
      this.products.forEach(product => {
        discount += product.discount
      })

      this.totalDiscount = discount
    },
    removeProductUpdateCost (item) {
      // update cart based on child component event removing item
    }
  },
  created() {
    this.getOrder();
  }
};
</script>
