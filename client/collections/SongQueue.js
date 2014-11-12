// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add',this.handleEnqueue);
    this.on('ended',this.handleDequeue);
  },

  handleEnqueue: function(song){
    if(this.length === 1){
      this.playFirst(song);
    }
  },

  handleDequeue: function(song){
    this.shift();
  },

  playFirst: function(){

  }

});
