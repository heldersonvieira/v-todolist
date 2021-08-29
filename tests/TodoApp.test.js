import { mount } from '@vue/test-utils'
import TodoApp from './TodoApp.vue'


// para renderizar o texto
// test('renders a todo', () => {
//   const wrapper = mount(TodoApp)

//   const todo = wrapper.get('[data-test="todo"]')

//   expect(todo.text()).toBe('Learn Vue.js 3')
// })

describe('SHOULD create and to mark todo item as completed/uncompleted', () => {
    const wrapper = mount(TodoApp)
    
    it ('creates a todo', async () => {
        await wrapper.get('[data-test="new-todo"]').setValue('New todo')
        await wrapper.get('[data-test="form"]').trigger('submit')
        expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(2)
    })

    it ('completes a todo', async() => {
        await wrapper.get('[data-test="todo-checkbox"]').setValue(true)
        expect(wrapper.get('[data-test="todo"]').classes()).toContain('completed')
    })
})
