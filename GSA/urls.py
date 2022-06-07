from django.urls import path
from . import views

urlpatterns = [
    path("", views.gsaRender, name="gsa_render"),
    path("1", views.trash, name="trash"),
]
