from django.contrib import admin
from .models import Instrument, Sound


@admin.register(Instrument)
class InstrumentAdmin(admin.ModelAdmin):
    pass

@admin.register(Sound)
class SoundAdmin(admin.ModelAdmin):
    pass
