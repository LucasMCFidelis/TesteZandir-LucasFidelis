from rest_framework import serializers
from base.models import Filme

class FilmeSerializer(serializers.ModelSerializer): 
    class Meta: 
        model = Filme
        fields = '__all__'