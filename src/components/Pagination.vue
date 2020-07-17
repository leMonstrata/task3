<template>
    <div class="paginatedData">
        <div v-for="number in count" :key="number" @click="onPageClick(number)"> {{ number }}</div>
    </div>
</template>

<style>
.paginatedData{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;   
}
.paginatedData > div {
    border: 1px solid black;
    padding: 5px;
    margin: 5px;
}
</style>

<script>
export default {
    props: {
        pageCount: {
            type: Number,
            default: 0
        },
        currentPage: {
            type: Number,
            default: 0
        }  
    },
    computed: {
        count() {
            const newArr = [];
            for (let i=1; i <= this.pageCount; i++) {
            newArr.push(i);
            }
            return newArr;
        } 
    },
    methods: {
        onPageClick(page) {
            this.$emit('on-page-click', page)
        }
    }
}
</script>