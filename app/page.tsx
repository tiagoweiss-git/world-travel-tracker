"use client";
import { useState, useEffect, useRef } from "react";
import { supabase } from "@/lib/supabase";
import type { User } from "@supabase/supabase-js";

// ─── PAÍSES DO MUNDO ────────────────────────────────────────────
const COUNTRIES = [
  { name: "Afeganistão", code: "AF" }, { name: "África do Sul", code: "ZA" },
  { name: "Albânia", code: "AL" }, { name: "Alemanha", code: "DE" },
  { name: "Andorra", code: "AD" }, { name: "Angola", code: "AO" },
  { name: "Antígua e Barbuda", code: "AG" }, { name: "Arábia Saudita", code: "SA" },
  { name: "Argélia", code: "DZ" }, { name: "Argentina", code: "AR" },
  { name: "Armênia", code: "AM" }, { name: "Austrália", code: "AU" },
  { name: "Áustria", code: "AT" }, { name: "Azerbaijão", code: "AZ" },
  { name: "Bahamas", code: "BS" }, { name: "Bahrein", code: "BH" },
  { name: "Bangladesh", code: "BD" }, { name: "Barbados", code: "BB" },
  { name: "Bélgica", code: "BE" }, { name: "Belize", code: "BZ" },
  { name: "Benin", code: "BJ" }, { name: "Bolívia", code: "BO" },
  { name: "Bósnia e Herzegovina", code: "BA" }, { name: "Botswana", code: "BW" },
  { name: "Brasil", code: "BR" }, { name: "Brunei", code: "BN" },
  { name: "Bulgária", code: "BG" }, { name: "Burkina Faso", code: "BF" },
  { name: "Burundi", code: "BI" }, { name: "Cabo Verde", code: "CV" },
  { name: "Camarões", code: "CM" }, { name: "Camboja", code: "KH" },
  { name: "Canadá", code: "CA" }, { name: "Catar", code: "QA" },
  { name: "Cazaquistão", code: "KZ" }, { name: "Chade", code: "TD" },
  { name: "Chile", code: "CL" }, { name: "China", code: "CN" },
  { name: "Chipre", code: "CY" }, { name: "Colômbia", code: "CO" },
  { name: "Comores", code: "KM" }, { name: "Congo", code: "CG" },
  { name: "Coreia do Norte", code: "KP" }, { name: "Coreia do Sul", code: "KR" },
  { name: "Costa do Marfim", code: "CI" }, { name: "Costa Rica", code: "CR" },
  { name: "Croácia", code: "HR" }, { name: "Cuba", code: "CU" },
  { name: "Dinamarca", code: "DK" }, { name: "Djibuti", code: "DJ" },
  { name: "Dominica", code: "DM" }, { name: "Egito", code: "EG" },
  { name: "El Salvador", code: "SV" }, { name: "Emirados Árabes Unidos", code: "AE" },
  { name: "Equador", code: "EC" }, { name: "Eritreia", code: "ER" },
  { name: "Eslováquia", code: "SK" }, { name: "Eslovênia", code: "SI" },
  { name: "Espanha", code: "ES" }, { name: "Estados Unidos", code: "US" },
  { name: "Estônia", code: "EE" }, { name: "Eswatini", code: "SZ" },
  { name: "Etiópia", code: "ET" }, { name: "Fiji", code: "FJ" },
  { name: "Filipinas", code: "PH" }, { name: "Finlândia", code: "FI" },
  { name: "França", code: "FR" }, { name: "Gabão", code: "GA" },
  { name: "Gâmbia", code: "GM" }, { name: "Gana", code: "GH" },
  { name: "Geórgia", code: "GE" }, { name: "Granada", code: "GD" },
  { name: "Grécia", code: "GR" }, { name: "Guatemala", code: "GT" },
  { name: "Guiana", code: "GY" }, { name: "Guiné", code: "GN" },
  { name: "Guiné-Bissau", code: "GW" }, { name: "Guiné Equatorial", code: "GQ" },
  { name: "Haiti", code: "HT" }, { name: "Honduras", code: "HN" },
  { name: "Hungria", code: "HU" }, { name: "Iêmen", code: "YE" },
  { name: "Índia", code: "IN" }, { name: "Indonésia", code: "ID" },
  { name: "Irã", code: "IR" }, { name: "Iraque", code: "IQ" },
  { name: "Irlanda", code: "IE" }, { name: "Islândia", code: "IS" },
  { name: "Israel", code: "IL" }, { name: "Itália", code: "IT" },
  { name: "Jamaica", code: "JM" }, { name: "Japão", code: "JP" },
  { name: "Jordânia", code: "JO" }, { name: "Kuwait", code: "KW" },
  { name: "Laos", code: "LA" }, { name: "Lesoto", code: "LS" },
  { name: "Letônia", code: "LV" }, { name: "Líbano", code: "LB" },
  { name: "Libéria", code: "LR" }, { name: "Líbia", code: "LY" },
  { name: "Liechtenstein", code: "LI" }, { name: "Lituânia", code: "LT" },
  { name: "Luxemburgo", code: "LU" }, { name: "Madagascar", code: "MG" },
  { name: "Malásia", code: "MY" }, { name: "Malawi", code: "MW" },
  { name: "Maldivas", code: "MV" }, { name: "Mali", code: "ML" },
  { name: "Malta", code: "MT" }, { name: "Marrocos", code: "MA" },
  { name: "Maurício", code: "MU" }, { name: "Mauritânia", code: "MR" },
  { name: "México", code: "MX" }, { name: "Moçambique", code: "MZ" },
  { name: "Moldávia", code: "MD" }, { name: "Mônaco", code: "MC" },
  { name: "Mongólia", code: "MN" }, { name: "Montenegro", code: "ME" },
  { name: "Myanmar", code: "MM" }, { name: "Namíbia", code: "NA" },
  { name: "Nepal", code: "NP" }, { name: "Nicarágua", code: "NI" },
  { name: "Níger", code: "NE" }, { name: "Nigéria", code: "NG" },
  { name: "Noruega", code: "NO" }, { name: "Nova Zelândia", code: "NZ" },
  { name: "Omã", code: "OM" }, { name: "Países Baixos", code: "NL" },
  { name: "Paquistão", code: "PK" }, { name: "Palau", code: "PW" },
  { name: "Palestina", code: "PS" }, { name: "Panamá", code: "PA" },
  { name: "Papua-Nova Guiné", code: "PG" }, { name: "Paraguai", code: "PY" },
  { name: "Peru", code: "PE" }, { name: "Polônia", code: "PL" },
  { name: "Portugal", code: "PT" }, { name: "Quênia", code: "KE" },
  { name: "Quirguistão", code: "KG" }, { name: "Reino Unido", code: "GB" },
  { name: "República Centro-Africana", code: "CF" }, { name: "República Dominicana", code: "DO" },
  { name: "República Tcheca", code: "CZ" }, { name: "Romênia", code: "RO" },
  { name: "Ruanda", code: "RW" }, { name: "Rússia", code: "RU" },
  { name: "Samoa", code: "WS" }, { name: "San Marino", code: "SM" },
  { name: "Santa Lúcia", code: "LC" }, { name: "São Tomé e Príncipe", code: "ST" },
  { name: "Senegal", code: "SN" }, { name: "Serra Leoa", code: "SL" },
  { name: "Sérvia", code: "RS" }, { name: "Singapura", code: "SG" },
  { name: "Síria", code: "SY" }, { name: "Somália", code: "SO" },
  { name: "Sri Lanka", code: "LK" }, { name: "Sudão", code: "SD" },
  { name: "Sudão do Sul", code: "SS" }, { name: "Suécia", code: "SE" },
  { name: "Suíça", code: "CH" }, { name: "Suriname", code: "SR" },
  { name: "Tailândia", code: "TH" }, { name: "Taiwan", code: "TW" },
  { name: "Tajiquistão", code: "TJ" }, { name: "Tanzânia", code: "TZ" },
  { name: "Timor-Leste", code: "TL" }, { name: "Togo", code: "TG" },
  { name: "Tonga", code: "TO" }, { name: "Trinidad e Tobago", code: "TT" },
  { name: "Tunísia", code: "TN" }, { name: "Turcomenistão", code: "TM" },
  { name: "Turquia", code: "TR" }, { name: "Ucrânia", code: "UA" },
  { name: "Uganda", code: "UG" }, { name: "Uruguai", code: "UY" },
  { name: "Uzbequistão", code: "UZ" }, { name: "Vanuatu", code: "VU" },
  { name: "Venezuela", code: "VE" }, { name: "Vietnã", code: "VN" },
  { name: "Zâmbia", code: "ZM" }, { name: "Zimbábue", code: "ZW" },
];

