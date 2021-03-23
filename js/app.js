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
    $('ul').append(`<li><img src=${this.image_url}></li><div>${this.title}</div><p>${this.description}</p>
    
    `);

};
Horns.prototype.renderOptions = function () {
    if (keywordAr.includes(this.keyword)) {

    }else{
        $('select').append(`<option>${this.keyword}</option>`);
        keywordAr.push(this.keyword);
        
    }
}
$(document).ready(function () {
    const ajaxSettings = {
        method: 'get',
        dataType: 'json'
};
Horns.prototype.readJson=function(pageNum) {
    

// const readJson = (pageNum) => {
    console.log(pageNum);
$.ajax(`../data/page-${pageNum}.json`, ajaxSettings)
 .then(data => {
    data.forEach(horns => {
    let item = new Horns(horns);
    item.renderList();
    item.renderOptions();
    
    
    
  });

});}
Horns.prototype.readJson(1);
$('select').on('change', function () {
    let selectedValue = $(this).val();
    $('ul').empty();
    for (let i = 0; i < Horns.allArr.length; i++) {
            if (Horns.allArr[i].keyword === selectedValue) {
                Horns.allArr[i].renderList();
            }
        }

    });
});

// lab03
// event for page1 button
$('#page1').on('click', function (event) {
    event.preventDefault();
    console.log('hi');
    $('select').empty();
    Horns.allArr.forEach(item=>{
        $('ul').empty();
        item.readJson(1);
        item.renderList();
        item.renderOptions();
        

    })

    // empty the option to render it $('select').empty();
    // Horns.prototype.readJson(1);
    // item.renderList();
    // item.renderOptions();

})
//event for page2 button
$('#page2').on('click', function (event) {
    event.preventDefault();
    console.log('hello');

    //call the render for page2 renderPage2();
    $('select').empty();
    // $('ul').hide();

    Horns.allArr.forEach(item=>{
        
        $('ul').empty();
        item.readJson(2);
        item.renderList();
        item.renderOptions();
        
    })
    //call the options2 renderOptions2();

})

