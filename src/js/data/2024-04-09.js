/* property
    characterData, checked, img, key, name, nonanimu, options, opts, rarity,
    series, status, sub, tooltip, trap, when
*/
/* global
    dataSet,
    dataSetVersion
*/
/* eslint-disable no-global-assign */
dataSetVersion = "2024-04-09" // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {}
dataSet[dataSetVersion].options = [
  {
    name: "Filter by Series",
    key: "series",
    tooltip: "Check this to restrict to certain series.",
    checked: true,
    sub: [
      { name: "Original", tooltip: "Basically everything originated from the classic manga by Masami Kurumada", key: "sts" },
      { name: "Episode G", key: "epig"},
      { name: "LostCanvas", tooltip: "Only New Characters introduced in the series by Shiori Teshirogi", key: "tlc" },
      { name: "LostCanvas Gaiden", tooltip: "New Characters introduced in Lost Canvas Gaiden", key: "tlcg" },
      { name: "Next Dimension", tooltip: "For New Characters introduced in the official sequel by Masami Kurumada", key: "nd" },
      { name: "Omega", tooltip: "New Characters introduced in the (mostly) anime only Saint Seiya Omega", key: "omega" },
      { name: "Saintia Sho", tooltip: "New Characters from this series by Chimaki Kuori", key: "sho" },
      { name: "Dark Wing", tooltip: "For the characters introduced in the recurring series by Saito and Ueda", key: "dw" },
      { name: "Soul of Gold", tooltip: "New Characters for this Anime Only sequel", key: "sog" },
      { name: "Time Odyssey", key: "timeody"}
    ]
  },
  {
    name: "Filter by Rank / Army",
    key: "rank",
    tooltip: "Check this to restrict characters that appear.",
    checked: true,
    sub: [
      { name: "Gods/Representatives", tooptip:"aka Hades/Poseidon/Saori and even Pandora", key: "god"},  
      { name: "Gold Saints", key: "gold" },
      { name: "Silver Saints", key: "silver" },
      { name: "Bronze Saints", key: "bronze" },
      { name: "Marinas", key: "marina" },
      { name: "God Warriors", key: "gw"},
      { name: "Specters", key: "hades"}
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
    series: [ "tlc", "nd" ],
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
},
// GOD WARRIORS
{
  name: "Dubhe Siegfried",
  img: "https://i.imgur.com/UwEwIIv.jpg",
  opts: {
    series: [ "sts" ],
    rank: ["gw"]
  }
},
{
  name: "Merak Hagen",
  img: "https://i.imgur.com/YNE0Cbz.jpg",
  opts: {
    series: [ "sts" ],
    rank: ["gw"]
  }
},
{
  name: "Phecda Thor",
  img: "https://i.imgur.com/97C3jNb.jpg",
  opts: {
    series: [ "sts" ],
    rank: ["gw"]
  }
},
{
  name: "Megrez Alberich",
  img: "https://i.imgur.com/FJV8pEz.jpg",
  opts: {
    series: [ "sts" ],
    rank: ["gw"]
  }
},
{
  name: "Alioth Fenrir",
  img: "https://i.imgur.com/K1C8IuA.jpg",
  opts: {
    series: [ "sts" ],
    rank: ["gw"]
  }
},
{
  name: "Mizar Syd",
  img: "https://i.imgur.com/kvverr2.jpg",
  opts: {
    series: [ "sts" ],
    rank: ["gw"]
  }
},
{
  name: "Alcor Bud",
  img: "https://i.imgur.com/3cmEBH1.jpg",
  opts: {
    series: [ "sts" ],
    rank: ["gw"]
  }
},
{
  name: "Benetnasch Mime",
  img: "https://i.imgur.com/rHI6LLF.jpg",
  opts: {
    series: [ "sts" ],
    rank: ["gw"]
  }
},
// GOD WARRIORS SOUL OF GOLD
{
  name: "Gullinbursti Frodi",
  img: "https://i.imgur.com/etHP4P0.jpg",
  opts: {
    series: [ "sog" ],
    rank: ["gw"]
  }
},
{
  name: "Nidhogg Fafner",
  img: "https://i.imgur.com/B9WsMaE.jpg",
  opts: {
    series: [ "sog" ],
    rank: ["gw"]
  }
},
{
  name: "Tanngrisnir Heracles",
  img: "https://i.imgur.com/R8TcMAi.jpg",
  opts: {
    series: [ "sog" ],
    rank: ["gw"]
  }
},
{
  name: "Eikschnir Surt",
  img: "https://i.imgur.com/LYQAJAg.jpg",
  opts: {
    series: [ "sog" ],
    rank: ["gw"]
  }
},
{
  name: "Granir Sigmund",
  img: "https://i.imgur.com/9cqwXGf.jpg",
  opts: {
    series: [ "sog" ],
    rank: ["gw"]
  }
},
{
  name: "Hraesvelgr Balder",
  img: "https://i.imgur.com/fK0atK5.jpg",
  opts: {
    series: [ "sog" ],
    rank: ["gw"]
  }
},
{
  name: "Garm Ultgardar",
  img: "https://i.imgur.com/5pK05fu.jpg",
  opts: {
    series: [ "sog" ],
    rank: ["gw"]
  }
},
{
  name: "Andreas Rize",
  img: "https://i.imgur.com/xGf1z9F.jpg",
  opts: {
    series: [ "sog" ],
    rank: ["gw"]
  }
},
{
  name: "Loki",
  img: "https://i.imgur.com/9JzZIMS.jpg",
  opts: {
    series: [ "sog" ],
    rank: ["gw"]
  }
},
// MARINAS
{
  name: "Mermaid Thetis",
  img: "https://i.imgur.com/atibahI.jpg",
  opts: {
    series: [ "sts" ],
    rank: ["marina"]
  }
},
{
  name: "Chrysaor Krishna",
  img: "https://i.imgur.com/1vQfIGW.jpg",
  opts: {
    series: [ "sts" ],
    rank: ["marina"]
  }
},
{
  name: "Kraken Isaak",
  img: "https://i.imgur.com/VbZe3an.jpg",
  opts: {
    series: [ "sts" ],
    rank: ["marina"]
  }
},
{
  name: "Limnades Caça",
  img: "https://i.imgur.com/dF3CIsp.jpg",
  opts: {
    series: [ "sts" ],
    rank: ["marina"]
  }
},
{
  name: "Scylla Io",
  img: "https://i.imgur.com/UIlj40f.jpg",
  opts: {
    series: [ "sts" ],
    rank: ["marina"]
  }
},
{
  name: "Sea Horse Baian",
  img: "https://i.imgur.com/j0y4nov.jpg",
  opts: {
    series: [ "sts" ],
    rank: ["marina"]
  }
},
{
  name: "Siren Sorento",
  img: "https://i.imgur.com/gsNm0ey.jpg",
  opts: {
    series: [ "sts" ],
    rank: ["marina"]
  }
},
{
    name: "Sea Dragon Unity",
    img: "https://i.imgur.com/7sdVxV5.jpg",
    opts: {
      series: [ "tlc" ],
      rank: ["marina"]
    }
  },
// SPECTERS
{
  name: "Acheron Charon",
  img: "https://i.imgur.com/ANdKKOe.jpg",
  opts: {
    series: [ "sts", "tlc" ],
    rank: ["hades"]
  }
},
{
  name: "Garuda Aiacos",
  img: "https://i.imgur.com/fRO2ibc.jpg",
  opts: {
    series: [ "sts" ],
    rank: ["hades"]
  }
},
{
  name: "Wyvern Rhadamanthys",
  img: "https://i.imgur.com/kRDQ2ye.jpg",
  opts: {
    series: [ "sts" ],
    rank: ["hades"]
  }
},
{
  name: "Balrog Lune",
  img: "https://i.imgur.com/YJ4w4GM.jpg",
  opts: {
    series: [ "sts", "tlc" ],
    rank: ["hades"]
  }
},
{
  name: "Griffon Minos",
  img: "https://i.imgur.com/KhUd0SO.jpg",
  opts: {
    series: [ "sts" ],
    rank: ["hades"]
  }
},
{
  name: "Basilisk Sylpheed",
  img: "https://i.imgur.com/y7vT7sg.jpg",
  opts: {
    series: [ "sts", "tlc" ],
    rank: ["hades"]
  }
},
{
  name: "Lykaon Phlegyas",
  img: "https://i.imgur.com/6uL2kpd.jpg",
  opts: {
    series: [ "sts", "tlc" ],
    rank: ["hades"]
  }
},
{
  name: "Troll Ivan",
  img: "https://i.imgur.com/vWV60JV.jpg",
  opts: {
    series: [ "sts" ],
    rank: ["hades"]
  }
},
{
  name: "Minotauros Gordon",
  img: "https://i.imgur.com/7aCFjxx.jpg",
  opts: {
    series: [ "sts", "tlc" ],
    rank: ["hades"]
  }
},
{
  name: "Harpy Valentine",
  img: "https://i.imgur.com/dwxIx2w.jpg",
  opts: {
    series: [ "sts", "tlc" ],
    rank: ["hades"]
  }
},
{
  name: "Frog Zelos",
  img: "https://i.imgur.com/rFpZUBG.jpg",
  opts: {
    series: [ "sts", "tlc" ],
    rank: ["hades"]
  }
},
{
  name: "Deep Niobe",
  img: "https://i.imgur.com/mloW6Ku.jpg",
  opts: {
    series: [ "sts", "tlc" ],
    rank: ["hades"]
  }
},
{
  name: "Sphynx Pharaoh",
  img: "https://i.imgur.com/ER1qkv0.jpg",
  opts: {
    series: [ "sts", "tlc" ],
    rank: ["hades"]
  }
},
{
  name: "Cyclops Giganto",
  img: "https://i.imgur.com/lIhUITR.jpg",
  opts: {
    series: [ "sts", "tlc" ],
    rank: ["hades"]
  }
},
{
  name: "Gorgon Ochs",
  img: "https://i.imgur.com/KtW3mOH.jpg",
  opts: {
    series: [ "sts" ],
    rank: ["hades"]
  }
},
{
  name: "Alraune Queen",
  img: "https://i.imgur.com/sS5qAC4.jpg",
  opts: {
    series: [ "sts", "tlc" ],
    rank: ["hades"]
  }
},
{
  name: "Papylon Myu",
  img: "https://i.imgur.com/WwY5YCp.jpg",
  opts: {
    series: [ "sts" ],
    rank: ["hades"]
  }
},
{
  name: "Worm Raimi",
  img: "https://i.imgur.com/d7TLCr2.jpg",
  opts: {
    series: [ "sts", "tlc" ],
    rank: ["hades"]
  }
},
{
  name: "Golem Rock",
  img: "https://i.imgur.com/cqTR3oe.jpg",
  opts: {
    series: [ "sts" ],
    rank: ["hades"]
  }
},
{
  name: "Deadly Beetle Stand",
  img: "https://i.imgur.com/yhEjx66.jpg",
  opts: {
    series: [ "sts", "tlc" ],
    rank: ["hades"]
  }
},
{
  name: "Dullahan Cube",
  img: "https://i.imgur.com/yMRDtjQ.jpg",
  opts: {
    series: [ "sts" ],
    rank: ["hades"]
  }
},
{
  name: "Elf Mills",
  img: "https://i.imgur.com/x0l4H7N.jpg",
  opts: {
    series: [ "sts" ],
    rank: ["hades"]
  }
},
{
  name: "Hypnos",
  img: "https://i.imgur.com/IaX4gda.jpg",
  opts: {
    series: [ "sts", "tlc" ],
    rank: ["hades"]
  }
},
{
  name: "Thanatos",
  img: "https://i.imgur.com/Rojdk4o.jpg",
  opts: {
    series: [ "sts", "tlc" ],
    rank: ["hades"]
  }
},
{
  name: "Ker",
  img: "https://i.imgur.com/CsHgG7U.jpg",
  opts: {
    series: [ "sts" ],
    rank: ["hades"]
  }
},
// SPECTERS LOST CANVAS
{
  name: "Mephistopheles Yoma",
  img: "https://i.imgur.com/tjFX2Qs.jpg",
  opts: {
    series: [ "tlc" ],
    rank: ["hades"]
  }
},
{
  name: "Garuda Aiacos (TLC)",
  img: "https://i.imgur.com/6Y8CJoH.jpg",
  opts: {
    series: [ "tlc" ],
    rank: ["hades"]
  }
},
{
  name: "Wyvern Rhadamanthys (TLC)",
  img: "https://i.imgur.com/NUpSmPv.jpg",
  opts: {
    series: [ "tlc" ],
    rank: ["hades"]
  }
},
{
  name: "Griffon Minos (TLC)",
  img: "https://i.imgur.com/1Nvnmr7.jpg",
  opts: {
    series: [ "tlc" ],
    rank: ["hades"]
  }
},
{
  name: "Behemoth Violate",
  img: "https://i.imgur.com/OVyS2kJ.jpg",
  opts: {
    series: [ "tlc" ],
    rank: ["hades"]
  }
},
{
  name: "Mandrake Fyodor",
  img: "https://i.imgur.com/TMinluB.jpg",
  opts: {
    series: [ "tlc" ],
    rank: ["hades"]
  }
},
{
  name: "Dryad Luco",
  img: "https://i.imgur.com/nHQnnHU.jpg",
  opts: {
    series: [ "tlc" ],
    rank: ["hades"]
  }
},
{
  name: "Nasu Veronica",
  img: "https://i.imgur.com/eajqvRj.jpg",
  opts: {
    series: [ "tlc" ],
    rank: ["hades"]
  }
},
{
  name: "Gembu Gregor",
  img: "https://i.imgur.com/zaz74iE.jpg",
  opts: {
    series: [ "tlc" ],
    rank: ["hades"]
  }
},
{
  name: "Vampire Earhart",
  img: "https://i.imgur.com/bWjznsd.jpg",
  opts: {
    series: [ "tlc" ],
    rank: ["hades"]
  }
},
{
  name: "Cetus Chris",
  img: "https://i.imgur.com/mQxb2JQ.jpg",
  opts: {
    series: [ "tlc" ],
    rank: ["hades"]
  }
},
{
  name: "Bennu Kagaho",
  img: "https://i.imgur.com/7KOQmRW.jpg",
  opts: {
    series: [ "tlc" ],
    rank: ["hades"]
  }
},
{
  name: "Hanuman Tokusa",
  img: "https://i.imgur.com/r1WBwQJ.jpg",
  opts: {
    series: [ "tlc" ],
    rank: ["hades"]
  }
},
{
  name: "Atavaka",
  img: "https://i.imgur.com/QsQvUZ6.jpg",
  opts: {
    series: [ "tlc" ],
    rank: ["hades"]
  }
},
{
  name: "Upyr Leibold",
  img: "https://i.imgur.com/3ZS3nPg.jpg",
  opts: {
    series: [ "tlc" ],
    rank: ["hades"]
  }
},
{
  name: "Necromancer Byaku",
  img: "https://i.imgur.com/fv5UTxJ.jpg",
  opts: {
    series: [ "tlc" ],
    rank: ["hades"]
  }
},
{
  name: "Dawon Erythro",
  img: "https://i.imgur.com/VipDVXc.jpg",
  opts: {
    series: [ "tlc" ],
    rank: ["hades"]
  }
},
{
  name: "Caith Sith Cheshire",
  img: "https://i.imgur.com/UDDo5D8.jpg",
  opts: {
    series: [ "tlc" ],
    rank: ["hades"]
  }
},
{
  name: "Silfo Edward",
  img: "https://i.imgur.com/WhDY53X.jpg",
  opts: {
    series: [ "tlc" ],
    rank: ["hades"]
  }
},
{
  name: "Kageboshi",
  img: "https://i.imgur.com/8dgWeEA.jpg",
  opts: {
    series: [ "tlc" ],
    rank: ["hades"]
  }
},
{
  name: "Bat Wimber",
  img: "https://i.imgur.com/q5JQxnY.jpg",
  opts: {
    series: [ "tlc" ],
    rank: ["hades"]
  }
},
{
  name: "Oneiros",
  img: "https://i.imgur.com/swBqFPx.jpg",
  opts: {
    series: [ "tlc" ],
    rank: ["hades"]
  }
},
{
  name: "Ikelos",
  img: "https://i.imgur.com/x1kV8Iu.jpg",
  opts: {
    series: [ "tlc" ],
    rank: ["hades"]
  }
},
{
  name: "Phantasos",
  img: "https://i.imgur.com/CIGVduT.jpg",
  opts: {
    series: [ "tlc" ],
    rank: ["hades"]
  }
},
{
  name: "Morpheus",
  img: "https://i.imgur.com/6CFnM1b.jpg",
  opts: {
    series: [ "tlc" ],
    rank: ["hades"]
  }
},
{
  name: "Phobetor",
  img: "https://i.imgur.com/i64mBxF.jpg",
  opts: {
    series: [ "tlc" ],
    rank: ["hades"]
  }
},
{
  name: "Owl Partita",
  img: "https://i.imgur.com/STJW1JY.jpg",
  opts: {
    series: [ "tlc" ],
    rank: ["hades"]
  }
},
{
  name: "Dullahan Cube (TLC)",
  img: "https://i.imgur.com/zUSsU8B.jpg",
  opts: {
    series: [ "tlc" ],
    rank: ["hades"]
  }
},
// SPECTERS NEXT DIMENSION
{
  name: "Acheron Nyan",
  img: "https://i.imgur.com/ynxWC5h.jpg",
  opts: {
    series: [ "nd" ],
    rank: ["hades"]
  }
},
{
  name: "Garuda Suikyo",
  img: "https://i.imgur.com/MHp0CKN.jpg",
  opts: {
    series: [ "nd" ],
    rank: ["hades"]
  }
},
{
  name: "Wyvern Chagall",
  img: "https://i.imgur.com/jXImNhX.jpg",
  opts: {
    series: [ "nd" ],
    rank: ["hades"]
  }
},
{
  name: "Griffon Veemer",
  img: "https://i.imgur.com/PUD1w1S.jpg",
  opts: {
    series: [ "nd" ],
    rank: ["hades"]
  }
},
{
  name: "Frog Mi-Yan",
  img: "https://i.imgur.com/Wrw8bun.jpg",
  opts: {
    series: [ "nd" ],
    rank: ["hades"]
  }
},
{
  name: "Papillon Giulietta",
  img: "https://i.imgur.com/QhT8oWX.jpg",
  opts: {
    series: [ "nd" ],
    rank: ["hades"]
  }
},
// SPECTERS DARK WING
{
  name: "Garuda Matsuri",
  img: "https://i.imgur.com/vrJSvnN.jpg",
  opts: {
    series: [ "dw" ],
    rank: ["hades"]
  }
},
{
  name: "Wyvern Shoichiro",
  img: "https://i.imgur.com/2qQ2zlz.jpg",
  opts: {
    series: [ "dw" ],
    rank: ["hades"]
  }
},
{
  name: "Harpy Zhu",
  img: "https://i.imgur.com/bFGLUH2.jpg",
  opts: {
    series: [ "dw" ],
    rank: ["hades"]
  }
},
{
  name: "Necromancer Charlotte",
  img: "https://i.imgur.com/GasHj3z.jpg",
  opts: {
    series: [ "dw" ],
    rank: ["hades"]
  }
},
{
  name: "Sphynx Esther",
  img: "https://i.imgur.com/P4n4bUb.jpg",
  opts: {
    series: [ "dw" ],
    rank: ["hades"]
  }
},
{
  name: "Laelaps Suzuri",
  img: "https://i.imgur.com/FWHZjEP.jpg",
  opts: {
    series: [ "dw" ],
    rank: ["hades"]
  }
},
// SILVER SAINTS
{
    name: "Eagle Marin",
    img: "https://i.imgur.com/TK0Xxug.jpg",
    opts: {
      series: [ "sts" ],
      rank: ["silver"]
    }
  },
  {
    name: "Ophiucus Shaina",
    img: "https://i.imgur.com/AylT14c.jpg",
    opts: {
      series: [ "sts" ],
      rank: ["silver"]
    }
  },
  {
    name: "Lizard Misty",
    img: "https://i.imgur.com/tDLKlxe.jpg",
    opts: {
      series: [ "sts" ],
      rank: ["silver"]
    }
  },
  {
    name: "Whale Moses",
    img: "https://i.imgur.com/ZoRty85.jpg",
    opts: {
      series: [ "sts" ],
      rank: ["silver"]
    }
  },
  {
    name: "Hound Asterion",
    img: "https://i.imgur.com/y5Ht04M.jpg",
    opts: {
      series: [ "sts" ],
      rank: ["silver"]
    }
  },
  {
    name: "Centaurus Babel",
    img: "https://i.imgur.com/KiYPM3N.jpg",
    opts: {
      series: [ "sts" ],
      rank: ["silver"]
    }
  },
  {
    name: "Crow Jamian",
    img: "https://i.imgur.com/1ES8Js5.jpg",
    opts: {
      series: [ "sts" ],
      rank: ["silver"]
    }
  },
  {
    name: "Perseus Algol",
    img: "https://i.imgur.com/9DD0wTj.jpg",
    opts: {
      series: [ "sts" ],
      rank: ["silver"]
    }
  },
  {
    name: "Auriga Capella",
    img: "https://i.imgur.com/TgwQCX2.jpg",
    opts: {
      series: [ "sts" ],
      rank: ["silver"]
    }
  },
  {
    name: "Cerberus Dante",
    img: "https://i.imgur.com/LZU4VJZ.jpg",
    opts: {
      series: [ "sts" ],
      rank: ["silver"]
    }
  },
  {
    name: "Hercules Algethi",
    img: "https://i.imgur.com/qZHoGD5.jpg",
    opts: {
      series: [ "sts" ],
      rank: ["silver"]
    }
  },
  {
    name: "Musca Dio",
    img: "https://i.imgur.com/UEEtKcM.jpg",
    opts: {
      series: [ "sts" ],
      rank: ["silver"]
    }
  },
  {
    name: "Canis Maior Sirius",
    img: "https://i.imgur.com/LBjPqRU.jpg",
    opts: {
      series: [ "sts" ],
      rank: ["silver"]
    }
  },
  {
    name: "Sagitta Ptolemy",
    img: "https://i.imgur.com/7pnWA4s.jpg",
    opts: {
      series: [ "sts" ],
      rank: ["silver"]
    }
  },
  {
    name: "Cepheus Daidalos",
    img: "https://i.imgur.com/3nKd5DL.jpg",
    opts: {
      series: [ "sts" ],
      rank: ["silver"]
    }
  },
  {
    name: "Lyra Orphee",
    img: "https://i.imgur.com/OOu3g6l.jpg",
    opts: {
      series: [ "sts" ],
      rank: ["silver"]
    }
  },
  {
    name: "Cepheus Albiore",
    img: "https://i.imgur.com/wN68MKh.jpg",
    opts: {
      series: [ "sts" ],
      rank: ["silver"]
    }
  },
  {
    name: "Pavo Shiva",
    img: "https://i.imgur.com/HB4yZPh.jpg",
    opts: {
      series: [ "sts" ],
      rank: ["silver"]
    }
  },
  {
    name: "Lotus Agora",
    img: "https://i.imgur.com/QB12XSn.jpg",
    opts: {
      series: [ "sts" ],
      rank: ["silver"]
    }
  },
  {
    name: "Tarantula Aracne",
    img: "https://i.imgur.com/UjEwYUM.jpg",
    opts: {
      series: [ "sts" ],
      rank: ["silver"]
    }
  },
  {
    name: "Triangle Noesis",
    img: "https://i.imgur.com/ihdIk55.jpg",
    opts: {
      series: [ "epig" ],
      rank: ["silver"]
    }
  },
  {
    name: "Orion Rigel",
    img: "https://i.imgur.com/skkjgwA.jpg",
    opts: {
      series: [ "sho" ],
      rank: ["silver"]
    }
  },
  {
    name: "Southern Cross Georg",
    img: "https://i.imgur.com/QBhcD8D.jpg",
    opts: {
      series: [ "sho" ],
      rank: ["silver"]
    }
  },
  {
    name: "Scutum Juan",
    img: "https://i.imgur.com/imNSsVO.jpg",
    opts: {
      series: [ "sho" ],
      rank: ["silver"]
    }
  },
  {
    name: "Pavo Mayura",
    img: "https://i.imgur.com/C35FKbB.jpg",
    opts: {
      series: [ "sho" ],
      rank: ["silver"]
    }
  },
  {
    name: "Crateris Aeson",
    img: "https://i.imgur.com/Soj6dQH.jpg",
    opts: {
      series: [ "sho" ],
      rank: ["silver"]
    }
  },
  {
    name: "Fornax Jorge",
    img: "https://i.imgur.com/6aiefOS.jpg",
    opts: {
      series: [ "timeody" ],
      rank: ["silver"]
    }
  },
  {
    name: "Sculptor Lodi'N",
    img: "https://i.imgur.com/bZteKyZ.jpg",
    opts: {
      series: [ "timeody" ],
      rank: ["silver"]
    }
  },
// SILVER SAINTS LOST CANVAS  
  {
    name: "Altar Hakurei",
    img: "https://i.imgur.com/1DhyPEj.jpg",
    opts: {
      series: [ "tlc" ],
      rank: ["silver"]
    }
  },
  {
    name: "Sagitta Archon",
    img: "https://i.imgur.com/af0knp4.jpg",
    opts: {
      series: [ "tlc" ],
      rank: ["silver"]
    }
  },
  {
    name: "Centaurus Fotia",
    img: "https://i.imgur.com/PXIHjQg.jpg",
    opts: {
      series: [ "tlc" ],
      rank: ["silver"]
    }
  },  
  {
    name: "Centaurus Yugo",
    img: "https://i.imgur.com/zibw1ww.jpg",
    opts: {
      series: [ "tlc" ],
      rank: ["silver"]
    }
  },  
  {
    name: "Crane Yuzuriha",
    img: "https://i.imgur.com/4XSWMqG.jpg",
    opts: {
      series: [ "tlc" ],
      rank: ["silver"]
    }
  },  
  {
    name: "Vela Tsubaki",
    img: "https://i.imgur.com/99g5b1w.jpg",
    opts: {
      series: [ "tlc" ],
      rank: ["silver"]
    }
  },  
  {
    name: "Puppa Lacaille",
    img: "https://i.imgur.com/rS694AH.jpg",
    opts: {
      series: [ "tlc" ],
      rank: ["silver"]
    }
  },
// SILVER SAINTS OMEGA
  {
    name: "Auriga Almaaz",
    img: "https://i.imgur.com/UvLTs1d.jpg",
    opts: {
      series: [ "omega" ],
      rank: ["silver"]
    }
  },
  {
    name: "Bootes Bayer",
    img: "https://i.imgur.com/z08ndbI.jpg",
    opts: {
      series: [ "omega" ],
      rank: ["silver"]
    }
  },
  {
    name: "Caelum Michelangelo",
    img: "https://i.imgur.com/P6ugVJD.jpg",
    opts: {
      series: [ "omega" ],
      rank: ["silver"]
    }
  },
  {
    name: "Camelopardalis Bartchius",
    img: "https://i.imgur.com/EWjiOdj.jpg",
    opts: {
      series: [ "omega" ],
      rank: ["silver"]
    }
  },
  {
    name: "Hound Miguel",
    img: "https://i.imgur.com/DI82FyN.jpg",
    opts: {
      series: [ "omega" ],
      rank: ["silver"]
    }
  },
  {
    name: "Cerberus Dorer",
    img: "https://i.imgur.com/E0iNMe0.jpg",
    opts: {
      series: [ "omega" ],
      rank: ["silver"]
    }
  },
  {
    name: "Whale Menkar",
    img: "https://i.imgur.com/01GSuVX.jpg",
    opts: {
      series: [ "omega" ],
      rank: ["silver"]
    }
  },
  {
    name: "Crow Johann",
    img: "https://i.imgur.com/9GIerjl.jpg",
    opts: {
      series: [ "omega" ],
      rank: ["silver"]
    }
  },
  {
    name: "Southern Cross Kazuma",
    img: "https://i.imgur.com/idTqX3H.jpg",
    opts: {
      series: [ "omega" ],
      rank: ["silver"]
    }
  },
  {
    name: "Musca Fly",
    img: "https://i.imgur.com/1kAjob4.jpg",
    opts: {
      series: [ "omega" ],
      rank: ["silver"]
    }
  },
  {
    name: "Peacock Pavlin",
    img: "https://i.imgur.com/1mmN6yp.jpg",
    opts: {
      series: [ "omega" ],
      rank: ["silver"]
    }
  },
  {
    name: "Perseus Mirfak",
    img: "https://i.imgur.com/YbSF1O5.jpg",
    opts: {
      series: [ "omega" ],
      rank: ["silver"]
    }
  },
  {
    name: "Reticulum Balazo",
    img: "https://i.imgur.com/iPc5pE4.jpg",
    opts: {
      series: [ "omega" ],
      rank: ["silver"]
    }
  },
  {
    name: "Sagitta Sham",
    img: "https://i.imgur.com/f7JNB8z.jpg",
    opts: {
      series: [ "omega" ],
      rank: ["silver"]
    }
  },
  {
    name: "Scutum Ennead",
    img: "https://i.imgur.com/Cv4BGS5.jpg",
    opts: {
      series: [ "omega" ],
      rank: ["silver"]
    }
  },
// BRONZE SAINTS
  {
    name: "Pegasus Seiya",
    img: "https://i.imgur.com/3T02sXk.jpg",
    opts: {
      series: [ "sts" ],
      rank: ["bronze"]
    }
  },
  {
    name: "Andromeda Shun",
    img: "https://i.imgur.com/IkzlQrY.jpg",
    opts: {
      series: [ "sts" ],
      rank: ["bronze"]
    }
  },
  {
    name: "Phoenix Ikki",
    img: "https://i.imgur.com/Tctxk0S.jpg",
    opts: {
      series: [ "sts" ],
      rank: ["bronze"]
    }
  },
  {
    name: "Draco Shiryu",
    img: "https://i.imgur.com/15aYOre.jpg",
    opts: {
      series: [ "sts" ],
      rank: ["bronze"]
    }
  },
  {
    name: "Cygnus Hyoga",
    img: "https://i.imgur.com/o4tPUOb.jpg",
    opts: {
      series: [ "sts" ],
      rank: ["bronze"]
    }
  },
  {
    name: "Unicorn Jabu",
    img: "https://i.imgur.com/BTOEbfV.jpg",
    opts: {
      series: [ "sts" ],
      rank: ["bronze"]
    }
  },
  {
    name: "Bear Geki",
    img: "https://i.imgur.com/IsSea4f.jpg",
    opts: {
      series: [ "sts" ],
      rank: ["bronze"]
    }
  },
  {
    name: "Wolf Nachi",
    img: "https://i.imgur.com/r5w20sz.jpg",
    opts: {
      series: [ "sts" ],
      rank: ["bronze"]
    }
  },
  {
    name: "Lionet Ban",
    img: "https://i.imgur.com/rzeNA31.jpg",
    opts: {
      series: [ "sts" ],
      rank: ["bronze"]
    }
  },
  {
    name: "Hydra Ichi",
    img: "https://i.imgur.com/bsvDU0E.jpg",
    opts: {
      series: [ "sts" ],
      rank: ["bronze"]
    }
  },
  {
    name: "Chamaeleon June",
    img: "https://i.imgur.com/dmDVzbN.jpg",
    opts: {
      series: [ "sts" ],
      rank: ["bronze"]
    }
  },
  {
    name: "Lynx Retsu",
    img: "https://i.imgur.com/nQe1tXN.jpg",
    opts: {
      series: [ "epig" ],
      rank: ["bronze"]
    }
  },
// BRONZE LOST CANVAS
{
    name: "Pegasus Tenma",
    img: "https://i.imgur.com/dli77iT.jpg",
    opts: {
      series: [ "tlc" ],
      rank: ["bronze"]
    }
  },
  {
    name: "Unicorn Yato",
    img: "https://i.imgur.com/j72PjOv.jpg",
    opts: {
      series: [ "tlc" ],
      rank: ["bronze"]
    }
  },
  {
    name: "Bear Douglas",
    img: "https://i.imgur.com/Ciz5fKh.jpg",
    opts: {
      series: [ "tlc" ],
      rank: ["bronze"]
    }
  },
  {
    name: "Wolf Junkers",
    img: "https://i.imgur.com/o2SpR8d.jpg",
    opts: {
      series: [ "tlc" ],
      rank: ["bronze"]
    }
  },
  {
    name: "Lionet Bleriot",
    img: "https://i.imgur.com/ffYFljP.jpg",
    opts: {
      series: [ "tlc" ],
      rank: ["bronze"]
    }
  },
  {
    name: "Hydra Curtiss",
    img: "https://i.imgur.com/4rM9KlC.jpg",
    opts: {
      series: [ "tlc" ],
      rank: ["bronze"]
    }
  },
  {
    name: "Brujula Rusk",
    img: "https://i.imgur.com/0ukRKlB.jpg",
    opts: {
      series: [ "tlc" ],
      rank: ["bronze"]
    }
  },
// BRONZE SAINTIA SHO
{
    name: "Equuleus Shoko",
    img: "https://i.imgur.com/TvbEq3N.jpg",
    opts: {
      series: [ "sho" ],
      rank: ["bronze"]
    }
  },
  {
    name: "Equuleus Kyoko",
    img: "https://i.imgur.com/J342KNy.jpg",
    opts: {
      series: [ "sho" ],
      rank: ["bronze"]
    }
  },
  {
    name: "Dolphin Mii",
    img: "https://i.imgur.com/L8B1idE.jpg",
    opts: {
      series: [ "sho" ],
      rank: ["bronze"]
    }
  },
  {
    name: "Ursa Minor Xiaoling",
    img: "https://i.imgur.com/0h6ywyQ.jpg",
    opts: {
      series: [ "sho" ],
      rank: ["bronze"]
    }
  },
  {
    name: "Northern Crown Katja",
    img: "https://i.imgur.com/Hn2JY5f.jpg",
    opts: {
      series: [ "sho" ],
      rank: ["bronze"]
    }
  },
  {
    name: "Cassiopeia Erda",
    img: "https://i.imgur.com/6YIyfUy.jpg",
    opts: {
      series: [ "sho" ],
      rank: ["bronze"]
    }
  },
  {
    name: "Cassiopeia Rebecca",
    img: "https://i.imgur.com/3puSfdn.jpg",
    opts: {
      series: [ "sho" ],
      rank: ["bronze"]
    }
  },
  {
    name: "Apus Shinato",
    img: "https://i.imgur.com/MZ81pJa.jpg",
    opts: {
      series: [ "sho" ],
      rank: ["bronze"]
    }
  },
  {
    name: "Canis Minor Mirai",
    img: "https://i.imgur.com/cuXy48H.jpg",
    opts: {
      series: [ "sho" ],
      rank: ["bronze"]
    }
  },
  {
    name: "Bootes Arcturus",
    img: "https://i.imgur.com/JtcFlIV.jpg",
    opts: {
      series: [ "sho" ],
      rank: ["bronze"]
    }
  },
// BRONZE OMEGA
{
    name: "Pegasus Koga",
    img: "https://i.imgur.com/UZHlpfa.jpg",
    opts: {
      series: [ "omega" ],
      rank: ["bronze"]
    }
  },
  {
    name: "Lionet Soma",
    img: "https://i.imgur.com/WQIl8Wn.jpg",
    opts: {
      series: [ "omega" ],
      rank: ["bronze"]
    }
  },
  {
    name: "Aquila Yuna",
    img: "https://i.imgur.com/yeYlDE9.jpg",
    opts: {
      series: [ "omega" ],
      rank: ["bronze"]
    }
  },
  {
    name: "Draco Ryuho",
    img: "https://i.imgur.com/XuFFVBe.jpg",
    opts: {
      series: [ "omega" ],
      rank: ["bronze"]
    }
  },
  {
    name: "Wolf Haruto",
    img: "https://i.imgur.com/kEOEEsu.jpg",
    opts: {
      series: [ "omega" ],
      rank: ["bronze"]
    }
  },
  {
    name: "Orion Eden",
    img: "https://i.imgur.com/AIRXy2S.jpg",
    opts: {
      series: [ "omega" ],
      rank: ["bronze"]
    }
  },
  {
    name: "Equuleus Subaru",
    img: "https://i.imgur.com/f6UzFye.jpg",
    opts: {
      series: [ "omega" ],
      rank: ["bronze"]
    }
  },
  {
    name: "Equuleus Kitalpha",
    img: "https://i.imgur.com/zdmSWa6.jpg",
    opts: {
      series: [ "omega" ],
      rank: ["bronze"]
    }
  },
  {
    name: "Equuleus Celeris",
    img: "https://i.imgur.com/Aj3vWYm.jpg",
    opts: {
      series: [ "omega" ],
      rank: ["bronze"]
    }
  },
  {
    name: "Dorado Spear",
    img: "https://i.imgur.com/bxZvkYe.jpg",
    opts: {
      series: [ "omega" ],
      rank: ["bronze"]
    }
  },
  {
    name: "Wolf Yoshitomi",
    img: "https://i.imgur.com/SDWQ9SY.jpg",
    opts: {
      series: [ "omega" ],
      rank: ["bronze"]
    }
  },
  {
    name: "Lynx Mirapolos",
    img: "https://i.imgur.com/hG05THn.jpg",
    opts: {
      series: [ "omega" ],
      rank: ["bronze"]
    }
  },
  {
    name: "Volans Argo",
    img: "https://i.imgur.com/LaZJWi6.jpg",
    opts: {
      series: [ "omega" ],
      rank: ["bronze"]
    }
  },
  {
    name: "Crane Komachi",
    img: "https://i.imgur.com/L7Fb179.jpg",
    opts: {
      series: [ "omega" ],
      rank: ["bronze"]
    }
  },
  {
    name: "Compass Hooke",
    img: "https://i.imgur.com/3b3IG4D.jpg",
    opts: {
      series: [ "omega" ],
      rank: ["bronze"]
    }
  },
  {
    name: "Norma Luciano",
    img: "https://i.imgur.com/v176cKb.jpg",
    opts: {
      series: [ "omega" ],
      rank: ["bronze"]
    }
  },
  {
    name: "Northern Crown Dali",
    img: "https://i.imgur.com/6rmO4y3.jpg",
    opts: {
      series: [ "omega" ],
      rank: ["bronze"]
    }
  },
  {
    name: "Lepus Arne",
    img: "https://i.imgur.com/mSELzBj.jpg",
    opts: {
      series: [ "omega" ],
      rank: ["bronze"]
    }
  },
  {
    name: "Dolphin Guney",
    img: "https://i.imgur.com/bFyhOwg.jpg",
    opts: {
      series: [ "omega" ],
      rank: ["bronze"]
    }
  },
  {
    name: "Colomba Gray",
    img: "https://i.imgur.com/w7kYOXq.jpg",
    opts: {
      series: [ "omega" ],
      rank: ["bronze"]
    }
  },
  {
    name: "Apus Paradise",
    img: "https://i.imgur.com/3MuvOTI.jpg",
    opts: {
      series: [ "omega" ],
      rank: ["bronze"]
    }
  },
  {
    name: "Caribou Rudolph",
    img: "https://i.imgur.com/u8AuWZ5.jpg",
    opts: {
      series: [ "omega" ],
      rank: ["bronze"]
    }
  },
// GODS/REPRESENTATIVES
{
    name: "Sasha (ND)",
    img: "https://i.imgur.com/Nx5xVRG.jpg",
    opts: {
      series: [ "nd" ],
      rank: ["god"]
    }
  },
  {
    name: "Cattleya (Athena)",
    img: "https://i.imgur.com/UR1GpBe.jpg",
    opts: {
      series: [ "dw" ],
      rank: ["god"]
    }
  },
  {
    name: "Hilda Polaris",
    img: "https://i.imgur.com/iSScEY5.jpg",
    opts: {
      series: [ "sts" ],
      rank: ["gw", "god"]
    }
  },
  {
    name: "Poseidon",
    img: "https://i.imgur.com/hbYp60W.jpg",
    opts: {
      series: [ "sts" ],
      rank: ["god", "marina"]
    }
  },
  {
    name: "Pandora Heinstein",
    img: "https://i.imgur.com/JyfuLPB.jpg",
    opts: {
      series: [ "sts" ],
      rank: ["god", "hades"]
    }
  },
  {
    name: "Hades",
    img: "https://i.imgur.com/LIQDGT6.jpg",
    opts: {
      series: [ "sts" ],
      rank: ["god", "hades"]
    }
  },
  {
    name: "Alone (Hades)",
    img: "https://i.imgur.com/MPZfJLx.jpg",
    opts: {
      series: [ "tlc" ],
      rank: ["god", "hades"]
    }
  },
  {
    name: "Pandora (TLC)",
    img: "https://i.imgur.com/soBFnQq.jpg",
    opts: {
      series: [ "tlc" ],
      rank: ["god", "hades"]
    }
  },
  {
    name: "Pandora (Next Dimension)",
    img: "https://i.imgur.com/LOCx4TW.jpg",
    opts: {
      series: [ "nd" ],
      rank: ["god", "hades"]
    }
  },
  {
    name: "Alone (Next Dimension)",
    img: "https://i.imgur.com/lzO3NxZ.jpg",
    opts: {
      series: [ "nd" ],
      rank: ["god", "hades"]
    }
  },
  {
    name: "Hades (Dark Wing)",
    img: "https://i.imgur.com/JovPfRe.jpg",
    opts: {
      series: [ "dw" ],
      rank: ["god", "hades"]
    }
  },
  {
    name: "Yoruhime (Pandora)",
    img: "https://i.imgur.com/Yj5zRId.jpg",
    opts: {
      series: [ "dw" ],
      rank: ["god", "hades"]
    }
  },
  {
    name: "Saori Kido (Athena)",
    img: "https://i.imgur.com/GPhwhKv.jpg",
    opts: {
      series: [ "sts" ],
      rank: ["god"]
    }
  },
  {
    name: "Sasha (Athena)",
    img: "https://i.imgur.com/zIlYQY2.jpg",
    opts: {
      series: [ "tlc" ],
      rank: ["god"]
    }
  },
  {
    name: "Aria",
    img: "https://i.imgur.com/p7UkJvu.jpg",
    opts: {
      series: [ "omega" ],
      rank: ["god"]
    }
  }
  //
  // END
  //
]
