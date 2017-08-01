<template>

</template>



export default {
  API_PATH: 'http://localhost:4040',
};

import axios from 'axios';
import config from '../../common/consts';

class Service {
  getUsers(callbackSuccess, callbackFailure) {
    axios.get(config.API_PATH + '/users')
      .then(function (response) {
        callbackSuccess(response);
      })
      .catch(function (error) {
        callbackFailure();
      });
  }
}

export default new Service();

import service from '../../common/services/roomService';

export default {
  methods: {
    click() {
      service.getUsers((users) => {
        this.users = users;
      }, () => {
        this.error = 'WYSTAPIL BLAD!';
      });
    }
  }
}

</script>