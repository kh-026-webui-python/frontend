<template>
    <div>
        <b-form-file
                v-model="file"
                :state="Boolean(file)"
                placeholder="Choose a file..."
                drop-placeholder="Drop file here..."
        ></b-form-file>
        <div class="mt-3">Selected file: {{ file ? file.name : '' }}</div>

    </div>
</template>

<script>
    export default {
        name: "FileRegistration",
        data() {
            return {
                file: null,
                file2: null
            }
        }
    }


</script>

<style scoped>

</style>
