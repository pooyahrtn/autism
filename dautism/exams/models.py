from django.db import models
from posts.models import Post


# Create your models here.
class Exam(models.Model):
    version = models.CharField(max_length=10)
    posts = models.ManyToManyField(Post, related_name='exams')

    def __str__(self):
        return str(self.pk)


class Experiment(models.Model):
    exam = models.ForeignKey(Exam, on_delete=models.CASCADE)
    start_time = models.DateTimeField(null=False, blank=False)
    end_time = models.DateTimeField(null=False, blank=False)
    name = models.CharField(max_length=100, blank=True)
    age = models.IntegerField(null=True, blank=True)

    def __str__(self):
        return '{}: {} {}'.format(self.pk, self.name, self.age)


class Answer(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='answers')
    experiment = models.ForeignKey(Experiment, on_delete=models.CASCADE, related_name='answers')
    answer = models.IntegerField()
