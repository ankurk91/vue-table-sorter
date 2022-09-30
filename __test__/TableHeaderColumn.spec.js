import {mount} from '@vue/test-utils';
import TableHeaderColumn from '../src/js/TableHeaderColumn.vue';
import TableHeader from '../src/js/TableHeader.vue';

describe('TableHeaderColumn component', () => {
  let wrapper;

  beforeEach(() => {
    const thColumn = {
      render(h, context) {
        return h(TableHeaderColumn,
          {
            props: {
              column: 'name',
            }
          },
          [
            h('span', 'Name')
          ])
      }
    };

    wrapper = mount(TableHeader, {
      propsData: {
        sortBy: 'email',
        sortOrder: 'desc',
      },
      slots: {
        default: thColumn
      },
    });
  });

  test('renders with props and slots', async () => {
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.$el).toMatchSnapshot();
    expect(wrapper.find('span').exists()).toBe(true);
    expect(wrapper.find('th').classes('v-sortable')).toBe(true);
    wrapper.destroy();
  });

  test('updates store on click', async () => {
    wrapper.find('th').trigger('click')

    await wrapper.vm.$nextTick();

    expect(wrapper.vm.store.sortBy).toEqual('name');
  });

});
