# Multi-Category Product Catalog

## Live Demo

Netlify Link : https://dynamiccatalog.netlify.app/

## GitHub Repository

https://github.com/RahulThangavelu03/DynamicCatalog

---

## Description

This project is a responsive web application that displays a multi-category product catalog. It dynamically renders product data from a JSON structure and adapts to different categories with varying attributes.

---

## Technologies Used

- React.js
- React Router DOM
- Material UI (MUI)
- JavaScript (ES6)

---

## Time Taken

Approximately **6–8 hours**, including development, debugging, and UI improvements.

---

## Approach & Implementation

### Data Handling

- The provided JSON data is dynamically parsed and grouped by category (Cars, Bikes, Phones, Computers).
- This allows flexible and scalable rendering without hardcoding.

---

### Home Page (Category Overview)

- Displays all categories using MUI Cards and Grid.
- Each category shows:
  - Category name
  - Preview of items
  - Representative image
- Users can navigate to category-specific pages.

---

### Category Page

- Displays all items for the selected category.
- Uses a responsive grid layout:
- Each item is clickable and leads to the detail page.

---

### Item Detail Page

- Dynamically renders product details using the `itemprops` array.
- No hardcoded fields — supports different properties per category.
- Displays:
  - Image
  - Name
  - Category
  - Specifications

---

### Dynamic Rendering

- Implemented by iterating over `itemprops`.
- Ensures flexibility for different product types.

---

## Features

- Category-based navigation
- Dynamic product rendering
- Responsive UI design
- Lazy loading of images (`loading="lazy"`)
- Clean and user-friendly interface

---

## How to Run Locally

```bash
npm install
npm run dev
```
