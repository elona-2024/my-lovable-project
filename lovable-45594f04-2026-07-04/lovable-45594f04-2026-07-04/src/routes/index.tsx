import { createFileRoute } from "@tanstack/react-router";
import {
  LayoutDashboard, TrendingUp, Users, UserPlus, PieChart as PieIcon, DollarSign,
  FileText, UsersRound, Plug, Settings, Search, Bell, Sparkles, Calendar,
  ChevronDown, Plus, Download, FileSpreadsheet, UserRoundPlus, Wand2,
  ArrowUpRight, ArrowDownRight, MoreHorizontal, CheckCircle2, CreditCard,
  Rocket, ShieldCheck, Zap, Target, Globe2, ChevronRight, Filter,
} from "lucide-react";
import {
  ResponsiveContainer, LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from "recharts";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sales Analytics — Northwind" },
      { name: "description", content: "Premium B2B SaaS sales analytics dashboard." },
    ],
  }),
  component: Dashboard,
});

/* ---------- data ---------- */

const revenueGrowth = [
  { m: "Jan", mrr: 182, arr: 2184, new: 42 },
  { m: "Feb", mrr: 198, arr: 2376, new: 51 },
  { m: "Mar", mrr: 214, arr: 2568, new: 48 },
  { m: "Apr", mrr: 231, arr: 2772, new: 63 },
  { m: "May", mrr: 249, arr: 2988, new: 71 },
  { m: "Jun", mrr: 268, arr: 3216, new: 66 },
  { m: "Jul", mrr: 289, arr: 3468, new: 82 },
  { m: "Aug", mrr: 312, arr: 3744, new: 91 },
  { m: "Sep", mrr: 328, arr: 3936, new: 88 },
  { m: "Oct", mrr: 347, arr: 4164, new: 104 },
  { m: "Nov", mrr: 371, arr: 4452, new: 118 },
  { m: "Dec", mrr: 394, arr: 4728, new: 129 },
];

const monthlySales = [
  { m: "Jan", won: 128, lost: 34 }, { m: "Feb", won: 142, lost: 38 },
  { m: "Mar", won: 156, lost: 41 }, { m: "Apr", won: 171, lost: 36 },
  { m: "May", won: 189, lost: 44 }, { m: "Jun", won: 203, lost: 39 },
  { m: "Jul", won: 224, lost: 47 }, { m: "Aug", won: 246, lost: 51 },
  { m: "Sep", won: 261, lost: 43 }, { m: "Oct", won: 284, lost: 48 },
  { m: "Nov", won: 312, lost: 52 }, { m: "Dec", won: 341, lost: 46 },
];

const plans = [
  { name: "Starter", value: 1420, color: "var(--chart-1)" },
  { name: "Growth", value: 2180, color: "var(--chart-2)" },
  { name: "Business", value: 1560, color: "var(--chart-4)" },
  { name: "Enterprise", value: 640, color: "var(--chart-3)" },
];

const funnel = [
  { stage: "Lead", value: 12480, pct: 100 },
  { stage: "Qualified", value: 6320, pct: 51 },
  { stage: "Demo", value: 3180, pct: 25 },
  { stage: "Trial", value: 1740, pct: 14 },
  { stage: "Paid", value: 892, pct: 7.1 },
  { stage: "Enterprise", value: 214, pct: 1.7 },
];

const forecast = [
  { m: "Jul", actual: 289, forecast: null },
  { m: "Aug", actual: 312, forecast: null },
  { m: "Sep", actual: 328, forecast: null },
  { m: "Oct", actual: 347, forecast: null },
  { m: "Nov", actual: 371, forecast: null },
  { m: "Dec", actual: 394, forecast: 394 },
  { m: "Jan", actual: null, forecast: 421 },
  { m: "Feb", actual: null, forecast: 449 },
  { m: "Mar", actual: null, forecast: 481 },
  { m: "Apr", actual: null, forecast: 518 },
];

const pipeline = [
  { name: "Prospect", count: 84, value: "$1.24M", conv: "62%", color: "bg-slate-400" },
  { name: "Contacted", count: 52, value: "$984K", conv: "48%", color: "bg-blue-500" },
  { name: "Demo", count: 31, value: "$742K", conv: "39%", color: "bg-violet-500" },
  { name: "Negotiation", count: 18, value: "$612K", conv: "58%", color: "bg-amber-500" },
  { name: "Closed Won", count: 12, value: "$428K", conv: "100%", color: "bg-emerald-500" },
];

const dealCards: Record<string, { company: string; owner: string; value: string; days: number }[]> = {
  Prospect: [
    { company: "Northline Robotics", owner: "AR", value: "$28K", days: 2 },
    { company: "Kappa Health", owner: "MS", value: "$16K", days: 5 },
    { company: "Trellis Bio", owner: "JD", value: "$42K", days: 1 },
  ],
  Contacted: [
    { company: "Halcyon Logistics", owner: "SL", value: "$34K", days: 3 },
    { company: "Vellum Studios", owner: "AR", value: "$22K", days: 7 },
  ],
  Demo: [
    { company: "Nimbus Financial", owner: "KP", value: "$68K", days: 2 },
    { company: "Orbit Aerospace", owner: "JD", value: "$95K", days: 4 },
  ],
  Negotiation: [
    { company: "Meridian Health", owner: "MS", value: "$124K", days: 6 },
    { company: "Cobalt Semiconductor", owner: "SL", value: "$182K", days: 3 },
  ],
  "Closed Won": [
    { company: "Ridgeway Capital", owner: "AR", value: "$96K", days: 0 },
    { company: "Fjord & Field", owner: "KP", value: "$52K", days: 1 },
  ],
};

