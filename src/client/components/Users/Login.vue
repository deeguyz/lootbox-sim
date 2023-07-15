<script setup lang="ts">
import {ref } from 'vue'

const email = ref('')
const password = ref('')
</script>

<template>
    <form>
        <label> Email: </label>
        <input type="email" required v-model="email">

        <label> Password: </label>
        <input type="password" required v-model="password">
    </form>

    <router-link to='/registration'><button>Register</button></router-link>

    <p>Email: {{email}}</p>
    <p>Password: {{password}}</p>
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