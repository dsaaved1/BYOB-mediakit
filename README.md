Link to figma file: https://www.figma.com/file/XMQOyeJqtH85Arholjn3cy/BYOB-Interactive-Media-Kit?type=design&node-id=0%3A1&mode=design&t=DW6UAIPTOTuRW80H-1

To run the program:
npm install --force  
npm start

## Editing Input Data

### 1. Navigate to the `data.js` File
- Locate and open the `data.js` file in your project directory.

### 2. Copy Existing `userData` Template
- Within the `data.js` file, find an existing `userData` entry.
- Copy the entire `userData` structure as a template for the new entry.

### 3. Rename the `userData` Entry
- Change the name of the copied `userData` to your desired user's name or identifier.

### 4. Modify `userData` Fields

#### General Information
- **`name`:** Replace with the user's full name.
- **`profilePhoto`:** Update the path to the user's profile photo.
- **`country`:** Update with the user's country of origin.
- **`quote`:** Replace with the user's personal quote.
- **`industries`:** Update with the user's industries or specialties.

#### Social Media Platforms
- **`socialMedia`:** Update details for each platform.
  - **`name`:** Name of the platform.
  - **`logo`:** Path to the platform's logo.
  - **`lastUpdated`:** Last update date.
  - **`rankings`:** Rankings in specific categories.
  - **`statistics`:** Social media metrics.
  - **`packageOptions`:** Available package options and prices.
  - **`rateSheet`:** Rates for specific services.
  - **`demographics`:** Audience demographics.

#### Video and Multimedia
- **`video`:** Path to the user's video content.
- **`videoThumb`:** Path to the video thumbnail.

#### About Section
- **`about`:** Update with a brief biography or description of the user.

Remember to ensure that all paths for images, videos, and other assets are correct and accessible within project.

