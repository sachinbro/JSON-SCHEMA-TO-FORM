<template>
  <Form :schemas="schemas" :data="data"/>
</template>

<script setup>
import { onMounted, reactive } from "vue";

import { schemas } from "./schemas";
import Form from "./components/Form.vue";

const data = {
  name: "Suraj Dhungana",
  email: "suraj@gmail.com",
  phone: "9841234567",
  password: "password123",
  feedback: "This is a feedback!",
  gender: ["male", "female", "transgender", "gay"]
}

</script>