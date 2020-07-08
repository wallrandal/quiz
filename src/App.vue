<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="form-group">
                    <label for="username">Username</label>
                    <input v-model="user.username" type="text" class="form-control" id="username">
                    <div class="form-group">
                        <label for="email">E-mail</label>
                        <input v-model="user.email" type="email" class="form-control" name="email" id="email">
                    </div>
                    <button @click="submit" class="btn btn-primary" type="submit">Submit</button>
                    <hr>
                    <input type="text" class="form-control" v-model="node">
                    <br><br>
                    <button class="btn btn-primary" @click="fetchData">Get Data</button>
                    <br><br>

                    <ul class="list-group">
                        <li class="list-group-item" v-for="(user, index) in users" :key="index">
                            {{user.username}} - {{user.email}} 
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
/* eslint no-console: ["error", { allow: ["log"] }] */
    export default {
        data () {
            return {
                user: {
                    username : '',
                    email: '',
                },
                users: [],
                resource: {},
                node: 'data',
            };
        },
        methods: {
            submit () {
                // this.$http.post('data.json', this.user)
                //           .then(response => { console.log(response)}, 
                //                 error => {console.log(error)}
                //           );
                this.resource.saveAlt({}, this.user);
            },
            fetchData () {
                // this.$http.get('data.json')
                //           .then(response => response.json(), error => {console.log(error)})
                //           .then(data => {
                //               const resultArray = [];
                //               for(let key in data) {
                //                   resultArray.push(data[key]);
                //               }
                //               this.users = resultArray;
                //           });
                // console.log('depois aqui');
                this.resource.getData({node: this.node})
                             .then(response => response.json(), error => {console.log(error)})
                             .then(data => {
                                const resultArray = [];
                                for(let key in data) {
                                    resultArray.push(data[key]);
                                }
                                this.users = resultArray;
                             });
            }
        },
        created () {
            const customActions = {
                saveAlt: {method: 'POST', url: 'alternative.json'},
                getData: {method: 'GET'},
            };
            this.resource = this.$resource('{node}.json', {}, customActions)
        }
    }
</script>

<style>
</style>