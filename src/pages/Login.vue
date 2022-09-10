<template>
  <div class="login-component">
    <div class="body">
      <img src="../assets/logo.svg" alt="podologue" />
      <h1>Bienvenue</h1>
      <div class="hr"></div>
      <form action="submit">
        <div>
          <span class="p-float-label">
            <InputText
              id="username"
              type="text"
              v-on:change="setUsername($event)"
            />
            <label for="username">Identifiant</label>
          </span>
        </div>
        <div>
          <span class="p-float-label">
            <InputText
              id="password"
              type="password"
              v-on:change="setPassword($event)"
            />
            <label for="password">Mot de passe</label>
          </span>
        </div>
        <Button
          label="Connexion"
          class="login-button"
          v-on:click="onsubmit()"
        ></Button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import InputText from "primevue/inputtext";
import Button from "primevue/button";

let invalid = false;
let username = "";
let password = "";

function setUsername(event: any) {
  username = event.target.value;
}
function setPassword(event: any) {
  password = event.target.value;
}
function onsubmit() {
  console.log(username, password);
}
</script>

<style>
.login-component {
  height: screen;
  width: screen;
  background: rgb(245, 188, 170);
  background: linear-gradient(
    45deg,
    rgba(245, 188, 170, 1) 0%,
    rgba(243, 151, 157, 1) 100%
  );
}
.body {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
img {
  margin-top: 5em;
  align-self: center;
  width: 18em;
}
h1 {
  color: white;
  margin-bottom: 10px;
}
.hr {
  background-color: white;
  width: 10%;
  height: 2px;
  margin-bottom: 5em;
}
form {
  height: 15em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
#password,
#username {
  border-radius: 3em;
  height: 3em;
  width: 16em;
}
.login-button {
  border-radius: 3em;
  border: solid 1px white;
  background-color: #f3979d;
  color: white;
  height: 3em;
  width: 12em;
}
</style>
