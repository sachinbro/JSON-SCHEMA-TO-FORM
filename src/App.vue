<template>
  <Form :schema="schema" :data="data" @updateData="updateData(data)">
    
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

const updateData = (updatedData) => {
  data = updatedData;
  console.log(updateData);
};

</script>