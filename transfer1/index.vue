<template>
    <Transfer
        filterable
        :titles="['源目标', '目标']"
        :data="FEHPVBdata"
        :target-keys="FEHPVBKeys"
        @on-change="FEHPVBChange">
    </Transfer>
</template>
<script>
export default { 
    data(){
        return {
            FEHPVBdata: [
                {
                    key: 1,
                    label: 'v1'
                },
                {
                    key: 2,
                    label: 'v2',
                    disabled: true
                }
            ],
            FEHPVBKeys: []
        }
    },
    methods: {
        FEHPVBChange (newTargetKeys, direction, moveKeys) {
            this.FEHPVBKeys = newTargetKeys;
        }
    }
}
</script>
