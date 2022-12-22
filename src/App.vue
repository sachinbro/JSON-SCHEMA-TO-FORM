<template>
  <Form :schema="schema" :data="data" @updateData="updateData">
    
  </Form>
</template>

<script setup>
import { onMounted, reactive } from "vue";

import { schema } from "./schemas";
import Form from "./components/Form.vue";

let data = {
  name: "Suraj Dhungana",
  email: "suraj@gmail.com",
  phone: "9841234567",
  password: "password123",
};

const updateData = (validate_data) => {
  data = validate_data;
  console.log(validate_data);
};

</script>