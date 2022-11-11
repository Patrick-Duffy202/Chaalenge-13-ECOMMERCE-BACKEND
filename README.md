# Challenge-13-E-Commerce

In this challenge, we were tasked with building out the back end of an e-commerce website. As the developer, I will take a working Express.js API and configure it to use Sequelize to interact with a MySQL database. Different API routes and functions will be tested and validated using Insomnia. This back end will allow users to select, add, update and delete products, product categories and product tags to efficiently manage and update our e-commerce site. Additionally, the information will be stored to the server database. 

GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database