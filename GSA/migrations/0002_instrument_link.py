# Generated by Django 4.0.4 on 2022-06-07 16:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('GSA', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='instrument',
            name='link',
            field=models.CharField(default='guitar-6', max_length=100),
            preserve_default=False,
        ),
    ]