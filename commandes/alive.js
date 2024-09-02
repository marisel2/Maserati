const axios = require("axios");
const {
  king
} = require("../framework/zokou");
const {
  Sticker,
  StickerTypes
} = require("wa-sticker-formatter");
zokou({
  'nomCom': "ranime",
  'categorie': "Fun",
  'reaction': '📺'
}, async (_0x55036f, _0x2462f2, _0x22d84c) => {
  const {
    repondre: _0x36e432,
    ms: _0x1ee7a6
  } = _0x22d84c;
  try {
    const _0x4dfd9f = await axios.get("https://api.jikan.moe/v4/random/anime");
    const _0x3ea3dd = _0x4dfd9f.data.data;
    const _0x5678a7 = _0x3ea3dd.title;
    const _0x281804 = _0x3ea3dd.synopsis;
    const _0x143f0d = _0x3ea3dd.images.jpg.image_url;
    const _0x2c2203 = _0x3ea3dd.episodes;
    const _0x4decd5 = _0x3ea3dd.status;
    const _0x431487 = "📺 Titre: " + _0x5678a7 + "\n🎬 Épisodes: " + _0x2c2203 + "\n📡 Statut: " + _0x4decd5 + "\n📝 Synopsis: " + _0x281804 + "\n🔗 URL: " + _0x3ea3dd.url;
    _0x2462f2.sendMessage(_0x55036f, {
      'image': {
        'url': _0x143f0d
      },
      'caption': _0x431487
    }, {
      'quoted': _0x1ee7a6
    });
  } catch (_0x108811) {
    console.error("Error retrieving data from JSON :", _0x108811);
    _0x36e432("Error retrieving data from JSON.");
  }
});
zokou({
  'nomCom': "google",
  'categorie': 'Search'
}, async (_0x84493, _0x58449b, _0x1125a8) => {
  const {
    arg: _0x26d500,
    repondre: _0xe10188
  } = _0x1125a8;
  if (!_0x26d500[0x0] || _0x26d500 === '') {
    _0xe10188("Give me a query.\n*Example: .google What is a bot.*");
    return;
  }
  const _0x245ba9 = require("google-it");
  try {
    const _0x5c40be = await _0x245ba9({
      'query': _0x26d500.join(" ")
    });
    let _0x5bc067 = "Google search for : " + _0x26d500 + "\n\n";
    for (let _0x750fb2 of _0x5c40be) {
      _0x5bc067 += "➣ Title : " + _0x750fb2.title + "\n";
      _0x5bc067 += "➣ Description : " + _0x750fb2.snippet + "\n";
      _0x5bc067 += "➣ Link : " + _0x750fb2.link + "\n\n────────────────────────\n\n";
    }
    _0xe10188(_0x5bc067);
  } catch (_0xedf4d2) {
    _0xe10188("An error occurred during Google search.");
  }
});
zokou({
  'nomCom': "imdb",
  'categorie': "Search"
}, async (_0x4a08ae, _0x50d6b0, _0x2245c4) => {
  const {
    arg: _0x31a559,
    repondre: _0x176c5b,
    ms: _0x35792e
  } = _0x2245c4;
  if (!_0x31a559[0x0] || _0x31a559 === '') {
    _0x176c5b("give the name of a series or film.");
    return;
  }
  try {
    const _0x4635c3 = await axios.get("http://www.omdbapi.com/?apikey=742b2d09&t=" + _0x31a559 + "&plot=full");
    const _0x2a6557 = _0x4635c3.data;
    let _0xfac1a8 = "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n";
    _0xfac1a8 += " ``` 𝕀𝕄𝔻𝔹 𝕊𝔼𝔸ℝℂℍ```\n";
    _0xfac1a8 += "⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n";
    _0xfac1a8 += "🎬Title    : " + _0x2a6557.Title + "\n";
    _0xfac1a8 += "📅year      : " + _0x2a6557.Year + "\n";
    _0xfac1a8 += "⭐Assessment : " + _0x2a6557.Rated + "\n";
    _0xfac1a8 += "📆Release    : " + _0x2a6557.Released + "\n";
    _0xfac1a8 += "⏳Runtime     : " + _0x2a6557.Runtime + "\n";
    _0xfac1a8 += "🌀Genre      : " + _0x2a6557.Genre + "\n";
    _0xfac1a8 += "👨🏻‍💻Director : " + _0x2a6557.Director + "\n";
    _0xfac1a8 += "✍writers : " + _0x2a6557.Writer + "\n";
    _0xfac1a8 += "👨actors  : " + _0x2a6557.Actors + "\n";
    _0xfac1a8 += "📃Synopsis  : " + _0x2a6557.Plot + "\n";
    _0xfac1a8 += "🌐Language  : " + _0x2a6557.Language + "\n";
    _0xfac1a8 += "🌍Contry      : " + _0x2a6557.Country + "\n";
    _0xfac1a8 += "🎖️Awards : " + _0x2a6557.Awards + "\n";
    _0xfac1a8 += "📦BoxOffice : " + _0x2a6557.BoxOffice + "\n";
    _0xfac1a8 += "🏙️Production : " + _0x2a6557.Production + "\n";
    _0xfac1a8 += "🌟score : " + _0x2a6557.imdbRating + "\n";
    _0xfac1a8 += "❎imdbVotes : " + _0x2a6557.imdbVotes + '';
    _0x50d6b0.sendMessage(_0x4a08ae, {
      'image': {
        'url': _0x2a6557.Poster
      },
      'caption': _0xfac1a8
    }, {
      'quoted': _0x35792e
    });
  } catch (_0x4b2079) {
    _0x176c5b("An error occurred while searching IMDb.");
  }
});
zokou({
  'nomCom': 'emomix',
  'categorie': "Conversion"
}, async (_0x574b2c, _0x523296, _0xaddda) => {
  const {
    arg: _0x3c4d77,
    repondre: _0x349ed0,
    ms: _0x17f6d8,
    nomAuteurMessage: _0x4d916e
  } = _0xaddda;
  if (!_0x3c4d77[0x0] || _0x3c4d77.length !== 0x1) {
    _0x349ed0("Incorrect use. Example: .emojimix 😀;🥰");
    return;
  }
  const _0x1acf12 = _0x3c4d77.join(" ").split(';');
  if (_0x1acf12.length !== 0x2) {
    _0x349ed0("Please specify two emojis using a ';' as a separator.");
    return;
  }
  const _0xcf931c = _0x1acf12[0x0].trim();
  const _0x46e6a9 = _0x1acf12[0x1].trim();
  try {
    const _0x44df66 = require("axios");
    const _0x4dc10b = await _0x44df66.get("https://levanter.onrender.com/emix?q=" + _0xcf931c + _0x46e6a9);
    if (_0x4dc10b.data.status === true) {
      let _0xd2155b = new Sticker(_0x4dc10b.data.result, {
        'pack': MASERATI,
        'type': StickerTypes.CROPPED,
        'categories': ['🤩', '🎉'],
        'id': "12345",
        'quality': 0x46,
        'background': "transparent"
      });
      const _0x31be8d = await _0xd2155b.toBuffer();
      _0x523296.sendMessage(_0x574b2c, {
        'sticker': _0x31be8d
      }, {
        'quoted': _0x17f6d8
      });
    } else {
      _0x349ed0("Unable to create emoji mix.");
    }
  } catch (_0x1754be) {
    _0x349ed0("An error occurred while creating the emoji mix." + _0x1754be);
  }
});
