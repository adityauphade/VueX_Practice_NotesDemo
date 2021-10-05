<template>
  <div class="add">
      <form>
          <input class="inputBox" type="text" placeholder="Add Note..." v-model="title">
          <button class="inputBox" @click="addNote(title)">Submit</button>
      </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'AddTodo',

    methods: {
        ...mapActions(['addNote']),
    }
    
}
</script>

<style lang="scss" scoped>
    form{
        display: flex;
        .inputBox{
            padding: 1rem;
            margin: 2rem;
            border: solid 2px #000;
            border-radius: 0.5rem;
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            font-size: 1rem;
        }
        input[type='text']{
            flex: 9;
            background: #f6fffb;

        }
        button{
            flex: 1;
            background: #5cc292;
            cursor: pointer;
        }
    }
</style>