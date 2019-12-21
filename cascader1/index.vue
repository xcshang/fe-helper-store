<template>
    <Cascader :data="FEHPVBdata" v-model="FEHPVBvalue"></Cascader>
</template>
<script>
    export default {
        data () {
            return {
                FEHPVBvalue: ['jiangsu', 'nanjing'],
                FEHPVBdata: [{
                    value: 'beijing',
                    label: '北京',
                    children: [
                        {
                            value: 'gugong',
                            label: '故宫'
                        }
                    ]
                }, {
                    value: 'jiangsu',
                    label: '江苏',
                    children: [
                        {
                            value: 'nanjing',
                            label: '南京',
                        }
                    ],
                }]
            }
        }
    }
</script>
