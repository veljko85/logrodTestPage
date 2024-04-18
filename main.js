
let browser;
function getBrowser() {
    if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
        browser = 'Opera'
    } else if (navigator.userAgent.indexOf("Edg") != -1) {
        browser = 'Edge'
    } else if (navigator.userAgent.indexOf("Chrome") != -1) {
        browser = 'Chrome'
    } else if (navigator.userAgent.indexOf("Safari") != -1) {
        browser = 'Safari'
    } else if (navigator.userAgent.indexOf("Firefox") != -1) {
        browser = 'Firefox'
    } else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) //IF IE > 10
    {
        browser = 'IE'
    } else {
        browser = 'unknown'
    }
}
getBrowser()
// console.log(browser)
//DATA SECTION/////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//FOR WEBFLOW

// //ENG
// let projectComponentContainers = document.getElementsByClassName('project-component-container')

// let coordinatesDivs = document.getElementsByClassName("coordinates")
// // console.log(coordinatesDivs[0].innerHTML)

// let coordinates = [];
// for (let i = 0; i < coordinatesDivs.length; i++) {
//     coordinates.push(coordinatesDivs[i].innerHTML)
// }
// // console.log(coordinates)

// let projectThumbnailsSrc = []
// let projectThumbnails = document.getElementsByClassName('project-thumbnail')
// for (let i = 0; i < projectThumbnails.length; i++) {
//     projectThumbnailsSrc.push(projectThumbnails[i].src)
// }
// // console.log(projectThumbnailsSrc)

// let projectTitlesNames = []
// let projectTitles = document.getElementsByClassName('project-title')
// for (let i = 0; i < projectTitles.length; i++) {
//     projectTitlesNames.push(projectTitles[i].innerHTML)
// }
// // console.log(projectTitlesNames)

// let projectTitlesNamesGer = []
// let projectTitlesGer = document.getElementsByClassName('project-title-ger')
// for (let i = 0; i < projectTitlesGer.length; i++) {
//     projectTitlesNamesGer.push(projectTitlesGer[i].innerHTML)
// }
// // console.log(projectTitlesNamesGer)

// let projectAdresses = []
// let projectAdressesDiv = document.getElementsByClassName('project-adress')
// for (let i = 0; i < projectAdressesDiv.length; i++) {
//     projectAdresses.push(projectAdressesDiv[i].innerHTML)
// }
// // console.log(projectAdresses)

// let projectAdressesGer = []
// let projectAdressesDivGer = document.getElementsByClassName('project-adress-ger')
// for (let i = 0; i < projectAdressesDivGer.length; i++) {
//     projectAdressesGer.push(projectAdressesDivGer[i].innerHTML)
// }
// // console.log(projectAdressesGer)

// let projectDescriptions = []
// let projectDescriptionsDiv = document.getElementsByClassName('project-description')
// for (let i = 0; i < projectDescriptionsDiv.length; i++) {
//     projectDescriptions.push(projectDescriptionsDiv[i].innerHTML)
// }
// // console.log(projectDescriptions)

// let projectDescriptionsGer = []
// let projectDescriptionsDivGer = document.getElementsByClassName('project-description-ger')
// for (let i = 0; i < projectDescriptionsDivGer.length; i++) {
//     projectDescriptionsGer.push(projectDescriptionsDivGer[i].innerHTML)
// }
// // console.log(projectDescriptionsGer)

// let projectImagesSrc = []
// let projectImagesOne = document.getElementsByClassName('project-image-one')
// let projectImagesTwo = document.getElementsByClassName('project-image-two')
// let projectImagesThree = document.getElementsByClassName('project-image-three')
// for (let i = 0; i < projectComponentContainers.length; i++) {
//     projectImagesSrc[i] = [projectImagesOne[i].src, projectImagesTwo[i].src, projectImagesThree[i].src]
// }
// // console.log(projectImagesSrc)

// let showOnMap = []
// let showOnMapDivs = document.getElementsByClassName('show-on-map-div')
// // console.log(showOnMapDivs.length)
// for (let i = 0; i < showOnMapDivs.length; i++) {
//     showOnMap.push(showOnMapDivs[i].innerHTML)
// }
// // console.log(showOnMap)

//GER
// let projectComponentContainers = document.getElementsByClassName('project-component-container')

// let coordinatesDivs = document.getElementsByClassName("coordinates")
// console.log(coordinatesDivs[0].innerHTML)

// let coordinates = [];
// for (let i = 0; i < coordinatesDivs.length; i++) {
//     coordinates.push(coordinatesDivs[i].innerHTML)
// }
// console.log(coordinates)

// let projectThumbnailsSrc = []
// let projectThumbnails = document.getElementsByClassName('project-thumbnail')
// for (let i = 0; i < projectThumbnails.length; i++) {
//     projectThumbnailsSrc.push(projectThumbnails[i].src)
// }
// console.log(projectThumbnailsSrc)

// let projectTitlesNamesEng = []
// let projectTitlesEng = document.getElementsByClassName('project-title')
// for (let i = 0; i < projectTitlesEng.length; i++) {
//     projectTitlesNamesEng.push(projectTitlesEng[i].innerHTML)
// }
// console.log(projectTitlesNamesEng)

// let projectTitlesNames = []
// let projectTitles = document.getElementsByClassName('project-title-ger')
// for (let i = 0; i < projectTitles.length; i++) {
//     projectTitlesNames.push(projectTitles[i].innerHTML)
// }
// console.log(projectTitlesNames)

// let projectAdressesEng = []
// let projectAdressesDivEng = document.getElementsByClassName('project-adress')
// for (let i = 0; i < projectAdressesDivEng.length; i++) {
//     projectAdressesEng.push(projectAdressesDivEng[i].innerHTML)
// }
// console.log(projectAdressesEng)

// let projectAdresses = []
// let projectAdressesDiv = document.getElementsByClassName('project-adress-ger')
// for (let i = 0; i < projectAdressesDiv.length; i++) {
//     projectAdresses.push(projectAdressesDiv[i].innerHTML)
// }
// console.log(projectAdresses)

// let projectDescriptionsEng = []
// let projectDescriptionsDivEng = document.getElementsByClassName('project-description')
// for (let i = 0; i < projectDescriptionsDivEng.length; i++) {
//     projectDescriptionsEng.push(projectDescriptionsDivEng[i].innerHTML)
// }
// console.log(projectDescriptionsEng)

// let projectDescriptions = []
// let projectDescriptionsDiv = document.getElementsByClassName('project-description-ger')
// for (let i = 0; i < projectDescriptionsDiv.length; i++) {
//     projectDescriptions.push(projectDescriptionsDiv[i].innerHTML)
// }
// console.log(projectDescriptions)

// let projectImagesSrc = []
// let projectImagesOne = document.getElementsByClassName('project-image-one')
// let projectImagesTwo = document.getElementsByClassName('project-image-two')
// let projectImagesThree = document.getElementsByClassName('project-image-three')
// for (let i = 0; i < projectComponentContainers.length; i++) {
//     projectImagesSrc[i] = [projectImagesOne[i].src, projectImagesTwo[i].src, projectImagesThree[i].src]
// }
// console.log(projectImagesSrc)

// let showOnMap = []
// let showOnMapDivs = document.getElementsByClassName('show-on-map-div')
// console.log(showOnMapDivs.length)
// for (let i = 0; i < showOnMapDivs.length; i++) {
//     showOnMap.push(showOnMapDivs[i].innerHTML)
// }
// console.log(showOnMap)

//FOR LOCAL DEV

//ENG
let coordinates = ['4.47,0.23,12.16', '9.26,0.20,8.27', '8.51,-0.02,8.90', '8.62,-0.02,8.82', '4.80,0.24,20.18', '4.03,0.21,20.88', '-26.53,0.09,33.74', '21.31,0.49,12.18', '-13.76,0.01,23.03', '-3.23,0.19,10.19']

let projectThumbnailsSrc = ['https://assets-global.website-files.com/65f2ac5c5bdc4db205397c9e/65f831bf989211966d7c3eb5_2.webp', 'https://assets-global.website-files.com/65f2ac5c5bdc4db205397c9e/660e71bd7a05c803e90073be_9.webp', 'https://assets-global.website-files.com/65f2ac5c5bdc4db205397c9e/660e70891967766d0b7a41c2_8.webp', 'https://assets-global.website-files.com/65f2ac5c5bdc4db205397c9e/660e6fd2e2ab5633629956ba_7.webp', 'https://assets-global.website-files.com/65f2ac5c5bdc4db205397c9e/660e6e7824fce8fe497b6216_6.webp', 'https://assets-global.website-files.com/65f2ac5c5bdc4db205397c9e/65f831b50cacb21c53da36db_1.webp', 'https://assets-global.website-files.com/65f2ac5c5bdc4db205397c9e/65f831d2989211966d7c4c0f_4.webp', 'https://assets-global.website-files.com/65f2ac5c5bdc4db205397c9e/65f831c9556036c3dc1b1731_3.webp', 'https://assets-global.website-files.com/65f2ac5c5bdc4db205397c9e/65f831bf989211966d7c3eb5_2.webp', 'https://assets-global.website-files.com/65f2ac5c5bdc4db205397c9e/65f831b50cacb21c53da36db_1.webp']

let projectTitlesNames = ['Versmannhaus 2.OG', 'Hanseviertel Hohe Bleichen 22 ÈG', 'Hanseviertel Große Bleichen 30 5.OG', 'Hanseviertel Grosse Bleichen 30 1.OG', 'Hafencity S-Kai Corridor', 'Hafencity Coffee Plaza East Rooftop', 'Fourth Project', 'Third Project', 'Second Project', 'First Project']

let projectTitlesNamesGer = ['Versmannhaus 2.OG(ger)', 'Hanseviertel Hohe Bleichen 22 ÈG(ger)', 'Hanseviertel Große Bleichen 30 5.OG(ger)', 'Hanseviertel Grosse Bleichen 30 1.OG(ger)', 'Hafencity S-Kai Corridor(ger)', 'Hafencity Coffee Plaza East Rooftop(ger)', 'Fourth Project(ger)', 'Third Project(ger)', 'Second Project (ger)', 'First Project(ger)']

let projectAdresses = ['Mönckebergstraße 27, 20095 Hamburg, Germany', 'Hohe Bleichen 22, 20354 Hamburg, Germany', 'Große Bleichen 30/36, 20354 Hamburg, Germany', 'Große Bleichen 30/36, 20354 Hamburg, Germany', 'Am Sandtorkai 50, 20457 Hamburg, Germany', '20457 Hamburg, Germany', 'Adress 4', 'Adress 3', 'Adrees 2', 'Adress 1']

let projectAdressesGer = ['20095 Hamburg, Deutschland', 'Hohe Bleichen 22, 20354 Hamburg, Deutschland', 'Große Bleichen 30/36, 20354 Hamburg, Deutschland', 'Große Bleichen 30/36, 20354 Hamburg, Deutschland', 'Am Sandtorkai 50, 20457 Hamburg, Deutschland', '20457 Hamburg, Deutschland', 'Adress 4(ger)', 'Adress 3(ger)', 'Adrees 2(ger)', 'Adress 1 (ger)']

let projectDescriptions = ["<p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p>‍</p>"]

let projectDescriptionsGer = []

