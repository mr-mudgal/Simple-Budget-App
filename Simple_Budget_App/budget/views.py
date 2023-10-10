from django.shortcuts import render, redirect
from .budget_logic import Budget
from .models import BudgetModel, CategoryModel


def home(request):
	if request.method == 'POST':
		Budget.update_budget_category(POST_data=request.POST)
	return render(request, 'home.html', {'all_cat': [i['category_name'] for i in list(CategoryModel.objects.all().values())], 'logged': request.session['logged'] if 'logged' in request.session.keys() else False, 'data': list(BudgetModel.objects.all().values())})


def login(request):
	if request.method == 'POST':
		request.session['logged'] = True
		return redirect('home')
	return render(request, 'login.html') if 'logged' not in request.session.keys() else redirect('home')


def logout(request):
	request.session.flush()
	return redirect('home')


def edit_budget(request, cate, new_bud):
	Budget.edit_budget(cate, new_bud)
	return redirect('home')


def delete_cat(request, cate):
	Budget.delete_cat(cate)
	return redirect('home')
