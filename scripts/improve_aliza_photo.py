"""
Improve the headshot photo for the home page About section.

Reads:   public/Profile.jpeg
Writes:  public/aliza.jpg  (web-optimized, retouched)

Adjustments (subtle / tasteful — not heavy-handed):
  - Resize to max 1600 px on the long side (plenty for hi-DPI; cuts file size).
  - Slight exposure lift (brightness 1.05) — opens up shadows.
  - Mild contrast boost (1.08) — adds dimension without crush.
  - Slight color warmth (custom multiplier on R/G channels).
  - Modest sharpening (UnsharpMask, low radius).
  - Save as high-quality JPEG (quality=88, progressive, optimized).
"""

from PIL import Image, ImageEnhance, ImageFilter, ImageOps

SRC = "/Users/amitzack/aliza-zack-civil-webapp/public/Profile.jpeg"
DST = "/Users/amitzack/aliza-zack-civil-webapp/public/aliza.jpg"
MAX_LONG_SIDE = 1600

def improve():
    img = Image.open(SRC)
    img = ImageOps.exif_transpose(img)  # respect orientation tags
    img = img.convert("RGB")

    # Resize long-side to MAX_LONG_SIDE (preserve aspect).
    w, h = img.size
    if max(w, h) > MAX_LONG_SIDE:
        scale = MAX_LONG_SIDE / float(max(w, h))
        img = img.resize((int(w * scale), int(h * scale)), Image.LANCZOS)

    # Subtle exposure lift.
    img = ImageEnhance.Brightness(img).enhance(1.05)

    # Mild contrast.
    img = ImageEnhance.Contrast(img).enhance(1.08)

    # Slight color saturation pop.
    img = ImageEnhance.Color(img).enhance(1.07)

    # Warm tone shift (very mild). Multiplies R and G channels.
    r, g, b = img.split()
    r = r.point(lambda v: min(255, int(v * 1.025)))
    g = g.point(lambda v: min(255, int(v * 1.01)))
    img = Image.merge("RGB", (r, g, b))

    # Light sharpening — low-radius unsharp mask.
    img = img.filter(ImageFilter.UnsharpMask(radius=1.2, percent=60, threshold=3))

    # Save as web-optimized JPEG.
    img.save(
        DST,
        format="JPEG",
        quality=88,
        optimize=True,
        progressive=True,
        subsampling=1,
    )
    print(f"wrote {DST}")
    print(f"size: {img.size[0]}x{img.size[1]}")

if __name__ == "__main__":
    improve()
