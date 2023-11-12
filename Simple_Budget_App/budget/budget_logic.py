from .models import BudgetModel, CategoryModel, UserModel


class Budget:

	def __init__(self):
		pass

	def edit_budget(cate, new_bud, usern):
		BudgetModel.objects.update_or_create(category_name_id=cate, username=UserModel.objects.get(username=usern), defaults={'budget': new_bud})

	def delete_cat(cate, usern):
		CategoryModel(category_name=cate, username=UserModel.objects.get(username=usern)).delete()

	def transfer(fromm, amt, to, usern):
		if BudgetModel.objects.get(category_name_id=fromm, username=UserModel.objects.get(username=usern)).budget < int(amt):
			return -1
		all_cats = list(CategoryModel.objects.all().values())
		for cats in all_cats:
			if cats['category_name'] == to and cats['username_id'] == usern:
				prev_from = BudgetModel.objects.get(category_name_id=fromm, username=UserModel.objects.get(username=usern)).budget
				BudgetModel.objects.filter(category_name_id=fromm, username=UserModel.objects.get(username=usern)).update(budget=int(prev_from)-int(amt))
				BudgetModel.objects.update_or_create(category_name_id=to, username=UserModel.objects.get(username=usern), defaults={'budget': amt})
				return 1
		return -2

	def update_budget_category(POST_data, usern):
		optr = [BudgetModel.objects.update_or_create(category_name_id=POST_data['selected_category'], username=UserModel.objects.get(username=usern), defaults={'budget': int(POST_data['entered_budget'])}) if 'selected_category' in POST_data.keys() else CategoryModel(category_name=POST_data['entered_category'], username=UserModel.objects.get(username=usern)).save()]

	def login_logup(usern, passw):
		finall = False
		try:
			user = UserModel.objects.get(username=usern, password=passw).username
			return user
		except:
			finall = True
		finally:
			if finall:
				UserModel.objects.create(username=usern, password=passw)
				return usern
