from rest_framework.response import Response
from rest_framework.decorators import api_view
# from base.models import Filme
# from .serializers import FilmeSerializer

# @api_view(['GET'])
# def getFilmes(request):
#     filmes = Filme.objects.all()
#     serializer = FilmeSerializer(filmes, many=True)
#     return Response(serializer.data)

@api_view(['GET'])
def getFilmes(request):
    filmes = [
        {
            "titulo": "O Poderoso Chefão",
            "diretor": "Francis Ford Coppola",
            "ano": 1972,
            "genero": "Drama",
            "classificacao": 9.2
        },
        {
            "titulo": "Clube da Luta",
            "diretor": "David Fincher",
            "ano": 1999,
            "genero": "Drama",
            "classificacao": 8.8
        },
        {
            "titulo": "Pulp Fiction: Tempo de Violência",
            "diretor": "Quentin Tarantino",
            "ano": 1994,
            "genero": "Crime",
            "classificacao": 8.9
        },
        {
            "titulo": "Matrix",
            "diretor": "Lana Wachowski, Lilly Wachowski",
            "ano": 1999,
            "genero": "Ação",
            "classificacao": 8.7
        },
        {
            "titulo": "Interestelar",
            "diretor": "Christopher Nolan",
            "ano": 2014,
            "genero": "Ficção Científica",
            "classificacao": 8.6
        },
        {
            "titulo": "O Senhor dos Anéis: O Retorno do Rei",
            "diretor": "Peter Jackson",
            "ano": 2003,
            "genero": "Fantasia",
            "classificacao": 9.0
        },
        {
            "titulo": "A Origem",
            "diretor": "Christopher Nolan",
            "ano": 2010,
            "genero": "Ficção Científica",
            "classificacao": 8.8
        },
        {
            "titulo": "Gladiador",
            "diretor": "Ridley Scott",
            "ano": 2000,
            "genero": "Ação",
            "classificacao": 8.5
        },
        {
            "titulo": "Cidade de Deus",
            "diretor": "Fernando Meirelles, Kátia Lund",
            "ano": 2002,
            "genero": "Crime",
            "classificacao": 8.6
        },
        {
            "titulo": "Vingadores: Ultimato",
            "diretor": "Anthony Russo, Joe Russo",
            "ano": 2019,
            "genero": "Ação",
            "classificacao": 8.4
        }
    ]
    return Response(filmes)