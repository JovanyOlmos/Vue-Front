<template>
    <div>
        Formulario
        <Form :route="'products'" :submitRoute="'product'"/>
    </div>
</template>

<script>
import Form from '@/components/Form';

export default {
    name: 'ProductAdd',
    components: {
        Form
    },
}
</script>