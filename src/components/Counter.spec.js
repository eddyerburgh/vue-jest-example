import { mount } from '@vue/test-utils'
import Counter from './Counter.vue'

describe('Counter.vue', () => {
  test('clicking button increments the counter value by 1', () => {
    const wrapper = mount(Counter)
    expect(wrapper.text()).toContain('counter: 0')
    wrapper.find('button').trigger('click')
  })
})
