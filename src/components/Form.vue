<template>
    <div>
        <form novalidate v-on:submit.prevent="submit()">
            <div class="field" v-for="(field, index) of fields" :key="index">
                <label v-if="field?.type != 'id'" style="margin-right: 10px;">{{field?.name.charAt(0).toUpperCase() + field?.name.slice(1)}}</label>
                <input v-if="field?.type != 'id'" :type="field?.type" :name="field?.name" v-model="formData[field.name]">
            </div>
            <input type="submit" value="Enviar">
        </form>
    </div>
</template>

<script>
import http from '@/services/http.service';

export default {
    name: 'Form',
    props: {
        route: { type: String, default: ''},
        submitRoute: { type: String, default: ''},
        editId: null,
        singleItemRoute: String
    },
    data() {
        return {
            fields: [],
            formData: {}
        }
    },
    beforeCreate() {
        http.get(this.route + "/metadata")
        .then(response => {
            this.fields = response?.data;
            if(this.editId != null) {
                http.get(this.singleItemRoute + "?id=" + this.editId)
                    .then(response => {
                        this.fields.forEach(element => {
                            this.formData[element?.name] = response?.data[element?.name];
                        });
                    })
                    .catch(err => {
                        console.log(err);
                    })
            } else {
                this.fields.forEach(element => {
                if(element?.type == "text")
                    this.formData[element?.name] = "";
                if(element?.type == "number")
                    this.formData[element?.name] = 0;
            });
            }
        })
        .catch(err => {
            console.log(err);
        });
    },
    methods: {
        submit() {
            if(this.validations()) {
                http.post(this.submitRoute, this.formData)
                .then(response => {
                    console.log(response);
                    this.$router.go(-1);
                })
                .catch(err => {
                    console.log(err)
                });
            } else {
                console.log("No guardar")
            }
        },
        validations() {
            let isValid = true;
            this.fields.forEach(element => {
                if(element.type == 'text' && !(this.formData[element.name].length > 2)) {
                    isValid = false;
                }
                if(element.type == 'number' && !(this.formData[element.name] > 0)) {
                    isValid = false;
                }
            });
            return isValid;
        }
    }
}
</script>

<style>
.field {
    margin: 10px;
    display: grid;
    grid-template-columns: 10rem 1fr;
}
</style>