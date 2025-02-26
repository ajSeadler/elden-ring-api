const bossData = [
  {
    id: "17f695abef9l0i1ujzrup5y0z72w3",
    name: "Eustace",
    image: "/jack.jpg",
    region: "Toilet",
    description:
      "Eustace, the self-proclaimed 'King of Crust,' emerged from the depths of obscurity with a battle-ready arsenal caked in muck and rebellion. With a personality as polished as his dirty gear, he's here to make a mess of things and collect your Runes while he’s at it. Approach with caution—his presence is as subtle as a sledgehammer in a library.",
    location: "Toilet",
    drops: ["420,666 Runes", "Inquisitor's Grand Hole"],
    healthPoints: "1,420,666",
    weakness: "Nothing",
  },

  {
    id: "17f695abef9l0i1ujzrup5y0z7rw6",
    name: "Abductor Virgins",
    image:
      "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/04/elden-ring-abductor-virgin.jpg?q=50&fit=crop&w=1100&h=618&dpr=1.5",
    region: "Mount Gelmir, various",
    description: "Deadly mechanical constructs who wield massive blades.",
    location: "Volcano Manor, various",
    drops: ["10.000 Runes", "Inquisitor's Girandole"],
    healthPoints: "???",
  },
  {
    id: "17f69b4ba0al0i1uk6s98t1nbtxunt",
    name: "Alecto, Black Knife Ringleader",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f69b4ba0al0i1uk6s98t1nbtxunt.png",
    region: "Liurnia of the Lakes",
    description:
      "Remarkably agile and aggressive warrior. Dangerous even for those with shield coverage...",
    location: "Ringleader's Evergoal",
    drops: ["8.000 Runes", "Black Knife Tiche"],
    healthPoints: "???",
  },
  {
    id: "17f69b85929l0i1ukc4l2up7yp9v0i",
    name: "Alabaster Lord",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f69b85929l0i1ukc4l2up7yp9v0i.png",
    region: "Liurnia of the Lakes",
    description:
      "An Evergaol prisoner wielding a vicious sword and the void with murderous intent.",
    location: "Royal Grave Evergaol, Liurnia of the Lakes",
    drops: ["3.600 Runes", "Meteorite"],
    healthPoints: "???",
  },
  {
    id: "17f69a3ca37l0i1ukd1lq14ctafbk",
    name: "Adan, Thief Of Fire",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f69a3ca37l0i1ukd1lq14ctafbk.png",
    region: "Liurnia of the Lakes",
    description:
      "An evergaol prisoner and former battle mage, Adan wields a spiked flail and uses stolen knowledge of fire magic to great effect.",
    location: "Malefactor's Evergaol",
    drops: ["3.800 Runes", "Flame of the Fell God"],
    healthPoints: "2200",
  },
  {
    id: "17f69a63610l0i1ukyx7xgx6vf0zoa",
    name: "Ancient Dragon Lansseax",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f69a63610l0i1ukyx7xgx6vf0zoa.png",
    region: "Altus Plateau",
    description:
      "Lansseax was the sister of Fortissax. It is said that she took the from of a human to commune with the knights as a priestess of the ancient dragon cult.",
    location: "Altus Plateau",
    drops: ["60.000 Runes", "Lansseax's Glaive"],
    healthPoints: "9087",
  },
  {
    id: "17f69590896l0i1ul0hnmor8iyf9xd",
    name: "Ancestor Spirit",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f69590896l0i1ul0hnmor8iyf9xd.png",
    region: "Limgrave",
    description:
      "A glowing spirit that takes the form of a large deer, making it a menacing threat when charging at targets.",
    location: "Siofra River",
    drops: ["13.000 Runes", "Ancestral Follower Ashes"],
    healthPoints: "2200",
  },
  {
    id: "17f69878c4al0i1ul0i7dsfou8igrk",
    name: "Ancient Hero Of Zamor",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f69878c4al0i1ul0i7dsfou8igrk.png",
    region: "Weeping Peninsula",
    description:
      "Noticeably agile, frost-made creature suceptible to magic attacks.",
    location: "Weeping Evergaol, Giant-Conquering Hero's Grave",
    drops: [
      "5,400 Runes",
      "Radagon's Scarseal",
      "83,000 Runes",
      "Zamor Curved Sword",
      "Zamor Mask",
      "Zamor Armor",
      "Zamor Bracelets",
      "Zamor Legwraps",
    ],
    healthPoints: " 2200",
  },
  {
    id: "17f697240ecl0i1ul21nevug9wq54e",
    name: "Beast Clergyman",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f697240ecl0i1ul21nevug9wq54e.png",
    region: "Caelid",
    description:
      "Temporarily overtaken by their bestial rage, the Beast Clergyman attacks ferociously, throwing rocks and themselves at their foes. Calm their aggression and return them to their senses.",
    location: "Crumbling Farum Azula",
    drops: ["N/A"],
    healthPoints: "2200",
  },
  {
    id: "17f69bcfd7dl0i1ul502rklvi8tx62",
    name: "Astel, Stars Of Darkness",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f69bcfd7dl0i1ul502rklvi8tx62.png",
    region: "Consecrated Snowfield",
    description:
      "A hostile, massive Dragon-Fly creature. Menacing and extremely powerful.",
    location: "Yelough Anix Tunnel in Consecrated Snowfield",
    drops: ["120000 Runes", "Meteorite of Astel"],
    healthPoints: "25,376",
  },
  {
    id: "17f69d7fe72l0i1ultk418yedh25s7",
    name: "Beastman Of Farum Azula",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f69d7fe72l0i1ultk418yedh25s7.png",
    region: "Dragonbarrow",
    description:
      "The beasts of Groveside Cave rally around the prowess of the Beastman of Farum Azula",
    location: "Groveside Cave, Dragonbarrow Cave",
    drops: [
      "1000 Runes",
      "Flamedrake Talisman",
      "65,000 Runes",
      "Flamedrake Talisman +2",
    ],
    healthPoints: "1,960",
  },
  {
    id: "17f69c4aacel0i1uluegh15idblimv",
    name: "Bell Bearing Hunter",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f69c4aacel0i1uluegh15idblimv.png",
    region: "Dragonbarrow",
    description:
      "Menacing and slow-paced, it wields a large, red-glowing sword and a shield combined with a full body armor and a chilling cape.",
    location:
      "Warmaster's Shack, Northern Stormhill, Church of Vows, East Liurnia, Hermit Merchant's Shack, Leyndell Royal Captial, Dragonbarrow, North Caelid",
    drops: ["2700 Runes", "Bone Peddler's Bell Bearing"],
    healthPoints: "???",
  },
  {
    id: "17f69a61779l0i1ulv0a3ru8iy0zh5",
    name: "Black Blade Kindred",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f69a61779l0i1ulv0a3ru8iy0zh5.png",
    region: "Dragonbarrow",
    description: "Imposing Gargoyle wielding a massive armament",
    location: "Caelid, Forbidden Lands",
    drops: [
      "88,000 Runes",
      "Gargoyle's Blackblade",
      "Gargoyle's Black Halberd",
      "60,000 Runes",
      "Gargoyle's Black Axe",
      "Gargoyle's Black Blades",
    ],
    healthPoints: "12,500",
  },
  {
    id: "17f69bd3c06l0i1ulx2jxbiogta1i",
    name: "Black Knife Assassin",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f69bd3c06l0i1ulx2jxbiogta1i.png",
    region: "Limgrave",
    description: "Relentless and agile dark figures carrying a ",
    location: "Deathtouched Catacombs, Black Knife CatacombsSage's Cave",
    drops: [
      "1,600 Runes",
      "Assassin's Crimson Dagger",
      "1, 600 Runes",
      "Assassin's Cerulean Dagger",
      "Sage's Cave",
      "?? Runes",
      "Concealing Veil",
      "11,339 Runes",
      "Black Knife",
    ],
    healthPoints: "2750",
  },
  {
    id: "17f69637e92l0i1um8wqsflgk3i9yr",
    name: "Bloodhound Knight Darriwil",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f69637e92l0i1um8wqsflgk3i9yr.png",
    region: "Limgrave",
    description:
      "The merciless bloodhounds attack with grace and agility, never backing down or giving a moment's rest.",
    location: "Limgrave, Forlon Hound Evergaol",
    drops: ["1900 Runes", "Bloodhound's Fang"],
    healthPoints: "14,792",
  },
  {
    id: "17f697f48d5l0i1umdbu7v5phffgq",
    name: "Burial Tree Watchdog",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f697f48d5l0i1umdbu7v5phffgq.png",
    region: "Limgrave",
    description:
      'A large feline-hound looking guardian that serves as a "Watchdog"for the Burial Tree of the Stormfoot Catacombs.',
    location: "Limgrave, Stormfoot Catacombs",
    drops: ["800 Runes", "Ash of War: Glintsword Arch"],
    healthPoints: "???",
  },
  {
    id: "17f69563d15l0i1umhb4am3xzuib3g",
    name: "Cleanrot Knight",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f69563d15l0i1umhb4am3xzuib3g.png",
    region: "Liurnia of the Lakes",
    description:
      "Powerful, dexterous Knight capable of distanced, very rapid attacks. Its spear and sword are a threat to any light-armored fighter.",
    location: "Stillwater Cave, Liurnia of the Lakes",
    drops: ["3,300 Runes", "Winged Sword Insignia", "Cleanrot Knight's Sword"],
    healthPoints: "???",
  },
  {
    id: "17f69d6ca41l0i1umlxg0j36mhrnzr",
    name: "Borealis The Freezing Fog",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f69d6ca41l0i1umlxg0j36mhrnzr.png",
    region: "Mountaintops of the Giants",
    description:
      "Frost Dragon guarding the frozen lake of Mountaintop of Giants, emits a permanent blizzard.",
    location: "Mountaintops of the Giants",
    drops: ["100,000 Runes", "Dragon Heart"],
    healthPoints: "11,100",
  },
  {
    id: "17f698b7d2fl0i1umtkf7cu5a21hdw",
    name: "Commander Niall",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f698b7d2fl0i1umtkf7cu5a21hdw.png",
    region: "Mountaintop of the Giants",
    description:
      "Commander Niall is a tall and built knight with a peg leg, clad in heavy armor, wielding a halberd that doubles as a battle standard. He is accompanied by two Spectral Banished Knights, one equipped with dual swords and the other equipped with a sword and shield.",
    location: "Mountaintops of the Giants",
    drops: ["90000 Runes", "Veteran's Prosthesis"],
    healthPoints: "16,000",
  },
  {
    id: "17f699b0755l0i1un48m87fngquaw",
    name: "Crucible Knight Ordovis",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f699b0755l0i1un48m87fngquaw.png",
    region: "Altus Plateau",
    description:
      "Large, heavy and fully armored. With the ability to materialize fiery wings and attack from above. Attacks with the huge power of Ordivis's Greatsword and a Greatshield. Slow, but extremely tough and highly dangerous.",
    location: "Auriza Hero's Grave",
    drops: [
      "28000 Runes",
      "Ordovis's Greatsword",
      "Crucible Axe Helm",
      "Crucible Axe Armor",
      "Crucible Gauntlets",
      "Crucible Greaves",
    ],
    healthPoints: "???",
  },
  {
    id: "17f695b37c1l0i1ungf7vjojqaf4zp",
    name: "Crystalians",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f695b37c1l0i1ungf7vjojqaf4zp.png",
    region: "Altus Plateau",
    description:
      "Crystal energy in the form of a human with devastating power.",
    location: "Academy Crystal Cave, Altus Tunnel",
    drops: [
      "3300 Runes",
      "Crystal Release",
      "1800 Runes",
      "Somberstone Miner's Bell Bearing (2)",
      "3000 Runes",
      "Smithing-Stone Miner's Bell Bearing (1)",
      "7000 Runes",
      "Crystal Torrent",
    ],
    healthPoints: "???",
  },
  {
    id: "17f69e151d8l0i1uo19hl8r6l0snmo",
    name: "Deathbird",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f69e151d8l0i1uo19hl8r6l0snmo.png",
    region: "Limgrave",
    description:
      "A bipedal bird with arms and a bird skull for a head and is found in various locations",
    location: "Limgrave, Weeping Peninsula, Liurnia of the Lakes",
    drops: [
      "3,900 Runes",
      "Blue-Feathered Branchsword",
      "Sacrifical Axe",
      "Red-Feathered Branchsword",
    ],
    healthPoints: "2750",
  },
  {
    id: "17f69bcc1cdl0i1uoai2hm5tcbuhh2",
    name: "Decaying Ekzykes",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f69bcc1cdl0i1uoai2hm5tcbuhh2.png",
    region: "Caelid",
    description:
      "A pale white dragon — its scales blighted by the same scarlet rot that plagues the region of Caelid. It silently waits along the southern highway, awaiting unsuspecting travelers to fall prey to its deathly onslaught.",
    location: "Caelid",
    drops: ["38,000 Runes", "Dragon Heart"],
    healthPoints: "23,731",
  },
  {
    id: "17f6961da46l0i1uoh7hemoben3dtg",
    name: "Demi-human Chief",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f6961da46l0i1uoh7hemoben3dtg.png",
    region: "Limgrave",
    description:
      "The darkness of Coastal Cave hides a den of those who may look almost human, but are certainly not.",
    location: "Coastal Cave",
    drops: ["900 Runes", "Tailoring Tools", "Sewing Needle"],
    healthPoints: "???",
  },
  {
    id: "17f69559137l0i1uoqf3qzndh0901t",
    name: "Demi-human Queen Maggie",
    image:
      "https://eldenring.wiki.fextralife.com/file/Elden-Ring/demi-human-queen-maggie-1-hq-elden-ring-wiki-guide.jpg",
    region: "Mount Gelmir",
    description:
      "Sovereign Demi-Human creature roaming the lands of Mt. Gelmir",
    location: "Mt. Gelmir",
    drops: ["13000 Runes", "Memory Stone", "Golden Rune [1]"],
    healthPoints: "???",
  },
  {
    id: "17f69518792l0i1up7fr7vzvqcmzf",
    name: "Divine Bridge Golem",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f69518792l0i1up7fr7vzvqcmzf.png",
    region: "Altus Plateau",
    description:
      "Enormously large and lethargic Golem that slowly storms into battle when it becomes aware of your presence.",
    location: "Lyendell, Royal Capital",
    drops: ["2992 Runes"],
    healthPoints: "???",
  },
  {
    id: "17f69b39c43l0i1up7iq7q4lvvgyc",
    name: "Demi-human Queen Margot",
    image:
      "https://eldenring.wiki.fextralife.com/file/Elden-Ring/demi-human-queen-margot-2-hq-elden-ring-wiki-guide.jpg",
    region: "Mount Gelmir",
    description:
      "Sovereign Demi-Human creature concealed within isolated caves.",
    location: "Mt. Gelmir",
    drops: ["11,000 Runes", "Jar Cannon"],
    healthPoints: "???",
  },
  {
    id: "17f69625d6el0i1upqw478c5kvsjv3",
    name: "Draconic Tree Sentinel",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f69625d6el0i1upqw478c5kvsjv3.png",
    region: "Altus Plateau",
    description: "Massive knight clad in golden armor atop a giant horse.",
    location: "Capital Outskirts Crumbling Farum Azula",
    drops: ["50,000 Runes", "Dragon Greatclaw", "Dragonclaw Shield"],
    healthPoints: "8,398",
  },
  {
    id: "17f69de1071l0i1uprrms3umg3rug",
    name: "Dragonkin Soldier",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f69de1071l0i1uprrms3umg3rug.png",
    region: "Limgrave",
    description:
      "A large, hostile humanoid creature awaken from its drowse straight into battle.",
    location: "Siofra River, Lake of Rot",
    drops: ["16000 Runes", "Dragon Halberd"],
    healthPoints: "???",
  },
  {
    id: "17f69b43b78l0i1upyrupf0wna8q7a",
    name: "Cemetery Shade",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f69b43b78l0i1upyrupf0wna8q7a.png",
    region: "Caelid",
    description: "Amorphous and shadowy being belonging to the catacombs",
    location: "Tombsward Catacombs, Black Knife Catacombs,Caelid Catacombs, ",
    drops: [
      "2200 Runes",
      "Lhutel the Headless",
      "xx Runes",
      "Twinsage Sorcerer Ashes",
      "Kindred of Rot Ashes",
    ],
    healthPoints: "???",
  },
  {
    id: "17f69a6fae3l0i1uq63au7m71cs8mh",
    name: "Crucible Knight",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f69a6fae3l0i1uq63au7m71cs8mh.png",
    region: "Altus Plateau",
    description: "A formidable, dexterous fighter skilled in melee combat.",
    location: "Stormhill Evergaol,, Stormveil Castle,, Auriza Hero's Grave",
    drops: [
      "2100 Runes",
      "Aspects of the Crucible: Tail",
      "1500 Runes",
      "Aspects of the Crucible: Horns",
    ],
    healthPoints: "Stormhill Evergaol:, 2750",
  },
  {
    id: "17f699200d2l0i1uqbs9w1ijmp2ner",
    name: "Dragonkin Soldier Of Nokstella",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f699200d2l0i1uqbs9w1ijmp2ner.png",
    region: "Limgrave",
    description:
      "Huge humanoid-like creature located at the underground caves of Uhl Palace Ruins",
    location: "Ainsel River",
    drops: ["12000 Runes", "Frozen Lightning Spear"],
    healthPoints: "≈4372",
  },
  {
    id: "17f69bf3366l0i1uqds10qc8exqn1ik",
    name: "Dragonlord Placidusax",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f69bf3366l0i1uqds10qc8exqn1ik.png",
    region: "Mountaintops of the Giants",
    description:
      "A massive in size, two-headed dragon capable of immense acts of annihilation.",
    location: "Crumbling Farum Azula",
    drops: ["280000 Runes", "Remembrance of the Dragonlord"],
    healthPoints: "≈26651",
  },
  {
    id: "17f699dadfbl0i1uqmgi50oii11eaj",
    name: "Elden Beast",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f699dadfbl0i1uqmgi50oii11eaj.png",
    region: "Altus Plateau",
    description:
      "It is said that long ago, the Greater Will sent a golden star bearing a beast into the Lands Between, which would later become the Elden Ring.",
    location: "Elden Throne",
    drops: ["500000 Runes", "Elden Remembrance"],
    healthPoints: "26,880 (GOD)",
  },
  {
    id: "17f695cb903l0i1uqqf40ik8th6wqw",
    name: "Elemer Of The Briar",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f695cb903l0i1uqqf40ik8th6wqw.png",
    region: "Altus Plateau",
    description:
      "Wielding the stolen sword from the Marais family, Elemer of the Briar stands at the top of the castle waiting.",
    location: "The Shaded Castle",
    drops: ["24,000 Runes", "Marais Executioner's Sword", "Briar Greatshield"],
    healthPoints: "???",
  },
  {
    id: "17f69579c3dl0i1uqxt6ul73e103ur",
    name: "Esgar, Priest Of Blood",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f69579c3dl0i1uqxt6ul73e103ur.png",
    region: "Altus Plateau",
    description: "A highly aggressive humanoid priest",
    location: "Leyndell, Royal Capital",
    drops: ["30000 Runes", "Lord of Blood's Exultation"],
    healthPoints: "???",
  },
  {
    id: "17f6969fb51l0i1ur3o74ppc7h3gl5",
    name: "Erdtree Avatar",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f6969fb51l0i1ur3o74ppc7h3gl5.png",
    region: "Liunia of the Lakes",
    description: "A large headless create which resembles a tree stump.",
    location:
      "Minor Erdtree (Weeping Peninsula), Minor Erdtree (Liurnia Southwest), Minor Erdtree (Liurnia Northeast), Minor Erdtree (Caelid), Minor Erdtree (Mountaintops East)",
    drops: [
      "3,600 Runes",
      "Opaline Bubbletear",
      "Crimsonburst Crystal Tear",
      "5,800 Runes",
      "Cerulean Crystal Tear",
      "Ruptured Crystal Tear",
      "5,800 Runes",
      "Holy-Shrouding Cracked Tear",
      "Lightning-Shrouding Cracked Tear",
      "Magic-Shrouding Cracked Tear",
      "9,600 Runes",
      "Greenburst Crystal Tear",
      "Flame-Shrouding Cracked Tear",
      "70,000 Runes",
      "Cerulean Crystal Tear",
      "Crimson Bubbletear",
    ],
    healthPoints: "14,992",
  },
  {
    id: "17f69aae933l0i1urbz9zyz3jjvhjf",
    name: "Fallingstar Beast",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f6969fb51l0i1ur3o74ppc7h3gl5.png",
    region: "Caelid",
    description:
      "A massive quadruped with a long spiky tail and a head reminiscent of a centipede's, with massive mandibles protruding from its face. It behaves much like a bull and appears to have seismic powers, allowing it to control the earth within its chamber.",
    location: "Sellia Crystal Tunnel, Caelid, Altus Plateau",
    drops: [
      "7,600 Runes",
      "Somberstone Miner's Bell Bearing (1)",
      "Smithing Stone (7) x 5",
      "Somber Smithing Stone (6)",
      "Gravity Stone Chunk x 4",
    ],
    healthPoints: "≈8000",
  },
  {
    id: "17f69c5a361l0i1urf5b4r5s5cf125",
    name: "Fell Twins",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f69c5a361l0i1urf5b4r5s5cf125.png",
    region: "Altus Plateau",
    description:
      "Two bulky ogre-like creatures fighting side by side with red-hot armament",
    location: "Capital Outskirts",
    drops: ["29,000 Runes", "Omenkiller Rollo"],
    healthPoints: "15,664",
  },
  {
    id: "17f695d42c3l0i1uriibjok1ydfodg",
    name: "Fia's Champions",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f695d42c3l0i1uriibjok1ydfodg.png",
    region: "Limgrave",
    description:
      "Five invaders summoned in an endurance combat in three waves.",
    location: "Deeproot Depths",
    drops: ["40000 Runes", "Fia's Mist"],
    healthPoints: "???",
  },
  {
    id: "17f69725115l0i1urx3t47u0gfs43",
    name: "Flying Dragon Agheel",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f69725115l0i1urx3t47u0gfs43.png",
    region: "Limgrave",
    description:
      "A feared-by-most massive dragon located within the Dragon-Burnt Ruins in Limgrave",
    location: "Limgrave, Dragon-Burnt Ruins",
    drops: ["5000 Runes", "Dragon Heart"],
    healthPoints: "≈3200 ",
  },
  {
    id: "17f69ba1aa7l0i1us08w3dodkoeju",
    name: "Fire Giant",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f69ba1aa7l0i1us08w3dodkoeju.png",
    region: "Mountaintops of the Giants",
    description:
      'Upon realizing the flames of their forge would never die, Queen Marika, marked him with a curse. "O trifling giant, mayest thou tend thy, flame for eternity.',
    location: "Mountaintops of the Giants",
    drops: ["180,000 Runes", "Remembrance of the Fire Giant"],
    healthPoints: "126,720",
  },
  {
    id: "17f69846e66l0i1us1stxjbqloi1z",
    name: "Flying Dragon Greyll",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f69846e66l0i1us1stxjbqloi1z.png",
    region: "Caelid",
    description:
      "A large grey dragon, Flying Dragon Greyll patrols the bridge breathing fire and flying down on those trying to cross.",
    location: "Caelid",
    drops: ["80,000 Runes", "Dragon Heart"],
    healthPoints: "11,628 Greater Foe",
  },
  {
    id: "17f696b2a70l0i1us26mtvbp7p85",
    name: "Frenzied Duelist",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f696b2a70l0i1us26mtvbp7p85.png",
    region: "Caelid",
    description: "A humanoid with heavy armor and a massive axe.",
    location: "Gaol Cave",
    drops: ["6700 Runes", "Putrid Corpse Ashes"],
    healthPoints: "≈2200",
  },
  {
    id: "17f699fafc0l0i1usmk2s2oybvx44a",
    name: "God-devouring Serpent",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f699fafc0l0i1usmk2s2oybvx44a.png",
    region: "Mount Gelmir",
    description: "A massive, menacing reptile that poses a remarkable threat.",
    location: "Mt. Gelmir",
    drops: ["See Rykard, Lord of Blasphemy"],
    healthPoints: "≈30439",
  },
  {
    id: "17f6953dec4l0i1uso41jlanmo9c4v",
    name: "Glintstone Dragon Smarag",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f6953dec4l0i1uso41jlanmo9c4v.png",
    region: "Liurnia of the Lakes",
    description:
      "A fearsome magic dragon with crystalized magic stone for scales. Jealously guards the entrance to the Academy's Crystal Cave.",
    location: "Liurnia of the Lakes",
    drops: ["14,699 Runes", "Dragon Heart"],
    healthPoints: "6,100",
  },
  {
    id: "17f695d390el0i1usszzihpctlfb2",
    name: "Glintstone Dragon Adula",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f695d390el0i1usszzihpctlfb2.png",
    region: "Liurnia of the Lakes",
    description:
      "A powerful and devastating dragon, a menace for all type of fighters.",
    location: "Liurnia of The Lakes",
    drops: [
      "120,000 Runes",
      "Adula's Moonblade",
      "3x Dragon Heart",
      "No Runes",
    ],
    healthPoints: "≈11550",
  },
  {
    id: "17f69c4aefal0i1usvodp9osviy7v",
    name: "Godefroy The Grafted",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f69c4aefal0i1usvodp9osviy7v.png",
    region: "Altus Plateau",
    description:
      "A member of Godrick the Grafted's family imprisoned by the Dragon Knight during the War of the Shattering.",
    location: "Golden Lineage Evergaol",
    drops: ["26,000 Runes (NG)", "Godfrey Icon"],
    healthPoints: "???",
  },
  {
    id: "17f696099a7l0i1ut7jqzmbg7hm5tk",
    name: "Godfrey The Grafted",
    image:
      "https://www.theloadout.com/wp-content/sites/theloadout/2022/02/elden-ring-beat-godrick-the-grafted.jpg",
    region: "Altus Plateau",
    description:
      "Godefroy the Grafted was captured by Dragon Knight Kristoff and imprisoned in the Evergaol which earned Dragon",
    location: "Golden Lineage Evergaol",
    drops: ["26,000 Runes", "Other Drops", "Godfrey Icon"],
    healthPoints: "???",
  },
  {
    id: "17f69a82a2el0i1uta5rxvqv53g7e",
    name: "Godfrey, First Elden Lord (hoarah Loux)",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f69a82a2el0i1uta5rxvqv53g7e.png",
    region: "Altus Plateau",
    description:
      "I've given thee courtesy enough. Now I fight as Hoarah Loux. Warrior!",
    location: "Leyndell, Capital of Ash",
    drops: ["300,000  Runes", "Remembrance of Hoarah Loux"],
    healthPoints: "≈2200",
  },
  {
    id: "17f697d2396l0i1utcv9km3qxcnt6m",
    name: "Godfrey, First Elden Lord (golden Shade)",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f697d2396l0i1utcv9km3qxcnt6m.png",
    region: "Altus Plateau",
    description: "Physical form of Godfrey, First Elden Lord",
    location: "Leyndell, Royal Capital",
    drops: ["80,000 Runes", "Talisman Pouch"],
    healthPoints: "≈7099",
  },
  {
    id: "17f6953f0d5l0i1uthl5j30bc50wdo",
    name: "Godrick The Grafted",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f6953f0d5l0i1uthl5j30bc50wdo.png",
    region: "Limgrave",
    description:
      "Godrick the Grafted is the ruler of Stormveil Castle, wielding a large golden axe. He has grafted many arms on his body, a symbol of power to all those who might try to depose him.",
    location: "Stormveil Castle",
    drops: ["Godrick's Great Rune, Remembrance of the Grafted"],
    healthPoints: "6080",
  },
  {
    id: "17f69c1bc31l0i1utrgxwhdp1csdis",
    name: "Godskin Apostle",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f69c1bc31l0i1utrgxwhdp1csdis.png",
    region: "Caelid",
    description:
      "The apostles, one said to serve Destined Death, are wielders of the god-slaying black flame. But after their defeat by Maliketh, the Black Blade, the source of their power was sealed away.",
    location: "Spiritcaller's Cave",
    drops: ["70k Runes", "Godskin Swaddling Cloth", "Black Flame Ritual"],
    healthPoints: "???",
  },
  {
    id: "17f69c68871l0i1utx4r38kpdj1yil",
    name: "Godskin Apostle And Godskin Noble",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f69c68871l0i1utx4r38kpdj1yil.png",
    region: "Mountaintops of the Giants",
    description:
      "They are found in their spirit forms, spawned by the opportunist Spirit-Caller Snail.",
    location: "Spiritcaller Cave, Mountaintops of the Giants",
    drops: [
      "70,000 Runes",
      "Godskin Swaddling Cloth x1",
      "Black Flame Ritual x1",
    ],
    healthPoints: "???",
  },
  {
    id: "17f69e15137l0i1uu7e0w9qynlhveh",
    name: "Death Rite Bird",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f69e15137l0i1uu7e0w9qynlhveh.png",
    region: "Mountaintops of the Giants",
    description:
      "Immense bird skeleton with crow-like features. Rushes to battle from above while wielding a giant spear.",
    location: "Mountaintops of the Giants",
    drops: [
      "77,000 Runes",
      "Death Ritual Spear",
      "18,000 Runes",
      "Death' Poker",
    ],
    healthPoints: "≈2750",
  },
  {
    id: "17f69b45618l0i1uuc1z6qlw7hnnq",
    name: "Godskin Apostle",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f69b45618l0i1uuc1z6qlw7hnnq.png",
    region: "Altus Plateau",
    description:
      "The apostles, one said to serve Destined Death, are wielders of the god-slaying black flame. But after their defeat by Maliketh, the Black Blade, the source of their power was sealed away.",
    location: "Altus Plateau, Caelid",
    drops: [
      "14,000 Runes",
      "Godskin Peeler",
      "Scouring Black Flame",
      "94,000 Runes",
      "Godskin Apostle Hood",
      "Godskin Apostle Robe",
      "Godskin Apostle Bracers",
      "Godskin Apostle Trousers",
      "70,000 Runes",
      "Godskin Swaddling Cloth",
      "Black Flame Ritual",
    ],
    healthPoints: "≈10,000",
  },
  {
    id: "17f69814439l0i1uuifby3b0bn9gs",
    name: "Godskin Noble",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f69814439l0i1uuifby3b0bn9gs.png",
    region: "Mount Gelmir",
    description: "The most aggresive of the Godskin.",
    location: "Spiritcaller's Cave,Volcano Manor, ",
    drops: [
      "70,000 Runes",
      "Godskin Swaddling Cloth",
      "Black Flame Ritual",
      "50,000 Runes",
      "Godskin Stitcher",
      "Noble Presence",
    ],
    healthPoints: "≈10,000",
  },
  {
    id: "17f69bf253bl0i1uuma3733w2zwodm",
    name: "Grafted Scion",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f69bf253bl0i1uuma3733w2zwodm.png",
    region: "Liurnia of the Lakes",
    description:
      "An amorphous blob that wields two swords and a shield, and appears to be grafted with multiple arms.",
    location: "Tutorial Area",
    drops: [
      "1176 Runes",
      "583 runes-currency-elden-ring-wiki-guide-18 Runes",
      "3200 Runes",
      "1283 Runes",
      "Larval Tear",
      "2313 runes-currency-elden-ring-wiki-guide-18 Runes",
      "12800 Runes (NG+1)",
      "Ornamental Straight Sword",
      "Golden Beast Crest Shield",
    ],
    healthPoints: "???",
  },
  {
    id: "17f695140e9l0i1uuu2pjzqqsbskl",
    name: "Great Wyrm Theodorix",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f695140e9l0i1uuu2pjzqqsbskl.png",
    region: "Mountaintops of the Giants",
    description: "A dragon wyrm with immense power.",
    location: "North of Albinauric Rise in Mountaintops of the Giants",
    drops: ["180,000 Runes", "Dragon Heart x3"],
    healthPoints: "≈35,000",
  },
  {
    id: "17f695022a1l0i1uv9aohy5ip9yh9f",
    name: "Hoarah Loux, Warrior",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f695022a1l0i1uv9aohy5ip9yh9f.png",
    region: "Altus Plateau",
    description: "Chieftain of the Badland Warriors.",
    location: "Leyndell, Ashen Capital.",
    drops: ["300000 Runes", "Remembrance of Hoarah Loux"],
    healthPoints: "???",
  },
  {
    id: "17f69a5abc3l0i1uvfn18gmmqaf8jvj",
    name: "Kindred Of Rot",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f69a5abc3l0i1uvfn18gmmqaf8jvj.png",
    region: "Mount Gelmir",
    description:
      "Large, prawn-like creatures skilled at melee combat. Its Pest's Glaive poses a menace when wielded by these agile beings.",
    location: "Mt. Gelmir",
    drops: ["10000 Runes", "Kindred of Rot's Exultation"],
    healthPoints: "≈4000",
  },
  {
    id: "17f69cbe6cbl0i1uvgek1x2hoimz99",
    name: "Guardian Golem",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f69cbe6cbl0i1uvgek1x2hoimz99.png",
    region: "Limgrave",
    description:
      "The Guardian Golem, magical constructs that has been cut and chiseled from stone. It is the sole guardian of the Highroad Cave who holds a precious item.",
    location: "Highroad Cave",
    drops: ["1700 Runes", "Blue Dancer Charm"],
    healthPoints: "???",
  },
  {
    id: "17f698b6791l0i1uvgjwlxwarfpe7a",
    name: "Godskin Duo",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f698b6791l0i1uvgjwlxwarfpe7a.png",
    region: "Altus Plateau",
    description:
      "A complementing pair of creatures extremely well versed in dual-battling. These beings achieve an exceptionally balance in combat, resulting in a devastating synergy.",
    location: "Crumbling Farum Azula",
    drops: [
      "170000 Runes",
      "Smithing-Stone Miner's Bell Bearing [4]",
      "Ash of War: Black Flame Tornado",
    ],
    healthPoints: "≈24,000",
  },
  {
    id: "17f69b5bcb4l0i1uvn888e99evsdgh",
    name: "Kindred Of Rot",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f69a5abc3l0i1uvfn18gmmqaf8jvj.png",
    region: "Mount Gelmir",
    description:
      "Large, prawn-like creatures skilled at melee combat. Its Pest's Glaive poses a menace when wielded by these agile beings.",
    location: "Seethewater Cave",
    drops: ["10000 Runes", "Kindred of Rot's Exultation"],
    healthPoints: "≈4000",
  },
  {
    id: "17f69644c82l0i1uw7sqlk2v4b6bfg",
    name: "Leonine Misbegotten",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f69644c82l0i1uw7sqlk2v4b6bfg.png",
    region: "Weeping Peninsula",
    description: "Aggressive and feral, the Misbegotten sees nothing but rage",
    location: "Castle Morne, Weeping Peninsula",
    drops: ["3800 Runes", "Grafted Blade Greatsword"],
    healthPoints: "14,272",
  },
  {
    id: "17f699223e7l0i1uwcol7wflmcgajb",
    name: "Lichdragon Fortissax",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f699223e7l0i1uwcol7wflmcgajb.png",
    region: "Limgrave",
    description:
      "Massive four winged black dragon with the ability to wield lightning.",
    location: "Deeproot Depths",
    drops: ["90000 Runes", "Remembrance of the Lichdragon"],
    healthPoints: "≈2200",
  },
  {
    id: "17f69a078e0l0i1uwdp4xqjq6cpbxl",
    name: "Mad Pumpkin Head",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f69a078e0l0i1uwdp4xqjq6cpbxl.png",
    region: "Limgrave",
    description:
      "A huge ogre-looking creature that has a large pumpkin helmet worn on its head. It wields a massive flail and seems to be guarding something or someone against intruders.",
    location: "Waypoint Ruins, Limgrave, Caelem Ruins, Caelid",
    drops: ["6300 Runes"],
    healthPoints: "≈10,500",
  },
  {
    id: "17f69bfa759l0i1uwfa0yrdvzcov1i",
    name: "Magma Wyrm",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f69bfa759l0i1uwfa0yrdvzcov1i.png",
    region: "Caelid",
    description:
      "A large lesser dragon with bronze-colored scales covering its body. Magma Wyrms inhabit deep cave systems and volcanos, thriving within lava-flooded environments. ",
    location: "Gael Tunnel",
    drops: ["7500 Runes", "Dragon Heart", "Moonveil"],
    healthPoints: "7000",
  },
  {
    id: "17f696318a4l0i1uwi4cr4u43opdj5",
    name: "Lion Guardian",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f696318a4l0i1uwi4cr4u43opdj5.png",
    region: "Limgrave",
    description:
      "The Lion Guardian of Stormveil has been coerced into service by cruel means",
    location: "Stormveil Castle",
    drops: ["2350"],
    healthPoints: "≈2350",
  },
  {
    id: "17f69a48308l0i1ux3rigvv37tx84f",
    name: "Malenia, Blade Of Miquella",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f69a48308l0i1ux3rigvv37tx84f.png",
    region: "Consecrated Snowfield",
    description:
      "...Heed my words. I am Malenia. Blade of Miquella. And I have never known defeat.",
    location: "Elphael, Brace of the Haligtree",
    drops: [
      "Malenia's Great Rune",
      "Remembrance of the Rot Goddess",
      "480,000 Runes",
    ],
    healthPoints: "≈26,128",
  },
  {
    id: "17f69dbf58cl0i1ux7vft8wsk6ejbb",
    name: "Maliketh, The Black Blade",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f69dbf58cl0i1ux7vft8wsk6ejbb.png",
    region: "Altus Plateau",
    description: "O, Death. Become my blade once more.",
    location: "Crumbling Farum Azula",
    drops: ["220,000 Runes", "Other Drops", "Remembrance of the Black Blade"],
    healthPoints: "≈10620",
  },
  {
    id: "17f699a40dfl0i1ux9v66kv7dyxcqx",
    name: "Miranda The Blighted Bloom",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f699a40dfl0i1ux9v66kv7dyxcqx.png",
    region: "Weeping Peninsula",
    description: "A giant poison flower that is deadlier than it looks.",
    location:
      "Weeping Peninsula: Tombsward Cave, Altus Plains: Perfumer's Grotto",
    drops: [
      "2100 Runes",
      "Viridian Amber Medallion",
      "8500 Runes",
      "Great Omenkiller Cleaver",
    ],
    healthPoints: "???",
  },
  {
    id: "17f69e11c75l0i1uxa6gb2wpb12ipb",
    name: "Mimic Tear",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f69e11c75l0i1uxa6gb2wpb12ipb.png",
    region: "Limgrave",
    description:
      "An eccentric being capable of taking a comprehensive shape of its adversary, ranging from body features to armament.",
    location: "Nokron, Eternal City",
    drops: ["10000 Runes", "Larval Tear x2", "Silver Tear Mask"],
    healthPoints: "≈19,536",
  },
  {
    id: "17f698a5648l0i1uxs5sk4eq7dy3vh",
    name: "Misbegotten Crusader",
    image: null,
    region: "Mountaintops of the Giants",
    description: "The Lord of Frenzied Flame.",
    location: "Cave of the Forlorn in Mountaintops of the Giants",
    drops: ["93000 Runes", "Golden Order Greatsword"],
    healthPoints: "≈2200",
  },
  {
    id: "17f697f4363l0i1uy2tk9e7g2jqcu",
    name: "Mohg, Lord Of Blood",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f697f4363l0i1uy2tk9e7g2jqcu.png",
    region: "Limgrave",
    description: "Welcome, honored guest. To the birthplace of our Dynasty!",
    location: "Mohgwyn Palace",
    drops: [
      "420,000 Runes",
      "Mohg's Great Rune",
      "Remembrance of the Blood Lord",
    ],
    healthPoints: "≈38,848",
  },
  {
    id: "17f69a3b2f2l0i1uy2usy0fea155ms",
    name: "Mohg, The Omen",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f697f4363l0i1uy2tk9e7g2jqcu.png",
    region: "Altus Plateau",
    description: "The Lord of Frenzied Flame",
    location: "Subterranean Shunning-Grounds",
    drops: ["100,000 Runes", "Bloodflame Talons"],
    healthPoints: "???",
  },
  {
    id: "17f69d3101al0i1uyefex03ulrqazi",
    name: "Magma Wyrm Makar",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f69d3101al0i1uyefex03ulrqazi.png",
    region: "Altus Plateau",
    description:
      "Aggressive Fire Wyrm guarding the entrance to Altus Plains from any who attempt to bypass the lift",
    location: "Ruin-Strewn Precipice",
    drops: [
      "24000 Runes",
      "Magma Wyrm's Scalesword",
      "72000 Runes",
      "Dragon Heart",
    ],
    healthPoints: "≈2200",
  },
  {
    id: "17f69d237f0l0i1uytr06ed4gz92qdj",
    name: "Necromancer Garris",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f69d237f0l0i1uytr06ed4gz92qdj.png",
    region: "Altus Plateau",
    description:
      "A humanoid necromancer draped in a red cloth. Efficient in the death sorceries.",
    location: "Sage's Cave, Altus Plateau",
    drops: ["0 Runes", "Family Heads"],
    healthPoints: "Field Boss",
  },
  {
    id: "17f6963b02cl0i1uyzthmeyyq45wna",
    name: "Nox Swordstress & Nox Priest",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f6963b02cl0i1uyzthmeyyq45wna.png",
    region: "Caelid",
    description:
      "A duo of warriors comprised of the female Swordstress, who uses a sword with a whip-like function to attack at medium range and a male Priest who uses spells from afar.",
    location: "Sellia, Town of Sorcery, Caelid",
    drops: ["6,400 Runes", "Nox Flowing Sword"],
    healthPoints: "???",
  },
  {
    id: "17f69a6c3fcl0i1uyzw7a7ssn0qlpp",
    name: "Night's Cavalry",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f69a6c3fcl0i1uyzw7a7ssn0qlpp.png",
    region: "Limgrave",
    description:
      "Imposing knight figure atop a dark steed, wielding a large flail or halberd.",
    location: "Many",
    drops: [
      "2400 Runes",
      "Ash of War: Repeating Thrust",
      "3400 Runes",
      "Ash of War: Barricade Shield",
      "5600 Runes",
      "Ash of War: Ice Spear",
      "8500 Runes",
      "Ash of War: Poison Moth Flight",
      "10000 Runes",
      "Ash of War: Phantom Slash",
      "36000 Runes",
      "Ash of War: Phantom Slash",
      "42000 Runes",
      "Ash of War:Bloodhound's Step",
      "84000 Runes",
      "Night's Calvary Set",
    ],
    healthPoints: "≈2200",
  },
  {
    id: "17f69a1be26l0i1uz1kl2dyuibof4d",
    name: "Omenkiller",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f69a1be26l0i1uz1kl2dyuibof4d.png",
    region: "Liurnia of the Lakes",
    description: "An omninous figure wielding two serrated swords.",
    location: "Village of the Albinaurics, Volcano Manor, Perfumer's Grotto",
    drops: [
      "4900 Runes",
      "Crucible Knot Talisman",
      "8400 Runes",
      "Great Omenkiller Cleaver",
      "Great Omenkiller Cleaver",
    ],
    healthPoints: "≈2200",
  },
  {
    id: "17f69a36cf8l0i1uz6gmzy0dr777k",
    name: "Onyx Lord",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f69a36cf8l0i1uz6gmzy0dr777k.png",
    region: "Liurnia of the Lakes",
    description:
      "The Onyx Lords, who had skin of stone, were called lords in reverential fear of their destructive power.",
    location: "Sealed Tunnel, Royal Grave Evergaol",
    drops: ["16000 Runes", "Onyx Lord's Greatsword"],
    healthPoints: "???",
  },
  {
    id: "17f699438b8l0i1uze1493a9h5ipk3",
    name: "Perfumer Tricia",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f699438b8l0i1uze1493a9h5ipk3.png",
    region: "Mount Gelmir",
    description:
      "A long range spellcaster complemented by an armored, short-distance warrior.",
    location: "Unsightly Catacombs, Mt. Gelmir",
    drops: ["9400 Runes", "Other Drops"],
    healthPoints: "≈1024",
  },
  {
    id: "17f699ad704l0i1uzmqfup4jxyto7",
    name: "Putrid Grave Warden Duelist",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f699ad704l0i1uzmqfup4jxyto7.png",
    region: "Consecrated Snowfield",
    description:
      "Grave Wardens protect the secrets of the ancients, but the corruption of the land has affected them too",
    location: "Consecrated Snowfield Catacombs, Consecrated Snowfield.",
    drops: [
      "78,000 Runes",
      "Great Grave Glovewort",
      "Rotten Gravekeeper Cloak",
    ],
    healthPoints: "≈2200",
  },
  {
    id: "17f697e343bl0i1uznxx67p026exqf",
    name: "Pumpkin Head",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f697e343bl0i1uznxx67p026exqf.png",
    region: "Weeping Peninsula",
    description:
      "The breaking disrupted the flora and fauna of the region. Some took a rather intense liking to the larger plants that emerged",
    location: "Castle Morne, Weeping Peninsula",
    drops: ["291 Runes", "Pumpkin Helm", "Sanctuary Stone"],
  },
  {
    id: "17f69cfaee3l0i1uzongoyxg1dptid",
    name: "Putrid Tree Spirit",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f69cfaee3l0i1uzongoyxg1dptid.png",
    region: "Caelid",
    description:
      "A blood-rotted tree that has found life despite the death that consumes it.",
    location: "War-Dead Catacombs",
    drops: ["67,200 Runes ", "Redmane Knight Ogha Spirit Ashes", "Golden Seed"],
    healthPoints: "≈18091",
  },
  {
    id: "17f69bc8bd6l0i1v03619u4s9j9ql",
    name: "Radagon Of The Golden Order",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f69bc8bd6l0i1v03619u4s9j9ql.png",
    region: "Altus Plateau",
    description:
      "Lord Radagon was a great champion, possessed of flowing red locks. He came to these lands at the head of a great golden host, when he met Lady Rennala in battle. He soon repented his territorial transgressions though, and became husband to the Carian Queen. However. When Godfrey, first Elden Lord, was hounded from the Lands Between, Radagon left Rennala to return to the Erdtree Capital, becoming Queen Marika's second husband and King Consort. Taking the title... of second Elden Lord.",
    location: "Elden Throne",
    drops: ["N/A"],
    healthPoints: "≈13339",
  },
  {
    id: "17f6992c3e3l0i1v0af3d14p4dcgzx",
    name: "Red Wolf Of Radagon",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f6992c3e3l0i1v0af3d14p4dcgzx.png",
    region: "Liurnia of the Lakes",
    description:
      "Fierce guardian and protector of its master, even when it has long left.",
    location: "Raya Lucaria Academy, Liurnia of the Lakes",
    drops: ["14000 Runes", "Memory Stone"],
    healthPoints: "≈2204",
  },
  {
    id: "17f69cf967fl0i1v0cmt73nix34p0c",
    name: "Red Wolf Of The Champion",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f69cf967fl0i1v0cmt73nix34p0c.png",
    region: "Mount Gelmir",
    description: "A ferocious red wolf with large fangs and blistering speed.",
    location: "Gelmir Hero's Grave",
    drops: ["21000 Runes", "Bloodhound Knight Floh"],
    healthPoints: "≈3238",
  },
  {
    id: "17f69ae5092l0i1v0k714w3s2jz8tj",
    name: "Regal Ancestor Spirit",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f69ae5092l0i1v0k714w3s2jz8tj.png",
    region: "Limgrave",
    description:
      "A spirit glowing in pale blue light, suspended in the air and taking the shape of a huge deer.",
    location: "Nokron, Eternal City",
    drops: ["24000 Runes", "Remembrance of the Regal Ancestor"],
    healthPoints: "≈6301",
  },
  {
    id: "17f69b19e80l0i1v0x2eima4yhdbd",
    name: "Royal Knight Loretta",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f69b19e80l0i1v0x2eima4yhdbd.png",
    region: "Liurnia of the Lakes",
    description:
      "The eternal guardian of Caria Manor fervently defends her domain atop the Royal Moongazing Grounds. Loretta uses her greatbow to rain destruction on all who would dare approach the estate grounds.",
    location: "Caria Manor",
    drops: [
      "10,000 Runes",
      "Loretta's Greatbow",
      "Ash of War: Loretta's Slash",
    ],
    healthPoints: "≈4214",
  },
  {
    id: "17f69de0562l0i1v105zzs817wea9m",
    name: "Royal Revenant",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f69de0562l0i1v105zzs817wea9m.png",
    region: "Liurnia of the Lakes",
    description:
      "An obscene and disturbing abomination, blend of a spider-like creature and human limbs resulting in a quite resourceful fighter at close range.",
    location: "Kingsrealm Ruins, Liurnia of the Lakes",
    drops: ["3,100 Runes"],
    healthPoints: "≈2200",
  },
  {
    id: "17f699179aal0i1v13n497m1yhps2s",
    name: "Runebear",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f699179aal0i1v13n497m1yhps2s.png",
    region: "Weeping Peninsula",
    description:
      "Ferocious, robust creature that's huge in size and remarkably agressive.",
    location: "Earthbore Cave, Weeping Peninsula",
    drops: ["2600 Runes", "Spelldrake Talisman"],
    healthPoints: "???",
  },
  {
    id: "17f696d979al0i1v1775oof02bi8oh",
    name: "Rykard, Lord Of Blasphemy",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f696d979al0i1v1775oof02bi8oh.png",
    region: "Mount Gelmir",
    description:
      "Join the Serpent King, as family... Together, we will devour the very gods!",
    location: "Mt. Gelmir",
    drops: [
      "130,000 Runes",
      "Rykard's Great Rune",
      "Remembrance of the Blasphemous",
    ],
    healthPoints: "1000000",
  },
  {
    id: "17f698d3cc6l0i1v18wptud2du5ts",
    name: "Scaly Misbegotten",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f698d3cc6l0i1v18wptud2du5ts.png",
    region: "Weeping Peninsula",
    description: "A troll like scavenger with an insatiable taste for blood.",
    location: "Morne Tunnel",
    drops: ["2000 Runes", "Rusted Anchor"],
    healthPoints: "≈2200",
  },
  {
    id: "17f69ca8b2al0i1v1pg987jdl4cd68",
    name: "Sir Gideon Ofnir, The All-knowing",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f69ca8b2al0i1v1pg987jdl4cd68.png",
    region: "Altus Plateau",
    description:
      "Sir Gideon Ofnir, now far from the books and immersed in battle.",
    location: "Leyndell, Capital of Ash",
    drops: [
      "180,000 Runes",
      "All-Knowing Helm",
      "All-Knowing Armor",
      "All-Knowing Gauntlets",
      "All-Knowing Greaves",
      "Scepter of the All-Knowing",
    ],
    healthPoints: "≈6226",
  },
  {
    id: "17f6982dbf7l0i1v1r3i4p5cy7kvcs",
    name: "Soldier Of Godrick",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f6982dbf7l0i1v1r3i4p5cy7kvcs.png",
    region: "Limgrave",
    description:
      "An esteemed high rank soldier, who wields a massive sword and wears his armor proudly.",
    location: "Stranded Graveyard",
    drops: ["400 Runes", "2000 Runes (NG+1)"],
    healthPoints: "≈10,464",
  },
  {
    id: "17f6987c932l0i1v1t55h6j6fm1l83",
    name: "Spirit-caller Snail",
    image:
      "https://eldenring.fanapis.com/images/bosses/17f6987c932l0i1v1t55h6j6fm1l83.png",
    region: "Liurnia of the Lakes",
    description: "The ultimate Spiritcaller.",
    location: "Road's End CatacombsSpiritcaller's Cave",
    drops: [
      "3000 Runes",
      "Glintstone Sorcerer Ashes ",
      "170000 Runes",
      "Smithing-Stone Miner's Bell Bearing [4]",
      "Ash of War: Black Flame Tornado",
    ],
    healthPoints: "≈2200",
  },
];
export default bossData;
