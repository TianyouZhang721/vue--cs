import Vue from 'vue'
Vue.directive("swipe", {
    inserted(el) {
        console.log(el)
        let startX;
        el.addEventListener("touchstart", (e) => {
            console.log(e)
            startX = e.touches[0].clientX
        })
        el.addEventListener("touchend", (e) => {
            console.log(e.target)
            let endX = e.changedTouches[0].clientX
            console.log(startX, endX)
            if (startX - endX > 50) {
                let fs = parseInt(document.getElementsByTagName("html")[0].style.fontSize)
                let rem = 90 / 75
                console.log(fs)
                el.style.transform = "translateX(-"+rem+"rem)"
                el.style.transition = "all 1s"
            }
        })
    },
})