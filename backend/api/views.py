from rest_framework.response import Response
from rest_framework.decorators import api_view
from base.models import Filme
from .serializers import FilmeSerializer

@api_view(['GET'])
def getData(request):
    filmes = Filme.objects.all()
    serializer = FilmeSerializer(filmes, many=True)
    return Response(serializer.data)