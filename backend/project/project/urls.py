
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

from integrate.views import MenuView, ReservationView
from rest_framework.routers import DefaultRouter

route1 = DefaultRouter(trailing_slash=False)
route1.register("reservation", ReservationView, basename='reservationview')


route2 = DefaultRouter(trailing_slash=False)
route2.register("menu", MenuView, basename='menuview')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(route1.urls)),
    path('api1/', include(route2.urls)),
]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

