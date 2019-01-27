var Pagination = {
    code: '',

    // converting initialize data
    Extend: function(data) {
        data = data || {};
        Pagination.totalPageSize = data.totalPageSize || 5;
        Pagination.sizePerPage = data.sizePerPage || 5;
        Pagination.currentPage = data.currentPage - 1 || 0;
        Pagination.size = data.size || 20;
    },

    // add pages by number (from [startPageIndex] to [lastPageIndex])
    Add: function(startPageIndex, lastPageIndex) {
        for(var i = startPageIndex; i < lastPageIndex; i++ ) {
            if(i < Pagination.totalPageSize) {
                Pagination.code += '<a>' + (i + 1) + '</a>';
            }
        }
    },

    // change page
    Click: function() {
        console.log(this);
        Pagination.currentPage = +this.innerHTML - 1;
        Pagination.Start();
    },

    // previous page
    Prev: function() {
        Pagination.currentPage--;
        if (Pagination.currentPage < 0) {
            Pagination.currentPage = 0;
        }
        Pagination.Start();
    },

    // next page
    Next: function() {
        Pagination.currentPage++;
        if (Pagination.currentPage >= Pagination.totalPageSize) {
            Pagination.currentPage = Pagination.totalPageSize - 1;
        }
        Pagination.Start();
    },

    // binding pages
    Bind: function() {
        var a = Pagination.e.getElementsByTagName('a');
        for (var i = 0; i < a.length; i++) {
            if (+a[i].innerHTML - 1 === Pagination.currentPage) {
                a[i].className = 'active';
            }
            a[i].addEventListener('click', Pagination.Click, false);
        }
    },

    // write pagination
    Finish: function() {
        Pagination.e.innerHTML = Pagination.code;
        Pagination.code = '';
        Pagination.Bind();
    },

    // find pagination type
    Start: function() {
        var currentPageIndex =  Math.floor(Pagination.currentPage / Pagination.sizePerPage);
        var startPageIndex =  currentPageIndex * Pagination.sizePerPage;
        var lastPageIndex = startPageIndex + Pagination.sizePerPage;

        Pagination.Add(startPageIndex, lastPageIndex);
        Pagination.Finish();
    },

    // binding buttons
    Buttons: function(e) {
        var nav = e.getElementsByTagName('a');
        nav[0].addEventListener('click', Pagination.Prev, false);
        nav[1].addEventListener('click', Pagination.Next, false);
    },

    // create skeleton
    Create: function(e) {

        var html = [
            '<a>&#9668;</a>', // previous button
            '<span></span>',  // pagination container
            '<a>&#9658;</a>'  // next button
        ];

        e.innerHTML = html.join('');
        Pagination.e = e.getElementsByTagName('span')[0];
        Pagination.Buttons(e);
    },

    // init
    Init: function(e, data) {
        Pagination.Extend(data);
        Pagination.Create(e);
        Pagination.Start();
    }
};



/* * * * * * * * * * * * * * * * *
* Initialization
* * * * * * * * * * * * * * * * */

var init = function() {
    Pagination.Init(document.getElementById('pagination'), {
        totalPageSize: 21,  // total page size
        sizePerPage: 5,     // size per page
        currentPage: 1,    //  selected page index
        size: 20           // row size per page
    });
};


