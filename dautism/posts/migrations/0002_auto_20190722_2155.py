# Generated by Django 2.2.3 on 2019-07-22 21:55

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='post',
            old_name='seconod_image',
            new_name='second_image',
        ),
    ]
