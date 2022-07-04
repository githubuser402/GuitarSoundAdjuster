from django.db import models

class Illustration(models.Model):
    path = models.CharField(max_length=200)
    name = models.CharField(max_length=80)
    single = models.BooleanField(default=True)

    def __str__(self):
        return self.path[self.path.rfind("/"):]


class Instrument(models.Model):
    name = models.CharField(max_length=100)
    link = models.CharField(max_length=100)
    picture = models.ForeignKey(Illustration, on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class Sound(models.Model):
    sound_name = models.CharField(max_length=50)
    sound_number = models.IntegerField()
    sound_path = models.CharField(max_length=200)
    instrument = models.ForeignKey(Instrument, on_delete=models.CASCADE)
    frequency = models.FloatField()

    def __str__(self):
        return f"{self.sound_number}|{self.sound_name}"