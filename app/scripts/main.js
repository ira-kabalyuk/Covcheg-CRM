jQuery(document).ready(function() {
    
    var td = $('.selectedTD');
    var tdHeight = td.outerHeight();
    var tdIndex = td.index();
    var rowIndex = td.parent().index();
    var headRowHeight = td.parents('tbody').children().first().outerHeight();
    var line = $('.line');
    line.css('top', headRowHeight + tdHeight * (rowIndex -1) + tdHeight / 2);
    console.log(td.parents('table').children())

});