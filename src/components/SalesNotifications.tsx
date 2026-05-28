import { useEffect, useState } from "react";

type Notif = { name: string; city: string; plan: string; minutes: number };

const NAMES = [
  "André",
  "Carlos",
  "Roberto",
  "Marcelo",
  "Rodrigo",
  "José",
  "Fernando",
  "Paulo",
  "Lucas",
  "Anderson",
  "Diego",
  "Wesley",
  "Bruno",
  "Felipe",
  "Thiago",
  "Ricardo",
  "Eduardo",
  "Matheus",
];
const CITIES = [
  "São Paulo - SP",
  "Rio de Janeiro - RJ",
  "Curitiba - PR",
  "Belo Horizonte - MG",
  "Porto Alegre - RS",
  "Salvador - BA",
  "Fortaleza - CE",
  "Recife - PE",
  "Brasília - DF",
  "Goiânia - GO",
  "Manaus - AM",
  "Florianópolis - SC",
  "Campinas - SP",
  "Natal - RN",
  "Vitória - ES",
];
const PLANS = ["Plano Completo", "Plano Básico", "Plano Completo", "Plano Completo"];

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function makeNotif(): Notif {
  return {
    name: pick(NAMES),
    city: pick(CITIES),
    plan: pick(PLANS),
    minutes: Math.floor(Math.random() * 28) + 1,
  };
}

export default function SalesNotifications() {
  const [notif, setNotif] = useState<Notif | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const cycle = (firstDelay: number) => {
      const t1 = setTimeout(() => {
        if (cancelled) return;
        setNotif(makeNotif());
        setVisible(true);
        const t2 = setTimeout(() => {
          if (cancelled) return;
          setVisible(false);
          cycle(2000);
        }, 6000);
        timers.push(t2);
      }, firstDelay);
      timers.push(t1);
    };
    const timers: ReturnType<typeof setTimeout>[] = [];
    cycle(3500);
    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        left: "16px",
        bottom: "16px",
        zIndex: 9999,
        maxWidth: "320px",
        transform: visible ? "translateY(0)" : "translateY(140%)",
        opacity: visible ? 1 : 0,
        transition: "transform .45s cubic-bezier(.2,.8,.2,1), opacity .35s",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      {notif && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            background: "#052E16",
            border: "1px solid rgba(34,197,94,.35)",
            borderRadius: "16px",
            padding: "12px 16px 12px 12px",
            boxShadow: "0 18px 50px rgba(0,0,0,.35), 0 0 0 1px rgba(255,255,255,.04)",
            fontFamily: "'Outfit', system-ui, sans-serif",
            color: "#fff",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "12px",
              background: "linear-gradient(135deg,#22C55E,#15803D)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#FFFFFF">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </div>
          <div style={{ flex: 1, minWidth: 0, lineHeight: 1.3 }}>
            <p style={{ fontSize: "13px", fontWeight: 700, margin: 0 }}>
              <span style={{ color: "#4ADE80" }}>{notif.name}</span> comprou o{" "}
              <span style={{ fontWeight: 800 }}>{notif.plan}</span>
            </p>
            <p
              style={{
                fontSize: "11px",
                color: "rgba(255,255,255,.55)",
                margin: "3px 0 0",
                fontWeight: 500,
              }}
            >
              {notif.city} · há {notif.minutes} {notif.minutes === 1 ? "minuto" : "minutos"}
            </p>
          </div>
          <button
            aria-label="Fechar"
            onClick={() => setVisible(false)}
            style={{
              background: "transparent",
              border: "none",
              color: "rgba(255,255,255,.4)",
              cursor: "pointer",
              padding: 0,
              fontSize: "16px",
              lineHeight: 1,
            }}
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
}
