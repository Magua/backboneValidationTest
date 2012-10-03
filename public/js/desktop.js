// Sets the require.js configuration for your application.
require.config({
  
  // 3rd party script alias names (Easier to type "jquery" than "libs/jquery-1.7.2.min")
  paths: {

      // Core Libraries
      "modernizr": "libs/modernizr",
      "jquery": "libs/jquery",
      "bootstrap": "plugins/bootstrap",
      "underscore": "libs/lodash",
      "backbone": "libs/backbone",
      "backbone-validation": "plugins/backbone-validation-amd"

  },

  // Sets the configuration for your third party scripts that are not AMD compatible
  shim: {

      // Twitter Bootstrap jQuery plugins
      "bootstrap": ["jquery"],

      "backbone": {
          "deps": ["underscore", "jquery"],
          "exports": "Backbone"  //attaches "Backbone" to the window object
      },

      // Backbone.validateAll depends on Backbone.
      "backbone-validation": ["backbone"]

  } // end Shim Configuration
  
});

// Include Desktop Specific JavaScript files here (or inside of your Desktop router)
require(['modernizr','jquery','backbone','routers/desktopRouter','bootstrap','backbone-validation'], function(Modernizr, $, Backbone, Desktop) {

    // Instantiates a new Router
    this.router = new Desktop();
});