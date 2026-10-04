# Autovate Hub Full-Stack Website
React + Vite frontend, Python FastAPI backend, SQLAlchemy database.
Pages: Home, Solutions, Motors, Automation, About, Contact.
Run backend: `cd backend && python -m venv venv && venv\Scripts\activate && pip install -r requirements.txt && python -m app.seed && uvicorn app.main:app --reload`
Run frontend: `cd frontend && npm install && npm run dev`
PostgreSQL is recommended; local fallback is SQLite. Dummy contact: hello@autovatehub.in / +91 XXXXX XXXXX.
