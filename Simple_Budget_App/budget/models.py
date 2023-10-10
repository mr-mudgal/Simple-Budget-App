from django.db import models

# Create your models here.


class CategoryModel(models.Model):
	category_name = models.CharField(max_length=20, unique=True, primary_key=True)


class BudgetModel(models.Model):
	category_name = models.ForeignKey(CategoryModel, on_delete=models.CASCADE)
	budget = models.IntegerField(default=0)
