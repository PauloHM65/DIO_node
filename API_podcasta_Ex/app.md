# Podcast Manager
### Descrição
    Um app so estilo netflix, aonde possa centralizar diferentes epsodios de podcasts. Separados por cateoria
### Dominio
    Podcasts feitos em video
## Como
#### Features
    Listar os epsodios de podcasts em sessoes de categorias
### Como implementar
    Vou retornar em uma api rest(json) o nome podcast, nomde do epsodio, imagem de capo, link, categoria

    GET : retorna lista de episodios

    ```js
    [{
        podcastName : "flow",
        epsodioNome : "CBUM - Flow #319",
        videoID: "pQSuQmUfS30",
        cover : "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg?sqp=-…RUAAIhCGAE=&rs=AOn4CLBonxQwlEalhS13RJbrvH2sVHnASw",
        link : "https://www.youtube.com/watch?v=pQSuQmUfS30&pp=ygUJZmxvdyBjYnVt",
        category: ["saude","bodybiulder"],
    },
    {
        podcastName : "flow",
        epsodioNome : "RUBENS BARRICHELLO - Flow #339",
        videoID: "4KDGTdiOV4I",
        cover : "    https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg?sqp=-…RUAAIhCGAE=&rs=AOn4CLDo9XrOQWvSouoNcuOdzug76PAIbA",
        link : "https://www.youtube.com/watch?v=4KDGTdiOV4I&pp=ygUWcnViZW5zIGJhcnJpcXVlbG8gZmxvdw%3D%3D",
        category: ["saude","bodybiulder"],
    }]
    ```
## Final
    O acesso a API se da pelo endpoint:
    Lista de podcasts
        /api/listPodcasts
    Lita de podcasts por determinado podcast
        /api/Podcasts?p=[PodcastName]



 Trabalho de exercicio da DIO