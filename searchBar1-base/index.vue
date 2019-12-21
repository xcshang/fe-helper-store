<template>
    <div class="searchBar"> 
        
        <template v-for="item in searchElems">
            <span v-if="item.type==='slot'" class="searchBar-item">
                <span v-if="item.title" class="searchBar-title">{{item.title}}:</span>
                <slot 
                    :name="item.slotName"
                >
                </slot>
            </span>

            <!-- radio -->
            <span v-if="item.type==='radio'" class="searchBar-item">
                <span v-if="item.title" class="searchBar-title">{{item.title}}:</span>
                <RadioGroup v-model="cSerachValue[item.key]">
                    <Radio v-for="radio in item.items" :label="radio.value" :key="radio.value">
                        {{radio.label}}
                    </Radio> 
                </RadioGroup>
            </span>

            <!-- input -->
            <span v-if="item.type==='input'" class="searchBar-item">
                <span v-if="item.title" class="searchBar-title">{{item.title}}:</span>
                <Input 
                    v-model="cSerachValue[item.key]"
                    :clearable="item.clearable"
                    :placeholder="item.placeholder" 
                    :style="item.style" 
                />
            </span>

            <!-- select -->
            <span v-if="item.type==='select'" class="searchBar-item">
                <span v-if="item.title" class="searchBar-title">{{item.title}}:</span>
                <Select 
                    v-model="cSerachValue[item.key]" 
                    :clearable="item.clearable"
                    :multiple="item.multiple||false"
                    :style="item.style" 
                    :placeholder="item.placeholder"
                    :disabled="getSelectDisabled(item)"
                    @on-change="(v)=>{item.onChange && item.onChange(v)}"
                >
                    <Option v-for="option in item.items"  :value="option.value">{{option.label}}</Option>
                </Select>
            </span>

            <!-- date -->
            <span v-if="item.type==='date'" class="searchBar-item">
                <span v-if="item.title" class="searchBar-title">{{item.title}}:</span>
                <DatePicker 
                    v-model="cSerachValue[item.key]" 
                    :type="item.dateType||'date'" 
                    :format="item.format"
                    :placeholder="item.placeholder" 
                    :style="item.style"
                >
                </DatePicker>
            </span>
            
        </template>
        <div class="searchBar-btn">
            <Button type="primary" @click="search">搜索</Button>
            <a href="javascript:;" @click="reset" class="searchBar-reset-btn">重置</a>
        </div>
    </div>
</template>
<script>
    

    export default {
        name: 'SearchBar',
        props: {
            searchElems: {
                type: Array,
                default: () => []
            },
            serachValue: {
                type: Object,
                default: {}
            }
        },
        data () {
            return {
                defaultVaue: {},
                cSerachValue: {}
            };
        },
        
        methods: {
            
            getSelectDisabled(item){
                let key = item.key
                let linkage = item.linkage
                if(linkage && !this.cSerachValue[item.linkage]){
                    this.cSerachValue[key] = undefined
                    return true
                }
                return false
            },
            //获取搜索项目的值
            getValue(){
                return this.cSerachValue
            },
            //设置搜索项目的值
            setValue(v){
                this.cSerachValue = Object.assign(this.cSerachValue, v || {})
            },
            setDefaultValue(v){
                this.defaultVaue = Object.assign({}, v || {})
            },
            search(){
                this.$emit('search', this.cSerachValue)
            },
            reset(){
                this.cSerachValue = Object.assign({}, this.defaultVaue)
                this.$emit('reset', this.cSerachValue)
            }
        },
        mounted() {
            this.cSerachValue = Object.assign({}, this.serachValue)
            this.defaultVaue = Object.assign({}, this.serachValue)
        }
    };
</script>

<style lang="less" scoped>

    .searchBar{
        padding: 15px 0;
        .searchBar-item{
            display: inline-block;
            margin: 0 10px 10px 0;
        }
        .searchBar-title{
            display: inline-block;
            margin-right: 5px;
        }
        .searchBar-btn{
            display: inline-block;
            margin-left: 15px;
        }
        .searchBar-reset-btn{
            margin-left: 10px;
        }
        .ivu-date-picker,.ivu-input-wrapper,.ivu-select{
            display: inline-block;
            width: 150px;
        }
    }
    
</style>
