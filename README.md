# pagination


Installation / Download
-----------------------
just download pagination.js from the git repo.


Quick Start
------------

```
<div id="pagination"></div>
```

```
var pagination = document.getElementById('pagination');
Pagination.Init( pagination, {
        totalPageSize: 21,  // total page size 
        sizePerPage: 5,     // size per page
        currentPage: 1,     // selected page index
        size: 20            // row size per page (optional)
    }
)
```