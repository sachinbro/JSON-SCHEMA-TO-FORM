<template>
  <Form :schemas="schemas" />
</template>

<script setup>
import { onMounted, reactive } from "vue";

import { schemas } from "./schemas";
import Form from "./components/Form.vue";

</script>