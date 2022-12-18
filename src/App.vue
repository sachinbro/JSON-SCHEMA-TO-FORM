<template>
  <form action="" @submit.prevent="submit">
    <h2>{{ data.json_schema?.title }}</h2>

    <div v-for="(value, key) in data.json_schema.details" :key="key">
      <label :for="key">{{ value.title }}:</label>

      <input :id="key" :type="value.type" :name="key" :placeholder="value.default" />
    </div>

    <button type="submit">Submit</button>
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

const submit = (e) => {
  console.log(e.target.elements);

  let inputValues = {};

  for (let i = 0; i < e.target.elements.length; i++) {
    let input = e.target.elements[i];
    if (input.type !== "submit") {
      inputValues[input.name] = input.value;
    }
  }
  console.log(inputValues);
};
</script>
<style scoped>
div {
  margin: 1rem;
}
</style>
