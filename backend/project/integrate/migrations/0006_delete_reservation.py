# Generated by Django 4.2.1 on 2023-05-16 11:46

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('integrate', '0005_alter_reservation_comment'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Reservation',
        ),
    ]
