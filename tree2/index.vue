<template>
    <Tree :data="FEHPVBdata" show-checkbox></Tree>
</template>
<script>
    export default {
        data () {
            return {
                FEHPVBdata: [
                    {
                        title: 'parent 1',
                        expand: true,
                        children: [
                            {
                                title: 'parent 1-1',
                                expand: true
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>
