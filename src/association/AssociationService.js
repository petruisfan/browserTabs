
app.factory("AssociationService", function() {
    var _data = [
        {id: 1, name: "Association1"},
        {id: 2, name: "Association2"},
        {id: 3, name: "Association3"},
        {id: 4, name: "Association4"},
        {id: 5, name: "Association5"}
    ]

    return {
        query: function() {
            return _data;
        },
        get: function(id) {
            return _data[ id - 1 ];
        }
    }

})