// ─── CONTINENTES ─────────────────────────────────────────────────
const CONTINENT_MAP = {
  "América do Sul": ["AR","BO","BR","CL","CO","EC","GY","PY","PE","SR","UY","VE"],
  "América do Norte": ["CA","MX","US","BZ","CR","SV","GT","HN","NI","PA","CU","DO","HT","JM","TT","BB","LC","GD","AG","DM","BS"],
  "Europa": ["AL","AD","AT","BE","BA","BG","HR","CY","CZ","DK","EE","FI","FR","DE","GR","HU","IS","IE","IT","LV","LI","LT","LU","MT","MD","MC","ME","NL","NO","PL","PT","RO","RU","SM","RS","SK","SI","ES","SE","CH","UA","GB"],
  "África": ["DZ","AO","BJ","BW","BF","BI","CM","CV","CF","TD","KM","CG","CI","DJ","EG","GQ","ER","ET","GA","GM","GH","GN","GW","KE","LS","LR","LY","MG","MW","ML","MR","MU","MA","MZ","NA","NE","NG","RW","ST","SN","SL","SO","ZA","SD","SS","SZ","TZ","TG","TN","UG","ZM","ZW"],
  "Ásia": ["AF","AM","AZ","BH","BD","BN","KH","CN","GE","IN","ID","IR","IQ","IL","JP","JO","KZ","KW","KG","LA","LB","MY","MV","MN","MM","NP","KP","OM","PK","PS","PH","QA","SA","SG","KR","LK","SY","TW","TJ","TH","TL","TM","AE","UZ","VN","YE"],
  "Oceania": ["AU","FJ","NZ","PG","PW","WS","TO","VU"],
};
const CONTINENT_ORDER = ["Europa","Ásia","América do Sul","América do Norte","África","Oceania"];
const CONTINENT_ICONS = { "América do Sul":"🌎","América do Norte":"🌎","Europa":"🌍","África":"🌍","Ásia":"🌏","Oceania":"🌏","Outros":"🌐" };
const countryContinent = (code: string) => Object.entries(CONTINENT_MAP).find(([,codes]) => codes.includes(code))?.[0] || "Outros";

// ─── TYPES ────────────────────────────────────────────────────────
type City = { id: string; name: string; dateIn: string; dateOut: string };
type TripCountry = { id: string; country: string; code: string; dateIn: string; dateOut: string; cities: City[] };
type Trip = { id: string; name: string; countries: TripCountry[] };

// ─── HELPERS ──────────────────────────────────────────────────────
const flag = (code: string) => code ? [...code.toUpperCase()].map(c => String.fromCodePoint(0x1F1E6-65+c.charCodeAt(0))).join("") : "🌍";
const daysBetween = (a: string, b: string) => (!a||!b) ? 0 : Math.max(0,Math.round((new Date(b).getTime()-new Date(a).getTime())/86400000));
const fmtDate = (d: string) => { if(!d) return ""; const [y,m]=d.split("-"); return `${["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"][+m-1]} ${y}`; };
const uid = () => Date.now().toString(36)+Math.random().toString(36).slice(2);

