// index.js

import Vue from 'vue';

import Button from './Buttons/Button.vue';
import InputLoginPanel from './Inputs/InputLoginPanel.vue';
import InputSearch from './Inputs/InputSearch.vue';
import LoginHeader from './LoginHeader/LoginHeader.vue';
import NavigationBarTop from './NavigationBar/NavigationBarTop.vue';
import NavigationBarBottom from './NavigationBar/NavigationBarBottom.vue';
import NavigationItem from './NavigationBar/NavigationItem.vue';
import InputSelect from './Inputs/InputSelect.vue';
import InputCheckBox from './Inputs/InputCheckBox.vue';
import InputAddFile from './Inputs/InputAddFile.vue';
import DatePicker from './DatePicker/DatePicker.vue';

Vue.component(Button.name, Button);
Vue.component(InputLoginPanel.name, InputLoginPanel);
Vue.component(InputSearch.name, InputSearch);
Vue.component(LoginHeader.name, LoginHeader);
Vue.component(NavigationBarTop.name, NavigationBarTop);
Vue.component(NavigationBarBottom.name, NavigationBarBottom);
Vue.component(NavigationItem.name, NavigationItem);
Vue.component(InputSelect.name, InputSelect);
Vue.component(InputCheckBox.name, InputCheckBox);
Vue.component(InputAddFile.name, InputAddFile);
Vue.component(DatePicker.name, DatePicker);

