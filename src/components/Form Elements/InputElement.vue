<template>
  <input
    v-if="value.element === 'input'"
    :type="value.type"
    :name="name"
    :placeholder="value.placeholder"
    :value="data[name]"
    @input="inputEvent(name, value.validation, $event)"
  />
</template>
<script setup>
const emit = defineEmits(["validate"]);

function inputEvent(name, validation, event) {

  emit("validate", {name, validation, event});
}

const { value, data, name } = defineProps({
  value: {
    required: true,
  },
  data: {
    required: true,
  },
  name: {
    required: true,
  },
});
</script>
