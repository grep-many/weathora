
# Weathora 🌦️

A sleek Progressive Web App (PWA) weather dashboard built with React and the OpenWeatherMap API.

---

## 🌟 Features

✅ Search current weather by city  
✅ View temperature, humidity, wind, pressure  
✅ Responsive and minimal design  
✅ PWA support (installable on mobile/desktop)  
✅ Uses OpenWeatherMap API

---

## 🔧 Setup

1. **Clone this repo**
   ```bash
   git clone https://github.com/grep-many/weathora.git
   cd weathora
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Get your OpenWeatherMap API key**
   - Sign up at [https://openweathermap.org/api](https://openweathermap.org/api)
   - Get a free API key

4. **Add API key to environment**
   - Create a `.env` file in the root:
     ```
     REACT_APP_WEATHER_API_KEY=your_api_key_here
     ```

5. **Start the app**
   ```bash
   npm start
   ```

---

## ⚙️ Build for Production

```bash
npm run build
```

---

## 💾 Enable PWA

This project uses `serviceWorker` and `manifest.json` to enable installable PWA behavior.  
When you build the app (`npm run build`) and deploy it on HTTPS, it will:

- Work offline (cached pages)  
- Show “Install” button on supported browsers  
- Add an icon on home screen or desktop

---

## 📦 Tech Stack

- React
- OpenWeatherMap API
- CSS
- Create React App (CRA) with PWA template

---