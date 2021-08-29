<template>
    <div class="list">
        <div v-for="(item, index) in list" :key="index" class="card">
            <h3>{{ item.subject }}</h3>
            <p>
                {{ item.description }}
            </p>
            <div class="button-group">
                <Button title="Editar" class="edit" @click="editItem(index)" />
                <Button
                    title="Excluir"
                    class="remove"
                    @click="showModal(item, index)"
                />
            </div>
        </div>

        <!--<Modal :class="['modal-overlay', hiddenModal ? 'hidden' : '']" 
            type="error" // aqui pode ser error ou confirm
        />-->
        <div :class="['modal-overlay', hiddenModal ? 'hidden' : '']">
            <div class="modal">
                <div class="content">
                    <img src="@/assets/img/attention.svg" alt="Atenção" />
                    <p>
                        Deseja realmente excluir a tarefa
                        <strong>{{ itemSelected.subject }}?</strong>
                    </p>
                </div>
                <div class="button-group">
                    <Button
                        title="Cancelar"
                        class="cancel"
                        @click="hiddenModal = !hiddenModal"
                    />
                    <Button
                        title="Excluir"
                        class="remove"
                        @click="removeItem()"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Button from '@/components/Button.vue';
// import Modal from '@/components/Modal.vue';
import { notify } from '@/services/notification.js';

export default {
    components: {
        Button,
        // Modal,
    },

    data() {
        return {
            list: [],
            itemSelected: '',
            indexItemSelected: '',
            hiddenModal: true,
        };
    },

    async created() {
        try {
            this.list = await this.$firebase.readList('list');
        } catch (error) {
            console.log(error);
        }
    },

    methods: {
        editItem(index) {
            this.$router.push({ name: 'form', params: { index } });
        },

        async removeItem() {
            const id = await this.$firebase.getId('list', this.indexItemSelected);
            await this.$firebase.deleteItem('list', id);
            this.list = await this.$firebase.readList('list');
            this.hiddenModal = !this.hiddenModal;
            notify(`Item ${this.itemSelected.subject} removido.`)
        },

        async showModal(item, index) {
            this.itemSelected = item;
            this.indexItemSelected = index;
            this.hiddenModal = !this.hiddenModal;
        },
    },
};
</script>

<style scoped>
.card,
.modal {
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

.card h3 {
    font-size: 1.3rem;
    text-transform: capitalize;
    text-align: justify;
}

.card p {
    font-size: 1.05rem;
    color: #a3a3a3;
}

.button-group {
    display: flex;
    justify-content: flex-end;
    grid-gap: 0.5rem;
}

.modal-overlay {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
}

.modal .content {
    display: flex;
    align-items: center;
    grid-gap: 2rem;
}

.modal img {
    width: 10%;
}

.hidden {
    opacity: 0;
    visibility: hidden;
}
</style>
