from django.db import models
from phonenumber_field.modelfields import PhoneNumberField


# Create your models here.
class Menu(models.Model):
    image = models.ImageField(upload_to='uploads/images', null=False, blank=False)
    name = models.CharField(max_length=200, null=False, blank=False)
    price = models.DecimalField(max_digits=6, decimal_places=2, null=False, blank=False)
    rate = models.DecimalField(max_digits=6, decimal_places=1, null=False, blank=False)
    description = models.TextField(null=False, blank=False)

    def __str__(self):
        return self.name

class Reservation(models.Model):
    seating = models.CharField(max_length=30)
    firstName = models.CharField(max_length=200)
    lastName = models.CharField(max_length=200)
    email = models.CharField(max_length=200)
    number = PhoneNumberField()
    date = models.DateField()
    time = models.TimeField()
    guests = models.IntegerField(max_digits=10)
    occasion = models.CharField(max_length=200)
    comment = models.TextField()

    def __str__(self):
        return self.firstName