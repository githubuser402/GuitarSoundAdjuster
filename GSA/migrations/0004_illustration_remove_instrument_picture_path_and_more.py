# Generated by Django 4.0.4 on 2022-06-10 12:18

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('GSA', '0003_sound_sound_number'),
    ]

    operations = [
        migrations.CreateModel(
            name='Illustration',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('path', models.CharField(max_length=200)),
                ('name', models.CharField(max_length=80)),
                ('single', models.BooleanField(default=True)),
            ],
        ),
        migrations.RemoveField(
            model_name='instrument',
            name='picture_path',
        ),
        migrations.AlterField(
            model_name='sound',
            name='sound_path',
            field=models.CharField(max_length=200),
        ),
        migrations.AddField(
            model_name='instrument',
            name='picture',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='GSA.illustration'),
            preserve_default=False,
        ),
    ]
