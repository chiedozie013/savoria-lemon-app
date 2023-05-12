from django.shortcuts import render
from .models import Menu
from .serializers import MenuSerializer
from rest_framework import viewsets

# Create your views here.

class MenuView(viewsets.ModelViewSet):
    queryset = Menu.objects.all()
    serializer_class = MenuSerializer