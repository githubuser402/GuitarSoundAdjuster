from django.shortcuts import render, HttpResponse
from django.views.generic import ListView, View
from .models import Instrument, Sound

# class gsaRender(View):
#     def get(self, request):
#         instruments = Instrument.objects.all()
#         return render(request, "gsa_app/gsa_list.html", {"instruments": instruments})


class GSAList(ListView):
    model = Instrument
    template_name = "instrument/instrument_list.html"
    context_object_name = "instruments"


# class GSADetailedView(DetailView):
#     model = Instrument
#     template_name = "instrument/instrument_detail.html"
#     # print(f"PK is: {pk}")
#     context_object_name = "instrument"

class GSADetailedView(View):
    def get(self, request, **kwargs):
        queryset = {}
        instrument = Instrument.objects.filter(link=kwargs["link"])
        if(instrument.count() != 0):
            instrument = instrument[0]
            sounds = instrument.sound_set.all()
            print(sounds)
            queryset["instrument"] = instrument
            queryset["sounds"] = sounds

            return render(request, "instrument/instrument_detail.html", queryset)

        else:
            return HttpResponse("This type of instrument is not in list")
