var statusGrouping = {
    notstarted: [1,2,3],
    started: [4,5,6],
    review: [7,8],
    reviewpartner: [9],
    completed: [10,11,12,13,14,15,16,17,18,19,20,21,22]
};

var serverJson = [
    {
        "FileName": "c:\\test.114",
        "UserName": "wkloaner",
        "StatusName": "ReturnStatus",
        "Status": 4,
        "DateTime": "2015-01-28T10:52:37.2128099-05:00",
        "TaxpayerName": "Joe Bin"
    },
    {
        "FileName": "c:\\test.114",
        "UserName": "wkloaner",
        "StatusName": "ReturnStatus",
        "Status": 4,
        "DateTime": "2015-01-28T11:07:03.9833863-05:00",
        "TaxpayerName": "Joe Bin"
    }
];

var model = {
    rows: [
        {
            id: 'id',
            username: 'username',
            columns: {
                notstarted: {
                    title: "1 File",
                    panelType: "default",
                    cells : [
                        {
                            id: '44',
                            name:'test',
                            statuses: [
                                {
                                    labelType: "default",
                                    name: "statusname"
                                }
                            ]
                        }
                    ]
                },
                started: {
                    title: "1 File",
                    panelType: "default",
                    cells : [
                        {
                            id: '44',
                            name:'test',
                            statuses: [
                                {
                                    labelType: "warning",
                                    name: "statusname"
                                }
                            ]
                        }
                    ]
                },
                review: {
                    title: "1 File",
                    panelType: "warning",
                    cells : [
                        {
                            id: '44',
                            name:'test',
                            statuses: [
                                {
                                    labelType: "default",
                                    name: "statusname"
                                }
                            ]
                        }
                    ]
                },
                reviewpartner: {
                    title: "1 File",
                    panelType: "default",
                    cells : [
                        {
                            id: '44',
                            name:'test',
                            statuses: [
                                {
                                    labelType: "default",
                                    name: "statusname"
                                }
                            ]
                        }
                    ]
                },
                completed : {
                    title: "None",
                    panelType: "default",
                    cells : []
                }
            }
        }
    ]
};

var templateString = $('#template').html();
var template = _.template(templateString, {
    variable: 'model'
});

$('.table > tbody').append(template(model));


