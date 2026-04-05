import heroImg from "@/assets/hero.jpg";
import bouquetImg from "@/assets/bouquet.jpg";
import patisserieImg from "@/assets/patisserie.jpg";
import coffretImg from "@/assets/coffret.jpg";
import saisonImg from "@/assets/saison.jpg";
import {
  Cake,
  Clock,
  Flower2,
  Gift,
  Heart,
  Leaf,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Star,
  Truck,
} from "lucide-react";

const navLinks: { label: string; id: string }[] = [
  { label: "Accueil", id: "accueil" },
  { label: "Bouquets", id: "bouquets" },
  { label: "Pâtisserie", id: "pâtisserie" },
  { label: "Coffrets", id: "coffrets" },
  { label: "Saison", id: "saison" },
  { label: "Contact", id: "contact" },
];

const categories = [
  {
    title: "Bouquets",
    description:
      "Compositions florales fraîches, assemblées à la main avec amour et délicatesse — pour dire je t'aime, merci, ou simplement embellir le quotidien.",
    image: bouquetImg,
    bgClass: "bg-card-green",
    items: [
      { name: "Bouquet Rosée du Matin", price: "35 €" },
      { name: "Bouquet Jardin Secret", price: "45 €" },
      { name: "Bouquet Belle Saison", price: "55 €" },
    ],
  },
  {
    title: "Pâtisserie",
    description:
      "Douceurs artisanales confectionnées avec des ingrédients naturels et de saison — idéales pour un goûter, un anniversaire ou un plaisir instantané.",
    image: patisserieImg,
    bgClass: "bg-card-peach",
    items: [
      { name: "Assortiment Macarons", price: "18 €" },
      { name: "Tarte aux Fruits", price: "28 €" },
      { name: "Coffret Mignardises", price: "32 €" },
    ],
  },
  {
    title: "Coffrets",
    description:
      "L'alliance parfaite de la fleur et de la gourmandise dans un écrin raffiné — le cadeau qui marque les esprits.",
    image: coffretImg,
    bgClass: "bg-card-blue",
    items: [
      { name: "Coffret Douceur", price: "49 €" },
      { name: "Coffret Prestige", price: "75 €" },
      { name: "Coffret Sur Mesure", price: "Sur devis" },
    ],
  },
  {
    title: "Saison",
    description:
      "Nos créations éphémères qui célèbrent les saveurs et les fleurs du moment — à découvrir avant qu'il ne soit trop tard.",
    image: saisonImg,
    bgClass: "bg-card-sand",
    items: [
      { name: "Bouquet Printanier", price: "40 €" },
      { name: "Panier Gourmand", price: "55 €" },
      { name: "Composition Festive", price: "65 €" },
    ],
  },
];

const values = [
  {
    icon: Leaf,
    title: "Nature",
    text: "Des fleurs fraîches et des ingrédients naturels, cueillis et sélectionnés avec soin.",
  },
  {
    icon: Heart,
    title: "Artisanat",
    text: "Chaque création est unique, réalisée à la main dans notre atelier avec passion.",
  },
  {
    icon: Cake,
    title: "Gourmandise",
    text: "Des saveurs authentiques qui éveillent les sens et réchauffent le cœur.",
  },
];

const trustItems = [
  { icon: Sparkles, text: "Fait maison & sur mesure" },
  { icon: Truck, text: "Livraison sur secteur" },
  { icon: Flower2, text: "Fleurs & fruits de saison" },
];

