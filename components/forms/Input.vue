<template>
  <ValidationProvider
    v-slot="{ errors }"
    mode="eager"
    :rules="rules"
    :name="name"
  >
    <div class="input">
      <label class="input__label" :for="name">{{ label }}</label>
      <input
        :id="name"
        type="text"
        :name="name"
        class="input__field"
        :value="value"
        :placeholder="placeholder"
        @input="$emit('input', $event.target.value)"
      >
      <span v-if="errors.length" class="input__error">{{ errors[0] }}</span>
    </div>
  </ValidationProvider>
</template>

<script>
import { ValidationProvider } from 'vee-validate'
export default {
  components: {
    ValidationProvider
  },
  model: {
    event: 'input'
  },
  props: {
    type: {
      type: String,
      default: 'text'
    },
    rules: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      required: true
    },
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      content: this.value
    }
  }
}
</script>

<style scoped lang="scss">
.input {
  display: grid;
  gap: 0.5rem;

  &__label, &__error {
    font-size: 0.875rem;
    font-weight: 700;
  }
  &__field {
    height: 2.8rem;
    border: 1px solid var(--border-color);
    border-radius: 4px;
    padding: 0 1rem;
    font-family: inherit;
    font-size: .875rem;
    &:focus {
      outline: none;
      border-color: var(--font-color)
    }
  }
  &__error {
    color: var(--primary-color)
  }
}
</style>
