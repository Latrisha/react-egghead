import Constants from '../constants/constants';
import AppDispatcher from '../dispatcher/dispatcher';

var AppAction = {
    addItem: function (item) {
        AppDispatcher.handleViewAction({
            actionType: Constants.ADD_ITEM,
            item: item
        })
    },
    removeItem: function (index) {
        AppDispatcher.handleViewAction({
            actionType: Constants.REMOVE_ITEM,
            index: index
        })
    },
    increaseItem: function (index) {
        AppDispatcher.handleViewAction({
            actionType: Constants.INCREASE_ITEM,
            item: index
        })
    },
    decreaseItem: function (index) {
        AppDispatcher.handleViewAction({
            actionType: Constants.DECREASE_ITEM,
            item: index
        })
    }
}

module.exports = AppAction;