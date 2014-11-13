// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add',this.handleEnqueue);
    this.on('ended',this.handleDequeue);
    this.on('dequeue', this.handleDequeue);
  },

  handleEnqueue: function(song){
    if(this.length === 1){
      this.playFirst(song);
    }
  },

  handleDequeue: function(song){
    this.remove(song);
    if(this.length > 0){
      this.playFirst();
    }
  },

  playFirst: function(){
    this.at(0).play();
  }
});
