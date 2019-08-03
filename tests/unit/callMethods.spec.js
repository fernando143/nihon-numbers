import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import Vue from 'vue'
import Vuetify from "vuetify"
import Header from '@/components/Header.vue'
import Menu from '@/components/Menu.vue'

Vue.use(Vuetify);

describe('Calls to methods', () => {
    let methods
    beforeEach(() => {
        methods = {
            closemenu: jest.fn()
        }

    })

    it('call method "closemenu" when overlay of menu is clicked', () => {
        const wrapper = mount(Menu, {
            methods
        })
        const aside = wrapper.find('aside')
        aside.trigger('click')

        expect(wrapper.vm.closemenu).toHaveBeenCalled()
    })


})