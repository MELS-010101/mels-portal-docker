# 🐳 MELS Portal — Dockerized Portfolio

[![CI](https://github.com/MELS-010101/mels-portal-docker/actions/workflows/deploy.yml/badge.svg)](https://github.com/MELS-010101/mels-portal-docker/actions)
[![Live](https://img.shields.io/badge/live-GitHub%20Pages-0052FF)](https://mels-010101.github.io/mels-portal-docker/)
[![Docker](https://img.shields.io/badge/containerized-nginx%3Aalpine-2496ED?logo=docker&logoColor=white)](Dockerfile)

Строгий технологичный сайт-портфолио инженера инфраструктуры, упакованный в Docker-контейнер и автоматически публикуемый на GitHub Pages через CI/CD.

🔗 **Живой сайт:** [mels-010101.github.io/mels-portal-docker](https://mels-010101.github.io/mels-portal-docker/)

---

## ✨ Что внутри

- Строгий flat-дизайн (светлая + тёмная тема 🌓)
- Переключение языков **RU / EN** 🌍
- Адаптивная вёрстка с мобильным меню 📱
- Упаковано в **Docker** (`nginx:alpine`)
- Автоматический деплой через **GitHub Actions → GitHub Pages**

---

## 🚀 Запуск локально (Docker)

```bash
docker build -t mels-portal .
docker run -d -p 8080:80 --name mels-portal-run mels-portal
```

Открыть: http://localhost:8080

Или одной командой через Compose:

```bash
docker compose up -d --build
```

---

## 🗂️ Структура

```text
mels-portal-docker/
├── html/index.html        # разметка + i18n-атрибуты
├── css/style.css          # дизайн-система (light/dark)
├── js/app.js              # темы, переводы, меню
├── Dockerfile             # образ на базе nginx:alpine
├── docker-compose.yml     # запуск одной командой
└── .github/workflows/
    └── deploy.yml         # CI/CD -> GitHub Pages
```

---

## ⚙️ CI/CD

При каждом `push` в ветку `main` workflow `deploy.yml`:

1. Собирает папку `dist/` из `html/`, `css/`, `js/`
2. Публикует её на **GitHub Pages**

Бейдж вверху = статус последнего прогона. Зелёный ✅ — пайплайн здоров.

---

## 🧰 Стек

`HTML` · `CSS` · `JavaScript` · `Docker` · `nginx` · `GitHub Actions` · `GitHub Pages`

---

## 👤 Автор

**MELS** — System Administrator → DevOps Engineer