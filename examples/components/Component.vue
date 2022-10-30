<template>
  <div class="card mb-3">
    <div class="card-body">
      <h4 class="card-title">Table example</h4>

      <table class="table table-bordered table-hover">
        <table-header :sort-order="this.params.sortOrder" :sort-by="this.params.sortBy" @sort="onSort">
          <th-column column="name">
            Name
          </th-column>
          <th-column column="email">
            Email
          </th-column>
          <th-column column="joined_at">
            Joined
          </th-column>
          <th-column column="id">
            <template #before>
              <div class="custom-control custom-checkbox d-inline-block">
                <input type="checkbox" class="custom-control-input" id="select-all">
                <label class="custom-control-label" for="select-all"></label>
              </div>
            </template>
            Selection
          </th-column>
          <th-column class="text-center">
            Actions
          </th-column>
        </table-header>
        <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>
            {{ item.name }}
          </td>
          <td>
            {{ item.email }}
          </td>
          <td>
            {{ item.joined_at.toLocaleDateString() }}
          </td>
          <td>
            <div class="custom-control custom-checkbox d-inline-block">
              <input type="checkbox" class="custom-control-input" :id="`select-all-${item.id}`">
              <label class="custom-control-label" :for="`select-all-${item.id}`">Select</label>
            </div>
          </td>
          <td class="text-center">
            <button class="btn btn-sm btn-outline-danger">Trash</button>
          </td>
        </tr>
        </tbody>
      </table>
      <div class="border p-4">
        <code>{{ params }}</code>
      </div>
    </div>
  </div>
</template>

<script>
import {TableHeader, TableHeaderColumn as ThColumn} from '../../src/index';

export default {
  data() {
    return {
      items: [],
      params: {
        sortBy: 'name',
        sortOrder: 'desc',
      }
    }
  },
  components: {
    TableHeader,
    ThColumn
  },
  created() {
    this.seedItems()
  },
  methods: {
    seedItems() {
      for (let i = 0; i < 5; i++) {
        this.items.push(this.fakeItem(i))
      }
    },
    fakeItem(i) {
      return {
        id: i,
        name: 'A Z',
        email: `ABZ+${i}@example.com`,
        joined_at: new Date(),
      }
    },
    onSort(params) {
      console.log({params});
      this.params = params;

      //todo make ajax call to api
    }
  }
}
</script>
