<template>
  <!-- Products Group -->
  <v-list-item-group>
    <!-- Row Divider -->
    <v-divider />
    <v-list-item
      v-for="product in prods"
      :key="product.id"
    >

      <!-- Product Thumbnail -->
      <v-list-item-icon>

      </v-list-item-icon>

      <!-- Product Details -->
      <v-list-item-content>
        ${{ product.price }}
        <!-- <v-list-item-title>Original Price</v-list-item-title> -->
      </v-list-item-content>

      <!-- Remove Product -->
      <v-list-item-action @click="removeItemFromCart(product)">
        <v-icon color="red">mdi-close-circle</v-icon>
      </v-list-item-action>

    </v-list-item>

    <!-- Row Divider -->
    <v-divider />
  </v-list-item-group>
</template>

<script>
export default {
  props: ['prods'],
  data: () => ({}),
  methods: {
    removeItemFromCart: (item) => {
      console.log('Remove Product from cart --> ', item)
      // TODO: this will need to inform the list that the item was removed
    }
  }
};
</script>
