from django.urls import path
from . import views

urlpatterns = [
    path('api/filmes/', views.getFilmes, name='getFilmes'),
]