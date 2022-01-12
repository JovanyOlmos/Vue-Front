<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th v-for="(header, index) of headers" :key="index">
                        {{header.name}}
                    </th>
                    <th>
                        Editar
                    </th>
                    <th>
                        Eliminar
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item of data" :key="item?.id">
                    <td v-for="(head, index) of headers" :key="index">
                        {{item[head?.name]}}
                    </td>
                    <td>
                        <router-link :to="{name: editFormRoute, params: {id: item?.id, editRoute: deleteRoute}}">Editar</router-link>
                    </td>
                    <td>
                        <span class="link-d" v-on:click="deleteItem(item.id)">Eliminar</span> 
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import http from '@/services/http.service';

export default {
    name: 'Table',
    props: {
        route: String,
        editFormRoute: String,
        deleteRoute: String
    },
    data() {
        return {
            headers: [],
            data: []
        }
    },
    methods: {
        deleteItem(id) {
            http.delete(this.deleteRoute, id)
                .then(response => {
                    this.reload();
                    console.log(response);
                })
                .catch(err => {
                    console.log(err);
                });
        },
        reload() {
            http.get(this.route + '/metadata')
            .then(response => {
                this.headers = response.data;
                http.get(this.route)
                    .then(response => {
                        this.data = response.data;
                    })
                    .catch(err => {
                        console.log(err);
                    });
            })
            .catch(err => {
                console.log(err);
            });
        }
    },
    beforeCreate() {
        http.get(this.route + '/metadata')
            .then(response => {
                this.headers = response.data;
                http.get(this.route)
                    .then(response => {
                        this.data = response.data;
                    })
                    .catch(err => {
                        console.log(err);
                    });
            })
            .catch(err => {
                console.log(err);
            });
    },
}
</script>

<style>
table {
    border: 1px solid #000;
    border-collapse: collapse;
}
th, td {
    border: 1px solid #000;
    border-collapse: collapse;
    padding: 1rem;
}
.link-d {
    color: red;
    cursor: pointer;
}
</style>