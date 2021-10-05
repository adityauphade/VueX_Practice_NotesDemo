import axios from 'axios';

const state = {
    notes: []
}

const getters = {
    getNotes: (state) => state.notes
}

const actions = {
    async fetchNotes({commit}){
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos')

        commit('setNotes', response.data)
    },
    async addNote({commit}, title){
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {title})
        console.log(response.data)
        commit('newNote', response.data)
    },
    async deleteNote({commit}, id){
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        // console.log(response.data)
        commit('deletedNote', id)
    },
}

const mutations = {
    setNotes: (state, notesData) => state.notes = notesData,
    newNote: (state, noteData) => state.notes.unshift(noteData),
    deletedNote: (state, noteID) => state.notes = state.notes.filter((note) => note.id !== noteID)

}

export default{
    state, 
    getters,
    actions,
    mutations
}