// ─── SAMPLE DATA ─────────────────────────────────────────────────
const SAMPLE: Trip[] = [
  { id:"t1", name:"Europa 2023", countries:[
    { id:"c1", country:"França", code:"FR", dateIn:"2023-06-01", dateOut:"2023-06-10", cities:[{id:"ci1",name:"Paris",dateIn:"",dateOut:""},{id:"ci2",name:"Lyon",dateIn:"",dateOut:""}] },
    { id:"c2", country:"Itália", code:"IT", dateIn:"2023-06-10", dateOut:"2023-06-20", cities:[{id:"ci3",name:"Roma",dateIn:"",dateOut:""},{id:"ci4",name:"Florença",dateIn:"",dateOut:""}] },
    { id:"c3", country:"Espanha", code:"ES", dateIn:"2023-06-20", dateOut:"2023-06-30", cities:[{id:"ci5",name:"Barcelona",dateIn:"",dateOut:""}] },
  ]},
  { id:"t2", name:"Japão 2023", countries:[
    { id:"c4", country:"Japão", code:"JP", dateIn:"2023-10-05", dateOut:"2023-10-20", cities:[{id:"ci6",name:"Tóquio",dateIn:"2023-10-05",dateOut:"2023-10-12"},{id:"ci7",name:"Kyoto",dateIn:"2023-10-12",dateOut:"2023-10-17"},{id:"ci8",name:"Osaka",dateIn:"2023-10-17",dateOut:"2023-10-20"}] },
  ]},
  { id:"t3", name:"América do Sul 2024", countries:[
    { id:"c5", country:"Argentina", code:"AR", dateIn:"2024-01-05", dateOut:"2024-01-12", cities:[{id:"ci9",name:"Buenos Aires",dateIn:"",dateOut:""}] },
    { id:"c6", country:"Chile", code:"CL", dateIn:"2024-01-12", dateOut:"2024-01-20", cities:[{id:"ci10",name:"Santiago",dateIn:"",dateOut:""},{id:"ci11",name:"Valparaíso",dateIn:"",dateOut:""}] },
  ]},
];

// ─── ESTILOS BASE ─────────────────────────────────────────────────
const G = `@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');
*{box-sizing:border-box;margin:0;padding:0;}body{background:#0b1220;color:#e8e0cc;font-family:'DM Sans',sans-serif;}
::-webkit-scrollbar{width:5px;}::-webkit-scrollbar-track{background:#0f1a2e;}::-webkit-scrollbar-thumb{background:#c9a84c55;border-radius:3px;}
input[type=date]::-webkit-calendar-picker-indicator{filter:invert(0.6);}`;
const lbl = { display:"block", color:"#8a9bb5", fontSize:11, letterSpacing:"0.1em", textTransform:"uppercase" as const, marginBottom:6, fontWeight:500 };
const inp = { width:"100%", background:"#0b1728", border:"1px solid #1e3050", borderRadius:10, padding:"11px 14px", color:"#e8e0cc", fontSize:14, fontFamily:"'DM Sans',sans-serif", outline:"none" };
const btnGold = { background:"linear-gradient(135deg,#c9a84c,#e8cc7a)", color:"#0b1220", border:"none", borderRadius:10, padding:"11px 20px", fontFamily:"'DM Sans',sans-serif", fontWeight:600, fontSize:13, cursor:"pointer" };
const btnGhost = { background:"#1a2e4a", color:"#8a9bb5", border:"1px solid #1e3050", borderRadius:10, padding:"11px 16px", fontFamily:"'DM Sans',sans-serif", fontWeight:500, fontSize:13, cursor:"pointer" };

// ─── SUPABASE DATA LAYER ──────────────────────────────────────────
async function loadUserTrips(userId: string): Promise<Trip[]> {
  const { data, error } = await supabase
    .from("trips")
    .select("*, trip_countries(*, trip_cities(*))")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  if (error || !data?.length) return [];

  return data.map((t: any) => ({
    id: t.id,
    name: t.name,
    countries: (t.trip_countries || [])
      .sort((a: any, b: any) => a.sort_order - b.sort_order)
      .map((c: any) => ({
        id: c.id,
        country: c.country_name,
        code: c.country_code,
        dateIn: c.date_in,
        dateOut: c.date_out,
        cities: (c.trip_cities || [])
          .sort((a: any, b: any) => a.sort_order - b.sort_order)
          .map((city: any) => ({
            id: city.id,
            name: city.name,
            dateIn: city.date_in || "",
            dateOut: city.date_out || "",
          })),
      })),
  }));
}

async function saveTripToSupabase(trip: Trip, userId: string) {
  // Upsert trip
  await supabase.from("trips").upsert({ id: trip.id, user_id: userId, name: trip.name });

  // Delete existing countries (cascades to cities)
  await supabase.from("trip_countries").delete().eq("trip_id", trip.id);

  // Insert countries + cities
  for (let i = 0; i < trip.countries.length; i++) {
    const c = trip.countries[i];
    await supabase.from("trip_countries").insert({
      id: c.id, trip_id: trip.id,
      country_code: c.code, country_name: c.country,
      date_in: c.dateIn, date_out: c.dateOut, sort_order: i,
    });
    for (let j = 0; j < c.cities.length; j++) {
      const city = c.cities[j];
      await supabase.from("trip_cities").insert({
        id: city.id, trip_country_id: c.id, name: city.name,
        date_in: city.dateIn || null, date_out: city.dateOut || null, sort_order: j,
      });
    }
  }
}

async function deleteTripFromSupabase(tripId: string) {
  await supabase.from("trips").delete().eq("id", tripId);
}

