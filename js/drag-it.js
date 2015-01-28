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
    var countingfirstcolumn = $(".userid_jean_simard .notstarted .panel-body .drakard").length;
    $( ".userid_jean_simard .notstarted .panel-title" ).text( countingfirstcolumn + " Files" );

    var countingscdcolumn = $(".userid_jean_simard .started .panel-body .drakard").length;
    $( ".userid_jean_simard .started .panel-title" ).text( countingscdcolumn + " Files" );

    var countingthrdcolumn = $(".userid_jean_simard .review .panel-body .drakard").length;
    $( ".userid_jean_simard .review .panel-title" ).text( countingthrdcolumn + " Files" );

    var countingfrthcolumn = $(".userid_jean_simard .reviewpartner .panel-body .drakard").length;
    $( ".userid_jean_simard .reviewpartner .panel-title" ).text( countingfrthcolumn + " Files" );

    var countingffthcolumn = $(".userid_jean_simard .completed .panel-body .drakard").length;
    $( ".userid_jean_simard .completed .panel-title" ).text( countingffthcolumn + " Files" );

    $( ".portlet-toggle" ).click(function() {
        var icon = $( this );
        icon.toggleClass( "ui-icon-minusthick ui-icon-plusthick" );
    });

});


