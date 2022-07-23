import '../scss/styles.scss'
import imageBuilding from '../assets/building.jpg'
import imageNotebook from '../assets/notebook.jpg'//importando a imagem

//const elemRoot = document.getElementById('root')
//elemRoot.classList.add('container')

const elemImageBuilding = new Image()//estanciando a image, falando que tem uma nova img
elemImageBuilding.src = imageBuilding// mostrando o src da img para identificar

const elemNotebook = new Image()
elemNotebook.src = imageNotebook

document.querySelector('#building').appendChild(elemImageBuilding)//colocando a img no html
document.querySelector('#notebook').appendChild(elemNotebook)
