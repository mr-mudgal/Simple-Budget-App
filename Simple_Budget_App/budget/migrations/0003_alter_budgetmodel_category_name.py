# Generated by Django 3.2.18 on 2023-10-07 18:45

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('budget', '0002_alter_budgetmodel_category_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='budgetmodel',
            name='category_name',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='budget.categorymodel'),
        ),
    ]
