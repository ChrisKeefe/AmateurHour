const url = 'https://gist.githubusercontent.com/ChrisKeefe/cc60c871074ee5be03bbea73ccb45090/raw/6b23f9d235b31a0e7442fa40e7b0561802f16288/CanyonImages.JSON'
const primaryImageContainer = document.querySelector(".primaryImageContainer")
const article = document.getElementsByTagName('article').item(0)
const dataCredit = document.querySelector(".data-credit")
const randomTo15 = function(){return Math.floor(Math.random()*16)}
const imageList = [];

function loadNewImage(){
  fetch(url)
    .then((response) => {
      if(response.ok){
        return response.json();
      }
    })
    .then(function(json) {
      imageList.push(...json.images);
      const id = randomTo15()
      insertImageTitle(id)
      insertRdmImage(id)
      insertCaption(id)
      insertAttribution(id)
      insertDataAttribution()
    })
}loadNewImage()

function insertImageTitle(id) {
  const photoTitle = document.createElement("h2")
  photoTitle.innerText = imageList[id].title
  article.insertBefore(photoTitle, article.firstChild)
}

function insertRdmImage(id) {
  const img = document.createElement("img")
  img.classList.add("primaryImage")
  img.src = imageList[id].image.src
  img.alt = imageList[id].caption
  primaryImageContainer.appendChild(img)
}

function insertCaption(id) {
  const imgCaption = document.createElement("p")
  imgCaption.classList.add("caption")
  imgCaption.innerText = imageList[id].caption
  article.appendChild(imgCaption)
}

function insertAttribution(id) {
  const attribution = document.createElement("p")
  attribution.classList.add("attribution")
  attribution.innerText = imageList[id].image.attribution
  article.insertBefore(attribution, dataCredit)
}

function insertDataAttribution() {
  const attribution = document.createElement("p")
  attribution.classList.add("data-credit")
  attribution.innerHTML = "Data modified from <a href = \"https://gist.github.com/kevindeedavis/7d00db771e821d59acc3\">KevinDeeDavis</a>"
  article.appendChild(attribution)
}


for(const image of imageList) {
  let title = image.title
  console.log(title);
}
