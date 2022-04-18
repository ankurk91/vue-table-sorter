<template>
  <thead>
    <tr>
      <slot/>
    </tr>
  </thead>
</template>

<script>
import store from './tableStore';

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
      store: store
    }
  },
  provide() {
    return {
      store: this.store
    }
  },
  created() {
    this.store.sortBy = this.sortBy
    this.store.sortOrder = this.sortOrder
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
