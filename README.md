# Inventory Application
A full-stack CRUD (Create, Read, Update, Delete) application built with Node.js, Express.js, EJS, and postgreSQL. This project demonstrates a complete MVC architecture using server-side rendering.

## Teck stack
- **Frontend:** EJS (Embedded JavaScript templates), CSS3
- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL
- **Tools:** Node-Postgres (pg), Dotenv

## Features
- **Product Management:** Full CRUD functionality for categories and individual items.
- **Category Organization:** Group products into dynamic categories for easier navigation.
- **Relational Database:** Leverages PostgreSQL to maintain data integrity between products and categories.

## Getting Started
**Prerequisites**
- Node.js (v14+ recommended)
- PostgreSQL installed and running on your machine.

**Installation**
1. Clone the repository:
```
git clone git@github.com:navjotmaan/inventory-application.git
cd inventory-application
```
2. Install dependencies:
```
npm install
```
3. Environment Setup:
Create a .env file in the root directory and add your database credentials:
```
DB_HOST=localhost
DB_USER=<your_postgres_username>
DB_PASSWORD=<your_postgres_password>
DB_DATABASE=<your_database_name>
DB_PORT=5432
```
4. Database Setup:
Run SQL initialization script to create tables:
```
node src/db/init.js
```
5. Run the app:
```
npm start
```

## Database Schema
The application uses a One-to-Many relationship where one Category can contain multiple Products.

## Screenshots
<img width="1893" height="868" alt="Screenshot (220)" src="https://github.com/user-attachments/assets/a976af76-66e3-4b7c-8228-b8f940769428" />
<img width="1907" height="863" alt="Screenshot (219)" src="https://github.com/user-attachments/assets/910b9129-9de3-4281-bb61-0932965f0fba" />
