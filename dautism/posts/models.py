from django.db import models
# Create your models here.


class Post(models.Model):
    first_image = models.ImageField(upload_to="images/")
    second_image = models.ImageField(upload_to="images/")
    sound_one = models.FileField(upload_to="sounds/")
    sound_two = models.FileField(upload_to="sounds/")
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name
