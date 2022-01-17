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
    newItemText: "",
  },
  methods: {
    removeItem: function (index) {
      this.todo.splice(index, 1);
    },
    addItem: function () {
      const newItem = {
        text: this.newItemText,
        done: false
      };

      this.todo.push(newItem);
    },
  },
});
