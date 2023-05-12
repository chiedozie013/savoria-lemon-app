from django.shortcuts import render
from .models import AddMenu
from .serializers import AddMenuSerializer
from rest_framework import viewsets

# Create your views here.

class AddMenuView(viewsets.ModelViewSet):
    queryset = AddMenu.objects.all()
    serializer_class = AddMenuSerializer