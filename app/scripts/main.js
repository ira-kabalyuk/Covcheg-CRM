jQuery(document).ready(function() {
    
    var td = $('.selectedTD');
    var tdHeight = td.outerHeight();
    var tdIndex = td.index();
    var rowIndex = td.parent().index();
    var headRowHeight = td.parents('tbody').children().first().outerHeight();
    var line = $('.line');
    line.css('top', headRowHeight + tdHeight * (rowIndex -1) + tdHeight / 2);  

    //datapicker
    /*$("#datepickerForm").datepicker();*/
    /*$( "#datepickerForm" ).datepicker( $.datepicker.regional[ "ru" ] );*/

    $('.js-datepicker').datepicker({
        altField: ".data-input", // селектор элемента куда будет выводится выбранная дата
        dateFormat: "d MM yy 'г.'",
    });    


    $('.add-rec-datepicker').datepicker({
         altField: ".add-rec-input", // селектор элемента куда будет выводится выбранная дата
         dateFormat: "dd.mm.yy"
     });

     $('.datepicker-1').datepicker({
      altField: ".input-1",
      dateFormat: "dd.mm.yy"
    });

    $('.datepicker-2').datepicker({
      altField: ".input-2",
      dateFormat: "dd.mm.yy"
    });

    $('.datepicker-3').datepicker({
      altField: ".input-3",
      dateFormat: "dd.mm.yy"
    });

    $('.datepicker-4').datepicker({
      altField: ".input-4",
      dateFormat: "dd.mm.yy"
    });
     

   /* $('#ui-datepicker-div').css('display', 'none');  */
    //end datepicker    

     /*$(".left-menu__item a").click(function( e ) {        
      $(".left-menu__item a").removeClass("active")
       $(this).addClass("active");
      
   }); */ 

    //swipe-panels
    $(".waiting-list-btn").click(function( e ) {        
      $(".swipe-panel-3").addClass("active");   
      $("body").addClass("mask");   
   }); 

   $(".swipe-panel__close-block").click(function( e ) {   
		 $(".swipe-panel").removeClass("active");
		 $(".add-record__body").removeClass("active"); 
     $("body").removeClass("mask");      
    });    
    
    $(".schedule__content-item td").dblclick(function( e ) {        
      $(".swipe-panel-2").addClass("active"); 
      $("body").addClass("mask");      
    }); 

    $(".add-record-button").click(function( e ) {        
      $(".add-record__body").addClass("active");               
		}); 
		
	

    $(".client-add").click(function( e ) {        
      $(".swipe-panel-1").addClass("active");      
   }); 

   $(".back-button").click(function( e ) {        
    $(".add-record__body").removeClass("active"); 
    $(".swipe-panel-1").removeClass("active");                    
  });

  $(".js-edit").click(function( e ) {   
    $(".swipe-panel-6").addClass("active"); 
    $("body").addClass("mask");                    
  });

  $(".js-add-directory").click(function( e ) {   
    $(".swipe-panel-7").addClass("active"); 
    $("body").addClass("mask");                    
	});
	
	$(".js-item-add").click(function( e ) {   
    $(".swipe-panel-8").addClass("active"); 
    $("body").addClass("mask");                    
	});
	
	$(".js-counter-add").click(function( e ) {   
    $(".swipe-panel-9").addClass("active"); 
    $("body").addClass("mask");                    
	});
	
	$(".js-cash-add").click(function( e ) {   
    $(".swipe-panel-10").addClass("active"); 
    $("body").addClass("mask");                    
	});
	
	$(".js-salary-link").click(function( e ) {   
    $(".swipe-panel-11").addClass("active"); 
    $("body").addClass("mask");                    
	});
	
	


  //график работы

  $(".schedule-work-table td").dblclick(function( e ) {        
		$(".swipe-panel-5").addClass("active");
		$("body").addClass("mask");      
 });

 $(".schedule-work-table td").click(function( e ) {        
  $(this).toggleClass("work-time-active");     
 
});

    /*окно в таблице расписания*/

      $(".schedule__content-column .data").click(function( e ) {        
        $(".swipe-panel-4").addClass("active");   
        $("body").addClass("mask");   
    }); 
   

  //end swipe panels
  
      $(".table-page__filter-link").click(function( e ) {
        e.stopPropagation();	
        $(".filter-wrap").slideToggle(400);
        $(".table-page__filter-link").toggleClass("no-show");	
      });                      
  });

    $(document).ready(function() {
      $('.swipe-select').niceSelect();
    });

    //select

    $(document).ready(function() {
      
      $('.multiple-select-1').select2({  
        dropdownParent: $('.multiple-select-drop-1'),     
        closeOnSelect: false,
        placeholder: "Выберите из списка",        
        data: [
          {id: 1, text: 'Морозова Ирина', profession: 'Визажист', disabled: false, selected: false},
          {id: 2, text: 'Шевченко Екатерина', profession: 'Бровист', disabled: false, selected: false},
          {id: 3, text: 'Вязьмитинова Наталья', profession: 'Лейшмейкер', disabled: false, selected: false},
          {id: 4, text: 'Сорокина Татьяна', profession: 'Визажист/бровист', disabled: false, selected: false}
        ],
        
        templateResult: function (item) {
          return $('<b>'+item.text+'</b><span>'+item.profession+'</span>')
        }
      });

     

      $('.multiple-select-2').select2({
        dropdownParent: $('.multiple-select-drop-2'),
        closeOnSelect: false,
        placeholder: "Выберите услуги",       
      });

      $('.multiple-select-3').select2({
        dropdownParent: $('.multiple-select-drop-3'),
        closeOnSelect: false,
        placeholder: "Выберите категории услуг",       
      });

      $('.multiple-select-4').select2({
        dropdownParent: $('.multiple-select-drop-4'),
        closeOnSelect: false,            
      });

      $('.multiple-select-5').select2({
        dropdownParent: $('.multiple-select-drop-5'),
        closeOnSelect: false,              
      });

      $('.multiple-select-6').select2({
        dropdownParent: $('.multiple-select-drop-6'),
        closeOnSelect: false,
        placeholder: "Выберите теги",               
      });
	});	
	

  //окно добавить роль

  $(".role-add__button").click(function( e ) {
		e.stopPropagation();	
		$(".role-add__block").slideToggle(400);		
  }); 
  
  //блоки в добавлении ролей 

  $(".role__list-1 .active .bigswitch").click(function( e ) {
    e.stopPropagation();	
    $(".role__list-2").toggleClass("show");	
    $(".role__list-3").removeClass("show");		
  });

  $(".role__list-2 .active .checkbox").click(function( e ) {
    e.stopPropagation();	
    $(".role__list-3").toggleClass("show");   	
  });

  //блок в карточке клиента таб 1
 

  $(".js-add-input").click(function( e ) {
    e.stopPropagation();	
    $(".js-user-window").toggleClass("show");  	
  }); 
  
  $(".js-close-input").click(function( e ) {
    e.stopPropagation();	
    $(this).parents('.input-wrap').css('display', 'none');	
  }); 
  

 //окно добавить группу на странице client-card-page

 $(".add-group__button").click(function( e ) {
  e.stopPropagation();	
  $(".add-group__block").slideToggle(400);		
}); 


