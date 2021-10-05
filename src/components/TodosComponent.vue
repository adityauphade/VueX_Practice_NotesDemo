<template>
  <div class="notesPage">
    <h1>This is Todos</h1>
    <AddTodo />
    <div class="Notes">
      <div v-for="note in getNotes" v-bind:key="note.id" class="note">
        {{ note.id }} =>
        {{ note.title }}
        <i @click="deleteNote(note.id)" class="fas fa-trash"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AddTodo from "./AddTodo.vue";

export default {
  name: "TodosComponent",

  components: {
    AddTodo,
  },

  computed: mapGetters(["getNotes"]),

  methods: {
    ...mapActions(["fetchNotes", "deleteNote"])
  },
  created() {
    this.fetchNotes();
  },
};
</script>

<style lang="scss" scoped>
.notesPage {
  background: #e8f7f0;
  //   background: #000;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  width: 90%;
  padding: 2rem 0;
  margin: auto;
  .Notes {
    display: grid;
    width: 100%;
    box-sizing: border-box;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    padding: 2rem;
    .note {
      display: flex;
      background: #5cc292;
      min-height: 100px;
      border-radius: 0.25rem;
      padding: 1rem;
      justify-content: space-between;
      i{
          cursor: pointer;
      }
    }
  }
}
</style>
