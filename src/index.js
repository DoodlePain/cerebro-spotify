import iconPath from './logo.png'
import Preview from './Preview/preview'
var Spotify = require('node-spotify-api');
import './general.css'

export const icon = iconPath

export const fn = ({term, display, actions}) => {

  var search = (searchTerm) => {
    const q = encodeURIComponent('ciao')
    actions.open(searchTerm)
    actions.hideWindow()
  }
  var spotify = new Spotify({id: "5fc756d3b82e45df90d14b07517ade30", secret: "c50bf876f1e24f79a7648f1785426d7a"});
  // console.log("CIAO ", term);
  spotify.search({
    type: 'track',
    query: term
  }, function(err, data, actions) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    if (data.tracks.total != 0) {
      // console.log("Ciao", data);
      var uri = data.tracks.items[0].external_urls.spotify
      // console.log(uri);
      var artist = data.tracks.items[0].artists[0].name
      var name = data.tracks.items[0].name
      var duration = data.tracks.items[0].duration
      var complete = name + ' - ' + artist
      // searchResult = [
      //   ...searchResult, {
      //     name: name,
      //     artist: artist,
      //     uri: uri,
      //     duration: duration,
      //     complete: complete
      //   }
      // ]
      const results = {
        name: name,
        artist: artist,
        duration: duration,
        complete: complete
      };

      var searchResult = []
      Object.keys(data.tracks.items).map((result) => {
        console.log(data.tracks.items[result]);
        let c = data.tracks.items[result].name + ' - ' + data.tracks.items[result].artists[0].name
        searchResult = [
          ...searchResult, {
            complete: c,
            uri: data.tracks.items[result].external_urls.spotify
          }
        ]
      })
      // console.log(searchResult);
      display({
        icon,
        title: results.complete,
        subtitle: 'test',
        onSelect: () => search(uri),
        getPreview: () => <Preview searchResult={searchResult}/>
      });
    } else {
      var response = 'No matches for ' + term

      display({icon, title: response})
    }
  });
  // if (term === 'spotify') {
  // display({title: `Searching ${term} on Spotify`})
  // }
}