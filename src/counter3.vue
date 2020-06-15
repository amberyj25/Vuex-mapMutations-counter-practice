<template>
    <div>
      <h3>(一)mapMutations 放字串 ＋ 有帶參數</h3>
      <p>{{count4}}</p>
      <button @click="counter4">+25</button>
      <h3>（二）mapMutations 放物件 ＋ 有帶參數</h3>
      <p>{{count5}}</p>
      <button @click="add5">+25</button>
    </div>
</template>

<script>
import {mapState,mapMutations} from "vuex"
export default{
  computed:{
    ...mapState(["count4","count5"])
  },
  methods:{
    ...mapMutations(["counter4"]),
    ...mapMutations({
      add5:{
        type:"counter5",
        num:25
      }
    })
  },
}
</script>