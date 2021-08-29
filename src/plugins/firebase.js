import { db } from '@/services/connectionFirebase.js';

export default {
    install: (app) => {
        app.config.globalProperties.$firebase = {
            async getId(docs, index) {
                const list = await db.collection(docs).get();

                return list.docs[index].id;
            },

            async createItem({ subject, description }) {
                try {
                    return await db.collection('list').add({
                        subject: subject,
                        description: description,
                    });
                } catch (error) {
                    throw new Error('Não foi possível salvar a tarefa');
                }
            },

            async readList(docs) {
                try {
                    const data = await db.collection(docs).get();
                    const list = data.docs.map((doc) => doc.data());
                    console.log(data.docs)
                    return list;
                } catch (error) {
                    throw new Error(`Não foi possível carregar as tarefas.`);
                }
            },

            async updateItem(docs, id, task) {
                const itemSelected = db.collection(docs).doc(id);

                return await itemSelected.update({
                    ...task
                });
            },

            async deleteItem(docs, id) {
                return await db.collection(docs).doc(id).delete();
            },
        }
    }
};
