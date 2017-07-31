import Vue from 'vue';

import ButtonSignIn from './Buttons/ButtonSignIn.vue';
import ButtonLogOut from './Buttons/ButtonLogOut.vue';
import ButtonSwitchCompany from './Buttons/ButtonSwitchCompany.vue';
import InputLoginPanel from './Inputs/InputLoginPanel.vue';
import InputSearch from './Inputs/InputSearch.vue';
import LoginHeader from './LoginHeader/LoginHeader.vue';
import NavigationBar from './NavigationBar/NavigationBar.vue';
import ToolBar from './ToolBar/ToolBar.vue';
import ToolBarItem from './ToolBar/ToolBarItem.vue';
//import UserAddForm from '.UserAddForm/UserAddForm.vue';

Vue.component(ButtonSignIn.name, ButtonSignIn);
Vue.component(InputLoginPanel.name, InputLoginPanel);
Vue.component(InputSearch.name, InputSearch);
Vue.component(LoginHeader.name, LoginHeader);
Vue.component(ButtonLogOut.name, ButtonLogOut);
Vue.component(ButtonSwitchCompany.name, ButtonSwitchCompany);
Vue.component(NavigationBar.name, NavigationBar);
Vue.component(ToolBar.name, ToolBar);
Vue.component(ToolBarItem.name, ToolBarItem);
//Vue.component(UserAddForm.name, UserAddForm);
