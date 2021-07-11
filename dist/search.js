inlets = 2;

function bang() {
  post('ready', '\n');
}

function search(channelName) {
  post(channelName, '\n');

  post('search for: ' + channelName);
  var api = new LiveAPI('live_set');
  var totalTracks = api.getcount('tracks'); // children & properties can be obtained via get
  post('total tracks: ' + totalTracks);
  for (var i = 0; i < totalTracks; i++) {
    api.path = 'live_set tracks ' + i;
    if (api.get('name').indexOf(channelName) > -1) {
      post('found Channel: '+api.id);
      var view = new LiveAPI('live_set view');
      view.set('selected_track', 'id', api.id);

      api.path = 'live_set tracks ' + i;
      var clipSlots = new LiveAPI('clip_slots');
      post('clips: '+clipSlots);

    }
  }
}
