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
        :placeholder="value.placeholder"
        v-model="form_values.validate[`${value.title}`]"
      />
      <textarea
        v-if="value.element === 'textarea'"
        :name="key"
        id=""
        cols="30"
        rows="10"
        :placeholder="value.placeholder"
        v-model="form_values.validate[`${value.title}`]"
      ></textarea>
      <select
        v-if="value.element === 'select'"
        :name="key"
        v-model="form_values.validate[`${value.title}`]"
      >
        <option v-for="option in value.options" :value="option" :key="option">
          {{ option }}
        </option>
      </select>
    </div>

    <button type="submit">Submit</button>
  </form>

  <!-- <button @click="changeSchema">Change schema</button> -->

  <pre>{{ form_values.validate }}</pre>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";
import { schemas } from "./schemas";

const form = ref(null);

let form_values = reactive({ validate: {} });

const data = reactive({
  json_schema: schemas[0],
});

onMounted(() => {
  loadValuesFromSchema();
});

const loadValuesFromSchema = () => {
  for (const i in schemas[0].details) {
    form_values.validate[schemas[0].details[i].title] =
      schemas[0].details[i].placeholder;
  }
};

const submit = (e) => {

  console.log(form_values.validate);
};
</script>
<style scoped>
div {
  margin: 1rem;
}
</style>