let projectImagesSrc = [
    [
        "https://assets-global.website-files.com/65f2ac5c5bdc4db205397c9e/65f831bf989211966d7c3eb5_2.webp",
        "https://assets-global.website-files.com/65f2ac5c5bdc4db205397c9e/65f831bf989211966d7c3eb5_2.webp",
        "https://assets-global.website-files.com/65f2ac5c5bdc4db205397c9e/65f831bf989211966d7c3eb5_2.webp"
    ],
    [
        "https://assets-global.website-files.com/65f2ac5c5bdc4db205397c9e/660e71bd7a05c803e90073be_9.webp",
        "https://assets-global.website-files.com/65f2ac5c5bdc4db205397c9e/660e71bd7a05c803e90073be_9.webp",
        "https://assets-global.website-files.com/65f2ac5c5bdc4db205397c9e/660e71bd7a05c803e90073be_9.webp"
    ],
    [
        "https://assets-global.website-files.com/65f2ac5c5bdc4db205397c9e/660e70891967766d0b7a41c2_8.webp",
        "https://assets-global.website-files.com/65f2ac5c5bdc4db205397c9e/660e70891967766d0b7a41c2_8.webp",
        "https://assets-global.website-files.com/65f2ac5c5bdc4db205397c9e/660e70891967766d0b7a41c2_8.webp"
    ],
    [
        "https://assets-global.website-files.com/65f2ac5c5bdc4db205397c9e/660e6fd2e2ab5633629956ba_7.webp",
        "https://assets-global.website-files.com/65f2ac5c5bdc4db205397c9e/660e6fd2e2ab5633629956ba_7.webp",
        "https://assets-global.website-files.com/65f2ac5c5bdc4db205397c9e/660e6fd2e2ab5633629956ba_7.webp"
    ],
    [
        "https://assets-global.website-files.com/65f2ac5c5bdc4db205397c9e/660e6e7824fce8fe497b6216_6.webp",
        "https://assets-global.website-files.com/65f2ac5c5bdc4db205397c9e/660e6e7824fce8fe497b6216_6.webp",
        "https://assets-global.website-files.com/65f2ac5c5bdc4db205397c9e/660e6e7824fce8fe497b6216_6.webp"
    ],
    [
        "https://assets-global.website-files.com/65f2ac5c5bdc4db205397c9e/65f831b50cacb21c53da36db_1.webp",
        "https://assets-global.website-files.com/65f2ac5c5bdc4db205397c9e/65f831b50cacb21c53da36db_1.webp",
        "https://assets-global.website-files.com/65f2ac5c5bdc4db205397c9e/65f831b50cacb21c53da36db_1.webp"
    ],
    [
        "https://assets-global.website-files.com/65f2ac5c5bdc4db205397c9e/65f831d2989211966d7c4c0f_4.webp",
        "https://assets-global.website-files.com/65f2ac5c5bdc4db205397c9e/65f831d2989211966d7c4c0f_4.webp",
        "https://assets-global.website-files.com/65f2ac5c5bdc4db205397c9e/65f831d2989211966d7c4c0f_4.webp"
    ],
    [
        "https://assets-global.website-files.com/65f2ac5c5bdc4db205397c9e/65f831c9556036c3dc1b1731_3.webp",
        "https://assets-global.website-files.com/65f2ac5c5bdc4db205397c9e/65f831c9556036c3dc1b1731_3.webp",
        "https://assets-global.website-files.com/65f2ac5c5bdc4db205397c9e/65f831c9556036c3dc1b1731_3.webp"
    ],
    [
        "https://assets-global.website-files.com/65f2ac5c5bdc4db205397c9e/65f831bf989211966d7c3eb5_2.webp",
        "https://assets-global.website-files.com/65f2ac5c5bdc4db205397c9e/65f831bf989211966d7c3eb5_2.webp",
        "https://assets-global.website-files.com/65f2ac5c5bdc4db205397c9e/65f831bf989211966d7c3eb5_2.webp"
    ],
    [
        "https://assets-global.website-files.com/65f2ac5c5bdc4db205397c9e/65f831b50cacb21c53da36db_1.webp",
        "https://assets-global.website-files.com/65f2ac5c5bdc4db205397c9e/65f831b50cacb21c53da36db_1.webp",
        "https://assets-global.website-files.com/65f2ac5c5bdc4db205397c9e/65f831b50cacb21c53da36db_1.webp"
    ]
]

let showOnMap = ['yes', 'yes', 'yes', 'yes', 'yes', 'yes', 'no', 'no', 'no', 'no']

//GER

// let coordinates = ['4.47,0.23,12.16', '9.26,0.20,8.27', '8.51,-0.02,8.90', '8.62,-0.02,8.82', '4.80,0.24,20.18', '4.03,0.21,20.88', '-26.53,0.09,33.74', '21.31,0.49,12.18', '-13.76,0.01,23.03', '-3.23,0.19,10.19']

// let projectThumbnailsSrc = ['https://assets-global.website-files.com/65f2ac5c5bdc4db205397c9e/65f831bf989211966d7c3eb5_2.webp', 'https://assets-global.website-files.com/65f2ac5c5bdc4db205397c9e/660e71bd7a05c803e90073be_9.webp', 'https://assets-global.website-files.com/65f2ac5c5bdc4db205397c9e/660e70891967766d0b7a41c2_8.webp', 'https://assets-global.website-files.com/65f2ac5c5bdc4db205397c9e/660e6fd2e2ab5633629956ba_7.webp', 'https://assets-global.website-files.com/65f2ac5c5bdc4db205397c9e/660e6e7824fce8fe497b6216_6.webp', 'https://assets-global.website-files.com/65f2ac5c5bdc4db205397c9e/65f831b50cacb21c53da36db_1.webp', 'https://assets-global.website-files.com/65f2ac5c5bdc4db205397c9e/65f831d2989211966d7c4c0f_4.webp', 'https://assets-global.website-files.com/65f2ac5c5bdc4db205397c9e/65f831c9556036c3dc1b1731_3.webp', 'https://assets-global.website-files.com/65f2ac5c5bdc4db205397c9e/65f831bf989211966d7c3eb5_2.webp', 'https://assets-global.website-files.com/65f2ac5c5bdc4db205397c9e/65f831b50cacb21c53da36db_1.webp']

// let projectTitlesNamesEng = ['Versmannhaus 2.OG', 'Hanseviertel Hohe Bleichen 22 ÈG', 'Hanseviertel Große Bleichen 30 5.OG', 'Hanseviertel Grosse Bleichen 30 1.OG', 'Hafencity S-Kai Corridor', 'Hafencity Coffee Plaza East Rooftop', 'Fourth Project', 'Third Project', 'Second Project', 'First Project']

// let projectTitlesNames = ['Versmannhaus 2.OG(ger)', 'Hanseviertel Hohe Bleichen 22 ÈG(ger)', 'Hanseviertel Große Bleichen 30 5.OG(ger)', 'Hanseviertel Grosse Bleichen 30 1.OG(ger)', 'Hafencity S-Kai Corridor(ger)', 'Hafencity Coffee Plaza East Rooftop(ger)', 'Fourth Project(ger)', 'Third Project(ger)', 'Second Project (ger)', 'First Project(ger)']

// let projectAdressesEng = ['Mönckebergstraße 27, 20095 Hamburg, Germany', 'Hohe Bleichen 22, 20354 Hamburg, Germany', 'Große Bleichen 30/36, 20354 Hamburg, Germany', 'Große Bleichen 30/36, 20354 Hamburg, Germany', 'Am Sandtorkai 50, 20457 Hamburg, Germany', '20457 Hamburg, Germany', 'Adress 4', 'Adress 3', 'Adrees 2', 'Adress 1']

// let projectAdresses = ['20095 Hamburg, Deutschland', 'Hohe Bleichen 22, 20354 Hamburg, Deutschland', 'Große Bleichen 30/36, 20354 Hamburg, Deutschland', 'Große Bleichen 30/36, 20354 Hamburg, Deutschland', 'Am Sandtorkai 50, 20457 Hamburg, Deutschland', '20457 Hamburg, Deutschland', 'Adress 4(ger)', 'Adress 3(ger)', 'Adrees 2(ger)', 'Adress 1 (ger)']

// let projectDescriptionsEng = []

// let projectDescriptions = []

// let projectImagesSrc = []

// let showOnMap = ['yes', 'yes', 'yes', 'yes', 'yes', 'yes', 'no', 'no', 'no', 'no']

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//POP UP
function showPopUp(i) {
    // console.log(i)
    document.getElementById("projectPopUpContainer").style.display = "flex"
    document.getElementById("popUpMainImg").src = projectThumbnailsSrc[i]
    document.getElementById("popUpTitle").innerHTML = projectTitlesNames[i]
    document.getElementById("popUpAdress").innerHTML = projectAdresses[i]
    document.getElementById("popUpText").innerHTML = projectDescriptions[i]
    for (let j = 0; j < document.getElementsByClassName("pop-up-images").length; j++) {
        document.getElementsByClassName("pop-up-images")[j].src = projectImagesSrc[i][j]
    }
    setTimeout(() => {
        document.getElementById("projectPopUpContainer").style.opacity = "1"
    }, 100);

}
document.getElementById("popUpCloseBtn").onclick = () => {
    document.getElementById("projectPopUpContainer").style.opacity = "0"
    document.getElementById("projectPopUpContainer").style.display = "none"
}

//SWITCH
let mainContainerMapTL = gsap.fromTo(mainContainerMap, { top: -99 + "vh", }, { top: 0, duration: 1, delay: 0 })
mainContainerMapTL.pause()

let mainContainerProjectsTL = gsap.fromTo(mainContainerProjects, { top: -100 + "vh", }, { top: 0, duration: 1, delay: 0 })
mainContainerProjectsTL.pause()

let switcherGoToMap = "GO TO MAP"
let switcherGoToMapGer = "ZUR 3D KARTENANSICHT"
let switcherGoToPro = "GO TO PROJECTS"
let switcherGoToProGer = "ZUR PROJEKTANSICHT"

let switcher = document.createElement('div');
switcher.classList.add('switcher');
projectsWrap.appendChild(switcher);
switcher.innerHTML = switcherGoToMap

let switcherTL = gsap.fromTo(switcher, { opacity: 1, }, { opacity: 0, duration: 0.5, delay: 0 })
switcherTL.pause()

let mapOpen = false;
// switcher.onclick = () => {
//     if (!mapOpen) {
//         mapOpen = true
//         // strLineBottom.style.opacity = strLineTop.style.opacity = hrLineRight.style.opacity = hrLineLeft.style.opacity = projectCursor.style.opacity = projectCursorBckg.style.opacity = "0"
//         mainContainerMapTL.play()
//         mainContainerProjectsTL.play()
//         switcherTL.play()
//         setTimeout(() => {
//             switcher.innerHTML = switcherGoToPro
//             switcher.style.top = "auto"
//             if (screen.width > screen.height) {
//                 switcher.style.bottom = "0"
//             } else {
//                 switcher.style.bottom = "50px"
//             }
//             switcherTL.reverse()
//             closeProjectsPage()
//         }, 500);

//     } else {
//         mapOpen = false
//         mainContainerMapTL.reverse()
//         mainContainerProjectsTL.reverse()
//         switcherTL.play()
//         setTimeout(() => {
//             switcher.innerHTML = switcherGoToMap
//             switcher.style.bottom = "auto"
//             switcher.style.top = "0"
//             switcherTL.reverse()
//             // strLineBottom.style.opacity = strLineTop.style.opacity = hrLineRight.style.opacity = hrLineLeft.style.opacity = projectCursor.style.opacity = projectCursorBckg.style.opacity = "1"
//         }, 500);

