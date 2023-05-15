from django.shortcuts import render
from .models import Menu, Reservation

from .serializers import MenuSerializer, ReservationSerializer
from rest_framework import viewsets

# Create your views here.

class MenuView(viewsets.ModelViewSet):
    queryset = Menu.objects.all()
    serializer_class = MenuSerializer

class ReservationView(viewsets.ModelViewSet):
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer