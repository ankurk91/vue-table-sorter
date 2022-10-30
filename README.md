# Vue table sorter component

[![downloads](https://badgen.net/npm/dt/vue-table-sorter)](https://npm-stat.com/charts.html?package=vue-table-sorter&from=2022-01-01)
[![npm-version](https://badgen.net/npm/v/vue-table-sorter)](https://www.npmjs.com/package/vue-table-sorter)
[![github-tag](https://badgen.net/github/tag/ankurk91/vue-table-sorter)](https://github.com/ankurk91/vue-table-sorter/tags)
[![build](https://github.com/ankurk91/vue-table-sorter/workflows/build/badge.svg)](https://github.com/ankurk91/vue-table-sorter/actions)
[![license](https://badgen.net/github/license/ankurk91/vue-table-sorter)](LICENSE.txt)

Vue.js component for table sorting

## [Demo](https://ankurk91.github.io/vue-table-sorter/)

### Version matrix

| Vue.js version | Package version |                                                        Branch |
| :---           |:---------------:|--------------------------------------------------------------:| 
| 2.x            |       1.x       | [1.x](https://github.com/ankurk91/vue-table-sorter/tree/v1.x) |
| 3.x            |       2.x       |                                                        `main` |

## Installation

```bash
npm install vue-table-sorter@^2 
```

## Usage

This is an example with Bootstrap CSS and `axios`

```html

<template>
    <table class="table table-bordered table-hover">
        <table-header :sort-order="params.sortOrder" :sort-by="params.sortBy" @sort="onSort">
            <th-column column="name">Name</th-column>
            <th-column column="email">Email</th-column>
            <th-column column="joined_at">Joined</th-column>
            <th-column class="text-center">Actions</th-column>
        </table-header>
        <tbody>
        <tr v-for="item in items" :key="item.index">
            <td>{{ item.name }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.joined_at }}</td>
            <td class="text-center">
                <button class="btn btn-sm btn-outline-danger">Trash</button>
            </td>
        </tr>
        </tbody>
    </table>
</template>

<script>
    import 'bootstrap/dist/css/bootstrap.min.css';
    import {TableHeader, TableHeaderColumn as ThColumn} from 'vue-table-sorter';
    import 'vue-table-sorter/dist/vue-table-sorter.css';
    import axios from 'axios';

    export default {
        data() {
            return {
                items: [],
                params: {
                    sortOrder: 'desc',
                    sortBy: 'name',
                },
            }
        },
        components: {
            TableHeader,
            ThColumn
        },
        methods: {
            onSort(params) {
                console.log({params});
                this.params = params;
                this.fetch();
            },
            async fetch() {
                const response = await axios.get('https://localhost/api/items', {
                    params: this.params
                })
                this.items = response.data;
            }
        }
    }
</script>
```

## Install in non-module environments (without webpack)

```html
<!-- Vue js -->
<script src="https://cdn.jsdelivr.net/npm/vue@3.2"></script>
<!-- Lastly add this package -->
<script src="https://cdn.jsdelivr.net/npm/vue-table-sorter@2"></script>
<link href="https://cdn.jsdelivr.net/npm/vue-table-sorter@2/dist/vue-table-sorter.css" rel="stylesheet">
<!-- Init the components -->
<script>
    const app = Vue.createApp({});
    app.component('table-header', VueTableSorter.TableHeaderComponent);
    app.component('th-column', VueTableSorter.TableHeaderColumn);
</script>
```

## Run examples on your localhost

* Clone this repo
* Make sure you have node-js `>=18.12` and [pnpm](https://pnpm.io/) `>=7.12` pre-installed
* Install dependencies `pnpm install`
* Run webpack dev server `npm start`
* This should open the demo page in your default web browser

## Testing

* This package is using [Jest](https://github.com/facebook/jest)
  and [vue-test-utils](https://github.com/vuejs/vue-test-utils) for testing.
* Execute tests with this command `npm test`

## License

[MIT](LICENSE.txt) License
