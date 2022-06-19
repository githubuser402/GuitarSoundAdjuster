from django.shortcuts import render
from django.views.generic import ListView, View
from .models import Instrument, Illustration
import random


class GSAList(ListView):
    model = Instrument
    template_name = "instrument/instrument_list.html"
    context_object_name = "instruments"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        query =  Illustration.objects.filter(single=False)
        context['background'] = random.choice(query)
        return context


class GSADetailedView(View):
    def get(self, request, **kwargs):
        queryset = {}

        if(kwargs["link"] == "help"):
            query =  Illustration.objects.filter(single=False)
            queryset['background'] = random.choice(query)
            queryset['title'] = """Help Message"""
            queryset['message'] = """Now you are using GSA - Guitar Sound Adjuster"""
            return render(request, "gsa_app/help.html", queryset)

        
        instrument = Instrument.objects.filter(link=kwargs["link"])
        if(instrument.count() != 0):
            instrument = instrument[0]
            sounds = instrument.sound_set.all().order_by("sound_number")
            queryset["instrument"] = instrument
            queryset["sounds"] = sounds
            return render(request, "instrument/instrument_detail.html", queryset)

