from django.db import models

# Create your models here.
class Menu(models.Model):
    image = models.ImageField(upload_to='uploads/images', null=False, blank=False)
    name = models.CharField(max_length=200, null=False, blank=False)
    price = models.DecimalField(max_digits=6, decimal_places=2, null=False, blank=False)
    rate = models.DecimalField(max_digits=6, decimal_places=1, null=False, blank=False)
    description = models.TextField(null=False, blank=False)

    def __str__(self):
        return self.name