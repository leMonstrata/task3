<template>
    <div class="container">
        <table class="table">
            <tbody>
            <tr>
                <th v-for="item in head" :key="item.id" @click="onFilterClick(id)">{{ item.value }}</th>
            </tr>
            <tr v-for="item in tableData" :key="item.id">
                <td v-for="item in item.values" :key="item">{{ item }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    props: {
        tableData: {
            type: Array,
            default: () => [],
        },
        head: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        onFilterClick(id) {
            this.$emit('on-fliter-click', id)
        }
    }
}
</script>