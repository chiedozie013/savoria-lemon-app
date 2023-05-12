from rest_framework import serializers
from .models import AddMenu

class AddMenuSerializer(serializers.ModelSerializer):
    class Meta:
        model = AddMenu
        fields = '__all__'