// ─── COMPONENTE PRINCIPAL ─────────────────────────────────────────
export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [tab, setTab] = useState("add");
  const [trips, setTrips] = useState<Trip[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [editTrip, setEditTrip] = useState<Trip | null>(null);
  const [success, setSuccess] = useState(false);
  const [saving, setSaving] = useState(false);

  // Auth
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setAuthLoading(false);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setAuthLoading(false);
    });
    return () => subscription.unsubscribe();
  }, []);

  // Load trips when user changes
  useEffect(() => {
    if (authLoading) return;
    if (!user) { setTrips([]); setLoaded(true); return; }
    loadUserTrips(user.id).then(data => {
      setTrips(data);
      setLoaded(true);
    });
  }, [user, authLoading]);

  const signInWithGoogle = () => {
    supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: typeof window !== "undefined" ? window.location.origin : undefined },
    });
  };
  const signOut = () => supabase.auth.signOut();

  async function saveTrip(trip: Trip) {
    const updated = editTrip
      ? trips.map(t => t.id === trip.id ? trip : t)
      : [...trips, trip];
    setTrips(updated);
    if (user) {
      setSaving(true);
      await saveTripToSupabase(trip, user.id).finally(() => setSaving(false));
    }
  }

  async function removeTrip(id: string) {
    setTrips(prev => prev.filter(t => t.id !== id));
    if (user) await deleteTripFromSupabase(id);
  }

  const allCountryCodes = new Set(trips.flatMap(t => t.countries.map(c => c.code)));
  const totalCountries = allCountryCodes.size;
  const totalCities = trips.flatMap(t => t.countries.flatMap(c => c.cities)).length;
  const totalDays = trips.flatMap(t => t.countries).reduce((s,c) => s+daysBetween(c.dateIn,c.dateOut),0);

  const handleSave = (trip: Trip) => {
    saveTrip(trip);
    setEditTrip(null);
    setTab("dash");
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2500);
  };

  const TABS: [string, string][] = [
    ["add", editTrip ? "✏️ Editar" : "✈️ Nova Viagem"],
    ["dash", "📊 Dashboard"],
    ["timeline", "🗓️ Linha do Tempo"],
    ["report", "📋 Relatório"],
  ];

  // ── Tela de loading inicial ──
  if (authLoading) {
    return (
      <>
        <style>{G}</style>
        <div style={{ minHeight:"100vh", background:"linear-gradient(135deg,#0b1220 0%,#0f1e38 60%,#0d1a2e 100%)", display:"flex", alignItems:"center", justifyContent:"center" }}>
          <div style={{ color:"#c9a84c", fontSize:14, letterSpacing:"0.1em" }}>Carregando…</div>
        </div>
      </>
    );
  }

  // ── Tela de login ──
  if (!user) {
    return (
      <>
        <style>{G}</style>
        <div style={{ minHeight:"100vh", background:"linear-gradient(135deg,#0b1220 0%,#0f1e38 60%,#0d1a2e 100%)", display:"flex", alignItems:"center", justifyContent:"center", padding:16 }}>
          <div style={{ background:"#0f1a2e", borderRadius:24, padding:"48px 36px", border:"1px solid #1e3050", textAlign:"center", maxWidth:380, width:"100%", boxShadow:"0 24px 80px #00000066" }}>
            <div style={{ fontSize:52, marginBottom:16 }}>🌍</div>
            <h1 style={{ fontFamily:"'Playfair Display',serif", fontSize:28, color:"#c9a84c", marginBottom:8, fontWeight:700 }}>
              World Travel Tracker
            </h1>
            <p style={{ color:"#8a9bb5", fontSize:14, marginBottom:36, lineHeight:1.6 }}>
              Registre cada destino da sua jornada ao redor do mundo
            </p>
            <button
              onClick={signInWithGoogle}
              style={{ ...btnGold, width:"100%", padding:"14px 20px", fontSize:15, display:"flex", alignItems:"center", justifyContent:"center", gap:12, borderRadius:12 }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#0b1220"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#0b1220"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#0b1220"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#0b1220"/>
              </svg>
              Entrar com Google
            </button>
            <p style={{ color:"#4a5568", fontSize:12, marginTop:20 }}>
              Suas viagens ficam salvas na nuvem e sincronizadas em todos os dispositivos
            </p>
          </div>
        </div>
      </>
    );
  }

  // ── App principal ──
  return (
    <>
      <style>{G}</style>
      <div style={{ minHeight:"100vh", background:"linear-gradient(135deg,#0b1220 0%,#0f1e38 60%,#0d1a2e 100%)", paddingBottom:60 }}>
        {/* Header */}
        <div style={{ textAlign:"center", padding:"40px 24px 20px", borderBottom:"1px solid #c9a84c22" }}>
          <div style={{ position:"relative" }}>
            <div style={{ fontSize:32, marginBottom:4 }}>🌍</div>
            <h1 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(22px,5vw,36px)", color:"#c9a84c", letterSpacing:"0.04em", fontWeight:700 }}>World Travel Tracker</h1>
            <p style={{ color:"#8a9bb5", fontSize:13, marginTop:4, letterSpacing:"0.1em", textTransform:"uppercase" }}>Registre cada destino da sua jornada</p>

            {/* Auth bar */}
            <div style={{ position:"absolute", top:0, right:0, display:"flex", alignItems:"center", gap:10 }}>
              <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                {user.user_metadata?.avatar_url && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={user.user_metadata.avatar_url} alt="" width={28} height={28} style={{ borderRadius:"50%", border:"1px solid #c9a84c44" }} />
                )}
                <span style={{ color:"#8a9bb5", fontSize:12, display:"none", maxWidth:140, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }} className="sm-show">
                  {user.user_metadata?.full_name || user.email}
                </span>
              </div>
              <button onClick={signOut} style={{ ...btnGhost, padding:"7px 14px", fontSize:12 }}>Sair</button>
            </div>

            {success && (
              <div style={{ marginTop:12, display:"inline-block", background:"#1a3a1a", border:"1px solid #4caf5055", borderRadius:10, padding:"8px 20px", color:"#81c784", fontSize:13 }}>
                ✅ {saving ? "Salvando…" : "Viagem salva!"}
              </div>
            )}
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display:"flex", justifyContent:"center", gap:6, padding:"16px 16px 0", flexWrap:"wrap" }}>
          {TABS.map(([k,label]) => (
            <button key={k} onClick={() => { if(k!=="add") setEditTrip(null); setTab(k); }} style={{
              background: tab===k ? "linear-gradient(135deg,#c9a84c,#e8cc7a)" : "transparent",
              color: tab===k ? "#0b1220" : "#8a9bb5",
              border: tab===k ? "none" : "1px solid #1e3050",
              borderRadius:30, padding:"9px 20px", fontFamily:"'DM Sans',sans-serif",
              fontWeight:600, fontSize:13, cursor:"pointer", transition:"all .2s"
            }}>{label}</button>
          ))}
        </div>

        <div style={{ maxWidth:800, margin:"28px auto 0", padding:"0 16px" }}>
          {tab==="add" && <TripForm initial={editTrip} onSave={handleSave} onCancel={() => { setEditTrip(null); setTab("dash"); }} />}
          {tab==="dash" && <Dashboard trips={trips} allCodes={allCountryCodes} totals={{totalCountries,totalCities,totalDays}} onEdit={t=>{setEditTrip(t);setTab("add");}} onDelete={removeTrip} />}
          {tab==="timeline" && <Timeline trips={trips} />}
          {tab==="report" && <Report trips={trips} />}
        </div>
      </div>
    </>
  );
}

