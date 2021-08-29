import { mount } from '@vue/test-utils'
import Nav from './Nav.vue'

let wrapper = mount(Nav) // renderizando e embrulhando o component 
describe('render component using v-if directive', () => {

    it('SHOULD renders profile link', () => {
        const profileLink = wrapper.get('#profile') // estamos implicitamente afirmando que o componente existe e guardando na variavel
        
        expect(profileLink.text()).toEqual('My Profile') // expectativa que o tesxto do componente seja igual ao 'My Profile'
    })

    it('NOT SHOULD renders admin link', () => {
        expect(wrapper.find('#admin').exists()).toBe(false)
    })

    it('SHOULD renders admin link', () => {
        // USING data
        // passando opções no mount()
        wrapper = mount(Nav, {
            data() {
                return {
                    admin: true
                }
            }
        })

        expect(wrapper.get('#admin').text()).toEqual('Admin')
    })
})

describe('renders component using v-show directive', () => {

    it('NOT SHOULD is visible', () => {
        wrapper = mount(Nav)
        const userLink = wrapper.get('#user-dropdown')
        expect(userLink.isVisible()).toBe(false)
    })
})

/*
v-if NÃO RENDERIZA O ELEMENTO SE A CONDIÇÃO FOR FALSA
v-show RENDERIZA O ELEMENTO, POREM NÃO É VISIVEL SE A CONDIÇÃO FOR FALSA
*/
