<template>
  <form action="" @submit.prevent="submit" ref="form">
    <h2>{{ data.json_schema?.title }}</h2>

    <div v-for="(value, key) in data.json_schema.details" :key="key">
      <label :for="key">{{ value.title }}:</label>

      <input
        v-if="value.element === 'input'"
        :type="value.type"
        :name="key"
        :placeholder="value.placeholder"
        :value="form_values.state[key]"
        @input="validate(key, value.validation, $event)"
      />
      <textarea
        v-if="value.element === 'textarea'"
        :name="key"
        cols="30"
        rows="5"
        :placeholder="value.placeholder"
        :value="form_values.state[key]"
        @input="validate(key, value.validation, $event)"
      ></textarea>
      <select
        v-if="value.element === 'select'"
        :name="key"
        v-model="form_values.state[`${value.title}`]"
        :required="value.validation?.required"
      >
        <option v-for="option in value.options" :value="option" :key="option">
          {{ option }}
        </option>
      </select>
      <span class="error" v-if="errors[`${key}`]"> {{ errors[key] }}</span>
    </div>

    <button type="submit">Submit</button>
  </form>
</template>

<script >
export default {
  name: "Form",
};
</script>

<script setup >
import { onMounted, reactive } from "vue";

let form_values = reactive({ state: {} });
let validated_values = reactive({ state: {} });
let errors = reactive({});

const { schemas } = defineProps({
  schemas: {
    type: Array,
    required: true,
  },
});

const data = reactive({
  json_schema: schemas[0],
});

onMounted(() => {
  loadValuesFromSchema();
});

const loadValuesFromSchema = () => {
  for (const i in schemas[0].details) {
    form_values.state[i] = schemas[0].details[i].placeholder;
  }
};

function validate(key, validation, $event) {
  form_values.state[key] = $event.target.value;

  if (validation.required && $event.target.value === "") {
    errors[key] = "This field is required";
    return;
  }
  if (
    validation.minLength &&
    $event.target.value.length < validation.minLength
  ) {
    errors[
      key
    ] = `This field must be at least ${validation.minLength} characters long`;
    return;
  }
  if (
    validation.maxLength &&
    $event.target.value.length > validation.maxLength
  ) {
    errors[
      key
    ] = `This field must be at most ${validation.maxLength} characters long`;
    return;
  }
  errors[key] = "";
}

const submit = (e) => {
  for (const error in errors) {
    if (errors[error] !== "") {
      return;
    }
  }
  validated_values.state = form_values.state;

  console.log(validated_values.state);
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
