# Simple-Budget-App
This is a Python Django project. It is a simple budget app where you can add different kind of categories and for each category you can assign the budget it would hold for your expenses.

You can edit the budget with edit button in 'Show Budget section'. There you would also find the option to delete the budget and transfer an amount equal to or lesser than the source category to 
the destination category.

It'll give error if the destination category does not exist or the amount is larger than the current amount.

No task can be performed before the login is succeeded.\
For login a user can simply enter the username and their password they created while signing up for the account.\
For signup new users can simply enter their preferred username and password, if the username does not exist in the database, your account would be created automatically.

User session is maintained in the browser.
### Running the code
To execute the code in your local system, follow the below guidelines:
1. Clone this repository or download the zip file & extract it. \
   `git clone https://github.com/mr-mudgal/Simple-Budget-App.git`
2. Move to the cloned/extracted directory.\
   Make sure you have Python 3.x installed in your system.
3. Execute `pip install requirements.txt` in the terminal. This would install all the dependencies required to run the application.
4. Execute `pip manage.py runserver`. This would run the application at _[https://127.0.0.1:8000](https://127.0.0.1:8000)_.\
    If you want to run the application at custom ip or port, then execute `pip manage.py runserver <ip>:<port>`. This would run the application at _https://<your_ip>:<your_port>_
5. Go to  _[https://127.0.0.1:8000](https://127.0.0.1:8000)_ in your browser and here you can find the application.

#### HAPPY EXPLORING APPLICATION!
### Some Snapshots
_Here you will find the snapshots of the website on both PC and Mobile devices._
![Screenshot from 2023-11-12 22-49-18](https://github.com/mr-mudgal/Simple-Budget-App/assets/100049039/5359550f-aa32-450a-8ad9-52bfa612b693)
![Screenshot from 2023-11-12 23-11-04](https://github.com/mr-mudgal/Simple-Budget-App/assets/100049039/ab001bc3-6a8d-453d-bf12-8e998e045f1d)
![Screenshot from 2023-11-12 23-09-27](https://github.com/mr-mudgal/Simple-Budget-App/assets/100049039/aadb9ce0-ccf4-4ec6-ac30-705d0b7aaa38)
![photo_2023-11-12_23-42-16](https://github.com/mr-mudgal/Simple-Budget-App/assets/100049039/cb40b8b7-04b9-4529-85bd-cbb3962ca35f)
![photo_2023-11-12_23-05-12](https://github.com/mr-mudgal/Simple-Budget-App/assets/100049039/e5fd636f-4d3d-4bc7-8664-0dab14c5d3fb)
---
### Things to Note
- This is NOT an expense tracker app. This is the simple Budget allocation app. Although, we can add the functionality to add expense tracking where we can add the items brought, auto-renew 
  subscriptions and anything else. Which would not allow us to expend more than allocated budget.
- I was not focused on creating a better login system, as my main goal was to understand the concept of classes & objects. For better login system you can explore my other repositories, where I 
  have even used **Keycloack** as the login authenticator.\
You may find bugs/error in the login functionality due the the above mentioned reason.
- I was also focused on how to build responsive websites, as being a backend developer I was more focused on logics, and earlier repositories, having websites were all/mostly not responsive as I 
  focused more on the logic and functionality (backend).\
_In future you would recieve responsive websites only!_
- You can try out the application.\
  For any query/doubt/suggestion or anything else, you can create an issue.

## Thank You
<p align="center" style="font-size: xx-large; font-family: monospace"><a href="https://github.com/mr-mudgal">Mr. Mudgal</a></p>
