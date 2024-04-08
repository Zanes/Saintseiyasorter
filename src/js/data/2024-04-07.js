/* property
    characterData, checked, img, key, name, nonanimu, options, opts, rarity,
    series, status, sub, tooltip, trap, when
*/
/* global
    dataSet,
    dataSetVersion
*/
/* eslint-disable no-global-assign */
dataSetVersion = "2024-04-08" // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {}
dataSet[dataSetVersion].options = [
  {
    name: "Filter by Series",
    key: "series",
    tooltip: "Check this to restrict to certain series.",
    checked: true,
    sub: [
      { name: "Original", tooltip: "Basically everything originated from the classic manga by Masami Kurumada", key: "sts" },
      { name: "Lost Canvas", tooltip: "Only New Characters introduced in the series by Shiori Teshirogi", key: "tlc" },
      { name: "Lost Canvas Gaiden", tooltip: "New Characters introduced in Lost Canvas Gaiden", key: "tlcg" },
      { name: "Next Dimension", tooltip: "For New Characters introduced in the official sequel by Masami Kurumada", key: "nd" },
      { name: "Omega", tooltip: "New Characters introduced in the (mostly) anime only Saint Seiya Omega", key: "omega" },
      { name: "Saintia Sho", tooltip: "New Characters from this series by Chimaki Kuori", key: "sho" },
      { name: "Dark Wing", tooltip: "For the characters introduced in the recurring series by Saito and Ueda", key: "dw" },
      { name: "Soul of Gold", tooltip: "New Characters for this Anime Only sequel", key: "sog" }
    ]
  },
  {
    name: "Filter by Rank",
    key: "rank",
    tooltip: "Check this to restrict characters that appear.",
    checked: true,
    sub: [
      { name: "Gold Saints", key: "gold" },
      { name: "Soon.tm", tooltip: "aka datamined", key: "soon" },
      { name: "Never.tm", key: "never" },
      { name: "Marinas", key: "marina" }
    ]
  },
  {
    name: "Manga-Exclusive charas",
    key: "manga_exclusive",
    checked: false,
    forced_inclusive: true,
    tooltip: "Uncheck this to exclude manga-exclusive characters added into the game."
  }
]

dataSet[dataSetVersion].characterData = [
  // Golds OC
  {
    name: "Aries Mu",
    img: "https://i.imgur.com/kI6ReWI.jpg",
    opts: {
      series: [ "sts" ],
      rank: ["gold"]
    }
  },
  {
    name: "Taurus Aldebaran",
    img: "https://i.imgur.com/kx4fJch.jpg",
    opts: {
      series: [ "sts" ],
      rank: ["gold"]
    }
  },
  {
    name: "Gemini Saga",
    img: "https://i.imgur.com/Jwb5by8.jpg",
    opts: {
      series: [ "sts" ],
      rank: ["gold"]
    }
  },
  {
    name: "Kanon",
    img: "https://i.imgur.com/7CuPl9Z.jpg",
    opts: {
      series: [ "sts" ],
      rank: ["gold", "marina"]
    }
  },
  {
    name: "Cancer Deathmask",
    img: "https://i.imgur.com/babfim4.jpg",
    opts: {
      series: [ "sts" ],
      rank: ["gold"]
    }
  },
  {
    name: "Leo Aiolia",
    img: "https://i.imgur.com/MTH2taK.jpg",
    opts: {
      series: [ "sts" ],
      rank: ["gold"]
    }
  },
  {
    name: "Virgo Shaka",
    img: "https://i.imgur.com/h0DgFYN.jpg",
    opts: {
      series: [ "sts"],
      rank: ["gold"]
    }
  },
  {
    name: "Libra Dohko",
    img: "https://i.imgur.com/cfP8FH5.jpg",
    opts: {
      series: [ "sts", "tlc", "nd"],
      rank: ["gold"]
    }
  },
  {
    name: "Scorpio Milo",
    img: "https://i.imgur.com/WgFv1uu.jpg",
    opts: {
      series: [ "sts" ],
      rank: ["gold"]
    }
  },
  {
    name: "Sagittarius Aiolos",
    img: "https://i.imgur.com/Ar3W3o1.jpg",
    opts: {
      series: [ "sts" ],
      rank: ["gold"]
    }
  },
  {
    name: "Capricorn Shura",
    img: "https://i.imgur.com/XPxc7lf.jpg",
    opts: {
      series: [ "sts" ],
      rank: ["gold"]
    }
  },
  {
    name: "Aquarius Camus",
    img: "https://i.imgur.com/MS4P5SH.jpg",
    opts: {
      series: [ "sts" ],
      rank: ["gold"]
    }
  },
  {
    name: "Pisces Aphrodite",
    img: "https://i.imgur.com/dEZrICj.jpg",
    opts: {
      series: [ "sts" ],
      rank: ["gold"]
    }
  }

  //
  // END
  //
]
