# Lecture 02 – Semantic HTML & Structure

## 1. What I implemented this lecture
- Created a semantic header with H1 and personal bio.
- Implemented a Portfolio section using `<section>`, `<figure>`, and `<figcaption>`.
- Added a "Skip to content" link for accessibility.
- Embedded a YouTube video using `<iframe>`.

## 2. Semantic decisions I made (REQUIRED)

### Decision 1
- Element(s) used: `<header>` and `<footer>`
- Where in the page: Top and bottom of the document.
- Why this element is semantically correct: These provide clear landmarks for screen readers to identify introductory content and site-wide metadata.

### Decision 2
- Element(s) used: `<figure>` and `<figcaption>`
- Where in the page: Inside the Portfolio section.
- Why this element is semantically correct: It explicitly links the media (images/video) with its descriptive text, improving accessibility and structure.

### Decision 3
- Element(s) used: `<h1>`, `<h2>`, `<h3>`
- Where in the page: Throughout the document.
- Why this element is semantically correct: I followed a strict hierarchy (only one H1) to ensure the page outline is logical for users and search engines.

## 3. Accessibility considerations
- Included a Skip Link to allow keyboard users to bypass the header.
- Added descriptive `alt` text to all images for visually impaired users.

## 4. What I learned
- I learned how to group media and captions properly using semantic tags instead of just using divs.

## 5. What I still need to improve
- Need to practice more complex table structures and form accessibility.

## 6. Notes about AI usage
- Tool used: Gemini
- What I accepted as-is: The basic boilerplate structure.
- What I modified manually: Personal bio details and specific links.
