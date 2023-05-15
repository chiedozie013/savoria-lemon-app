from django.contrib import admin

from .models import Menu, Reservation
# from .models import Reservations

# Register your models here.

admin.site.register(Menu)
admin.site.register(Reservation)
