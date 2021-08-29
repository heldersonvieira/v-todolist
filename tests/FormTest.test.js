import { mount } from '@vue/test-utils'
import FormTest from './FormTest.vue'

const wrapper = mount(FormTest)

describe('FormTest.vue', () => {
    it('SHOULD render informed value', async () => {
        const input = wrapper.find('input')

        await input.setValue('test@email.com')
        
        expect(input.element.value).toBe('test@email.com')
    })

    it('SHOULD triggering event', async () => {
        await wrapper.find('button').trigger('click')

        expect(wrapper.emitted()).toHaveProperty('submit')
    })

    it('emit the value input', async () => {
        await wrapper.find('input').setValue('my@email.com')
        await wrapper.find('button').trigger('click')

        // o valor returnado pelo evento submit é um array com dois itens,
        // porque no primeiro teste dessa suite setamos também um e-mail.
        expect(wrapper.emitted('submit')[1][0]).toBe('my@email.com')
    })
})
