// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add',this.handleEnqueue);
    this.on('ended', this.handleNextSong);
    this.on('dequeue', this.handleDequeue);
  },

  handleEnqueue: function(song){
    if(this.length === 1){
      this.playFirst(song);
    }
  },

  handleNextSong: function(song){
    this.shift();
    if(this.length > 0){
      this.playFirst();
    }else{
      song.stop();
    }
  },

  handleDequeue: function(song){
    if(this.at(0) === song){
      this.handleNextSong(song);
    }
    else{
      this.remove(song);
    }
  },

  playFirst: function(){
    this.at(0).play();
  },

  // endPlay: function(){
  //   alert('ENDED');
  //   this.trigger('ended', this);
  // }
});
