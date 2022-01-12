<template>
    <div>
        Editar
        <Form 
            :route="'products'" 
            :submitRoute="'product'" 
            :editId="$route.params.id" 
            :singleItemRoute="$route.params.editRoute"/>
    </div>
</template>

<script>
import Form from '@/components/Form';

export default {
    name: 'ProductEdit',
    components: {
        Form
    },
}
</script>