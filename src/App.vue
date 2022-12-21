<template>
  <Form :schema="schema" :data="data"/>
</template>

<script setup>
import { onMounted, reactive } from "vue";

import { schema } from "./schemas";
import Form from "./components/Form.vue";

const data = {
  name: "Suraj Dhungana",
  email: "suraj@gmail.com",
  phone: "9841234567",
  password: "password123",
}

</script>