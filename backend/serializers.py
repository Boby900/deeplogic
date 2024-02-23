from rest_framework import serializers
from .models import Blikart


class BlikartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blikart
        fields = ('postId',
                  'title',
                  'Like',
                  'description'
                  )