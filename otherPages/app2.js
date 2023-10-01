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
fetch("https://recordplus.onrender.com/api/record/videos/?format=json").then(res => res.json().then((data) => {
    let recent = data.filter((e)=>e.title ==titleParam)
    console.log(recent)
    if (!videoName.value) {
        videoName.value = recent.title
    }
    videoSrc.src = recent.video_file
    videoUrl.value = recent.video_file
}).catch(err=> console.log(err)))

const copyContent = async () => {
    try {
      await navigator.clipboard.writeText(videoUrl.value);
      alert('Copied to clipboard')
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
}

copyToClipboard.addEventListener('click', copyContent)
