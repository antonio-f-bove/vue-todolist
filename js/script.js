new Vue({
  el: "#app",
  data: {
    todo: [
      {
        text: "fare la spesa",
        done: false,
      },
      {
        text: "fare icompiti per boolean",
        done: false,
      },
      {
        text: "fare la nanna presto",
        done: false,
      },
    ],
  },
  methods: {
    closeItem: function(index) {
      this.todo.splice(index, 1);
    },
  },
});