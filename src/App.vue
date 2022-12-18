<template>
  <form action="" @submit.prevent="submit">
    <h2>{{ json_schema?.title }}</h2>

    <div v-for="(value, key) in json_schema.details" :key="key">
      <label :for="key">{{ value.title }}:</label>

      <input :id="key" :name="key" :placeholder="value.default" />
    </div>
  </form>

  <button @click="changeSchema">Change schema</button>
</template>

<script setup>
import { reactive, onMounted } from "vue";
import schemas from "./schemas";

function changeSchema() {
  const random = Math.floor(Math.random() * schemas.length);
  Object.assign(json_schema, schemas[random]);
}

let json_schema = reactive(schemas[0]);

const submit = () => {
  console.log(json_schema);
};
</script>
<style scoped>
  div {
    margin: 1rem;
  }
</style>
