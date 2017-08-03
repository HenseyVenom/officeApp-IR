<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 col-sm-12 col-xs-12">
        <div class="wrapper">
          <form class="form-signin">
            <login-header caption="Sign in to your admin account" />
            <input-panel type="text" name="email" placeholder="Email Address" required="" autofocus="" v-on:change="(e) => this.userLogin = e"></input-panel>
            <input-panel type="password" name="password" placeholder="Password" required="" autofocus="" v-on:change="(e) => this.userPassword = e"></input-panel>
            <input-checkbox caption="Remember me"></input-checkbox>
            <buttonhut class="btn-lg btn-block" caption="Sign In" type="submit" v-on:click="login" />
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
      userLogin: '',
      userPassword: '',
    }),
    components: {

    },
    methods: {
      login() {
        window.console.log(`Logging in with login ${this.userLogin} and password ${this.userPassword}`);
        // example of usage of programmatic route change
        // all components have access to this.$router
        this.$router.push('/dashboard');
      },
    },
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

</style>