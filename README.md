# Mickey & Shivani's Wedding Website

A beautiful wedding website for Mickey Christensen and Shivani Srivastava's Indian American fusion wedding on May 22, 2026, in Chicago.

## Features

- Responsive design for all devices
- Event schedule and details
- Information about Indian wedding traditions
- RSVP form
- Countdown timer to the wedding day
- Venue information

## Structure

- `index.html` - Main HTML file
- `styles/main.css` - All styles for the website
- `scripts/main.js` - JavaScript functionality
- `images/` - Image assets (requires adding your own images)

## Getting Started

1. Clone or download this repository
2. Add your own images to the `images/` directory, including a hero-background.jpg for the main page
3. Personalize the content in `index.html` as needed
4. Open `index.html` in a web browser to preview

## Customization

### Colors

The color scheme can be easily modified by changing the CSS variables in `styles/main.css`:

```css
:root {
  --primary-color: #c5704c; /* Terracotta/Henna color */
  --secondary-color: #fbe6d4; /* Light peach */
  --accent-color: #274247; /* Deep teal */
  --accent-gold: #d4af37; /* Gold accent */
  --background-color: #fff8f3; /* Warm off-white */
  /* ... */
}
```

### Images

Replace the placeholder images with your own:

- `hero-background.jpg` - Main background image (recommended size: 1920x1080 or larger)
- Add additional images as needed

## RSVP Form

The RSVP form currently shows a confirmation message but doesn't submit data. To make it functional:

1. Set up a server-side script to process form submissions
2. Modify the form submission code in `scripts/main.js`

## Venue Image

The website includes a section for showing your venue. To add the venue image:

1. Get a high-quality photo of the Chicago Cultural Center
2. Save it as `chicago-cultural-center.jpg` in the `images` folder
3. The image will automatically be displayed in the venue section

## License

This project is available for personal use.

## Acknowledgements

- Fonts: [Google Fonts](https://fonts.google.com/) (Cormorant Garamond and Poppins)
- Created for Mickey and Shivani's wedding