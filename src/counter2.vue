    <template>
      <div>
      <p>一般commit 放字串 + 有帶參數 給 mutations</p>
      <p>{{count2}}</p>
      <button @click="add2">+25</button>
      <p>一般commit 放物件 + 有帶參數 給 mutations</p>
      <p>{{count3}}</p>
      <button @click="add3">+25</button>
      </div>
    </template>

    <script>
    import {mapState} from "vuex"
    export default{
      computed:{
        ...mapState(["count2","count3"])
      },
      methods:{
        add2(){
          this.$store.commit("counter2",25)
        },
        add3(){
          this.$store.commit({
            type:"counter3",
            num:25
          })
        }
      }
    }
    </script>
