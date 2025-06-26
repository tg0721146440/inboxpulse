# InboxPulse – Gmail Insights Dashboard

A Gmail-connected dashboard that shows inbox stats, AI-powered summaries, and weekly cleanup activity.

## 💡 Features
- Auto-cleans Gmail tabs weekly (Promotions, Social, Updates)
- Visualizes inbox stats (trash size, email categories, top senders)
- AI-generated summaries using OpenAI
- Real-time dashboard with Recharts and Tailwind

## 📦 Tech Stack
- Frontend: Next.js + Tailwind CSS
- Backend: Node.js + Firebase Functions (or Supabase)
- Auth: Google Sign-In
- AI: OpenAI API

## 🚀 Getting Started

1. `git clone` the repo or unzip this package
2. Rename `.env.example` to `.env` and add your API keys
3. Install dependencies in both frontend and backend folders:
    ```bash
    cd frontend && npm install
    cd ../backend && npm install
    ```
4. Start dev server:
    ```bash
    cd frontend && npm run dev
    ```
5. Build the backend logic (cron script + Gmail API integration)

## 📈 Future Additions
- Recharts integration
- Email classification model
- PDF export feature

Made by Tebogo Gravit.
