<template>
  <div>
    <TypeNav></TypeNav>
    <List></List>
    <Today></Today>
    <Rank></Rank>
    <Like></Like>
    <Floor></Floor>
    <Floor></Floor>
    <Brand></Brand>
  </div>
</template> 

<script>
import List from '@/views/Home/List'
import Today from '@/views/Home/Today'
import Rank from '@/views/Home/Rank'
import Like from '@/views/Home/Like'
import Floor from '@/views/Home/Floor'
import Brand from '@/views/Home/Brand'
  export default {
    name:'Home',
    components:{
      List,
      Today,
      Rank,
      Like,
      Floor,
      Brand
    }
  }
</script>

<style lang='less'>
  #nprogress .bar{
     background: red !important; 
  }
</style>