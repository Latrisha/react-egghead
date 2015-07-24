import AppDispatcher from '../dispatcher/dispatcher';
import Constants from '../constants/constants';
import ObjectAssign from 'react/lib/Object.assign';

var EventEmitter =require('events').EventEmitter;

var CHANGE_EVENT = "change";

var _catalog = [
    {id:1, title: 'Widget 1', cost: 1},
    {id:2, title: 'Widget 2', cost: 2},
    {id:3, title: 'Widget 3', cost: 3}
];

var _cartItems = [];

function _removeItem(index){
    _cartItems[index].inCart = false;
    _cartItems.splice(index,1);
}

function _increaseItem(index){
    _cartItems[index].qty++;
}

function _decreaseItem(index){
    if(_cartItems[index].qty > 1){
        _cartItems[index].qty--;
    }
    else {
        _removeItem(index);
    }
}

function _addItem(item){
    if(!item.inCart){
        item['qty'] = 1;
        item['inCart'] = true;
        _cartItems.push(item);
    }
    else {
        _cartItems.forEach(function (cartItem, i) {
            if(cartItem.id === item.id){
                _increaseItem(i);
            }
        })
    }
}

var appStore = ObjectAssign(EventEmitter.prototype, {
    emitChange: function(){
        this.emit(CHANGE_EVENT)
    },
    addChangeListener: function(callback){
        this.on(CHANGE_EVENT,callback)
    },
    removeChangeListener: function(callback){
        this.removeListener(CHANGE_EVENT, callback)
    },
    getCatalog: function(){
        return _catalog
    },
    dispatcherIndex: AppDispatcher.register(function(payload){
        var action = payload.action;
        switch (action.actionType){
            case Constants.ADD_ITEM:
                _addItem(payload.action.item);
                break
            case Constants.REMOVE_ITEM:
                _removeItem(payload.action.index);
                break;
            case Constants.
        }
    })
})