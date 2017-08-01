import Vue from 'vue';

import ButtonSignIn from './Buttons/ButtonSignIn.vue';
import ButtonLogOut from './Buttons/ButtonLogOut.vue';
import ButtonSwitchCompany from './Buttons/ButtonSwitchCompany.vue';
import InputLoginPanel from './Inputs/InputLoginPanel.vue';
import InputSearch from './Inputs/InputSearch.vue';
import LoginHeader from './LoginHeader/LoginHeader.vue';
import NavigationBarTop from './NavigationBar/NavigationBarTop.vue';
import NavigationBarBottom from './NavigationBar/NavigationBarBottom.vue';
import NavigationItem from './NavigationBar/NavigationItem.vue';
//import UserAddForm from '.UserAddForm/UserAddForm.vue';
//tralalal

Vue.component(ButtonSignIn.name, ButtonSignIn);
Vue.component(InputLoginPanel.name, InputLoginPanel);
Vue.component(InputSearch.name, InputSearch);
Vue.component(LoginHeader.name, LoginHeader);
Vue.component(ButtonLogOut.name, ButtonLogOut);
Vue.component(ButtonSwitchCompany.name, ButtonSwitchCompany);
Vue.component(NavigationBarTop.name, NavigationBarTop);
Vue.component(NavigationBarBottom.name, NavigationBarBottom);
Vue.component(NavigationItem.name, NavigationItem);
//Vue.component(UserAddForm.name, UserAddForm);
