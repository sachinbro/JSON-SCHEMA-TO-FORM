<template>
  <form action="" @submit.prevent="submit" ref="form">
    <h2>{{ schema?.title }}</h2>

    <div v-for="(value, key) in schema.details" :key="key">
      <label :for="key">{{ value.title }}: {{ key }}</label>

      <InputElement
        :data="data"
        :name="key"
        :value="value"
        @validate="validate"
      />
      <!-- <textarea
        v-if="value.element === 'textarea'"
        :name="key"
        cols="30"
        rows="5"
        :placeholder="value.placeholder"
        :value="data[key]"
        @input="validate(key, value.validation, event)"
      ></textarea>
      <select
        v-if="value.element === 'select'"
        :name="key"
        :value="data[key]"
        @input="validate(key, value.validation, event)"
      >
        <option v-for="option in data[key]" :value="option" :key="option">
          {{ option }}
        </option>
      </select> -->
      <span class="error" v-if="errors[`${key}`]"> {{ errors[key] }}</span>
    </div>

    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  name: "Form",
};
</script>

<script setup>
import { onMounted, reactive } from "vue";

import InputElement from "./Form Elements/InputElement.vue";

let form_values = reactive({ state: {} });
let validated_values = reactive({ state: {} });
let errors = reactive({});

const { schema, data } = defineProps({
  schema: {
    type: Object,
    required: true,
  },
  data: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["updateData"]);

onMounted(() => {
  form_values.state = data;
});

function validate({ name, validation, event }) {
  form_values.state[name] = event.target.value;

  if (validation.required && event.target.value === "") {
    errors[name] = "This field is required";
    return;
  }
  if (
    validation.minLength &&
    event.target.value.length < validation.minLength
  ) {
    errors[
      name
    ] = `This field must be at least ${validation.minLength} characters long`;
    return;
  }
  if (
    validation.maxLength &&
    event.target.value.length > validation.maxLength
  ) {
    errors[
      name
    ] = `This field must be at most ${validation.maxLength} characters long`;
    return;
  }
  errors[name] = "";
}

const submit = (e) => {
  for (const error in errors) {
    if (errors[error] !== "") {
      return;
    }
  }
  validated_values.state = form_values.state;

  emit("updateData", validated_values.state);
};
</script>

<style scoped>
div {
  margin: 1rem;
}
.error {
  color: red;
  display: block;
}

.show-values {
  display: flex;
  justify-content: space-between;
}
</style>
