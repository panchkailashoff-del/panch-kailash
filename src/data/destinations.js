// ---------------------------------------------------------------------------
// PANCH KAILASH — CENTRAL DATA MODEL
//
// Every page (Home, DestinationPage, Compare, Planner) reads from this file.
// No destination copy is hardcoded into components — add or edit a
// destination here and it propagates everywhere automatically.
//
// "status" fields are DYNAMIC information (can change with government
// notices / weather / season) and always carry lastVerified + source.
// Everything else is treated as relatively STABLE geographic/cultural info.
// ---------------------------------------------------------------------------

const BASE = import.meta.env.BASE_URL;

// Central hotspot coordinates for the homepage panorama.
// x/y are PERCENTAGES of the hero image, not pixels — keeps them responsive
// across phones, tablets and desktops. Adjust these two numbers per
// destination to reposition a marker; nothing else needs to change.
export const heroHotspots = [
  { id: "mount-kailash", x: 50, y: 28 },
  { id: "adi-kailash", x: 22, y: 42 },
  { id: "shrikhand-mahadev", x: 66, y: 55 },
  { id: "kinnaur-kailash", x: 80, y: 38 },
  { id: "manimahesh-kailash", x: 37, y: 62 },
];

export const destinations = {
  "mount-kailash": {
    id: "mount-kailash",
    name: "Mount Kailash",
    shortName: "Kailash Mansarovar",
    region: "Tibet Autonomous Region, via Uttarakhand or Sikkim, India",
    state: "Uttarakhand / Sikkim (departure routes)",
    country: "India / China",
    image: `${BASE}images/388b155f-bb32-4cc2-ab13-f77765494af4.webp`,
    tagline: "The Kailash Mansarovar Yatra — a once-in-a-lifetime pilgrimage",

    elevation: { value: 6638, unit: "m", confidence: "verified" },

    overview:
      "Mount Kailash is approached through the Government of India's official Kailash Mansarovar Yatra, run separately from the four Indian Himalayan Kailash treks covered on this site. It is one journey with two official departure routes and a formal selection process.",

    significance:
      "Traditionally regarded as sacred across several faiths. Pilgrims consider the mountain and the Kailash Kora (circumambulation) to be of deep spiritual significance. This site does not present a single universal religious account — see the FAQ for context.",

    route: {
      startPoint: "Uttarakhand (Lipulekh) or Sikkim (Nathu La)",
      endpoint: "Mount Kailash / Lake Mansarovar, Tibet",
      distance: "Varies by route and includes the traditional Kailash Kora",
      duration: "Approximately 21–22 days end-to-end (CURRENTLY REPORTED)",
      difficulty: "High — high-altitude trek with limited acclimatization time",
    },

    access: [
      "Government of India official application and selection (lottery-based in past cycles)",
      "Two official routes: Lipulekh (Uttarakhand) and Nathu La (Sikkim)",
      "Nathu La route does not require trekking on foot for the border crossing itself",
    ],

    permits: [
      "Mandatory Government of India registration/selection process",
      "Valid Indian passport",
      "Medical fitness certification from an approved authority",
      "Chinese entry formalities handled as part of the official itinerary",
    ],

    accommodation: [
      "Government-arranged camps and guesthouses along the official itinerary",
    ],

    connectivity: [
      "Very limited to unavailable for most of the route",
    ],

    medical: [
      "Mandatory medical fitness certificate before selection is confirmed",
      "High-altitude acclimatization built into the official itinerary",
      "Basic medical support present at camps on the Indian side",
    ],

    emergency: [
      "Follow instructions of the official Liaison Officers accompanying each batch",
    ],

    cost: {
      min: 209000,
      max: 331000,
      currency: "INR",
      note:
        "2026 official per-person estimates: approximately ₹2.09 lakh (Lipulekh) and ₹3.31 lakh (Nathu La). Year-specific — not a permanent price.",
    },

    season: {
      bestMonths: ["May", "June", "July", "August", "September"],
      avoidMonths: ["November", "December", "January", "February", "March"],
      note: "Official batches run in a defined summer window set annually by the government.",
    },

    safety: [
      "High-altitude sickness is the primary risk — acclimatization days are built into the official schedule and should never be skipped",
      "Weather and road conditions on approach routes can change quickly",
      "Follow the official Liaison Officer's instructions at all times",
    ],

    packing: [
      "Cold-weather layered clothing",
      "Personal medication and prescribed altitude medication if advised by a doctor",
      "Comfortable, broken-in trekking footwear",
      "Government-specified document set (passport, medical certificate, permits)",
    ],

    model: null,

    status: {
      label: "2026 applications closed on official schedule",
      type: "seasonal",
      lastVerified: "2026-08-29",
      source: "Government of India Kailash Mansarovar Yatra notices",
      notes:
        "Route, batch numbers and pricing are set annually by the government. Verify current-year applications on official channels before planning.",
    },

    sources: [
      {
        organization: "Government of India — Kailash Mansarovar Yatra authorities",
        covers: "Routes, batch numbers, itinerary duration, official costs",
        verified: "2026-08-29",
        type: "Official government notice",
      },
    ],

    faqNote:
      "The Government of India Kailash Mansarovar Yatra is a formally managed pilgrimage. It is distinct from the traditional, independently undertaken Kailash pilgrimage / Kora tradition, which this site describes separately and does not claim to administer.",
  },

  "adi-kailash": {
    id: "adi-kailash",
    name: "Adi Kailash",
    shortName: "Adi Kailash",
    region: "Pithoragarh, Uttarakhand",
    state: "Uttarakhand",
    country: "India",
    image: `${BASE}images/911f1828-7225-4606-8fd5-f950170646ab.webp`,
    tagline: "The 'Chhota Kailash' of the Kumaon Himalayas",

    elevation: { value: 6191, unit: "m", confidence: "approximate" },

    overview:
      "Adi Kailash sits in the far northeastern corner of Pithoragarh district, close to the India–Nepal–Tibet border area, and is reached by a scenic road-and-trek journey past Om Parvat, Parvati Lake and Gauri Kund.",

    significance:
      "Traditionally regarded as sacred, and often referred to as 'Chhota Kailash' by pilgrims and local communities in the region.",

    route: {
      startPoint: "Dharchula / Tanakpur, Pithoragarh",
      endpoint: "Adi Kailash base near Jolingkong",
      distance: "Road journey plus a shorter trekking component near Jolingkong",
      duration: "Typically a multi-day itinerary (CURRENTLY REPORTED — verify with operator)",
      difficulty: "Moderate — mostly road travel with limited high-altitude walking",
    },

    access: [
      "Motorable road for the majority of the journey via Dharchula",
      "Short trek/walk near the Jolingkong / Parvati Lake area",
    ],

    permits: [
      "Inner Line Permit required for the border-area sections",
      "Valid photo ID mandatory",
    ],

    accommodation: [
      "KMVN (Kumaon Mandal Vikas Nigam) guesthouses and camps along the route",
    ],

    connectivity: [
      "Patchy to unavailable beyond Dharchula",
    ],

    medical: [
      "Basic first-aid recommended; nearest full medical facilities are in larger towns before the border area",
    ],

    emergency: [
      "Verify current local emergency contacts before departure",
    ],

    cost: {
      min: 37800,
      max: 52500,
      currency: "INR",
      note:
        "2026 KMVN package references: Delhi–Delhi ≈ ₹52,500, Tanakpur–Tanakpur ≈ ₹44,100, Dharchula–Dharchula ≈ ₹37,800. These are official package prices, not universal trip costs.",
    },

    season: {
      bestMonths: ["May", "June", "September", "October"],
      avoidMonths: ["December", "January", "February", "March"],
      note: "Monsoon months carry higher landslide risk on the approach road.",
    },

    safety: [
      "Border-area sensitivity — Inner Line Permit checks are enforced",
      "Seasonal road conditions and landslides can close sections without notice",
      "Weather at altitude near Jolingkong changes quickly",
    ],

    packing: [
      "Inner Line Permit documents and photo ID",
      "Warm layered clothing even in summer months",
      "Comfortable footwear for short walks at altitude",
    ],

    model: null,

    status: {
      label: "Generally accessible in season — verify road conditions",
      type: "seasonal",
      lastVerified: "2026-08-29",
      source: "Pithoragarh district administration / KMVN",
      notes: "Road conditions and permit rules can change with weather and border-area circumstances.",
    },

    sources: [
      {
        organization: "Pithoragarh District Administration",
        covers: "Permits, border-area restrictions, road conditions",
        verified: "2026-08-29",
        type: "District administration information",
      },
      {
        organization: "KMVN (Kumaon Mandal Vikas Nigam)",
        covers: "2026 package pricing references",
        verified: "2026-08-29",
        type: "Official tourism corporation package",
      },
    ],
  },

  "shrikhand-mahadev": {
    id: "shrikhand-mahadev",
    name: "Shrikhand Mahadev",
    shortName: "Shrikhand Mahadev",
    region: "Kullu, Himachal Pradesh",
    state: "Himachal Pradesh",
    country: "India",
    image: `${BASE}images/1aebea2f-ed66-4843-80ef-f381f65cfe50.webp`,
    tagline: "One of the most demanding high-altitude treks in the Himalayas",

    elevation: { value: 5227, unit: "m", confidence: "approximate" },

    overview:
      "Shrikhand Mahadev is reached by a long, physically demanding trek through the Kullu Himalayas, traditionally via Jaon or Singhad, climbing through forest, alpine meadow and glacier terrain to a high rock formation.",

    significance:
      "Traditionally regarded as a sacred site associated with Shiva by pilgrims undertaking the yatra.",

    route: {
      startPoint: "Jaon / Singhad, Kullu",
      endpoint: "Shrikhand Mahadev peak area",
      distance: "Approximately 32–35 km one-way (route measurements vary by source)",
      duration: "Typically 4–5 days round trip when open (CURRENTLY REPORTED)",
      difficulty: "Very high — among the more demanding treks covered on this site",
    },

    access: [
      "Trek only from Jaon/Singhad; no motorable road beyond the base",
      "Route passes Thachdu, Kunsa/Kali Ghati, Bhim Dwar, Parvati Bagh and Nain Sarovar",
    ],

    permits: [
      "Registration historically required with local administration when the yatra is open",
    ],

    accommodation: [
      "Basic camps at designated halts along the route when the yatra is operational",
    ],

    connectivity: [
      "Effectively unavailable for most of the route",
    ],

    medical: [
      "High-altitude sickness risk is significant given the elevation gain",
      "Historically, medical checkpoints have operated at key halts when the yatra is open",
    ],

    emergency: [
      "Rescue conditions are difficult on this route — verify current local emergency contacts before departure",
    ],

    cost: {
      min: null,
      max: null,
      currency: "INR",
      note: "No reliable current package pricing available while the yatra is suspended.",
    },

    season: {
      bestMonths: ["July", "August"],
      avoidMonths: ["September", "October", "November", "December", "January", "February", "March", "April", "May", "June"],
      note: "Even in a typical year the operational window is narrow and weather-dependent.",
    },

    safety: [
      "Steep slopes, loose soil and slippery trail sections",
      "Stream crossings that can turn hazardous quickly",
      "Landslide, rockfall and flash-flood risk",
      "Difficult rescue access along much of the route",
    ],

    packing: [
      "Full high-altitude trekking kit",
      "Personal medication and first aid",
      "Reliable rain protection",
    ],

    model: null,

    status: {
      label: "Suspended — unsafe route conditions",
      type: "suspended",
      lastVerified: "2026-08-29",
      source: "Kullu district administration notice",
      notes:
        "The 2026 yatra was suspended due to steep slopes, loose soil, slippery trails, landslides, rockfall and flash-flood/debris risk, with difficult rescue conditions. Do not assume reopening without an authoritative current notice.",
    },

    sources: [
      {
        organization: "Kullu District Administration",
        covers: "Route safety status and suspension notice",
        verified: "2026-08-29",
        type: "Official district notice",
      },
    ],
  },

  "kinnaur-kailash": {
    id: "kinnaur-kailash",
    name: "Kinnaur Kailash",
    shortName: "Kinner Kailash",
    region: "Kinnaur, Himachal Pradesh",
    state: "Himachal Pradesh",
    country: "India",
    image: `${BASE}images/eb384ae0-c0bb-4def-b511-190079473d48.webp`,
    tagline: "Home of the sacred Shivling rock formation above Reckong Peo",

    elevation: { value: 6050, unit: "m", confidence: "approximate" },

    overview:
      "Kinnaur Kailash rises above Reckong Peo in the Kinnaur valley and is known for a striking natural rock formation regarded by pilgrims as a Shivling. The trek climbs through forest and high alpine terrain.",

    significance:
      "Traditionally regarded as sacred by local Kinnauri communities and visiting pilgrims, centered on the Shivling rock formation.",

    route: {
      startPoint: "Tangling / near Reckong Peo, Kinnaur",
      endpoint: "Kinnaur Kailash ridge / Shivling viewpoint",
      distance: "Multi-day trek through forest and alpine terrain",
      duration: "Typically 4–5 days round trip when open (CURRENTLY REPORTED)",
      difficulty: "High — sustained high-altitude trekking",
    },

    access: [
      "Trek begins from villages near Reckong Peo; no motorable access beyond the trailhead",
    ],

    permits: [
      "Registration with local administration when the yatra is officially open",
    ],

    accommodation: [
      "Basic camps at trail halts when the yatra is operational",
    ],

    connectivity: [
      "Very limited beyond Reckong Peo",
    ],

    medical: [
      "Historically, medical checks have applied when the yatra is officially open",
    ],

    emergency: [
      "Verify current local emergency contacts before departure",
    ],

    cost: {
      min: null,
      max: null,
      currency: "INR",
      note: "No reliable current package pricing available while the yatra is suspended.",
    },

    season: {
      bestMonths: ["July", "August", "September"],
      avoidMonths: ["October", "November", "December", "January", "February", "March", "April", "May", "June"],
      note: "Narrow operational window even in a typical year.",
    },

    safety: [
      "Glacier crossings and unstable boulder fields",
      "Rockfall and landslide-prone sections",
      "Debris and blocked/dangerous trail segments reported in the current notice",
    ],

    packing: [
      "Full high-altitude trekking kit",
      "Sturdy trekking poles for glacier/boulder sections",
      "Personal medication and first aid",
    ],

    model: null,

    status: {
      label: "Postponed / suspended until further orders",
      type: "suspended",
      lastVerified: "2026-08-29",
      source: "Kinnaur district administration notice",
      notes:
        "The latest official 2026 notice postpones/suspends the yatra because of dangerous route conditions — glaciers, unstable boulders, rockfall, landslides, debris and blocked sections. Do not assume normal operation.",
    },

    sources: [
      {
        organization: "Kinnaur District Administration",
        covers: "Route safety status and suspension notice",
        verified: "2026-08-29",
        type: "Official district notice",
      },
    ],
  },

  "manimahesh-kailash": {
    id: "manimahesh-kailash",
    name: "Manimahesh Kailash",
    shortName: "Manimahesh Kailash",
    region: "Chamba, Himachal Pradesh",
    state: "Himachal Pradesh",
    country: "India",
    image: `${BASE}images/panorama-bfce809f-706a-4f54-af98-49e4d6cae831.png`,
    tagline: "The annual yatra to the sacred lake beneath Manimahesh Kailash",

    elevation: { value: 5653, unit: "m", confidence: "approximate" },

    overview:
      "Manimahesh Kailash overlooks Manimahesh Lake in the Bharmour region of Chamba district. The lake is approximately 26 km from Bharmour, reached via the roadhead at Hadsar and a trek through Dhancho.",

    significance:
      "Traditionally regarded as sacred, with an annual yatra to Manimahesh Lake held on officially notified dates each year.",

    route: {
      startPoint: "Hadsar (roadhead), Bharmour, Chamba",
      endpoint: "Manimahesh Lake",
      distance: "Manimahesh Lake is approximately 26 km from Bharmour; the trek from Hadsar to the lake is approximately 13 km",
      duration: "Typically a 2–3 day round trek during the official yatra window",
      difficulty: "Moderate to high — a well-established but steep trail with a key halt at Dhancho",
    },

    access: [
      "Road journey to Bharmour, then to the Hadsar roadhead",
      "Trek from Hadsar to Manimahesh Lake via Dhancho, approximately 13 km",
    ],

    permits: [
      "Mandatory registration for the official yatra period",
      "Medical checking required as part of registration",
    ],

    accommodation: [
      "Seasonal camps and langars along the route during the official yatra window",
    ],

    connectivity: [
      "Limited beyond Bharmour, largely unavailable on the trek itself",
    ],

    medical: [
      "Mandatory medical checking as part of official registration",
      "Basic medical points historically operate at Hadsar and Dhancho during the yatra window",
    ],

    emergency: [
      "Follow instructions of yatra administration and registered checkpoints",
    ],

    cost: {
      min: null,
      max: null,
      currency: "INR",
      note: "No official package pricing published in the current research snapshot — budget for transport to Bharmour/Hadsar, basic camp stays and food separately.",
    },

    season: {
      bestMonths: ["September"],
      avoidMonths: ["November", "December", "January", "February", "March", "April"],
      note: "The 2026 official yatra dates are 4–19 September 2026.",
    },

    safety: [
      "Elevation gain on the Hadsar–Dhancho–lake stretch requires steady pacing",
      "Weather at the lake can shift quickly even during the yatra window",
      "Stay within officially marked route sections",
    ],

    packing: [
      "Warm layered clothing, including for cold nights at Dhancho",
      "Valid ID and registration/medical documents",
      "Sturdy trekking footwear",
    ],

    model: null,

    status: {
      label: "Official 2026 yatra: 4–19 September 2026",
      type: "open",
      lastVerified: "2026-08-29",
      source: "Chamba district administration",
      notes: "Registration is mandatory. Dates and arrangements are set annually and can be revised by district authorities.",
    },

    sources: [
      {
        organization: "Chamba District Administration",
        covers: "Official yatra dates, registration and route information",
        verified: "2026-08-29",
        type: "Official district notice",
      },
    ],
  },
};

export const destinationList = Object.values(destinations);

export const getDestination = (id) => destinations[id] || null;

// Homepage panoramic hero image — must remain this exact file.
export const heroImage = `${BASE}images/0db44277-5b9b-4617-9a13-0b1ba8492cb0.webp`;
