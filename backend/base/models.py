from django.db import models

class Filme(models.Model):
    titulo = models.CharField(max_length=200)
    diretor = models.CharField(max_length=100)
    ano = models.PositiveIntegerField()
    genero = models.CharField(max_length=50)
    classificacao = models.DecimalField(max_digits=3, decimal_places=1)
    data_criacao = models.DateTimeField(auto_now_add=True)  # Campo de data de criação
