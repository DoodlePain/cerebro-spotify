import iconPath from './logo.png'
import Preview from './Preview/preview'
var Spotify = require('node-spotify-api');
import 'index.css'

export const icon = iconPath

export const fn = ({term, display, actions}) => {

  var search = (searchTerm) => {
    const q = encodeURIComponent('ciao')
    actions.open(searchTerm)
    actions.hideWindow()
  }
  var spotify = new Spotify({id: "5fc756d3b82e45df90d14b07517ade30", secret: "c50bf876f1e24f79a7648f1785426d7a"});
  const regex = /((\bspotify\b)|(\bs\b))+\s/g;
  const regexS = /((\bs\b))+\s/g
  var found = term.match(regex)
  var sterm = ''
  if (found !== null) {

    if (term.match(regexS)) {
      sterm = term.slice(2)
    } else {
      sterm = term.slice(8)
    }
    if(sterm===''){
        var response = 'Type the title of a song or an Artist'

        display({icon, title: response})
    }
    else{
      spotify.search({
      type: 'track',
      query: sterm,
      limit: 5
    }, function(err, data, actions) {
      if (err) {
        return console.log('Error occurred: ' + err);
      }
      if (data.tracks.total != 0) {
        var uri = data.tracks.items[0].external_urls.spotify
        var artist = data.tracks.items[0].artists[0].name
        var name = data.tracks.items[0].name
        var duration = data.tracks.items[0].duration
        var complete = name + ' - ' + artist
        const results = {
          name: name,
          artist: artist,
          duration: duration,
          complete: complete
        };

        var searchResult = []
        Object.keys(data.tracks.items).map((result) => {
          let c = data.tracks.items[result].name + ' - ' + data.tracks.items[result].artists[0].name
          searchResult = [
            ...searchResult, {
              complete: c,
              uri: data.tracks.items[result].external_urls.spotify
            }
          ]
        })
        var preview = {
          'padding': '0'
        }
        display({
          icon,
          title: results.complete,
          subtitle: 'test',
          onSelect: () => search(uri),
          getPreview: () => <Preview style={preview} searchResult={searchResult}/>
        });
      } else {
        var response = 'No matches for ' + sterm

        display({icon, title: response})
      }
    });
  }
  }
}
