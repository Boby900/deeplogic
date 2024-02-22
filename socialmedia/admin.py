from django.contrib import admin
from .models import Blikart

models_list = [Blikart]
admin.site.register(models_list)
