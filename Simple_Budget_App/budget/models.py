from django.db import models


class UserModel(models.Model):
	username = models.CharField(max_length=20, unique=True, primary_key=True)
	password = models.CharField(max_length=6)


class CategoryModel(models.Model):
	category_name = models.CharField(max_length=20, unique=True, primary_key=True)
	username = models.ForeignKey(UserModel, on_delete=models.CASCADE)


class BudgetModel(models.Model):
	category_name = models.ForeignKey(CategoryModel, on_delete=models.CASCADE)
	budget = models.IntegerField(default=0)
	username = models.ForeignKey(UserModel, on_delete=models.CASCADE)
