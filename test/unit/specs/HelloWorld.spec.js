import Vue from 'vue'
import Index from '@/pages/Index'

describe('Index.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Index)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .toEqual('Welcome to Your Vue.js App')
  })
})