//     }
// }

// switcher.addEventListener("mouseover", function () {
//     if (!mapOpen) {
//         mouseFollow.style.opacity = "0"
//         strLineBottom.style.opacity = strLineTop.style.opacity = hrLineRight.style.opacity = hrLineLeft.style.opacity = projectCursor.style.opacity = projectCursorBckg.style.opacity = "0"
//     }
// });
// switcher.addEventListener("mouseout", function () {
//     if (!mapOpen) {
//         mouseFollow.style.opacity = "1"
//         strLineBottom.style.opacity = strLineTop.style.opacity = hrLineRight.style.opacity = hrLineLeft.style.opacity = projectCursor.style.opacity = projectCursorBckg.style.opacity = "1"
//     }
// });

//PROJECTS
//mouse follow
let mouseFollow = document.createElement('div');
mouseFollow.classList.add('mouseFollow');
mainContainerProjects.appendChild(mouseFollow);
let mouseFollowTL = gsap.fromTo(mouseFollow, { opacity: 1, }, { opacity: 0, duration: 0.5, delay: 0 })
mouseFollowTL.pause()

let mouseFollowText = document.createElement('div');
mouseFollowText.classList.add('mouseFollowText');
mouseFollow.appendChild(mouseFollowText);
mouseFollowClickToExpl = "CLICK TO EXPLORE"
mouseFollowClickToExplGer = "KLICKEN SIE, UM PROJEKTE ZU ENTDECKEN"
mouseFollowText.innerHTML = mouseFollowClickToExpl

if (screen.width > screen.height) {
    document.addEventListener("mousemove", getMouse);
}
mouseFollow.style.position = "absolute"; //css		
var mouseFollowPos = { x: 0, y: 0 };

//CALLED IN BABYLON PART
if (screen.width > screen.height) setInterval(followMouse, 30);

var mouse = { x: 0, y: 0 }; //mouse.x, mouse.y

function getMouse(e) {
    mouse.x = e.pageX + 50;
    mouse.y = e.pageY + 20;
}

//CALLED IN BABYLON PART
function followMouse() {
    //1. find distance X , distance Y
    var distX = mouse.x - mouseFollowPos.x;
    var distY = mouse.y - mouseFollowPos.y;
    //Easing motion
    //Progressive reduction of distance 
    mouseFollowPos.x += distX / 5;
    mouseFollowPos.y += distY / 2;

    mouseFollow.style.left = mouseFollowPos.x + "px";
    mouseFollow.style.top = mouseFollowPos.y + "px";
}

//wraper to click to start
let projectsClickableWraper = document.createElement('div');
projectsClickableWraper.classList.add('projectsClickableWraper');
mainContainerProjects.appendChild(projectsClickableWraper);
//close button
let closeProjects = document.createElement('div');
closeProjects.classList.add('closeProjects');
mainContainerProjects.appendChild(closeProjects);

let closeIcon = document.createElement('div');
closeIcon.classList.add('closeIcon');
closeProjects.appendChild(closeIcon);
//projects wraper
let projWraper = document.createElement('div');
projWraper.classList.add('projects_wrapper');
mainContainerProjects.appendChild(projWraper);

let projCont = document.createElement('div');
projCont.classList.add('projects_container');
projWraper.appendChild(projCont);
//project background
let projBack = document.createElement('div');
projBack.classList.add('project_background');
projBack.draggable = true
projCont.appendChild(projBack);

//project background images
let projectsBckgImages = document.createElement('div');
projectsBckgImages.classList.add('projects-bckg-images');
projBack.appendChild(projectsBckgImages);
let projectsBckgImagesTL = gsap.fromTo(projectsBckgImages, { opacity: 0, }, { opacity: 1, duration: 2, delay: 1 })
projectsBckgImagesTL.pause()

//project transparent images array
// let projectsTransparentImgArray = [
//     "https://uploads-ssl.webflow.com/647095916f065a8bf193de4e/661e41db28573765f8f02a20_transparentBackgroundImage0.png",
//     "https://uploads-ssl.webflow.com/647095916f065a8bf193de4e/661e41db28573765f8f02a20_transparentBackgroundImage0.png",
//     "https://uploads-ssl.webflow.com/647095916f065a8bf193de4e/661e41db28573765f8f02a20_transparentBackgroundImage0.png",
//     "https://uploads-ssl.webflow.com/647095916f065a8bf193de4e/661e41db28573765f8f02a20_transparentBackgroundImage0.png",
//     "https://uploads-ssl.webflow.com/647095916f065a8bf193de4e/661e41db28573765f8f02a20_transparentBackgroundImage0.png",
//     "https://uploads-ssl.webflow.com/647095916f065a8bf193de4e/661e41db28573765f8f02a20_transparentBackgroundImage0.png",
//     "https://uploads-ssl.webflow.com/647095916f065a8bf193de4e/661e41db28573765f8f02a20_transparentBackgroundImage0.png",
//     "https://uploads-ssl.webflow.com/647095916f065a8bf193de4e/661e41db28573765f8f02a20_transparentBackgroundImage0.png",
//     "https://uploads-ssl.webflow.com/647095916f065a8bf193de4e/661e41db28573765f8f02a20_transparentBackgroundImage0.png",
//     "https://uploads-ssl.webflow.com/647095916f065a8bf193de4e/661e41db28573765f8f02a20_transparentBackgroundImage0.png",
// ]
let projectsTransparentImgArray = [
    "transparentBackgroundImage0.png",
    "transparentBackgroundImage0.png",
    "transparentBackgroundImage0.png",
    "transparentBackgroundImage0.png",
    "transparentBackgroundImage0.png",
    "transparentBackgroundImage0.png",
    "transparentBackgroundImage0.png",
    "transparentBackgroundImage0.png",
    "transparentBackgroundImage0.png",
    "transparentBackgroundImage0.png",
]
//project transparent images position
let projectsTransparentImgPosLeft = [400, -550, -500, 500, 600, -1300, 1400, -1100, 1400, -1400, 50, -100]
let projectsTransparentImgPosTop = [100, -400, 700, -800, 800, 400, -1200, -1000, -400, 1100, -1400, 1400]
if (screen.width < screen.height) {
    for (let i = 0; i < projectsTransparentImgPosLeft.length; i++) {
        projectsTransparentImgPosLeft[i] = projectsTransparentImgPosLeft[i] * 0.625
    }
    for (let i = 0; i < projectsTransparentImgPosTop.length; i++) {
        projectsTransparentImgPosTop[i] = projectsTransparentImgPosTop[i] * 0.625
    }
}
//project titles
let projectsTiles = document.createElement('div');
projectsTiles.classList.add('projects-titles');
projBack.appendChild(projectsTiles);
let projTitlForAppend = ["Upcoming Projects Showcase", "Futuristic Marvel", "Latest Sneak Peek Upcoming Projects Showcase", "Architectural Gem"]
let projTitlForAppendGer = ["Upcoming Projects Showcase", "Futuristic Marvel", "Latest Sneak Peek Upcoming Projects Showcase", "Architectural Gem"]
for (let i = 0; i < projTitlForAppend.length; i++) {
    let projTitl = document.createElement('div');
    projTitl.classList.add('projects-title');
    projectsTiles.appendChild(projTitl);
    projTitl.innerHTML = projTitlForAppend[i]
}


//project inner wraper
let projInnerWraper = document.createElement('div');
projInnerWraper.classList.add('projects_inner-wrapper');
projBack.appendChild(projInnerWraper);

/////////////
// let projBack = document.getElementsByClassName("project_background")[0]
// let projWraper = document.querySelector(".projects_wrapper")
let projBackWidth
let projBackHeight
let numOfTransperentBckgImgs

let projectsLength = projectThumbnailsSrc.length
// let projectsLength = 50

if (projectsLength < 6) {
    projBackWidth = 6000//2800
    projBackHeight = 4000//2000
    numOfTransperentBckgImgs = 2
}

if (projectsLength > 5 && projectsLength < 11) {
    projBackWidth = 7000//3000
    projBackHeight = 4500//2500
    numOfTransperentBckgImgs = 4
}

if (projectsLength < 21 && projectsLength > 10) {
    projBackWidth = 8000//4000
    projBackHeight = 5500//3200
    numOfTransperentBckgImgs = 7
}

if (projectsLength < 31 && projectsLength > 20) {
    projBackWidth = 10000//5000
    projBackHeight = 7000//4200
    numOfTransperentBckgImgs = 10
}

if (projectsLength > 30) {
    projBackWidth = 12000//6000
    projBackHeight = 9000//5000
    numOfTransperentBckgImgs = 10
}

let projBackXCenter = projBackWidth / 2;
let projBackYCenter = projBackHeight / 2;
projWraper.style.width = projBack.style.width = projectsBckgImages.style.width = projBackWidth + "px"
projWraper.style.height = projBack.style.height = projectsBckgImages.style.height = projBackHeight + "px"

// test.style.width = projBackWidth + "px"
// test.style.height = projBackHeight + "px"

//set transparent bckg images
for (let i = 0; i < numOfTransperentBckgImgs; i++) {
    let transparentBckgImg = document.createElement('div');
    transparentBckgImg.classList.add('transparent-bckg-img');
    projectsBckgImages.appendChild(transparentBckgImg);
    //set background
    transparentBckgImg.style.background = `url(${projectsTransparentImgArray[i]})`;
    transparentBckgImg.style.backgroundSize = "cover";
    //set position
    transparentBckgImg.style.left = (projBackXCenter + projectsTransparentImgPosLeft[i] - transparentBckgImg.offsetWidth / 2) + "px"
    transparentBckgImg.style.top = (projBackYCenter + projectsTransparentImgPosTop[i] - transparentBckgImg.offsetHeight / 2) + "px"

    if (i == 1) transparentBckgImg.style.scale = "1.2"
    if (i % 2 == 0) transparentBckgImg.style.scale = "1.3"
    if (i % 3 == 0) transparentBckgImg.style.scale = "1.1"
}


// let projectsTiles = document.querySelector(".projects-titles")
// projectsTiles.style.width = 700 + "px"
// projectsTiles.style.height = 500 + "px"
projectsTiles.style.left = (projBackXCenter - (projectsTiles.offsetWidth / 2)) + "px"
if (screen.width > screen.height) {
    projectsTiles.style.top = (projBackYCenter - (projectsTiles.offsetHeight / 2) - 200) + "px"
} else {
    projectsTiles.style.top = (projBackYCenter - (projectsTiles.offsetHeight / 2) - 130) + "px"
}
let projectsTilesTL = gsap.fromTo(projectsTiles, { opacity: 0, }, { opacity: 1, duration: 5, delay: 1 })
projectsTilesTL.pause()
//cursor
let strLineBottom = document.createElement('div');
strLineBottom.classList.add('strLineBottom');
projWraper.appendChild(strLineBottom);

let strLineBottomTilesTL = gsap.fromTo(strLineBottom, { opacity: 0, }, { opacity: 1, duration: 2, delay: 0 })
strLineBottomTilesTL.pause()

let strLineTop = document.createElement('div');
strLineTop.classList.add('strLineTop');
projWraper.appendChild(strLineTop);

let strLineTopTL = gsap.fromTo(strLineTop, { opacity: 0, }, { opacity: 1, duration: 2, delay: 0 })
strLineTopTL.pause()

