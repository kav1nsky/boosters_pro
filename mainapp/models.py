import datetime
from django.db import models

class ForecastTable(models.Model):
    def __str__(self):
        return self.name

    creation_ts = models.DateTimeField(default=datetime.datetime.now())
    data = models.TextField()
    name = models.CharField(max_length=100)

