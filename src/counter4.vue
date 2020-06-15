<template>
  <div>
    <p>{{count6}}</p>
    <button @click="add6">+25</button>
  </div>
</template>

<script>
import {mapState} from "vuex"
export default {
  computed:{
      ...mapState(["count6"])
    },
  methods:{
    add6(){
      this.$store.dispatch("counter6",25)
    },
  }
  }
</script>
