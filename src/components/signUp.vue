<template>
  <div class="signup-page text-center">
    <div class="container cont">
      <span class="text-capitalize done"> </span>
      <p class="res-name">My Resturant</p>
      <p class="wel">welcome !</p>
      <input
        type="text"
        v-model="name"
        placeholder="NAME"
        class="data-info"
      />
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
      <button type="button" v-on:click="signUp">SIGN UP</button>
      <hr />
      <p class="have-account">
        <router-link to="/login">Already have an account</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "signUp",
  data() {
    return {
      name: this.name,
      email: this.email,
      pin: this.pin,
      isShow: false,
      message: "",
    };
  },
  methods: {
    async signUp() {
      if (!this.name || !this.email || !this.pin) {
        this.isShow = true;
        console.log(this.isShow);
      } else {
        let result = await axios.post("http://localhost:3000/users", {
          name: this.name,
          email: this.email,
          pin: this.pin,
        });
        if (result.status === 201) {
          localStorage.setItem("user-info", JSON.stringify(result.data));
          this.name = "";
          this.email = "";
          this.pin = "";
          this.message = "Done";
        }
        setTimeout(() => {
          this.isShow = false;
        }, 2000);
      }
      this.$router.push({ name: "Home" });
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
.signup-page,
.add-page,
.update-page {
  .cont {
    background-color: #fff;
    box-shadow: 10px 10px 8px #88a3d8;
    margin: 8px auto;
    width: 650px;
    border-radius: 5px;
    padding: 30px 20px;
    border-left: 1px solid #88a3d8;
    border-top: 1px solid #88a3d8;
    position: relative;
    .done {
      color: red;
      &::placeholder {
        color: red;
      }
      &:hover,
      &:focus {
        box-shadow: 5px 5px 30px red;
      }
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
    .have-account {
      background-color: #fff;
      margin-bottom: auto;
      margin-top: auto;
      a {
        background-color: #fff;
        text-decoration: none;
      }
    }
  }
}
</style>
