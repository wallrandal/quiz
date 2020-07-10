<template>
    <div>
        <h3>Some User Details</h3>
        <p>
            User loaded has ID: {{id}}
        </p>
        <router-link tag="button" class="btn btn-primary" :to="link">Edit user</router-link>
    </div>
</template>
<script>
export default {
    props: {
        id: {
            type: String, 
            default: '1', 
        }
    },
    data () {
        return {
            link: {
                name: 'userEdit', 
                query: { locale: 'en', q: 100 },
                hash: '#data'
            },
        };
    }
}
</script>