-- =============================================================
-- WORLD TRAVEL TRACKER — Schema Supabase
-- Execute no SQL Editor do painel Supabase
-- =============================================================

-- ─── TABELAS DE REFERÊNCIA ────────────────────────────────────

CREATE TABLE IF NOT EXISTS countries (
  code  CHAR(2)  PRIMARY KEY,
  name  TEXT     NOT NULL,
  continent TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS cities (
  id           SERIAL  PRIMARY KEY,
  name         TEXT    NOT NULL,
  country_code CHAR(2) NOT NULL REFERENCES countries(code) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS cities_country_code_idx ON cities(country_code);

-- ─── TABELAS DE DADOS DO USUÁRIO ─────────────────────────────

CREATE TABLE IF NOT EXISTS trips (
  id         TEXT        PRIMARY KEY,
  user_id    UUID        NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  name       TEXT        NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS trip_countries (
  id           TEXT    PRIMARY KEY,
  trip_id      TEXT    NOT NULL REFERENCES trips(id) ON DELETE CASCADE,
  country_code CHAR(2) NOT NULL,
  country_name TEXT    NOT NULL,
  date_in      DATE    NOT NULL,
  date_out     DATE    NOT NULL,
  sort_order   INT     NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS trip_cities (
  id              TEXT    PRIMARY KEY,
  trip_country_id TEXT    NOT NULL REFERENCES trip_countries(id) ON DELETE CASCADE,
  name            TEXT    NOT NULL,
  date_in         DATE,
  date_out        DATE,
  sort_order      INT     NOT NULL DEFAULT 0
);

-- ─── ROW LEVEL SECURITY ──────────────────────────────────────

ALTER TABLE trips          ENABLE ROW LEVEL SECURITY;
ALTER TABLE trip_countries ENABLE ROW LEVEL SECURITY;
ALTER TABLE trip_cities    ENABLE ROW LEVEL SECURITY;
ALTER TABLE countries      ENABLE ROW LEVEL SECURITY;
ALTER TABLE cities         ENABLE ROW LEVEL SECURITY;

-- Países e cidades de referência: leitura pública
CREATE POLICY "countries_public_read" ON countries FOR SELECT USING (true);
CREATE POLICY "cities_public_read"    ON cities    FOR SELECT USING (true);

-- Viagens: somente o dono
CREATE POLICY "trips_owner" ON trips
  USING  (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Países da viagem: acesso via ownership da trip
CREATE POLICY "trip_countries_owner" ON trip_countries
  USING  (EXISTS (SELECT 1 FROM trips WHERE trips.id = trip_id AND trips.user_id = auth.uid()))
  WITH CHECK (EXISTS (SELECT 1 FROM trips WHERE trips.id = trip_id AND trips.user_id = auth.uid()));

-- Cidades da viagem: acesso via ownership da trip
CREATE POLICY "trip_cities_owner" ON trip_cities
  USING (EXISTS (
    SELECT 1 FROM trip_countries tc
    JOIN trips t ON tc.trip_id = t.id
    WHERE tc.id = trip_country_id AND t.user_id = auth.uid()
  ))
  WITH CHECK (EXISTS (
    SELECT 1 FROM trip_countries tc
    JOIN trips t ON tc.trip_id = t.id
    WHERE tc.id = trip_country_id AND t.user_id = auth.uid()
  ));
