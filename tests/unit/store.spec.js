import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import Vue from "vue"
import Vuetify from "vuetify"
import Vuex from 'vuex'
import Header from '@/components/Header.vue'
import Menu from '@/components/Menu.vue'

Vue.use(Vuetify);
const localVue = createLocalVue()
localVue.use(Vuex)

describe('Actions.vue', () => {
    let actions, store
    beforeEach(() => {
        actions = {
            setNumbers: jest.fn(),
            uknowNumber: jest.fn(),
            clear: jest.fn(),
            closeMenu: jest.fn(),
            openMenu: jest.fn()
        }
        store = new Vuex.Store({
            actions
        })
    })
    it('dispatches "openMenu" when icon menu is clicked', () => {
        const wrapper = mount(Header, { store, localVue })
        const iconMenu = wrapper.find('button')
        iconMenu.trigger('click')

        expect(actions.openMenu).toHaveBeenCalled()
    })
})