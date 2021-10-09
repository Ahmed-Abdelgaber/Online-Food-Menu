<template>
  <Nav />
  <div class="pasta d-flex justify-content-center">
    <div class="row container">
      <h3 class="text-center">Pasta Section</h3>
      <div
        class="card col-4 pasta-c"
        style="width: 18rem"
        v-for="item in pasta"
        :key="item.id"
      >
        <img :src="item.img" class="card-img-top" alt="..." />
        <div class="card-body">
          <h4>{{ item.name }}</h4>
          <p class="card-text">
            {{ item.desc }}
          </p>
          <h4>{{ item.price }}</h4>
          <div class="row actions text-center d-flex justify-content-center">
            <router-link
              :to="`/update/${item.section}/${item.id}`"
              class="col-5"
              >Update Dish</router-link
            >
            <a @click="deletDish(item.id, item.section)" class="col-5"
              >Delete Dish</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="pizza d-flex justify-content-center">
    <div class="row container">
      <h3 class="text-center">Pizza Section</h3>
      <div
        class="card col-4 pasta-c"
        style="width: 18rem"
        v-for="pizz in pizza"
        :key="pizz.id"
      >
        <img :src="pizz.img" class="card-img-top" alt="..." />
        <div class="card-body">
          <h4>{{ pizz.name }}</h4>
          <p class="card-text">
            {{ pizz.desc }}
          </p>
          <h4>{{ pizz.price }}</h4>
          <div class="row actions text-center d-flex justify-content-center">
            <router-link
              :to="`/update/${pizz.section}/${pizz.id}`"
              class="col-5"
              >Update Dish</router-link
            >
            <a @click="deletDish(pizz.id, pizz.section)" class="col-5"
              >Delete Dish</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="dessert d-flex justify-content-center">
    <div class="row container">
      <h3 class="text-center">Dessert Section</h3>
      <div
        class="card col-4 pasta-c"
        style="width: 18rem"
        v-for="dess in dessert"
        :key="dess.id"
      >
        <img :src="dess.img" class="card-img-top" alt="..." />
        <div class="card-body">
          <h4>{{ dess.name }}</h4>
          <p class="card-text">
            {{ dess.desc }}
          </p>
          <h4>{{ dess.price }}</h4>
          <div class="row actions text-center d-flex justify-content-center">
            <router-link
              :to="`/update/${dess.section}/${dess.id}`"
              class="col-5"
              >Update Dish</router-link
            >
            <a @click="deletDish(dess.id, dess.section)" class="col-5"
              >Delete Dish</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "./nav.vue";
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      pasta: [],
      pizza: [],
      dessert: [],
    };
  },
  methods: {
    async refresh() {
      let user = localStorage.getItem("user-info");
      if (!user) {
        this.$router.push({ name: "signUp" });
      }
      let resultForPasta = await axios.get(`http://localhost:3000/pasta`);
      if (resultForPasta.status === 200 && resultForPasta.data.length > 0) {
        this.pasta = resultForPasta.data;
      }
      let resultForPizza = await axios.get(`http://localhost:3000/pizza`);
      if (resultForPizza.status === 200 && resultForPizza.data.length > 0) {
        this.pizza = resultForPizza.data;
      }
      let resultForDessert = await axios.get(`http://localhost:3000/dessert`);
      if (resultForDessert.status === 200 && resultForDessert.data.length > 0) {
        this.dessert = resultForDessert.data;
      }
    },
    async deletDish(id, section) {
      let dishDeleted = await axios.delete(
        `http://localhost:3000/${section}/${id}`
      );
      if (dishDeleted.status === 200) {
        this.refresh();
      }
    },
  },
  components: {
    Nav,
  },
  async mounted() {
    this.refresh();
  },
};
</script>

<style lang="scss">
.pasta,
.pizza,
.dessert {
  margin: 50px auto;
  h3 {
    color: #1d65ff;
    margin-bottom: 15px;
    font-family: Gabriola;
    font-size: 50px;
    font-weight: bolder;
  }
  .pasta-c {
    padding: 0;
    margin: 15px 25px;
    box-shadow: 10px 10px 8px #88a3d8;
    border-radius: 5px;
    border-left: 1px solid #88a3d8;
    border-top: 1px solid #88a3d8;
    cursor: pointer;
    transition: 0.7s;
    &:hover {
      transform: translateY(-7px);
    }
    img {
      max-width: 100%;
    }
    p {
      color: #1d65ff;
    }
    h4 {
      color: #1d65ff;
    }
    h2 {
      color: #1d65ff;
    }
    .actions {
      a {
        margin: 5px;
        padding-top: 5px;
        padding-bottom: 5px;
        border-radius: 5px;
        color: #fff;
        text-decoration: none;
        background-color: #3878fe;
        &:hover {
          background-color: #0238ac;
        }
      }
    }
  }
}
</style>
