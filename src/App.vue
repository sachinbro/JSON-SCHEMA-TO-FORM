<template>
  <form action="" @submit.prevent="submit" ref="form">
    <h2>{{ data.json_schema?.title }}</h2>

    <div v-for="(value, key) in data.json_schema.details" :key="key">
      <label :for="key">{{ value.title }}:</label>

      <input
        v-if="value.element === 'input'"
        :id="key"
        :type="value.type"
        :name="key"
        :placeholder="value.default"
        v-model="form_values.validate[`${value.title}`]"
      />
      <textarea
        v-if="value.element === 'textarea'"
        :name="key"
        id=""
        cols="30"
        rows="10"
        :placeholder="value.default"
      ></textarea>
      <select v-if="value.element === 'select'" :name="key">
        <option v-for="option in value.options" :value="option" :key="option">
          {{ option }}
        </option>
      </select>
    </div>

    <button type="submit">Submit</button>
  </form>

  <button @click="changeSchema">Change schema</button>
</template>

<script setup>
import { reactive, ref, watch } from "vue";
import { schemas } from "./schemas";

const form = ref(null);

let form_values = reactive({ validate: {} });

watch(
  form_values.validate,
  () => {
    console.log(form_values.validate);
  },
  { deep: true }
);

const data = reactive({
  json_schema: schemas[0],
});

function changeSchema() {
  const random = Math.floor(Math.random() * schemas.length);
  data.json_schema = schemas[random];
}

const submit = (e) => {
  let inputValues = {};

  for (let i = 0; i < e.target.elements.length; i++) {
    let input = e.target.elements[i];
    if (input.type !== "submit") {
      inputValues[input.name] = input.value;
    }
  }
  // console.log(form_values.validate); // console of form values using v-model
};
</script>
<style scoped>
div {
  margin: 1rem;
}
</style>
