<template>
  <div>
    <a href style class="btn btn-primary" @click.prevent="show">login</a>

    <modal name="modalLogin" height="auto" :draggable="true">
      <div class style="padding:20px">
        <div class="justify-content-center">
          <h3 style>login</h3>
          <form @submit.prevent="onSubmit">
            <div class="form-group">
              <label for="email">Email address</label>
              <input
                type="email"
                class="form-control"
                id="userEmail"
                @paste.prevent
                placeholder="Enter email"
                v-model="userEmail"
                style="border:1px solid green"
              />
            </div>
            <div class="form-group" style="position:relative;">
              <label for="password">Password</label>
              <input
                name="Password"
                type="password"
                v-model="password"
                @paste.prevent
                class="form-control validate"
                id="password"
                v-validate.continues="'required|alpha|min:5'"
                placeholder="Enter Password"
                style="border:1px solid green;"
              />
              <ul>
                <li v-for="(error,index) in errors.all('Password')" :key="index">{{ error }}</li>
              </ul>
              <span>
                <i
                  class="fa fa-eye-slash icon"
                  id="fafaEye"
                  @click="showPassword"
                  style="position:absolute; bottom:20%; right: 5%"
                ></i>
              </span>
            </div>
            <button type="submit" class="btn btn-success">Submit</button>
          </form>

          <div style="padding: 5px 5px 5px 0px">
            <span style="padding: 5px 5px 5px 0px">Not a member</span>
            <a href="#" @click.prevent="showSignUp">Sign Up</a>
          </div>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "ModalLogin",
  data() {
    return {
      userEmail: "",
      password: ""
    };
  },
  methods: {
    ...mapActions(["userChange"]),

    show() {
      this.$modal.show("modalLogin");
    },
    close() {
      this.$modal.hide("modalLogin");
    },
    showSignUp() {
      this.$modal.show("modalSignup");
      this.$modal.hide("modalLogin");
    },
    showPassword() {
      let paswordValue = document.getElementById("password");
      let eyeIcon = document.getElementById("fafaEye");
      if (paswordValue.type === "password") {
        // console.log(paswordValue);
        paswordValue.type = "text";
        eyeIcon.className = "fa fa-eye icon";
        // console.log(eyeIcon);
      } else {
        paswordValue.type = "password";
        eyeIcon.className = "fa fa-eye-slash icon";
      }
    },
    onSubmit: function() {
      if (this.userEmail == "m@m.com" && this.password == "abcd") {
        this.userChange(2);
        // console.log('abc')
        this.close();
        this.$router.push("/india");
      } else if (this.userEmail == "a@a.com" && this.password == "xyz") {
        this.userChange(3);
        this.close();
        this.$router.push("/india/customers");
      } else {
        // console.log('xyz')
        let err_password = document.getElementById("password").style;
        let err_userEmail = document.getElementById("userEmail").style;
        // console.log(err_userEmail)
        err_password.cssText = "border: 1px solid red";
        err_userEmail.cssText = "border: 1px solid red";
      }
    }
  }
};
</script>

<style scoped>
.icon {
  /* position: absolute; */
  /* float: right; */
  /* padding: 0px 20px; */
}
</style>