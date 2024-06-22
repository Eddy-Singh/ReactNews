import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: {
        id: null,
        name: "Yahoo Entertainment",
      },
      author: "Mat Smith",
      title:
        "The Morning After: The biggest announcements from Nintendo Direct",
      description:
        "Nintendo sidestepped sharing the spotlight with all the other gaming companies at Summer Game Fest last week, promising its own Direct later in June. And that happened yesterday, teasing a lot of new games with Nintendo favorites. Mario games, yes. Zelda game…",
      url: "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_34b6b24a-08dd-4ee2-ad85-a3c15258d929",
      urlToImage:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frealitypaper.com%2Fwp-content%2Fuploads%2F2020%2F08%2FCommon-Types-of-News-to-Explore.jpg&f=1&nofb=1&ipt=5f46f041897df3a9b4bed0da7f07810fe5db2c6754970ff28f863db3fa4a5fda&ipo=images",
      publishedAt: "2024-06-19T11:15:47Z",
      content:
        "If you click 'Accept all', we and our partners, including 237 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]",
    },
    {
      source: {
        id: null,
        name: "MacRumors",
      },
      author: "Tim Hardwick",
      title: "Select Multiple Items Faster With This Simple iPhone Gesture",
      description:
        "Your iPhone has multiple touch and gesture capabilities that can enhance how you interact with apps. Some, like pinch and zoom, are well known enough to be considered second nature, but others are less obvious, like the one we're about to explain.\n\n\n\n\n\n\n\nTwo-…",
      url: "https://www.macrumors.com/how-to/select-multiple-items-faster-simple-iphone-gesture/",
      urlToImage:
        "https://images.macrumors.com/t/rwGtIYg7iXPI2wFXwPHa3M-0nDw=/1920x/article-new/2024/06/multiple-select-gesture.jpg",
      publishedAt: "2024-06-19T10:40:49Z",
      content:
        "Your iPhone has multiple touch and gesture capabilities that can enhance how you interact with apps. Some, like pinch and zoom, are well known enough to be considered second nature, but others are le… [+1143 chars]",
    },
    {
      source: {
        id: null,
        name: "MacRumors",
      },
      author: "Mitchel Broussard",
      title:
        "Apple Pencil Pro Drops to $119 on Amazon Alongside Record Low Prices for M4 iPad Pro",
      description:
        "The Apple Pencil Pro has dropped to a new record low price today on Amazon, and we're also tracking a collection of discounts on the M4 iPad Pro.\n\n\n\nApple Pencil Pro\n\nNote: MacRumors is an affiliate partner with Amazon. When you click a link and make a purcha…",
      url: "https://www.macrumors.com/2024/06/19/apple-pencil-pro-drops-to-119/",
      urlToImage:
        "https://images.macrumors.com/t/Q4sThli8OSjvX7sGkYaaQnSDvfU=/2250x/article-new/2024/06/apple-pencil-pro-orange.jpg",
      publishedAt: "2024-06-19T15:48:33Z",
      content:
        "The Apple Pencil Pro has dropped to a new record low price today on Amazon, and we're also tracking a collection of discounts on the M4 iPad Pro.\r\nApple Pencil Pro\r\nNote: MacRumors is an affiliate pa… [+1469 chars]",
    },
    {
      source: {
        id: null,
        name: "MacRumors",
      },
      author: "Joe Rossignol",
      title:
        "iOS 18 Allows Third-Party Apps to Offer Spatial Video Recording on iPhone 15 Pro",
      description:
        "iPhone 15 Pro and iPhone 15 Pro Max models running iOS 17.2 or later can record spatial video with 3D depth for playback on Apple's Vision Pro headset. While spatial video recording has been limited to Apple's built-in Camera app until this point, third-party…",
      url: "https://www.macrumors.com/2024/06/19/ios-18-spatial-video-recording-third-party-apps/",
      urlToImage:
        "https://images.macrumors.com/t/XqGs3sDlGXYOWDtQq26poPg23ZE=/1600x/article-new/2023/09/spatial-video-iphone-15-pro.jpg",
      publishedAt: "2024-06-19T13:40:55Z",
      content:
        "iPhone 15 Pro and iPhone 15 Pro Max models running iOS 17.2 or later can record spatial video with 3D depth for playback on Apple's Vision Pro headset. While spatial video recording has been limited … [+934 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "Jordan Hart",
      title: "Tim Cook's 5 tips on how to run a company and manage your team",
      description:
        "Tim Cook's leadership at Apple since 2011 offers valuable lessons for managers and CEOs on how to run a company. Here are five of his tips.",
      url: "https://www.businessinsider.com/apple-ceo-tim-cook-five-management-tips-2024-6",
      urlToImage:
        "https://i.insider.com/666b3e4bed9a404d829d9229?width=1200&format=jpeg",
      publishedAt: "2024-06-19T09:32:01Z",
      content:
        "Tim Cook has lead Apple to major milestones.Justin Sullivan/Getty\r\n<ul><li>Apple CEO Tim Cook  has been at the helm since 2011.</li><li>Cook's tenure has produced valuable lessons that managers and e… [+3747 chars]",
    },
    {
      source: {
        id: null,
        name: "Harvard Business Review",
      },
      author: null,
      title: "Why Project-Based Work Fails — and How to Get It Right",
      description:
        "If your team is prioritizing project-based work, this episode is for you.",
      url: "https://hbr.org/podcast/2024/06/why-project-based-work-fails-and-how-to-get-it-right",
      urlToImage:
        "https://hbr.org/resources/images/article_assets/2023/05/wide-hbr-on-strategy.png",
      publishedAt: "2024-06-19T11:22:00Z",
      content:
        "HANNAH BATES: Welcome to HBR On Strategy, case studies and conversations with the world’s top business and management experts, hand-selected to help you unlock new ways of doing business.\r\nCompanies … [+23542 chars]",
    },
    {
      source: {
        id: null,
        name: "ReadWrite",
      },
      author: "Sophie Atkinson",
      title:
        "Apple halts work on Vision Pro, turns focus to releasing a cheaper Vision headset next year",
      description:
        "Apple is reportedly stopping work on its next Vision Pro headset as analysts and supply chain partners have flagged slowing… Continue reading Apple halts work on Vision Pro, turns focus to releasing a cheaper Vision headset next year\nThe post Apple halts work…",
      url: "https://readwrite.com/apple-halts-work-on-vision-pro-turns-focus-to-releasing-a-cheaper-vision-headset-next-year/",
      urlToImage:
        "https://readwrite.com/wp-content/uploads/2024/06/Apple-Vision-Pro-scaled.jpg",
      publishedAt: "2024-06-19T14:57:10Z",
      content:
        "Apple is reportedly stopping work on its next Vision Pro headset as analysts and supply chain partners have flagged slowing sales of the current device.\r\nAccording to The Information, the technology … [+1555 chars]",
    },
    {
      source: {
        id: null,
        name: "ReadWrite",
      },
      author: "Alvin Hemedez",
      title:
        "Could JASMY Reach $1 in the Coming Weeks as the Crypto Market Turns Bullish?",
      description:
        "JasmyCoin’s price surged recently, hitting $0.0388 on Monday, up 18.5% from Friday’s low. Will it reach $1 this July, almost… Continue reading Could JASMY Reach $1 in the Coming Weeks as the Crypto Market Turns Bullish?\nThe post Could JASMY Reach $1 in the Co…",
      url: "https://readwrite.com/could-jasmy-reach-1-in-the-coming-weeks-as-the-crypto-market-turns-bullish/",
      urlToImage:
        "https://readwrite.com/wp-content/uploads/2024/06/jasmycoin-price-prediction.jpg",
      publishedAt: "2024-06-19T12:33:03Z",
      content:
        "JasmyCoin’s price surged recently, hitting $0.0388 on Monday, up 18.5% from Friday’s low. Will it reach $1 this July, almost 400% from its all-time high of $4.99?\r\nToday, we look at JasmyCoin and pro… [+3555 chars]",
    },
    {
      source: {
        id: null,
        name: "ReadWrite",
      },
      author: "Sophie Atkinson",
      title:
        "Nvidia pushes Microsoft aside to become world’s most valuable company",
      description:
        "Microsoft has been dethroned from being the world’s most valuable company, as artificial intelligence-focused chipmaker Nvidia officially takes the top… Continue reading Nvidia pushes Microsoft aside to become world’s most valuable company\nThe post Nvidia pus…",
      url: "https://readwrite.com/nvidia-pushes-microsoft-aside-to-become-worlds-most-valuable-company/",
      urlToImage:
        "https://readwrite.com/wp-content/uploads/2024/06/ktlR0TzIQNe8vIOKLYD2BQ.jpeg",
      publishedAt: "2024-06-19T11:42:34Z",
      content:
        "Microsoft has been dethroned from being the worlds most valuable company, as artificial intelligence-focused chipmaker Nvidia officially takes the top spot.\r\nThe switch happened after Nvidias share p… [+2220 chars]",
    },
    {
      source: {
        id: null,
        name: "Xataka.com",
      },
      author: "Javier Lacort",
      title:
        "Apple pisa el freno con las Vision Pro para acelerar hacia un modelo más barato, según 'The Information'. Es justo lo que necesitaba",
      description:
        "Apple ha pausado el desarrollo de las Vision Pro 2 para centrarse en una versión más sencilla y barata, según The Information. Puede parecer un síntoma de debilidad (y puede serlo), pero también una clave para impulsar su adopción masiva.\n\nPor qué es importan…",
      url: "https://www.xataka.com/realidad-virtual-aumentada/apple-pisa-freno-vision-pro-para-acelerar-modelo-barato-the-information-justo-que-necesitaba",
      urlToImage: "https://i.blogs.es/26425c/1366_2000/840_560.jpeg",
      publishedAt: "2024-06-19T15:01:29Z",
      content:
        "Apple ha pausado el desarrollo de las Vision Pro 2 para centrarse en una versión más sencilla y barata, según The Information. Puede parecer un síntoma de debilidad (y puede serlo), pero también una … [+2450 chars]",
    },
    {
      source: {
        id: null,
        name: "Xataka.com",
      },
      author: "Fran León",
      title:
        "iPhone a mitad de precio y teles por 85 euros: este es el outlet de MediaMarkt en el que venden sus productos de exposición",
      description:
        "Todos, en algún momento, hemos devuelto algún producto. Pero, ¿te has preguntado a dónde van a parar los dispositivos que devolvemos? El outlet de MediaMarkt es uno de esos lugares. Desde eBay puedes conseguir los cientos de productos que se almacenan y proce…",
      url: "https://www.xataka.com/seleccion/iphone-a-mitad-precio-teles-85-euros-este-outlet-mediamarkt-que-venden-sus-productos-exposicion",
      urlToImage:
        "https://i.blogs.es/91b82b/captura-de-pantalla-2024-06-19-a-las-11.17.51/840_560.png",
      publishedAt: "2024-06-19T10:31:28Z",
      content:
        "Todos, en algún momento, hemos devuelto algún producto. Pero, ¿te has preguntado a dónde van a parar los dispositivos que devolvemos? El outlet de MediaMarkt es uno de esos lugares. Desde eBay puedes… [+4545 chars]",
    },
    {
      source: {
        id: null,
        name: "Xataka.com",
      },
      author: "Javier Lacort",
      title:
        "Meta va muy en serio con los wearables. Lo demuestra lo que acaba de hacer con Reality Labs",
      description:
        "Meta ha anunciado la mayor reorganización de su división de hardware, Reality Labs, desde que fue renombrada en 2020. Desde ahora, los equipos se van a fusionar en dos grandes grupos: Metaverso y Wearables, según avanza The Verge.\n\nPor qué es importante. Esta…",
      url: "https://www.xataka.com/realidad-virtual-aumentada/meta-va-muy-serio-wearables-demuestra-que-acaba-hacer-reality-labs",
      urlToImage: "https://i.blogs.es/efddd6/meta/840_560.jpeg",
      publishedAt: "2024-06-19T15:11:30Z",
      content:
        "Meta ha anunciado la mayor reorganización de su división de hardware, Reality Labs, desde que fue renombrada en 2020. Desde ahora, los equipos se van a fusionar en dos grandes grupos: Metaverso y Wea… [+2698 chars]",
    },
    {
      source: {
        id: null,
        name: "Xataka.com",
      },
      author: "Yúbal Fernández",
      title:
        "Luma Dream Machine: qué es, cómo funciona y cómo usar gratis esta inteligencia artificial para generar vídeos gratis",
      description:
        "Vamos a explicarte qué es y cómo funciona Luma Dream Machine, un modelo de inteligencia artificial especializado en la creación de vídeos ultrarrealistas a partir de un prompt o una imagen. Se trata de una de esas IAs que aparecen de vez en cuando para cambia…",
      url: "https://www.xataka.com/basics/luma-dream-machine-que-como-funciona-como-usar-gratis-esta-inteligencia-artificial-para-generar-videos-gratis",
      urlToImage: "https://i.blogs.es/2b85d7/luma-ai/840_560.jpeg",
      publishedAt: "2024-06-19T09:32:10Z",
      content:
        "Vamos a explicarte qué es y cómo funciona Luma Dream Machine, un modelo de inteligencia artificial especializado en la creación de vídeos ultrarrealistas a partir de un prompt o una imagen. Se trata … [+4197 chars]",
    },
    {
      source: {
        id: null,
        name: "Spotify.com",
      },
      author: "John Gruber",
      title:
        "Jon Stewart Talks About His Split With Apple on Matthew Belloni’s ‘The Town’",
      description: null,
      url: "https://open.spotify.com/episode/6Uo3FUqfmv85jl1fx96q9H",
      urlToImage:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frealitypaper.com%2Fwp-content%2Fuploads%2F2020%2F08%2FCommon-Types-of-News-to-Explore.jpg&f=1&nofb=1&ipt=5f46f041897df3a9b4bed0da7f07810fe5db2c6754970ff28f863db3fa4a5fda&ipo=images",
      publishedAt: "2024-06-19T01:31:11Z",
      content:
        "Interesting two-part interview, with far more information than we’ve heard about the demise of The Problem With Jon Stewart on Apple TV+. Part two is here; Overcast links to parts one and two; Apple … [+522 chars]",
    },
    {
      source: {
        id: null,
        name: "Techinsights.com",
      },
      author: null,
      title: "The Power Behind Apple's M4 SoC",
      description:
        "In a recent teardown of the Apple iPad Pro 11-inch, TechInsights revealed details of Apple's latest silicon: the Apple M4 SoC, codenamed TMRV93, built on TSMC's advanced N3E process. This surprise release demonstrates Apple's agility in adopting cutting-edge …",
      url: "https://www.techinsights.com/blog/introducing-tsmc-n3e-power-behind-apples-m4-soc",
      urlToImage:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frealitypaper.com%2Fwp-content%2Fuploads%2F2020%2F08%2FCommon-Types-of-News-to-Explore.jpg&f=1&nofb=1&ipt=5f46f041897df3a9b4bed0da7f07810fe5db2c6754970ff28f863db3fa4a5fda&ipo=images",
      publishedAt: "2024-06-19T07:46:07Z",
      content:
        "In a recent teardown of the Apple iPad Pro 11-inch, TechInsights revealed details of Apple's latest silicon: the Apple M4 SoC, codenamed TMRV93, built on TSMC's advanced N3E process. This surprise re… [+1183 chars]",
    },
    {
      source: {
        id: null,
        name: "Daringfireball.net",
      },
      author: null,
      title:
        "Why Dolphin Isn't Coming to the App Store (Spoiler: It Needs a JIT)",
      description:
        "Link to: https://oatmealdome.me/blog/why-dolphin-isnt-coming-to-the-app-store/",
      url: "https://daringfireball.net/linked/2024/06/18/dolphin-jit-apple",
      urlToImage: "https://daringfireball.net/graphics/df-wide-card.png",
      publishedAt: "2024-06-19T09:15:12Z",
      content:
        "Two weeks ago, Apple modified their App Store guidelines to allow\r\nretro game emulators in the App Store. This week, Delta, a\r\nmulti-system emulator that was previously only available via\r\nAltStore, … [+768 chars]",
    },
    {
      source: {
        id: null,
        name: "Gigazine.net",
      },
      author: "@GIGAZINE",
      title: "X(旧Twitter)を決済アプリにするための計画が進行中",
      description:
        "X(旧Twitter)を買収したイーロン・マスク氏は、買収当初からXを決済サービスにするという計画を明かしていました。この計画は記事作成時点でも進行中であることが、同社が州の規制当局に提出した書類から明らかになっています。続きを読む...",
      url: "https://gigazine.net/news/20240619-elon-musk-x-plans-payment/",
      urlToImage:
        "https://i.gzn.jp/img/2024/06/19/elon-musk-x-plans-payment/00_m.jpg",
      publishedAt: "2024-06-19T02:12:00Z",
      content:
        "X(Twitter)X\r\nDocuments Show How Musks X Plans to Become the Next Venmo - Bloomberghttps://www.bloomberg.com/news/articles/2024-06-18/documents-show-how-musk-s-x-plans-to-become-the-next-venmo\r\nX90X11… [+1463 chars]",
    },
    {
      source: {
        id: null,
        name: "Gigazine.net",
      },
      author: "@GIGAZINE",
      title:
        "AppleがiOS 18で「Car Play」に追加される機能や将来的な機能について語る",
      description:
        "Appleは対応するカーオーディオやカーナビにiPhoneを接続してマップなどの各種アプリを使用可能にする「CarPlay」というシステムを提供しています。そんなCarPlayについて、iOSの次期メジャーバージョン「iOS 18」で追加予定の機能を紹介するムービーをAppleが公開しています。続きを読む...",
      url: "https://gigazine.net/news/20240619-apple-car-play-ios-18/",
      urlToImage:
        "https://i.gzn.jp/img/2024/06/19/apple-car-play-ios-18/00.jpg",
      publishedAt: "2024-06-19T06:00:00Z",
      content:
        "20240619 150000 in ,   ,   , Posted by log1r_ut\r\nYou can read the machine translated English article here.",
    },
    {
      source: {
        id: null,
        name: "heise online",
      },
      author: "Malte Kirchner",
      title:
        "20 neue KI-Modelle veröffentlicht: Warum Apple sich in die Karten gucken lässt",
      description:
        "Im Vorfeld der WWDC wurden KI-Veröffentlichungen als Wink verstanden, dass Apple etwas plant. Warum Cupertino jetzt weiterhin auf Open-Source setzt.",
      url: "https://www.heise.de/news/20-neue-KI-Modelle-veroeffentlicht-Warum-Apple-sich-in-die-Karten-gucken-laesst-9769958.html",
      urlToImage:
        "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/6/1/7/4/2/7/Screenshot_2024-06-13_at_11.00.20-2-728390e1e812b590.png",
      publishedAt: "2024-06-19T15:40:00Z",
      content:
        "Seit der Entwicklerkonferenz WWDC Anfang Juni ist klar: Apple hat nicht nur eigene KI-Modelle entwickelt und einige davon demonstrativ vor der Präsentation im Netz veröffentlicht der iPhone-Herstelle… [+3072 chars]",
    },
    {
      source: {
        id: null,
        name: "heise online",
      },
      author: "Hartmut Gieselmann",
      title:
        "heise+ | Logic Pro im Test: Mit dem Mac und iPad einzelne Songs komponieren",
      description:
        "Apple hat Logic Pro um virtuelle Musiker erweitert. Im Test prüfen wir die Tauglichkeit für Einsteiger anhand der aktuellen Versionen für macOS und iPad.",
      url: "https://www.heise.de/tests/Logic-Pro-im-Test-Mit-dem-Mac-und-iPad-einzelne-Songs-komponieren-9757319.html?wt_mc=rss.red.ho.ho.atom.beitrag_plus.beitrag_plus",
      urlToImage:
        "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/6/1/0/7/6/9/ct1524testlogic_129764_hag_uwei_online-b65e5d95e4a0e05a.jpg",
      publishedAt: "2024-06-19T05:30:00Z",
      content:
        "Inhaltsverzeichnis\r\nDie Musikprogramme Logic Pro 11 für Mac und Logic Pro 2 für iPad stellen Musikern virtuelle Session Player und Arrangierhilfen zur Seite. Sie spielen nicht nur passende Rhythmen a… [+1612 chars]",
    },
    {
      source: {
        id: null,
        name: "heise online",
      },
      author: "Ben Schwan",
      title:
        "Nächstes Apple-Headset: Billigere Variante soll vor Vision Pro 2 kommen",
      description:
        'Apple hat die Planung bei seiner Vision-Sparte angepasst. Mittel für eine Vision Pro 2 sollen in eine günstigere "Vision" fließen, heißt es in US-Medien.',
      url: "https://www.heise.de/news/Naechstes-Apple-Headset-Billigere-Variante-soll-vor-Vision-Pro-2-kommen-9768550.html",
      urlToImage:
        "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/6/1/6/6/8/6/Apple-Vision-Pro-details-32d077b6792bd880.png",
      publishedAt: "2024-06-19T10:22:00Z",
      content:
        "Umbaumaßnahmen in Apples Vision-Sparte: Insidern zufolge ändert Apple die Priorisierung mehrerer Projekte in seiner Spatial-Computing-Abteilung. Demnach geht es vor allem darum, die Arbeit an einer g… [+2275 chars]",
    },
    {
      source: {
        id: null,
        name: "heise online",
      },
      author: "Berti Kolbow-Lehradt",
      title: "heise+ | Pimp my Home: So verbessern Sie HomeKit mit Apps",
      description:
        "Apples Home-App kann mehr als die Software anderer Smart-Home-Systeme, lässt aber dennoch einige Wünsche offen. Mit diesen Alternativen reizen Sie HomeKit aus.",
      url: "https://www.heise.de/ratgeber/Pimp-my-Home-So-verbessern-Sie-HomeKit-mit-Apps-9767591.html?wt_mc=rss.red.ho.ho.atom.beitrag_plus.beitrag_plus",
      urlToImage:
        "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/6/1/6/1/7/4/mi2403_aufmacher_homekit_digital-f10f77a9b62a0bb9.jpg",
      publishedAt: "2024-06-19T07:00:00Z",
      content:
        "Inhaltsverzeichnis\r\nSmarten Lampen bezauberndes Stimmungslicht entlocken, die Heizung ferngesteuert temperieren, mit Kameras das Zuhause absichern, automatisch Geräte in Abwesenheit vom Strom kappen … [+2074 chars]",
    },
    {
      source: {
        id: null,
        name: "heise online",
      },
      author: "Isabel Grünewald",
      title:
        "KI-Update kompakt: Copilot+ PCs, DeepSeek-Coder, Butterflies, Holocaust-Leugner",
      description:
        'Das "KI-Update" liefert werktäglich eine Zusammenfassung der wichtigsten KI-Entwicklungen.',
      url: "https://www.heise.de/news/KI-Update-kompakt-Copilot-PCs-DeepSeek-Coder-Butterflies-Holocaust-Leugner-9769482.html",
      urlToImage:
        "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/6/1/7/1/7/9/KIupdate_Titel_122023-4cd1ddee68e292c6.png",
      publishedAt: "2024-06-19T13:00:00Z",
      content:
        "Inhaltsverzeichnis\r\nAuf der Computermesse Computex in Taipeh Anfang Juni 2024 zeigte sich, dass Qualcomms neuer ARM-Chip Snapdragon X zusammen mit Microsofts Marketingprogramm Copilot+ den Notebookma… [+7822 chars]",
    },
    {
      source: {
        id: null,
        name: "heise online",
      },
      author: "Frank Schräer",
      title:
        "Mittwoch: Streik von Fahrradboten während EM, Snap mit KI für Augmented Reality",
      description:
        "Zusteller unterbezahlt + Video-Chats mit KI-AR + Schwarzes Loch erwacht + Microsoft pusht neues Outlook + Nvidia mit neuem Kursrekord + Bit-Rauschen zu Computex",
      url: "https://www.heise.de/news/Mittwoch-Streik-von-Fahrradboten-waehrend-EM-Snap-mit-KI-fuer-Augmented-Reality-9768706.html",
      urlToImage:
        "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/6/1/6/7/6/8/mittwoch-882e2f4758fc7bda.webp",
      publishedAt: "2024-06-19T04:30:00Z",
      content:
        "Für höhere Löhne streiken in Österreich Fahrradboten und andere Essenszusteller. Genau dann, wenn Österreichs Fußballnationalteam der Herren spielt. Die Gewerkschaften verlangen bessere Bezahlung, de… [+4960 chars]",
    },
    {
      source: {
        id: null,
        name: "heise online",
      },
      author: "Ben Schwan",
      title:
        'Vorwürfe gegen Microsofts Cloud: "Dann sind andere Wettbewerber verschwunden"',
      description:
        "Google-Cloud-Plattformchef Amit Zavery übt im Interview Kritik an Microsoft, weil Unternehmenskunden nur schwer von Azure zu anderen Anbietern wechseln können.",
      url: "https://www.heise.de/news/Vorwuerfe-gegen-Microsofts-Cloud-Dann-sind-andere-Wettbewerber-verschwunden-9768150.html",
      urlToImage:
        "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/6/1/6/4/7/5/398120114_b91c5c3ef9-b8387a18e6e1c324.png",
      publishedAt: "2024-06-19T05:00:00Z",
      content:
        "Inhaltsverzeichnis\r\nGoogle-Cloud-Plattformchef Amit Zavery.\r\n(Bild: Google)\r\nAmit Zavery ist Vizepräsident und Head of Platform bei Google Cloud. Vor seinem Job bei Alphabets Cloud-Tochter war er im … [+7952 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Bradley Chambers",
      title: "Apple @ Work Podcast: WWDC recap",
      description:
        "Apple @ Work is exclusively brought to you by Mosyle, the only Apple Unified Platform. Mosyle is the only solution that integrates in a single professional-grade platform all the solutions necessary to seamlessly and automatically deploy, manage & protect App…",
      url: "https://9to5mac.com/2024/06/18/apple-work-podcast-wwdc-recap/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/06/apple-at-work-wwdc24.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2024-06-19T01:11:17Z",
      content:
        "Apple @ Work is exclusively brought to you by Mosyle, the only Apple Unified Platform. Mosyle is the only solution that integrates in a single professional-grade platform all the solutions necessary … [+498 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Ryan Christoffel",
      title:
        "Thin and light is back in style, and Apple’s M4 iPad Pro is proof it can be done right",
      description:
        "Not too long ago, Apple was on a mission to make all of its devices thinner and lighter. This ambition resulted in iPhones that bent, and MacBook Pros that removed pro ports and had a terrible keyboard.\n\n\n\nIn the past few years, Apple has shifted gears, prior…",
      url: "https://9to5mac.com/2024/06/19/thin-and-light-is-back-in-style-and-apples-m4-ipad-pro-is-proof-it-can-be-done-right/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/06/ipad-pro-thinness.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2024-06-19T14:06:42Z",
      content:
        "Not too long ago, Apple was on a mission to make all of its devices thinner and lighter. This ambition resulted in iPhones that bent, and MacBook Pros that removed pro ports and had a terrible keyboa… [+2259 chars]",
    },
    {
      source: {
        id: null,
        name: "DroneDJ",
      },
      author: "DroneDJ",
      title: "Your Apple Watch can now control DJI Osmo Mobile gimbals",
      description:
        "DJI has released exciting new updates for the and Osmo Mobile SE, making the intelligent smartphone stabilizers compatible with various models for remote control.\n\n\n\n more…",
      url: "http://dronedj.com/2024/06/19/dji-osmo-mobile-apple-watch/",
      urlToImage:
        "https://i0.wp.com/dronedj.com/wp-content/uploads/sites/2/2024/06/dji-best-smartphone-gimbal-osmo-mobile-6-subject-tracking.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2024-06-19T14:07:53Z",
      content:
        "DJI has released exciting new updates for the Osmo Mobile 6 and Osmo Mobile SE, making the intelligent smartphone stabilizers compatible with various Apple Watch models for remote control.\r\nWhat this… [+2802 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Ben Lovejoy",
      title:
        "Apple Pay Later withdrawal likely because of a law passed in 1968",
      description:
        "We speculated at the time that the decision to withdraw Apple Pay Later was probably driven by a desire to get ahead of upcoming legislation, and a piece today suggests that it’s actually a new interpretation of a very old law.\n\n\n\nThe Truth in Lending Act was…",
      url: "https://9to5mac.com/2024/06/19/apple-pay-later-withdrawal-reason/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/06/Apple-Pay-Later-withdrawal.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2024-06-19T13:16:21Z",
      content:
        "We speculated at the time that the decision to withdraw Apple Pay Later was probably driven by a desire to get ahead of upcoming legislation, and a piece today suggests that it’s actually a new inter… [+2508 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Ben Lovejoy",
      title:
        "Got an Intel Mac? Here’s the deal so far, and possible future scenarios",
      description:
        "If you’ve got an Intel Mac of up to six years old, there was mixed news for most when Apple announced macOS 15 Sequoia. Most Macs that can run macOS 14 can still run this year’s version – but Intel models unsurprisingly won’t get the headline Apple Intelligen…",
      url: "https://9to5mac.com/2024/06/19/got-an-intel-mac-future/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/06/Got-an-Intel-Mac.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2024-06-19T12:38:25Z",
      content:
        "If you’ve got an Intel Mac of up to six years old, there was mixed news for most when Apple announced macOS 15 Sequoia. Most Macs that can run macOS 14 can still run this year’s version but Intel mod… [+3161 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Ben Lovejoy",
      title:
        "iPhone PC emulator block called confusing, inconsistent, and probably illegal",
      description:
        "Apple’s decision to block iPhone PC emulators has been criticized by developers, who have variously said that it is confusing, inconsistent, and probably illegal.\n\n\n\nOne even said that not even Apple’s own app reviewers appear to understand the company’s poli…",
      url: "https://9to5mac.com/2024/06/19/iphone-pc-emulator-block-illegal/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/06/iPhone-PC-emulator-block.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2024-06-19T11:17:29Z",
      content:
        "Apple’s decision to block iPhone PC emulators has been criticized by developers, who have variously said that it is confusing, inconsistent, and probably illegal.\r\nOne even said that not even Apple’s… [+3043 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Justin Kahn",
      title:
        "Deals: Apple Pencil Pro all-time low, 13-inch M4 iPad Pro up to $180 off, M2 iPad Air Magic Keyboard $189 off, more",
      description:
        "We have hit the mid-week, and it’s finally time for a solid Amazon all-time low price with today’s Apple Pencil Pro deal – it is now at the best we have tracked in new condition. From there, we move over to the M4 iPad Pro you can use it on with the 1TB 13-in…",
      url: "https://9to5mac.com/2024/06/19/apple-pencil-pro-deals-m4-ipad-pro/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/06/Apple-Pencil-Pro-deals.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2024-06-19T15:45:41Z",
      content:
        "We have hit the mid-week, and it’s finally time for a solid Amazon all-time low price with today’s Apple Pencil Pro deal it is now at the best we have tracked in new condition. From there, we move ov… [+6602 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Ryan Christoffel",
      title:
        "These are all the Apple products stopping the USB-C dream from becoming reality",
      description:
        "Nobody likes a port transition. When Apple moved the iPhone and iPad to Lightning, and the Mac from USB-A to USB-C, it was painful. Most recently, the iPhone 15 line dropped Lightning for USB-C. Each transition makes your old peripherals more or less useless,…",
      url: "https://9to5mac.com/2024/06/19/these-are-all-the-apple-products-stopping-the-usb-c-dream/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/12/USB-C-charging-port-law.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2024-06-19T15:21:46Z",
      content:
        "Nobody likes a port transition. When Apple moved the iPhone and iPad to Lightning, and the Mac from USB-A to USB-C, it was painful. Most recently, the iPhone 15 line dropped Lightning for USB-C. Each… [+2507 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Benjamin Mayo",
      title:
        "Qualcomm’s new Snapdragon laptop chip is slower than Apple M3 in single-core, and less power efficient",
      description:
        "Qualcomm has been touting the performance characteristics of its new Snapdragon X Elite series of ARM chips for a while, which finally debuted this week inside the new Copilot+ PC’s (albeit without the fancy AI Recall feature, which has been delayed following…",
      url: "https://9to5mac.com/2024/06/19/qualcomms-new-snapdragon-laptop-chip-is-slower-than-apple-m3-in-single-core-and-less-power-efficient/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/06/snapdragon-microsoft-surface-pc.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2024-06-19T10:51:28Z",
      content:
        "Qualcomm has been touting the performance characteristics of its new Snapdragon X Elite series of ARM chips for a while, which finally debuted this week inside the new Copilot+ PC’s (albeit without t… [+2575 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Sponsored Post",
      title:
        "Here’s how to get your Mac ready for macOS Sequoia with CleanMyMac X",
      description:
        "Apple’s new macOS Sequoia officially lands in the fall, so CleanMyMac X gave us great advice for the best way to prepare your Mac for the new release while taking advantage of an exclusive deal for 9to5Mac readers.\n\n\n\n more…",
      url: "https://9to5mac.com/2024/06/18/heres-how-to-get-your-mac-ready-for-macos-sequoia-with-cleanmymac-x/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/06/02-Hero-Image-for-CleanMyMac-X-1920x1080-16_9.webp?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2024-06-19T01:50:26Z",
      content:
        "Image: CleanMyMac X\r\nApple’s new macOS Sequoia officially lands in the fall, so CleanMyMac X gave us great advice for the best way to prepare your Mac for the new release while taking advantage of an… [+3488 chars]",
    },
    {
      source: {
        id: null,
        name: "Genbeta.com",
      },
      author: "Miguel Jorge",
      title:
        "Ni siquiera Ferrari puede competir con Google y Apple. La casa italiana elimina su navegador GPS",
      description:
        "No creo que me equivoque mucho si digo que cuando te compras un coche, normalmente no le haces mucho caso al sistema de navegación nativo. Ese software, salvo contadísimas excepciones, lo vas a “cambiar” por Android Auto o CarPlay. Al fin y al cabo, no es tan…",
      url: "https://www.genbeta.com/actualidad/siquiera-ferrari-puede-competir-google-apple-casa-italiana-elimina-su-navegador-gps",
      urlToImage:
        "https://i.blogs.es/332327/ps---plantilla-portadas-xtk-7/840_560.jpeg",
      publishedAt: "2024-06-19T16:01:30Z",
      content:
        "No creo que me equivoque mucho si digo que cuando te compras un coche, normalmente no le haces mucho caso al sistema de navegación nativo. Ese software, salvo contadísimas excepciones, lo vas a cambi… [+3965 chars]",
    },
    {
      source: {
        id: null,
        name: "Genbeta.com",
      },
      author: "Antonio Vallejo",
      title:
        "Desde que sale de China hasta que llega a tu casa: esto es todo lo que pasa cuando compras en AliExpress o Temu",
      description:
        "Recientemente compartíamos en un artículo lo mucho que han cambiado las cosas en tiendas como AliExpress, Temu o Shein en lo que respecta a enviar los productos al comprador. Y es que, sobre todo en la primera mencionada, la infraestructura ha evolucionado lo…",
      url: "https://www.genbeta.com/a-fondo/que-sale-china-que-llega-a-tu-casa-esto-todo-que-pasa-cuando-compras-aliexpress-temu",
      urlToImage: "https://i.blogs.es/bd2f33/original/840_560.jpeg",
      publishedAt: "2024-06-19T09:13:08Z",
      content:
        "Recientemente compartíamos en un artículo lo mucho que han cambiado las cosas en tiendas como AliExpress, Temu o Shein en lo que respecta a enviar los productos al comprador. Y es que, sobre todo en … [+4471 chars]",
    },
    {
      source: {
        id: null,
        name: "Autoblog",
      },
      author: "John Beltz Snyder",
      title: "2025 Cadillac XT4 Review: The inbetweener of luxury compact SUVs",
      description:
        "Filed under:\n Cadillac,Buying Guide,New Car Reviews,Crossover,SUV,Luxury\n Continue reading 2025 Cadillac XT4 Review: The inbetweener of luxury compact SUVs\n2025 Cadillac XT4 Review: The inbetweener of luxury compact SUVs originally appeared on Autoblog on Wed…",
      url: "https://www.autoblog.com/article/2025-cadillac-xt4-review/",
      urlToImage:
        "https://s.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1062x597/format/jpg/quality/100/https://s.aolcdn.com/os/ab/_cms/2024/06/17172352/2024-Cadillac-XT4-041.jpg",
      publishedAt: "2024-06-19T10:00:00Z",
      content:
        "Pros: Good infotainment and safety tech; nice in-between size; roomy second row\r\nCons: Ho-hum interior design; lack of configuration variety; small cargo area\r\nThe 2025 Cadillac XT4 is a handsome sma… [+8522 chars]",
    },
    {
      source: {
        id: null,
        name: "Tim.blog",
      },
      author: "Tim Ferriss",
      title: "Seth Godin and Dr. Sue Johnson (#747)",
      description:
        "Seth Godin and Dr. Sue Johnson on The Tim Ferriss Show podcast! \nThe post Seth Godin and Dr. Sue Johnson (#747) appeared first on The Blog of Author Tim Ferriss.",
      url: "https://tim.blog/2024/06/18/seth-godin-and-dr-sue-johnson/",
      urlToImage:
        "https://149346886.v2.pressablecdn.com/wp-content/uploads/2024/06/Seth-Godin-and-Dr-Sue-Johnson.jpeg",
      publishedAt: "2024-06-19T00:49:15Z",
      content:
        "This episode is a two-for-one, and thats because the podcast recently hit its 10-year anniversary and passed one billion downloads. To celebrate, Ive curated some of the best of the bestsome of my fa… [+6284 chars]",
    },
    {
      source: {
        id: null,
        name: "AppleInsider",
      },
      author: "news@appleinsider.com (Andrew O'Hara)",
      title: "Apple Intelligence impresses now, and it's still very early",
      description:
        "At WWDC, Apple introduced Apple Intelligence as an expansion of its AI capabilities. It's incredibly impressive in action, and if you let it, it will change how you work.Apple Intelligence is coming this fallThe span and ambition of Apple Intelligence are sta…",
      url: "https://appleinsider.com/articles/24/06/19/apple-intelligence-impresses-now-and-its-still-very-early",
      urlToImage:
        "https://photos5.appleinsider.com/gallery/60019-123354-Apple-Intelligence-Logo-xl.jpg",
      publishedAt: "2024-06-19T11:53:14Z",
      content:
        "Apple Intelligence is coming this fall\r\nAt WWDC, Apple introduced Apple Intelligence as an expansion of its AI capabilities. It's incredibly impressive in action, and if you let it, it will change ho… [+9515 chars]",
    },
    {
      source: {
        id: null,
        name: "AppleInsider",
      },
      author: "news@appleinsider.com (William Gallagher)",
      title:
        "Apple researchers add 20 more open-source models to improve text and image AI",
      description:
        "Apple has contributed 20 new Core Machine Learning models to an open source AI repository Hugging Face, adding to its existing public models and research papers.Hugging Face is an open-source repository for AI research and modelsIn April 2024, Apple publicly …",
      url: "https://appleinsider.com/articles/24/06/19/apple-researchers-add-20-more-open-source-models-to-improve-text-and-image-ai",
      urlToImage:
        "https://photos5.appleinsider.com/gallery/60110-123368-000-lede-Hugging-Face-d2-xl.jpg",
      publishedAt: "2024-06-19T10:30:49Z",
      content:
        "Hugging Face is an open-source repository for AI research and models\r\nApple has contributed 20 new Core Machine Learning models to an open source AI repository Hugging Face, adding to its existing pu… [+2091 chars]",
    },
    {
      source: {
        id: null,
        name: "AppleInsider",
      },
      author: "news@appleinsider.com (William Gallagher)",
      title:
        "Safari's Reader mode is improved in iOS 18, even without Apple Intelligence",
      description:
        "The headline Apple Intelligence improvements to Safari's Reader mode on iOS 18, iPadOS 18, and macOS Sequoia are not available yet, but the feature has still been updated.The new Reader options on iPhoneApple has announced that Safari's Reader mode, where all…",
      url: "https://appleinsider.com/articles/24/06/19/safaris-reader-mode-is-improved-in-ios-18-even-without-apple-intelligence",
      urlToImage:
        "https://photos5.appleinsider.com/gallery/60111-123375-000-lede-Reader-iOS-xl.jpg",
      publishedAt: "2024-06-19T12:34:03Z",
      content:
        "The new Reader options on iPhone\r\nThe headline Apple Intelligence improvements to Safari's Reader mode on iOS 18, iPadOS 18, and macOS Sequoia are not available yet, but the feature has still been up… [+4213 chars]",
    },
    {
      source: {
        id: null,
        name: "AppleInsider",
      },
      author: "news@appleinsider.com (Malcolm Owen)",
      title:
        "How to perfect your home screen with iPadOS 18 customization options",
      description:
        "Apple has made it easier to customize and arrange your iPad home screen, with iPadOS 18 letting you rearrange icons and even tint them. Here's how to do it.iPadOS 18Apple has gradually given more control to users about what items they can put onto the home sc…",
      url: "https://appleinsider.com/inside/ipados-18/tips/how-to-perfect-your-home-screen-with-ipados-18-customization-options",
      urlToImage:
        "https://photos5.appleinsider.com/gallery/60105-123369-ipadosicons-xl.jpg",
      publishedAt: "2024-06-19T13:15:06Z",
      content:
        "iPadOS 18\r\nApple has made it easier to customize and arrange your iPad home screen, with iPadOS 18 letting you rearrange icons and even tint them. Here's how to do it.\r\nApple has gradually given more… [+3288 chars]",
    },
    {
      source: {
        id: null,
        name: "AppleInsider",
      },
      author: "news@appleinsider.com (Andrew Orr)",
      title: "How to schedule messages in iOS 18 using 'Send Later'",
      description:
        "Apple's latest iOS 18 update brings many new features, including scheduling messages. Here's how to use 'Send Later.'iPhone users can schedule messages to one anotherScheduling messages can be a game-changer for many users. Whether for business communication,…",
      url: "https://appleinsider.com/inside/ios-18/tips/how-to-schedule-messages-in-ios-18-using-send-later",
      urlToImage:
        "https://photos5.appleinsider.com/gallery/60088-123345-schedule-messages-xl.jpg",
      publishedAt: "2024-06-19T02:40:21Z",
      content:
        "iPhone users can schedule messages to one another\r\nApple's latest iOS 18 update brings many new features, including scheduling messages. Here's how to use 'Send Later.'\r\nScheduling messages can be a … [+2309 chars]",
    },
    {
      source: {
        id: null,
        name: "Gizmodo.jp",
      },
      author: "小暮ひさのり",
      title: "M4チップのMacは年末ごろな気配です",
      description:
        "Image:Appleお前（M4）のちからの真髄を。M3チップをすっ飛ばして、まさかのM4チップ搭載！飛び級で進化したiPadPro。Macの前にiPadへ最新プロセッサが搭載されるなんて、予想できた方は少ないのではないでしょうか。写真多数。新型iPadProを見て触ってきた。思ってる以上に薄くて軽い日本時間で昨夜開催されたApple発表イベント。期待通り新型iPadPro、新型iPadAirが発",
      url: "https://www.gizmodo.jp/2024/06/mac-m4.html",
      urlToImage:
        "https://media.loom-app.com/gizmodo/dist/images/2024/06/19/2024-06-19mak00.jpg?w=1280&h=630&f=jpg",
      publishedAt: "2024-06-19T10:30:00Z",
      content:
        "14MacBook ProM4\r\n1416MacBook ProM4 ProM4 Max\r\nMac miniM4M4 Pro",
    },
    {
      source: {
        id: null,
        name: "Yanko Design",
      },
      author: "JC Torres",
      title:
        "Cheaper Apple Vision Pro might be coming in 2025, second-gen Pro put on hold",
      description:
        "Cheaper Apple Vision Pro might be coming in 2025, second-gen Pro put on holdWhen Apple finally launched its mixed reality device, the name it chose naturally raised a few eyebrows. The Vision Pro definitely had all the bells...",
      url: "https://www.yankodesign.com/2024/06/19/cheaper-apple-vision-pro-might-be-coming-in-2025-second-gen-pro-put-on-hold/",
      urlToImage:
        "https://www.yankodesign.com/images/design_news/2024/06/cheaper-apple-vision-pro-might-be-coming-in-2025-second-gen-pro-put-on-hold/apple-vision-pro-3.jpg",
      publishedAt: "2024-06-19T13:20:27Z",
      content:
        "When Apple finally launched its mixed reality device, the name it chose naturally raised a few eyebrows. The Vision Pro definitely had all the bells and whistles needed to support the company’s spati… [+2390 chars]",
    },
    {
      source: {
        id: null,
        name: "Yanko Design",
      },
      author: "Srishti Mitra",
      title: "Top 10 Audio Designs To Elevate Your Summer Playlist Experience",
      description:
        "Top 10 Audio Designs To Elevate Your Summer Playlist ExperienceIf you’re a true blue audiophile, or you have a few true blue audiophiles in your life, then you know that all they need are...",
      url: "https://www.yankodesign.com/2024/06/19/top-10-audio-designs-to-elevate-your-summer-playlist-experience/",
      urlToImage:
        "https://www.yankodesign.com/images/design_news/2024/06/top-10-audio-designs-to-play-your-fav-summer-tunes/top_10_audio_designs_summer_yanko_design_hero.jpg",
      publishedAt: "2024-06-19T11:40:35Z",
      content:
        "If youre a true blue audiophile, or you have a few true blue audiophiles in your life, then you know that all they need are a couple of awesome audio devices to set their mood. All they require is an… [+9948 chars]",
    },
    {
      source: {
        id: null,
        name: "Windows Central",
      },
      author: "kevinokemwa@outlook.com (Kevin Okemwa)",
      title:
        "A concept designer presents 'a Windows 13 utopia' packed with Windows 11's wildest dreams but is disrupted with an annoying BSOD only Microsoft can fix with execution",
      description:
        "Concept designer extraordinaire AR 4789 recently shared a YouTube video of what Windows 13 might look like in the future. It combines Apple elements, AI features, and customization options for the static taskbar and Start menu in Windows 11.",
      url: "https://www.windowscentral.com/software-apps/windows-11/a-concept-designer-presents-a-windows-13-utopia",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/weGZXigzzuoNbgMEQFMPkU-1200-80.jpg",
      publishedAt: "2024-06-19T13:59:40Z",
      content:
        "What you need to know\r\n<ul><li>A concept designer recently shared a YouTube video highlighting what 'Windows 13' might look like in the future.</li><li>The Windows 13 concept features some elements f… [+3756 chars]",
    },
    {
      source: {
        id: null,
        name: "Windows Central",
      },
      author: "c.cale.hunt@gmail.com (Cale Hunt)",
      title:
        "Should you buy a Snapdragon Copilot+ PC or wait for Intel, AMD, and NVIDIA?",
      description:
        "Qualcomm's Snapdragon X Elite and X Plus ARM64 chips are exclusive to the first lineup of Copilot+ PCs, but Intel, AMD, and NVIDIA systems are expected to offer Copilot+ features in the future. Is it worth waiting for the x86 platforms to catch up?",
      url: "https://www.windowscentral.com/hardware/laptops/arm64-copilot-plus-pc-or-intel-amd-nvidia",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/CQoaYG94oCH59GmHZ4psPB-1200-80.jpg",
      publishedAt: "2024-06-19T09:55:30Z",
      content:
        'The first wave of Copilot+ PCs is here, and its combination of AI and ARM64 is driving what Windows Central Editor-in-Chief Daniel Rubino calls a "Great Reset" in the PC industry. \r\nCopilot+ PCs from… [+11267 chars]',
    },
    {
      source: {
        id: null,
        name: "Journal du geek",
      },
      author: "tristan carballeda",
      title: "Un nouveau MacBook Pro vendu par Apple avant la fin de l’année ?",
      description:
        "Apple pourrait lancer une nouvelle version de son MacBook Pro avant la fin de l'année, avec la puce M4, une grande première.",
      url: "https://www.journaldugeek.com/2024/06/19/un-nouveau-macbook-pro-vendu-par-apple-avant-la-fin-de-lannee/",
      urlToImage:
        "https://www.journaldugeek.com/app/uploads/2024/02/MacBook-Pro.jpg",
      publishedAt: "2024-06-19T08:02:50Z",
      content:
        "Apple ne sarrête jamais. Alors que la marque à la pomme vient de présenter les nouveautés logicielles qui feront notre bonheur à lautomne, avec Apple Intelligence en tête, la firme de Cupertino prépa… [+2502 chars]",
    },
    {
      source: {
        id: null,
        name: "Journal du geek",
      },
      author: "Journal du Geek",
      title:
        "OnePlus 12 : à prix XS, ce haut de gamme fait trembler Apple et Samsung (-45%)",
      description:
        "Excellente alternative aux Galaxy S24 de Samsung et aux iPhone 15 d'Apple, le OnePlus 12 est un smartphone haut de gamme qui a plus d'une corde à son arc. D'autant plus qu'il est aujourd'hui à un prix irrésistible, dans le cadre de la promo d'été AliExpress.",
      url: "https://www.journaldugeek.com/bon-plan/oneplus-12-a-prix-xs-ce-haut-de-gamme-fait-trembler-apple-et-samsung-45/",
      urlToImage:
        "https://www.journaldugeek.com/app/uploads/2024/05/OnePlus-12.jpg",
      publishedAt: "2024-06-19T10:17:04Z",
      content:
        "Présent sur le segment des smartphones depuis plusieurs années déjà, OnePlus proposait à la base des modèles abordables offrant un rapport qualité-prix excellent. Au fil du temps, il a décidé de lanc… [+5730 chars]",
    },
    {
      source: {
        id: null,
        name: "Journal du geek",
      },
      author: "Journal du Geek",
      title:
        "Xiaomi 14 : le prix du nouvel iPhone-killer de Xiaomi s’écrase de -35% ",
      description:
        "Le Xiaomi 14 est le nouveau modèle haut de gamme de la marque. S'il reste récent avec quelques mois d'existence, son tarif s'effondre déjà de près de 35% pour les Summer Sales sur AliExpress.",
      url: "https://www.journaldugeek.com/bon-plan/xiaomi-14-le-prix-du-nouvel-iphone-killer-de-xiaomi-secrase-de-35/",
      urlToImage:
        "https://www.journaldugeek.com/app/uploads/2024/06/xiaomi-14-vert.jpg",
      publishedAt: "2024-06-19T11:50:12Z",
      content:
        "Ce mercredi, AliExpress poursuit les Summer Sales avec des offres toujours plus dingues. Pour son opération spéciale, il met en avant des deals exceptionnels qui sont vraiment haut de gamme. C’est le… [+4786 chars]",
    },
    {
      source: {
        id: null,
        name: "Journal du geek",
      },
      author: "Antoine Gautherie",
      title:
        "Nvidia devient officiellement l’entreprise la plus riche de la planète",
      description:
        "Le géant vert est désormais sur le toit du monde après avoir dépassé Microsoft en termes de capitalisation boursière. Reste à savoir si ses prochains GPU permettront d'entretenir cette dynamique, ou si la croissance de la firme sera stoppée net par l'éclateme…",
      url: "https://www.journaldugeek.com/2024/06/19/nvidia-devient-officiellement-lentreprise-la-plus-riche-de-la-planete/",
      urlToImage:
        "https://www.journaldugeek.com/app/uploads/2024/05/jensen-huang-Nvidia.jpg",
      publishedAt: "2024-06-19T11:08:59Z",
      content:
        "En février dernier, Nvidia a dépassé Amazon et Alphabet en termes de capitalisation boursière. À peine trois semaines plus tard, elle a fait de même avec le groupe pétrolier saoudien Aramco en dépass… [+5273 chars]",
    },
    {
      source: {
        id: null,
        name: "Applesfera.com",
      },
      author: "Guille Lomener",
      title:
        "Se filtran los planes de Apple con Vision Pro y son buenas noticias: habrá un modelo más barato y llegará pronto",
      description:
        "Estamos a escasas semanas de la llegada de Apple Vision Pro a Europa. Comienza su salida fuera de Estados Unidos justo un año después de su presentación. Además, con la llegada de visionOS 2, Apple continúa dando pasos para traer al sistema operativo más func…",
      url: "https://www.applesfera.com/rumores/se-filtran-planes-apple-vision-pro-buenas-noticias-habra-modelo-barato-llegara-pronto",
      urlToImage:
        "https://i.blogs.es/ed1d30/captura-de-pantalla-2024-06-19-a-las-12.14.53/840_560.png",
      publishedAt: "2024-06-19T12:01:33Z",
      content:
        "Estamos a escasas semanas de la llegada de Apple Vision Pro a Europa. Comienza su salida fuera de Estados Unidos justo un año después de su presentación. Además, con la llegada de visionOS 2, Apple c… [+5479 chars]",
    },
    {
      source: {
        id: null,
        name: "Applesfera.com",
      },
      author: "Jesús Quesada",
      title:
        "El Apple iPhone que más me gusta baja de precio y se vuelve un chollo",
      description:
        "Apple sigue presentando teléfonos, pero el iPhone 13 se mantiene como uno de sus mejores smartphones por su increíble relación calidad-precio, satisfaciendo a la mayoría de usuarios. En K-tuin a través de Miravia es posible adquirirlo por 599 euros; uno de su…",
      url: "https://www.applesfera.com/seleccion/apple-iphone-que-me-gusta-baja-precio-se-vuelve-chollo",
      urlToImage: "https://i.blogs.es/b6417a/iphone-13/840_560.jpeg",
      publishedAt: "2024-06-19T08:32:11Z",
      content:
        "Apple sigue presentando teléfonos, pero el iPhone 13 se mantiene como uno de sus mejores smartphones por su increíble relación calidad-precio, satisfaciendo a la mayoría de usuarios. En K-tuin a trav… [+2070 chars]",
    },
    {
      source: {
        id: null,
        name: "Applesfera.com",
      },
      author: "Álvaro García M.",
      title:
        "TSMC subirá sus precios. Afectará directamente a Apple y a los futuros iPhone",
      description:
        "Se dice que cuando China estornuda, el mundo se resfría. Una nueva expresión utilizada para hablar de un mundo hiperconectado y que viene a cuento de lo nuevo de TSMC. No, TSMC no es china, sino taiwanesa, pero tiene una importancia para el mundo vital. Es un…",
      url: "https://www.applesfera.com/apple-1/tsmc-subira-sus-precios-afectara-directamente-a-apple-a-futuros-iphone",
      urlToImage: "https://i.blogs.es/80c887/iphone/840_560.jpeg",
      publishedAt: "2024-06-19T09:01:29Z",
      content:
        "Se dice que cuando China estornuda, el mundo se resfría. Una nueva expresión utilizada para hablar de un mundo hiperconectado y que viene a cuento de lo nuevo de TSMC. No, TSMC no es china, sino taiw… [+4110 chars]",
    },
    {
      source: {
        id: null,
        name: "Applesfera.com",
      },
      author: "Guille Lomener",
      title:
        "Las siete mejores apps para escuchar la radio gratis en nuestro iPhone",
      description:
        "Está claro que a raíz de la llegada del iPhone y servicios de streaming musical como Apple Music o Spotify, el uso de la radio para disfrutar de la música ha ido disminuyendo. Además, en los últimos años los podcasts han completado el círculo del contenido ba…",
      url: "https://www.applesfera.com/tutoriales/cinco-mejor-apps-para-escuchar-radio-gratuitamente-nuestro-iphone",
      urlToImage: "https://i.blogs.es/beda16/radio-iphone/840_560.jpeg",
      publishedAt: "2024-06-19T14:02:48Z",
      content:
        "Está claro que a raíz de la llegada del iPhone y servicios de streaming musical como Apple Music o Spotify, el uso de la radio para disfrutar de la música ha ido disminuyendo. Además, en los últimos … [+5121 chars]",
    },
    {
      source: {
        id: null,
        name: "Applesfera.com",
      },
      author: "Álvaro García M.",
      title:
        "Una IA amenaza con dejar sin trabajo a miles de gallegos y otros tantos puestos desaparecerán en todo el mundo. Apple tiene una visión bien distinta",
      description:
        "Liderar la industria de la inteligencia artificial no sólo es tener los modelos más avanzados, sino también aplicarlos bien y en favor siempre de los humanos. Sin embargo, en estos últimos tiempos se está analizando la IA como una amenaza más que como una ayu…",
      url: "https://www.applesfera.com/general/ia-amenaza-dejar-trabajo-a-miles-gallegos-otros-puestos-desapareceran-todo-mundo-apple-tiene-vision-bien-distinta",
      urlToImage: "https://i.blogs.es/d30456/galicia-apple/840_560.jpeg",
      publishedAt: "2024-06-19T11:01:30Z",
      content:
        "Liderar la industria de la inteligencia artificial no sólo es tener los modelos más avanzados, sino también aplicarlos bien y en favor siempre de los humanos. Sin embargo, en estos últimos tiempos se… [+3325 chars]",
    },
    {
      source: {
        id: null,
        name: "Applesfera.com",
      },
      author: "Isra Fdez",
      title:
        "Han filtrado las fundas del iPhone 16 y tenemos sorpresas: vuelta a la silicona, vuelta al rosa y un hueco para el nuevo botón",
      description:
        "El perfil tras el experto chino Majin Bu es una fuente inagotable de filtraciones. No en vano es uno de los mayores insiders de Xiaomi, realme y otras marcas locales. Pero lo que ha filtrado esta vez llega mucho más cargado de información: el tamaño de los nu…",
      url: "https://www.applesfera.com/iphone/han-filtrado-fundas-iphone-16-tenemos-sorpresas-vuelta-a-silicona-vuelta-al-rosa-hueco-para-nuevo-boton",
      urlToImage: "https://i.blogs.es/0161a1/gqxgqdxxaaail3z/840_560.jpeg",
      publishedAt: "2024-06-19T10:11:28Z",
      content:
        "El perfil tras el experto chino Majin Bu es una fuente inagotable de filtraciones. No en vano es uno de los mayores insiders de Xiaomi, realme y otras marcas locales. Pero lo que ha filtrado esta vez… [+2454 chars]",
    },
    {
      source: {
        id: null,
        name: "Applesfera.com",
      },
      author: "Álvaro García M.",
      title:
        "Expertos japoneses han descubierto cómo mejorar la batería del iPhone. Y pasa por usar el mismo componente que aumenta la nuestra, la cafeína",
      description:
        "Conocemos ya sobradamente lo que nos supone ingerir cafeína a los humanos. Es una sustancia con elementos negativos como su adicción, pero también positivos al suponer un chute de energía extra. Pues bien, en Japón parece que han tomado esta referencia y han …",
      url: "https://www.applesfera.com/general/expertos-japoneses-han-descubierto-como-mejorar-bateria-futuro-iphone-pasa-usar-componente-que-aumenta-nuestra-cafeina",
      urlToImage: "https://i.blogs.es/392e06/cafe-bateria/840_560.jpeg",
      publishedAt: "2024-06-19T15:01:29Z",
      content:
        "Conocemos ya sobradamente lo que nos supone ingerir cafeína a los humanos. Es una sustancia con elementos negativos como su adicción, pero también positivos al suponer un chute de energía extra. Pues… [+3503 chars]",
    },
    {
      source: {
        id: null,
        name: "Applesfera.com",
      },
      author: "Jesús Quesada",
      title:
        "Adiós al calor con el ventilador WiFi que arrasa: se enciende con el iPhone o pidiéndoselo a Alexa desde el sofá",
      description:
        "El verano todavía no ha comenzado oficialmente y el calor ya es insoportable a ciertos horas del día en varios puntos de España. Si te parece pronto para encender el aire acondicionado, o no tienes, un ventilador puede hacer maravillas en casa, y el ventilado…",
      url: "https://www.applesfera.com/seleccion/adios-al-calor-ventilador-wifi-que-arrasa-se-enciende-iphone-pidiendoselo-a-alexa-sofa",
      urlToImage: "https://i.blogs.es/1f501b/ventilador-wifi/840_560.jpeg",
      publishedAt: "2024-06-19T15:31:29Z",
      content:
        "El verano todavía no ha comenzado oficialmente y el calor ya es insoportable a ciertos horas del día en varios puntos de España. Si te parece pronto para encender el aire acondicionado, o no tienes, … [+2237 chars]",
    },
    {
      source: {
        id: null,
        name: "Applesfera.com",
      },
      author: "Isra Fdez",
      title:
        'Este curioso "Google Maps" para conocer de dónde viene tu apellido te dice con cuántas personas en el mundo lo compartes',
      description:
        "Nuestro apellido dice mucho de nuestro pasado. Habla de nuestras raíces y hasta qué punto estamos emparentados con personas de todo el globo. Por ejemplo, mi apellido paterno puede encontrarse en lugares tan remotos como Filipinas. Y si quieres descubrir de d…",
      url: "https://www.applesfera.com/aplicaciones-ios-1/este-curioso-google-maps-para-conocer-donde-viene-tu-apellido-te-dice-cuantas-personas-mundo-compartes",
      urlToImage: "https://i.blogs.es/ca23e4/mapa-de-apellidos/840_560.jpeg",
      publishedAt: "2024-06-19T08:01:29Z",
      content:
        "Nuestro apellido dice mucho de nuestro pasado. Habla de nuestras raíces y hasta qué punto estamos emparentados con personas de todo el globo. Por ejemplo, mi apellido paterno puede encontrarse en lug… [+2930 chars]",
    },
    {
      source: {
        id: null,
        name: "Presse-citron",
      },
      author: "Jean-Yves Alric",
      title:
        "Présumé innocent : pourquoi j’ai adoré cette pépite d’Apple TV+ ?",
      description:
        "Cette nouvelle série démarre très fort sur la plateforme de streaming.",
      url: "https://www.presse-citron.net/presume-innocent-pourquoi-jai-adore-cette-pepite-dapple-tv/",
      urlToImage:
        "https://www.presse-citron.net/app/uploads/2024/06/presume-innocent.jpg",
      publishedAt: "2024-06-19T09:56:08Z",
      content:
        "Le moins que lon puisse dire, cest quon ne lavait pas vu venir. Alors que ce mois de juin est très chargé au niveau des sorties série (The Boys, House of the Dragon, ou encore The Acolyte), Apple TV+… [+2544 chars]",
    },
    {
      source: {
        id: null,
        name: "Presse-citron",
      },
      author: "Setra",
      title:
        "Votre smartphone Android aura-t-il droit à cette grosse nouveauté IA ?",
      description:
        "Google déploie l’intégration de Gemini sur la messagerie d’Android, mais votre smartphone devra avoir une mémoire RAM d’au moins 6 Go. La fonctionnalité n’est pas encore disponible en France, mais la firme indique qu’elle travaille sur un déploiement de cette…",
      url: "https://www.presse-citron.net/votre-smartphone-android-aura-t-il-droit-a-cette-grosse-nouveaute-ia/",
      urlToImage:
        "https://www.presse-citron.net/app/uploads/2024/05/Test-OnePlus-11-texto-SMS.jpg",
      publishedAt: "2024-06-19T04:30:28Z",
      content:
        "Alors quApple vient de présenter Apple Intelligence, Google continue de déployer son concurrent de ChatGPT, Gemini, un peu partout sur ses produits et services. Et parmi les applications Google qui p… [+2984 chars]",
    },
    {
      source: {
        id: null,
        name: "Ritholtz.com",
      },
      author: "Barry Ritholtz",
      title: "At the Money: Smart Spending vs. Not Spending",
      description:
        "At the Money: Smart Spending vs. Not Spending  (June 18, 2024) Spending Scolds will tell you that a sailboat, a sports car, or even a latte will be your financial ruin. Is this accurate? Focusing on the cost without considering whether you can afford the item…",
      url: "https://ritholtz.com/2024/06/atm-smartspending-vs-notspending/",
      urlToImage:
        "https://ritholtz.com/wp-content/uploads/2024/04/At-the-Money.jpg",
      publishedAt: "2024-06-19T12:30:16Z",
      content:
        "At the Money: Smart Spending vs. Not Spending  (June 18, 2024)\r\nSpending Scolds will tell you that a sailboat, a sports car, or even a latte will be your financial ruin. Is this accurate? Focusing on… [+11608 chars]",
    },
    {
      source: {
        id: null,
        name: "Xataka Android",
      },
      author: "Pepu Ricca",
      title:
        "El Tensor del Pixel 10 será el punto de inflexión: Google se apunta al 'método Apple' para evitar los problemas de los chips de Samsung",
      description:
        "Todavía, los futuros Google Pixel, los Pixel 9, no han visto la luz. Llegarán el próximo otoño junto con la versión estable de Android 15, que por cierto, va por su tercera beta. De los tres modelos esperados, el Pixel 9 Pro XL desvelaba recientemente su pote…",
      url: "https://www.xatakandroid.com/moviles-android/tensor-pixel-10-sera-punto-inflexion-google-se-apunta-al-metodo-apple-para-evitar-problemas-chips-samsung",
      urlToImage: "https://i.blogs.es/27c8ea/google-pixel-tensor/840_560.jpeg",
      publishedAt: "2024-06-19T09:01:30Z",
      content:
        "Todavía, los futuros Google Pixel, los Pixel 9, no han visto la luz. Llegarán el próximo otoño junto con la versión estable de Android 15, que por cierto, va por su tercera beta. De los tres modelos … [+2459 chars]",
    },
    {
      source: {
        id: null,
        name: "Xataka Android",
      },
      author: "Pepu Ricca",
      title:
        "HyperOS vs MIUI: todas las diferencias entre las capas de personalización de móviles Xiaomi",
      description:
        "Para comprender el software de Xiaomi debemos remontarnos a sus orígenes: nada sería del popular fabricante chino si no hubiera empezado como una capa de personalización para Android. MIUI fue el origen de la empresa, y MIUI 14 la última versión. Lei Jun anun…",
      url: "https://www.xatakandroid.com/sistema-operativo/hyperos-vs-miui-todas-diferencias-capas-personalizacion-moviles-xiaomi",
      urlToImage: "https://i.blogs.es/d6cf9e/hyperos-vs-miui/840_560.jpeg",
      publishedAt: "2024-06-19T15:01:29Z",
      content:
        "Para comprender el software de Xiaomi debemos remontarnos a sus orígenes: nada sería del popular fabricante chino si no hubiera empezado como una capa de personalización para Android. MIUI fue el ori… [+6793 chars]",
    },
    {
      source: {
        id: null,
        name: "Android Authority",
      },
      author: "Mahmoud Itani",
      title:
        "Is it real life or fantasy? EU reportedly happy with Apple for once",
      description:
        "It appears that the EU is satisfied with Apple opening up the iPhone's NFC chip to third-party contactless payment services.",
      url: "https://www.androidauthority.com/eu-happy-apple-nfc-payments-iphone-3452679/",
      urlToImage:
        "https://www.androidauthority.com/wp-content/uploads/2024/05/Apple-Pay-on-iPhone-12-Mini-next-to-many-credit-cards-stock-photo-1.jpg",
      publishedAt: "2024-06-19T13:41:39Z",
      content:
        "<ul><li>Earlier this year, Apple opened up the iPhones NFC chip to third-party contactless payment services in the EU to comply with the DMA.</li><li>Following some extensive evaluation, the EU is re… [+1884 chars]",
    },
    {
      source: {
        id: null,
        name: "Android Authority",
      },
      author: "C. Scott Brown",
      title:
        "Sunbird just won’t quit, is now opening its iMessage on Android app to 171,000 waitlisters",
      description:
        "If you signed up for Sunbird's waitlist back before it was found to be a security and privacy nightmare, you might be gaining access soon.",
      url: "https://www.androidauthority.com/sunbird-waitlist-beta-3452754/",
      urlToImage:
        "https://www.androidauthority.com/wp-content/uploads/2022/04/Apple-iMessages-on-iPhone-stock-photo-4.jpg",
      publishedAt: "2024-06-19T15:57:55Z",
      content:
        "<ul><li>The Sunbird app promised to bring iMessage to Android but was discovered to be a security nightmare.</li><li>The company halted activity for a bit but is now back, rolling out access to its w… [+2264 chars]",
    },
    {
      source: {
        id: null,
        name: "Presse-citron",
      },
      author: "Setra",
      title:
        "Ce service pourrait être la prochaine machine à cash d’Apple, il faudra en profiter tant que c’est gratuit",
      description:
        "Apple a indiqué que les textos via satellites sur iOS 18 seront gratuits. Mais cela va-t-il durer ? Si ces textos par satellite deviennent payants plus tard, ils pourraient devenir une importante source de revenus pour Apple.",
      url: "https://www.presse-citron.net/ce-service-pourrait-etre-la-prochaine-machine-a-cash-dapple-il-faudra-en-profiter-tant-que-cest-gratuit/",
      urlToImage:
        "https://www.presse-citron.net/app/uploads/2024/06/iPhone-AirPods-Pro-2-USB-C-Musique-podcast.jpg",
      publishedAt: "2024-06-19T12:02:16Z",
      content:
        "En 2019, alors que les ventes diPhone étaient inquiétantes, Apple a décidé de diversifier ses activités en lançant une série de services accessibles avec un abonnement payant. La firme avait carrémen… [+4664 chars]",
    },
    {
      source: {
        id: null,
        name: "Presse-citron",
      },
      author: "Jean-Yves Alric",
      title:
        "IA : Apple explique pourquoi votre ancien iPhone ne servira bientôt plus à rien",
      description:
        "Les anciens smartphones d’Apple ne sont pas compatibles avec Apple Intelligence, et il y a de très bonnes raisons pour cela.",
      url: "https://www.presse-citron.net/ia-apple-explique-pourquoi-votre-ancien-iphone-ne-servira-bientot-plus-a-rien/",
      urlToImage:
        "https://www.presse-citron.net/app/uploads/2024/06/test-iphone-15-pro-review-avis.jpg",
      publishedAt: "2024-06-19T07:04:48Z",
      content:
        "Cétait le grand moment du keynote de la WWDC 2024. La firme de Cupertino a présenté Apple Intelligence, ses nouvelles fonctionnalités dIA générative qui permettent de répondre à de nombreuses demande… [+2630 chars]",
    },
    {
      source: {
        id: null,
        name: "Presse-citron",
      },
      author: "Setra",
      title:
        "Cet appareil d’un tout nouveau genre défie le Vision Pro et il ne coûte pas 3 999 euros",
      description:
        "La société Xreal lance un appareil sous Android qui permet d’avoir une expérience de réalité augmentée sans se ruiner.",
      url: "https://www.presse-citron.net/cet-appareil-dun-tout-nouveau-genre-defie-le-vision-pro-et-il-ne-coute-pas-3-999-euros/",
      urlToImage:
        "https://www.presse-citron.net/app/uploads/2024/06/Xreal-Beam-Pro.jpg",
      publishedAt: "2024-06-19T11:03:33Z",
      content:
        "Lorsquon parle de réalité mixte, on pense naturellement aux produits des géants de la tech comme le Vision Pro dApple, ou les produits Quest de Meta. Cependant, il existe dautres entreprises, plus pe… [+4425 chars]",
    },
    {
      source: {
        id: null,
        name: "Presse-citron",
      },
      author: "Romain Pomian-Bonnemaison",
      title:
        "Les marques de TV peuvent-elles encore compter sur l’Euro et les JO 2024 ?",
      description:
        "Inflation, taux d'équipement... les ventes de TV vivent une période de creux - et les marques comptent sur les événements sportifs à venir pour se relancer.",
      url: "https://www.presse-citron.net/les-marques-de-tv-peuvent-elles-encore-compter-sur-leuro-et-les-jo-2024/",
      urlToImage:
        "https://www.presse-citron.net/app/uploads/2024/06/ventes-de-tv-euro-jo-2024-unsplash-jonas-leupe.jpg",
      publishedAt: "2024-06-19T14:47:20Z",
      content:
        "Il y aura-t-il un effet Euro et JO 2024 sur les ventes de téléviseurs ? C’est en tout cas ce qu’espère un secteur fébrile, alors que l’alignement de grands événements sportifs tous les quatre ans boo… [+4858 chars]",
    },
    {
      source: {
        id: null,
        name: "Cracked.com",
      },
      author: "Eli Yudin",
      title: "5 Foods We’ll Never Get to Taste Again Without Science",
      description: "By Eli Yudin Published: June 19th, 2024",
      url: "https://www.cracked.com/article_42564_5-foods-well-never-get-to-taste-again-without-science.html",
      urlToImage:
        "https://s3.crackedcdn.com/phpimages/article/3/4/6/1099346.jpg",
      publishedAt: "2024-06-19T15:00:00Z",
      content:
        "The idea of eating something to extinction is morbid and also, very funny. Obviously Im sad its happened, but the fact that humans have occasionally finished off a whole-ass species with a napkin tuc… [+4483 chars]",
    },
    {
      source: {
        id: null,
        name: "Faz.net",
      },
      author: "https://www.facebook.com/faz",
      title:
        "Hitzige Debatte nach Messerattacke: „Wir müssen mehr und schneller abschieben“",
      description:
        "Nach dem tödlichen Messerangriff von Mannheim forcieren die Innenminister der Länder das Thema Abschiebung nach Afghanistan und Syrien. Auch bei der Ministerpräsidentenkonferenz in Berlin steht das Thema auf der Tagesordnung.",
      url: "https://www.faz.net/podcasts/f-a-z-podcast-fuer-deutschland/hitzige-debatte-nach-messerattacke-wir-muessen-mehr-und-schneller-abschieben-19799807.html",
      urlToImage:
        "https://media1.faz.net/ppmedia/aktuell/politik/1718305279/1.9799821/facebook_teaser_fplus/7b3c5908-23e6-11ef-b46f.jpg",
      publishedAt: "2024-06-19T14:04:13Z",
      content:
        "Wir sprechen mit dem hessischen Innenminister Roman Poseck über mögliche Reaktionen des Rechtsstaates auf Gewalttäter und mit Politikredakteur Alexander Haneke über seine Erfahrungen in Afghanistan.\r… [+762 chars]",
    },
    {
      source: {
        id: null,
        name: "Muyinteresante.com",
      },
      author: "Alvaro Rodriguez",
      title: "Amazfit rebaja hasta su mínimo histórico uno de sus top ventas",
      description:
        "Ahora podemos encontrar el smartwatch Amazfit GTR 3 a un precio como nunca antes lo habíamos encontrado en las ofertas de verano de AliExpress",
      url: "https://www.muyinteresante.com/bazar/65139.html",
      urlToImage:
        "https://imagenes.muyinteresante.com/files/article_social_75/uploads/2024/06/19/66729a532951d.png",
      publishedAt: "2024-06-19T11:00:00Z",
      content:
        "Si en los últimos días comentábamos algunas ofertas increíbles en AliExpress, pues en esta ocasión nos si estás buscando un smartwatch que te acompañe tanto en tu vida diaria como en tus entrenamient… [+5362 chars]",
    },
    {
      source: {
        id: null,
        name: "iMore",
      },
      author: "connor@jewissfamily.co.uk (Connor Jewiss)",
      title:
        "If you want to use Apple's next-generation CarPlay, you'll need a car that supports the wireless version",
      description:
        "Apple's next-generation of CarPlay is just around the corner. But if you want to use it, you'll need to make sure your car supports the wireless version.",
      url: "https://www.imore.com/iphone/if-you-want-to-use-apples-next-generation-carplay-youll-need-a-car-that-supports-the-wireless-version",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/qELJ8L6MkndNdybGGWcQYh-1200-80.jpg",
      publishedAt: "2024-06-19T03:25:53Z",
      content:
        "Apple unveiled its brand new next-generation CarPlay nearly two years ago alongside iOS 16 at WWDC 2022. Fast-forward to WWDC 2024, and we've heard about even more details about how the new software … [+1922 chars]",
    },
    {
      source: {
        id: null,
        name: "CNET",
      },
      author: "Ian Sherr （CNET News） 翻訳校正： 編集部",
      title: "アップル、次期「Vision Pro」の開発を中断し安価なモデルに注力か",
      description:
        "アップルは少なくとも1社のサプライヤーに対し、同社の最新ヘッドセット「Apple Vision Pro」の次期バージョンの開発を中断したと伝えたという。The Informationが報じた。",
      url: "https://japan.cnet.com/article/35220322/",
      urlToImage:
        "https://japan.cnet.com/storage/2024/06/19/3d33860883ea9ac953e20d464efeabbd/applevisionpro-purple_1280x960.jpg",
      publishedAt: "2024-06-19T02:04:00Z",
      content:
        "Apple1MRApple Vision Pro4Vision Pro\r\nThe Information618Apple Vision2025Vision Pro\r\nApple\r\nAppleVision Pro23499599800Meta499.9974800Quest 3\r\niOSMRVision ProCNETScott SteinMetaQuest 3MRStein\r\nApple450\r… [+114 chars]",
    },
    {
      source: {
        id: null,
        name: "MacRumors",
      },
      author: "Tim Hardwick",
      title: "Apple Explains iPhone 15 Pro Requirement for Apple Intelligence",
      description:
        "With iOS 18, iPadOS 18, and macOS Sequoia, Apple is introducing a new personalized AI experience called Apple Intelligence that uses on-device, generative large-language models to enhance the user experience across iPhone, iPad, and Mac.\n\n\n\n\n\nThese new AI fea…",
      url: "https://www.macrumors.com/2024/06/19/apple-iphone-15-pro-requirement-apple-intelligence/",
      urlToImage:
        "https://images.macrumors.com/t/NL4l6iHxp0S0F_C3evm831s7d_U=/2880x/article-new/2023/09/iPhone-15-Pro-lineup.jpg",
      publishedAt: "2024-06-19T11:48:58Z",
      content:
        "With iOS 18, iPadOS 18, and macOS Sequoia, Apple is introducing a new personalized AI experience called Apple Intelligence that uses on-device, generative large-language models to enhance the user ex… [+2478 chars]",
    },
    {
      source: {
        id: null,
        name: "MacRumors",
      },
      author: "Juli Clover",
      title: "Apple Has 'Very Serious' DMA Issues, EU to Enforce Rules 'Soon'",
      description:
        'Apple is facing a "number" of "very serious" issues with its Digital Markets Act compliance in Europe, EU competition commissioner Margrethe Vestager said in an interview with CNBC.\n\n\n\n\n\nThe European Commission opened an investigation into Apple in March to d…',
      url: "https://www.macrumors.com/2024/06/18/apple-dma-issues-eu-rule-enforcement-soon/",
      urlToImage:
        "https://images.macrumors.com/t/WWB3cN-4gbZyF0bdFfAhhqJsjrw=/2500x/article-new/2024/01/App-Store-vs-EU-Feature-2.jpg",
      publishedAt: "2024-06-19T00:14:45Z",
      content:
        'Apple is facing a "number" of "very serious" issues with its Digital Markets Act compliance in Europe, EU competition commissioner Margrethe Vestager said in an interview with CNBC.\r\nThe European Com… [+1599 chars]',
    },
    {
      source: {
        id: null,
        name: "MacRumors",
      },
      author: "Tim Hardwick",
      title:
        "watchOS 11 Gets 'Check In' Feature That Supports Outdoor Workouts",
      description:
        "Apple in iOS 17 added a Check In feature to Messages that allows you to let a loved one know when you've made it back home safely. With watchOS 11, Check In is also coming to Apple Watch, but it's not just in the Messages app that you can activate it.\n\n\n\n\n\nAn…",
      url: "https://www.macrumors.com/2024/06/19/watchos-11-supports-workout-check-in/",
      urlToImage:
        "https://images.macrumors.com/t/oA5GXobgxVjB6pUDy-GTWNbgkys=/1920x/article-new/2024/06/check-in-workout-watchos-11.jpg",
      publishedAt: "2024-06-19T13:47:59Z",
      content:
        "Apple in iOS 17 added a Check In feature to Messages that allows you to let a loved one know when you've made it back home safely. With watchOS 11, Check In is also coming to Apple Watch, but it's no… [+1472 chars]",
    },
    {
      source: {
        id: null,
        name: "Les Numériques",
      },
      author: "Hanna Laufer",
      title:
        "Casque, écouteurs sans fil, enceinte Bluetooth : nos incontournables de l’été",
      description:
        "Que vous soyez en quête d’une enceinte puissante pour animer vos soirées, de nouveaux écouteurs ou d’un casque sans fil pour vous isoler dans une bulle musicale, voici trois appareils incontournables. Et en prime, notre bon plan pour profiter de votre été en …",
      url: "https://www.lesnumeriques.com/publicite/casque-ecouteurs-sans-fil-enceinte-bluetooth-nos-incontournables-de-l-ete-223012.html",
      urlToImage:
        "https://cdn.lesnumeriques.com/optim/native/22/223012/0b1b3107-casque-ecouteurs-sans-fil-enceinte-bluetooth-nos-incontournables-de-l-ete__1200_678__overflow.jpg",
      publishedAt: "2024-06-19T12:00:00Z",
      content:
        "Que vous soyez en quête dune enceinte puissante pour animer vos soirées, de nouveaux écouteurs ou dun casque sans fil pour vous isoler dans une bulle musicale, voici trois appareils incontournables. … [+5720 chars]",
    },
    {
      source: {
        id: null,
        name: "Xatakamovil.com",
      },
      author: "Iván Linares",
      title:
        "Móviles a mitad de precio en el outlet que vende productos de exposición de MediaMarkt",
      description:
        "No todos los días se tienen ofertas casi a mitad de precio para móviles de alta gama, es un buen momento para aprovechar las gangas que actualmente ofrece MediaMarkt: la tienda tiene abierto un outlet en eBay donde rebaja desde iPhone a Samsung Galaxy casi ha…",
      url: "https://www.xatakamovil.com/guias-de-compra/moviles-a-mitad-precio-outlet-que-vende-productos-exposicion-mediamarkt",
      urlToImage: "https://i.blogs.es/99d1f3/original/840_560.jpeg",
      publishedAt: "2024-06-19T08:01:29Z",
      content:
        "No todos los días se tienen ofertas casi a mitad de precio para móviles de alta gama, es un buen momento para aprovechar las gangas que actualmente ofrece MediaMarkt: la tienda tiene abierto un outle… [+2498 chars]",
    },
    {
      source: {
        id: null,
        name: "Xatakamovil.com",
      },
      author: "Iván Linares",
      title:
        "China, donde el smartphone es la llave de la vida. Y el gobierno tiene la copia",
      description:
        "El móvil ha conquistado cualquier porción del planeta, aunque hay un país donde se lleva al extremo el uso del smartphone: China. Con más de 1.100 millones de usuarios de móvil estimados (datos de Statista), el gobierno de aquel país tiene una puerta a la vid…",
      url: "https://www.xatakamovil.com/movil-y-sociedad/china-donde-smartphone-llave-vida-gobierno-tiene-copia",
      urlToImage:
        "https://i.blogs.es/20fe99/portada-china-smartphones/840_560.jpeg",
      publishedAt: "2024-06-19T13:31:30Z",
      content:
        "El móvil ha conquistado cualquier porción del planeta, aunque hay un país donde se lleva al extremo el uso del smartphone: China. Con más de 1.100 millones de usuarios de móvil estimados (datos de St… [+6238 chars]",
    },
    {
      source: {
        id: null,
        name: "TMZ",
      },
      author: "TMZ Staff",
      title:
        "Jessica Biel Spotted for First Time Since Justin Timberlake's DWI Arrest",
      description:
        "Jessica Biel is all about her J-O-B in the aftermath of her husband Justin Timberlake's DWI arrest. The actress was spotted filming her new show, \"The Better Sister,\" Tuesday in NYC ... where she appeared unfazed by her hubby's recent legal drama…",
      url: "https://www.tmz.com/2024/06/19/jessica-biel-first-time-seen-justin-timberlake-husband-dwi-arrest/",
      urlToImage:
        "https://imagez.tmz.com/image/34/16by9/2024/06/19/340b95306ead43b9b8644e9d43fa4c58_xl.jpg",
      publishedAt: "2024-06-19T14:54:13Z",
      content:
        'Jessica Biel is all about her J-O-B in the aftermath of her husband Justin Timberlake\'s DWI arrest.\r\nThe actress was spotted filming her new show, "The Better Sister," Tuesday in NYC ... where she ap… [+1644 chars]',
    },
    {
      source: {
        id: null,
        name: "Rolling Stone",
      },
      author: "Larisha Paul",
      title: "Timbaland and Swizz Beatz Are Bringing Verzuz Back on X",
      description:
        "The online music series blew up during pandemic lockdowns, but hasn't shared new battles since 2022 after the pair settled a lawsuit against the social media app Triller",
      url: "http://www.rollingstone.com/music/music-news/timbaland-swizz-verzuz-comeback-on-x-twitter-1235042068/",
      urlToImage:
        "https://www.rollingstone.com/wp-content/uploads/2024/06/Timbaland-and-Swizz-Beats-verzuz.jpg?crop=0px%2C2px%2C1798px%2C1014px&resize=1600%2C900",
      publishedAt: "2024-06-19T14:00:00Z",
      content:
        "It has been two years since Timbaland and Swizz Beatz last hosted music battles as part of their popular series Verzuz. The indefinite hiatus followed the settlement in 2022 of a lawsuit against the … [+1835 chars]",
    },
    {
      source: {
        id: null,
        name: "Playpcesor.com",
      },
      author: "Esor Huang",
      title:
        "如何使用《高效人生工作法圖解》？下載試閱本，免費報名專家對談直播！",
      description:
        "今天這篇文章，我想跟大家分享《 高效人生工作法圖解 》這本書的使用方法，以及書中我們設計的各種細節（說不定很多朋友還沒發現）。 如果想要了解內容創作上的心路歷程，歡迎參考前一篇文章： 《高效人生工作法圖解》是一本怎麼樣的書，與兩年來的寫作歷程",
      url: "https://www.playpcesor.com/2024/06/blog-post_19.html",
      urlToImage:
        "https://blogger.googleusercontent.com/img/a/AVvXsEhikuuyWS4VL-C-YSVi72CU1hJC4jN_6KgZ7GaiLCMOupZZ_8hMy7T2XOkplS5W3H_BirS5f4h6rAvF2FBRr0OzgCYs2jhqyGQ-K0QAQKSCmCdfoEAYJtS5m0OdZ0TFNzVYRJvNf_w2fgQ46Kb9rssTw9TleTaV1AqZcJXS40YGKprz0GmPggwV=w1200-h630-p-k-no-nu",
      publishedAt: "2024-06-19T14:01:00Z",
      content:
        "今天這篇文章，我想跟大家分享《高效人生工作法圖解》這本書的使用方法，以及書中我們設計的各種細節（說不定很多朋友還沒發現）。\r\n如果想要了解內容創作上的心路歷程，歡迎參考前一篇文章：《高效人生工作法圖解》是一本怎麼樣的書，與兩年來的寫作歷程\r\n專家對談新書線上講座，立刻免費報名：\r\n但是，在進入主題之前，我首先要跟大家公佈一個超級棒的活動消息。因為這本書涵蓋了從知識管理、生產力工具使用，到習慣養成… [+4698 chars]",
    },
    {
      source: {
        id: null,
        name: "tagesschau.de",
      },
      author: "tagesschau.de",
      title: "Marktbericht: Stabilisierung kommt ins Stocken",
      description:
        "Dank KI-Euphorie und Zinshoffnungen in den USA hat sich der DAX zuletzt stabilisiert. Zur Wochenmitte wird er aber wohl wenig verändert starten. Denn von der Wall Street gehen keine neuen Impulse aus.",
      url: "https://www.tagesschau.de/wirtschaft/finanzen/marktberichte/marktbericht-dax-dow-jones-boerse-aktien-zinsen-102.html",
      urlToImage:
        "https://images.tagesschau.de/image/9adc317c-55b4-4063-94b8-b3437cee8056/AAABkBGaIcY/AAABjwnlFvA/16x9-1280/boerse-229.jpg",
      publishedAt: "2024-06-19T05:46:04Z",
      content:
        "Stand: 19.06.2024 07:46 Uhr\r\nDank KI-Euphorie und Zinshoffnungen in den USA hat sich der DAX zuletzt stabilisiert. Zur Wochenmitte wird er aber wohl wenig verändert starten. Denn von der Wall Street … [+6016 chars]",
    },
    {
      source: {
        id: null,
        name: "Caschys Blog",
      },
      author: "Benjamin Mamerow",
      title: "Apple plant für 2025 angeblich günstigeres Vision-Headset",
      description:
        "Wie das Medium The Information informiert, soll Apple für die nächste Iteration eines eigenen VR-Headsets nicht mehr planen, noch mehr in Richtung Premium zu gehen, sondern stattdessen vorhaben, eine kostengünstigere Variante zu entwickeln. Erscheinen könnte …",
      url: "https://stadt-bremerhaven.de/apple-plant-fuer-2025-angeblich-guenstigeres-vision-headset/",
      urlToImage:
        "https://stadt-bremerhaven.de/wp-content/uploads/2023/07/apple-vision-pro-2.jpg",
      publishedAt: "2024-06-19T08:00:19Z",
      content:
        "Wie das Medium The Information informiert, soll Apple für die nächste Iteration eines eigenen VR-Headsets nicht mehr planen, noch mehr in Richtung Premium zu gehen, sondern stattdessen vorhaben, eine… [+1096 chars]",
    },
    {
      source: {
        id: null,
        name: "Caschys Blog",
      },
      author: "Olli",
      title:
        "Apple: Neue Website „Help me choose“ hilft bei der Auswahl des Macs",
      description:
        "Apple hat in seinem Store eine neue Webseite eingerichtet. „Help me choose“ heißt das Ganze und ist mehr oder weniger eine kleine Umfrage, die euch dabei helfen soll, den richtigen Mac auszuwählen – solltet ihr einen kaufen wollen. Ihr beantwortet...Zum Beitr…",
      url: "https://stadt-bremerhaven.de/apple-neue-website-help-me-choose-hilft-bei-der-auswahl-des-macs/",
      urlToImage:
        "https://stadt-bremerhaven.de/wp-content/uploads/2024/06/SCR-20240619-frbi-2.jpg",
      publishedAt: "2024-06-19T10:05:45Z",
      content:
        "Apple hat in seinem Store eine neue Webseite eingerichtet. „Help me choose“ heißt das Ganze und ist mehr oder weniger eine kleine Umfrage, die euch dabei helfen soll, den richtigen Mac auszuwählen – … [+795 chars]",
    },
    {
      source: {
        id: null,
        name: "Caschys Blog",
      },
      author: "Benjamin Mamerow",
      title: "MacBook Pro: M4-Modelle angeblich noch zum Ende des Jahres",
      description:
        "Mark Gurman von Bloomberg mutmaßte schon im März, dass Apple bereits an MacBook-Pro-Modellen mit dem neuen M4-Chipsatz arbeiten könnte. Nun heißt es von Ross Young, CEO von Display Supply Chain Consultants, dass genau diese M4-Modelle im letzten Quartal diese…",
      url: "https://stadt-bremerhaven.de/macbook-pro-m4-modelle-angeblich-noch-zum-ende-des-jahres/",
      urlToImage:
        "https://stadt-bremerhaven.de/wp-content/uploads/2021/12/Apple-Logo-Shop.jpg",
      publishedAt: "2024-06-19T05:00:00Z",
      content:
        "Mark Gurman von Bloomberg mutmaßte schon im März, dass Apple bereits an MacBook-Pro-Modellen mit dem neuen M4-Chipsatz arbeiten könnte. Nun heißt es von Ross Young, CEO von Display Supply Chain Consu… [+915 chars]",
    },
    {
      source: {
        id: null,
        name: "Caschys Blog",
      },
      author: "caschy",
      title: "Wero: Internetbezahldienst soll am 2. Juli starten",
      description:
        "Wero, ein neues Zahlungssystem aus Europa, wurde unter der Führung der European Payments Initiative (EPI) entwickelt, um mit bekannten Diensten wie PayPal und Apple Pay zu konkurrieren. Als digitale Wallet konzipiert, erleichtert Wero sowohl Smartphone-zu-Sma…",
      url: "https://stadt-bremerhaven.de/wero-internetbezahldienst-soll-am-2-juli-starten/",
      urlToImage:
        "https://stadt-bremerhaven.de/wp-content/uploads/2024/05/1695305157634-1.jpg",
      publishedAt: "2024-06-19T09:08:30Z",
      content:
        "Wero, ein neues Zahlungssystem aus Europa, wurde unter der Führung der European Payments Initiative (EPI) entwickelt, um mit bekannten Diensten wie PayPal und Apple Pay zu konkurrieren. Als digitale … [+1777 chars]",
    },
    {
      source: {
        id: null,
        name: "Frandroid",
      },
      author: "Nathan Le Gohlisse",
      title:
        "Apple miserait sur une approche plus maline qu’un simple Vision Pro 2",
      description:
        "Presque 6 mois après le lancement de son Vision Pro, Apple commencerait à comprendre qu'il vaut mieux se concentrer à l'avenir sur le développement d'un nouveau modèle plus abordable. Selon de nouvelles informations publiées en ligne, la conception du Vision …",
      url: "https://www.frandroid.com/marques/apple/2052818_apple-miserait-sur-une-approche-plus-maline-quun-simple-vision-pro-2",
      urlToImage:
        "https://images.frandroid.com/wp-content/uploads/2024/04/3-mois-avec-apple-vision-pro-peut-on-encore-y-croire-2-31-screenshot.jpg",
      publishedAt: "2024-06-19T12:27:30Z",
      content:
        "Presque 6 mois après le lancement de son Vision Pro, Apple commencerait à comprendre qu'il vaut mieux se concentrer à l'avenir sur le développement d'un nouveau modèle plus abordable. Selon de nouvel… [+3332 chars]",
    },
    {
      source: {
        id: null,
        name: "Frandroid",
      },
      author: "Ulrich Rozier",
      title: "Ne vous précipitez pas sur le MacBook Pro : voici pourquoi",
      description:
        "Vous hésitez à investir dans un MacBook Pro ? Voici pourquoi vous devriez attendre quelques mois avant de vous décider.",
      url: "https://www.frandroid.com/produits-android/ordinateurs/pc-portables/2053006_ne-vous-precipitez-pas-sur-le-macbook-pro-voici-pourquoi",
      urlToImage:
        "https://images.frandroid.com/wp-content/uploads/2023/12/macbook-pro-m3-ecran.jpeg",
      publishedAt: "2024-06-19T05:20:40Z",
      content:
        "Vous hésitez à investir dans un MacBook Pro ? Voici pourquoi vous devriez attendre quelques mois avant de vous décider.\r\nMacBook Pro M3 // Source : Brice Zerouk pour Frandroid\r\nSi vous avez un matéri… [+2191 chars]",
    },
    {
      source: {
        id: null,
        name: "Frandroid",
      },
      author: "Corentin Béchade",
      title:
        "L’intelligence artificielle n’est « pas du tout » un moyen de vendre des nouveaux iPhone selon Apple",
      description:
        "Alors qu’Apple a enfin mis les deux pieds dans le monde de l’intelligence artificielle lors de la WWDC, les clients et clientes de la marque ne pourront pas y goûter sans un iPhone très récent. L’entreprise détaille les raisons derrière ce choix.",
      url: "https://www.frandroid.com/marques/apple/2053038_lintelligence-artificielle-nest-pas-du-tout-un-moyen-de-vendre-des-nouveaux-iphone-selon-apple",
      urlToImage:
        "https://images.frandroid.com/wp-content/uploads/2024/05/16052024-dsc00067apple-ipad-pro-m4-2024-frandroid.jpg",
      publishedAt: "2024-06-19T07:33:10Z",
      content:
        "Alors quApple a enfin mis les deux pieds dans le monde de lintelligence artificielle lors de la WWDC, les clients et clientes de la marque ne pourront pas y goûter sans un iPhone très récent. Lentrep… [+3376 chars]",
    },
    {
      source: {
        id: null,
        name: "Frandroid",
      },
      author: "Manuel Castejon",
      title: "Netflix ne sera bientôt plus disponible sur ces appareils",
      description:
        "Pour assurer une bonne expérience à tous les utilisateurs, Netflix annonce que plusieurs appareils ne pourront plus faire tourner l'application. En voici la liste.",
      url: "https://www.frandroid.com/services/svod/2053222_netflix-ne-sera-bientot-plus-disponible-sur-ces-appareils",
      urlToImage:
        "https://images.frandroid.com/wp-content/uploads/2023/08/netflix-frandroid-illustration-2.jpg",
      publishedAt: "2024-06-19T09:21:27Z",
      content:
        "Pour assurer une bonne expérience à tous les utilisateurs, Netflix annonce que plusieurs appareils ne pourront plus faire tourner l'application. En voici la liste.\r\nSource : Frandroid\r\nPlutôt aucune … [+2443 chars]",
    },
    {
      source: {
        id: null,
        name: "Frandroid",
      },
      author: "Corentin Béchade",
      title:
        "3 400 000 000 000 dollars : Nvidia devient l’entreprise la plus valorisée au monde, devant Apple et Microsoft",
      description:
        "3 400 milliards de dollars. En deux ans, Nvidia a fait exploser son cours de la bourse pour devenir l’entreprise publique la plus valorisée au monde. Un exploit qui explique par deux petites lettres : IA.",
      url: "https://www.frandroid.com/marques/nvidia/2053010_3-400-000-000-000-dollars-nvidia-devient-lentreprise-la-plus-valorisee-au-monde-devant-apple-et-microsoft",
      urlToImage:
        "https://images.frandroid.com/wp-content/uploads/2024/03/keynote-by-nvidia-ceo-jensen-huang-at-2024-siepr-economic-summit-48-49-screenshot.jpg",
      publishedAt: "2024-06-19T05:51:42Z",
      content:
        "3 400 milliards de dollars. En deux ans, Nvidia a fait exploser son cours de la bourse pour devenir lentreprise publique la plus valorisée au monde. Un exploit qui explique par deux petites lettres :… [+3465 chars]",
    },
    {
      source: {
        id: null,
        name: "Frandroid",
      },
      author: "Ulrich Rozier",
      title:
        "Le premier casque sans fil Sonos Ace : un problème de bruit parasite détecté et bientôt neutralisé",
      description:
        "Vous avez acheté le nouveau casque Sonos Ace et vous entendez un bruit de scintillement ? Vous n'êtes pas les seuls !",
      url: "https://www.frandroid.com/produits-android/audio/casque-audio/2053516_le-premier-casque-sans-fil-sonos-ace-un-probleme-de-bruit-parasite-detecte-et-bientot-neutralise",
      urlToImage:
        "https://images.frandroid.com/wp-content/uploads/2024/05/sonos-ace-dsc01265-frandroid.jpeg",
      publishedAt: "2024-06-19T13:05:09Z",
      content:
        "Vous avez acheté le nouveau casque Sonos Ace et vous entendez un bruit de scintillement ? Vous n'êtes pas les seuls ! \r\nSonos Ace // Source : Frandroid\r\nLe premier casque Sonos Ace est enfin disponib… [+2330 chars]",
    },
    {
      source: {
        id: null,
        name: "Frandroid",
      },
      author: "Ulrich Rozier",
      title: "Free lance une nouvelle offre Freebox : la moins chère du marché",
      description:
        "Vous cherchez une nouvelle box internet à petit prix ? Free vient de lancer une offre assez intéressante pour sa Freebox Révolution Light.",
      url: "https://www.frandroid.com/telecom/forfait-internet/2053040_free-lance-une-nouvelle-offre-freebox-la-moins-chere-du-marche",
      urlToImage:
        "https://images.frandroid.com/wp-content/uploads/2023/12/big-bang-store-5-alexis-anice.jpg",
      publishedAt: "2024-06-19T06:50:16Z",
      content:
        "Vous cherchez une nouvelle box internet à petit prix ? Free vient de lancer une offre assez intéressante pour sa Freebox Révolution Light.\r\nLe logo Free // Source : Alexis Anice / Free\r\nL’année derni… [+3262 chars]",
    },
    {
      source: {
        id: null,
        name: "Frandroid",
      },
      author: "Ulrich Rozier",
      title:
        "Bientôt un nouveau concurrent de taille pour Nvidia, AMD et Intel",
      description:
        "Samsung est en train de se préparer à entrer sur le marché des GPU.",
      url: "https://www.frandroid.com/marques/samsung/2053012_bientot-un-nouveau-concurrent-de-taille-pour-nvidia-amd-et-intel",
      urlToImage:
        "https://images.frandroid.com/wp-content/uploads/2024/06/samsung-marque-scaled.jpg",
      publishedAt: "2024-06-19T05:48:48Z",
      content:
        "Samsung est en train de se préparer à entrer sur le marché des GPU.\r\nDans le monde du PC, Samsung est une entreprise reconnue pour ses composants de mémoire et de stockage. Mais la firme coréenne pou… [+3200 chars]",
    },
  ];
  constructor() {
    super();
    console.log("Hello I am a constructor from News Component");

    this.state = { articles: this.articles, loading: false };
  }
  render() {
    return (
      <div className="container my-3">
        <h2>ReactNews- Top Headlines</h2>
        <div className="row">
          {this.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title.slice(0, 45)}
                  description={
                    element.description
                      ? element.description.length > 120
                        ? element.description.slice(0, 120) + "..."
                        : element.description
                      : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
} //1009d5eaee264c65a90cc70db1ac975b

export default News;
