<template>
  <div class="nav-con text-left">
    <div class="row nav-r container-fluid">
      <router-link class="col-2 nav-c" to="/">HOME</router-link>
      <router-link class="col-2 nav-c" to="/Add">Add Dish</router-link>
      <a class="col-2 nav-c" v-on:click="logout" href="#">Log Out</a>
      <p class="col wel-msg text-right text-capitalize">
        Welcom <span>{{ name }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      name: "",
    };
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ name: "logIn" });
    },
  },
  async mounted() {
    let user = localStorage.getItem("user-info");
    this.name = JSON.parse(user).name;
  },
};
</script>
<style lang="scss">
.nav-con {
  background-color: #fff;
  border-bottom: 2px solid #88a3d8;
  .nav-r {
    background-color: #fff;
    margin: 0 auto 0;
    padding: 0;
    .nav-c {
      background-color: #fff;
      padding: 15px 15px;
      cursor: pointer;
      user-select: none;
      text-decoration: none;
      font-size: 20px;
      &:hover {
        background-color: #6594fc;
        color: #fff;
        border-bottom: none;
      }
    }
  }
  .wel-msg {
    text-align: right;
    padding-top: 15px;
    font-size: 20px;
    color: #3977fe;
    user-select: none;
    margin-right: 10px;
    span {
      font-family: Gabriola;
      font-weight: bolder;
    }
  }
}
</style>
