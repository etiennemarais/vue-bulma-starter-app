<template>
    <div class="about">
        <section class="hero is-medium">
            <div class="hero-head">
                <navbar />
            </div>
            <div class="hero-body"></div>
        </section>
        <div class="container">
            <article class="content">
                <section>
                    <h2 class="title is-2">About</h2>
                    <p>
                        I wanted to make a base application to aid in setup speed when I build prototypes for people. I
                        ended up duplicating the same parts over and over and wanted to share that with people.
                    </p>
                </section>
                <section>
                    <h2 class="title is-2">Features</h2>
                    <ul
                        <li>Extendable Bulma</li>
                        <li>Structured SCSS</li>
                        <li>Lazy Loaded Routes</li>
                        <li>Custom Service worker</li>
                        <li>Custom fonts</li>
                    </ul>
                </section>
            </article>
        </div>
    </div>
</template>

<script>
export default {
    name: 'About'
}
</script>

