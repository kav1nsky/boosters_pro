import datetime
from django.contrib.auth.models import User
from django.db import models


class ForecastTable(models.Model):
    def __str__(self):
        return self.name

    creation_ts = models.DateTimeField(default=datetime.datetime.now())
    data = models.TextField()
    name = models.CharField(max_length=255)


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    last_seen = models.DateTimeField()
    registered_on = models.DateTimeField()
    status = models.CharField(max_length=31, default='unconfirmed')
    date_of_birth = models.DateField()
    full_name = models.CharField(max_length=255)
    university_title = models.CharField(max_length=255)
    graduation_date = models.DateField()
    vk_link = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=15)
    job_company = models.CharField(max_length=63)
    job_position = models.CharField(max_length=63)
    avatar = models.ImageField()


class Competition(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    logo = models.ImageField()
    banner = models.ImageField()
    prize_pool = models.PositiveIntegerField()
    status = models.CharField(max_length=15)
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    #TODO: results table


class Problem(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    rules = models.TextField()
    competition = models.ForeignKey(to='Competition', on_delete=models.CASCADE)
    metric_used = models.CharField(max_length=15)
    #TODO: results table


class SolutionSubmit(models.Model):
    timestamp = models.DateTimeField(default=datetime.datetime.now())
    comment = models.TextField()
    rating_delta = models.FloatField()
    sender = models.ForeignKey(to='Profile', on_delete=models.CASCADE)
    problem = models.ForeignKey(to='Problem', on_delete=models.CASCADE)
    solution_csv = models.FileField()


class Notification(models.Model):
    timestamp = models.DateTimeField(default=datetime.datetime.now())
    profile = models.ForeignKey(to='Profile', on_delete=models.CASCADE)
    status = models.CharField(max_length=15)



