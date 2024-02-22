from django.urls import path
from .views import SocialMediaView

urlpatterns = [
    path('socialmedia/', SocialMediaView.as_view()),
    path('socialmedia/<int:pk>/', SocialMediaView.as_view())
]