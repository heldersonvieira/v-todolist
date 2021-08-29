<template>
    <header class="nav-bar">
        <div :class="['nav', isVisible ? 'visible' : '']">
            <router-link class="nav-item" to="/form" @click="showMenu"
                >Cadastro</router-link
            >
            <router-link class="nav-item" to="/" @click="showMenu"
                >Itens</router-link
            >
        </div>
        <div class="menu" @click="showMenu">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            isVisible: false,
        };
    },

    methods: {
        showMenu() {
            this.isVisible = !this.isVisible;
        },
    },
};
</script>

<style>
.nav-bar {
    overflow: visible;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    background: var(--font-color);
    color: white;
    overflow: visible;
    padding: 1rem 2rem;
}

.nav {
    display: flex;
    align-items: center;
    grid-gap: 1.5rem;
    font-weight: bold;
}

.nav .divider {
    width: 3px;
    height: 20px;
    background: #747474;
}

.nav a {
    font-size: 1.3rem;
    font-weight: bold;
    color: var(--green-vue);
    text-decoration: none;
}

.nav a.router-link-exact-active {
    color: white;
}

.menu {
    visibility: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    grid-gap: 0.4em;
    border-radius: 5px;
    width: 40px;
    height: 40px;
    cursor: pointer;
}

.menu span {
    width: 30px;
    height: 4.5px;
    background: #747474;
}

@media screen and (max-width: 950px) {
    .nav-bar {
        position: sticky;
        padding: 1rem;
        top: 0;
        z-index: 1;
    }

    .menu {
        visibility: visible;
    }

    .nav {
        visibility: hidden;
        flex-direction: column;
        grid-gap: 0;
        position: absolute;
        text-align: center;
        top: 72px;
        left: 0;
        width: 100%;
    }

    .nav-item {
        width: 100%;
        padding: 1rem;
        background: var(--font-color);
    }

    .visible {
        visibility: visible;
        transition: all 0.5s;
    }
}
</style>
