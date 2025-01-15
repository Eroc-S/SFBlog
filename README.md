# SF-INTERN Project


## Overview
This project is a responsive web application developed as part of a Full Stack Internship Assignment. It includes PHP backend integration, a MySQL database, and modern frontend technologies to create an engaging user experience.

---

## Features
1. **Responsive Navbar:** 
   - A visually appealing navbar with links to various sections and a search bar.

2. **Blog Scraper:** 
   - A PHP script (`scrape.php`) fetches and displays blog articles dynamically using DOM manipulation and XPath.

3. **Newsletter Subscription:**
   - A `subscriber.php` script allows users to subscribe to a newsletter. Email addresses are stored securely in a MySQL database.

4. **Dynamic Content Loading:**
   - JavaScript dynamically loads blogs and articles fetched by the PHP scraper.

5. **Customizable Layout:**
   - The webpage is divided into clear sections for blogs, cards, and subscription, making navigation seamless.

6. **Footer and Social Links:**
   - A structured footer containing links to privacy policies, terms of service, and social media icons.

7. **Modern Technologies Used:**
   - HTML5, CSS3, JavaScript, PHP, MySQL, and Font Awesome for icons.

---


Set Up XAMPP Server:

Place the project folder in htdocs.
Start Apache and MySQL in XAMPP.
Create a Database:

Open phpMyAdmin and create a database named newsletter.
Import the SQL file (if any) or manually create a table:
sql
Copy code
CREATE TABLE subscribers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL
);
Access the Project:

Open a browser and navigate to (http://localhost/<project-folde>)
