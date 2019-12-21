
<template>
    <FEHPVBSearchBar 
        :searchElems="FEHPVBsearchElems" 
        :serachValue="FEHPVBserachValue"
        @search="FEHPVBsearch"
        @reset="FEHPVBreset"
    >
    <span slot="slotSearch"><Input /></span>
    </FEHPVBSearchBar>
</template>
<script>
import FEHPVBSearchBar from '@feHelper/searchBar1-base/index.vue'
export default { 
    data(){
        return{
            FEHPVBsearchElems: [
                {
                    title: '业务选项',
                    key: 'business',
                    type: 'radio',
                    items: [
                        {label: '全部', value: 1}
                    ]
                },
                {
                    title: '自定slot',
                    type: 'slot',
                    slotName: 'slotSearch',
                },
                {
                    title: '所在区域',
                    key: 'cityId',
                    type: 'select',
                    items: [
                        {label: '全部', value: 1}
                    ]
                },
                {
                    key: 'idcName',
                    type: 'input',
                    title: '机房名称',
                    placeholder: '输入关键字进行搜索'
                }
            ],
            FEHPVBserachValue:{
                business: 1,
            }
        }
    },
    methods:{
        FEHPVBsearch(v){
            
        },

        FEHPVBreset(v){
            
        },
        
    },
    components:{
        FEHPVBSearchBar
    }
}
</script>

