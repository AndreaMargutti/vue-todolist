const { createApp } = Vue

createApp({
    data() {
        return {
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
        }
    }
}).mount('#app')