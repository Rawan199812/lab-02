$(document).ready(function () {
    const ajaxSettings = {
      method: 'get',
      dataType: 'json'
    };

$.ajax('../data/page-1.json', ajaxSettings)
.then(data => {
  data.forEach(item => {
      $('ul').append(`<li><img src=${item.image_url}></li>`);
      if (item.keyword.includes()) {
          
          $('select').append(`<option>${item.keyword}</option>`);
        }
    });
      
});
});
// $('select').on('click', 'option', function () {
    $('select').on('click', function() {
    const newArr=[];
    
    let selectedValue = $(this).val();
    console.log('hi');
    newArr.forEach(element=>{
        if (element.keyword===selectedValue) {
            newArr.push(element);
            console.log(newArr);
        }
    });
    for (let i = 0; i < newArr.length; i++) {
       
        $('ul').append(`<li><img src=${newArr[i].image_url}></li>`);
        
    }

    
});
