import sqlite3



class Budget:

	def __init__(self, category, name):
		self.category = category
		self.name = name
	
	def food(self=None):
		return 'Food fund is : 3k'

	def clothing(self=None):
		return 'Clothing fund is : 7k'

	def entertainment(self=None):
		return 'Entertainment fund is : 10k'


food1 = Budget('Food', 'Rice')
print(food1.category, food1.name)
