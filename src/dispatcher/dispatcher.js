let Dispatcher = require('flux').Dispatcher;
let ObjectAssign = require('react/lib/Object.assign');

var AppDispatcher = ObjectAssign({
    handleViewAction: function(action){
        console.log('action: ', action);
        this.dispatch({
            source: 'VIEW_ACTION',
            action: action
        })
    }
}, Dispatcher.prototype);

module.exports = AppDispatcher;