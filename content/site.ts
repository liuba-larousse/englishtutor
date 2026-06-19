/* ============================================================================
   SOURCE OF TRUTH — all site copy + image references.
   Populated in Step 3 from Olaide's existing page (olaide-english-coaching).
   Components read from this file — no hardcoded copy in JSX.
   Items still needing real assets are marked  TODO.
   ============================================================================ */

const CALENDLY = "https://calendly.com/olaniyanolaide/discovery-call";
const PREPLY = "https://preply.in/OLAIDE6EN1608992710";
const YOUTUBE = "https://youtu.be/A4XALvwHasQ";

export const site = {
  /* ---- Site URL (used by metadata, canonical, sitemap, JSON-LD) ----
     TODO: set NEXT_PUBLIC_SITE_URL at deploy, or update this placeholder. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.olaide-anglais.fr",

  /* ---- Brand / SEO ---- */
  brand: {
    name: "Olaide",
    fullName: "Olaide — Cours d'anglais individuel",
  },
  meta: {
    title: "Cours d'Anglais Individuel · Premier Cours Gratuit | Olaide",
    description:
      "Cours d'anglais 1-on-1 en ligne avec Olaide, professeur natif certifié TEFL. Pour professionnels, étudiants BTS et métiers spécialisés. Premier cours offert — 30 min, sans engagement.",
    keywords: [
      "cours d'anglais en ligne",
      "professeur d'anglais natif",
      "cours d'anglais individuel",
      "anglais professionnel",
      "anglais BTS TOEIC IELTS",
      "cours d'anglais 1-on-1",
    ],
  },

  /* ---- Booking / external ---- */
  booking: {
    calendly: CALENDLY,
    preply: PREPLY,
    youtube: YOUTUBE,
  },

  /* ---- Primary CTA ----
     In-page buttons scroll to #contact; the #contact section holds the
     real "Réserver" button that opens Calendly. */
  cta: {
    label: "Réserver mon cours gratuit",
    short: "Cours gratuit",
    href: "#contact",
  },
  ctaSecondary: {
    label: "Voir l'offre",
    href: "#tarifs",
  },

  /* ---- Navigation ---- */
  nav: [
    { label: "Pour qui", href: "#pour-qui" },
    { label: "Méthode", href: "#methode" },
    { label: "À propos", href: "#a-propos" },
    { label: "Avis", href: "#temoignages" },
    { label: "Tarif", href: "#tarifs" },
    { label: "FAQ", href: "#faq" },
  ],

  /* ---- Hero ---- */
  hero: {
    eyebrow: "Professeur natif · Certifié TEFL · 4.9 ⭐ sur Preply",
    titleLines: ["De « je bloque en anglais »", "à prendre la parole avec assurance"],
    subtitle:
      "Vous comprenez l'anglais mais vous bloquez dès qu'il faut parler. C'est exactement ce qu'on travaille — ensemble, à votre rythme, en cours individuels en ligne.",
    card: {
      title: "🎁 Premier cours offert",
      text: "Une session découverte de 30 minutes pour parler de vos objectifs, identifier vos blocages et voir si le courant passe.",
      tags: ["30 min", "Sans engagement", "Sans carte"],
    },
    video: {
      label: "Regarder ma présentation",
      duration: "1 min",
      youtubeId: "A4XALvwHasQ",
      href: YOUTUBE,
      caption: "Professeur natif certifié TEFL · 4.9 ⭐ sur Preply",
    },
    image: "/images/olaide.jpg",
    imageAlt: "Olaide, professeur d'anglais natif certifié TEFL",
  },

  /* ---- Trust / stats ---- */
  stats: [
    { value: "850+", label: "cours complétés" },
    { value: "4.9 ⭐", label: "note moyenne Preply" },
    { value: "7 ans", label: "d'expérience" },
    { value: "TEFL", label: "professeur natif certifié" },
  ],
  trust: {
    title: "Avis vérifiés sur Preply · 4.9/5 · 35+ avis",
    badges: ["Professeur natif", "Certifié TEFL", "1-on-1 en vidéo", "Annulation 24h"],
    linkLabel: "Voir le profil Preply →",
    linkHref: PREPLY,
  },

  /* ---- Pour qui (audiences) ---- */
  audiencesIntro: {
    eyebrow: "Pour qui",
    title: "Votre anglais a un objectif précis. Les cours aussi.",
    text: "Pas de méthode générique. Chaque cours est construit autour de ce que vous avez réellement besoin de dire — au travail, en examen, ou dans votre secteur.",
  },
  audiences: [
    {
      icon: "💼",
      category: "Professionnels",
      title: "Parlez anglais avec autorité au travail",
      text: "Réunions, présentations, négociations — les situations où l'anglais doit sortir naturellement. On les travaille une par une, dans vos vraies situations professionnelles.",
      tags: ["Réunions en anglais", "Présentations", "Négociation", "Emails professionnels"],
      accent: "blue" as const,
    },
    {
      icon: "🎓",
      category: "Étudiants · BTS · Examens",
      title: "Préparez votre oral avec un natif",
      text: "Avant un oral d'examen, rien ne remplace la pratique avec un vrai locuteur natif. Feedback immédiat, accent travaillé, confiance construite avant le jour J.",
      tags: ["BTS oral", "TOEIC speaking", "IELTS", "Examens universitaires"],
      accent: "lime" as const,
    },
    {
      icon: "🔧",
      category: "Métiers spécialisés",
      title: "L'anglais de votre secteur, pas l'anglais général",
      text: "Chaque secteur a son vocabulaire. On travaille le vôtre directement — pas de temps perdu sur ce que vous n'utiliserez jamais.",
      tags: ["Immobilier", "Transport & Logistique", "Commerce international", "Tourisme"],
      accent: "blue" as const,
    },
  ],

  /* ---- Goals (scattered pills) ---- */
  goals: {
    title: "Un anglais au service de vos objectifs",
    text: "Au travail, en examen ou dans votre secteur : chaque séance part d'une situation que vous vivez vraiment. On la travaille jusqu'à ce qu'elle devienne naturelle.",
    text2:
      "Pas de manuel, pas de programme standard — seulement ce qui vous fait progresser, semaine après semaine.",
    tags: [
      "réunions",
      "présentations",
      "négociation",
      "emails pro",
      "appels clients",
      "entretiens d'embauche",
      "prise de parole",
      "confiance à l'oral",
      "conversation",
      "prononciation",
      "small talk",
      "networking",
      "voyages d'affaires",
      "vocabulaire métier",
      "BTS oral",
      "TOEIC",
      "IELTS",
      "examens universitaires",
      "immobilier",
      "logistique",
      "commerce international",
      "tourisme",
    ],
  },

  /* ---- Method ---- */
  method: {
    title: "Trois étapes. Zéro friction.",
    subtitle:
      "Un premier cours gratuit pour se connaître, puis un rythme qui s'adapte à votre vie.",
    steps: [
      {
        n: "1",
        title: "Cours découverte — gratuit, 30 min",
        text: "On parle de vos objectifs, on identifie vos blocages, et on vérifie que le courant passe. Aucun engagement, aucune carte bancaire.",
      },
      {
        n: "2",
        title: "Chaque séance préparée pour vous",
        text: "Je prépare chaque cours autour de vos vraies situations — une réunion qui approche, un oral qui arrive, un email à rédiger. Pas de manuel, pas de programme standard.",
      },
      {
        n: "3",
        title: "Cours hebdomadaires, à votre rythme",
        text: "50 minutes par semaine, planning flexible. Paiement avant chaque cours, annulation possible jusqu'à 24h avant.",
      },
    ],
    banner:
      "Pas de manuel, pas de programme standard. Chaque minute du cours est construite autour de vos vraies situations — pour que l'anglais finisse par sortir tout seul.",
    image: "/images/tutor-method.svg", // TODO: capture / photo de cours
    imageAlt: "Cours d'anglais individuel en visioconférence",
  },

  /* ---- About + mot du professeur ---- */
  about: {
    eyebrow: "Pourquoi je comprends votre blocage",
    name: "Olaide",
    role: "Professeur natif · Apprenant de français · Certifié TEFL",
    message:
      "« La différence entre comprendre une langue et la parler, c'est une seule chose — des conversations réelles avec des natifs. C'est ce que je vous donne. »",
    bio: "J'ai appris le français exactement comme vous : je comprenais la grammaire, je lisais sans problème — mais dès que je devais parler, je bloquais. Tout a changé le jour où j'ai commencé à avoir de vraies conversations avec des francophones natifs : des échanges réels, avec des corrections immédiates, dans des situations concrètes. C'est exactement ce que je construis avec vous pour l'anglais — des conversations qui ressemblent à votre vraie vie, avec le feedback d'un natif qui comprend vos blocages parce qu'il les a vécus.",
    credentials: [
      "Certifié TEFL · professeur natif",
      "850+ cours complétés",
      "4.9 ⭐ · 35+ avis vérifiés sur Preply",
      "7 ans d'expérience en enseignement",
    ],
    image: "/images/olaide.jpg",
    imageAlt: "Portrait d'Olaide",
  },

  /* ---- Testimonials ----
     Real verified Preply reviews (transcribed from the original page's review
     screenshots). 35+ reviews total — see the Preply profile. */
  testimonials: {
    title: "Ce que disent ceux qui apprennent avec moi",
    subtitle: "Avis vérifiés sur Preply · 4.9 ⭐ · 35+ avis",
    preplyLabel: "Lire les avis sur Preply →",
    preplyHref: PREPLY,
    items: [
      {
        quote:
          "Olaide m'a clairement réconciliée avec l'anglais ! Je partais de zéro et il a su s'adapter direct à mon niveau. Les cours passent super vite, dans une bonne ambiance, et j'ai vraiment progressé sans m'en rendre compte. Il met en confiance — je recommande à 100 % !",
        name: "Chloé",
        role: "Avis vérifié · avril 2026",
      },
      {
        quote:
          "Olaide est un professeur d'anglais en ligne exceptionnel. Il sait parfaitement s'adapter à mes difficultés, est patient et met toujours à l'aise. Grâce à lui, je n'ai jamais appris l'anglais aussi efficacement. Ses cours sont motivants et donnent envie de continuer.",
        name: "Andreas",
        role: "Avis vérifié · février 2026",
      },
      {
        quote:
          "Olaide est un super prof qui prend son temps et qui est à l'écoute. C'est toujours un plaisir d'étudier avec lui. Il m'a redonné goût à l'anglais.",
        name: "Charlène",
        role: "Avis vérifié · février 2026",
      },
    ],
    summary: {
      rating: "4.9",
      stars: "★★★★★",
      reviews: "35+ avis vérifiés",
      lessons: "850+ cours complétés",
      ctaLabel: "Lire tous les avis sur Preply",
      ctaHref: PREPLY,
    },
  },

  /* ---- Offer (single offer) ---- */
  offer: {
    eyebrow: "L'offre",
    title: "Simple, clair, sans surprise.",
    subtitle:
      "Un premier cours pour se connaître — offert. Ensuite, des cours individuels au rythme qui vous convient.",
    badge: "Premier cours offert",
    name: "Cours d'anglais individuel",
    tagline: "Professeur natif · Vidéo 1-on-1 · Flexible",
    price: "30€",
    unit: "/ 50 minutes",
    features: [
      "Premier cours découverte offert — 30 minutes",
      "Cours individuels de 50 minutes en vidéo (Zoom ou Google Meet)",
      "Planning flexible — vous choisissez le créneau",
      "Contenu adapté à votre objectif précis",
      "Feedback immédiat à chaque séance",
      "Paiement simple avant chaque cours — PayPal ou Revolut",
      "Annulation jusqu'à 24h avant — sans frais",
    ],
    reassurances: ["Sans engagement", "Aucune carte requise", "Annulation libre"],
    note: "⏳ Quelques créneaux disponibles cette semaine — réservez avant qu'ils partent.",
  },

  /* ---- FAQ ---- */
  faq: {
    title: "Vous avez des questions ?",
    items: [
      {
        q: "Comment se passe le premier cours gratuit ?",
        a: "C'est une session de 30 minutes en vidéo. On se présente, on parle de vos objectifs et de vos blocages actuels, et on teste si la méthode vous convient. Aucune carte bancaire, aucun engagement. Si vous voulez continuer, vous réservez le premier cours payant et vous réglez avant la séance. Sinon, aucun problème.",
      },
      {
        q: "Comment fonctionne le paiement ?",
        a: "Simple et sans abonnement. Vous réservez votre créneau sur Calendly, puis vous réglez 30€ avant le cours par PayPal ou Revolut. Pas d'abonnement, pas de prélèvement automatique, pas d'engagement minimum. Vous payez cours par cours, quand vous voulez avancer.",
      },
      {
        q: "Pourquoi ne pas passer par Preply, iTalki ou Superprof ?",
        a: "Ces plateformes sont utiles pour trouver un professeur — mais elles créent un environnement de comparaison permanente : on change facilement de prof et on perd le fil de sa progression. Ici, vous travaillez avec un seul professeur qui connaît votre parcours, vos blocages et vos objectifs semaine après semaine. La régularité avec un même professeur est ce qui crée de vrais progrès. Et si ça ne vous convient pas après le premier cours gratuit, vous n'avez rien perdu.",
      },
      {
        q: "Quel niveau faut-il avoir pour commencer ?",
        a: "Tous les niveaux sont acceptés — du débutant qui comprend mais ne parle pas, au professionnel qui veut affiner son anglais d'affaires. Le premier cours sert précisément à évaluer votre niveau pour adapter chaque séance.",
      },
      {
        q: "Quelle est la différence avec une application ou un cours de groupe ?",
        a: "Dans un cours de groupe, vous parlez 10% du temps. Dans une application, personne ne corrige votre accent ni n'adapte l'explication si vous ne comprenez pas. En 1-on-1, chaque minute est pour vous — on avance sur vos vraies difficultés, pas sur un programme conçu pour tout le monde.",
      },
      {
        q: "Sur quelle plateforme se déroulent les cours ?",
        a: "Les cours se font en vidéo — Zoom ou Google Meet selon votre préférence. Tout ce qu'il vous faut : une connexion internet correcte et un endroit calme.",
      },
      {
        q: "Comment annuler ou reporter un cours ?",
        a: "Vous pouvez annuler ou reporter jusqu'à 24 heures avant le cours, sans frais. En dessous de 24h, le cours est dû — par respect du temps préparé pour vous.",
      },
      {
        q: "Ces cours sont-ils éligibles au CPF ?",
        a: "Non — mes cours ne sont pas éligibles au CPF. En revanche, si vous êtes salarié, votre employeur peut financer vos cours d'anglais via le plan de formation de l'entreprise : renseignez-vous auprès de votre service RH. Pour les particuliers, les cours restent à 30€ / 50 min — sans abonnement, sans engagement.",
      },
    ],
  },

  /* ---- Final CTA / contact ---- */
  contact: {
    title: "Votre premier cours est offert.",
    subtitle:
      "30 minutes, sans engagement, pour voir si ça vous convient. C'est tout ce qu'on vous demande.",
    bookLabel: "Réserver mon cours gratuit →",
    bookHref: CALENDLY,
    reassurances: ["Sans engagement", "Aucune carte requise", "Annulation libre"],
    preplyLabel: "4.9 ⭐ · 35+ avis vérifiés sur Preply →",
    preplyHref: PREPLY,
  },

  /* ---- Footer ---- */
  footer: {
    tagline:
      "Cours d'anglais individuel en ligne avec un professeur natif certifié TEFL.",
    socials: [
      { label: "Profil Preply", href: PREPLY },
      { label: "Réserver un cours (Calendly)", href: CALENDLY },
      { label: "Vidéo de présentation", href: YOUTUBE },
    ],
    legalLinks: [
      { label: "Mentions légales", href: "#" }, // TODO
      { label: "Politique de confidentialité", href: "#" }, // TODO
    ],
  },
};

export type Site = typeof site;
