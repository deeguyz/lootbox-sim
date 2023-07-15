<script setup lang="ts">
import {ref } from 'vue'

const name = ref('')
const email = ref('')
const password = ref('')
const passwordConfirm = ref('')
</script>

<template>
    <form>

        <label> Name: </label>
        <input type="name" required v-model="password">

        <label> Email: </label>
        <input type="email" required v-model="email">

        <label> Password: </label>
        <input type="password" required v-model="password">

        <label> Confirm Password: </label>
        <input type="passwordConfirm" required v-model="password">

    </form>

    <router-link to='/'><button>Cancel</button></router-link>

    <p>Name: {{email}}</p>
    <p>Email: {{password}}</p>
    <p>Password: {{email}}</p>
    <p>PasswordConfirm: {{password}}</p>
</template>

<style scoped>
form{
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}

label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.5em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}

input {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555
}
</style>