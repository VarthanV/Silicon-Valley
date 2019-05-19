<template>

<div id="nav">
  <v-toolbar  color="green" >
      <v-toolbar-items class="hidden-sm-and-down">
         <v-btn flat to="/"> Pied Piper </v-btn>
      </v-toolbar-items>
    
    <v-spacer></v-spacer>
  </v-toolbar>

<router-view/>
</div>
</template>

<script>
import Home from './components/Home'

export default {
  name: 'App',
  components: {
    Home
  },
  data () {
    return {
      //
    }
  }
}
</script>
