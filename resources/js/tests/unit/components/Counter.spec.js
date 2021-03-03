import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Counter from '../../../components/Counter.vue';
import { state, mutations } from '../../../store';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Counter', () => {
  it('shows its count', () => {
    const store = new Vuex.Store({
      state,
      mutations,
    });
    const component = shallowMount(Counter, {
      store,
      localVue,
    });

    expect(component.find('.counter-count').text()).toBe('0');
  });

  it('shows the button to count up', () => {
    const store = new Vuex.Store({
      state,
      mutations,
    });
    const component = shallowMount(Counter, {
      store,
      localVue,
    });

    expect(component.find('.counter-button-count').text()).toBe('Count');
  });

  it('increases its count when the button is clicked', async () => {
    const store = new Vuex.Store({
      state,
      mutations,
    });
    const component = shallowMount(Counter, {
      store,
      localVue,
    });

    expect(component.find('.counter-count').text()).toBe('0');

    await component.find('.counter-button-count').trigger('click');

    expect(component.find('.counter-count').text()).toBe('1');
  });
});
