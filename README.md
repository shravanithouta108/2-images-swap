# 🔄 Image Swap with JavaScript

A simple JavaScript project to demonstrate how to swap two images when a button is clicked. Great for beginners learning DOM manipulation!

## 📸 Demo

Before Swap:

After Swap:

## 🚀 Features

- Pure JavaScript (no libraries)
- Easy to understand and customize
- Works on all modern browsers

## 🧩 How It Works

Two `<img>` elements are targeted via their `id`s. A button triggers the swap by switching the `src` attributes of the two images.

## 🗂️ File Structure

image-swap/ ├── index.html ├── script.js ├── image1.jpg ├── image2.jpg └── README.md

## 🛠️ Usage

1. **Clone the repo:**
   ```bash
   git clone https://github.com/shravanithouta108/2-images-swap.git
   cd image-swap

2. Add your own images: Replace image1.jpg and image2.jpg with your own images in the root directory.


3. Open in browser: Open index.html in your browser.



## 💻 Example Code

index.html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Image Swap</title>
</head>
<body>
  <h1>Swap Images</h1>
  <img id="img1" src="image1.jpg" width="200">
  <img id="img2" src="image2.jpg" width="200">
  <br><br>
  <button onclick="swapImages()">Swap</button>

  <script src="script.js"></script>
</body>
</html>

script.js

function swapImages() {
  const img1 = document.getElementById("img1");
  const img2 = document.getElementById("img2");

  // Swap src attributes
  const tempSrc = img1.src;
  img1.src = img2.src;
  img2.src = tempSrc;
}

## 📄 License

MIT License. Feel free to use, modify, and share.

## 👨‍💻 Created with ❤️ by Shravani Thouta 
