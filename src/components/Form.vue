<template>
  <form action="" @submit.prevent="submit" ref="form">
    <h2>{{ schema?.title }}</h2>

    <div v-for="(value, key) in schema.details" :key="key">
      <label :for="key">{{ value.title }}:</label>

      <input
        v-if="value.element === 'input'"
        :type="value.type"
        :name="key"
        :placeholder="value.placeholder"
        :value="data[key]"
        @input="validate(key, value.validation, $event)"
      />
      <textarea
        v-if="value.element === 'textarea'"
        :name="key"
        cols="30"
        rows="5"
        :placeholder="value.placeholder"
        :value="data[key]"
        @input="validate(key, value.validation, $event)"
      ></textarea>
      <select
        v-if="value.element === 'select'"
        :name="key"
        :value="data[key]"
        @input="validate(key, value.validation, $event)"
      >
        <option v-for="option in data[key]" :value="option" :key="option">
          {{ option }}
        </option>
      </select>
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

onMounted(() => {
  loadDataFromProps();
});

const loadDataFromProps = () => {
  form_values.state = data;
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