let yCoordNum = document.createElement('div');
yCoordNum.classList.add('yCoordNum');
projWraper.appendChild(yCoordNum);
yCoordNum.innerHTML = "X - 100"

let yCoordNumTL = gsap.fromTo(yCoordNum, { opacity: 0, }, { opacity: 1, duration: 2, delay: 0 })
yCoordNumTL.pause()

let hrLineRight = document.createElement('div');
hrLineRight.classList.add('hrLineRight');
projWraper.appendChild(hrLineRight);

let hrLineRightTL = gsap.fromTo(hrLineRight, { opacity: 0, }, { opacity: 1, duration: 2, delay: 0 })
hrLineRightTL.pause()

let hrLineLeft = document.createElement('div');
hrLineLeft.classList.add('hrLineLeft');
projWraper.appendChild(hrLineLeft);

let hrLineLeftTL = gsap.fromTo(hrLineLeft, { opacity: 0, }, { opacity: 1, duration: 2, delay: 0 })
hrLineLeftTL.pause()

let xCoordNum = document.createElement('div');
xCoordNum.classList.add('xCoordNum');
projWraper.appendChild(xCoordNum);
xCoordNum.innerHTML = "Y - 100"

let xCoordNumTL = gsap.fromTo(xCoordNum, { opacity: 0, }, { opacity: 1, duration: 2, delay: 0 })
xCoordNumTL.pause()

let projectCursor = document.createElement("div")
projWraper.appendChild(projectCursor)
projectCursor.classList.add("cursor")

let projectCursorTL = gsap.fromTo(projectCursor, { opacity: 0, }, { opacity: 1, duration: 2, delay: 0 })
projectCursorTL.pause()

let projectCursorBckg = document.createElement("div")
projWraper.appendChild(projectCursorBckg)
projectCursorBckg.classList.add("cursor-background")

let projectCursorBckgTL = gsap.fromTo(projectCursorBckg, { opacity: 0, }, { opacity: 1, duration: 2, delay: 0 })
projectCursorBckgTL.pause()



// let projCursorTL = gsap.fromTo(projectCursor, { scale: 1, }, { scale: 2, duration: 0.1,/* ease: 'power4.out',*/ })
// projCursorTL.pause()

let cursorPosSet = 10
let botRigLinePos = 11
let topLefLinePos = 9
// let 
function cursorHandle(x, y) {
    // let x = e.x;
    // let y = e.y;
    projectCursor.style.left = projectCursorBckg.style.left = (x - cursorPosSet) + "px";
    projectCursor.style.top = projectCursorBckg.style.top = (y - cursorPosSet) + "px";

    strLineBottom.style.left = x + "px";
    strLineBottom.style.top = (y + botRigLinePos) + "px";

    strLineTop.style.left = x + "px";
    strLineTop.style.top = (y - projBackHeight - topLefLinePos) + "px";

    yCoordNum.style.left = (x - 13) + "px";
    yCoordNum.style.top = (y - 300) + "px";
    yCoordNum.innerHTML = `X - ${Math.round(x)}`

    hrLineRight.style.top = y + "px";
    hrLineRight.style.left = (x + botRigLinePos) + "px";

    hrLineLeft.style.top = y + "px";
    hrLineLeft.style.left = (x - projBackWidth - topLefLinePos) + "px";

    xCoordNum.style.left = (x - 300) + "px";
    xCoordNum.style.top = (y - 20) + "px";
    xCoordNum.innerHTML = `Y - ${Math.round(y)}`
}
if (screen.width > screen.height) {
    mainContainerProjects.addEventListener('mousemove', (e) => {
        let x = e.x;
        let y = e.y;
        cursorHandle(x, y)
    });
}

let isDraging = false;

// var rect = projBack.getBoundingClientRect();
// console.log(rect.left, rect.top, this.x, this.y);

let bigDraggable = Draggable.create(projBack, {
    bounds: window,
    inertia: true,
    edgeResistance: 0.5,
    // dragResistance: 0.3,
    onDragStart: function () {
        isDraging = true;
    },
    onDrag: function (e) {

        // var rect = projBack.getBoundingClientRect();
        // console.log(rect.left, rect.top, this.x, this.y);
        // console.log(e.clinetY, e.layerY, e.pageY, e.screenY, e.offsetY, e.x);

        // console.log(e)
        let x = e.pageX;
        let y = e.pageY;
        //set mouse follow div
        mouse.x = x + 50;
        mouse.y = y + 20;

        cursorHandle(x, y)

        // console.log('bb')
    },
    onDragEnd: function () {
        isDraging = false;
        // projBack.style.transition = "1s"
        // setTimeout(() => {
        //     projBack.style.transition = "0s"
        //     var rect = projBack.getBoundingClientRect();
        //     console.log(rect.left, rect.top, this.x, this.y);
        // }, 2000);
    },


})[0];

// align center initially
gsap.set(projBack, {
    x: (bigDraggable.minX + bigDraggable.maxX) / 2,
    y: (bigDraggable.minY + bigDraggable.maxY) / 2
});
bigDraggable.update();

/////////////////////////

//project images//

let projPositionsLeft = [200, -550, 700, -50, 50, -600, 800, -1100, 1200, 1100, -1100, -1300, 1350, 50, 50, -650, 750, 750, -750, -1300, 1500, 1400, -1400, -1700, 1700, 1700, -1700, 50, 50, -650, 800, -2000, 2000, -50, -50, -800, -800, 700, 800, 1400, 1450, -1400, -1450, -2100, -2100, 2100, 2100, 2400, 2400, -2400, -2400]
let projPositionsTop = [300, 0, -300, -450, 700, 500, 400, -600, 900, -600, 900, 50, 50, -1100, 1100, -1050, 1400, -1050, 1400, -1300, 1350, -1300, 1400, -800, 500, -800, 500, -1600, 1600, -1600, -1600, -200, -200, -2000, 2000, -2000, 1900, -2000, 1900, -1800, 1800, -1800, 1800, -1300, 1000, -1300, 1000, -700, 300, -700, 300]
// let projectImages = document.getElementsByClassName("project-img")
// let projInnerWraper = document.querySelector(".projects_inner-wrapper")
let projImgWidth;
if (screen.width > screen.height) {
    projImgWidth = 400
} else {
    projImgWidth = 250
    for (let i = 0; i < projPositionsLeft.length; i++) {
        projPositionsLeft[i] = projPositionsLeft[i] * 0.625
    }
    for (let i = 0; i < projPositionsTop.length; i++) {
        projPositionsTop[i] = projPositionsTop[i] * 0.625
    }
}

let gsapLettersTimeLines = []

for (let i = 0; i < projectsLength; i++) {
    //create project containers
    let projectContainer = document.createElement("div")
    projInnerWraper.appendChild(projectContainer)
    projectContainer.classList.add("project-container")
    //create project images
    let projectImage = new Image();
    projectContainer.appendChild(projectImage)
    projectImage.classList.add("project-img")
    projectImage.src = projectThumbnailsSrc[i]
    //create project title
    let projectTitle = document.createElement("div")
    projectContainer.appendChild(projectTitle)
    projectTitle.classList.add("project-title")
    projectTitle.innerHTML = projectTitlesNames[i]
    // let myText = new SplitType(projectTitle)
    if (screen.width > screen.height) {
        const thisTitle = new SplitType(projectTitle, { types: 'chars' })
        gsapLettersTimeLines.push(gsap.fromTo(thisTitle.chars, { y: 100, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.05, duration: 0.3,/* ease: 'power4.out',*/ }))
        gsapLettersTimeLines[i].pause()
    }
    if (screen.width > screen.height) {
        if (i % 2 == 0) {
            projectContainer.style.transition = "0.55s";
            projectContainer.style.width = (projImgWidth - 50) + "px"
        } else if (i % 3 == 0) {
            projectContainer.style.transition = "0.6s";
            //set project width
            projectContainer.style.width = (projImgWidth + 50) + "px"
        } else {
            projectContainer.style.transition = "0.5s";
            //set project width
            projectContainer.style.width = projImgWidth + "px"
        }
        if (i == projectsLength - 1) projectContainer.style.width = (projImgWidth - 50) + "px"
    } else {
        if (i % 2 == 0) {
            projectContainer.style.transition = "0.55s";
            projectContainer.style.width = (projImgWidth - 20) + "px"
        } else if (i % 3 == 0) {
            projectContainer.style.transition = "0.6s";
            //set project width
            projectContainer.style.width = (projImgWidth + 20) + "px"
        } else {
            projectContainer.style.transition = "0.5s";
            //set project width
            projectContainer.style.width = projImgWidth + "px"
        }
        if (i == projectsLength - 1) projectContainer.style.width = (projImgWidth - 20) + "px"
    }

    projectImage.onload = function () {
        //set every container to the middle

        projectContainer.style.left = (projBackXCenter - projectContainer.offsetWidth / 2) + "px"
        projectContainer.style.top = (projBackYCenter - projectContainer.offsetHeight / 2) + "px"

        // console.log(i, projPositionsLeft[i], projPositionsTop[i])
    }
}

let projectContainers = document.getElementsByClassName("project-container")
let projectTitlesLetters = document.getElementsByClassName("project-title")

let follwMouseSeeDet = "SEE DETAILS"
let follwMouseSeeDetGer = "DETAILS ANSEHEN"

function projectOnMouseOver(i) {
    gsapLettersTimeLines[i].play()
    projectContainers[i].style.transform = "scale(1.2)"
    for (let j = 0; j < projectContainers.length; j++) {
        if (j != i) projectContainers[j].style.transform = "scale(0.8)"
    }
    // projCursorTL.play()
    projectCursor.style.scale = "2"
    projectCursorBckg.style.scale = "2"
    // projectCursorBckg.style.background = "white"
    // projectCursorBckg.style.mixBlendMode = "saturation";


    // projectCursorBckg.style.mixBlendMode = "hue";
    // projectCursorBckg.style.mixBlendMode = "color";
    // projectCursorBckg.style.mixBlendMode = "difference";

    cursorPosSet = 10
    botRigLinePos = 22
    topLefLinePos = 19

    mouseFollowTL.play();
    setTimeout(() => {
        mouseFollowText.innerHTML = follwMouseSeeDet
        mouseFollowTL.reverse();
    }, 500);
}

function projectOnMouseOut(i) {
    gsapLettersTimeLines[i].reverse()
    // projectContainers[i].style.transform = "scale(1)"
    for (let j = 0; j < projectContainers.length; j++) {
        projectContainers[j].style.transform = "scale(1)"
    }
    // projCursorTL.reverse()
    projectCursor.style.scale = "1"
    projectCursorBckg.style.scale = "1"
    // projectCursorBckg.style.background = "transparent"
    // projectCursorBckg.style.mixBlendMode = "normal";
    cursorPosSet = 10
    botRigLinePos = 11
    topLefLinePos = 9

    mouseFollowTL.play()
    setTimeout(() => {
        mouseFollowText.innerHTML = mouseFollowDragToMove
        mouseFollowTL.reverse()
    }, 500);
}

