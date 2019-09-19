<template>
  <v-container>
    <v-layout text-center wrap>
      <ProductList></ProductList>
    </v-layout>
  </v-container>
</template>

<script>
import ProductList from "../components/ProductList/ProductList";
// import httpService from "../services/http-axios";

export default {
  components: {
    ProductList
  },
  data: () => ({}),
  created() {
    // Move api call here?
  }
};
</script>