jQuery(function($){
  var row = $(".r0").clone();
  var del = $(".del");
  
  var removeTr = function(e){
    e.preventDefault();
    $(this).closest('tr').remove();
  }
  
  var changeField = function(e){
    e.preventDefault();
    transformInput($(e.target));
  }
  
  $('.del').click(removeTr);
  $('.change').click(changeField);
  
  $("#add").click(function(){
   var newRow = row.clone().insertBefore(".final");
    
    newRow.find('.del').on('click', removeTr);
    newRow.find('.change').on('click', changeField);
    
   });
  
});


//динамические формы с добавлением полей-->

var el1 =$('#dyn1');
if(el1[0]) { 
    $("#dyn1").addRemoveTextbox({
      addButtonClass: "addButton",
      removeButtonClass: "removeButton",  
    })  
}

var el2 =$('#dyn2');
if(el2[0]) {  
    $("#dyn2").addRemoveTextbox({
      addButtonClass: "addButton-2",
      removeButtonClass: "removeButton-2",  
    })  
}


//загрузка файлов
$(".js-download").jfilestyle({
  dragdrop: true,
  text: "Выбрать файлы",
  placeholder: "*.jpg, *.doc, *.xls",
  inputSize: "550px"
});

//загрузка фото

var el2 =$('.dz-clickable');
if(el2[0]) {
  var myDropzone = new Dropzone("#fall", {
    url: "/images",
    uploadMultiple: true
  })
}



//drug drop

$( function() {
  $( "#sortable" ).sortable({
    handle: ".icon-drop-icon"
  });
  $( "#sortable" ).disableSelection();
} );

$(".js-del").click(function( e ) {
  e.stopPropagation();	
  $(this).parents('.sortable__item').remove();  		
}); 

//color input 

$(document).ready(function() {
    $(".color__item ").click(function( e ) {
    $(".color__item ").removeClass("active"); 
    $(this).addClass("active"); 

      var color = $(this).css('background-color');    
      $(this).parents('.input-wrap').find('.color-line').css('background-color', color);
    });

    $(".js-color-input").click(function( e ) {
      $(".color__block").slideToggle(400);
    });
    
  
  })

