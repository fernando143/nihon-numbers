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
              <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0c68e51c-1c5b-45a9-a027-05d95fb2331d/dkxuk0-31c34793-a9aa-4946-b5c6-279d4e1461d8.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBjNjhlNTFjLTFjNWItNDVhOS1hMDI3LTA1ZDk1ZmIyMzMxZFwvZGt4dWswLTMxYzM0NzkzLWE5YWEtNDk0Ni1iNWM2LTI3OWQ0ZTE0NjFkOC5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.SFAQb6h-uPorP0bFB_XH7Jq4p109A8sXP194L1quVKs">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>Menu</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>

        <v-list class="pt-0" dense>
          <v-divider></v-divider>

          <v-list-tile
            v-for="item in items"
            :key="item.title"
            @click.stop="goTo(item.route)"
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
        { title: 'Home', route:'/', icon: 'home' },
        { title: 'Practicar', route:'/game', icon: 'spellcheck' },
        { title: 'Contacto', route:'/contact', icon: 'question_answer' }
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
    },
    goTo(route) {
      this.$router.push({path: route})
    }
  }
}
</script>
