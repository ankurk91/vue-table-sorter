<template>
  <th @click="onClick" :class="{'v-sortable': isSortable}">
    <template v-if="isSorted">
      <svg
        width="16"
        height="16"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
        v-show="store.sortOrder === 'desc'">
        <path
          fill="#444"
          d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"/>
      </svg>
      <svg
        width="16"
        height="16"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
        v-show="store.sortOrder === 'asc'">
        <path
          fill="#444"
          d="M279 224H41c-21.4 0-32.1-25.9-17-41L143 64c9.4-9.4 24.6-9.4 33.9 0l119 119c15.2 15.1 4.5 41-16.9 41z"/>
      </svg>
    </template>
    <svg
      v-show="isSortable && !isSorted"
      width="16"
      height="16"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512">
      <path
        fill="#888"
        d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"/>
    </svg>
    <slot/>
  </th>
</template>

<script>
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'TableHeaderColumn',
  props: {
    column: {
      type: String,
      required: false,
      default: null,
    }
  },
  inject: ['store'],
  data() {
    return {}
  },
  methods: {
    onClick() {
      if (!this.isSortable) {
        return;
      }
      this.store.sortBy = this.column
      this.store.sortOrder = this.store.sortOrder === 'desc' ? 'asc' : 'desc'
    }
  },
  computed: {
    isSorted() {
      return this.store.sortBy === this.column
    },
    isSortable() {
      return !!this.column
    }
  }
})
</script>

<style>
th.v-sortable {
  cursor: pointer;
}
</style>
