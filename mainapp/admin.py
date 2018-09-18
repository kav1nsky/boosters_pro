from django.contrib import admin
from .models import ForecastTable

@admin.register(ForecastTable)
class ForecastTableAdmin(admin.ModelAdmin):
    pass