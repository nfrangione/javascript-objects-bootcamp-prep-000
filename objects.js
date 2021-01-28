var playlist = new Object({PnBRock: "Selfish"});

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName]: songTitle})
}