<template>
  <div class="login-page text-center">
    <div class="container cont">
      <p class="res-name">My Resturant</p>
      <p class="wel">welcome Home</p>
      <input
        type="email"
        v-model="email"
        placeholder="EMAIL"
        class="data-info"
      />
      <input
        type="password"
        v-model="pin"
        placeholder="PASSWORD"
        class="data-info"
      />
      <button type="button" v-on:click="login">Login</button>
      <hr />
      <p class="creat">
          <router-link to="/signup">Sign Up</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "logIn",
  data() {
    return {
      email: "",
      pin: "",
    };
  },
  methods: {
    async login() {
      if (!this.email || !this.pin) {
        console.log(`kosm el-web`);
      } else {
        let result = await axios.get(
          `http://localhost:3000/users?email=${this.email}&pin=${this.pin}`
        );
        if (result.status === 200 && result.data.length > 0) {
          localStorage.setItem("user-info", JSON.stringify(result.data[0]));
          this.$router.push({ name: "Home" });
        }
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "Home" });
    }
  },
};
</script>
<style lang="scss">

.login-page {
  .cont {
    background-color: #fff;
    box-shadow: 10px 10px 8px #88a3d8;
    margin: 25px auto;
    width: 650px;
    border-radius: 5px;
    padding: 30px 20px;
    border-left: 1px solid #88a3d8;
    border-top: 1px solid #88a3d8;
    position: relative;
    .done {
      background-color: #eff4f8;
      position: absolute;
      color: #3977fe;
      font-family: Gabriola;
      display: none;
      padding: 0px;
      width: 600px;
      font-size: 30px;
      top: 9px;
      border-radius: 10px;
    }
    .show {
      display: block;
    }
    .res-name {
      background-color: #fff;
      margin-top: 10px;
      margin-bottom: 0;
      color: #3977fe;
      font-size: 52px;
      font-family: Gabriola;
    }
    .wel {
      background-color: #fff;
      margin-bottom: 15px;
      color: #3977fe;
      font-size: 52px;
      font-weight: bolder;
      font-family: Gabriola;
    }
    .data-info {
      color: #3878fe;
      display: block;
      margin: 20px auto;
      background-color: #fff;
      outline: none;
      border: 2px solid #afc5f4;
      border-radius: 5px;
      padding: 15px 30px;
      width: 500px;
      transition: 0.5s;
      &::placeholder {
        color: #3977fe;
      }
      &:hover,
      &:focus {
        box-shadow: 5px 5px 30px #88a3d8;
      }
    }
    button {
      background-color: #3878fe;
      color: #fff;
      border: none;
      border-radius: 5px;
      width: 500px;
      padding: 15px 30px;
      margin: 20px;
      opacity: 0.8;
      transition: 0.7s;
      &:hover {
        opacity: 1;
        transform: translateY(-2px);
      }
    }
    hr {
      height: 2px;
      color: #3878fe;
    }
  .creat{
      background-color: #fff;
      margin-bottom: auto;
      margin-top: auto;
      a{
          background-color: #fff;
           text-decoration: none;
      }
  }
  }
}
</style>
