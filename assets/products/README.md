# Product photographs

One square PNG per label, filed by category (beer, whisky, rum, vodka, gin,
country-spirits, overseas-spirits, wine). Use the filename listed in
product-image-manifest.csv.

A photo goes live only when both of these are done:

1. Its source, creator and licence are recorded in product-image-manifest.csv
   (or it is marked as the shop's own photograph).
2. A line for it is added to PRODUCT_IMAGES in assets/js/site.js, for example
   "OLD MONK XXX": "assets/products/rum/old-monk-xxx.png"

Labels without a line keep showing "Photo pending".
