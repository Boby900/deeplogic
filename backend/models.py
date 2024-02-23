from django.db import models


class Blikart(models.Model):
    postId = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100)
    Like= models.CharField(max_length=100)
    description = models.CharField(max_length=100)

