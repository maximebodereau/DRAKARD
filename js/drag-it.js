$(function() {
    $( ".column" ).sortable({
        connectWith: ".column",
        handle: ".drakard",
        cancel: ".portlet-toggle",
        placeholder: "portlet-placeholder ui-corner-all"
    });

    $( ".portlet" )
        .addClass( "ui-widget ui-widget-content ui-helper-clearfix ui-corner-all" )
        .find( ".drakard" )
        .addClass( "ui-widget-header ui-corner-all" );

    $( ".portlet-toggle" ).click(function() {
        var icon = $( this );
        icon.toggleClass( "ui-icon-minusthick ui-icon-plusthick" );
    });

    var countingfirstcolumn = $(".firstcolumn .panel-body").length;
    $( ".panel-title" ).text( countingfirstcolumn + " Files" );
});


