"""Remove the Gemini sparkle watermark from the bottom-right of aliza.jpg."""

from PIL import Image, ImageFilter
import numpy as np

P = "/Users/amitzack/aliza-zack-civil-webapp/public/aliza.jpg"

def main():
    img = Image.open(P).convert("RGB")
    arr = np.asarray(img).astype(np.int16)
    H, W, _ = arr.shape

    # ROI — bottom-right corner where the watermark lives.
    roi_x0 = int(W * 0.78)
    roi_x1 = W
    roi_y0 = int(H * 0.85)
    roi_y1 = H

    R, G, B = arr[..., 0], arr[..., 1], arr[..., 2]
    # Watermark is desaturated light-blue on navy. Targets: pixels that are
    # noticeably brighter & bluer than the surrounding navy.
    lum = (0.299 * R + 0.587 * G + 0.114 * B)
    is_light = lum > 95
    # Make sure it's NOT a strong colored shadow — blue/whiteish only.
    bluish = (B >= G) & (B >= R - 5)

    mask = np.zeros((H, W), dtype=bool)
    mask[roi_y0:roi_y1, roi_x0:roi_x1] = (
        is_light[roi_y0:roi_y1, roi_x0:roi_x1]
        & bluish[roi_y0:roi_y1, roi_x0:roi_x1]
    )

    # Dilate the mask so we cover the watermark's anti-aliased edges.
    m_img = Image.fromarray((mask.astype(np.uint8) * 255), mode="L")
    m_img = m_img.filter(ImageFilter.MaxFilter(9))
    m_img = m_img.filter(ImageFilter.MaxFilter(9))
    m_img = m_img.filter(ImageFilter.GaussianBlur(radius=4))
    mask_arr = np.asarray(m_img).astype(np.float32) / 255.0

    # Sample the local navy color from a clean band JUST to the LEFT of the ROI.
    sample_x0 = max(0, roi_x0 - 60)
    sample_x1 = roi_x0
    sample = arr[roi_y0:roi_y1, sample_x0:sample_x1, :]
    base = sample.mean(axis=(0, 1))  # RGB navy mean
    # Add a tiny bit of color noise so it doesn't look like a flat patch.
    rng = np.random.default_rng(11)
    fill = np.empty_like(arr[roi_y0:roi_y1, roi_x0:roi_x1, :])
    for c in range(3):
        noise = rng.integers(-6, 7, fill.shape[:2])
        fill[..., c] = np.clip(base[c] + noise, 0, 255).astype(np.int16)

    # Blend the fill into the ROI using the soft mask.
    src = arr[roi_y0:roi_y1, roi_x0:roi_x1, :].astype(np.float32)
    m_roi = mask_arr[roi_y0:roi_y1, roi_x0:roi_x1, None]
    blended = src * (1 - m_roi) + fill.astype(np.float32) * m_roi
    arr[roi_y0:roi_y1, roi_x0:roi_x1, :] = np.clip(blended, 0, 255).astype(np.int16)

    out = Image.fromarray(arr.astype(np.uint8), mode="RGB")
    out.save(P, "JPEG", quality=90, optimize=True, progressive=True, subsampling=1)
    print(f"wrote {P}")

if __name__ == "__main__":
    main()
