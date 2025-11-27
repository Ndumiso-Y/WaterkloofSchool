# 📹 Metro FM Videos - Optimization Guide

The Metro FM interview videos are **NOT included in Git** because they're too large (40-50 MB each).

## 🎬 Your Video Files

Located in `src/assets/`:
- `video-We're now joined by Principal Rossi...mp4`
- `Waterkloof Hills Primary and Secondary School in Rustenburg...mp4`

## ⚡ How to Optimize Videos

Run these ffmpeg commands in PowerShell from the `src/assets` folder:

### Option 1: Good Quality (Recommended)
```powershell
cd "F:\Digital Agency\waterkloof\Website\waterkloof-hills-school\src\assets"

# Principal interview video
ffmpeg -i "video-We're now joined by Principal Rossi of Waterkloof Hills Primary School, who has been an incredib.mp4" -vcodec libx264 -crf 23 -preset fast -vf "scale=1280:-2" -acodec aac -b:a 128k metro-interview-optimized.mp4

# School vibe video
ffmpeg -i "Waterkloof Hills Primary and Secondary School in Rustenburg is a vibe 🕺 💃 😂 #METROFMBack2Scho.mp4" -vcodec libx264 -crf 23 -preset fast -vf "scale=1280:-2" -acodec aac -b:a 128k waterkloof-vibe-optimized.mp4
```

**Result**: ~5-10 MB per video, high quality, fast load.

### Option 2: Smaller Files
```powershell
# Even smaller (lower quality but faster loading)
ffmpeg -i "video-We're now joined by Principal Rossi of Waterkloof Hills Primary School, who has been an incredib.mp4" -vcodec libx264 -crf 28 -preset veryfast -vf "scale=1280:-2" -acodec aac -b:a 96k metro-interview-small.mp4
```

**Result**: ~2-5 MB per video, good quality, very fast load.

## 🚀 Where to Host Videos

**Option A: Embed from YouTube**
1. Upload videos to your YouTube channel
2. Use YouTube embed code instead of video files
3. Best for performance and SEO

**Option B: Use a CDN**
1. Upload optimized videos to:
   - Cloudflare R2 (cheap storage)
   - AWS S3 + CloudFront
   - Bunny CDN
2. Link to CDN URL in your site

**Option C: Host on cPanel**
1. Optimize videos with ffmpeg (use Option 2 above for smaller files)
2. Upload optimized videos to your cPanel hosting
3. Link directly from your site

## 📝 Current Status

✅ **All images optimized** and included in Git
❌ **Videos NOT optimized** - you need to run ffmpeg commands above
❌ **Videos NOT in Git** - too large (excluded via .gitignore)

## 🎯 Recommended Action

1. **Run the ffmpeg commands above** to create optimized versions
2. **Upload to YouTube** or your cPanel hosting
3. **Update VideoThumbnail component** to link to the hosted videos

---

For local testing, the original videos still work. For production deployment, optimize and host separately.
