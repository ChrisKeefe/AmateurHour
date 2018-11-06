// get random image
const primaryImageContainer = document.querySelector(".primaryImageContainer")
const randomTo15 = function(){return Math.floor(Math.random()*16)}
const url = 'https://gist.githubusercontent.com/ChrisKeefe/cc60c871074ee5be03bbea73ccb45090/raw/f10fec188daf185aad16766ad1db8c47899c4a60/CanyonImages.JSON'
const article = document.getElementsByTagName('article').item(0)
const imageList = [];

fetch(url)
  .then((response) => {
    if(response.ok){
      return response.json();
    }
  })
  .then(function(json) {
    imageList.push(...json.images);
    // TODO: get length of imageList (pass to addFeaturesToImage)
    insertRdmImage()
  })


function insertRdmImage() {
  // once we have length of imageList, pass that in to this function
  // then generate an array of ids, and pop them as we assign them to images
  // this should prevent duplication
  const id = randomTo15()

  const photoTitle = document.createElement("h2")
  photoTitle.innerText = imageList[id].title
  article.insertBefore(photoTitle, article.firstChild)

  const img = document.createElement("img")
  img.classList.add("primaryImage")
  img.src = imageList[id].image.src
  img.alt = imageList[id].caption
  primaryImageContainer.appendChild(img)
}


for(const image of imageList) {
  let title = image.title
  console.log(title);
}


// get image based on caption/name search
//NEW IMAGE button?
//More like this button?
//Dislike button?

//maybe this thing takes user dislikes (removes them from list) and
//preferences (shows "more like this" based on parsing of title words)
//saves common words from liked titles, and creates a user profile?

// var myImage = document.querySelector('img');
// var myRequest = new Request('flowers.jpg');
//
// fetch(myRequest).then(function(response) {
//   console.log(response.ok); // returns true if the response returned successfully
//   response.blob().then(function(myBlob) {
//     var objectURL = URL.createObjectURL(myBlob);
//     myImage.src = objectURL;
//   });
// });

// function getRandomImage(){
// TODO: finish
//     const objectIndex = Math.random() * json.images.length + 1
//     console.log(json.images[objectIndex])
//  }

 /**
  * Conserve aspect ratio of the original region. Useful when shrinking/enlarging
  * images to fit into a certain area.
  * @author (Stackexchange User) Jason J. Nathan
  * @author https://stackoverflow.com/questions/170624/javascript-image-resize#170636
  * @param {Number} srcWidth width of source image
  * @param {Number} srcHeight height of source image
  * @param {Number} maxWidth maximum available width
  * @param {Number} maxHeight maximum available height
  * @return {Object} { width, height }
  */
function calculateAspectRatioFit(srcWidth, srcHeight, maxWidth, maxHeight) {

    var ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);

    return { width: srcWidth*ratio, height: srcHeight*ratio };
 }
