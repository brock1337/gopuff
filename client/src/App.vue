<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
    >
      <v-toolbar-title class="headline text-uppercase">
        <span>goPuff Challenge</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <Cart />
    </v-content>
  </v-app>
</template>

<script>
import Cart from "./views/Cart";

export default {
  name: "App",
  components: {
    // HelloWorld,
    Cart
  },
  data: () => ({
    //
  })
};
</script>
