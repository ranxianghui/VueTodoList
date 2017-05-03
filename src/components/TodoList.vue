<template>
  <div class="todoList">
    <h1 v-text='title'></h1>
    <input v-model = "newItem" v-on:keyup.enter="addNew">
    <ul>
      <li v-for="item in items" v-bind:class= "{finished:item.isFinished}" v-on:click="toggleFinish(item)">
        {{item.lable}}
      </li>
    </ul>
  </div>
</template>

<script>
  import Store from '../store'
  export default {
    name: 'todoList',
    data : function () {
      return {
        title:'this is a to do list',
        items:Store.fetch(),
        newItem:''
      }
    },
    watch:{
      items:{
        handler: function(items){
          Store.save(items)
        },
        deep:true
      }
    },
    methods:{
      toggleFinish:function(item){
        console.log(item);
        item.isFinished = !item.isFinished;
      },
      addNew:function() {
        this.items.push({
          lable:this.newItem,
          isFinished:false
        });
        this.newItem=''
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.finished{ 
  text-decoration: underline;
}
</style>
