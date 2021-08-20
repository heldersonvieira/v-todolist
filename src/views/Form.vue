<template>
    <form class="form">
        <h3>{{ formType }} item</h3>
        <input
            type="text"
            placeholder="Ex. Lavar o carro"
            v-model="form.subject"
        />
        <textarea
            v-model="form.description"
            placeholder="Ex. Levar o carro no lava jato Mó limpeza"
        ></textarea>
        <div>
            <Button title="Salvar" class="save" @click.prevent="saveItem" />
        </div>
    </form>
</template>

<script>
import Button from '@/components/Button.vue';

export default {
    name: 'Form',

    components: {
        Button,
    },

    data() {
        return {
            form: { subject: '', description: '' },
            formType: 'Cadastrar',
        };
    },

    async created() {
        if (this.$route.params.index !== undefined) {
            try {
                this.formType = 'Editar';
                const list = await this.$firebase.readList('list');
                this.form = list[this.$route.params.index];
            } catch (error) {
                console.log('Não foi possivel carregar a tarefa.');
            }
        }
    },

    methods: {
        async saveItem() {
            if (this.formType == 'Editar') {
                const index = this.$route.params.index;

                try {
                    const id = await this.$firebase.getId('list', index);
                    await this.$firebase.updateItem('list', id, this.form);
                    this.$router.push({ name: 'list' });
                } catch (error) {
                    console.log('Não foi possível atualizar o item.', error);
                }
            } else {
                try {
                    await this.$firebase.createItem(this.form);
                    this.$router.push({ name: 'list' });
                } catch (error) {
                    console.log('Não foi possível salvar o item.', error);
                }
            }
        },
    },
};
</script>

<style scope>
.form {
    background-color: white;
    display: flex;
    flex-direction: column;
    grid-gap: 1rem;
    width: 90%;
    max-width: 700px;
    margin: 1rem auto 0;
    padding: 2rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
}

.form h3 {
    font-size: 1.3rem;
    color: var(--font-color);
}

.form input,
.form textarea {
    padding: 0.5rem;
    font: 1.05rem Ubuntu, Helvetica, Arial, sans-serif;
    color: var(--font-color);
    outline: none;
    border: 1px solid #c9c6c6;
    border-radius: 5px;
}

.form input:focus,
.form textarea:focus {
    border-color: var(--green-vue);
    box-shadow: 0 0 3px var(--green-vue);
}

input::placeholder,
textarea::placeholder {
    color: #c9c6c6;
}
.form textarea {
    resize: vertical;
}
</style>
