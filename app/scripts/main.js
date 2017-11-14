$(document).ready(function() { 
    var isInit = false;
    
       
    $('#calendar').fullCalendar({
        defaultView: 'agendaDay',
        schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives',
       
        /*height: 800,*/
        header: {
          left: 'title, calendar',
          center: 'today, tomorrow, monday, tusday, wednesday, thursday, friday, saturday, sunday',
          right: 'waitlist'
        },
    
        customButtons: {
            calendar: {
                text: ' ',
               /* click: function(e) {
                        $(this).find('input').datepicker('show');*/
                },

          tomorrow: {
            text: 'Завтра',
            click: function(e) {
              var today  = moment(),
                tomorrow = today.add('days', 1);
    
              $('#calendar').fullCalendar('gotoDate', tomorrow);
            }
          },
          monday: {
            text: 'Пн',
            click: function(e) {
              console.log("Пн");
            }
          },
          tusday: {
            text: 'Вт',
            click: function(e) {
              console.log("Вт");
            }
          },
          wednesday: {
            text: 'Ср',
            click: function(e) {
              console.log("Ср");
            }
          },
          thursday: {
            text: 'Чт',
            click: function(e) {
              console.log("Чт");
            }
          },
          friday: {
            text: 'Пт',
            click: function(e) {
              console.log("Пт");
            }
          },
          saturday: {
            text: 'Сб',
            click: function(e) {
              console.log("Сб");
            }
          },
          sunday: {
            text: 'Вс',
            click: function(e) {
              console.log("Вс");
            }
          },
          waitlist: {
            text: 'Лист ожидания',
            click: function(e) {
                $('#swipe1').addClass('active');
            }
          }
        },
    
        dayClick: function(date, jsEvent, view, resourceObj) {
          console.log('Date: ' + date.format(), resourceObj);
          //console.log(date, jsEvent, view);
          //console.log('Resource ID: ' + resourceObj.id);
        },    
       
        /*defaultDate: today,*/
        lang: 'ru',
        buttonIcons: true, // show the prev/next text
        weekNumbers: false,        
        editable: false,
        selectable: true,
        eventLimit: true,
    
        viewRender: function(v, e) {
          if(isInit) return;
    
          $('.fc-calendar-button').append('<i class="fa fa-calendar" aria-hidden="true"></i><input type="hidden">').find('input').datepicker({
            // buttonImage: '/assets/images/pixel.gif',
            buttonImage: false,
            buttonImageOnly: true,
            buttonText: '',
            showOn: 'both',
          }).on('change', function() {
            var d = $(this).val().split('.'),
              dt  = d[2] + '-' + d[1] + '-' + d[0];
            console.log(dt);
            $('#calendar').fullCalendar('gotoDate', $.fullCalendar.moment(dt));
          });
    
          isInit = true;
    
          setColumnWidth();

          /*$('h2').append('<i class="fa fa-calendar" aria-hidden="true"></i>');*/
          
        },
    
        // Resources
        resources: [
          { id: 'a', title: 'Мастер А', eventColor: '#F96400' },
          { id: 'b', title: 'Мастер B', eventColor: '#28DD35' },
          { id: 'c', title: 'Константин Константинопольский', eventColor: '#FF53F1' },
          { id: 'd', title: 'Мастер D', eventColor: '#6D6EFF' },
          { id: 'e', title: 'Мастер E', eventColor: '#F96400' },
          { id: 'f', title: 'Мастер F', eventColor: '#28DD35' },
          { id: 'g', title: 'Мастер G', eventColor: '#FF53F1' },
          { id: 'h', title: 'Мастер H', eventColor: '#6D6EFF' },
          { id: 'i', title: 'Мастер I', eventColor: '#F96400' },
          { id: 'j', title: 'Мастер J', eventColor: '#28DD35' },
          { id: 'k', title: 'Мастер K', eventColor: '#FF53F1' },
          { id: 'l', title: 'Мастер L', eventColor: '#6D6EFF' },
          { id: 'm', title: 'Мастер M', eventColor: '#F96400' },
          { id: 'n', title: 'Мастер N', eventColor: '#28DD35' },
          { id: 'o', title: 'Мастер O', eventColor: '#FF53F1' },
          { id: 'p', title: 'Мастер P', eventColor: '#6D6EFF' }
        ],
        /*resourceRender: function(resourceObj, labelTds, bodyTds) {
          renderMasterPhotos();
        },*/

        events: [
            {
                id: '1',
                resourceId: 'a',
                title: 'Meeting',
                start: '2017-11-14 11-00'
            },

            {
                id: '1',
                resourceId: 'b',
                title: 'Meeting',
                start: '2017-11-14 13-00'
            }
        ]
    
        // Events
        /*events: {
          url: '/assets/demo_data/calendar/events.json',
          error: function() {
            $('#script-warning').show();
          }
        },
    
        loading: function(bool) {
          $('#loading-events').toggle(bool);
        }*/
      });  
      
      
      
});

