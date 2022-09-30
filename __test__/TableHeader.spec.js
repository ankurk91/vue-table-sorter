import {mount} from '@vue/test-utils';
import TableHeader from '../src/js/TableHeader.vue';

describe('TableHeader component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(TableHeader, {
      propsData: {
        sortBy: 'name',
        sortOrder: 'desc',
      },
      slots: {
        default: '<th class="text-center">Actions</th>'
      }
    });
  });

  test('renders with props and slots', async () => {
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.$el).toMatchSnapshot();
    expect(wrapper.find('th').exists()).toBe(true);
    wrapper.unmount();
  });

  test('emits event on store change', async () => {
    wrapper.vm.store.sortBy = 'email';
    wrapper.vm.store.sortOrder = 'desc';

    await wrapper.vm.$nextTick();

    expect(wrapper.emitted().sort).toBeTruthy();
    expect(wrapper.emitted().sort[0][0]).toEqual({
      sortBy: 'email',
      sortOrder: 'desc'
    });
  })

});
