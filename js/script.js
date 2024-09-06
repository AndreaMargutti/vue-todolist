const { createApp } = Vue

createApp({
    data() {
        return {
            newTodoContent: "",

            todoList: [
                {
                    text: 'fare la spesa',
                    done: true,
                },
                {
                    text: 'portare la macchina dal meccanico',
                    done: true,
                },
                {
                    text: 'visita psicologo',
                    done: false,
                },
                {
                    text: 'comprare un lanciafiamme',
                    done: false,
                },
                {
                    text: 'Completare esercizio di programmazione',
                    done: false,
                }
            ]
        }
    },

    methods: {
        removeItem(itemIndex) {
            this.todoList.splice(itemIndex, 1);
        },

        addItem(content) {
            this.todoList.push(
                {
                    text: content,
                    done: false,
                }
            )
            this.newTodoContent = "";
        },

        changeDone(index) {
            // ! Rendi la proprietà "done" dei singoli oggetti l'opposto di se stessa
            this.todoList[index].done = !this.todoList[index].done
        }
    }
}).mount('#app')