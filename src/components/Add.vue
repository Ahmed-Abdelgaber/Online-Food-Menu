<template>
  <Nav />
  <div class="add-page text-center">
    <div class="container cont">
      <p class="res-name">My Resturant</p>
      <p class="wel">Enter Dish Data</p>
      <input
        type="text"
        v-model="dish.section"
        placeholder="DISH SECTION"
        class="data-info"
      />
      <input
        type="text"
        v-model="dish.name"
        placeholder="DISH NAME"
        class="data-info"
      />
      <input
        type="img"
        v-model="dish.img"
        placeholder="DISH IMAGE URL"
        class="data-info"
      />
      <input
        type="desc"
        v-model="dish.desc"
        placeholder="DISH DESCRIPTION"
        class="data-info"
      />
      <input
        type="price"
        v-model="dish.price"
        placeholder="DISH PRICE"
        class="data-info"
      />
      <button type="button" v-on:click="addDish">ADD</button>
    </div>
  </div>
</template>

<script>
import Nav from "./nav.vue";
import axios from "axios";
export default {
  name: "Add",
  data() {
    return {
      dish: {
        section: "",
        name: "",
        img: "",
        desc: "",
        price: "",
      },
    };
  },
  components: {
    Nav,
  },
  methods: {
    async addDish() {
      if (
        !this.dish.name ||
        !this.dish.img ||
        !this.dish.desc ||
        !this.dish.price ||
        !this.dish.section
      ) {
        console.log(`KOSM HAYATY`);
      } else {
        const myDish = await axios.post(
          `http://localhost:3000/${this.dish.section}`,
          {
            section: this.dish.section,
            name: this.dish.name,
            img: this.dish.img,
            desc: this.dish.desc,
            price: this.dish.price,
          }
        );
        if (myDish.status === 201) {
          this.$router.push({ name: "Home" });
        }
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "signUp" });
    }
  },
};
</script>
<style lang="scss">
.add-page {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
