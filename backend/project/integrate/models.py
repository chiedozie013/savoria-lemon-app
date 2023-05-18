from django.db import models
from phonenumber_field.modelfields import PhoneNumberField


# Create your models here.


class Reservation(models.Model):
    firstName = models.CharField(max_length=200, null=False, blank=False)
    lastName = models.CharField(max_length=200, null=False, blank=False)
    email = models.CharField(max_length=200, null=False, blank=False)
    number = PhoneNumberField(null=False, blank=False)
    date = models.DateField(null=False, blank=False)
    time = models.TimeField(null=False, blank=False)
    guests = models.IntegerField(null=False, blank=False)
    occasion = models.CharField(max_length=200, null=False, blank=False)
    seating = models.CharField(max_length=30, null=False, blank=False)
    comment = models.TextField(max_length=1500)

    def __str__(self):
        return self.firstName

class Menu(models.Model):
    image = models.ImageField(upload_to='uploads/images', null=False, blank=False)
    name = models.CharField(max_length=200, null=False, blank=False)
    price = models.DecimalField(max_digits=6, decimal_places=2, null=False, blank=False)
    rate = models.DecimalField(max_digits=6, decimal_places=1, null=False, blank=False)
    description = models.TextField(null=False, blank=False)

    def __str__(self):
        return self.name