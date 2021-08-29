<template>
    <nav>
        <a id="profile" href="/profile">My Profile</a>
        <a v-if="admin" id="admin" href="/admin">Admin</a>
        <a id="user" href="/profile">My Profile</a>
        <ul v-show="shouldShowDropdown" id="user-dropdown">
            <!-- dropdown content -->
        </ul>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            admin: false,
            shouldShowDropdown: false
        }
    },
}
</script>