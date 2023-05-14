const users = [
    {
        img: "./imgs/img1.jpg",
        name: "Touati Karim",
        job: "Front End devoloper",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus veritatis, distinctio molestias"
    },
    {
        img: "./imgs/img2.jpg",
        name: "Ikhlas Ben Yousef",
        job: "UI/UX",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus veritatis, distinctio molestias"
    },
    {
        img: "./imgs/img3.jpg",
        name: "Semi Touati",
        job: "Front End React.JS",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus veritatis, distinctio molestias"
    },
    {
        img: "./imgs/img4.jpg",
        name: "Imed Touati",
        job: "taxist",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus veritatis, distinctio molestias"
    },
    {
        img: "./imgs/img5.jpg",
        name: "karima Touati",
        job: "Finance",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus veritatis, distinctio molestias"
    },
    {
        img: "./imgs/img6.jpg",
        name: "Fatma Touati",
        job: "no Job",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus veritatis, distinctio molestias"
    },
]

const img = document.querySelector('.img')
const userName = document.querySelector('.name')
const userJob = document.querySelector('.job')
const userDesc = document.querySelector('.desc')

const btnIcon = document.querySelectorAll('.icons i')
const randomBtn = document.querySelector('.random')

let currentItem = 0

window.addEventListener('DOMContentLoaded', () => {
    getUsers()
})

btnIcon.forEach(btn => {
    btn.addEventListener('click', (e) => {
      let value = e.target
       
      // next Button
      if(value.classList.contains('next')) {
        currentItem++
        if(currentItem > users.length -1) {
           currentItem = 0
        }
        getUsers()
      }

      // Previous Button
      if(value.classList.contains('previous')) {
        currentItem--
        if(currentItem < 0) {
          currentItem = users.length - 1
        }
        getUsers()
      }
    })
})
    
randomBtn.addEventListener('click', () => {
    // Random Button
      currentItem = Math.floor(Math.random() * users.length)
      getUsers()
})

function getUsers() {
    let item = users[currentItem]
    img.src = item.img
    userName.textContent = item.name
    userJob.textContent = item.job
    userDesc.textContent = item.desc
}

