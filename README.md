# Mirror Lake Retreat

A responsive, WordPress-free website for Mirror Lake Retreat in Milan, New York.

## Preview locally

With Node.js installed, run from this folder:

    node server.cjs

Open http://localhost:4173. Keep the terminal running while reviewing; press Ctrl+C to stop. On Windows, you can also use START-WEBSITE.cmd.

No dependencies or package installation are required.

## Edit and build

- build.cjs: shared navigation, footer, homepage, lodging, and other page templates.
- about-content.html: About Us page.
- experience-content.html: Mirror Lake Experience page.
- amenities-content.html: Amenities page.
- dist/styles.css: responsive styles.
- dist/app.js: mobile navigation.

After editing page sources, run:

    node build.cjs
    node check.cjs

The complete static website is in dist/. It can be uploaded to a static host. Serve it over HTTP; internal links use root-relative paths. No WordPress database is needed.

## Reservations and content

Reservations are handled by phone at **845-758-8764**, displayed on every call button. No online reservation or payment system is included. Email links open the visitor's email application.

The website includes houses, rooms, log cabins, group retreats, activities, amenities, local attractions, and the full About Us information and policies. RV offerings, food trucks, skiing, ice-skating, microspikes rentals, and 9 Square in the Air are excluded. Expired promotions and old starting rates were omitted.

Before launch, confirm operating hours, policies, meal plans, activity availability, and the accuracy of the original property map. Supply approved privacy-policy content. Employment and donation pages are not included in the new navigation.

## Validation

Run node check.cjs to verify local links, assets, and page headings. Representative phone and tablet browser layouts were checked during development; these were viewport checks rather than physical-device tests.

Source content and photos originated from https://mirrorlakeretreat.org/. Downloaded WordPress archives and one-time migration scripts are excluded from version control. Publishing and domain configuration are separate from updating this repository.
