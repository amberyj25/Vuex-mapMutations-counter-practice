<template>
  <div>
    <h1>在不同counter放入$store的mutations 的不同型態</h1>
    <h2>1.一般commit 給 mutations</h2>
    <counter1></counter1>
    <h2>2.commit 的不同格式+ 有帶參數 給 mutations</h2>
    <counter2></counter2>
    <h2>3.mapMutation 的不同格式+ 有帶參數 給 mutations</h2>
    <counter3></counter3>
    <h2>4.actions 通常用在取得API,此處只是使用方法,沒有取API</h2>
    <counter4></counter4>
    <h2>5.mapGetter 的不同格式+ 有帶參數 給 mutations</h2>
    <counter5></counter5>
  </div>
</template>

<script>
import counter1 from './counter1.vue'
import counter2 from './counter2.vue'
import counter3 from './counter3.vue'
import counter4 from './counter4.vue'
import counter5 from './counter5.vue'
export default{
  components:{
    counter1,
    counter2,
    counter3,
    counter4,
    counter5
  }
}
</script>