# Cinematic Video Processing & AI Upscaling Pipeline

This document outlines the pipeline used to transform a low-resolution (360p) stock interview video into a pristine, true 1080p cinematic hero background for the Ventura Custom Homes redesign.

## The Challenge
The source video (`YTB_1790689971532.mp4`) was 640x360 resolution. Standard FFmpeg upscaling (Lanczos/Spline) combined with slow-motion interpolation resulted in blocky, choppy, and "potato-quality" artifacts that did not fit the premium luxury aesthetic of the brand.

## The AI Upscaling Solution (Real-ESRGAN)
To achieve true HD quality, we bypassed standard upscaling and implemented an AI-driven mathematical reconstruction of the frames using **Real-ESRGAN**.

### Pipeline Steps (`upscale_video.py`):
1. **Targeted Frame Extraction:** FFmpeg extracted only the precise timestamps needed for the 15-second master (to save GPU compute time), breaking the video down into 24fps JPEG frames.
2. **AI Reconstruction:** The `realesrgan-ncnn-vulkan` executable (utilizing GPU Vulkan acceleration) processed every single frame, mathematically hallucinating missing details and upscaling the 360p frames to 4K/1440p using the `realesrgan-x4plus` model.
3. **True Slow-Motion Interpolation:** For the clips featuring the founders, we applied FFmpeg's `minterpolate` (`setpts=2.0*PTS`) to generate new frames, creating an ultra-smooth, cinematic 2x slow-motion pan without dropping the framerate.
4. **Master Assembly:** The AI-upscaled frames were stitched back together, color-graded (contrast/saturation bumps), given a subtle film grain (`noise` filter to mask banding), and downsampled perfectly to a crisp 1920x1080 master.

## Repository Assets
- **`upscale_video.py`**: The Python script containing the exact timecodes, FFmpeg extraction logic, and Real-ESRGAN execution commands.
- **`ventura_stock_hero_1080p.mp4`**: The final compiled asset (located in `redesign/public/`).

## Future Edits
If you need to re-render or tweak the timing:
1. Download [Real-ESRGAN for Windows](https://github.com/xinntao/Real-ESRGAN).
2. Place `realesrgan-ncnn-vulkan.exe` in the `realesrgan/` directory.
3. Run `python upscale_video.py`.
