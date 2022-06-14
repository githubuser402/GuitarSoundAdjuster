from django.shortcuts import render, HttpResponse
from django.views.generic import View


class InitPage(View):
    def get(self, request):
        return HttpResponse("<a href='/gsa'>link to project</a>")