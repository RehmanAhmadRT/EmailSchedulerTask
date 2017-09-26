({
    extendsFrom: 'RecordView',

    _dispose: function() {
        //additional stuff before calling the core create _dispose goes here
        this._super('_dispose');
    },
    initialize: function (options) {
        this._super('initialize', [options]);
        
        selfT = this;
        console.log(selfT);
        
    }
})