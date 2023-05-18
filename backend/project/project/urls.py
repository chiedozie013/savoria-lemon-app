
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

from integrate.views import MenuView, ReservationView
from rest_framework.routers import DefaultRouter


route = DefaultRouter(trailing_slash=False)
route.register("reservation", ReservationView, basename='reservationview')
route.register("menu/", MenuView, basename='menuview')


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(route.urls)),
]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

