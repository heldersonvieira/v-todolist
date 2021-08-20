import { db } from '@/services/connectionFirebase.js';
// done
const getId = async (docs, index) => {
    const list = await db.collection(docs).get();

    return list.docs[index].id;
};
//done
const createItem = async ({ subject, description }) => {
    try {
        return await db.collection('list').add({
            subject: subject,
            description: description,
        });
    } catch (error) {
        console.log('Deu erro oh: ', error);
    }
};
// done
const readList = async (docs) => {
    try {
        const data = await db.collection(docs).get();
        const list = data.docs.map((doc) => doc.data());

        return list;
    } catch (error) {
        throw new Error('Não foi possível carregar as tarefas.');
    }
};
// done
const updateItem = async (docs, id, { subject, description }) => {
    const itemSelected = db.collection(docs).doc(id);

    return await itemSelected.update({
        subject,
        description,
    });
};
// done
const deleteItem = async (docs, id) => {
    return await db.collection(docs).doc(id).delete();
};

export { createItem, readList, updateItem, deleteItem, getId };
