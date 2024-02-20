const btnRandomPhoto = document.getElementById("btn-photo")
const photoContainer = document.getElementById("photo-container")
const photo = document.getElementById("photo")
const piropoH2 = document.getElementById("piropo")

const photosPath = ['img1.jpeg','img2.jpeg','img3.jpeg','img4.jpeg','img5.jpeg','img6.jpeg','img7.jpeg','img8.jpeg','img9.jpeg','img10.jpeg','img11.jpeg','img12.jpeg','img13.jpeg','img14.jpeg','img15.jpeg','img16.jpeg','img17.jpeg','img18.jpeg','img19.jpeg','img20.jpeg','img21.jpeg','img22.jpeg','img23.jpeg','img24.jpeg','img25.jpeg','img26.jpeg','img27.jpeg','img28.jpeg','img29.jpeg','img30.jpeg','img31.jpeg','img32.jpeg','img33.jpeg','img34.jpeg','img35.jpeg','img36.jpeg','img37.jpeg','img38.jpeg','img39.jpeg','img40.jpeg','img41.jpeg','img42.jpeg','img43.jpeg','img44.jpeg','img45.jpeg','img46.jpeg','img47.jpeg','img48.jpeg','img49.jpeg','img50.jpeg','img51.jpeg','img52.jpeg','img53.jpeg','img54.jpeg','img55.jpeg','img56.jpeg','img57.jpeg','img58.jpeg','img59.jpeg','img60.jpeg','img61.jpeg','img62.jpeg','img63.jpeg','img64.jpeg','img65.jpeg','img66.jpeg','img67.jpeg','img68.jpeg','img69.jpeg','img70.jpeg','img71.jpeg','img72.jpeg','img73.jpeg','img74.jpeg']

const piropos = [
'Que bombon!',
'Esa carita me tiene loco',
'Tu inteligencia es tan atractiva como tu belleza',
'Eres la pieza que completa el puzle de mi vida',
'Cada momento contigo es como un cuento de hadas',
'Eres un rayo de sol en un día nublado',
'Tu bondad y dulzura hacen del mundo un lugar mejor',
'Eres mi refugio en medio de la tormenta',
'Eres más preciosa que una flor en primavera',
'Tu presencia es mi regalo más preciado',
'Eres la inspiración detrás de mis mejores momentos',
'Contigo, cada día es una aventura emocionante',
'Eres mi mejor amiga y mi mayor apoyo',
'Tus abrazos son mi lugar feliz',
'Eres la musa de mis pensamientos más hermosos',
'Eres tan especial como una estrella fugaz',
'Eres la razón por la que creo en el destino',
'Tu energía positiva ilumina mi vida',
'Eres como un sueño del que no quiero despertar',
'Cada día a tu lado es una bendición',
'Tu presencia hace que todo sea mágico',
'Eres mi inspiración para ser una mejor persona',
'Tu voz es mi melodía favorita',
'Eres el sueño que nunca supe que tenía',
'Tus ojos reflejan la belleza de tu alma',
'Eres la chispa que enciende mi corazón',
'Contigo, el amor es un viaje sin fin',
'Eres mi confidente y mi cómplice en la felicidad',
'Tu ternura es como un abrazo para mi corazón',
'Eres el poema que mi corazón siempre quiso escribir',
'Tus risas son la banda sonora de mis días']

btnRandomPhoto.addEventListener("click", () => {
    let lastPhoto = -1
    let lastPiropo = -1
    photoContainer.style.display = "flex"
    let randomPhotoNum = Math.floor(Math.random() * photosPath.length)
    let randomPiropoNum = Math.floor(Math.random() * piropos.length)
    if (randomPhotoNum == lastPhoto) randomPhotoNum++
    if (randomPiropoNum == lastPiropo) randomPiropoNum++
    photo.src = "img/"+photosPath[randomPhotoNum]
    piropoH2.innerText = piropos[randomPiropoNum]
    lastPiropo = randomPiropoNum
    lastPhoto = randomPhotoNum
})

const btnClosePhoto = document.getElementById("btn-close-photo")

btnClosePhoto.addEventListener("click",() => {
    photoContainer.style.display = "none"
})