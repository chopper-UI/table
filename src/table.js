$(function(){
    var maxHeight = 0;
    $('.table_item').each(function(){
        var height = $(this).height();
        maxHeight = maxHeight>height?maxHeight:height;
    });
    $('.ui-table-column').height(maxHeight);
});