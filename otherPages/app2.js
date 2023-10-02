const receiverMail = document.getElementById('email')
const videoName = document.getElementById('videoName')
const videoUrl = document.getElementById('videoUrl')
const videoSrc = document.getElementById('videoSrc')
const copyToClipboard = document.querySelector(".copy")
console.log(videoName.value)
const titleValue = window.location.search;
const urlParams = new URLSearchParams(titleValue)
const titleParam = urlParams.get('title')
console.log(titleParam)
fetch("https://recordplus.onrender.com/api/record/videos/?format=api").then(res => res.json().then((data) => {
  console.log(data)
    let recent = data.filter((e)=>e.title ==titleParam)
    console.log(recent[0].value)
    if (!videoName.value) {
        videoName.value = recent[0].title
    }
    videoSrc.src = recent[0].video_file
    videoUrl.value = recent[0].video_file
}).catch(err=> console.log("err")))

const copyContent = async () => {
    try {
      await navigator.clipboard.writeText(videoUrl.value);
      alert('Copied to clipboard')
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
}

copyToClipboard.addEventListener('click', copyContent)
