<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 col-sm-12 col-xs-12">
        <div class="wrapper">
          <form class="form-signin" @submit.prevent="login({ userEmail, userPassword })">
            <login-header caption="Sign in to your admin account" />
            <input-panel type="text" name="userEmail" placeholder="Email Address" required="" autofocus="" v-model="userEmail" />
            <input-panel type="password" name="userPassword" placeholder="Password" required="" autofocus="" v-model="userPassword" />
            <label class="checkbox">
              <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe"> Remember me
            </label>
            <buttonhut class="btn btn-hut btn-block btn-lg" caption="Sign In" type="submit" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login-view',
  data: () => ({
    userEmail: '',
    userPassword: '',
  }),
  methods: {
    login() {
      this.$store.dispatch("LOG_IN", {
        userEmail: this.userEmail,
        userPassword: this.userPassword
      }).then(() => {
        this.$router.push("/dashboard");
        location.reload();
      });
    }
    /*login() {
      window.console.log(`Logging in with login ${this.userLogin} and password ${this.userPassword}`);
      // example of usage of programmatic route change
      // all components have access to this.$router
      this.$router.push('/dashboard');
      location.reload();
    },*/
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    }
  }
};
</script>

<style>
.wrapper {
  margin-top: 200px;
  margin-bottom: 80px;
}
.form-signin {
  padding: 15px 35px 45px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0px 0px 110px -3px rgba(0, 0, 0, 0.64);
  -moz-box-shadow: 0px 0px 110px -3px rgba(0, 0, 0, 0.64);
  box-shadow: 0px 0px 110px -3px rgba(0, 0, 0, 0.64);
}
.checkbox {
  font-weight: normal;
}
.form-control {
  position: relative;
  font-size: 16px;
  height: auto;
  padding: 10px;
}
input[type="text"] {
  margin-bottom: 10px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.btn-hut {
  color: #FFFFFF;
  background-color: #FF3300;
  border-color: #FFFFFF;
  margin-top: 20px;
}
.btn-hut:hover,
.btn-hut:focus,
.btn-hut:active,
.btn-hut.active,
.open .dropdown-toggle.btn-hut {
  color: #FFFFFF;
  background-color: #FC4F29;
  border-color: #FFFFFF;
}
.btn-hut:active,
.btn-hut.active,
.open .dropdown-toggle.btn-hut {
  background-image: none;
}
.btn-hut.disabled,
.btn-hut[disabled],
fieldset[disabled] .btn-hut,
.btn-hut.disabled:hover,
.btn-hut[disabled]:hover,
fieldset[disabled] .btn-hut:hover,
.btn-hut.disabled:focus,
.btn-hut[disabled]:focus,
fieldset[disabled] .btn-hut:focus,
.btn-hut.disabled:active,
.btn-hut[disabled]:active,
fieldset[disabled] .btn-hut:active,
.btn-hut.disabled.active,
.btn-hut[disabled].active,
fieldset[disabled] .btn-hut.active {
  background-color: #FF3300;
  border-color: #FFFFFF;
}
.btn-hut .badge {
  color: #FF3300;
  background-color: #FFFFFF;
}
</style>