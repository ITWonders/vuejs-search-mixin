# Data
- your data can be array of JSON object or JSON. For example:
```
var ajax.data = [
        {'name': 'Ken', 'age': 30 },
        {'name': 'Cassandra', 'age': 18 },
]
```

# Usage:
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
- v-for loop `tr(v-if="filteredResult", v-for="(group, idx) in filteredResult",`

- set the data, e.g. after async ajax get
```
        this.setSearchableData(ajax.data)
```

# Option
To set the filter (by default, will filter on "name")
```
        this.filterIter = [ 'name', ]
```
