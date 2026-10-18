# SAVIN STORE — editable website

This is a mobile-friendly static store website with WhatsApp order enquiries. It can be hosted free with GitHub Pages.

## Files
- `index.html` — page content
- `style.css` — colours, layout and mobile design
- `config.js` — store name, currency and WhatsApp number
- `products.js` — product names, prices, photos and descriptions
- `script.js` — product cards and WhatsApp order buttons

## Before publishing
1. Open `config.js`.
2. Replace `923000000000` with your WhatsApp number in international format, digits only. For a Pakistani number, use `92` followed by the number without its first `0`. Example format: `923001234567`.
3. Open `products.js` and replace all demo products/prices with real items you can actually supply. Set `demo: false` after checking details.
4. For product photos, put a public direct image URL in `image`, or leave it empty to use the emoji.
5. Never put passwords, API keys or private customer information in these files.

## Publish from your Android phone with GitHub Pages
1. Sign in to GitHub in your phone browser and create a new repository named `savin-store-site`.
2. If the repository is public, GitHub Pages can host this static site on the free plan.
3. Open the repository, choose **Add file → Upload files**, and upload the five website files from this folder (not the ZIP itself).
4. Commit the files.
5. Go to **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
6. Wait for GitHub Pages to publish. Your site URL will be shown in Settings → Pages. It usually looks like `https://YOUR-USERNAME.github.io/savin-store-site/`.
7. To change products later, edit `products.js`; to change the WhatsApp number, edit `config.js`; to change the design, edit `style.css`. Commit each change and GitHub Pages will update the site.

## Important limits
- This is a static catalogue and WhatsApp enquiry website. It does not take online card payments or automatically store orders.
- Demo prices and product names are examples only. Confirm real availability, price, delivery costs and return policy before accepting orders.
- A free `github.io` address is available; a custom domain costs extra.
- Keep the repository and publishing account under your control. Turn on two-factor authentication and never share your password.
