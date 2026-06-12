import type { Dictionary } from "./types";

const dictionary: Dictionary = {
  meta: {
    title: "Build Pa'l Norte — Hackathon de tecnología para jóvenes",
    description:
      "Un hackathon de 24 horas en Matamoros para jóvenes. Programa, crea y compite — únete a la lista de espera de Build Pa'l Norte.",
  },
  nav: {
    about: "ACERCA",
    whyJoin: "VENTAJAS",
    howItWorks: "PROCESO",
    faq: "FAQ",
  },
  hero: {
    tagline: "un hackathon de tecnología de 24h para jóvenes",
    location: "Matamoros, Tamaulipas",
    waitlistLabel: "en la lista de espera",
    registerNow: "REGÍSTRATE AHORA",
  },
  about: {
    label: "LA MISIÓN",
    title: "Programa. Crea. Compite.",
    accentWord: "Compite.",
    subtitle:
      "Un hackathon de 24 horas en Matamoros donde jóvenes convierten ideas locas en prototipos que funcionan.",
    whatIsIt: "¿QUÉ ES?",
    whatIsItBody:
      "Build Pa'l Norte es un hackathon de tecnología lleno de energía en Matamoros, hecho para estudiantes y creadores jóvenes. En 24 horas, los equipos diseñan, programan y lanzan proyectos que resuelven problemas reales — con mentores, talleres y una comunidad que te apoya.",
    whoIsItFor: "¿PARA QUIÉN ES?",
    whoIsItForBody:
      "Ya sea tu primera línea de código o tu décimo hackathon, aquí tienes lugar. Desarrolladores, diseñadores, makers y soñadores — si tienes curiosidad y ganas de construir, apúntate a la lista de espera.",
    stats: [
      { value: "24H", label: "PARA CREAR" },
      { value: "0", label: "EN LA LISTA", source: "waitlist" },
      { value: "MATAMOROS", label: "TAMAULIPAS", compact: true },
    ],
  },
  highlights: {
    label: "POR QUÉ UNIRTE",
    title: "Más Que un Fin de Semana",
    accentWord: "Semana",
    subtitle:
      "Todo lo que necesitas para pasar de la idea al demo — y pasarla increíble en el camino.",
    featuredCta: "EMPIEZA A CONSTRUIR",
    learnMoreCta: "SABER MÁS",
    items: [
      {
        id: "ship",
        tag: "CONSTRUYE",
        title: "Lanza Algo Real",
        description:
          "De la hoja en blanco al demo en vivo. Apps, hardware, juegos, herramientas — si lo puedes imaginar, lo puedes construir.",
      },
      {
        id: "crew",
        tag: "TU TRIBU",
        title: "Encuentra Tu Equipo",
        description:
          "Ven solo o trae amigos. Te ayudamos a encontrar compañeros que complementen tus habilidades y tu energía.",
      },
      {
        id: "learn",
        tag: "SUBE DE NIVEL",
        title: "Aprende de Expertos",
        description:
          "Mentores de la industria dan talleres de diseño, APIs, pitch y más. Haz preguntas, resuelve bloqueos y sube de nivel.",
      },
      {
        id: "win",
        tag: "DESTACA",
        title: "Presenta y Destaca",
        description:
          "Muestra tu proyecto ante los jueces y la audiencia. Obtén reconocimiento por creatividad, ejecución e impacto — y el derecho a presumir.",
      },
    ],
  },
  howItWorks: {
    label: "EL FLUJO",
    title: "Cómo Funciona",
    accentWord: "Funciona",
    subtitle: "Cuatro pasos de curioso a competidor. Así de simple.",
    steps: [
      {
        step: "01",
        title: "Únete a la Lista de Espera",
        description:
          "Regístrate con tu nombre, correo y número de teléfono. Te avisamos en cuanto abra el registro y compartimos los detalles del evento.",
      },
      {
        step: "02",
        title: "Forma Tu Equipo",
        description:
          "Regístrate solo o con hasta 4 compañeros. Hacemos matching de equipos para quien venga sin crew.",
      },
      {
        step: "03",
        title: "Construye a Toda Máquina",
        description:
          "24 horas de hacking, talleres, comida y cafeína. Los mentores recorren el espacio para ayudarte a desbloquearte.",
      },
      {
        step: "04",
        title: "Demo y Celebración",
        description:
          "Presenta tu proyecto ante jueces y público. Los mejores proyectos se reconocen, aplausos garantizados y nuevos amigos hechos.",
      },
    ],
  },
  faq: {
    label: "PREGUNTAS",
    title: "¿Tienes Dudas?",
    accentWord: "Dudas?",
    subtitle:
      "Tenemos respuestas. ¿Aún con dudas? Escríbenos a hello@buildpalnorte.com",
    items: [
      {
        question: "¿Hay límite de edad?",
        answer:
          "No. Build Pa'l Norte está abierto para todos — todas las edades son bienvenidas. Ya seas estudiante, profesional o simplemente tengas curiosidad por la tecnología, puedes unirte.",
      },
      {
        question: "¿Necesito experiencia para unirme?",
        answer:
          "Para nada. Los que es su primera vez son bienvenidos. Lo que importa es la curiosidad y las ganas de aprender. Habrá mentores para ayudarte.",
      },
      {
        question: "¿Es gratis?",
        answer:
          "Sí — la participación es gratuita. Comida, swag y buena vibra incluidos. Solo trae tu laptop, cargador e ideas.",
      },
      {
        question: "¿Puedo participar solo?",
        answer:
          "Claro. Los hackers solitarios son bienvenidos, y te ayudamos a encontrar equipo durante el registro si prefieres colaborar.",
      },
      {
        question: "¿Qué debería construir?",
        answer:
          "¡Lo que sea! Apps web, móviles, hardware, juegos, herramientas de IA, proyectos de impacto social — si lo construyes durante el evento, cuenta.",
      },
      {
        question: "¿Cuándo y dónde es el evento?",
        answer:
          "Build Pa'l Norte se lleva a cabo en Matamoros, Tamaulipas — un hackathon de 24 horas. Las fechas exactas se anunciarán pronto. Únete a la lista de espera para ser el primero en saber.",
      },
    ],
  },
  cta: {
    label: "NO TE LO PIERDAS",
    title: "¿Listo para construir pa'l norte?",
    subtitle:
      "Los lugares se van rápido. Deja tu nombre en la lista de espera y te contactamos cuando abran las puertas.",
    button: "ÚNETE A LA LISTA",
    urgencyBadge: "LUGARES SE AGOTAN",
    socialProof: "Constructores ya registrados — únete",
    footnote: "Gratis · Sin tarjeta de crédito · Solo trae tus ideas",
  },
  perks: {
    label: "LO QUE INCLUYE",
    title: "Todo Incluido",
    accentWord: "Incluido",
    subtitle: "Cero costo. Máximo valor. Llega y nosotros nos encargamos del resto.",
    featuredNote: "INCLUIDO PARA TODOS LOS PARTICIPANTES",
    bottomCallout: "GRATIS · TODO INCLUIDO · SIN COMPROMISOS",
    items: [
      {
        id: "food",
        title: "Comida y Bebidas",
        body: "Combustible para 24 horas. Comidas, snacks y café — todo incluido. Solo trae el apetito.",
      },
      {
        id: "wifi",
        title: "WiFi de Alta Velocidad",
        body: "Tenemos la infraestructura. Tú enfócate en construir, no en problemas de conexión.",
      },
      {
        id: "mentors",
        title: "Mentores Expertos",
        body: "Constructores de la industria recorren el espacio listos para ayudarte con diseño, código o pitch.",
      },
      {
        id: "workshops",
        title: "Talleres en Vivo",
        body: "Sesiones prácticas con herramientas reales — desde APIs hasta pensamiento de producto.",
      },
      {
        id: "teams",
        title: "Formación de Equipos",
        body: "¿Vienes solo? Te conectamos con compañeros que complementen tus habilidades.",
      },
      {
        id: "demo",
        title: "Día de Demos",
        body: "Presenta tu proyecto ante una audiencia. Recibe feedback, reconocimiento y aplausos.",
      },
      {
        id: "community",
        title: "Comunidad",
        body: "Sal con amistades reales, colaboradores y una red que dura más allá del evento.",
      },
      {
        id: "swag",
        title: "Swag",
        body: "Merch exclusivo de Build Pa'l Norte para cada participante. Presume lo que construiste.",
      },
    ],
  },
  ticker: {
    items: [
      "24 HORAS PARA CREAR",
      "GRATIS",
      "MENTORES EXPERTOS",
      "MATAMOROS 2026",
      "COMIDA INCLUIDA",
      "FORMA TU EQUIPO",
      "DÍA DE DEMOS",
      "TODOS LOS NIVELES",
      "TALLERES EN VIVO",
      "CONSTRUYE ALGO REAL",
      "SWAG PARA TODOS",
      "COMUNIDAD PRIMERO",
    ],
  },
  footer: {
    terms: "TÉRMINOS DE SERVICIO",
    privacy: "POLÍTICA DE PRIVACIDAD",
    contact: "CONTACTO",
    sponsor: "SER PATROCINADOR",
    copyright: "Hecho por jóvenes, para jóvenes.",
    eventHeading: "EVENTO",
    legalHeading: "LEGAL",
    rightsReserved: "Todos los derechos reservados.",
    locationTag: "MATAMOROS · TAMAULIPAS · 2026",
  },
  waitlist: {
    title: "REGISTRO DE PARTICIPANTES",
    subtitle: "Regístrate para participar en Build Pa'l Norte.",
    name: "NOMBRE",
    email: "CORREO",
    phone: "TELÉFONO",
    age: "EDAD",
    sex: "SEXO",
    school: "ESCUELA",
    github: "GITHUB",
    interests: "INTERESES",
    optional: "opcional",
    namePlaceholder: "Tu nombre",
    phonePlaceholder: "+52 868 123 4567",
    agePlaceholder: "18",
    schoolPlaceholder: "Tu escuela o universidad",
    githubPlaceholder: "usuario o URL de perfil",
    interestsPlaceholder: "Web, IA, diseño, hardware…",
    sexOptions: {
      male: "Masculino",
      female: "Femenino",
      other: "Otro",
      preferNotToSay: "Prefiero no decir",
    },
    sexPlaceholder: "Selecciona",
    join: "REGISTRARME",
    joining: "REGISTRANDO...",
    close: "CERRAR",
    successTitle: "¡Registro completado!",
    successDefault: "Te contactaremos pronto con los detalles del evento.",
    successAlready: "Ya estás registrado — estaremos en contacto.",
    errors: {
      invalidName: "Por favor ingresa tu nombre.",
      invalidEmail: "Por favor ingresa un correo válido.",
      invalidPhone: "Por favor ingresa un número de teléfono válido.",
      invalidAge: "Debes tener 18 años o más para registrarte.",
      invalidSex: "Por favor selecciona tu sexo.",
      invalidGithub: "Por favor ingresa un usuario o URL de GitHub válido.",
      firestoreSetup:
        "Firestore aún no está configurado. Crea una base de datos en Firebase Console primero.",
      unavailable:
        "No se pudo conectar con Firestore. Revisa tu conexión e intenta de nuevo.",
      generic: "Algo salió mal. Por favor intenta de nuevo.",
    },
  },
  sponsor: {
    title: "REGISTRO DE PATROCINADORES",
    subtitle: "Únete como patrocinador y apoya a jóvenes constructores en Matamoros.",
    name: "NOMBRE",
    email: "CORREO",
    phone: "TELÉFONO",
    company: "EMPRESA",
    sponsorship: "¿QUÉ QUIERES PATROCINAR?",
    problem: "¿QUÉ PROBLEMA QUIERES VER RESUELTO?",
    workshop: "¿QUIERES DAR UN TALLER?",
    namePlaceholder: "Tu nombre",
    phonePlaceholder: "+52 868 123 4567",
    companyPlaceholder: "Empresa u organización",
    sponsorshipPlaceholder: "Efectivo, premios, swag, comida, créditos en la nube…",
    problemPlaceholder:
      "¿Qué reto o tema te gustaría que los participantes aborden?",
    workshopOptions: {
      yes: "Sí",
      no: "No",
    },
    workshopPlaceholder: "Selecciona",
    submit: "ENVIAR",
    submitting: "ENVIANDO...",
    close: "CERRAR",
    successTitle: "¡Gracias por tu interés!",
    successDefault: "Te contactaremos para hablar de los detalles del patrocinio.",
    successAlready: "Ya tenemos tu información — estaremos en contacto.",
    errors: {
      invalidName: "Por favor ingresa tu nombre.",
      invalidEmail: "Por favor ingresa un correo válido.",
      invalidPhone: "Por favor ingresa un número de teléfono válido.",
      invalidCompany: "Por favor ingresa el nombre de tu empresa.",
      invalidSponsorship: "Por favor describe qué te gustaría patrocinar.",
      invalidProblem: "Por favor describe el problema que quieres ver resuelto.",
      invalidWorkshop: "Por favor indica si quieres dar un taller.",
      firestoreSetup:
        "Firestore aún no está configurado. Crea una base de datos en Firebase Console primero.",
      unavailable:
        "No se pudo conectar con Firestore. Revisa tu conexión e intenta de nuevo.",
      generic: "Algo salió mal. Por favor intenta de nuevo.",
    },
  },
  legal: {
    back: "← VOLVER",
    label: "LEGAL",
    lastUpdated: "5 de junio de 2026",
    terms: {
      metaTitle: "Términos de Servicio — Build Pa'l Norte",
      metaDescription:
        "Términos de servicio para participantes del hackathon Build Pa'l Norte.",
      title: "Términos de Servicio",
      sections: [
        {
          title: "1. Acuerdo",
          blocks: [
            {
              type: "paragraph",
              text: "Al unirte a la lista de espera de Build Pa'l Norte, registrarte al evento o participar en actividades relacionadas, aceptas estos Términos de Servicio. Si no estás de acuerdo, no uses nuestros servicios ni asistas al evento.",
            },
          ],
        },
        {
          title: "2. Elegibilidad",
          blocks: [
            {
              type: "paragraph",
              text: "Build Pa'l Norte está abierto a participantes de todas las edades. Los menores de 18 deben contar con permiso de un padre o tutor legal. Los organizadores se reservan el derecho de negar o revocar la participación por violaciones a estos términos o al código de conducta.",
            },
          ],
        },
        {
          title: "3. Registro y Lista de Espera",
          blocks: [
            {
              type: "paragraph",
              text: "Enviar tu nombre, correo y número de teléfono a la lista de espera no garantiza un lugar en el evento. Los detalles de registro, incluyendo fechas, sede y capacidad, se comunicarán por separado. Aceptas proporcionar información veraz y mantener tus datos de contacto actualizados.",
            },
          ],
        },
        {
          title: "4. Código de Conducta",
          blocks: [
            {
              type: "paragraph",
              text: "Se espera que todos los participantes, mentores, voluntarios y organizadores se traten con respeto. No se tolerará acoso, discriminación, discurso de odio, intimidación ni conducta disruptiva de ningún tipo, y puede resultar en expulsión inmediata del evento.",
            },
            {
              type: "paragraph",
              text: "Estamos comprometidos con un ambiente inclusivo donde todos — sin importar su origen, nivel de experiencia, género o identidad — se sientan bienvenidos a aprender y construir.",
            },
          ],
        },
        {
          title: "5. Propiedad Intelectual",
          blocks: [
            {
              type: "paragraph",
              text: "Conservas la propiedad de cualquier código, diseño y proyecto que crees durante el hackathon. Al participar en sesiones de demo o enviar proyectos a evaluación, otorgas a Build Pa'l Norte una licencia no exclusiva y libre de regalías para mostrar, fotografiar, grabar y compartir tu proyecto con fines promocionales y educativos.",
            },
          ],
        },
        {
          title: "6. Responsabilidad y Asunción de Riesgo",
          blocks: [
            {
              type: "paragraph",
              text: "La participación es bajo tu propio riesgo. Build Pa'l Norte y sus organizadores, patrocinadores y socios no son responsables por lesiones, pérdidas, robos o daños a propiedad personal que puedan ocurrir durante el evento. Eres responsable de tu propio equipo, incluyendo laptops y periféricos.",
            },
          ],
        },
        {
          title: "7. Fotografía y Medios",
          blocks: [
            {
              type: "paragraph",
              text: "El evento puede ser fotografiado y grabado. Al asistir, consientes el uso de tu imagen en fotos, videos y materiales promocionales relacionados con Build Pa'l Norte. Si prefieres no ser fotografiado, avisa a un organizador en el sitio.",
            },
          ],
        },
        {
          title: "8. Cambios y Cancelación",
          blocks: [
            {
              type: "paragraph",
              text: "Nos reservamos el derecho de modificar detalles del evento, horarios, sedes o estos términos en cualquier momento. En caso de cancelación o cambios significativos, haremos esfuerzos razonables por notificar a los participantes registrados al correo proporcionado al registrarse.",
            },
          ],
        },
        {
          title: "9. Contacto",
          blocks: [
            {
              type: "paragraph",
              text: "¿Preguntas sobre estos términos? Escríbenos a {email}.",
            },
          ],
        },
      ],
    },
    privacy: {
      metaTitle: "Política de Privacidad — Build Pa'l Norte",
      metaDescription:
        "Política de privacidad para la lista de espera y el evento Build Pa'l Norte.",
      title: "Política de Privacidad",
      sections: [
        {
          title: "1. Resumen",
          blocks: [
            {
              type: "paragraph",
              text: 'Build Pa\'l Norte ("nosotros") respeta tu privacidad. Esta política explica qué información recopilamos cuando te unes a nuestra lista de espera o participas en el evento, y cómo la usamos.',
            },
          ],
        },
        {
          title: "2. Información que Recopilamos",
          blocks: [
            {
              type: "paragraph",
              text: "Cuando te registras en la lista de espera, recopilamos:",
            },
            {
              type: "list",
              items: [
                "Tu nombre",
                "Tu correo electrónico",
                "Tu número de teléfono",
                "La fecha y hora de tu registro",
              ],
            },
            {
              type: "paragraph",
              text: "También podemos recopilar información adicional durante el registro, como detalles del equipo, preferencias alimentarias o contacto de emergencia, que se informará al momento de recopilarla.",
            },
          ],
        },
        {
          title: "3. Cómo Usamos Tu Información",
          blocks: [
            {
              type: "paragraph",
              text: "Usamos la información que recopilamos para:",
            },
            {
              type: "list",
              items: [
                "Notificarte cuando abra el registro",
                "Enviar actualizaciones del evento, horarios y anuncios importantes",
                "Gestionar tu participación y asignación de equipos",
                "Mejorar futuras ediciones del hackathon",
              ],
            },
            {
              type: "paragraph",
              text: "No venderemos tu información personal a terceros.",
            },
          ],
        },
        {
          title: "4. Almacenamiento de Datos",
          blocks: [
            {
              type: "paragraph",
              text: "Los datos de la lista de espera se almacenan de forma segura usando Firebase/Firestore. Tomamos medidas razonables para proteger tu información, pero ningún método de almacenamiento electrónico es 100% seguro.",
            },
          ],
        },
        {
          title: "5. Retención de Datos",
          blocks: [
            {
              type: "paragraph",
              text: "Conservamos tu información el tiempo necesario para operar el evento y comunicarnos con participantes. Si deseas que eliminemos tus datos de la lista de espera, contáctanos y los borraremos en un plazo razonable.",
            },
          ],
        },
        {
          title: "6. Tus Derechos",
          blocks: [
            {
              type: "paragraph",
              text: "Puedes solicitar acceso, corrección o eliminación de tus datos personales en cualquier momento escribiendo a {email}. Responderemos solicitudes legítimas en un plazo de 30 días.",
            },
          ],
        },
        {
          title: "7. Cookies y Analíticas",
          blocks: [
            {
              type: "paragraph",
              text: "Esta página puede usar analíticas básicas para entender el tráfico y mejorar la experiencia. Cualquier herramienta de analíticas se configurará para minimizar la recopilación de datos personales.",
            },
          ],
        },
        {
          title: "8. Cambios a Esta Política",
          blocks: [
            {
              type: "paragraph",
              text: 'Podemos actualizar esta política de privacidad de vez en cuando. La fecha de "Última actualización" al inicio de esta página reflejará cualquier cambio. El uso continuado de nuestros servicios después de los cambios constituye aceptación de la política actualizada.',
            },
          ],
        },
        {
          title: "9. Contacto",
          blocks: [
            {
              type: "paragraph",
              text: "¿Preguntas sobre privacidad? Escríbenos a {email}.",
            },
          ],
        },
      ],
    },
  },
};

export default dictionary;