// ─── FORMULÁRIO DE VIAGEM ─────────────────────────────────────────
function TripForm({ initial, onSave, onCancel }: { initial: Trip | null; onSave: (t: Trip) => void; onCancel: () => void }) {
  const [name, setName] = useState(initial?.name || "");
  const [countries, setCountries] = useState<TripCountry[]>(initial?.countries || []);

  const addCountry = () => setCountries(prev => [...prev, { id:uid(), country:"", code:"", dateIn:"", dateOut:"", cities:[] }]);
  const removeCountry = (id: string) => setCountries(prev => prev.filter(c => c.id!==id));
  const updateCountry = (id: string, patch: Partial<TripCountry>) => setCountries(prev => prev.map(c => c.id===id ? {...c,...patch} : c));

  const valid = name.trim() && countries.length>0 && countries.every(c => c.code && c.dateIn && c.dateOut && c.dateOut>=c.dateIn && c.cities.length>0);

  const handleSave = () => {
    if (!valid) return;
    onSave({ id: initial?.id || uid(), name: name.trim(), countries });
  };

  return (
    <div style={{ background:"#0f1a2e", borderRadius:20, padding:28, border:"1px solid #1e3050", boxShadow:"0 8px 40px #00000055" }}>
      <h2 style={{ fontFamily:"'Playfair Display',serif", color:"#c9a84c", fontSize:20, marginBottom:24 }}>
        {initial ? "Editar Viagem" : "Nova Viagem"}
      </h2>

      {/* Nome da viagem */}
      <div style={{ marginBottom:24 }}>
        <label style={lbl}>Nome da viagem</label>
        <input value={name} onChange={e=>setName(e.target.value)} placeholder='Ex: Europa 2024, Mochilão Ásia...' style={inp} />
      </div>

      {/* Países */}
      <div style={{ marginBottom:16 }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:14 }}>
          <label style={{...lbl, marginBottom:0}}>Países visitados</label>
          <button onClick={addCountry} style={{...btnGhost, padding:"7px 14px", fontSize:12}}>+ Adicionar país</button>
        </div>

        {countries.length===0 && (
          <div style={{ textAlign:"center", padding:"28px 16px", color:"#8a9bb5", fontSize:13, border:"1px dashed #1e3050", borderRadius:12 }}>
            Clique em "+ Adicionar país" para começar
          </div>
        )}

        <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
          {countries.map((c,i) => (
            <CountryBlock key={c.id} country={c} index={i}
              onChange={patch => updateCountry(c.id, patch)}
              onRemove={() => removeCountry(c.id)} />
          ))}
        </div>
      </div>

      <div style={{ display:"flex", gap:10, marginTop:24 }}>
        <button onClick={handleSave} disabled={!valid} style={{...btnGold, flex:1, opacity:valid?1:0.4, fontSize:14, padding:"13px"}}>
          {initial ? "Salvar Alterações" : "Salvar Viagem"}
        </button>
        {initial && <button onClick={onCancel} style={btnGhost}>Cancelar</button>}
      </div>
    </div>
  );
}

