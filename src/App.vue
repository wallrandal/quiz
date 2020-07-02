<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Signup Form</h4>
                    </div>
                    <form action="">
                        <div class="panel-body">
                            <label for="first_name">First Name</label>
                            <input v-model="firstName" class="form-control" type="text" name="first_name" id="first_name">
                            
                            <label for="last_name">Last Name</label>
                            <input v-model="lastName" class="form-control" type="text" name="last_name" id="last_name">
                            
                            <label for="email">E-mail</label>
                            <input v-model="email" class="form-control" type="email" name="email" id="email">
                            
                            <label for="password">Password</label>
                            <input v-model="password" class="form-control" type="password" name="password" id="password">
                            
                            <label for="switch">Store data?</label>
                            <app-switch id="switch" v-model="switched"></app-switch>

                            <button @click.prevent="submitted = true" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div v-show="submitted" class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{fullName}} </p>
                        <p>Mail: {{email}} </p>
                        <p>Password: </p>
                        <p>Store in Database?: {{switched}} </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Switch from './components/Switch';
    export default {
        data () {
            return {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                switched: true,
                submitted: false,
            };
        },
        components: {
            AppSwitch: Switch,
        },
        computed: {
            fullName() {
                return `${this.firstName} ${this.lastName}`;
            }
        },
    }
</script>

<style>
</style>