const customers = [
  { name: "Amelia Chen", initials: "AC", company: "Ridgeway Capital", plan: "Enterprise", mrr: "$8,400", arr: "$100,800", country: "🇺🇸 US", owner: "AR", renewal: "Mar 12, 2026", status: "Active" },
  { name: "Rasmus Lindqvist", initials: "RL", company: "Fjord & Field", plan: "Business", mrr: "$3,200", arr: "$38,400", country: "🇸🇪 SE", owner: "KP", renewal: "Feb 04, 2026", status: "Active" },
  { name: "Priya Anand", initials: "PA", company: "Meridian Health", plan: "Enterprise", mrr: "$12,600", arr: "$151,200", country: "🇮🇳 IN", owner: "MS", renewal: "Apr 22, 2026", status: "Trial" },
  { name: "Diego Alvarez", initials: "DA", company: "Cobalt Semiconductor", plan: "Business", mrr: "$4,850", arr: "$58,200", country: "🇪🇸 ES", owner: "SL", renewal: "Jan 18, 2026", status: "Pending" },
  { name: "Yuki Tanaka", initials: "YT", company: "Orbit Aerospace", plan: "Growth", mrr: "$1,980", arr: "$23,760", country: "🇯🇵 JP", owner: "JD", renewal: "Mar 30, 2026", status: "Active" },
  { name: "Hannah Whitfield", initials: "HW", company: "Halcyon Logistics", plan: "Business", mrr: "$3,540", arr: "$42,480", country: "🇬🇧 UK", owner: "AR", renewal: "Feb 27, 2026", status: "Active" },
  { name: "Léa Moreau", initials: "LM", company: "Vellum Studios", plan: "Growth", mrr: "$1,240", arr: "$14,880", country: "🇫🇷 FR", owner: "KP", renewal: "May 09, 2026", status: "Cancelled" },
];

const topCustomers = [
  { name: "Meridian Health", arr: "$151K", health: 94 },
  { name: "Ridgeway Capital", arr: "$100K", health: 88 },
  { name: "Nimbus Financial", arr: "$82K", health: 79 },
  { name: "Cobalt Semiconductor", arr: "$58K", health: 72 },
  { name: "Halcyon Logistics", arr: "$42K", health: 68 },
];

const activity = [
  { icon: UserPlus, tone: "text-primary bg-primary/10", title: "New customer signed up", detail: "Amelia Chen — Ridgeway Capital", time: "2m ago" },
  { icon: TrendingUp, tone: "text-success bg-success/10", title: "Plan upgraded to Enterprise", detail: "Meridian Health · +$4,200 MRR", time: "18m ago" },
  { icon: CheckCircle2, tone: "text-success bg-success/10", title: "Renewal completed", detail: "Fjord & Field · 12 months", time: "1h ago" },
  { icon: Rocket, tone: "text-ai bg-ai/10", title: "Deal closed — Won", detail: "Cobalt Semiconductor · $182K", time: "3h ago" },
  { icon: CreditCard, tone: "text-warning bg-warning/10", title: "Invoice paid", detail: "Halcyon Logistics · $3,540", time: "5h ago" },
  { icon: ShieldCheck, tone: "text-primary bg-primary/10", title: "SSO enabled", detail: "Orbit Aerospace · SAML", time: "yesterday" },
];

const insights = [
  { icon: Target, tone: "from-red-500/15 to-red-500/0 text-red-600", title: "Churn risk detected", body: "3 Business-tier accounts show declining usage over 14 days. Est. $9.8K MRR at risk.", cta: "Review accounts" },
  { icon: TrendingUp, tone: "from-emerald-500/15 to-emerald-500/0 text-emerald-600", title: "Revenue opportunity", body: "12 Growth customers exceeded seat limits — potential $18.4K MRR from upgrades.", cta: "Send upsell" },
  { icon: Globe2, tone: "from-blue-500/15 to-blue-500/0 text-blue-600", title: "Best performing region", body: "EMEA up 34% QoQ, led by DACH and Nordics. Consider ramping SDR headcount.", cta: "Open report" },
  { icon: Sparkles, tone: "from-violet-500/15 to-violet-500/0 text-violet-600", title: "Upsell suggestions", body: "9 accounts ready for Enterprise based on API volume and admin activity.", cta: "Generate outreach" },
  { icon: Zap, tone: "from-amber-500/15 to-amber-500/0 text-amber-600", title: "Sales forecast", body: "Q1 pacing 108% of target. High confidence (0.86) based on pipeline velocity.", cta: "See forecast" },
  { icon: UsersRound, tone: "from-primary/15 to-primary/0 text-primary", title: "Customer segmentation", body: "New cluster identified: mid-market fintech, avg. LTV $84K, 22% higher retention.", cta: "Explore segment" },
];

/* ---------- primitives ---------- */