let projectsOpen = false
let touchMoved = 0
for (let i = 0; i < projectContainers.length; i++) {
    if (screen.width > screen.height) {
        projectContainers[i].addEventListener("mouseover", function () {
            if (projectsOpen) projectOnMouseOver(i)
        });
        projectContainers[i].addEventListener("mouseout", function () {
            if (projectsOpen) projectOnMouseOut(i)
        });
        projectContainers[i].addEventListener("click", function () {
            if (projectsOpen) {
                showPopUp(i)
            }
        });
    }
    if (screen.width < screen.height) {
        projectContainers[i].addEventListener("touchend", function () {
            if (projectsOpen && touchMoved < 10) {
                showPopUp(i)
            }
            touchMoved = 0
        });
        projectContainers[i].addEventListener("touchmove", function () {
            touchMoved += 1
            console.log(touchMoved)
        });
    }
}

//start projects page
let projectPageOpen = false
let mouseFollowDragToMove = "DRAG TO MOVE";
let mouseFollowDragToMoveGer = "ZUM BEWEGEN KLICKEN UND ZIEHEN";
projectsClickableWraper.addEventListener("click", (e) => {
    if (!projectPageOpen) {
        projectPageOpen = true
        mouseFollowTL.play()
        setTimeout(() => {
            mouseFollowText.innerHTML = mouseFollowDragToMove
            mouseFollowTL.reverse()
        }, 1000);
        projectsClickableWraper.style.display = "none"
        setTimeout(() => {
            closeProjects.style.display = "block"
            projectCursor.style.display = "block"
            projectCursorBckg.style.display = "block"
            strLineBottom.style.display = "block"
            strLineTop.style.display = "block"
            yCoordNum.style.display = "block"
            hrLineRight.style.display = "block"
            hrLineLeft.style.display = "block"
            xCoordNum.style.display = "block"
            projectsOpen = true

            strLineBottomTilesTL.play()

            strLineTopTL.play()

            yCoordNumTL.play()

            hrLineRightTL.play()

            hrLineLeftTL.play()

            xCoordNumTL.play()

            projectCursorTL.play()
            projectCursorBckgTL.play()

            closeProjectsTL.play()
        }, 500);

        projectsTilesTL.timeScale(1);
        projectsTilesTL.play()

        projectsBckgImagesTL.timeScale(1);
        projectsBckgImagesTL.play()

        for (let i = 0; i < projectContainers.length; i++) {
            projectContainers[i].style.left = (projBackXCenter + projPositionsLeft[i] - projectContainers[i].offsetWidth / 2) + "px"
            projectContainers[i].style.top = (projBackYCenter + projPositionsTop[i] - projectContainers[i].offsetHeight / 2) + "px"
        }
        setTimeout(() => {
            for (let i = 0; i < projectTitlesLetters.length; i++) {
                projectTitlesLetters[i].style.opacity = "1"
            }
        }, 1000);

    }
})

//close project page

function closeProjectsPage() {
    if (projectPageOpen) {
        projectPageOpen = false
        closeProjects.style.display = "none"
        projectCursor.style.display = "none"
        projectCursorBckg.style.display = "none"
        strLineBottom.style.display = "none"
        strLineTop.style.display = "none"
        yCoordNum.style.display = "none"
        hrLineRight.style.display = "none"
        hrLineLeft.style.display = "none"
        xCoordNum.style.display = "none"
        projectsClickableWraper.style.display = "block"
        projectsOpen = false

        strLineBottomTilesTL.reverse()

        strLineTopTL.reverse()

        yCoordNumTL.reverse()

        hrLineRightTL.reverse()

        hrLineLeftTL.reverse()

        xCoordNumTL.reverse()

        projectCursorTL.reverse()
        projectCursorBckgTL.reverse()

        closeProjectsTL.reverse()

        projectsTilesTL.timeScale(-3);
        projectsBckgImagesTL.timeScale(-3);

        // align center on close
        projBack.style.transition = "0.5s"



        gsap.set(projBack, {
            x: (bigDraggable.minX + bigDraggable.maxX) / 2,
            y: (bigDraggable.minY + bigDraggable.maxY) / 2
        });
        bigDraggable.update();

        setTimeout(() => {
            projBack.style.transition = "0s"
            for (let i = 0; i < projectContainers.length; i++) {
                projectContainers[i].style.left = (projBackXCenter - projectContainers[i].offsetWidth / 2) + "px"
                projectContainers[i].style.top = (projBackYCenter - projectContainers[i].offsetHeight / 2) + "px"
            }
        }, 500);

        mouseFollowTL.play()
        setTimeout(() => {
            mouseFollowText.innerHTML = mouseFollowClickToExpl
            mouseFollowTL.reverse()
        }, 1000);

        if (screen.width < screen.height) {
            for (let i = 0; i < projectTitlesLetters.length; i++) {
                projectTitlesLetters[i].style.opacity = "0"
            }
        }
    }
}

let closeProjectsTL = gsap.fromTo(closeProjects, { opacity: 0, }, { opacity: 1, duration: 1, delay: 0 })
closeProjectsTL.pause()

closeProjects.addEventListener("click", (e) => {
    closeProjectsPage()
})


let closeIconTL = gsap.fromTo(closeIcon, { rotation: 0, }, { rotation: 90, duration: 0.5, delay: 0 })
closeIconTL.pause()
if (screen.width > screen.height) {
    closeProjects.addEventListener("mouseover", (e) => {
        closeIconTL.play()
        mouseFollowTL.play()
    })
    closeProjects.addEventListener("mouseout", (e) => {
        closeIconTL.reverse()
        mouseFollowTL.reverse()
    })
}
// for (let i = 0; i < projectsLength; i++) {
//     //create project containers
//     let projectContainer = document.createElement("div")
//     projInnerWraper.appendChild(projectContainer)
//     projectContainer.classList.add("project-container")
//     //create project images
//     let projectImage = new Image();
//     projectContainer.appendChild(projectImage)
//     projectImage.classList.add("project-img")
//     projectImage.src = projectThumbnailsSrc[0]
//     //create project title
//     let projectTitle = document.createElement("div")
//     projectContainer.appendChild(projectTitle)
//     projectTitle.classList.add("project-title")
//     projectTitle.innerHTML = `${i}`


//     if (i % 2 == 0) {
//         projectContainer.style.transition = "0.55s";
//         projectContainer.style.width = (projImgWidth - 50) + "px"
//     } else if (i % 3 == 0) {
//         projectContainer.style.transition = "0.6s";
//         //set project width
//         projectContainer.style.width = (projImgWidth + 50) + "px"
//     } else {
//         projectContainer.style.transition = "0.5s";
//         //set project width
//         projectContainer.style.width = projImgWidth + "px"
//     }


//     projectImage.onload = function () {
//         //set every container to the middle

//         projectContainer.style.left = (projBackXCenter - projectContainer.offsetWidth / 2) + "px"
//         projectContainer.style.top = (projBackYCenter - projectContainer.offsetHeight / 2) + "px"

//     }
// }





///////////////////////////////////////////////////////////////////////////////////////////
//MAP SECTION///////////////////////////////////////////////////////////////////////////////
let fps = document.createElement("div")
projectsWrap.appendChild(fps)
fps.classList.add("fps")
fps.innerHTML = "fps"

let loadingPage = document.createElement("div")
projectsWrap.appendChild(loadingPage)
loadingPage.classList.add("loadingPage")

let loadingSpinner = document.createElement("div")
document.getElementsByClassName('loadingPage')[0].appendChild(loadingSpinner)
loadingSpinner.classList.add("loadingSpinner")

let loadingPercentages = document.createElement("div")
document.getElementsByClassName('loadingPage')[0].appendChild(loadingPercentages)
loadingPercentages.classList.add("loadingPercentages")

let canvasZone = document.createElement("div")
mainContainerMap.appendChild(canvasZone)
canvasZone.classList.add("canvasZone")

let canvas = document.createElement("canvas")
canvasZone.appendChild(canvas)
canvas.classList.add("renderCanvas")

let devPopUp = document.createElement("div")
mainContainerMap.appendChild(devPopUp)
devPopUp.classList.add("devPopUp", "displayNone")
devPopUp.innerHTML = "Click to select location"

let toMapCenter = document.createElement("div")
mainContainerMap.appendChild(toMapCenter)
toMapCenter.classList.add("toMapCenter", "displayNone")
function getFPS() {
    setInterval(function () {
        // fps.innerHTML = `${engine.getFps().toFixed(0)} fps`
        fps.innerHTML = `${engine.getFps().toFixed(2)} fps`
    }, 1000)
}

// var canvas = document.getElementById("renderCanvas");

var startRenderLoop = function (engine, canvas) {
    engine.runRenderLoop(function () {
        if (sceneToRender && sceneToRender.activeCamera) {
            sceneToRender.render();
        }
    });
}

//LOADING
BABYLON.DefaultLoadingScreen.prototype.displayLoadingUI = function () {
    if (document.getElementById('customLoadingScreenDiv')) {
        // Do not add a loading screen if there is already one
        document.getElementById('customLoadingScreenDiv').style.display = 'initial';
        return;
    }
};
BABYLON.DefaultLoadingScreen.prototype.hideLoadingUI = function () {
    loadingPage.remove();
};
//end of loading

