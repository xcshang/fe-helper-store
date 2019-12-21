<template>
    <Button @click="FEHPVBvalue = true" type="primary">Open</Button>
    <Drawer title="Drawer" :closable="false" v-model="FEHPVBvalue">
        <p>Some contents...</p>
    </Drawer>
</template>
<script>
    export default {
        data () {
            return {
                FEHPVBvalue: false
            }
        }
    }
</script>
