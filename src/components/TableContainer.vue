<template>
    <div class="list">
        <Table :table-data="pageData" :head="head"></Table>
            <Paginator :page-count="pageCount" @on-page-click="onPageClick"></Paginator>
    </div>
</template>

<script>
import Table from './Table/Table';
import newBD from '../js/bd.json';
import Paginator from './Pagination';


export default {
    components: {
        Table,
        Paginator, 
    },
    data() {
        const tableData = [...newBD.coursesData].map((item) => ({
            id: item.id, 
            values: [item.name, item.date]            
            }))
        return {
            tableData,
            head: [{ id: 1, value: 'Название'}, { id: 2, value: 'Дата'}],
            pageData: tableData.slice(0, 3)
        }
    },
    computed: {
        pageCount() {
            return Math.ceil(this.tableData.length / 3);
        },
    },
    methods: {
        onPageClick(page){
           const start = (page - 1) * 3;
           const   end = start + 3;
           this.pageData = this.tableData.slice(start, end); 
        },
        onFilterClick(id) {
            this.pageData = this.pageData.sort();
            }
        }
    }
}
</script>