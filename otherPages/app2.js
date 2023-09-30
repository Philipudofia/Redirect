const receiverMail = document.getElementById('email')
const videoName = document.getElementById('videoName')
const videoUrl = document.getElementById('videoUrl')
const videoSrc = document.getElementById('videoSrc')
const copyToClipboard = document.querySelector(".copy")
console.log(videoName.value)

fetch("https://recordplus.onrender.com/api/record/videos/?format=json").then(res => res.json().then((data) => {
    let mostRecent = data.length - 1
    console.log(data)
    if (!videoName.value) {
        videoName.value = data[mostRecent].title
    }
    videoSrc.src = data[mostRecent].video_file
    videoUrl.value = data[mostRecent].video_file
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
