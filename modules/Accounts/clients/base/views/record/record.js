({
    //this file is overridden to change add a button to actiondropdown and send email
    extendsFrom: 'RecordView',

    zipJSON: {},

    initialize: function (options) {
        this._super('initialize', [options]);

        //add listener for custom button
        this.context.on('button:send_custom_email:click', this.send_custom_email, this);
    },

    send_custom_email: function() {
      var self=this;
      selfthis=this;
      console.log("Send Email Button Clicked");
      var url = app.api.buildURL('SendEmail', null, null, null);

      var module_name = self.model.module;
      var record_id = self.model.get('id');
      var template_id = self.model.get('emailtemplate_id');
      var checkedIds = new Array();

      app.alert.show('initialize', {
           level: 'process',
           messages: 'loading'
      });

      //to send email to all checked accounts
      app.api.call('create', url, {'module_name': module_name}, {
          success: function (response) {
             console.log(response);
              app.alert.dismissAll();

          },
          error: function (error) {
              // app.alert.show("server-error", {
              //     level: 'error',
              //     messages: error,
              //     autoClose: false
              // });
          }
      });

      //to send email to a specific account from which the button is clicked
      //  app.api.call('create', url, {'module_name': module_name, record_id: record_id, template_id: template_id  }, {
      //      success: function (response) {
      //         console.log(response);
      //          app.alert.dismissAll();
       //
      //      },
      //      error: function (error) {
      //        console.log(response);
      //          app.alert.show("server-error", {
      //              level: 'error',
      //              messages: error,
      //              autoClose: false
      //          });
      //      }
      //  });



    }
})
