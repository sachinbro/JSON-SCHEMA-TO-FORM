<template>
  <form action="" @submit.prevent="submit">
    <h2>{{ data.json_schema?.title }}</h2>

    <div v-for="(value, key) in data.json_schema.details" :key="key">
      <label :for="key">{{ value.title }}:</label>

      <input :id="key" :name="key" :placeholder="value.default" />
    </div>
  </form>

  <button @click="changeSchema">Change schema</button>
</template>

<script setup>
import { reactive, onMounted } from "vue";
import { schemas } from "./schemas";

const data = reactive({
  json_schema: schemas[0],
});

onMounted(() => {
  console.log(schemas);
});

function changeSchema() {
  const random = Math.floor(Math.random() * (schemas.length ));
  data.json_schema = schemas[random];

}

const submit = () => {
  console.log(json_schema);
};
</script>
<style scoped>
div {
  margin: 1rem;
}
</style>
