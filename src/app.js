import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      todos: [
        {name: "Load the dishwasher", isPriority: false},
        {name: "Read Ethan a nighttime story", isPriority: true},
        {name: "Make a cup of tea", isPriority: false}
        ],
        newTodo: ""
    },
    methods: {
        saveNewTodo: function(){
            this.todos.push({
                name: this.newTodo,
                isPriority: false
            });
            this.newTodo = "";
        },
        makePriority: function(index){
            this.todos[index].isPriority = true;
        }
    }
    
  });
});