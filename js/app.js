let keywordAr = [];
function Horns(item) {
    this.image_url = item.image_url;
    this.title = item.title;
    this.description = item.description;
    this.keyword = item.keyword;
    this.horns = item.horns;
    Horns.allArr.push(this)
}
Horns.allArr = [];

Horns.prototype.renderList = function () {
    let template = $('#item-templet').html();
    let html = Mustache.render(template, this);
    return html;
    ;

};
Horns.prototype.renderOptions = function () {
    if (keywordAr.includes(this.keyword)) {

    } else {
        $('select').append(`<option>${this.keyword}</option>`);
        keywordAr.push(this.keyword);

    }
}
function readJson(pageNum) {

    // const readJson = (pageNum) => {
    console.log(pageNum);
    Horns.allArr = [];
    keywordAr = [];
    const ajaxSettings = {
        method: 'get',
        dataType: 'json'
    };
    $.ajax(`../data/page-${pageNum}.json`, ajaxSettings)
        .then(data => {
            data.forEach(horns => {
                let item = new Horns(horns);
                $('ul').append(item.renderList());
                item.renderOptions();
                // item.title.toUpperCase();
                // item.toUpperCase();



            });

        });
}
$(document).ready(function () {



    readJson(1);
    $('select').on('change', function () {
        let selectedValue = $(this).val();
        $('ul').empty();
        for (let i = 0; i < Horns.allArr.length; i++) {
            if (Horns.allArr[i].keyword === selectedValue) {
                // Horns.allArr[i].renderList();
                $('ul').append(Horns.allArr[i].renderList());
            }
        }

    });
});

// lab03
// event for page1 button
$('#page1').on('click', function () {


    $('select').empty();
    $('ul').empty();
    readJson(1);
    Horns.allArr.forEach(item => {
        // item.renderList();
        // item.renderOptions();
        $('ul').append(item.renderList());


    })

})
//event for page2 button
$('#page2').on('click', function () {


    //call the render for page2 renderPage2();
    $('select').empty();
    // $('ul').hide();
    readJson(2);
    $('ul').empty();

    Horns.allArr.forEach(item => {

        // item.renderList();
        // item.renderOptions();
        $('ul').append(item.renderList());

    })
    //call the options2 renderOptions2();

})
// sort numbers
const sortByNumbers = (a, b) => { 
        return a.horns - b.horns;
    

}
//sort title
const sortByTitle = (a, b) => {
    //  title.toUpperCase();
    if (a.title < b.title) {
        return -1;
    }
    if (a.title == b.title) {
        return 0;
    }
    if (a.title > b.title) {
        return 1;
    }
};

//event for checkbox
$('#number').on('change',function() {

    $('ul').empty();
    // sortByNumbers(Horns.all);
    Horns.allArr.sort(sortByNumbers)
    Horns.allArr.forEach(item => {
      $('ul').append(item.renderList());
    });
})

$('#title').on('change', function () {
    // console.log('title')
    $('ul').empty();
    // sortByTitle(Horns.allArr);
    // Horns.allArr.toUpperCase().sort(sortByTitle)
    
    // Horns.allArr.sort(sortByTitle).toUpperCase()
    Horns.allArr.sort(sortByTitle)
    Horns.allArr.forEach(item => {
      $('ul').append(item.renderList());
    });
  });
  
  
// x='r';
// console.log(x.toUpperCase());
// let res = JSON.stringify(title, function() {
//     return title.toUpperCase()
//   });
// console.log(res());



