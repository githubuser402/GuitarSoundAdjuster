# Generated by Django 4.0.5 on 2022-06-14 17:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('GSA', '0004_illustration_remove_instrument_picture_path_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='sound',
            name='frequency',
            field=models.FloatField(default=23),
            preserve_default=False,
        ),
    ]
