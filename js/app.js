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
$.ajax('../data/page-1.json', ajaxSettings)
 .then(data => {
    data.forEach(horns => {
    let item = new Horns(horns);
    item.renderList();
    item.renderOptions();
  });
});
$('select').on('click', function () {
    let selectedValue = $(this).val();
    $('ul').empty();
    for (let i = 0; i < Horns.allArr.length; i++) {
            if (Horns.allArr[i].keyword === selectedValue) {
                Horns.allArr[i].renderList();
            }
        }

    });
});

