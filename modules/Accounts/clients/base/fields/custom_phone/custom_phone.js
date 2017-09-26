/**
 * Customize the Phone type field for Contacts module
 */
({
    extendsFrom: 'PhoneField',

    events: {
        'keyup input[name="phone_office"]': 'formatAsPhoneNumber'
    },
    
    initialize: function (options) {
        console.log("in initialize of phone.js");
            this._super('initialize', [options]);
            this.events = _.extend({}, this.events, {
                'keyup input[name="phone_work"]': 'formatAsPhoneNumber'
            });
    }, 
    
    render: function() {
        console.log("in render of phone.js");
        app.view.invokeParent(this, {
            type: 'field',
            name: this.name,
            method: 'render'
        });
//        //apply mask to the field
//        var el = this.$(this.fieldTag);
//        el.mask('(999) 999-9999');
    },

    formatAsPhoneNumber: function(){
        var value = this.$(this.fieldTag).val();
   
        if(!isNaN(value.substr(value.length-1,1)) && !(value.substr(value.length-1,1)=="-")){ 
            console.log(value);
            // do whatever you want to phoneNumber
            if(value.length>15) return;
            if(value.length==3){
                value=value+'-';
            }else if(value.length==7){
                value=value+'-';
            }else if(value.length==11){
                value=value+'-';
            }
           this.$(this.fieldTag).val(value);

        }
        else{
            this.$(this.fieldTag).val(value.substr(0,value.length-1));
        }
    
    },
})