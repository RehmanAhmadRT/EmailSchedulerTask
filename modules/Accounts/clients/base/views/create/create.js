({
    extendsFrom: 'CreateView',
    initialize: function (options) {

        //add custom message key
        app.error.errorName2Keys['customfield_error'] = 'This is a mendatory field';


        this._super('initialize', [options]);

        
        //add validation tasks
        this.model.addValidationTask('check_account_type', _.bind(this._doValidateCheckType, this));
        this.model.addValidationTask('check_email', _.bind(this._doValidateEmail, this));
        this.model.addValidationTask('check_customfield',_bind(this._doValidatecustomfield,this));
    },

    _doValidateCheckType: function(fields, errors, callback) {
        //validate type requirements
        if (this.model.get('account_type') == 'Customer' && _.isEmpty(this.model.get('phone_office')))
        {
            errors['phone_office'] = errors['phone_office'] || {};
            errors['phone_office'].required = true;
        }
s
        callback(null, fields, errors);
    },

    _doValidateEmail: function(fields, errors, callback) {
        //validate email requirements
        if (_.isEmpty(this.model.get('email')))
        {
            errors['email'] = errors['email'] || {};
            errors['email'].required = true;
        }

        callback(null, fields, errors);
    },
    
    _doValidatecustomfield: function(fields, errors, callback) {
        //validate email requirements
        if (true)//_.isEmpty(this.model.get('Custom_ID'))
        {
            errors['customfield'] = errors['customfield'] || {};
            errors['customfield'].required = true;
        }

        callback(null, fields, errors);
    },
})