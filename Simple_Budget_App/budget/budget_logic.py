from .models import BudgetModel, CategoryModel


class Budget:

	def __init__(self):
		pass

	def edit_budget(cate, new_bud):
		BudgetModel.objects.update_or_create(category_name_id=cate, defaults={'budget': new_bud})

	def delete_cat(cate):
		CategoryModel(category_name=cate).delete()

	@classmethod
	def manage_budget(cls):
		return 'Food fund is : 3k'

	def update_budget_category(POST_data):
		optr = [BudgetModel.objects.update_or_create(category_name_id=POST_data['selected_category'], defaults={'budget': int(POST_data['entered_budget'])}) if 'selected_category' in POST_data.keys() else CategoryModel(category_name=POST_data['entered_category']).save()]
		print(BudgetModel.objects.all().values())
