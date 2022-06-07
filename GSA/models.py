from django.db import models

class Instrument(models.Model):
    name = models.CharField(max_length=100)
    link = models.CharField(max_length=100)
    picture_path = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Sound(models.Model):
    sound_name = models.CharField(max_length=50)
    sound_path = models.CharField(max_length=100)
    instrument = models.ForeignKey(Instrument, on_delete=models.CASCADE)

    def __str__(self):
        return self.sound_name