// ─── BLOCO DE PAÍS NO FORMULÁRIO ──────────────────────────────────
function CountryBlock({ country, index, onChange, onRemove }: {
  country: TripCountry; index: number;
  onChange: (p: Partial<TripCountry>) => void;
  onRemove: () => void;
}) {
  const [suggestions, setSuggestions] = useState<{name:string;code:string}[]>([]);
  const [cityInput, setCityInput] = useState("");
  const [expanded, setExpanded] = useState(true);
  const [citySuggestions, setCitySuggestions] = useState<string[]>([]);
  const [showCitySugg, setShowCitySugg] = useState(false);

  // Fetch cities from Supabase when country changes
  useEffect(() => {
    if (!country.code) { setCitySuggestions([]); return; }
    supabase.from("cities").select("name").eq("country_code", country.code).order("name")
      .then(({ data }) => setCitySuggestions(data?.map((c: any) => c.name) || []));
  }, [country.code]);

  const handleCountryInput = (v: string) => {
    onChange({ country:v, code:"" });
    setSuggestions(v.length<2 ? [] : COUNTRIES.filter(c=>c.name.toLowerCase().includes(v.toLowerCase())).slice(0,6));
  };
  const selectCountry = (c: {name:string;code:string}) => { onChange({ country:c.name, code:c.code }); setSuggestions([]); };

  const filteredCities = cityInput.length >= 1
    ? citySuggestions.filter(c => c.toLowerCase().includes(cityInput.toLowerCase())).slice(0, 8)
    : [];

  const addCity = (name?: string) => {
    const t = (name || cityInput).trim();
    if (!t) return;
    onChange({ cities:[...country.cities, { id:uid(), name:t, dateIn:"", dateOut:"" }] });
    setCityInput("");
    setShowCitySugg(false);
  };
  const removeCity = (id: string) => onChange({ cities: country.cities.filter(c=>c.id!==id) });
  const updateCity = (id: string, patch: Partial<City>) => onChange({ cities: country.cities.map(c=>c.id===id?{...c,...patch}:c) });

  return (
    <div style={{ background:"#0b1728", borderRadius:14, border:"1px solid #1e3050", overflow:"hidden" }}>
      {/* Header do país */}
      <div style={{ display:"flex", alignItems:"center", gap:10, padding:"12px 16px", cursor:"pointer", borderBottom: expanded?"1px solid #1e3050":"none" }} onClick={()=>setExpanded(e=>!e)}>
        <span style={{ fontSize:22 }}>{country.code ? flag(country.code) : "🏳️"}</span>
        <span style={{ fontFamily:"'Playfair Display',serif", fontSize:15, color: country.country?"#e8e0cc":"#8a9bb5", flex:1 }}>
          {country.country || `País ${index+1}`}
        </span>
        {country.dateIn && <span style={{ fontSize:11, color:"#8a9bb5" }}>{fmtDate(country.dateIn)} – {fmtDate(country.dateOut)}</span>}
        <span style={{ color:"#8a9bb5", fontSize:12 }}>{expanded?"▲":"▼"}</span>
        <span onClick={e=>{e.stopPropagation();onRemove();}} style={{ color:"#ff6b6b55", cursor:"pointer", fontSize:16, padding:"0 4px" }}>×</span>
      </div>

      {expanded && (
        <div style={{ padding:16 }}>
          {/* Autocomplete país */}
          <div style={{ position:"relative", marginBottom:14 }}>
            <label style={lbl}>País</label>
            <input value={country.country} onChange={e=>handleCountryInput(e.target.value)}
              placeholder="Digite o nome do país..." style={inp}
              onBlur={()=>setTimeout(()=>setSuggestions([]),200)} />
            {suggestions.length>0 && (
              <div style={{ position:"absolute", top:"100%", left:0, right:0, background:"#0d1e35", border:"1px solid #1e3050", borderRadius:10, zIndex:99, overflow:"hidden", boxShadow:"0 8px 24px #00000066", marginTop:3 }}>
                {suggestions.map(c=>(
                  <div key={c.code} onClick={()=>selectCountry(c)} style={{ padding:"10px 14px", cursor:"pointer", display:"flex", alignItems:"center", gap:10, fontSize:13 }}
                    onMouseEnter={e=>e.currentTarget.style.background="#1a2e4a"}
                    onMouseLeave={e=>e.currentTarget.style.background="transparent"}>
                    <span style={{fontSize:18}}>{flag(c.code)}</span>
                    <span style={{color:"#e8e0cc"}}>{c.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Datas do país (obrigatórias) */}
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, marginBottom:16 }}>
            <div>
              <label style={lbl}>Entrada no país *</label>
              <input type="date" value={country.dateIn} onChange={e=>onChange({dateIn:e.target.value})} style={inp} />
            </div>
            <div>
              <label style={lbl}>Saída do país *</label>
              <input type="date" value={country.dateOut} onChange={e=>onChange({dateOut:e.target.value})} style={inp} />
            </div>
          </div>

          {/* Cidades */}
          <label style={lbl}>Cidades visitadas *</label>
          <div style={{ position:"relative", marginBottom:10 }}>
            <div style={{ display:"flex", gap:8 }}>
              <input value={cityInput}
                onChange={e=>{ setCityInput(e.target.value); setShowCitySugg(true); }}
                onKeyDown={e=>e.key==="Enter"&&addCity()}
                onFocus={()=>setShowCitySugg(true)}
                onBlur={()=>setTimeout(()=>setShowCitySugg(false),200)}
                placeholder={country.code ? "Digite ou escolha uma cidade..." : "Selecione um país primeiro..."}
                style={{...inp,flex:1}}
                disabled={!country.code} />
              <button onClick={()=>addCity()} style={{...btnGhost, padding:"0 16px"}}>+</button>
            </div>
            {/* City suggestions dropdown */}
            {showCitySugg && filteredCities.length > 0 && (
              <div style={{ position:"absolute", top:"100%", left:0, right:40, background:"#0d1e35", border:"1px solid #1e3050", borderRadius:10, zIndex:99, overflow:"hidden", boxShadow:"0 8px 24px #00000066", marginTop:3, maxHeight:200, overflowY:"auto" }}>
                {filteredCities.map(city=>(
                  <div key={city} onMouseDown={()=>addCity(city)}
                    style={{ padding:"9px 14px", cursor:"pointer", fontSize:13, color:"#e8e0cc", display:"flex", alignItems:"center", gap:8 }}
                    onMouseEnter={e=>e.currentTarget.style.background="#1a2e4a"}
                    onMouseLeave={e=>e.currentTarget.style.background="transparent"}>
                    <span style={{color:"#c9a84c",fontSize:12}}>📍</span>{city}
                  </div>
                ))}
              </div>
            )}
          </div>

          {country.cities.length>0 && (
            <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
              {country.cities.map(city => (
                <CityRow key={city.id} city={city}
                  onChange={patch=>updateCity(city.id,patch)}
                  onRemove={()=>removeCity(city.id)} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ─── LINHA DE CIDADE ──────────────────────────────────────────────
function CityRow({ city, onChange, onRemove }: { city: City; onChange: (p: Partial<City>) => void; onRemove: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ background:"#0f1a2e", borderRadius:10, border:"1px solid #1e3050" }}>
      <div style={{ display:"flex", alignItems:"center", gap:10, padding:"9px 12px" }}>
        <span style={{ fontSize:13, color:"#c9a84c", flex:1 }}>📍 {city.name}</span>
        <button onClick={()=>setOpen(o=>!o)} style={{ background:"none", border:"none", color:"#8a9bb5", cursor:"pointer", fontSize:11, padding:"2px 6px" }}>
          {open ? "▲ datas" : "▼ datas (opcional)"}
        </button>
        <span onClick={onRemove} style={{ color:"#ff6b6b55", cursor:"pointer", fontSize:15 }}>×</span>
      </div>
      {open && (
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, padding:"0 12px 12px" }}>
          <div>
            <label style={lbl}>Chegada</label>
            <input type="date" value={city.dateIn} onChange={e=>onChange({dateIn:e.target.value})} style={{...inp,fontSize:13}} />
          </div>
          <div>
            <label style={lbl}>Partida</label>
            <input type="date" value={city.dateOut} onChange={e=>onChange({dateOut:e.target.value})} style={{...inp,fontSize:13}} />
          </div>
        </div>
      )}
    </div>
  );
}

// ─── DASHBOARD ────────────────────────────────────────────────────
function Dashboard({ trips, allCodes, totals, onEdit, onDelete }: {
  trips: Trip[]; allCodes: Set<string>;
  totals: { totalCountries: number; totalCities: number; totalDays: number };
  onEdit: (t: Trip) => void; onDelete: (id: string) => void;
}) {
  const { totalCountries, totalCities, totalDays } = totals;

  return (
    <div>
      {/* Counters */}
      <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:14, marginBottom:32 }}>
        {([["🌍", totalCountries,"Países"],["🏙️",totalCities,"Cidades"],["📅",totalDays,"Dias"]] as [string,number,string][]).map(([icon,val,label])=>(
          <div key={label} style={{ background:"linear-gradient(135deg,#0f1a2e,#1a2e4a)", borderRadius:16, padding:"24px 12px", textAlign:"center", border:"1px solid #c9a84c22" }}>
            <div style={{fontSize:24,marginBottom:6}}>{icon}</div>
            <div style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(26px,5vw,40px)", color:"#c9a84c", fontWeight:700, lineHeight:1 }}>{val}</div>
            <div style={{ color:"#8a9bb5", fontSize:12, marginTop:5, textTransform:"uppercase", letterSpacing:"0.1em" }}>{label}</div>
          </div>
        ))}
      </div>

      {/* Por continente */}
      {CONTINENT_ORDER.map(cont => {
        const contCountries = COUNTRIES.filter(c => CONTINENT_MAP[cont as keyof typeof CONTINENT_MAP]?.includes(c.code));
        const visited = contCountries.filter(c => allCodes.has(c.code));
        return (
          <div key={cont} style={{ marginBottom:28 }}>
            <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:14 }}>
              <span style={{fontSize:18}}>{CONTINENT_ICONS[cont as keyof typeof CONTINENT_ICONS]}</span>
              <span style={{ fontFamily:"'Playfair Display',serif", color:"#c9a84c", fontSize:16, fontWeight:600 }}>{cont}</span>
              <div style={{ background:"#c9a84c22", borderRadius:10, padding:"3px 12px", display:"flex", alignItems:"center", gap:4 }}>
                <span style={{ color:"#c9a84c", fontWeight:700, fontSize:14 }}>{visited.length}</span>
                <span style={{ color:"#8a9bb5", fontSize:13 }}>/ {contCountries.length}</span>
              </div>
              <div style={{ flex:1, height:1, background:"#c9a84c22", marginLeft:4 }} />
            </div>
            <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
              {contCountries.sort((a,b)=>a.name.localeCompare(b.name)).map(c => {
                const isVisited = allCodes.has(c.code);
                const visitDetails = isVisited ? trips.flatMap(t => t.countries.filter(ct=>ct.code===c.code)) : [];
                return (
                  <div key={c.code} title={isVisited ? visitDetails.map(v=>`${fmtDate(v.dateIn)}–${fmtDate(v.dateOut)}`).join(", ") : c.name}
                    style={{
                      display:"flex", alignItems:"center", gap:6,
                      padding:"6px 12px", borderRadius:20, fontSize:13,
                      border: isVisited ? "1px solid #c9a84c88" : "1px solid #1e3050",
                      background: isVisited ? "linear-gradient(135deg,#c9a84c22,#c9a84c11)" : "#0b1728",
                      color: isVisited ? "#e8cc7a" : "#4a5568",
                      fontWeight: isVisited ? 600 : 400,
                      transition:"all .2s",
                    }}>
                    <span style={{fontSize:16}}>{flag(c.code)}</span>
                    <span>{c.name}</span>
                    {isVisited && <span style={{fontSize:10,color:"#c9a84c"}}>✓</span>}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}

      {/* Lista de viagens */}
      {trips.length>0 && (
        <div style={{ marginTop:32 }}>
          <h3 style={{ fontFamily:"'Playfair Display',serif", color:"#c9a84c", fontSize:18, marginBottom:16 }}>Suas Viagens</h3>
          <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
            {[...trips].sort((a,b)=>{
              const aDate = a.countries[0]?.dateIn||"";
              const bDate = b.countries[0]?.dateIn||"";
              return bDate.localeCompare(aDate);
            }).map(t => (
              <div key={t.id} style={{ background:"#0f1a2e", borderRadius:14, padding:"18px 20px", border:"1px solid #1e3050" }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:10 }}>
                  <div>
                    <div style={{ fontFamily:"'Playfair Display',serif", fontSize:16, color:"#e8e0cc", fontWeight:600 }}>{t.name}</div>
                    <div style={{ color:"#8a9bb5", fontSize:12, marginTop:3 }}>{t.countries.length} país(es) · {t.countries.flatMap(c=>c.cities).length} cidades</div>
                  </div>
                  <div style={{display:"flex",gap:8}}>
                    <IconBtn title="Editar" onClick={()=>onEdit(t)}>✏️</IconBtn>
                    <IconBtn title="Excluir" onClick={()=>onDelete(t.id)}>🗑️</IconBtn>
                  </div>
                </div>
                <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
                  {t.countries.map(c=>(
                    <span key={c.id} style={{ background:"#1a2e4a", borderRadius:12, padding:"4px 12px", fontSize:12, color:"#a0b4cc", display:"flex", alignItems:"center", gap:6 }}>
                      <span>{flag(c.code)}</span><span>{c.country}</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {trips.length===0 && <Empty msg="Nenhuma viagem ainda. Adicione sua primeira aventura!" />}
    </div>
  );
}

// ─── LINHA DO TEMPO ───────────────────────────────────────────────
function Timeline({ trips }: { trips: Trip[] }) {
  const sorted = [...trips].sort((a,b) => {
    const aDate = a.countries[0]?.dateIn||"";
    const bDate = b.countries[0]?.dateIn||"";
    return aDate.localeCompare(bDate);
  });

  return (
    <div>
      <h2 style={{ fontFamily:"'Playfair Display',serif", color:"#c9a84c", fontSize:22, marginBottom:28 }}>Linha do Tempo</h2>
      {sorted.length===0 ? <Empty msg="Nenhuma viagem para exibir ainda." /> : (
        <div style={{ position:"relative" }}>
          <div style={{ position:"absolute", left:22, top:0, bottom:0, width:2, background:"linear-gradient(to bottom,#c9a84c44,#c9a84c22,transparent)", borderRadius:1 }} />
          {sorted.map(t => {
            const allDates = t.countries.flatMap(c=>[c.dateIn,c.dateOut]).filter(Boolean).sort();
            const start = allDates[0], end = allDates[allDates.length-1];
            const totalDays = t.countries.reduce((s,c)=>s+daysBetween(c.dateIn,c.dateOut),0);
            return (
              <div key={t.id} style={{ display:"flex", alignItems:"flex-start", paddingBottom:28 }}>
                <div style={{ width:46, flexShrink:0, display:"flex", justifyContent:"center", paddingTop:18 }}>
                  <div style={{ width:14, height:14, borderRadius:"50%", background:"#c9a84c", border:"3px solid #0b1220", boxShadow:"0 0 10px #c9a84c66", zIndex:1 }} />
                </div>
                <div style={{ flex:1, background:"linear-gradient(135deg,#0f1a2e,#111d32)", borderRadius:16, padding:"18px 20px", border:"1px solid #1e3050", marginLeft:8 }}>
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:14 }}>
                    <div>
                      <div style={{ fontFamily:"'Playfair Display',serif", fontSize:17, color:"#e8e0cc", fontWeight:600 }}>{t.name}</div>
                      <div style={{ color:"#c9a84c", fontSize:12, marginTop:3 }}>{fmtDate(start)} – {fmtDate(end)}</div>
                    </div>
                    <div style={{ background:"#1a2e4a", borderRadius:10, padding:"4px 12px", fontSize:12, color:"#8a9bb5", whiteSpace:"nowrap" }}>{totalDays} dias</div>
                  </div>
                  <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
                    {t.countries.map((c,i) => (
                      <div key={c.id} style={{ display:"flex", gap:12, alignItems:"flex-start" }}>
                        <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:2, paddingTop:3 }}>
                          {i>0 && <div style={{width:1,height:8,background:"#1e3050"}}/>}
                          <span style={{fontSize:20}}>{flag(c.code)}</span>
                        </div>
                        <div style={{ flex:1 }}>
                          <div style={{ display:"flex", gap:8, alignItems:"center", marginBottom:6 }}>
                            <span style={{ fontSize:13, fontWeight:600, color:"#e8e0cc" }}>{c.country}</span>
                            <span style={{ fontSize:11, color:"#8a9bb5" }}>{fmtDate(c.dateIn)} – {fmtDate(c.dateOut)} · {daysBetween(c.dateIn,c.dateOut)}d</span>
                          </div>
                          <div style={{ display:"flex", flexWrap:"wrap", gap:5 }}>
                            {c.cities.map(city=>(
                              <span key={city.id} style={{ background:"#c9a84c18", border:"1px solid #c9a84c33", color:"#c9a84c", borderRadius:10, padding:"2px 10px", fontSize:11 }}>
                                {city.name}{city.dateIn ? ` (${fmtDate(city.dateIn)})` : ""}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ─── RELATÓRIO ────────────────────────────────────────────────────
function Report({ trips }: { trips: Trip[] }) {
  const rows = [...trips].sort((a,b)=>(a.countries[0]?.dateIn||"").localeCompare(b.countries[0]?.dateIn||""))
    .flatMap(t => t.countries.flatMap(c => c.cities.map(city => ({
      trip: t.name, country: c.country, code: c.code,
      city: city.name, dateIn: c.dateIn, dateOut: c.dateOut,
      cityDateIn: city.dateIn, cityDateOut: city.dateOut,
      days: daysBetween(c.dateIn,c.dateOut)
    }))));

  const downloadCSV = () => {
    const header = "Viagem,País,Cidade,Entrada País,Saída País,Entrada Cidade,Saída Cidade,Dias\n";
    const body = rows.map(r => `${r.trip},${r.country},${r.city},${r.dateIn},${r.dateOut},${r.cityDateIn||""},${r.cityDateOut||""},${r.days}`).join("\n");
    const b64 = btoa(unescape(encodeURIComponent("\uFEFF"+header+body)));
    const a = document.createElement("a"); a.href="data:text/csv;charset=utf-8;base64,"+b64;
    a.download="world_travel_tracker.csv"; document.body.appendChild(a); a.click(); document.body.removeChild(a);
  };

  return (
    <div>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:24, flexWrap:"wrap", gap:10 }}>
        <h2 style={{ fontFamily:"'Playfair Display',serif", color:"#c9a84c", fontSize:22 }}>Relatório</h2>
        {rows.length>0 && <button onClick={downloadCSV} style={{...btnGold, fontSize:13, padding:"9px 18px"}}>⬇️ Baixar CSV</button>}
      </div>
      {rows.length===0 ? <Empty msg="Nenhuma viagem para gerar relatório." /> : (
        <div style={{ background:"#0f1a2e", borderRadius:16, border:"1px solid #1e3050", overflow:"hidden" }}>
          <div style={{ overflowX:"auto" }}>
            <table style={{ width:"100%", borderCollapse:"collapse", fontSize:13 }}>
              <thead>
                <tr style={{ background:"#1a2e4a", borderBottom:"2px solid #c9a84c44" }}>
                  {["Viagem","País","Cidade","Entrada","Saída","Dias"].map(h=>(
                    <th key={h} style={{ padding:"12px 14px", textAlign:"left", color:"#c9a84c", fontSize:11, letterSpacing:"0.08em", textTransform:"uppercase", whiteSpace:"nowrap" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((r,i)=>(
                  <tr key={i} style={{ borderBottom:"1px solid #1e3050", background:i%2===0?"transparent":"#0b1526" }}
                    onMouseEnter={e=>(e.currentTarget as HTMLTableRowElement).style.background="#1a2e4a44"}
                    onMouseLeave={e=>(e.currentTarget as HTMLTableRowElement).style.background=i%2===0?"transparent":"#0b1526"}>
                    <td style={{ padding:"11px 14px", color:"#8a9bb5", fontSize:12 }}>{r.trip}</td>
                    <td style={{ padding:"11px 14px", whiteSpace:"nowrap" }}><span style={{fontSize:16,marginRight:6}}>{flag(r.code)}</span><span style={{fontWeight:600,color:"#e8e0cc"}}>{r.country}</span></td>
                    <td style={{ padding:"11px 14px" }}><span style={{ background:"#c9a84c18", border:"1px solid #c9a84c33", color:"#c9a84c", borderRadius:8, padding:"2px 10px" }}>{r.city}</span></td>
                    <td style={{ padding:"11px 14px", color:"#8a9bb5", whiteSpace:"nowrap" }}>{r.dateIn}</td>
                    <td style={{ padding:"11px 14px", color:"#8a9bb5", whiteSpace:"nowrap" }}>{r.dateOut}</td>
                    <td style={{ padding:"11px 14px", color:"#a0b4cc", fontWeight:600 }}>{r.days}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ padding:"12px 14px", borderTop:"1px solid #1e3050", color:"#8a9bb5", fontSize:12, display:"flex", gap:20 }}>
            <span>Linhas: <strong style={{color:"#c9a84c"}}>{rows.length}</strong></span>
            <span>Países únicos: <strong style={{color:"#c9a84c"}}>{new Set(rows.map(r=>r.code)).size}</strong></span>
            <span>Viagens: <strong style={{color:"#c9a84c"}}>{trips.length}</strong></span>
          </div>
        </div>
      )}
    </div>
  );
}

function IconBtn({ onClick, children, title }: { onClick: () => void; children: React.ReactNode; title: string }) {
  return (
    <button title={title} onClick={onClick} style={{ background:"#1a2e4a", border:"1px solid #1e3050", borderRadius:8, width:32, height:32, cursor:"pointer", fontSize:13, display:"flex", alignItems:"center", justifyContent:"center" }}
      onMouseEnter={e=>(e.currentTarget as HTMLButtonElement).style.background="#243d5a"}
      onMouseLeave={e=>(e.currentTarget as HTMLButtonElement).style.background="#1a2e4a"}>
      {children}
    </button>
  );
}

function Empty({ msg }: { msg: string }) {
  return (
    <div style={{ textAlign:"center", padding:"50px 24px", color:"#8a9bb5", fontSize:14 }}>
      <div style={{fontSize:36,marginBottom:12}}>🗺️</div>{msg}
    </div>
  );
}
