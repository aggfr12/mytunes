define(['underscore', 'backbone'], function(_, Backbone){
  // SongModel.js - Defines a backbone model class for songs.
  var SongModel = Backbone.Model.extend({

    initialize: function(){
      this.set('count',0);
    },
    // count: 0,

    play: function(){
      // Triggering an event here will also trigger the event on the collection
      // this.set('count', this.get('count')+1);
      this.trigger('play', this);
    },

    enqueue: function(){
      this.trigger('enqueue', this);
    },

    dequeue: function(){
      this.trigger('dequeue', this);
    },

    ended: function(){
      this.trigger('ended', this);
    },

    stop: function(){
      this.trigger('stop', this);
    },

  });
  return SongModel;
});
