
from django.contrib import admin
from django.urls import path, include

from django.conf import settings
from django.conf.urls.static import static

from integrate.views import MenuView, ReservationView

from rest_framework import routers

route1 = routers.DefaultRouter()
route1.register("", ReservationView, basename='reservationview')


route2 = routers.DefaultRouter()
route2.register("", MenuView, basename='menuview')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api1/', include(route1.urls)),
    path('api2/', include(route2.urls)),
]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
