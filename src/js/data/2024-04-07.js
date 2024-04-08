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
      { name: "LostCanvas", tooltip: "Only New Characters introduced in the series by Shiori Teshirogi", key: "tlc" },
      { name: "LostCanvas Gaiden", tooltip: "New Characters introduced in Lost Canvas Gaiden", key: "tlcg" },
      { name: "Next Dimension", tooltip: "For New Characters introduced in the official sequel by Masami Kurumada", key: "nd" },
      { name: "Omega", tooltip: "New Characters introduced in the (mostly) anime only Saint Seiya Omega", key: "omega" },
      { name: "Saintia Sho", tooltip: "New Characters from this series by Chimaki Kuori", key: "sho" },
      { name: "Dark Wing", tooltip: "For the characters introduced in the recurring series by Saito and Ueda", key: "dw" },
      { name: "Soul of Gold", tooltip: "New Characters for this Anime Only sequel", key: "sog" }
    ]
  },
  {
    name: "Filter by Rank/Army",
    key: "rank",
    tooltip: "Check this to restrict characters that appear.",
    checked: true,
    sub: [
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
  //
  // END
  //
]
