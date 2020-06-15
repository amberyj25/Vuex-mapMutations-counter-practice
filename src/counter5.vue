<template>
  <div>
    <p>getters內一般函式寫法</p>
    <p>{{counter7}}</p>
    <p>getters內用箭頭函式寫法</p>
    <p>{{counter8}}</p> 
  </div>
</template>

<script>
import {mapGetters} from "vuex"
export default{
  computed:{
    ...mapGetters(["counter7","counter8"]),
  }
}
</script>