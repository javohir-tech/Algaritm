<template>
    <header>
        <nav>
            <nuxt-link to="/">Home</nuxt-link><br>
            <nuxt-link to="/about">About</nuxt-link><br>
            <nuxt-link to="/posts">posts</nuxt-link><br>
            <nuxt-link to="/posts/birinckhi">posts 1</nuxt-link>
        </nav>
    </header>

    <main>
        <slot />
    </main>
</template>