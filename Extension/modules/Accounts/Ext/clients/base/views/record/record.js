({
    /*
    This commented code opens a drawer
    extendsFrom: 'RecordView',

    zipJSON: {},

    initialize: function (options) {
        this._super('initialize', [options]);

        //add listener for custom button
        this.context.on('button:filter_results:click', this.filter_results, this);
    },

    filter_results: function() {
           App.drawer.open({layout:'custom',
                            context:{module:'Accounts'}});
    }
    */
   
   //The following code is for custom field validation
    /* because 'accounts' already has a record view, we need to extend it */
    extendsFrom: 'AccountsRecordView', 
    
    
    
    initialize: function (options) {
        this._super('initialize', [options]);
    
        //add custom message key
        app.error.errorName2Keys['custom_message'] = 'This field is mendatory';
        
        //add validation tasks
        this.model.addValidationTask('check_account_type', _.bind(this._doValidateCheckType, this));
        this.model.addValidationTask('check_customfield', _.bind(this._doValidateEmail, this));
        
        //this.model.addValidationTask('customfield',_.bind(this.doValidateCustomfield, this));
            //this.test=<get value>//some thing like this
        

        //this.events['keyup input[name="email"]'] = 'formatAsPhoneNumber';
    },
    
    formatAsPhoneNumber: function(){
        var value = this.$(this.fieldTag).val();
        // do whatever you want to phoneNumber 
        value=value.substr(0,3)+'-'+value.substr(3,3)+'-'+value.substr(6,4);
        console.log(value);
        this.$(this.fieldTag).val(value);
    },
    
    _doValidateCheckType: function(fields, errors, callback) {

        //validate requirements
        if (this.model.get('account_type') == 'Customer' && _.isEmpty(this.model.get('phone_office')))
        {
            errors['phone_office'] = errors['phone_office'] || {};
            errors['phone_office'].required = true;
        }

        callback(null, fields, errors);
    },

    
    _doValidateEmail: function(fields, errors, callback) {
        console.log("in custom");
        console.log(this.model.get('customfield'));
            function validateEmail(email)   
            {  
             if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))  
              {  
                return (true)  
              }  
                console.log("You have entered an invalid email address!");
                return (false)  
            }      
        //validate email requirements
        if (!(validateEmail(this.model.get('customfield'))) && !(_.isEmpty(this.model.get('customfield'))))
        {
            errors['customfield'] = errors['customfield'] || {};
            errors['customfield'].required = true;
        }
        callback(null, fields, errors);
    },
    
    _doValidateCustomfield: function(fields, errors, callback) {
        console.log("in custom validation");
        //validate email requirements
        if (_.isEmpty(this.model.get('customfield')))
        {
            errors['customfield'] = errors['customfield'] || {};
            errors['customfield'].custom_message = true;
        }

        callback(null, fields, errors);
    },
    
})