$(function() {
    $( ".column" ).sortable({
        connectWith: ".column",
        handle: ".drakard",
        cancel: ".portlet-toggle",
        placeholder: "portlet-placeholder ui-corner-all",
        update: function () {
            var countingfirstcolumn = $(".userid_jean_simard .notstarted .panel-body .drakard").length;
            $( ".userid_jean_simard .notstarted .panel-title" ).text( countingfirstcolumn + " Files" );
                if ( countingfirstcolumn >= 4) {$('.column.notstarted .panel.panel-default').addClass( "panel-danger" );};
                if ( countingfirstcolumn <= 4) {$('.column.notstarted .panel.panel-default').removeClass( "panel-danger" );};
            var countingscdcolumn = $(".userid_jean_simard .started .panel-body .drakard").length;
            $( ".userid_jean_simard .started .panel-title" ).text( countingscdcolumn + " Files" );
                if ( countingscdcolumn >= 4) {$('.column.started .panel.panel-success').addClass( "panel-danger" );};
                if ( countingscdcolumn <= 4) {$('.column.started .panel.panel-success').removeClass( "panel-danger" );};
            var countingthrdcolumn = $(".userid_jean_simard .review .panel-body .drakard").length;
            $( ".userid_jean_simard .review .panel-title" ).text( countingthrdcolumn + " Files" );
                if ( countingthrdcolumn >= 4) {$('.column.review .panel.panel-warning').addClass( "panel-danger" );};
                if ( countingthrdcolumn <= 4) {$('.column.review .panel.panel-warning').removeClass( "panel-danger" );};
            var countingfrthcolumn = $(".userid_jean_simard .reviewpartner .panel-body .drakard").length;
            $( ".userid_jean_simard .reviewpartner .panel-title" ).text( countingfrthcolumn + " Files" );
                if ( countingfrthcolumn >= 4) {$('.column.reviewpartner .panel.panel-success').addClass( "panel-danger" );};
                if ( countingfrthcolumn <= 4) {$('.column.reviewpartner .panel.panel-success').removeClass( "panel-danger" );};
            var countingffthcolumn = $(".userid_jean_simard .completed .panel-body .drakard").length;
            $( ".userid_jean_simard .completed .panel-title" ).text( countingffthcolumn + " Files" );
                if ( countingffthcolumn >= 4) {$('.column.completed .panel.panel-default').addClass( "panel-danger" );};
                if ( countingffthcolumn <= 4) {$('.column.completed .panel.panel-default').removeClass( "panel-danger" );};


            var countingfirstcolumn = $(".userid_thomas_tremblay .notstarted .panel-body .drakard").length;
            $( ".userid_thomas_tremblay .notstarted .panel-title" ).text( countingfirstcolumn + " Files" );
            if ( countingfirstcolumn >= 4) {$('.column.notstarted .panel.panel-default').addClass( "panel-danger" );};
            if ( countingfirstcolumn <= 4) {$('.column.notstarted .panel.panel-default').removeClass( "panel-danger" );};
            var countingscdcolumn = $(".userid_thomas_tremblay .started .panel-body .drakard").length;
            $( ".userid_thomas_tremblay .started .panel-title" ).text( countingscdcolumn + " Files" );
            if ( countingscdcolumn >= 4) {$('.column.started .panel.panel-success').addClass( "panel-danger" );};
            if ( countingscdcolumn <= 4) {$('.column.started .panel.panel-success').removeClass( "panel-danger" );};
            var countingthrdcolumn = $(".userid_thomas_tremblay .review .panel-body .drakard").length;
            $( ".userid_thomas_tremblay .review .panel-title" ).text( countingthrdcolumn + " Files" );
            if ( countingthrdcolumn >= 4) {$('.column.review .panel.panel-warning').addClass( "panel-danger" );};
            if ( countingthrdcolumn <= 4) {$('.column.review .panel.panel-warning').removeClass( "panel-danger" );};
            var countingfrthcolumn = $(".userid_thomas_tremblay .reviewpartner .panel-body .drakard").length;
            $( ".userid_thomas_tremblay .reviewpartner .panel-title" ).text( countingfrthcolumn + " Files" );
            if ( countingfrthcolumn >= 4) {$('.column.reviewpartner .panel.panel-success').addClass( "panel-danger" );};
            if ( countingfrthcolumn <= 4) {$('.column.reviewpartner .panel.panel-success').removeClass( "panel-danger" );};
            var countingffthcolumn = $(".userid_thomas_tremblay .completed .panel-body .drakard").length;
            $( ".userid_thomas_tremblay .completed .panel-title" ).text( countingffthcolumn + " Files" );
            if ( countingffthcolumn >= 4) {$('.column.completed .panel.panel-default').addClass( "panel-danger" );};
            if ( countingffthcolumn <= 4) {$('.column.completed .panel.panel-default').removeClass( "panel-danger" );};

        }
    });

    $( ".portlet" )
        .addClass( "ui-widget ui-widget-content ui-helper-clearfix ui-corner-all" )
        .find( ".drakard" )
        .addClass( "ui-widget-header ui-corner-all" );

    $( ".portlet-toggle" ).click(function() {
        var icon = $( this );
        icon.toggleClass( "ui-icon-minusthick ui-icon-plusthick" );
    });
});



