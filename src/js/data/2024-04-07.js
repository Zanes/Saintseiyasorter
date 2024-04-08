/* property
    characterData, checked, img, key, name, nonanimu, options, opts, rarity,
    series, status, sub, tooltip, trap, when
*/
/* global
    dataSet,
    dataSetVersion
*/
/* eslint-disable no-global-assign */
dataSetVersion = "2024-04-07" // Change this when creating a new data set version. YYYY-MM-DD format.
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
  // GOLDS ORIGINAL
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
  },

// GOLDS LOST CANVAS
{
  name: "Aries Shion",
  img: "https://i.imgur.com/clK030U.jpg",
  opts: {
    series: [ "tlc, nd" ],
    rank: ["gold"]
  }
},
{
  name: "Taurus Hasgard",
  img: "https://i.imgur.com/tQfqAoT.jpg",
  opts: {
    series: [ "tlc" ],
    rank: ["gold"]
  }
},
{
  name: "Taurus Teneo",
  img: "https://i.imgur.com/rNlKK1x.jpg",
  opts: {
    series: [ "tlc" ],
    rank: ["gold"]
  }
},
{
  name: "Gemini Aspros",
  img: "https://i.imgur.com/NfS5g2o.jpg",
  opts: {
    series: [ "tlc" ],
    rank: ["gold"]
  }
},
{
  name: "Gemini Defteros",
  img: "https://i.imgur.com/xnpxXuK.jpg",
  opts: {
    series: [ "tlc" ],
    rank: ["gold"]
  }
},
{
  name: "Cancer Sage",
  img: "https://i.imgur.com/nKTlMcz.jpg",
  opts: {
    series: [ "tlc" ],
    rank: ["gold"]
  }
},
{
  name: "Cancer Manigoldo",
  img: "https://i.imgur.com/Fe4YGUF.jpg",
  opts: {
    series: [ "tlc" ],
    rank: ["gold"]
  }
},
{
  name: "Leo Ilias",
  img: "https://i.imgur.com/yOTW1MB.jpg",
  opts: {
    series: [ "tlc" ],
    rank: ["gold"]
  }
},
{
  name: "Leo Regulus",
  img: "https://i.imgur.com/WdxPoZe.jpg",
  opts: {
    series: [ "tlc" ],
    rank: ["gold"]
  }
},
{
  name: "Virgo Asmita",
  img: "https://i.imgur.com/32aiLh3.jpg",
  opts: {
    series: [ "tlc" ],
    rank: ["gold"]
  }
},
{
  name: "Scorpio Kardia",
  img: "https://i.imgur.com/V3IhKUO.jpg",
  opts: {
    series: [ "tlc" ],
    rank: ["gold"]
  }
},
{
  name: "Sagittarius Sisyphus",
  img: "https://i.imgur.com/CBLFMtc.jpg",
  opts: {
    series: [ "tlc" ],
    rank: ["gold"]
  }
},
{
  name: "Capricorn El Cid",
  img: "https://i.imgur.com/BbNQJAZ.jpg",
  opts: {
    series: [ "tlc" ],
    rank: ["gold"]
  }
},
{
  name: "Aquarius Degel",
  img: "https://i.imgur.com/JFL7yDw.jpg",
  opts: {
    series: [ "tlc" ],
    rank: ["gold"]
  }
},
{
  name: "Pisces Albafica",
  img: "https://i.imgur.com/2PMIJAp.jpg",
  opts: {
    series: [ "tlc" ],
    rank: ["gold"]
  }
},
// GOLDS LOST CANVAS GAIDEN
{
  name: "Scorpio Zaphiri",
  img: "https://i.imgur.com/zUEeuoo.jpg",
  opts: {
    series: [ "tlcg" ],
    rank: ["gold"]
  }
},
{
  name: "Aquarius Krest",
  img: "https://i.imgur.com/M00R7NO.jpg",
  opts: {
    series: [ "tlcg" ],
    rank: ["gold"]
  }
},
{
  name: "Pisces Lugonis",
  img: "https://i.imgur.com/0AzwFO9.jpg",
  opts: {
    series: [ "tlcg" ],
    rank: ["gold"]
  }
},
{
  name: "Libra Itia",
  img: "https://i.imgur.com/wdtnTv9.jpg",
  opts: {
    series: [ "tlcg" ],
    rank: ["gold"]
  }
},
{
  name: "Aries Gateguard",
  img: "https://i.imgur.com/kJsf3oq.jpg",
  opts: {
    series: [ "tlcg" ],
    rank: ["gold"]
  }
},
{
  name: "Aries Avenir",
  img: "https://i.imgur.com/gpBokCT.jpg",
  opts: {
    series: [ "tlcg" ],
    rank: ["gold"]
  }
},
{
  name: "Taurus Francisca",
  img: "https://i.imgur.com/nOfpkKt.jpg",
  opts: {
    series: [ "tlcg" ],
    rank: ["gold"]
  }
},
{
  name: "Sagittarius Aeras",
  img: "https://i.imgur.com/rH5oFhp.jpg",
  opts: {
    series: [ "tlcg" ],
    rank: ["gold"]
  }
},
// GOLDS NEXT DIMENSION
{
  name: "Taurus Ox",
  img: "https://i.imgur.com/DRtLxlE.jpg",
  opts: {
    series: [ "nd" ],
    rank: ["gold"]
  }
},
{
  name: "Gemini Cain",
  img: "https://i.imgur.com/dGx2tAu.jpg",
  opts: {
    series: [ "nd" ],
    rank: ["gold"]
  }
},
{
  name: "Gemini Abel",
  img: "https://i.imgur.com/iX1IY9Y.jpg",
  opts: {
    series: [ "nd" ],
    rank: ["gold"]
  }
},
{
  name: "Cancer Deathtoll",
  img: "https://i.imgur.com/JbQ7KMk.jpg",
  opts: {
    series: [ "nd" ],
    rank: ["gold"]
  }
},
{
  name: "Leo Kaiser",
  img: "https://i.imgur.com/XDFUD9Q.jpg",
  opts: {
    series: [ "nd" ],
    rank: ["gold"]
  }
},
{
  name: "Virgo Shijima",
  img: "https://i.imgur.com/azxvE45.jpg",
  opts: {
    series: [ "nd" ],
    rank: ["gold"]
  }
},
{
  name: "Scorpio Écarlate",
  img: "https://i.imgur.com/7jVRlLX.jpg",
  opts: {
    series: [ "nd" ],
    rank: ["gold"]
  }
},
{
  name: "Ophiucus Odysseus",
  img: "https://i.imgur.com/ISjrtur.jpg",
  opts: {
    series: [ "nd" ],
    rank: ["gold"]
  }
},
{
  name: "Sagittarius Gestalt",
  img: "https://i.imgur.com/I1I76FF.jpg",
  opts: {
    series: [ "nd" ],
    rank: ["gold"]
  }
},
{
  name: "Capricorn Izo",
  img: "https://i.imgur.com/iFe2Rvi.jpg",
  opts: {
    series: [ "nd" ],
    rank: ["gold"]
  }
},
{
  name: "Aquarius Mystoria",
  img: "https://i.imgur.com/6HGCTra.jpg",
  opts: {
    series: [ "nd" ],
    rank: ["gold"]
  }
},
{
  name: "Pisces Cardinale",
  img: "https://i.imgur.com/pwyCN6o.jpg",
  opts: {
    series: [ "nd" ],
    rank: ["gold"]
  }
},
{
  name: "Ophiucus Asklepios",
  img: "https://i.imgur.com/Qgr3zU1.jpg",
  opts: {
    series: [ "nd" ],
    rank: ["gold"]
  }
},
// GOLDS OMEGA
{
  name: "Aries Kiki",
  img: "https://i.imgur.com/vFSFz56.jpg",
  opts: {
    series: [ "omega" ],
    rank: ["gold"]
  }
},
{
  name: "Taurus Harbinger",
  img: "https://i.imgur.com/FTxYaeS.jpg",
  opts: {
    series: [ "omega" ],
    rank: ["gold"]
  }
},
{
  name: "Gemini Paradox",
  img: "https://i.imgur.com/IEMesG4.jpg",
  opts: {
    series: [ "omega" ],
    rank: ["gold"]
  }
},
{
  name: "Gemini Integra",
  img: "https://i.imgur.com/WWV45i4.jpg",
  opts: {
    series: [ "omega" ],
    rank: ["gold"]
  }
},
{
  name: "Cancer Schiller",
  img: "https://i.imgur.com/PQoq77F.jpg",
  opts: {
    series: [ "omega" ],
    rank: ["gold"]
  }
},
{
  name: "Leo Mycenae",
  img: "https://i.imgur.com/VvOJ2IC.jpg",
  opts: {
    series: [ "omega" ],
    rank: ["gold"]
  }
},
{
  name: "Virgo Fudou",
  img: "https://i.imgur.com/Xe7Y0rK.jpg",
  opts: {
    series: [ "omega" ],
    rank: ["gold"]
  }
},
{
  name: "Libra Genbu",
  img: "https://i.imgur.com/KnAs7LD.jpg",
  opts: {
    series: [ "omega" ],
    rank: ["gold"]
  }
},
{
  name: "Scorpio Sonia",
  img: "https://i.imgur.com/S5Ro8So.jpg",
  opts: {
    series: [ "omega" ],
    rank: ["gold"]
  }
},
{
  name: "Capricorn Ionia",
  img: "https://i.imgur.com/UbiItoI.jpg",
  opts: {
    series: [ "omega" ],
    rank: ["gold"]
  }
},
{
  name: "Aquarius Tokisada",
  img: "https://i.imgur.com/dC8Mmt0.jpg",
  opts: {
    series: [ "omega" ],
    rank: ["gold"]
  }
},
{
  name: "Pisces Amor",
  img: "https://i.imgur.com/1MxNHT9.jpg",
  opts: {
    series: [ "omega" ],
    rank: ["gold"]
  }
},
// GOLDS DARK WING
{
  name: "Aries Theseus",
  img: "https://i.imgur.com/N2vmcIv.jpg",
  opts: {
    series: [ "dw" ],
    rank: ["gold"]
  }
},
{
  name: "Taurus Ain",
  img: "https://i.imgur.com/TEX5KES.jpg",
  opts: {
    series: [ "dw" ],
    rank: ["gold"]
  }
},
{
  name: "Gemini Sojirou",
  img: "https://i.imgur.com/ZuAvQwI.jpg",
  opts: {
    series: [ "dw" ],
    rank: ["gold"]
  }
},
{
  name: "Cancer Crematorio",
  img: "https://i.imgur.com/xnaD7gx.jpg",
  opts: {
    series: [ "dw" ],
    rank: ["gold"]
  }
},
{
  name: "Leo Vassilios",
  img: "https://i.imgur.com/QqCFwc5.jpg",
  opts: {
    series: [ "dw" ],
    rank: ["gold"]
  }
},
{
  name: "Virgo Renge",
  img: "https://i.imgur.com/RYa1Eg2.jpg",
  opts: {
    series: [ "dw" ],
    rank: ["gold"]
  }
},
{
  name: "Libra Kogetsuki",
  img: "https://i.imgur.com/p6taCNo.jpg",
  opts: {
    series: [ "dw" ],
    rank: ["gold"]
  }
},
{
  name: "Scorpio Eulalia",
  img: "https://i.imgur.com/iKYmKsk.jpg",
  opts: {
    series: [ "dw" ],
    rank: ["gold"]
  }
},
{
  name: "Sagittarius Aiolos (DW)",
  img: "https://i.imgur.com/a3hjQmn.jpg",
  opts: {
    series: [ "dw" ],
    rank: ["gold"]
  }
},
{
  name: "Capricorn Eito",
  img: "https://i.imgur.com/7O5KAl7.jpg",
  opts: {
    series: [ "dw" ],
    rank: ["gold"]
  }
},
{
  name: "Aquarius Tristan",
  img: "https://i.imgur.com/gQVYZqK.jpg",
  opts: {
    series: [ "dw" ],
    rank: ["gold"]
  }
},
{
  name: "Pisces Alfried",
  img: "https://i.imgur.com/sZGGd6F.jpg",
  opts: {
    series: [ "dw" ],
    rank: ["gold"]
  }
},
{
  name: "Aries Theseus",
  img: "https://i.imgur.com/N2vmcIv.jpg",
  opts: {
    series: [ "dw" ],
    rank: ["gold"]
  }
}
  //
  // END
  //
]
