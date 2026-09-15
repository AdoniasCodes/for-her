# 🐼 A Little Question For You... ❤️

A quirky, interactive single-page love declaration made with pure HTML, CSS, and JavaScript. Zero build steps, fully responsive, and 100% ready for **GitHub Pages**.

---

## 🎮 How the Experience Works

1. **Phase 1 — The Evasive Question Arena:**
   - Animated SVG **Panda Mascot** holding a beating heart asks: *"Do you love me? 🥺👉👈"* with eyes that track the cursor.
   - When she hovers or taps **"No"**, the button teleports away instantly to a random spot on the screen, insults/questions itself with funny banter (*"Liverpool wouldn't bottle this!"*, *"VAR check in progress: foul play!"*, *"Error 404: No not found"*), and shrinks.
   - Meanwhile, the **"YES"** button inflates and pulses with cute love particles until she has no choice but to click it!

2. **Phase 2 — The Celebration & Confession Reel:**
   - Clicking "YES" triggers a multi-stage rainbow confetti explosion, a sweet chime, and Panda dances happily.
   - Panda smoothly slides to the side dock with live commentary speech bubbles.
   - An interactive card deck unveils **"I love you like..."** one-liners tailored to your story:
     - 🌊 Fish loving water
     - 💀 Man United loving losing (unconditional weekly suffering)
     - 🔴 Liverpool high pressing & Klopp fist pumps
     - 🐐 Messi curling a 90th-minute free-kick into the top corner
     - 💔 Surviving the 7-0 Anfield match together
     - ☕ Morning coffee & cold days
     - 🗓️ 1 year, ~2 months milestone (~400+ days)
     - 🏆 Messi lifting the 2022 World Cup trophy
     - 🌙 Ocean tide pulled toward the moon
     - And more!
   - Features manual card navigation or a hands-free **"Auto-read Notes"** mode.

3. **Phase 3 — The Grand Finale:**
   - Unveils the big bold statement:
     > **"I hope you know how special you are to me! ❤️"**
   - Personal letter reflecting on the 1 year and ~2 months together.
   - **"🔄 Experience It All Over Again"** button to reset the entire experience so she can replay it or show friends.

4. **🎵 Background Music Player:**
   - A stylish vinyl disc controller spins in the top-right corner.
   - Tap to play / pause anytime.

---

## 🎵 Adding Your Background Music

Simply copy your song file into the `assets/` folder and name it `music.mp3`:

```
panda-love/
├── index.html
├── style.css
├── script.js
└── assets/
    └── music.mp3   <-- Drop your audio file here!
```

*(If your file is named something else, like `song.mp3`, you can rename it to `music.mp3` or update the `<source src="assets/music.mp3">` line in `index.html`).*

---

## 🚀 How to Host on GitHub Pages (Free & Instant)

1. Create a new repository on your GitHub account (e.g., `for-her` or `panda-love`).
2. Push this folder's contents to the repository:
   ```bash
   git init
   git add .
   git commit -m "feat: a little question for you 🐼❤️"
   git branch -M main
   git remote add origin https://github.com/<YOUR_USERNAME>/<REPO_NAME>.git
   git push -u origin main
   ```
3. In your GitHub repository:
   - Go to **Settings** > **Pages** (in the left sidebar).
   - Under **Build and deployment**, set **Source** to `Deploy from a branch`.
   - Under **Branch**, select `main` and `/ (root)`, then click **Save**.
4. In about 30 seconds, GitHub will give you a live link:
   `https://<YOUR_USERNAME>.github.io/<REPO_NAME>/`
5. Send the link to her! 💌

---

## 💻 Testing Locally

You can simply double-click `index.html` to open it directly in Safari, Chrome, or any browser, or run a quick local web server:

```bash
# Using python 3
python3 -m http.server 8000
```
Then visit `http://localhost:8000`.
