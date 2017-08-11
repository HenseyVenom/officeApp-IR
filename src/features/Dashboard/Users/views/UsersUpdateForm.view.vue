<template>
    <div class="containe2">
        <form class="form-control bord" @submit.prevent="validateBeforeSubmit">
            <legend>Update user</legend>
    
            <div class="column is-12">
                <label class="label">Name</label>
                <p class="control has-icon has-icon-right">
                    <input id="name" class="form-control form-border" name="name" v-model="user.name" v-validate="'required|alpha'" :class="{'input': true, 'is-danger': errors.has('name') }" type="text" placeholder="Type name here ..." />
                    <i v-show="errors.has('name')" class="fa fa-warning"></i>
                    <span v-show="errors.has('name')" class="help is-danger">{{ errors.first('name') }}</span>
                </p>
            </div>
    
            <div class="column is-12">
                <label class="label">Surame</label>
                <p class="control has-icon has-icon-right">
                    <input id="surname" class="form-control form-border" name="surname" v-model="user.surname" v-validate="'required|alpha'" :class="{'input': true, 'is-danger': errors.has('surname') }" type="text" placeholder="Type surname here ..." />
                    <i v-show="errors.has('surname')" class="fa fa-warning"></i>
                    <span v-show="errors.has('surname')" class="help is-danger">{{ errors.first('surname') }}</span>
                </p>
            </div>
    
            <div class="column is-12">
                <label class="label" for="email">Email</label>
                <p :class="{ 'control': true }">
                    <input id="email" class="form-control form-border" v-validate="'required|email'" :class="{ 'input': true, 'is-danger': errors.has('email')}" name="email" type="text" placeholder="Type email here ..." v-model="user.email" />
                    <span v-show="errors.has('email')" class=" is-danger">{{ errors.first('email') }}</span>
                </p>
            </div>
    
            <label>Role</label>
            <select class="form-control form-border" v-model="user.role">
                <option>Guest</option>
                <option>Employee</option>
                <option>Admin</option>
            </select>
    
            <div class="column is-6">
                <legend :class="{ 'error': errors.has('checkbox') }"></legend>
                <br>
                <p class="control">
                    <label class="radio">
                        <input name="checkbox" v-model="user.accepted" v-validate="'required|in:Accepted,Enable'" value="Accepted" type="radio"> Accepted
                    </label>
                    <label class="radio">
                        <input name="checkbox" v-model="user.accepted" v-validate="'required|in:Accepted,Enable'" value="Enable" type="radio"> Enable
                    </label>
                </p>
                <span class="help is-danger" v-show="errors.has('checkbox')">{{ errors.first('checkbox') }}</span>
            </div>
    
            <div class="column is-12">
                <label class="label">Description</label>
                <p class="control has-icon has-icon-right">
                    <input id="description" class="form-control form-border" name="description" v-model="user.description" v-validate="'required|alpha_num'" :class="{'input': true, 'is-danger': errors.has('description') }" type="text" placeholder="Type description here ..." />
                    <i v-show="errors.has('description')" class="fa fa-warning"></i>
                    <span v-show="errors.has('description')" class="help is-danger">{{ errors.first('description') }}</span>
                </p>
            </div>
    
            <div class="column is-12">
                <label class="label">Phone</label>
                <p class="control has-icon has-icon-right">
                    <input id="phone" class="form-control form-border" name="phone" v-model="user.phone" v-validate="'required|digits:9'" :class="{'input': true, 'is-danger': errors.has('phone') }" type="text" placeholder="Type phone number here ..." />
                    <i v-show="errors.has('phone')" class="fa fa-warning"></i>
                    <span v-show="errors.has('phone')" class="help is-danger">{{ errors.first('phone') }}</span>
                </p>
            </div>
    
            <div class="column is-12">
                <label class="label">Position</label>
                <p class="control has-icon has-icon-right">
                    <input id="position" class="form-control form-border" name="position" v-model="user.position" v-validate="'required|alpha_num'" :class="{'input': true, 'is-danger': errors.has('position') }" type="text" placeholder="Type position here ..." />
                    <i v-show="errors.has('position')" class="fa fa-warning"></i>
                    <span v-show="errors.has('position')" class="help is-danger">{{ errors.first('position') }}</span>
                </p>
            </div>
    
            <label>Office</label>
            <select class="form-control form-border" v-model="user.office">
                <option>Office 1</option>
                <option>Office 2</option>
                <option>Office 3</option>
                <option>Office 4</option>
                <option>Office 5</option>
            </select>
    
            <my-button class="btn btn-sm btn-block btn-success " caption="Update"></my-button>
            <my-button class="btn btn-sm btn-block btn-danger" caption="Cancel" @click="cancel"></my-button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'usersupdateform',
    data: () => {
        return {
            user: {
                name: '',
                surname: '',
                email: '',
                role: 'Guest', // initial value
                accepted: '',
                description: '',
                phone: '',
                position: '',
                office: 'Office 1', // initial value
            },
        };
    },
    created() {
        // fetch the data when the view is created and the data is
        // already being observed
        this.fetchData()
    },
    methods: {
        cancel() {
            this.$router.push('/dashboard/userslist');
        },
        validateBeforeSubmit() {
            this.$validator.validateAll().then(result => {
                if (result) {
                    this.$store.dispatch('UPDATE_USER_PROFILE', this.user).then(() => {
                        alert("User was updated");
                    });
                } else {
                }
                this.$router.push('/dashboard/userslist');
            });
        },
        fetchData() {
            if (typeof this.$route.params.id !== 'undefined') {
                return axios.get('http://localhost:4040/api/users/' + this.$route.params.id).then((response) => {
                    this.user = response.data;
                });
            }
        }
    },
}
</script>
<style>
.containe2 {
    padding: 10px;
    margin-top: 50px;
    margin-right: 25%;
    margin-left: 25%;
}

.form-group {
    padding-left: 10px;
    padding-right: 10px;
}

.bord {
    border: 1px dashed #FF3300 !important;
}

.is-danger {
    color: red;
}

.form-control:focus {
    color: #464a4c;
    background-color: #fff;
    border-color: #FF3300 !important;
    outline: none;
}

.form-border {
    margin-bottom: 10px;
}
</style>