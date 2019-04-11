<template>
    <div class="homepage">
        <div class="cover-container d-flex h-100 p-3 mx-auto flex-column">
            <div class="background-image"></div>
            <header class="masthead mb-auto">
                <div class="inner">
                    <h2 class="masthead-brand"><span class="brand-light">soft</span><span
                            class="brand-medium">test</span></h2>
                    <nav class="nav nav-masthead justify-content-center">
                        <a class="nav-link active" href="#">Home</a>
                        <router-link class="nav-link" to="/registration">Registration</router-link>
                        <a class="nav-link" href="#">Contact</a>
                    </nav>
                </div>
            </header>

            <main role="main" class="inner cover">
                <h2 class="cover-heading"><span class="span-heading">Try to join us</span></h2>
                <span class="lead span-heading">
                SoftServe IT Academy offers courses for those who have basic technical knowledge.
                The selection process takes place in three stages: a technical test, English check, interview with an expert.</span>
                <p class="lead">
                    <a href="#" class="btn btn-lg btn-secondary">Learn more</a>
                </p>
            </main>

            <footer class="mastfoot mt-auto">
                <div class="inner">
                    <p>Project for <a href="https://career.softserveinc.com/en-us/technology">SoftServe IT Academy</a>,
                        by <a href="https://github.com/kh-026-webui-python/">kh-026-webui-python</a>.</p>
                </div>
            </footer>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomePage",
    }
</script>

<style scoped src="../assets/css/homepage.css">
</style>