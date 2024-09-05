createApp({
    data() {
        return [
            {
                text: 'fare la spesa',
                isDone: true,
            },
            {
                text: 'portare la macchina dal meccanico',
                isDone: true,
            },
            {
                text: 'visita psicologo',
                isDone: false,
            },
            {
                text: 'comprare un lanciafiamme',
                isDone: false,
            },
            {
                text: 'Completare esercizio di programmazione',
                isDone: false,
            }
        ]
    },
    methods: {

    }
}).mount('#app')