<template>
    <nav class="navbar">
        <div class="container">
            <div class="navbar-brand">
                <router-link class="navbar-item logo" to="/">
                    <i class="fas fa-hotdog"></i>&nbsp;<strong>Prototype</strong>
                </router-link>
            </div>
            <div class="navbar-end">
                <router-link class="navbar-item" to="/">
                    <strong>Home</strong>
                </router-link>
                <router-link class="navbar-item" to="/about">
                    <strong>About</strong>
                </router-link>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style lang="scss" scoped>
@import "node_modules/bulma/sass/utilities/initial-variables";

.logo, .navbar-item {
    color: $white;
}
</style>
