from django.urls import path
from . import views

urlpatterns = [
    path("", views.GSAList.as_view(), name="gsa_render"),
    path("<str:link>", views.GSADetailedView.as_view(), name="instrument"),
]
