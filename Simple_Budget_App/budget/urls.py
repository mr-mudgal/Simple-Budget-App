from django.urls import path
from . import views

urlpatterns = [
	path('', views.home, name='home'),
	path('login', views.login, name='login'),
	path('logout', views.logout, name='logout'),
	path('edit-<cate>:<new_bud>', views.edit_budget, name='edit_budget_v'),
	path('delete-<cate>', views.delete_cat, name='delete_cat_v')
]
