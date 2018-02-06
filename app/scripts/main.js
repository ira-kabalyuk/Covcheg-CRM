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
				showOn:"button", 
				buttonImage:"images/calendar.png",
				buttonImageOnly:true,

				autoSize: true,

				onSelect: function(dateString) {
					$('.data-input').text(dateString)
				}
			
		}); 
		
	$( ".js-datepicker" ).datepicker( "setDate", Date.now() );

	var currentDateString = $('.js-datepicker').val();
	$('.data-input').text(currentDateString)


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


    //swipe-panels

    function openPopup(settings) {
      var options = Object.assign({}, {
          closeButton: '.swipe-panel__close-block',
          event: 'click'
      }, settings);
    
      if(!options.content || !options.button) {
          console.warn('required parameters is missing in openPopup function');
      }
    
      $(options.button).on(options.event, function(){
        var body = $('body');
        var mask = $('<div class="mask"></div>');
        var content = $(options.content);
        var contentOriginalParent = content.parent();
        var closeButton = content.find(options.closeButton);
    
        mask.append(content);
        body.append(mask);
        setTimeout(function(){content.addClass('visible')});
    
        closeButton.click(function() {
          var hasTransition = !(content.css('transition-duration') == '0s');
          if(hasTransition) {
              content.one('transitionend', function(){
                  contentOriginalParent.append(content);
                  mask.remove();
              });
              content.removeClass('visible');
          } else {
              contentOriginalParent.append(content);
              mask.remove();
          }
        })
      })
    }
  
  openPopup({content: '.add-record__body', button: '.add-record-button', closeButton: '.back-button'})
  openPopup({content: '.swipe-panel-1', button: '.client-add'})
  openPopup({content: '.swipe-panel-2', button: '.schedule__content-item td', event: 'dblclick'})
  openPopup({content: '.swipe-panel-3', button: '.waiting-list-btn'})
  openPopup({content: '.swipe-panel-4', button: '.schedule__content-column .data'})
  openPopup({content: '.swipe-panel-5', button: '.schedule-work-table td'})
  openPopup({content: '.swipe-panel-6', button: '.js-edit'})
  openPopup({content: '.swipe-panel-7', button: '.js-add-directory'})
  openPopup({content: '.swipe-panel-8', button: '.js-item-add'})
  openPopup({content: '.swipe-panel-9', button: '.js-counter-add'})
  openPopup({content: '.swipe-panel-10', button: '.js-cash-add'})
  openPopup({content: '.swipe-panel-11', button: '.js-salary-link'})
  openPopup({content: '.swipe-panel-12', button: '.js-add-salon'})
  openPopup({content: '.swipe-panel-13', button: '.js-add-trigger'})
  openPopup({content: '.swipe-panel-14', button: '.js-new-payment'})
  openPopup({content: '.swipe-panel-15', button: '.js-new-transfer'})
  openPopup({content: '.swipe-panel-16', button: '.js-add-com'})
  openPopup({content: '.swipe-panel-17', button: '.js-add-move'})
  openPopup({content: '.swipe-panel-18', button: '.js-add-write-off'})
  openPopup({content: '.swipe-panel-19', button: '.js-add-inventory'})
  openPopup({content: '.swipe-panel-20', button: '.js-add-services'})
  openPopup({content: '.swipe-panel-21', button: '.js-add-services-win'})
  openPopup({content: '.swipe-panel-22', button: '.record-block'})
  openPopup({content: '.swipe-panel-23', button: '.js-add-payroll'})
  openPopup({content: '.swipe-panel-24', button: '.js-add-operation'})
  openPopup({content: '.swipe-panel-25', button: '.js-add-employees'}) 
  openPopup({content: '.swipe-panel-26', button: '.js-add-salary'})   
  openPopup({content: '.swipe-panel-27', button: '.js-add-product'})   
  openPopup({content: '.swipe-panel-28', button: '.js-add-task'})
  openPopup({content: '.swipe-panel-29', button: '.js-add-discounts'})
  

  //end swipe panels

  
  
      $(".table-page__filter-link").click(function( e ) {
        e.stopPropagation();	
        $(".filter-wrap").slideToggle(400);
        $(".table-page__filter-link").toggleClass("no-show");	
      });

      $(".subtitle__link").click(function( e ) {
        e.stopPropagation();	
        $(this).parents(".subtitle-block").next(".schedule__body").slideToggle(400);       
      });


      //counter
      
      $('.triangle-bottom').click(function(){
        var $inp=$(this).siblings('input');
        var kol=parseInt($inp.val())-1;
        if(kol!=0) $inp.val(kol).trigger('change');
        console.log(kol);
      });
      
      $('.triangle-top').click(function(){
        var $inp=$(this).siblings('input');
        var kol=parseInt($inp.val())+1;
         $inp.val(kol).trigger('change');
         console.log(kol);
      });

      //end counter

  });

    $(document).ready(function() {
      $('.swipe-select, .main-filter__select').niceSelect();
    });

    //select https://select2.org/getting-started/basic-usage

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

      $('.single-select-7').select2({
        dropdownParent: $('.single-select-drop-7'),
        closeOnSelect: false, 
        placeholder: "Выберите сотрудника", 
        search: false,       
        data: [
          {id: 11, text: 'Морозова Ирина', profession: 'Визажист', disabled: false, selected: false},
          {id: 22, text: 'Шевченко Екатерина', profession: 'Бровист', disabled: false, selected: false},
          {id: 33, text: 'Вязьмитинова Наталья', profession: 'Лейшмейкер', disabled: false, selected: false},
          {id: 44, text: 'Сорокина Татьяна', profession: 'Визажист/бровист', disabled: false, selected: false}
        ],
        
        templateResult: function (item) {
          return $('<b>'+item.text+'</b><span>'+item.profession+'</span>')
        }
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

/*var el2 =$('.dz-clickable');
if(el2[0]) {
  var myDropzone = new Dropzone("#fall", {
    url: "/images",
    uploadMultiple: true
  })
}*/


//drug drop

$( function() {
  $( "#sortable" ).sortable({
    handle: ".icon-drop-icon, .icon-drop2-icon"
  });
  $( "#sortable" ).disableSelection();
});

$( function() {
  $( "#sortable1, #sortable2, #sortable3" ).sortable({
    connectWith: ".sortable__list",
    handle: ".icon-drop-icon",
    placeholder: "drop-placeholder"
  }).disableSelection();
});

$( function() {
  $( "#sortable1, #sortable2, #sortable3, #sortable4, #sortable5" ).sortable({
    connectWith: ".sortable__list",
    handle: ".icon-drop2-icon ",
    placeholder: "drop2-placeholder"
  }).disableSelection();
});

$(".js-del").click(function( e ) {
  e.stopPropagation();	
  $(this).parents('.sortable__item').remove();  		
}); 

$(".js-del").click(function( e ) {
  e.stopPropagation();	
  $(this).parents('.process-page__item').remove();  		
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



    //основные настройки

    $(".sidebar__item").click(function( e ) {
      e.stopPropagation();	
      $(this).find('.sidebar__submenu-list').slideToggle(400);     	
    });   


    // Биндинг событий для стандартных елементов UI
    $("body").on("click",'[data-action="toggle"]',function(e){
          e.stopPropagation();
          var target=$(this).data('target');
          $(target).slideToggle(400);
        });
  
  })

