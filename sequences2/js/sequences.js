var statusGrouping = {
    notstarted: [1,2,3],
    started: [4,5,6],
    review: [7,8],
    reviewpartner: [9],
    completed: [10,11,12,13,14,15,16,17,18,19,20,21,22]
};

var statusTypes = {
    warning: [1,2,3,7,10],
    danger: [6,17],
    success: [4,5,8,9,11,12,13,14,15,16],
    standard: [18,19,20,21,22]
}

var serverJson = [
    {
        "FileName": "c:\\test.114",
        "UserName": "wkloaner",
        "StatusName": "ReturnStatus",
        "Status": 4,
        "DateTime": "2015-01-28T10:52:37.2128099-05:00",
        "TaxpayerName": "Bjorn Olafson"
    },
    {
        "FileName": "c:\\test.114",
        "UserName": "wkloaner",
        "StatusName": "ReturnStatus",
        "Status": 4,
        "DateTime": "2015-01-28T11:07:03.9833863-05:00",
        "TaxpayerName": "Linda Roy"
    },
    {
        "FileName": "c:\\test.114",
        "UserName": "wkloaner",
        "StatusName": "ReturnStatus",
        "Status": 17,
        "DateTime": "2015-01-28T11:07:03.9833863-05:00",
        "TaxpayerName": "Joe Bin"
    },
    {
        "FileName": "c:\\test.114",
        "UserName": "olaf",
        "StatusName": "ReturnStatus",
        "Status": 6,
        "DateTime": "2015-01-28T11:07:03.9833863-05:00",
        "TaxpayerName": "James Bin"
    }
];

var model = {
    rows: []
};

var usernames = _.uniq(_.pluck(serverJson, 'UserName'));
var columnTypes = _.keys(statusGrouping);
var now = moment();

_.each(usernames, function(username){
    var row = {
        username: username,
        columns: {}
    };
    var userEvents = _.where(serverJson, {UserName: username});

    _.each(columnTypes, function(columnType){
        var column = {
            cells: []
        };
        var userColumnEvents = _.filter(userEvents, function(userEvent){
            return _.contains(statusGrouping[columnType], userEvent.Status);
        });
        var userColumnEventsSize = _.size(userColumnEvents);
        var panelTypeOverride = (columnType === 'completed') ? "default" : null;

        switch(true){
            case (userColumnEventsSize === 0):
                column.title = "None";
                column.panelType = panelTypeOverride || "default";
                break;

            case (userColumnEventsSize === 1):
                column.title = "1 File";
                column.panelType = panelTypeOverride || "success"
                break;

            case (userColumnEventsSize < 3):
                column.title = userColumnEventsSize + " Files";
                column.panelType = panelTypeOverride || "success";
                break;

            case (userColumnEventsSize < 5):
                column.title = userColumnEventsSize + " Files";
                column.panelType = panelTypeOverride || "warning";
                break;

            default:
                column.title = userColumnEventsSize + " Files";
                column.panelType = panelTypeOverride || "warning";
                break;

        }

        _.each(userColumnEvents, function(userColumnEvent){
            var labelType = "default";
            var lastChanged = moment.duration(now.diff(moment(userColumnEvent.DateTime))).humanize();

            _.find(statusTypes, function(list, type){
                if (_.contains(list, userColumnEvent.Status)){
                    labelType = type;
                    return true;
                }
            });

            column.cells.push({
                id: _.uniqueId('#DOC'),
                name: userColumnEvent.TaxpayerName,
                lastChanged : lastChanged,
                statuses: [
                    {
                        labelType: labelType,
                        name: userColumnEvent.StatusName
                    }
                ]
            });
        });

        row.columns[columnType] = column;
    });

    model.rows.push(row);
});

var templateString = $('#template').html();
var template = _.template(templateString, {
    variable: 'model'
});

$('.table > tbody').append(template(model));

// Stars
$('.difficulty').children('span').on('click', function(){
    var $el = $(this);
    $el.removeClass('glyphicon-star-empty');
    $el.addClass('glyphicon-star');
    $el.nextAll().removeClass('glyphicon-star');
    $el.nextAll().addClass('glyphicon-star-empty');
    $el.prevAll().removeClass('glyphicon-star-empty');
    $el.prevAll().addClass('glyphicon-star');
});


