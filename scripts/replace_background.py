"""
Replace Aliza's photo background with a blurred architect-office backdrop.

Pipeline:
  1. Load the improved aliza.jpg.
  2. rembg → extract person as RGBA (background -> transparent).
  3. Download an architect-office background from Unsplash.
  4. Crop + blur the background to create soft depth-of-field.
  5. Composite the person on top.
  6. Mild edge feathering on the mask to blend hair naturally.
  7. Save to public/aliza.jpg (web-optimized JPEG).
"""

import io
import sys
import urllib.request
from PIL import Image, ImageFilter, ImageEnhance

ALIZA_PATH = "/Users/amitzack/aliza-zack-civil-webapp/public/aliza.jpg"
# Architect office workspace — Unsplash editorial.
BG_URL = (
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72"
    "?auto=format&fit=crop&w=1800&q=85"
)

def main():
    from rembg import remove  # imported here so the cli message is clean

    # 1. Load and run rembg.
    with open(ALIZA_PATH, "rb") as f:
        input_bytes = f.read()
    print("running rembg…", flush=True)
    person_rgba = Image.open(io.BytesIO(remove(input_bytes))).convert("RGBA")
    W, H = person_rgba.size
    print(f"  cutout size: {W}x{H}")

    # 2. Subtle edge feathering on the alpha for natural hair blend.
    alpha = person_rgba.split()[-1]
    alpha_blurred = alpha.filter(ImageFilter.GaussianBlur(radius=0.8))
    # Slight contrast on the alpha to reduce halo at hair tips.
    alpha_blurred = ImageEnhance.Contrast(alpha_blurred).enhance(1.10)
    person_rgba.putalpha(alpha_blurred)

    # 3. Download architect-office background.
    print("downloading background…", flush=True)
    with urllib.request.urlopen(BG_URL, timeout=60) as resp:
        bg_bytes = resp.read()
    bg = Image.open(io.BytesIO(bg_bytes)).convert("RGB")

    # 4. Cover-fit background to the portrait dimensions.
    bg_w, bg_h = bg.size
    portrait_aspect = W / H
    bg_aspect = bg_w / bg_h
    if bg_aspect > portrait_aspect:
        # bg is wider → scale by height, crop sides.
        new_w = int(bg_h * portrait_aspect)
        left = (bg_w - new_w) // 2
        bg = bg.crop((left, 0, left + new_w, bg_h))
    else:
        # bg is taller → scale by width, crop top/bottom.
        new_h = int(bg_w / portrait_aspect)
        top = (bg_h - new_h) // 2
        bg = bg.crop((0, top, bg_w, top + new_h))
    bg = bg.resize((W, H), Image.LANCZOS)

    # 5. Soft depth-of-field blur + slight desaturation so subject pops.
    bg = bg.filter(ImageFilter.GaussianBlur(radius=12))
    bg = ImageEnhance.Color(bg).enhance(0.85)
    bg = ImageEnhance.Brightness(bg).enhance(0.95)

    # 6. Composite.
    composite = Image.new("RGB", (W, H))
    composite.paste(bg, (0, 0))
    composite.paste(person_rgba, (0, 0), person_rgba)

    # 7. Save.
    composite.save(
        ALIZA_PATH,
        format="JPEG",
        quality=88,
        optimize=True,
        progressive=True,
        subsampling=1,
    )
    print(f"wrote {ALIZA_PATH}  ({W}x{H})")

if __name__ == "__main__":
    sys.exit(main())
