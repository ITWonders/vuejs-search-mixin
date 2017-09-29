/*
Usage:
- import `import iwSearchFilter from "mixins/iw-search-filter.js";`
- delcare in mixin `iwSearchFilter`
- declare the html search bar
```
        .input-group.mb-2
            span#filter-res.input-group-addon Search
            input.form-control(
                v-model="searchInput",
                @input="debouncedSearch",
                type='text',
                placeholder='', 
                aria-label='Filter result',
                aria-describedby='filter-res')
```
- v-for loop `tr(v-for="(group, idx) in filteredResult",`

- set the data, e.g. after async ajax get
```
        this.setSearchableData(res.data)
```
*/


export default {
    props: {},
    components: {
    },
    mixins: [],
    data: function () {
        return {
            searchInput: "",
            mydata: null,
            filteredResult: null,
            // default, search for name
            filterIter: ['name']
        };
    },
    watch: {
    },
    computed: {

    },
    methods: {
        setSearchableData: function (resData) {
            if (!Array.isArray(resData)) {
                this.mydata = Object.values(resData)
            } else {
                this.mydata = resData
            }
            this.filteredResult = this.mydata
        },
        filterResult: function () {
            // console.log("new search: " + this.searchInput)
            if (!this.searchInput || !this.mydata) {
                this.filteredResult = this.mydata
                return 
            }

            let res = this.mydata.filter((theItem) => {
                for (let prop of this.filterIter) {
                    if (theItem[prop].toLowerCase().indexOf(this.searchInput.toLowerCase()) >= 0) {
                        return true
                    }
                }
                return false
            })
            this.filteredResult = res
        },
        debouncedSearch: _.debounce(function() {
            this.filterResult()
        }, 200),
    },
    created: function () {},
    mounted: function () {},
}

