<template>
  <v-layout class="Contact">
    <v-flex>
      <v-card>
        <v-card-title primary-title>
          <v-avatar
            class="Contact__avatar"
            :tile="tile"
            :size="avatarSize"
            color="grey lighten-4"
          >
            <img src="../assets/profile700.jpg" alt="avatar">
          </v-avatar>
          <div>
            <h3 class="headline mb-0">Fernando Casabuena</h3>
            <div> Frontend Developer </div>
          </div>
        </v-card-title>
        <p class=" Contact__description subheading">Hola, me llamo Fernando, soy frontend developer, utilizo tecnologías con Vue.js y todo su ecosistema, tambien utilizo React.js, para el backend utilizo Firebase. Puedes ver mi linkedin y mi github en los siguientes enlaces.</p>
        <v-card-actions>
          <v-btn flat icon color="black" @click="goToPageExternal('linkedin')">
            <v-icon>fab fa-linkedin-in</v-icon>
          </v-btn>
          <v-btn flat icon color="black" @click="goToPageExternal('github')">
            <v-icon>fab fa-github</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  methods: {
    goToPageExternal(url) {
      if(url === 'linkedin') {
        window.open('https://www.linkedin.com/in/fernando-azarías/', '_blank');
      }

      if(url === 'github') {
      window.open('https://github.com/fernando143/', '_blank');
      }
    }
  }
}
</script>


<style scoped>
.Contact {
    margin-top: 50px;
    margin-left: 10px;
    margin-right: 10px;
}
.Contact__avatar {
  margin-right: 10px;
}
.Contact__description {
  padding-left: 16px;
  padding-right: 16px;
}
</style>
