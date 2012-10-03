define(["jquery", "backbone"], function($, Backbone) {

  var User = Backbone.Model.extend({

    // Model Constructor
    initialize : function() {

    },

    // Default values for all of the User Model attributes
    defaults : {

      firstname : "",

      lastname : "",

      email : "",

      phone : ""

    },
    validation : {
      firstname : {
        required : true
      },
      lastname : {
        required : true
      },
      email : {
        pattern : 'email'
      },
      phone : {
        required : true
      }
    }

  });

  // Returns the Model class
  return User;

});
