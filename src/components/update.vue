<template>
  <Nav />
  <div class="update-page text-center">
    <div class="container cont" v-for="item in dish" :key="item.id">
      <p class="res-name">My Resturant</p>
      <p class="wel">Change Dish Data</p>
      <input
        type="text"
        placeholder="DISH NAME"
        class="data-info"
        v-model="item.name"
      />
      <input
        type="text"
        placeholder="DISH IMAGE URL"
        class="data-info"
        v-model="item.img"
      />
      <input
        type="text"
        placeholder="DISH DESCRIPTION"
        class="data-info"
        v-model="item.desc"
      />
      <input
        type="text"
        placeholder="DISH PRICE"
        class="data-info"
        v-model="item.price"
      />
      <button type="button" v-on:click="updateDish">UPDATE</button>
    </div>
  </div>
</template>

<script>
import Nav from "./nav.vue";
import axios from "axios";
export default {
  name: "Update",
  data() {
    return {
      dish: [
        {
          section: "",
          name: "",
          img: "",
          desc: "",
          price: "",
        },
      ],
    };
  },
  components: {
    Nav,
  },
  methods: {
    async updateDish() {
      console.log(this.dish[0].name);
      let result = await axios.put(`http://localhost:3000/${this.dish[0].section}/${this.dish[0].id}`, {
        section: this.dish[0].section,
        name: this.dish[0].name,
        img: this.dish[0].img,
        desc: this.dish[0].desc,
        price: this.dish[0].price,
      });
      if (result.status === 200) {
        this.$router.push({ name: "Home" });
      }
    },
  },
  async mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "signUp" });
    }
    console.log(this.$route.params.id);
    console.log(this.$route.params.section);
    const result = await axios.get(
      `http://localhost:3000/${this.$route.params.section}?id=${this.$route.params.id}`
    );
    if (result.status === 200 && result.data.length > 0) {
      this.dish = result.data;
    }
  },
};
</script>

<style lang="scss">
.update-page {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