const testimonials = [
  {
    quote:
      "Un bouquet d'une beauté rare et des macarons divins — tout le monde a demandé l'adresse après notre anniversaire de mariage.",
    author: "Camille L.",
    role: "Cliente",
  },
  {
    quote:
      "Le coffret offert à ma mère était parfaitement présenté. On sent le soin du détail et le vrai métier d'artisan.",
    author: "Thomas M.",
    role: "Client",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur-lg supports-[backdrop-filter]:bg-background/70">
        <div className="container mx-auto flex flex-col items-center gap-4 px-6 py-4 sm:flex-row sm:justify-between">
          <a
            href="#accueil"
            className="font-serif text-lg font-semibold tracking-tight text-foreground transition-colors hover:text-kraft-dk md:text-xl"
          >
            Délice des Fleurs JL
          </a>
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 md:gap-x-8">
            {navLinks.map(({ label, id }) => (
              <a
                key={id}
                href={`#${id}`}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-kraft-dk"
              >
                {label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="hidden rounded-full bg-kraft px-5 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:bg-kraft-dk hover:shadow md:inline-flex"
          >
            Commander
          </a>
        </div>
      </header>

      <section id="accueil" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Fleurs et pâtisseries artisanales"
            className="h-full w-full object-cover"
            width={1920}
            height={1080}
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/75 via-foreground/45 to-foreground/25" />
        </div>
        <div className="relative container mx-auto px-6 py-28 text-center md:py-40">
          <p
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-1.5 font-sans text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground/90 backdrop-blur-sm animate-fade-in-up"
            style={{ animationDelay: "0s" }}
          >
            <Sparkles className="h-3.5 w-3.5" aria-hidden />
            Artisan fleuriste & pâtissier
          </p>
          <p className="mb-5 font-serif text-sm uppercase tracking-[0.25em] text-primary-foreground/75 md:text-base animate-fade-in-up">
            Délice des Fleurs JL
          </p>
          <h1 className="mb-6 max-w-4xl mx-auto font-serif text-4xl font-semibold leading-tight text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in-up">
            L'art de la fleur & de la gourmandise
          </h1>
          <p
            className="mx-auto mb-10 max-w-2xl text-base font-light text-primary-foreground/90 md:text-xl animate-fade-in-up"
            style={{ animationDelay: "0.15s" }}
          >
            Compositions florales et douceurs artisanales, créées avec passion pour sublimer vos
            moments précieux — mariages, naissances, fêtes ou petits plaisirs du quotidien.
          </p>
          <div
            className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5 animate-fade-in-up"
            style={{ animationDelay: "0.25s" }}
          >
            <a
              href="#bouquets"
              className="inline-flex w-full min-w-[200px] items-center justify-center rounded-full bg-kraft px-8 py-3.5 text-sm font-medium tracking-wide text-primary-foreground shadow-lg shadow-foreground/20 transition-all hover:bg-kraft-dk hover:shadow-xl sm:w-auto"
            >
              Découvrir nos créations
            </a>
            <a
              href="#contact"
              className="inline-flex w-full min-w-[200px] items-center justify-center rounded-full border-2 border-primary-foreground/80 bg-primary-foreground/10 px-8 py-3.5 text-sm font-medium tracking-wide text-primary-foreground backdrop-blur-sm transition-all hover:bg-primary-foreground/20 sm:w-auto"
            >
              Passer commande
            </a>
          </div>
        </div>
      </section>

      <div className="border-b border-border bg-card/80 py-6">
        <div className="container mx-auto px-6">
          <ul className="flex flex-col items-stretch justify-center gap-6 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-10 md:gap-14">
            {trustItems.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center justify-center gap-3 text-sm text-foreground">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-kraft/25 text-kraft-dk">
                  <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                </span>
                <span className="font-medium">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <section className="py-14 md:py-20">
        <div className="container mx-auto px-6 text-center">
          <p className="mb-2 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-kraft-dk">
            Notre univers
          </p>
          <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">
            Des créations qui racontent une histoire
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Parce que chaque occasion mérite une attention particulière, nous imaginons pour vous des
            alliances de couleurs, de parfums et de saveurs — toujours avec la même exigence
            d'authenticité.
          </p>
        </div>
      </section>

      {categories.map((cat, i) => (
        <section key={cat.title} id={cat.title.toLowerCase()} className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div
              className={`flex flex-col items-center gap-12 md:gap-16 ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"}`}
            >
              <div className="w-full md:w-1/2">
                <div
                  className={`group relative overflow-hidden rounded-2xl p-6 shadow-sm ring-1 ring-border/60 md:p-8 ${cat.bgClass}`}
                >
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="h-80 w-full rounded-xl object-cover shadow-md transition duration-700 ease-out group-hover:scale-[1.03] md:h-96"
                    loading="lazy"
                    width={640}
                    height={800}
                  />
                </div>
              </div>
              <div className="w-full space-y-6 md:w-1/2">
                <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-kraft-dk">
                  {String(i + 1).padStart(2, "0")} — Collection
                </p>
                <h3 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">
                  {cat.title}
                </h3>
                <p className="leading-relaxed text-muted-foreground">{cat.description}</p>
                <ul className="space-y-3">
                  {cat.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-center justify-between gap-4 rounded-xl border border-border/60 bg-card px-4 py-3.5 transition-shadow hover:shadow-md"
                    >
                      <span className="text-sm font-medium text-foreground">{item.name}</span>
                      <span className="shrink-0 rounded-full bg-muted px-3 py-1 text-sm font-semibold text-kraft-dk">
                        {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-foreground px-6 py-2.5 text-sm font-medium text-foreground transition-all hover:bg-foreground hover:text-primary-foreground"
                >
                  Commander cette sélection
                  <Gift className="h-4 w-4" aria-hidden />
                </a>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="border-y border-border bg-muted/40 py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="mb-12 text-center md:mb-16">
            <p className="mb-2 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-kraft-dk">
              Ils nous font confiance
            </p>
            <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl">
              Ce que disent nos clients
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 md:gap-10">
            {testimonials.map((t) => (
              <blockquote
                key={t.author}
                className="relative rounded-2xl border border-border/80 bg-card p-8 shadow-sm md:p-10"
              >
                <Star
                  className="mb-4 h-8 w-8 fill-kraft/40 text-kraft-dk"
                  strokeWidth={1}
                  aria-hidden
                />
                <p className="mb-6 font-serif text-lg italic leading-relaxed text-foreground md:text-xl">
                  « {t.quote} »
                </p>
                <footer className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">{t.author}</span>
                  <span aria-hidden>·</span>
                  <span>{t.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <p className="mb-2 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-kraft-dk">
            Notre engagement
          </p>
          <h2 className="mb-4 font-serif text-3xl font-semibold text-foreground md:text-4xl">
            Nos valeurs
          </h2>
          <p className="mx-auto mb-14 max-w-xl text-muted-foreground">
            Chaque création est le fruit d'un savoir-faire artisanal, d'un amour profond pour la
            nature et d'une quête de beauté gourmande.
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="rounded-2xl border border-border/60 bg-card p-8 text-left shadow-sm transition-shadow hover:shadow-md md:p-9"
                >
                  <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-kraft/20 text-kraft-dk">
                    <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                  </span>
                  <h3 className="mb-3 font-serif text-xl font-semibold text-foreground">{v.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{v.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card via-card to-card-peach/30 p-8 shadow-lg md:p-12">
            <div className="text-center">
              <p className="mb-2 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-kraft-dk">
                Parlons de votre projet
              </p>
              <h2 className="mb-4 font-serif text-3xl font-semibold text-foreground md:text-4xl">
                Envie d'une création sur mesure ?
              </h2>
              <p className="mb-10 text-muted-foreground">
                Contactez-nous pour composer ensemble le bouquet, le coffret ou la douceur qui
                marquera votre occasion spéciale. Nous répondons avec plaisir sous 24 à 48 h.
              </p>
            </div>
            <div className="mx-auto grid max-w-lg gap-4 sm:grid-cols-2">
              <a
                href="mailto:bonjour@fleurgourmande.fr"
                className="flex items-center gap-3 rounded-2xl border border-border/80 bg-background/80 px-5 py-4 text-left text-sm transition-colors hover:border-kraft/50 hover:bg-card"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-kraft/20 text-kraft-dk">
                  <Mail className="h-5 w-5" aria-hidden />
                </span>
                <span>
                  <span className="block font-semibold text-foreground">Écrire</span>
                  <span className="text-muted-foreground">bonjour@fleurgourmande.fr</span>
                </span>
              </a>
              <a
                href="tel:+33123456789"
                className="flex items-center gap-3 rounded-2xl border border-border/80 bg-background/80 px-5 py-4 text-left text-sm transition-colors hover:border-kraft/50 hover:bg-card"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-kraft/20 text-kraft-dk">
                  <Phone className="h-5 w-5" aria-hidden />
                </span>
                <span>
                  <span className="block font-semibold text-foreground">Appeler</span>
                  <span className="text-muted-foreground">01 23 45 67 89</span>
                </span>
              </a>
            </div>
            <div className="mt-8 flex flex-col items-center justify-center gap-2 rounded-2xl bg-muted/50 px-6 py-5 text-center text-sm text-muted-foreground md:flex-row md:gap-6">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-kraft-dk" aria-hidden />
                12 rue des Lilas, 75000 Paris
              </span>
              <span className="hidden h-4 w-px bg-border md:inline-block" aria-hidden />
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0 text-kraft-dk" aria-hidden />
                Mar–Sam 9h30–19h · Dim sur rendez-vous
              </span>
            </div>
            <div className="mt-8 text-center">
              <a
                href="mailto:bonjour@fleurgourmande.fr?subject=Commande%20%2F%20demande%20sur%20mesure"
                className="inline-flex rounded-full bg-foreground px-8 py-3.5 text-sm font-medium tracking-wide text-primary-foreground transition-colors hover:bg-kraft-dk"
              >
                Nous contacter
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-muted/30 py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="font-serif text-xl font-semibold text-foreground">Délice des Fleurs JL</p>
          <p className="mt-1 text-sm text-muted-foreground">Fleurs & gourmandises artisanales</p>
          <p className="mt-6 text-xs text-muted-foreground">
            © {new Date().getFullYear()} — Fait avec passion
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
