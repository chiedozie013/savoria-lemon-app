
from django.contrib import admin
from django.urls import path, include

from django.conf import settings
from django.conf.urls.static import static

from integrate.views import MenuView, ReservationView

from rest_framework import routers

route = routers.DefaultRouter()
route.register("", MenuView, basename='menuview')

route = routers.DefaultRouter()
route.register("", ReservationView, basename='reservationview')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(route.urls)),
]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
