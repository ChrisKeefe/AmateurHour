// get random image
let data = null

function getRandomImage(){
  fetch('https://gist.githubusercontent.com/kevindeedavis/7d00db771e821d59acc3/raw/b499077bbe762f843b1ff34d02613ee94786ed89/.js', {
    method: 'GET'
  })
  .then(function(response) { return response.json(); })
  .then(function(json) {
    data = json.images.length
    console.log(data)
    const objectIndex = Math.random() * json.images.length + 1
    console.log(json.images[objectIndex])
  });
}
// get image based on caption/name search
getRandomImage()
