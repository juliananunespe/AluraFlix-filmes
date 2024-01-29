
var listaFilmes = ['https://upload.wikimedia.org/wikipedia/pt/thumb/1/1b/Schoolrockposter.jpg/210px-Schoolrockposter.jpg', 'https://media.fstatic.com/DjhdaLmpvfJaleMFTvM2aN1-zq8=/322x478/smart/filters:format(webp)/media/movies/covers/2016/08/chegada_2-1.jpg', 'https://musicart.xboxlive.com/7/94fc5000-0000-0000-0000-000000000002/504/image.jpg', 'https://upload.wikimedia.org/wikipedia/pt/7/76/10_Things_I_Hate_About_You.jpg', 'https://upload.wikimedia.org/wikipedia/pt/c/c1/The_Matrix_Poster.jpg']

// listaFilmes[0] = 'https://upload.wikimedia.org/wikipedia/pt/thumb/1/1b/Schoolrockposter.jpg/210px-Schoolrockposter.jpg'
// listaFilmes[1] = 'https://media.fstatic.com/DjhdaLmpvfJaleMFTvM2aN1-zq8=/322x478/smart/filters:format(webp)/media/movies/covers/2016/08/chegada_2-1.jpg'
// listaFilmes[2] = 'https://musicart.xboxlive.com/7/94fc5000-0000-0000-0000-000000000002/504/image.jpg'

//i = i + 1 é o mesmo que i++
for (var i = 0; i < listaFilmes.length; i = i + 1) {
  document.write("<img src=" + listaFilmes[i] + ">")
}
  


