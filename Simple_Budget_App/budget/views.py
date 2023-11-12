from django.shortcuts import render, redirect, HttpResponse
from .budget_logic import Budget
from .models import BudgetModel, CategoryModel


def home(request):
	if request.method == 'POST':
		Budget.update_budget_category(request.POST, request.session['userlog'])

	if 'userlog' in request.session.keys():
		return render(request, 'home.html', {'all_cat': list(CategoryModel.objects.all().filter(username=request.session['userlog']).values()), 'logged': request.session['logged'], 'data': list(BudgetModel.objects.all().filter(username=request.session['userlog']).values())})
	else:
		return redirect('/login')


def login(request):
	if request.method == 'POST':
		username = request.POST['username']
		password = request.POST['password']
		request.session['logged'] = True
		request.session['userlog'] = Budget.login_logup(username, password)
		return redirect('home')
	return render(request, 'login.html') if 'logged' not in request.session.keys() else redirect('home')


def logout(request):
	request.session.flush()
	return redirect('home')


def edit_budget(request, cate, new_bud):
	Budget.edit_budget(cate, new_bud, request.session['userlog'])
	return redirect('home')


def delete_cat(request, cate):
	Budget.delete_cat(cate, request.session['userlog'])
	return redirect('home')


def transfer(request, fromm, amt, to):
	trans = Budget.transfer(fromm, amt, to, request.session['userlog'])
	if trans == -1:
		return HttpResponse('<script>alert("Transaction Failed! Amount larger than the current amount."); open("/", "_self");</script>')
	elif trans == -2:
		return HttpResponse('<script>alert("Transaction Failed! No such Category exist."); open("/", "_self");</script>')
	elif trans == 1:
		return HttpResponse('<script>alert("Transaction Succeed! Amount is transfered to the desired category."); open("/", "_self");</script>')
	return HttpResponse('<script>alert("Transaction Failed! No such thing exist."); open("/", "_self");</script>')
