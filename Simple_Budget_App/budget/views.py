from django.shortcuts import render, redirect
from .budget_logic import Budget

# Create your views here.


def home(request, **kwargs):
	if request.method == 'POST':
		if 'selected_category' in request.POST.keys():
			print(request.POST['selected_category'])
			print(request.POST['entered_budget'])
		elif 'entered_category' in request.POST.key():
			print(request.POST['entered_category'])
	return render(request, 'home.html', {'Food': Budget.food(), 'Clothing': Budget.clothing(), 'Entertainment': Budget.entertainment(), 'logged': kwargs['logged']})


def login(request):
	if request.method == 'POST':
		return redirect('home', kwargs={'logged': 'True'})
		# return render(request, 'home.html', {'logged': 'True'})
	return render(request, 'login.html')