var engine = null;
var scene = null;
var sceneToRender = null;
var createDefaultEngine = function () { return new BABYLON.Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true, disableWebGL2Support: false }); };
var createScene = async function () {

    const RIGHT_HANDED_SYSTEM = false;

    //loading
    engine.displayLoadingUI();
    //to work on macbook
    engine.disableTextureBindingOptimization = true;
    // This creates a basic Babylon Scene object (non-mesh)
    var scene = new BABYLON.Scene(engine);
    scene.useRightHandedSystem = RIGHT_HANDED_SYSTEM;
    // scene.clearColor = BABYLON.Color3.FromHexString("#000000");
    scene.clearColor = BABYLON.Color3.FromHexString("#1b1b1b");
    //get fps
    document.addEventListener("keydown", (e) => {
        if (e.key === 'f') {
            getFPS()
            fps.style.display = "block"
        }
    })

    // //CAMERA
    function cameraTargetAnimation(x, y, z, newCameraRadius, centerMap) {
        if (screen.width < screen.height && !centerMap) {
            x = x + 2
        }
        //aniamtion to change camera target position
        var animationCameraTarget = new BABYLON.Animation(
            "myAnimationcamera",
            "position",
            60,
            BABYLON.Animation.ANIMATIONTYPE_VECTOR3,
            BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
        );
        const keyFrames = [];
        keyFrames.push({
            frame: 0,
            value: cameraTarget.position.clone(),
        });
        keyFrames.push({
            frame: 120,
            value: new BABYLON.Vector3(x, y, z),
        });
        animationCameraTarget.setKeys(keyFrames);
        const easingFun2 = new BABYLON.CubicEase();
        easingFun2.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEOUT);
        animationCameraTarget.setEasingFunction(easingFun2);
        cameraTarget.animations.push(animationCameraTarget);
        //call animation
        scene.beginAnimation(cameraTarget, 0, 120, false);

        //radius
        //radius  animation
        let radiusAnimation = new BABYLON.Animation(
            "radiusAnimation",
            "radius",
            60,
            BABYLON.Animation.ANIMATIONTYPE_FLOAT,
            BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
        );
        let radiusKeyFrames = [];
        radiusKeyFrames.push({
            frame: 0,
            value: camera.radius,
        });
        radiusKeyFrames.push({
            frame: 120,
            value: newCameraRadius,
        });
        radiusAnimation.setKeys(radiusKeyFrames);
        const easingFun = new BABYLON.CubicEase();
        easingFun.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEOUT);
        radiusAnimation.setEasingFunction(easingFun);
        camera.animations.push(radiusAnimation);
        //call radius animation
        scene.beginAnimation(camera, 0, 120, false);

        let alphaAnimation = new BABYLON.Animation(
            "alphaAnimation",
            "alpha",
            60,
            BABYLON.Animation.ANIMATIONTYPE_FLOAT,
            BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
        );
        let alphaKeyFrames = [];
        alphaKeyFrames.push({
            frame: 0,
            value: camera.alpha,
        });
        alphaKeyFrames.push({
            frame: 120,
            value: 1.32,
        });
        alphaAnimation.setKeys(alphaKeyFrames);
        const easingFun3 = new BABYLON.CubicEase();
        easingFun3.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEOUT);
        alphaAnimation.setEasingFunction(easingFun3);
        camera.animations.push(alphaAnimation);
        //call alpha animation
        scene.beginAnimation(camera, 0, 120, false);
    }

    let camera = new BABYLON.ArcRotateCamera(
        'camera1',
        Math.PI / 2,
        Math.PI / 2,
        0,
        new BABYLON.Vector3(0, 0, 0),
        scene
    );
    camera.attachControl(canvas, true);
    camera.inputs.attached.keyboard.detachControl();

    // camera.setPosition(new BABYLON.Vector3(-3.99, 20, 15.18))
    // if (screen.width < screen.height) {
    //     camera.setPosition(new BABYLON.Vector3(-3.99, 30, 15.18))
    // }
    camera.setPosition(new BABYLON.Vector3(0, 0, 15.18))

    camera.minZ = 0.1;
    camera.lowerRadiusLimit = 5;
    camera.upperRadiusLimit = 50;//80
    camera.wheelDeltaPercentage = 0.01;
    // camera.lowerBetaLimit = 0.5;
    camera.upperBetaLimit = 0.5;
    camera.beta = 0.5

    // camera target
    var cameraTarget = new BABYLON.MeshBuilder.CreateBox(
        "cameraTarget",
        { width: 1, height: 1, depth: 1 },
        scene
    );
    cameraTarget.position = new BABYLON.Vector3(8, -0.03, 15.18);
    // camera.target = cameraTarget
    cameraTarget.isVisible = false

    camera.alpha = 1.32

    var devCamera = new BABYLON.FreeCamera("devCamera", new BABYLON.Vector3(-78, 5, 0), scene);
    devCamera.rotation.y = 1.57;

    // var camera = new BABYLON.FreeCamera("camera", new BABYLON.Vector3(0, 2, -10), scene);

    // // This targets the camera to scene origin
    // camera.setTarget(BABYLON.Vector3.Zero());

    // // This attaches the camera to the canvas
    // camera.attachControl(canvas, true);


    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

    // Default intensity is 1. Let's dim the light a small amount
    light.intensity = 0.7;

    //LOAD MESHES
    let loadePercent = 0;
    // const box = BABYLON.MeshBuilder.CreateBox("box", { height: 5, width: 5, depth: 5 });

    let sceneLoaded = [false]
    let result = await Promise.all([
        BABYLON.SceneLoader.ImportMeshAsync(
            "",
            // "https://raw.githubusercontent.com/quincecreative/logrodProjectPage/gh-pages/Minhen5.glb",
            // "https://work.quincemedia.com/logrod-project-page/Minhen5.glb",
            "stolica5.glb",
            null,
            scene,
            (evt) => {
                if (evt.lengthComputable) {
                    loadePercent = (evt.loaded * 100) / evt.total;
                    loadePercent = loadePercent.toFixed();
                    // console.log(evt)
                } else {
                    loadePercent = (evt.loaded * 100) / 24955036;
                    loadePercent = loadePercent.toFixed();
                }
                // console.log(loadingPercentages)
                loadingPercentages.innerHTML = `${loadePercent}%`
            }
        ),
    ]);

    let mapaMesh = result[0];

    let mapaRoot = result[0].meshes[0];

    // scene.onPointerObservable.add((pointerInfo) => {

    //     switch (pointerInfo.type) {
    //         //   case PointerEventTypes.POINTERDOWN:
    //         //     mainContainer.style.cursor = "grabbing"
    //         //     break;
    //         //   case PointerEventTypes.POINTERUP:
    //         //     mainContainer.style.cursor = "grab"
    //         //     break;
    //         case BABYLON.PointerEventTypes.POINTERPICK:
    //             console.log(pointerInfo.pickInfo)
    //             // for (let i = 0; i < mainContainers.length; i++) {
    //             //     anotationClosed(i)
    //             // }
    //             break;
    //     }
    // });



    // mapaRoot.position = new BABYLON.Vector3(0, 0, 0)

    // mapaRoot.addRotation(0, 0, 0)

    // let mapRootClone = mapaRoot.clone()
    // mapRootClone.position = new BABYLON.Vector3(0, 0, 75.88)

    // mapRootClone.scaling = new BABYLON.Vector3(1, 1, 1)

    // // //AO tex 3
    // // // scene.getMeshByName("Bouildings").material.ambientTexture =
    // // //     new BABYLON.Texture(
    // // //         "https://raw.githubusercontent.com/quincecreative/logrodProjectPage/gh-pages/Buildings AO3-2.jpg",
    // // //         //"https://work.quincemedia.com/logrod-project-page/Buildings AO3-2.jpg",
    // // //         scene
    // // //     );
    // // // scene.getMeshByName("Bouildings").material.ambientTexture.uScale = 1; //and/or the following for vScale:
    // // // scene.getMeshByName("Bouildings").material.ambientTexture.vScale = -1; //(-1.0 or some other value)

    // // GUI
    // let ellipses1 = []
    // let ellipses2 = []
    // let mainContainers = []
    // let seeDetailsButtons = []
    // let posMeshes = []

    // var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI", true, scene);

    // let guiSizeDeviderPopUp = 1.5
    // let guiSizeDeviderAnnotation = 1

    // /////SIZE OF ANNOTATION BASED ON SCREEN WIDHT
    // let sizeDeviderAnn = 1
    // let sizeDeviderCon = 1

    // if (screen.width < 1501 && screen.width > screen.height) sizeDeviderAnn = sizeDeviderCon = 0.75
    // if (screen.width < 1201 && screen.width > screen.height) sizeDeviderAnn = sizeDeviderCon = 0.625

    // if (screen.width < 500 && screen.width < screen.height) {
    //     sizeDeviderAnn = 3
    //     sizeDeviderCon = 1.5
    // }
    // // if (screen.width < screen.height) {
    // //     if (window.devicePixelRatio === 3) {
    // //         sizeDeviderAnn = 3
    // //         sizeDeviderCon = 1.5
    // //     }
    // //     if (window.devicePixelRatio === 2) {
    // //         sizeDeviderAnn = 2
    // //         sizeDeviderCon = 1
    // //     }
    // // }


    // let mainContainerWidth = 350 * sizeDeviderCon
    // let mainContainerHeight = 150 * sizeDeviderCon
    // let mainContainerOffsetX = -175 * sizeDeviderCon
    // let mainContainerOffsetY = 75 * sizeDeviderCon

    // let imageContainerWidth;
    // let imageContainerHeight;
    // let imageWidth;
    // let imageHeight;

    // imageContainerWidth = imageContainerHeight = imageWidth = imageHeight = 150 * sizeDeviderCon

    // ////title
    // let titleContainerWidth = 190 * sizeDeviderCon
    // let titleContainerHeight = 45 * sizeDeviderCon
    // let titleContainerTop = 15 * sizeDeviderCon
    // let titleContainerRight = 10 * sizeDeviderCon
    // let titleFontSize = 17 * sizeDeviderCon
    // let titleLineSpasing = -4 * sizeDeviderCon
    // //adress
    // let adressContainerWidth = 190 * sizeDeviderCon
    // let adressContainerHeight = 40 * sizeDeviderCon
    // let adressContainerTop = 60 * sizeDeviderCon
    // let adressContainerRight = 10 * sizeDeviderCon
    // let adressFontSize = 12 * sizeDeviderCon
    // let adressLineSpacing = -5 * sizeDeviderCon
    // //button
    // let buttonContainerWidth = 190 * sizeDeviderCon
    // let buttonContainerHeight = 50 * sizeDeviderCon
    // let buttonContainerTop = 95 * sizeDeviderCon
    // let seeDetailsWidth = 120 * sizeDeviderCon
    // let seeDetailsFontSize = 15 * sizeDeviderCon
    // let seeDetailsHeight = 40 * sizeDeviderCon

    // //ellipses
    // let ellipse1Width = 30 * sizeDeviderAnn
    // let ellipse1Height = 30 * sizeDeviderAnn
    // let ellipse1Thickness = 8 * sizeDeviderAnn

    // let ellipse2Width = 30 * sizeDeviderAnn
    // let ellipse2Height = 30 * sizeDeviderAnn




    // if (browser != "Chrome" && browser != "Opera" && browser != "Edge") {
    //     if (screen.width > 1500) {
    //         advancedTexture.idealWidth = 1500;
    //         advancedTexture.renderAtIdealSize = true;
    //         guiSizeDeviderPopUp = 1.125//0.75
    //         guiSizeDeviderAnnotation = 0.75
    //         titleLineSpasing = titleLineSpasing
    //     }
    // }

    // //create anotation
    // function createAnotationCont(posMesh, imageSrc, proTitle, proAdress, i) {
    //     if (showOnMap[i] === "yes" || showOnMap[i] === "Yes") {
    //         //main container
    //         var mainContainer = new BABYLON.GUI.Rectangle();
    //         mainContainer.width = 0 + "px";
    //         mainContainer.height = 0 + "px";
    //         // mainContainer.cornerRadius = 20;
    //         mainContainer.color = "Orange";
    //         mainContainer.thickness = 0;
    //         mainContainer.background = "white";
    //         advancedTexture.addControl(mainContainer);
    //         mainContainer.linkWithMesh(posMesh);
    //         mainContainer.linkOffsetX = (mainContainerOffsetX * guiSizeDeviderPopUp) + "px"
    //         mainContainer.linkOffsetY = -(mainContainerOffsetY * guiSizeDeviderPopUp) + "px"
    //         // mainContainer.alpha = 0;
    //         mainContainers.push(mainContainer)

    //         //image container
    //         var imageContainer = new BABYLON.GUI.Rectangle();
    //         imageContainer.width = (imageContainerWidth * guiSizeDeviderPopUp) + "px";
    //         imageContainer.height = (imageContainerHeight * guiSizeDeviderPopUp) + "px";
    //         imageContainer.color = "Orange";
    //         imageContainer.thickness = 0;
    //         imageContainer.background = "white";
    //         imageContainer.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
    //         mainContainer.addControl(imageContainer);
    //         //image
    //         var image = new BABYLON.GUI.Image("image", imageSrc);
    //         image.width = (imageWidth * guiSizeDeviderPopUp) + "px";
    //         image.height = (imageHeight * guiSizeDeviderPopUp) + "px";
    //         image.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
    //         // image.stretch = BABYLON.GUI.Image.STRETCH_EXTEND
    //         imageContainer.addControl(image);
    //         //title container
    //         var titleContainer = new BABYLON.GUI.Rectangle();
    //         titleContainer.width = (titleContainerWidth * guiSizeDeviderPopUp) + "px";
    //         titleContainer.height = (titleContainerHeight * guiSizeDeviderPopUp) + "px";
    //         titleContainer.color = "Orange";
    //         titleContainer.thickness = 0;
    //         // titleContainer.background = "red";
    //         titleContainer.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
    //         titleContainer.verticalAlignment =
    //             BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
    //         titleContainer.top = (titleContainerTop * guiSizeDeviderPopUp) + "px"
    //         titleContainer.paddingRight = (titleContainerRight * guiSizeDeviderPopUp) + "px"
    //         mainContainer.addControl(titleContainer);
    //         //title
    //         var title = new BABYLON.GUI.TextBlock();
    //         title.color = "Black";
    //         title.fontSize = (titleFontSize * guiSizeDeviderPopUp) + "px"
    //         title.textHorizontalAlignment = 0
    //         title.textVerticalAlignment = 2
    //         title.text = proTitle;
    //         title.textWrapping = true;
    //         title.lineSpacing = (titleLineSpasing) + "px";
    //         title.drawOutline = true;
    //         title.outlineColor = "black";
    //         title.outlineWidth = (0.5 * guiSizeDeviderPopUp);
    //         titleContainer.addControl(title);
    //         //adress container
    //         var adressContainer = new BABYLON.GUI.Rectangle();
    //         adressContainer.width = (adressContainerWidth * guiSizeDeviderPopUp) + "px";
    //         adressContainer.height = (adressContainerHeight * guiSizeDeviderPopUp) + "px";
    //         adressContainer.color = "Orange";
    //         adressContainer.thickness = 0;
    //         // adressContainer.background = "blue";
    //         adressContainer.top = (adressContainerTop * guiSizeDeviderPopUp) + "px"
    //         adressContainer.paddingRight = (adressContainerRight * guiSizeDeviderPopUp) + "px"
    //         adressContainer.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
    //         adressContainer.verticalAlignment =
    //             BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
    //         mainContainer.addControl(adressContainer);
    //         //adress
    //         var adress = new BABYLON.GUI.TextBlock();
    //         adress.color = "Gray";
    //         adress.fontSize = (adressFontSize * guiSizeDeviderPopUp) + "px"
    //         adress.textHorizontalAlignment = 0
    //         adress.textVerticalAlignment = 0
    //         adress.text = proAdress;
    //         adress.textWrapping = true;
    //         adress.lineSpacing = (adressLineSpacing * guiSizeDeviderPopUp) + "px";
    //         adressContainer.addControl(adress);
    //         //button container
    //         var buttonContainer = new BABYLON.GUI.Rectangle();
    //         buttonContainer.width = (buttonContainerWidth * guiSizeDeviderPopUp) + "px";
    //         buttonContainer.height = (buttonContainerHeight * guiSizeDeviderPopUp) + "px";
    //         buttonContainer.color = "Orange";
    //         buttonContainer.thickness = 0;
    //         // buttonContainer.background = "blue";
    //         buttonContainer.top = (buttonContainerTop * guiSizeDeviderPopUp) + "px"
    //         buttonContainer.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
    //         buttonContainer.verticalAlignment =
    //             BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
    //         mainContainer.addControl(buttonContainer);
    //         //button
    //         var seeDetails = BABYLON.GUI.Button.CreateSimpleButton("seeDetails", "See Details");
    //         // var seeDetailsGer = BABYLON.GUI.Button.CreateSimpleButton("seeDetails", "Details Ansehen");
    //         seeDetails.width = (seeDetailsWidth * guiSizeDeviderPopUp) + "px"
    //         seeDetails.fontSize = (seeDetailsFontSize * guiSizeDeviderPopUp) + "px"
    //         seeDetails.height = (seeDetailsHeight * guiSizeDeviderPopUp) + "px";
    //         seeDetails.color = "white";
    //         seeDetails.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
    //         // button1.cornerRadius = 20;
    //         seeDetails.background = "black";
    //         buttonContainer.addControl(seeDetails);
    //         seeDetailsButtons.push(seeDetails)
    //     } else {
    //         mainContainers.push("")
    //         seeDetailsButtons.push("")
    //     }
    // }

    // function createAnotation(corX, corY, corZ, i) {
    //     if (showOnMap[i] === "yes" || showOnMap[i] === "Yes") {
    //         //fake possition mesh
    //         let posMesh = new BABYLON.MeshBuilder.CreateBox(
    //             "posMesh",
    //             { width: 0.1, height: 0.1, depth: 0.1 },
    //             scene
    //         );
    //         posMesh.position = new BABYLON.Vector3(corX, corY, corZ);
    //         posMesh.isVisible = false
    //         posMeshes.push(posMesh)
    //         //create ellipses
    //         //inside
    //         var ellipse2 = new BABYLON.GUI.Ellipse();
    //         ellipse2.width = 0 + "px"
    //         ellipse2.height = 0 + "px";
    //         ellipse2.color = "white";
    //         // ellipse2.thickness = 15;
    //         ellipse2.background = "white";
    //         advancedTexture.addControl(ellipse2);
    //         ellipse2.linkWithMesh(posMesh);
    //         ellipses2.push(ellipse2)
    //         //outside
    //         var ellipse1 = new BABYLON.GUI.Ellipse();
    //         ellipse1.width = (ellipse1Width * guiSizeDeviderAnnotation) + "px"
    //         // ellipse1.width = 25 + "px"
    //         ellipse1.height = (ellipse1Height * guiSizeDeviderAnnotation) + "px";
    //         // ellipse1.height = 25 + "px";
    //         ellipse1.color = "white";
    //         ellipse1.thickness = (ellipse1Thickness * guiSizeDeviderAnnotation);
    //         // ellipse1.thickness = 7;
    //         ellipse1.background = "transparent";
    //         advancedTexture.addControl(ellipse1);
    //         ellipse1.linkWithMesh(posMesh);
    //         ellipses1.push(ellipse1)
    //     } else {
    //         posMeshes.push("")
    //         ellipses2.push("")
    //         ellipses1.push("")
    //     }
    // }

    // function toNum(elm) {
    //     return Number(elm)
    // }

    // let coordinatesForDirectons = []

    // let anotEntered = []
    // let mainContEntered = []

    // for (let i = 0; i < coordinates.length; i++) {
    //     let coordinateString = coordinates[i].split(",")
    //     let coordinatesNum = coordinateString.map(toNum)
    //     coordinatesForDirectons[i] = [coordinatesNum[0], coordinatesNum[1], coordinatesNum[2]]
    //     createAnotation(coordinatesNum[0], coordinatesNum[1], coordinatesNum[2], i)
    // }

    // for (let i = 0; i < coordinates.length; i++) {
    //     createAnotationCont(posMeshes[i], projectThumbnailsSrc[i], projectTitlesNames[i], projectAdresses[i], i)
    //     anotEntered.push(false)
    //     mainContEntered.push(false)
    // }


    // let ell1Width = (ellipse1Width * guiSizeDeviderAnnotation);
    // let ell1Thick = (ellipse1Thickness * guiSizeDeviderAnnotation)
    // let ell2Width = 0;
    // let mainAlpha = 0;
    // let mainWidth = 0
    // let mainHeight = 0
    // let annotationOpened = false;

    // function anotationOpen(i) {
    //     if (screen.width > screen.height) {
    //         if (annotationOpened) {
    //             // console.log(i)
    //             // ellipses1[i].thickness = (5 * guiSizeDeviderAnnotation);
    //             ellipses1[i].thickness = ((ellipse1Thickness * 0.625) * guiSizeDeviderAnnotation);
    //             // ellipses1[i].width = (70 * guiSizeDeviderAnnotation) + "px"
    //             ellipses1[i].width = ((ellipse1Width * 2.33) * guiSizeDeviderAnnotation) + "px"
    //             // ellipses1[i].height = (70 * guiSizeDeviderAnnotation) + "px";
    //             ellipses1[i].height = ((ellipse1Height * 2.33) * guiSizeDeviderAnnotation) + "px";

    //             // ellipses2[i].width = (30 * guiSizeDeviderAnnotation) + "px"
    //             // ellipses2[i].height = (30 * guiSizeDeviderAnnotation) + "px";
    //             ellipses2[i].width = (ellipse2Width * guiSizeDeviderAnnotation) + "px"
    //             ellipses2[i].height = (ellipse2Height * guiSizeDeviderAnnotation) + "px";


    //             // mainContainers[i].width = (350 * guiSizeDeviderPopUp) + 'px'
    //             // mainContainers[i].height = (150 * guiSizeDeviderPopUp) + 'px'
    //             mainContainers[i].width = (mainContainerWidth * guiSizeDeviderPopUp) + 'px'
    //             mainContainers[i].height = (mainContainerHeight * guiSizeDeviderPopUp) + 'px'
    //         } else {
    //             annotationOpened = true
    //             scene.registerAfterRender(function animateAnotationUp() {
    //                 if (ell1Width < ((ellipse1Width * 2.33 + 1) * guiSizeDeviderAnnotation)) {
    //                     // console.log(ell1Width, ell1Thick, ell2Width)
    //                     ellipses1[i].thickness = ell1Thick;
    //                     ellipses1[i].width = ell1Width + "px"
    //                     ellipses1[i].height = ell1Width + "px";
    //                     // ell1Width += (6.67 * guiSizeDeviderAnnotation)
    //                     ell1Width += (((ellipse1Width * 2.33) / 10.49) * guiSizeDeviderAnnotation)
    //                     // ell1Thick -= (0.5 * guiSizeDeviderAnnotation)
    //                     ell1Thick -= (((ellipse1Width * 2.33) / 140) * guiSizeDeviderAnnotation)

    //                     ellipses2[i].width = ell2Width + "px"
    //                     ellipses2[i].height = ell2Width + "px";
    //                     // ell2Width += (5 * guiSizeDeviderAnnotation)
    //                     ell2Width += (((ellipse1Width * 2.33) / 14) * guiSizeDeviderAnnotation)
    //                 }
    //                 // mainContainers[i].alpha = mainAlpha
    //                 //mainAlpha += 0.2
    //                 if (mainWidth < ((mainContainerWidth + 1) * guiSizeDeviderPopUp) || (mainHeight < (mainContainerHeight + 1) * guiSizeDeviderPopUp)) {
    //                     mainContainers[i].width = mainWidth + "px"
    //                     mainContainers[i].height = mainHeight + "px"
    //                     // console.log(mainWidth, mainHeight)
    //                     mainWidth += ((mainContainerWidth / 5) * guiSizeDeviderPopUp)
    //                     mainHeight += ((mainContainerWidth / 11.67) * guiSizeDeviderPopUp)
    //                 }
    //             });
    //         }
    //     } else {
    //         // console.log(i)
    //         // ellipses1[i].thickness = (5 * guiSizeDeviderAnnotation);
    //         ellipses1[i].thickness = ((ellipse1Thickness * 0.625) * guiSizeDeviderAnnotation);
    //         // ellipses1[i].width = (70 * guiSizeDeviderAnnotation) + "px"
    //         ellipses1[i].width = ((ellipse1Width * 2.33) * guiSizeDeviderAnnotation) + "px"
    //         // ellipses1[i].height = (70 * guiSizeDeviderAnnotation) + "px";
    //         ellipses1[i].height = ((ellipse1Height * 2.33) * guiSizeDeviderAnnotation) + "px";

    //         // ellipses2[i].width = (30 * guiSizeDeviderAnnotation) + "px"
    //         // ellipses2[i].height = (30 * guiSizeDeviderAnnotation) + "px";
    //         ellipses2[i].width = (ellipse2Width * guiSizeDeviderAnnotation) + "px"
    //         ellipses2[i].height = (ellipse2Height * guiSizeDeviderAnnotation) + "px";


    //         // mainContainers[i].width = (350 * guiSizeDeviderPopUp) + 'px'
    //         // mainContainers[i].height = (150 * guiSizeDeviderPopUp) + 'px'
    //         mainContainers[i].width = (mainContainerWidth * guiSizeDeviderPopUp) + 'px'
    //         mainContainers[i].height = (mainContainerHeight * guiSizeDeviderPopUp) + 'px'
    //     }
    // }

    // function anotationClosed(i) {
    //     annotationOpened = false
    //     anotEntered[i] = false
    //     mainContEntered[i] = false
    //     scene.onAfterRenderObservable.clear();
    //     // console.log(i)
    //     ellipses1[i].thickness = (ellipse1Thickness * guiSizeDeviderAnnotation);
    //     ellipses1[i].width = (ellipse1Width * guiSizeDeviderAnnotation) + "px"
    //     ellipses1[i].height = (ellipse1Height * guiSizeDeviderAnnotation) + "px";

    //     ellipses2[i].width = 0 + "px"
    //     ellipses2[i].height = 0 + "px";

    //     // mainContainers[i].alpha = 0
    //     mainContainers[i].width = 0 + 'px'
    //     mainContainers[i].height = 0 + 'px'

    //     ell1Width = (ellipse1Width * guiSizeDeviderAnnotation);
    //     ell1Thick = (ellipse1Thickness * guiSizeDeviderAnnotation)
    //     ell2Width = 0;
    //     mainAlpha = 0;
    //     mainWidth = 0
    //     mainHeight = 0
    // }
    // // console.log(coordinatesForDirectons)
    // //anotation animation
    // let annotationForMobOpened = [false]
    // for (let i = 0; i < ellipses1.length; i++) {
    //     if (showOnMap[i] === "yes" || showOnMap[i] === "Yes") {
    //         if (screen.width > screen.height) {
    //             ellipses1[i].onPointerEnterObservable.add(function () {
    //                 if (!devMode) {
    //                     anotationOpen(i)
    //                     canvasZone.style.cursor = "pointer"
    //                     anotEntered[i] = true
    //                 }
    //             });
    //             ellipses1[i].onPointerOutObservable.add(function () {
    //                 if (!devMode) {
    //                     canvasZone.style.cursor = ""
    //                     anotEntered[i] = false
    //                     setTimeout(() => {
    //                         if (!anotEntered[i] && !mainContEntered[i]) {
    //                             anotationClosed(i)
    //                             annotationForMobOpened = [false]
    //                         }
    //                     }, 0);
    //                 }
    //             });
    //         }
    //         ellipses1[i].onPointerDownObservable.add(function () {
    //             if (!devMode) {
    //                 toMapCenter.classList.remove("displayNone")
    //                 toMapCenter.style.opacity = "1"
    //                 cameraTargetAnimation(coordinatesForDirectons[i][0], coordinatesForDirectons[i][1], coordinatesForDirectons[i][2], 15, false)
    //                 if (screen.width < screen.height) {

    //                     for (let j = 0; j < ellipses1.length; j++) {
    //                         anotationClosed(j)
    //                     }
    //                     if (annotationForMobOpened[0] !== i) {
    //                         anotationOpen(i)
    //                         annotationForMobOpened = [i]
    //                     } else {
    //                         annotationForMobOpened = [false]
    //                     }
    //                 }
    //             }
    //         });
    //     }
    // }

    // toMapCenter.onclick = () => {
    //     // toMapCenter.classList.add("displayNone")
    //     // toMapCenter.style.opacity = "0"
    //     if (screen.width > screen.height) {
    //         cameraTargetAnimation(8, -0.03, 15.18, 20, true)
    //     } else {
    //         cameraTargetAnimation(8, -0.03, 15.18, 30, true)
    //     }
    //     for (let i = 0; i < mainContainers.length; i++) {
    //         anotationClosed(i)
    //         annotationForMobOpened = [false]
    //     }
    // }

    // for (let i = 0; i < mainContainers.length; i++) {
    //     if (showOnMap[i] === "yes" || showOnMap[i] === "Yes") {
    //         mainContainers[i].onPointerEnterObservable.add(function () {
    //             if (!devMode) {
    //                 mainContEntered[i] = true
    //             }
    //         });
    //         mainContainers[i].onPointerOutObservable.add(function () {
    //             if (!devMode) {
    //                 mainContEntered[i] = false
    //                 setTimeout(() => {
    //                     if (!anotEntered[i] && !mainContEntered[i]) {
    //                         anotationClosed(i)
    //                         annotationForMobOpened = [false]
    //                     }
    //                 }, 0);
    //             }
    //         });
    //         seeDetailsButtons[i].onPointerEnterObservable.add(function () {
    //             if (!devMode) {
    //                 canvasZone.style.cursor = "pointer"
    //             }
    //         });
    //         seeDetailsButtons[i].onPointerOutObservable.add(function () {
    //             if (!devMode) {
    //                 canvasZone.style.cursor = ""
    //             }
    //         });
    //         seeDetailsButtons[i].onPointerUpObservable.add(function () {
    //             if (!devMode) {
    //                 anotationClosed(i)
    //                 showPopUp(i)
    //                 annotationForMobOpened = [false]
    //             }
    //         });
    //     }
    // }


    // //GET COORDINATES FROM CLICK//////////////////////////////////////////////////
    // let foundCoordinates = []
    // let copiedCoordinates;

    // // if (devMode) {
    // let clickObsv
    // function activateClick() {
    //     clickObsv = scene.onPointerObservable.add((eventData) => {
    //         // console.log(eventData.event.button)
    //         if (eventData.pickInfo.pickedPoint && eventData.event.button === 0) {
    //             // Do something with the pickedPoint vector
    //             // console.log(eventData.pickInfo.pickedPoint.x.toFixed(2), eventData.pickInfo.pickedPoint.y.toFixed(2), eventData.pickInfo.pickedPoint.z.toFixed(2))
    //             foundCoordinates[0] = eventData.pickInfo.pickedPoint.x.toFixed(2)
    //             foundCoordinates[1] = eventData.pickInfo.pickedPoint.y.toFixed(2)
    //             foundCoordinates[2] = eventData.pickInfo.pickedPoint.z.toFixed(2)
    //             copiedCoordinates = foundCoordinates.join(',')
    //             // console.log(copiedCoordinates)
    //             navigator.clipboard.writeText(copiedCoordinates);
    //             devPopUp.innerHTML = "Location Copied!"
    //             setTimeout(() => {
    //                 devPopUp.innerHTML = "Click to select location"
    //             }, 2000);
    //         }
    //     });
    // }

    // let cameraOn = 0;
    // let devMode = false;
    // document.addEventListener("keydown", (e) => {
    //     if (e.key === 'v') {
    //         if (e.repeat) return;
    //         // console.log("down")
    //         activateClick()
    //         canvasZone.classList.add("devMode")
    //         devPopUp.classList.remove("displayNone")
    //     }
    //     if (e.key === 'c') {
    //         if (cameraOn == 0) {
    //             devMode = true;
    //             cameraOn = 1
    //             scene.activeCamera = scene.cameras[1]
    //             devCamera.attachControl(true);
    //             camera.detachControl(true);
    //         } else {
    //             devMode = false;
    //             cameraOn = 0
    //             scene.activeCamera = scene.cameras[0]
    //             devCamera.detachControl(true);
    //             camera.attachControl(true);
    //         }
    //     }
    // })
    // document.addEventListener("keyup", (e) => {
    //     if (e.key === 'v') {
    //         // console.log("up")
    //         scene.onPointerObservable.remove(clickObsv)
    //         canvasZone.classList.remove("devMode")
    //         devPopUp.classList.add("displayNone")
    //     }
    // })

    // let toMapCenterVisible = false
    // //MOUSE FOR PROJECT PART OF PAGE
    // if (screen.width > screen.height) {
    //     scene.onBeforeRenderObservable.add(function () {
    //         // followMouse()
    //         //center icon visibility
    //         if (!toMapCenterVisible) {
    //             if (camera.inertialRadiusOffset !== 0) {
    //                 toMapCenterVisible = true
    //                 toMapCenter.classList.remove("displayNone")
    //                 toMapCenter.style.opacity = "1"
    //             }
    //         }
    //     })
    // } else {
    //     toMapCenterVisible = true
    //     toMapCenter.classList.remove("displayNone")
    //     toMapCenter.style.opacity = "1"
    // }
    // scene.debugLayer.show({
    //     embedMode: true,
    //     initialTab: 2,
    //     overlay: true
    // });
    //END/////////////////////////////////////////////////////////////////////////////////////////////////
    // //for loading
    // //for loading
    scene.executeWhenReady(() => {
        engine.hideLoadingUI();
        engine.runRenderLoop(() => {
            //mobile to look nice
            engine.setHardwareScalingLevel(1 / window.devicePixelRatio);
            engine.adaptToDeviceRatio = true;
            scene.render();
        });
        //if (screen.width < screen.height) 
        setTimeout(() => {
            engine.stopRenderLoop()
        }, 100);
    });


    //SWITCHER ON SLICK
    switcher.onclick = () => {
        if (!mapOpen) {
            mapOpen = true
            // strLineBottom.style.opacity = strLineTop.style.opacity = hrLineRight.style.opacity = hrLineLeft.style.opacity = projectCursor.style.opacity = projectCursorBckg.style.opacity = "0"
            mainContainerMapTL.play()
            mainContainerProjectsTL.play()
            switcherTL.play()
            setTimeout(() => {
                switcher.innerHTML = switcherGoToPro
                switcher.style.top = "auto"
                if (screen.width > screen.height) {
                    switcher.style.bottom = "0"
                } else {
                    switcher.style.bottom = "50px"
                }
                switcherTL.reverse()
                closeProjectsPage()
            }, 500);
            engine.runRenderLoop(() => {
                // mobile to look nice
                engine.setHardwareScalingLevel(1 / window.devicePixelRatio);
                engine.adaptToDeviceRatio = true;
                scene.render();
            });
        } else {
            mapOpen = false
            mainContainerMapTL.reverse()
            mainContainerProjectsTL.reverse()
            switcherTL.play()
            setTimeout(() => {
                switcher.innerHTML = switcherGoToMap
                switcher.style.bottom = "auto"
                switcher.style.top = "0"
                switcherTL.reverse()
                // strLineBottom.style.opacity = strLineTop.style.opacity = hrLineRight.style.opacity = hrLineLeft.style.opacity = projectCursor.style.opacity = projectCursorBckg.style.opacity = "1"
            }, 500);
            engine.stopRenderLoop()
        }
    }

    ///////////////////////////////////////////////////////////////////////////////////////////
    return scene;
};

window.initFunction = async function () {
    var asyncEngineCreation = async function () {
        try {
            return createDefaultEngine();
        } catch (e) {
            console.log("the available createEngine function failed. Creating the default engine instead");
            return createDefaultEngine();
        }
    }

    window.engine = await asyncEngineCreation();
    if (!engine) throw 'engine should not be null.';
    startRenderLoop(engine, canvas);
    window.scene = createScene();
};
initFunction().then(() => {
    sceneToRender = scene
});

// Resize
window.addEventListener("resize", function () {
    engine.resize();
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

