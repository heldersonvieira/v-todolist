<template>
    <button v-bind="$attrs">{{ title }}</button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        title: {
            type: String,
            require,
        },
    },
};
</script>

<style scoped>
button {
    font: inherit;
    font-weight: bold;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 0.6rem 1rem;
    cursor: pointer;
    opacity: 0.8;
    transition: all 0.2s;
}

button:hover {
    opacity: 1;
}

.remove {
    color: rgb(248, 124, 124);
    border: 1px solid rgb(248, 124, 124);
    background: inherit;
}

.edit {
    background-color: var(--green-vue);
}

.save {
    background-color: var(--green-vue);
}

.cancel {
    background-color: #b3b3b3;
}
</style>
