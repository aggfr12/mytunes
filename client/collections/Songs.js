define(['backbone', 'collections/Songs'],function(Backbone, Songs){
  // Songs.js - Defines a backbone collection class for songs.
  var Songs = Backbone.Collection.extend({

    model: SongModel,

    initialize: function(){
      this.on('play', function(song){
        song.set('count', song.get('count')+1);
      }, this);
    },


  });
  return Songs;
});
