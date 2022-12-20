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
        v-model="form_values.state[`${value.title}`]"
        @input="validate(key, value.validation, $event)"
      />
      <textarea
        v-if="value.element === 'textarea'"
        :name="key"
        id=""
        cols="30"
        rows="5"
        :placeholder="value.placeholder"
        v-model="form_values.state[`${value.title}`]"
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
      <span class="error" v-if="error[`${key}`]"> {{ error[key] }}</span>
    </div>

    <button type="submit">Submit</button>
  </form>

  <div class="show-values">
    <div>
      <h2>Form Values</h2>
      <pre>{{ form_values.state }}</pre>
    </div>
    <div>
      <h2>Validated Values</h2>
      <pre>{{ validated_form_values.state }}</pre>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref, watch } from "vue";
import { schemas } from "./schemas";

const form = ref(null);

let form_values = reactive({ state: {} });
let validated_form_values = reactive({ state: {} });
let error = reactive({});

const data = reactive({
  json_schema: schemas[0],
});

onMounted(() => {
  loadValuesFromSchema();
});

function validate(key, validation, $event) {
  if (validation.required && $event.target.value === "") {
    error[key] = "This field is required";
    return;
  }
  if (
    validation.minLength &&
    $event.target.value.length < validation.minLength
  ) {
    error[
      key
    ] = `This field must be at least ${validation.minLength} characters long`;
    return;
  }
  if (
    validation.maxLength &&
    $event.target.value.length > validation.maxLength
  ) {
    error[
      key
    ] = `This field must be at most ${validation.maxLength} characters long`;
    return;
  }
  validated_form_values.state[key] = $event.target.value;
  error[key] = "";
}

const loadValuesFromSchema = () => {
  for (const i in schemas[0].details) {
    form_values.state[schemas[0].details[i].title] =
      schemas[0].details[i].placeholder;

      validated_form_values.state[i] =
      schemas[0].details[i].placeholder;
  }
};

const submit = (e) => {
  console.log(form_values.state);
  console.log(validated_form_values.state);
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
