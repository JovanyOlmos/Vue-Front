<template>
    <div>
        Tabla
        <Table :route="'products'" :editFormRoute="'edit-product'" :deleteRoute="'product'" />
    </div>
</template>

<script>
import Table from '@/components/Table';

export default {
    name: 'ProductsList',
    components: {
        Table
    }
}
</script>