function Sparkline({ data, color = "var(--primary)", h = 26 }: { data: number[]; color?: string; h?: number }) {
  const w = 120;
  const min = Math.min(...data), max = Math.max(...data);
  const pts = data.map((v, i) => {
    const x = (i / (data.length - 1)) * w;
    const y = h - ((v - min) / Math.max(1, max - min)) * h;
    return `${x},${y}`;
  }).join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" className="h-6 w-full">
      <polyline fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" points={pts} vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

function KpiCard({
  label, value, delta, positive = true, sub, spark, tint = "primary",
}: {
  label: string; value: string; delta: string; positive?: boolean;
  sub: string; spark: number[]; tint?: "primary" | "success" | "warning" | "ai" | "destructive";
}) {
  const tintMap: Record<string, string> = {
    primary: "text-primary bg-primary/10",
    success: "text-success bg-success/10",
    warning: "text-warning bg-warning/10",
    ai: "text-ai bg-ai/10",
    destructive: "text-destructive bg-destructive/10",
  };
  const sparkColor: Record<string, string> = {
    primary: "var(--primary)", success: "var(--success)", warning: "var(--warning)",
    ai: "var(--ai)", destructive: "var(--destructive)",
  };
  return (
    <div className="group relative rounded-2xl border border-border bg-card p-5 shadow-soft transition hover:shadow-elevated">
      <div className="flex items-start justify-between">
        <p className="text-xs font-medium tracking-wide uppercase text-muted-foreground">{label}</p>
        <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-semibold ${positive ? "text-success bg-success/10" : "text-destructive bg-destructive/10"}`}>
          {positive ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
          {delta}
        </span>
      </div>
      <div className="mt-3">
        <div className="text-[26px] font-bold leading-none tracking-tight text-foreground tabular-nums">{value}</div>
        <div className="mt-1.5 text-[11px] text-muted-foreground line-clamp-1">{sub}</div>
      </div>
      <div className={`mt-3 flex items-end justify-end rounded-lg px-1.5 py-1 ${tintMap[tint]}`}>
        <Sparkline data={spark} color={sparkColor[tint]} />
      </div>
    </div>
  );
}

function SectionCard({
  title, subtitle, action, children, className = "",
}: { title: string; subtitle?: string; action?: React.ReactNode; children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-border bg-card p-6 shadow-soft ${className}`}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-semibold text-foreground">{title}</h3>
          {subtitle && <p className="mt-0.5 text-xs text-muted-foreground">{subtitle}</p>}
        </div>
        {action}
      </div>
      <div className="mt-5">{children}</div>
    </div>
  );
}

