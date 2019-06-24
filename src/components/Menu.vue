<template>
      <v-navigation-drawer
        :value="getShowMenu"
        absolute
        temporary
        v-on:input="closemenu"
      >
        <v-list class="pa-1">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="https://randomuser.me/api/portraits/men/85.jpg">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>John Leider</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>

        <v-list class="pt-0" dense>
          <v-divider></v-divider>

          <v-list-tile
            v-for="item in items"
            :key="item.title"
            @click.stop="drawer = !drawer"
          >
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
</template>

<script>
export default {
    data () {
    return {
      items: [
        { title: 'Home', icon: 'dashboard' },
        { title: 'About', icon: 'question_answer' }
      ]
    }
  },
  computed: {
    getShowMenu: {
      get() {
        return this.$store.getters.getShowMenu
      }
    }
  },
  methods: {
    closemenu(e) {
      if(e === false) {
        this.$store.dispatch('closeMenu', false)
      }
    }
  }
}
</script>
