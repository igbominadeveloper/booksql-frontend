<template>
    <div class="auth-page">
        <div class="container page">
            <div class="row">
                <div class="col-md-6 offset-md-3 col-xs-12">
                    <h1 class="text-xs-center">Sign in</h1>

                    <ul class="error-messages">
                        <li>That email is already taken</li>
                    </ul>

                    <form>
                        <fieldset class="form-group">
                            <input
                                class="form-control form-control-lg"
                                type="email"
                                placeholder="Email"
                                v-model="email"
                                required
                            />
                        </fieldset>
                        <fieldset class="form-group">
                            <input
                                class="form-control form-control-lg"
                                type="password"
                                placeholder="Password"
                                v-model="password"
                                required
                            />
                        </fieldset>
                        <button class="btn btn-lg btn-primary pull-xs-right" @click.prevent="login">
                            Sign in
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { LoginObject } from '../interfaces/users';

export default Vue.extend({
    data: (): LoginObject => ({
        email: '',
        password: '',
    }),
    methods: {
        login() {
            this.$store.dispatch('users/loginUser', { email: this.email, password: this.password });
        },
    },
});
</script>
