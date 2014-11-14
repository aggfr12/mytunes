require.config({

  paths:{
    'jquery' : 'bower_components/jquery/jquery',
    'underscore': 'bower_components/underscore/underscore',
    'backbone': 'bower_components/backbone/backbone'
  },

  shims:{

    'underscore':{
      exports: '_'
    },
    'backbone':{
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    }
  }

});


require(['jquery',
  'underscore',
  'backbone',
  'collections/Songs',
  'models/AppModel',
  'views/AppView',
  'data/data'],
  function($, _, Backbone, Songs, AppModel, AppView, songData){

  $(function(){
    // set up model objects
    var library = new Songs(songData);
    // var songQueue = new SongQueue();
    var app = new AppModel({library: library});


    // build a view for the top level of the whole app
    var appView = new AppView({model: app});

    // put the view onto the screen
    $('body').append(appView.render());
  });
});
