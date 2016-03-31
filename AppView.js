var AppView = Backbone.View.extend({


  initialize: function(params) {
    this.albumView = new AlbumView({collection: myAlbum});
    this.jumboView = new JumbotronView({model: myAlbum.models[0]});

  },

  render: function() {
    return this.$el.html([
      this.albumView.$el,
      this.jumboView.$el,
    ]);
  }

});