function Badge({ tone, children }: { tone: "active" | "pending" | "trial" | "cancelled"; children: React.ReactNode }) {
  const map = {
    active: "text-success bg-success/10 ring-success/20",
    pending: "text-warning bg-warning/10 ring-warning/20",
    trial: "text-primary bg-primary/10 ring-primary/20",
    cancelled: "text-destructive bg-destructive/10 ring-destructive/20",
  };
  return <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1 ring-inset ${map[tone]}`}>
    <span className="h-1.5 w-1.5 rounded-full bg-current" />{children}
  </span>;
}

/* ---------- sidebar & topbar ---------- */

const nav = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: TrendingUp, label: "Sales" },
  { icon: Users, label: "Customers" },
  { icon: UserPlus, label: "Leads" },
  { icon: Target, label: "Deals" },
  { icon: PieIcon, label: "Analytics" },
  { icon: DollarSign, label: "Revenue" },
  { icon: FileText, label: "Reports" },
  { icon: UsersRound, label: "Team" },
  { icon: Plug, label: "Integrations" },
  { icon: Settings, label: "Settings" },
];

function Sidebar() {
  return (
    <aside className="hidden lg:flex fixed inset-y-0 left-0 z-30 w-64 flex-col border-r border-sidebar-border bg-sidebar">
      <div className="flex h-16 items-center gap-2.5 px-6">
        <div className="grid h-9 w-9 place-items-center rounded-xl text-primary-foreground" style={{ background: "var(--gradient-primary)" }}>
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 20V10M12 20V4M20 20v-7" />
          </svg>
        </div>
        <div className="leading-tight">
          <div className="text-sm font-semibold text-sidebar-foreground">Northwind</div>
          <div className="text-[11px] text-muted-foreground">Revenue OS</div>
        </div>
      </div>
      <nav className="flex-1 space-y-0.5 overflow-y-auto px-3 py-2">
        <div className="px-3 pb-2 pt-3 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Workspace</div>
        {nav.map((n) => (
          <button key={n.label} className={`group flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition ${
            n.active
              ? "bg-primary/10 text-primary"
              : "text-sidebar-foreground hover:bg-sidebar-accent"
          }`}>
            <n.icon className={`h-4 w-4 ${n.active ? "text-primary" : "text-muted-foreground group-hover:text-sidebar-foreground"}`} />
            {n.label}
            {n.label === "Deals" && <span className="ml-auto rounded-full bg-primary px-1.5 py-px text-[10px] font-semibold text-primary-foreground">18</span>}
          </button>
        ))}
      </nav>
      <div className="border-t border-sidebar-border p-3">
        <div className="rounded-xl bg-gradient-to-br from-primary/10 to-ai/10 p-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
            <Sparkles className="h-3.5 w-3.5 text-ai" /> Upgrade to Scale
          </div>
          <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">Unlock AI forecasting, custom dashboards and unlimited seats.</p>
          <button className="mt-3 w-full rounded-lg bg-foreground px-3 py-1.5 text-xs font-semibold text-background hover:opacity-90">Upgrade</button>
        </div>
      </div>
    </aside>
  );
}

function TopBar() {
  return (
    <header className="sticky top-0 z-20 flex h-16 items-center gap-3 border-b border-border bg-background/80 px-6 backdrop-blur-xl">
      <div className="relative w-full max-w-sm">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input placeholder="Search customers, deals, reports…" className="h-9 w-full rounded-lg border border-border bg-secondary/60 pl-9 pr-16 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/40" />
        <kbd className="absolute right-2 top-1/2 -translate-y-1/2 rounded border border-border bg-background px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">⌘K</kbd>
      </div>
      <div className="ml-auto flex items-center gap-2">
        <button className="hidden md:inline-flex h-9 items-center gap-2 rounded-lg border border-border bg-card px-3 text-xs font-medium text-foreground hover:bg-accent">
          <Calendar className="h-3.5 w-3.5 text-muted-foreground" /> Last 30 days <ChevronDown className="h-3 w-3 text-muted-foreground" />
        </button>
        <button className="hidden md:inline-flex h-9 items-center gap-2 rounded-lg px-3 text-xs font-semibold text-ai-foreground shadow-soft" style={{ background: "var(--gradient-ai)" }}>
          <Sparkles className="h-3.5 w-3.5" /> AI Assistant
        </button>
        <button className="relative grid h-9 w-9 place-items-center rounded-lg border border-border bg-card hover:bg-accent">
          <Bell className="h-4 w-4 text-foreground" />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-destructive ring-2 ring-background" />
        </button>
        <button className="hidden md:inline-flex h-9 items-center gap-2 rounded-lg border border-border bg-card px-2 pr-3 text-xs font-medium text-foreground hover:bg-accent">
          <div className="grid h-6 w-6 place-items-center rounded-md text-[10px] font-bold text-primary-foreground" style={{ background: "var(--gradient-primary)" }}>NW</div>
          Northwind
          <ChevronDown className="h-3 w-3 text-muted-foreground" />
        </button>
        <button className="flex h-9 items-center gap-2 rounded-lg border border-border bg-card pl-1 pr-3 hover:bg-accent">
          <div className="grid h-7 w-7 place-items-center rounded-md bg-gradient-to-br from-amber-400 to-rose-500 text-[11px] font-bold text-white">AR</div>
          <div className="hidden text-left leading-tight md:block">
            <div className="text-xs font-semibold text-foreground">Alex Reed</div>
            <div className="text-[10px] text-muted-foreground">Admin</div>
          </div>
        </button>
      </div>
    </header>
  );
}

/* ---------- charts ---------- */

const tooltipStyle = {
  contentStyle: {
    background: "hsl(var(--card))",
    border: "1px solid var(--border)",
    borderRadius: "12px",
    boxShadow: "0 20px 40px -20px rgb(15 23 42 / 0.14)",
    fontSize: 12,
    padding: "8px 12px",
  } as React.CSSProperties,
  labelStyle: { color: "var(--muted-foreground)", fontWeight: 500 } as React.CSSProperties,
};

function RevenueGrowthChart() {
  return (
    <div className="h-[280px] w-full">
      <ResponsiveContainer>
        <LineChart data={revenueGrowth} margin={{ top: 10, right: 8, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="mrrG" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--primary)" stopOpacity={0.25} />
              <stop offset="100%" stopColor="var(--primary)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
          <XAxis dataKey="m" tickLine={false} axisLine={false} tick={{ fill: "var(--muted-foreground)", fontSize: 11 }} />
          <YAxis tickLine={false} axisLine={false} tick={{ fill: "var(--muted-foreground)", fontSize: 11 }} tickFormatter={(v) => `$${v}K`} />
          <Tooltip {...tooltipStyle} />
          <Line type="monotone" dataKey="mrr" name="MRR" stroke="var(--primary)" strokeWidth={2.5} dot={false} activeDot={{ r: 4 }} />
          <Line type="monotone" dataKey="new" name="New MRR" stroke="var(--success)" strokeWidth={2.5} dot={false} activeDot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

function MonthlySalesBar() {
  return (
    <div className="h-[280px] w-full">
      <ResponsiveContainer>
        <BarChart data={monthlySales} margin={{ top: 10, right: 8, left: -20, bottom: 0 }} barGap={4}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
          <XAxis dataKey="m" tickLine={false} axisLine={false} tick={{ fill: "var(--muted-foreground)", fontSize: 11 }} />
          <YAxis tickLine={false} axisLine={false} tick={{ fill: "var(--muted-foreground)", fontSize: 11 }} />
          <Tooltip {...tooltipStyle} cursor={{ fill: "var(--muted)" }} />
          <Bar dataKey="won" name="Won" fill="var(--primary)" radius={[6, 6, 0, 0]} maxBarSize={18} />
          <Bar dataKey="lost" name="Lost" fill="var(--border)" radius={[6, 6, 0, 0]} maxBarSize={18} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

function SubscriptionDonut() {
  const total = plans.reduce((s, p) => s + p.value, 0);
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="relative">
        <PieChart width={220} height={220}>
          <Pie data={plans} cx={110} cy={110} innerRadius={72} outerRadius={100} paddingAngle={2} dataKey="value" stroke="none">
            {plans.map((p, i) => <Cell key={i} fill={p.color} />)}
          </Pie>
          <Tooltip {...tooltipStyle} />
        </PieChart>
        <div className="pointer-events-none absolute inset-0 grid place-items-center">
          <div className="text-center">
            <div className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">Total</div>
            <div className="text-2xl font-bold text-foreground tabular-nums">{total.toLocaleString()}</div>
            <div className="text-[10px] text-muted-foreground">subscribers</div>
          </div>
        </div>
      </div>
      <ul className="w-full space-y-2.5">
        {plans.map((p) => (
          <li key={p.name} className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: p.color }} />
            <span className="text-sm font-medium text-foreground">{p.name}</span>
            <span className="ml-auto text-xs tabular-nums text-muted-foreground">{p.value.toLocaleString()}</span>
            <span className="w-10 text-right text-xs font-semibold text-foreground tabular-nums">{Math.round((p.value / total) * 100)}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function RevenueForecast() {
  return (
    <div className="h-[280px] w-full">
      <ResponsiveContainer>
        <AreaChart data={forecast} margin={{ top: 10, right: 8, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="actG" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--primary)" stopOpacity={0.35} />
              <stop offset="100%" stopColor="var(--primary)" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="fcG" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--ai)" stopOpacity={0.3} />
              <stop offset="100%" stopColor="var(--ai)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
          <XAxis dataKey="m" tickLine={false} axisLine={false} tick={{ fill: "var(--muted-foreground)", fontSize: 11 }} />
          <YAxis tickLine={false} axisLine={false} tick={{ fill: "var(--muted-foreground)", fontSize: 11 }} tickFormatter={(v) => `$${v}K`} />
          <Tooltip {...tooltipStyle} />
          <Area type="monotone" dataKey="actual" name="Actual" stroke="var(--primary)" strokeWidth={2.5} fill="url(#actG)" />
          <Area type="monotone" dataKey="forecast" name="Forecast" stroke="var(--ai)" strokeWidth={2.5} strokeDasharray="5 5" fill="url(#fcG)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

/* --- World map (stylized) --- */
function WorldMap() {
  // Simplified dot-grid world map with heat blobs
  const regions = [
    { x: 210, y: 120, r: 22, v: 0.95, label: "North America", val: "$1.42M" },
    { x: 340, y: 130, r: 20, v: 0.88, label: "Europe", val: "$1.18M" },
    { x: 440, y: 175, r: 16, v: 0.62, label: "APAC", val: "$684K" },
    { x: 260, y: 240, r: 12, v: 0.42, label: "LATAM", val: "$312K" },
    { x: 360, y: 220, r: 10, v: 0.28, label: "Africa", val: "$182K" },
    { x: 470, y: 260, r: 8, v: 0.22, label: "Oceania", val: "$96K" },
  ];
  // build dot grid
  const dots: { x: number; y: number }[] = [];
  for (let y = 40; y < 300; y += 10) {
    for (let x = 60; x < 560; x += 10) {
      // rough continent mask via sin/cos noise
      const n = Math.sin(x * 0.03) * Math.cos(y * 0.05) + Math.sin((x + y) * 0.02);
      if (n > 0.15 && Math.random() > 0.05) dots.push({ x, y });
    }
  }
  return (
    <div className="relative">
      <svg viewBox="0 0 600 320" className="w-full">
        <defs>
          <radialGradient id="heat" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity={0.55} />
            <stop offset="100%" stopColor="var(--primary)" stopOpacity={0} />
          </radialGradient>
        </defs>
        {dots.map((d, i) => (
          <circle key={i} cx={d.x} cy={d.y} r={1.2} fill="var(--border)" />
        ))}
        {regions.map((r, i) => (
          <g key={i}>
            <circle cx={r.x} cy={r.y} r={r.r * 2.2} fill="url(#heat)" opacity={r.v} />
            <circle cx={r.x} cy={r.y} r={5} fill="var(--primary)" />
            <circle cx={r.x} cy={r.y} r={5} fill="none" stroke="var(--primary)" strokeOpacity={0.35} strokeWidth={8} />
          </g>
        ))}
      </svg>
      <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 md:grid-cols-3">
        {regions.map((r) => (
          <div key={r.label} className="flex items-center justify-between rounded-lg border border-border bg-secondary/40 px-3 py-2">
            <span className="text-xs font-medium text-foreground">{r.label}</span>
            <span className="text-xs font-semibold tabular-nums text-foreground">{r.val}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* --- Funnel --- */
function Funnel() {
  const colors = ["var(--primary)", "var(--chart-2)", "var(--chart-4)", "var(--chart-3)", "var(--success)", "var(--ai)"];
  const max = funnel[0].value;
  return (
    <div className="space-y-2.5">
      {funnel.map((f, i) => {
        const width = (f.value / max) * 100;
        return (
          <div key={f.stage} className="group">
            <div className="mb-1 flex items-center justify-between text-xs">
              <span className="font-semibold text-foreground">{f.stage}</span>
              <span className="tabular-nums text-muted-foreground">{f.value.toLocaleString()} · <span className="text-foreground">{f.pct}%</span></span>
            </div>
            <div className="h-8 overflow-hidden rounded-lg bg-secondary/60">
              <div className="flex h-full items-center justify-end pr-3 text-[11px] font-semibold text-white transition-all"
                style={{ width: `${width}%`, background: `linear-gradient(90deg, ${colors[i]}, color-mix(in oklab, ${colors[i]} 70%, white))` }}>
                {width > 20 && `${((f.value / (funnel[i - 1]?.value || f.value)) * 100).toFixed(0)}% →`}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ---------- page ---------- */

function Dashboard() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Sidebar />
      <div className="lg:pl-64">
        <TopBar />
        <main className="mx-auto max-w-[1400px] space-y-6 px-6 py-6">
          {/* Header */}
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>Workspace</span><ChevronRight className="h-3 w-3" /><span>Analytics</span><ChevronRight className="h-3 w-3" /><span className="text-foreground">Sales overview</span>
              </div>
              <h1 className="mt-1 text-2xl font-bold tracking-tight text-foreground">Good morning, Alex — here's your pipeline</h1>
              <p className="mt-1 text-sm text-muted-foreground">Dec 12, 2025 · Data synced 2 min ago from 8 sources</p>
            </div>
            <div className="flex items-center gap-2">
              <button className="inline-flex h-9 items-center gap-2 rounded-lg border border-border bg-card px-3 text-xs font-medium text-foreground hover:bg-accent"><Filter className="h-3.5 w-3.5" /> Filter</button>
              <button className="inline-flex h-9 items-center gap-2 rounded-lg border border-border bg-card px-3 text-xs font-medium text-foreground hover:bg-accent"><Download className="h-3.5 w-3.5" /> Export</button>
              <button className="inline-flex h-9 items-center gap-2 rounded-lg bg-foreground px-3 text-xs font-semibold text-background shadow-soft hover:opacity-90"><Plus className="h-3.5 w-3.5" /> Create deal</button>
            </div>
          </div>

          {/* KPIs */}
          <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-6">
            <KpiCard label="MRR" value="$394,210" delta="+12.4%" sub="vs. last month · $350.9K" tint="primary"
              spark={revenueGrowth.map(r => r.mrr)} />
            <KpiCard label="ARR" value="$4.73M" delta="+18.2%" sub="Trailing 12-month run rate" tint="success"
              spark={revenueGrowth.map(r => r.arr)} />
            <KpiCard label="Active Customers" value="5,842" delta="+6.1%" sub="342 added this month" tint="primary"
              spark={[4200, 4380, 4510, 4620, 4780, 4990, 5140, 5310, 5480, 5620, 5720, 5842]} />
            <KpiCard label="New Customers" value="342" delta="+9.8%" sub="Trial → Paid conv. 24%" tint="success"
              spark={revenueGrowth.map(r => r.new)} />
            <KpiCard label="Churn Rate" value="2.4%" delta="-0.6%" positive sub="Below 3.0% target" tint="warning"
              spark={[3.4, 3.3, 3.1, 3.0, 2.9, 2.8, 2.7, 2.7, 2.6, 2.5, 2.5, 2.4]} />
            <KpiCard label="LTV" value="$28,940" delta="+4.2%" sub="Payback 8.1 months" tint="ai"
              spark={[24, 24.5, 25, 25.4, 26, 26.4, 27, 27.3, 27.8, 28.2, 28.6, 28.9]} />
          </section>

          {/* Row 1: Revenue Growth + Subscription Plans */}
          <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">
            <SectionCard title="Revenue growth" subtitle="MRR and new business — 12 months" className="xl:col-span-2"
              action={<div className="flex items-center gap-1 rounded-lg border border-border bg-secondary/60 p-0.5 text-xs">
                {["MRR","ARR","New"].map((t,i)=>(<button key={t} className={`rounded-md px-2.5 py-1 font-medium ${i===0?"bg-card text-foreground shadow-soft":"text-muted-foreground"}`}>{t}</button>))}
              </div>}>
              <RevenueGrowthChart />
            </SectionCard>
            <SectionCard title="Subscription plans" subtitle="Distribution across active tiers"
              action={<button className="text-muted-foreground hover:text-foreground"><MoreHorizontal className="h-4 w-4"/></button>}>
              <SubscriptionDonut />
            </SectionCard>
          </section>

          {/* Row 2: Monthly Sales + Forecast */}
          <section className="grid grid-cols-1 gap-6 xl:grid-cols-2">
            <SectionCard title="Monthly sales performance" subtitle="Deals won vs. lost">
              <MonthlySalesBar />
            </SectionCard>
            <SectionCard title="Revenue forecast" subtitle="AI-projected next 4 months · confidence 0.86"
              action={<span className="inline-flex items-center gap-1 rounded-full bg-ai/10 px-2 py-0.5 text-[11px] font-semibold text-ai"><Sparkles className="h-3 w-3"/> AI</span>}>
              <RevenueForecast />
            </SectionCard>
          </section>

          {/* Row 3: Region Map + Funnel */}
          <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">
            <SectionCard title="Sales by region" subtitle="ARR heat by continent" className="xl:col-span-2">
              <WorldMap />
            </SectionCard>
            <SectionCard title="Conversion funnel" subtitle="Lead → Enterprise · last 90 days">
              <Funnel />
            </SectionCard>
          </section>

          {/* Pipeline Kanban */}
          <section>
            <SectionCard title="Sales pipeline" subtitle="$4.01M weighted across 197 open deals"
              action={<button className="inline-flex h-8 items-center gap-1.5 rounded-md border border-border bg-card px-2.5 text-xs font-medium text-foreground hover:bg-accent"><Plus className="h-3.5 w-3.5"/> New deal</button>}>
              <div className="grid gap-3 md:grid-cols-3 xl:grid-cols-5">
                {pipeline.map((stage) => (
                  <div key={stage.name} className="rounded-xl border border-border bg-secondary/40 p-3">
                    <div className="mb-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className={`h-2 w-2 rounded-full ${stage.color}`} />
                        <span className="text-sm font-semibold text-foreground">{stage.name}</span>
                        <span className="rounded-full bg-card px-1.5 py-px text-[10px] font-semibold text-muted-foreground">{stage.count}</span>
                      </div>
                      <button className="text-muted-foreground hover:text-foreground"><Plus className="h-3.5 w-3.5"/></button>
                    </div>
                    <div className="mb-3 flex items-center justify-between text-[11px] text-muted-foreground">
                      <span>Value <span className="font-semibold text-foreground">{stage.value}</span></span>
                      <span>Conv. <span className="font-semibold text-foreground">{stage.conv}</span></span>
                    </div>
                    <div className="space-y-2">
                      {(dealCards[stage.name] || []).map((d) => (
                        <div key={d.company} className="cursor-grab rounded-lg border border-border bg-card p-3 shadow-soft transition hover:shadow-elevated">
                          <div className="flex items-start justify-between">
                            <div className="text-sm font-semibold text-foreground">{d.company}</div>
                            <span className="text-sm font-bold tabular-nums text-foreground">{d.value}</span>
                          </div>
                          <div className="mt-2 flex items-center justify-between text-[11px] text-muted-foreground">
                            <div className="flex items-center gap-1.5">
                              <span className="grid h-5 w-5 place-items-center rounded-full bg-gradient-to-br from-primary/70 to-ai/70 text-[9px] font-bold text-primary-foreground">{d.owner}</span>
                              <span>Owner</span>
                            </div>
                            <span>{d.days === 0 ? "today" : `${d.days}d ago`}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </SectionCard>
          </section>

          {/* AI Insights */}
          <section>
            <SectionCard title="AI insights" subtitle="Prioritized recommendations from your revenue data"
              action={<button className="inline-flex h-8 items-center gap-1.5 rounded-md px-2.5 text-xs font-semibold text-ai-foreground" style={{ background: "var(--gradient-ai)" }}><Wand2 className="h-3.5 w-3.5"/> Ask AI</button>}>
              <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                {insights.map((i) => (
                  <div key={i.title} className={`relative overflow-hidden rounded-xl border border-border bg-gradient-to-br ${i.tone} p-4`}>
                    <div className="flex items-start gap-3">
                      <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-card shadow-soft">
                        <i.icon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-foreground">{i.title}</div>
                        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{i.body}</p>
                        <button className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-foreground hover:underline">
                          {i.cta} <ArrowUpRight className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </SectionCard>
          </section>

          {/* Recent Sales + Customer Analytics */}
          <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">
            <SectionCard title="Recent sales" subtitle="Latest closed opportunities" className="xl:col-span-2"
              action={<button className="text-xs font-semibold text-primary hover:underline">View all →</button>}>
              <div className="-mx-6 overflow-x-auto">
                <table className="w-full min-w-[720px] text-sm">
                  <thead>
                    <tr className="text-left text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                      <th className="px-6 pb-3 font-semibold">Customer</th>
                      <th className="px-2 pb-3 font-semibold">Plan</th>
                      <th className="px-2 pb-3 text-right font-semibold">MRR</th>
                      <th className="px-2 pb-3 text-right font-semibold">ARR</th>
                      <th className="px-2 pb-3 font-semibold">Country</th>
                      <th className="px-2 pb-3 font-semibold">Owner</th>
                      <th className="px-2 pb-3 font-semibold">Renewal</th>
                      <th className="px-6 pb-3 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {customers.map((c) => (
                      <tr key={c.name} className="border-t border-border transition hover:bg-secondary/40">
                        <td className="px-6 py-3">
                          <div className="flex items-center gap-3">
                            <div className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-primary/70 to-ai/70 text-[11px] font-bold text-primary-foreground">{c.initials}</div>
                            <div className="min-w-0">
                              <div className="truncate font-semibold text-foreground">{c.name}</div>
                              <div className="truncate text-xs text-muted-foreground">{c.company}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-2 py-3">
                          <span className="rounded-md border border-border bg-secondary/60 px-2 py-0.5 text-xs font-medium text-foreground">{c.plan}</span>
                        </td>
                        <td className="px-2 py-3 text-right font-semibold tabular-nums">{c.mrr}</td>
                        <td className="px-2 py-3 text-right tabular-nums text-muted-foreground">{c.arr}</td>
                        <td className="px-2 py-3 text-xs text-muted-foreground">{c.country}</td>
                        <td className="px-2 py-3">
                          <span className="grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br from-emerald-400 to-blue-500 text-[10px] font-bold text-white">{c.owner}</span>
                        </td>
                        <td className="px-2 py-3 text-xs text-muted-foreground">{c.renewal}</td>
                        <td className="px-6 py-3"><Badge tone={c.status.toLowerCase() as "active"|"pending"|"trial"|"cancelled"}>{c.status}</Badge></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </SectionCard>

            <div className="space-y-6">
              <SectionCard title="Customer analytics" subtitle="Retention & expansion signals">
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-lg border border-border bg-secondary/40 p-3">
                    <div className="text-[11px] uppercase tracking-wide text-muted-foreground">Expansion</div>
                    <div className="mt-1 text-lg font-bold tabular-nums text-foreground">$62.4K</div>
                    <div className="text-[11px] font-semibold text-success">+11.2% MoM</div>
                  </div>
                  <div className="rounded-lg border border-border bg-secondary/40 p-3">
                    <div className="text-[11px] uppercase tracking-wide text-muted-foreground">Renewal rate</div>
                    <div className="mt-1 text-lg font-bold tabular-nums text-foreground">94.6%</div>
                    <div className="text-[11px] font-semibold text-success">Above target</div>
                  </div>
                  <div className="rounded-lg border border-border bg-secondary/40 p-3">
                    <div className="text-[11px] uppercase tracking-wide text-muted-foreground">Avg deal size</div>
                    <div className="mt-1 text-lg font-bold tabular-nums text-foreground">$8,412</div>
                    <div className="text-[11px] font-semibold text-success">+3.9%</div>
                  </div>
                  <div className="rounded-lg border border-border bg-secondary/40 p-3">
                    <div className="text-[11px] uppercase tracking-wide text-muted-foreground">Health score</div>
                    <div className="mt-1 text-lg font-bold tabular-nums text-foreground">82 / 100</div>
                    <div className="text-[11px] font-semibold text-warning">3 at risk</div>
                  </div>
                </div>
                <div className="mt-5">
                  <div className="mb-2 text-xs font-semibold text-foreground">Top customers</div>
                  <ul className="space-y-2.5">
                    {topCustomers.map((c) => (
                      <li key={c.name} className="flex items-center gap-3">
                        <div className="grid h-7 w-7 place-items-center rounded-md bg-secondary text-[10px] font-bold text-foreground">{c.name.split(" ").map(s => s[0]).slice(0,2).join("")}</div>
                        <div className="min-w-0 flex-1">
                          <div className="truncate text-sm font-medium text-foreground">{c.name}</div>
                          <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-secondary">
                            <div className="h-full rounded-full" style={{ width: `${c.health}%`, background: c.health > 85 ? "var(--success)" : c.health > 70 ? "var(--primary)" : "var(--warning)" }} />
                          </div>
                        </div>
                        <span className="w-14 text-right text-sm font-semibold tabular-nums text-foreground">{c.arr}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </SectionCard>

              <SectionCard title="Quick actions" subtitle="Common workflows">
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { icon: Plus, label: "Create deal", tint: "text-primary bg-primary/10" },
                    { icon: UserRoundPlus, label: "Add customer", tint: "text-success bg-success/10" },
                    { icon: FileText, label: "Generate report", tint: "text-ai bg-ai/10" },
                    { icon: FileSpreadsheet, label: "Export CSV", tint: "text-warning bg-warning/10" },
                    { icon: UsersRound, label: "Invite team", tint: "text-primary bg-primary/10" },
                    { icon: Wand2, label: "Ask AI", tint: "text-ai bg-ai/10" },
                  ].map((q) => (
                    <button key={q.label} className="flex items-center gap-2 rounded-lg border border-border bg-card p-3 text-left transition hover:shadow-soft">
                      <span className={`grid h-8 w-8 place-items-center rounded-lg ${q.tint}`}><q.icon className="h-4 w-4" /></span>
                      <span className="text-xs font-semibold text-foreground">{q.label}</span>
                    </button>
                  ))}
                </div>
              </SectionCard>
            </div>
          </section>

          {/* Activity Timeline */}
          <section>
            <SectionCard title="Activity" subtitle="Latest events across your workspace"
              action={<button className="text-xs font-semibold text-primary hover:underline">View log →</button>}>
              <ul className="relative space-y-4 before:absolute before:left-[15px] before:top-2 before:h-[calc(100%-16px)] before:w-px before:bg-border">
                {activity.map((a, i) => (
                  <li key={i} className="relative flex items-start gap-3">
                    <span className={`relative z-10 grid h-8 w-8 shrink-0 place-items-center rounded-full ${a.tone} ring-4 ring-background`}>
                      <a.icon className="h-4 w-4" />
                    </span>
                    <div className="min-w-0 flex-1 pt-1">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <div className="text-sm font-semibold text-foreground">{a.title}</div>
                        <div className="text-[11px] text-muted-foreground">{a.time}</div>
                      </div>
                      <div className="text-xs text-muted-foreground">{a.detail}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </SectionCard>
          </section>

          <footer className="pb-4 pt-2 text-center text-[11px] text-muted-foreground">
            © 2025 Northwind Revenue OS · All systems operational
          </footer>
        </main>
      </div>
    </div>
  );
}
