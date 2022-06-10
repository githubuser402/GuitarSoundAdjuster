from django.contrib import admin
from .models import Instrument, Sound, Illustration


@admin.register(Instrument)
class InstrumentAdmin(admin.ModelAdmin):
    pass


@admin.register(Sound)
class SoundAdmin(admin.ModelAdmin):
    pass


@admin.register(Illustration)
class IllustrationAdmin(admin.ModelAdmin):
    pass
