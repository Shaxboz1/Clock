let hr = document.querySelector("#hr")
let mn = document.querySelector("#mn")
let sc = document.querySelector("#sc")

setInterval(()=>{
    let day = new Date()
    let hh = day.getHours() * 30
    let mm = day.getMinutes() * 6
    let ss = day.getSeconds() * 6
    
    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`
    mn.style.transform = `rotateZ(${mm}deg)`
    sc.style.transform = `rotateZ(${ss}deg)`

    let hour = document.getElementById("hour")
    let min = document.getElementById("min")
    let sec = document.getElementById("sec")
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    h = (h < 10) ? "0" + h : h
    m = (m < 10) ? "0" + h : m
    s = (s < 10) ? "0" + h : s

    hour.innerHTML = h;
    min.innerHTML = m;
    sec.innerHTML = s;
})