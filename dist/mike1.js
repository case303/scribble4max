// mike1.js, first attempt of musics with code
// Mike Williams (mikew@nucleus.com)
// © 2021

autowatch = 1;
inlets = 2;

function sample_callback(args) {
  post("callback called with arguments: ", args, "\n")
}

function bang() {
  post('ready', '\n');
}

function mike1() {
  post("Functions", "\n")
  post("keyChords(trackId)", "\n")
}

function keyChords(trackId) {
  //post("trackId", trackId, "\n")
  post("=========================\n")
  var idPath = "id " + trackId;
  post("trackPath", trackPath, "\n")

  var api = new LiveAPI(sample_callback, idPath)
  if (!api && api.path == "") {
    post("no api object\n")
    return
  }
  post("api.get(\"name\") is", api.get("name"), "\n")

  var clipSlotPath = "live_set tracks " + trackId + " clip_slots " + sceneIndex;
  var clipSlot = new LiveAPI(sample_callback, clipSlotPath)
  if (!clipSlot && clipSlot.path == "") {
    post("no clipSlot object\n")
    return
  }
  post("api.get(\"name\") is", api.get("name"), "\n")
  
  //post("api.id is", api.id, "\n")
  //post("api.path is", api.path, "\n")
  // MISC. details
  //post("api.info is", api.info, "\n")
  //post("api.children are", api.children, "\n")
  //post('api.getcount("devices")', api.getcount("devices"), "\n")
  //post("api.mode", api.mode ? "follows path" : "follows object", "\n")

  // Set Mute?
  //api.property = "mute"
  //post("api.property is", api.property, "\n")
  //post("type of", api.property, "is", api.proptype, "\n")
}
