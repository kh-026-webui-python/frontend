<template>
    <footer class="page-footer">
        <p>Project for <a href="https://career.softserveinc.com/en-us/technology">SoftServe IT Academy</a>,
            by <a href="https://github.com/kh-026-webui-python/">kh-026-webui-python</a>.</p>
        <p>
            <a href="#">Back to top</a>
        </p>
    </footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
    .page-footer {
        padding: 2.5rem 0;
        color: #999;
        text-align: center;
        background-color: #f9f9f9;
        border-top: .05rem solid #e5e5e5;
    }

    .page-footer p:last-child {
        margin-bottom: 0;
    }
</style>