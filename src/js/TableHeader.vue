<template>
  <thead>
  <tr>
    <slot/>
  </tr>
  </thead>
</template>

<script>

export default {
  name: 'TableHeader',
  props: {
    sortBy: {
      type: String,
      required: true,
    },
    sortOrder: {
      type: String,
      required: true,
      validator: value => ['asc', 'desc'].includes(value?.toLowerCase())
    }
  },
  data() {
    return {
      store: {
        sortBy: this.sortBy,
        sortOrder: this.sortOrder,
      }
    }
  },
  provide() {
    return {
      store: this.store
    }
  },
  mounted() {
    this.$watch('store', this.onChange, {
      deep: true
    })
  },
  methods: {
    onChange(newValue) {
      this.$emit('sort', newValue)
    }
  },
}
</script>
