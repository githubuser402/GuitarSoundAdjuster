from django.shortcuts import render
from django.http import HttpResponse

def gsaRender(request):
    return render(request, "gsa_app/gsa.html", {})


def trash(request):
    return render(request, "index.html", {})
