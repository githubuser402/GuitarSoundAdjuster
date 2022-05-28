from django.urls import path
from . import views

urlpatterns = [
    path("", views.gsaRender, name="gsa_render"),
]
