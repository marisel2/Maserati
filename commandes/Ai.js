const {
  zokou
} = require("../framework/zokou");
const {
  default: axios
} = require("axios");
zokou({
  'nomCom': "marisel",
  'reaction': '📡',
  'categorie': 'AI'
}, async (_0x58db7e, _0x1c9ca4, _0x3bb324) => {
  const {
    repondre: _0x1ad64e,
    ms: _0x320411,
    arg: _0x821059
  } = _0x3bb324;
  if (!_0x821059 || !_0x821059[0]) {
    return _0x1ad64e("Yes!\n _How are you doing?,I'm listening to you._");
  }
  try {
    const _0xf067fc = _0x821059.join(" ");
    const _0x3fced7 = await fetch("http://api.brainshop.ai/get?bid=181821&key=ltFzFIXrtj2SVMTX&uid=[uid]&msg=" + _0xf067fc);
    const _0x273e1c = await _0x3fced7.json();
    await _0x1ad64e(_0x273e1c.cnt);
  } catch {
    _0x1ad64e("something went wrong...");
  }
});
zokou({
  'nomCom': "dalle",
  'reaction': '📡',
  'categorie': 'AI'
}, async (_0x22ef9c, _0x5287a8, _0x2ccd49) => {
  const {
    repondre: _0x2b1a81,
    arg: _0x885e30,
    ms: _0x4eb9fe
  } = _0x2ccd49;
  try {
    if (!_0x885e30 || _0x885e30.length === 0) {
      return _0x2b1a81("Please enter the necessary information to generate the image.");
    }
    const _0x30bcaa = _0x885e30.join(" ");
    const _0x93b128 = "https://widipe.com/dalle?text=" + _0x30bcaa;
    _0x5287a8.sendMessage(_0x22ef9c, {
      'image': {
        'url': _0x93b128
      },
      'caption': "*powered by FLASH-MD*"
    }, {
      'quoted': _0x4eb9fe
    });
  } catch (_0x3fe80d) {
    console.error("Erreur:", _0x3fe80d.message || "Une erreur s'est produite");
    _0x2b1a81("Oops, an error occurred while processing your request");
  }
});
zokou({
  'nomCom': "gpt",
  'reaction': '📡',
  'categorie': 'AI'
}, async (_0x46f0f9, _0x4186c0, _0x456b8f) => {
  const {
    repondre: _0x201e9d,
    arg: _0x3f1807,
    ms: _0x1468ab
  } = _0x456b8f;
  if (!_0x3f1807 || _0x3f1807.length === 0) {
    return _0x201e9d("Please ask a question.");
  }
  const _0x57e4cc = _0x3f1807.join(" ");
  const _0x342f76 = await fetch("https://api.maher-zubair.tech/ai/chatgpt3?q=" + _0x57e4cc);
  const _0x559f0e = await _0x342f76.json();
  await _0x201e9d(_0x559f0e.result);
  console.log(_0x559f0e.completion);
});
zokou({
  'nomCom': "gemini",
  'reaction': '🤗',
  'categorie': 'AI'
}, async (_0x5b435e, _0x1a5e51, _0x2a8399) => {
  const {
    repondre: _0x46a993,
    arg: _0x4c8b26,
    ms: _0x2ebfb8
  } = _0x2a8399;
  if (!_0x4c8b26 || _0x4c8b26.length === 0) {
    return _0x46a993("Hello am *FLASH-MD.* an Ai developed by France King.\n\n What help can I offer you today?.");
  }
  const _0xfb4535 = _0x4c8b26.join(" ");
  const _0x5bb3c7 = await fetch("https://api.maher-zubair.tech/ai/chatgpt3?q=" + _0xfb4535);
  const _0x4fcf69 = await _0x5bb3c7.json();
  await _0x46a993(_0x4fcf69.result);
  console.log(_0x4fcf69.completion);
});
zokou({
  'nomCom': "calc",
  'reaction': '🔢',
  'categorie': "General"
}, async (_0x2a01c5, _0xafa488, _0x1a93f6) => {
  const {
    repondre: _0x11087f,
    arg: _0x3e28b7,
    ms: _0x3720d6
  } = _0x1a93f6;
  if (!_0x3e28b7 || _0x3e28b7.length === 0) {
    return _0x11087f("Please insert maths calculations like 100000+2024.\n\nNOTE: Use \"(/)\" for division and \"(*)\" for multiplication or letter x");
  }
  const _0x3190d6 = _0x3e28b7.join(" ");
  const _0x17713d = await fetch("https://api.maher-zubair.tech/ai/mathssolve?q=" + _0x3190d6);
  const _0x4f20aa = await _0x17713d.json();
  await _0x11087f(_0x4f20aa.result);
  console.log(_0x4f20aa.completion);
});
zokou({
  'nomCom': "gpt4",
  'reaction': '📡',
  'categorie': 'AI'
}, async (_0x5a7396, _0x504136, _0x1ead50) => {
  const {
    repondre: _0x270954,
    arg: _0x13634e,
    ms: _0x208b8f
  } = _0x1ead50;
  try {
    if (!_0x13634e || _0x13634e.length === 0) {
      return _0x270954("Please ask a question.");
    }
    const _0x334eae = _0x13634e.join(" ");
    const _0x1aba4c = await axios.get("https://api.maher-zubair.tech/ai/chatgpt4?q=" + _0x334eae);
    const _0x10e0e9 = _0x1aba4c.data;
    if (_0x10e0e9) {
      _0x270954(_0x10e0e9.data);
    } else {
      _0x270954("Error during response generation.");
    }
  } catch (_0x39eebc) {
    console.error("Erreur:", _0x39eebc.message || "Une erreur s'est produite");
    _0x270954("Oops, an error occurred while processing your request.");
  }
});
zokou({
  'nomCom': "best-wallp",
  'reaction': '🙌',
  'categorie': "FLASH-MD PICS"
}, async (_0x383089, _0x5f221f, _0x443e35) => {
  const {
    repondre: _0x53482f,
    arg: _0x59bce7,
    ms: _0x3dd4f0
  } = _0x443e35;
  const _0x230438 = await fetch("https://api.unsplash.com/photos/random?client_id=72utkjatCBC-PDcx7-Kcvgod7-QOFAm2fXwEeW8b8cc");
  const _0x4ec65c = await _0x230438.json();
  const _0x451fb6 = _0x4ec65c.urls.regular;
  let _0xa87037 = {
    'image': {
      'url': _0x451fb6
    },
    'caption': "*POWERED BY FLASH-MD*"
  };
  return await _0x5f221f.sendMessage(_0x383089, _0xa87037, {
    'quoted': _0x3dd4f0
  });
});
zokou({
  'nomCom': "random",
  'reaction': '🥂',
  'categorie': "FLASH-MD PICS"
}, async (_0x106175, _0x4e034a, _0x2094e7) => {
  const {
    repondre: _0x302587,
    arg: _0x3898c2,
    ms: _0x3082b2
  } = _0x2094e7;
  const _0x54c129 = await fetch("https://api.unsplash.com/photos/random?client_id=72utkjatCBC-PDcx7-Kcvgod7-QOFAm2fXwEeW8b8cc");
  const _0x2eeb68 = await _0x54c129.json();
  const _0x2c4590 = _0x2eeb68.urls.regular;
  let _0x5b4b29 = {
    'image': {
      'url': _0x2c4590
    },
    'caption': "*POWERED BY FLASH-MD*"
  };
  return await _0x4e034a.sendMessage(_0x106175, _0x5b4b29, {
    'quoted': _0x3082b2
  });
});
zokou({
  'nomCom': "nature",
  'reaction': '🦗',
  'categorie': "FLASH-MD PICS"
}, async (_0x15185a, _0x252cd2, _0x3ca93e) => {
  const {
    repondre: _0x24b3b1,
    arg: _0x39dca1,
    ms: _0x1e3b1c
  } = _0x3ca93e;
  const _0x5653a3 = await fetch("https://api.unsplash.com/photos/random?client_id=72utkjatCBC-PDcx7-Kcvgod7-QOFAm2fXwEeW8b8cc");
  const _0x1e0a63 = await _0x5653a3.json();
  const _0x2c338d = _0x1e0a63.urls.regular;
  let _0x3bae21 = {
    'image': {
      'url': _0x2c338d
    },
    'caption': "*POWERED BY Maserati*"
  };
  return await _0x252cd2.sendMessage(_0x15185a, _0x3bae21, {
    'quoted': _0x1e3b1c
  });
});
zokou({
  'nomCom': "time",
  'reaction': '⌚',
  'categorie': "General"
}, async (_0x44fbe3, _0x1d2f88, _0x4c2273) => {
  const {
    repondre: _0x130e48,
    arg: _0x4d626d,
    ms: _0x3580c8
  } = _0x4c2273;
  try {
    if (!_0x4d626d || _0x4d626d.length === 0) {
      return _0x130e48("Enter the name of the country you want to know it's time and date");
    }
    const _0x20c148 = _0x4d626d.join(" ");
    const _0x96f6cc = await fetch("https://levanter.onrender.com/time?code=" + _0x20c148);
    const _0x14bfa4 = await _0x96f6cc.json();
    const _0x4d2e2e = _0x14bfa4.result[0].name;
    const _0x5e80fb = _0x14bfa4.result[0].time;
    const _0x596475 = _0x14bfa4.result[0].timeZone;
    await _0x130e48("Live Time in *" + _0x4d2e2e + "* Stats:\n\n*Date & Time:* " + _0x5e80fb + "\n *TimeZone:* " + _0x596475 + "\n\n> *POWERED BY FLASH-MD*");
  } catch (_0x17fa79) {
    _0x130e48("That country name is incorrect!");
  }
});
zokou({
  'nomCom': "lines",
  'reaction': '🫵',
  'categorie': "FUN"
}, async (_0x96fecf, _0x4960ba, _0x392b0f) => {
  const {
    repondre: _0x2846aa,
    arg: _0xcf7a06,
    ms: _0x557cbd
  } = _0x392b0f;
  const _0x3dfb6f = await fetch("https://api.maher-zubair.tech/misc/lines");
  const _0xb224c6 = await _0x3dfb6f.json();
  await _0x2846aa(_0xb224c6.result);
  console.log(_0xb224c6.completion);
});
zokou({
  'nomCom': "insult",
  'reaction': '💀',
  'categorie': "FUN"
}, async (_0x394f02, _0x19eae6, _0x365b73) => {
  const {
    repondre: _0x2a3e3c,
    arg: _0x4ab6c8,
    ms: _0x3d9be3
  } = _0x365b73;
  const _0xf81dde = await fetch("https://api.maher-zubair.tech/misc/insult");
  const _0x4b4a42 = await _0xf81dde.json();
  await _0x2a3e3c(_0x4b4a42.result);
  console.log(_0x4b4a42.completion);
});
zokou({
  'nomCom': "enhance",
  'reaction': '💥',
  'categorie': "USER"
}, async (_0x3d3af2, _0x40bc95, _0x1e4a01) => {
  const {
    repondre: _0x4d9319,
    arg: _0x12ea24,
    ms: _0x472b0d
  } = _0x1e4a01;
  try {
    if (!_0x12ea24 || _0x12ea24.length === 0) {
      return _0x4d9319("Please enter the Url of the image you want to enhance!");
    }
    const _0xe7a931 = _0x12ea24.join(" ");
    const _0x21f2d5 = "https://api.maher-zubair.tech/maker/enhance?url=" + _0xe7a931;
    _0x40bc95.sendMessage(_0x3d3af2, {
      'image': {
        'url': _0x21f2d5
      },
      'caption': "*Enhanced by Maserati*"
    }, {
      'quoted': _0x472b0d
    });
  } catch (_0x49b8dc) {
    console.error("Erreur:", _0x49b8dc.message || "Une erreur s'est produite");
    _0x4d9319("Oops, an error occurred while processing your request");
  }
});
zokou ({
  'nomCom': "dare",
  'reaction': '😁',
  'categorie': "FUN"
}, async (_0x50a2f3, _0x22193f, _0x37bde5) => {
  const {
    repondre: _0x1358da,
    arg: _0x1891cd,
    ms: _0x32f549
  } = _0x37bde5;
  const _0x1b2d46 = await fetch("https://shizoapi.onrender.com/api/texts/dare?apikey=shizo");
  const _0x3b4ebd = await _0x1b2d46.json();
  await _0x1358da(_0x3b4ebd.result);
  console.log(_0x3b4ebd.completion);
});
zokou ({
  'nomCom': "truth",
  'reaction': '🤩',
  'categorie': "FUN"
}, async (_0x521638, _0x341a5b, _0x16f927) => {
  const {
    repondre: _0x2ddf56,
    arg: _0x75e68e,
    ms: _0x3342bc
  } = _0x16f927;
  const _0x3defbb = await fetch("https://shizoapi.onrender.com/api/texts/truth?apikey=shizo");
  const _0x435094 = await _0x3defbb.json();
  await _0x2ddf56(_0x435094.result);
  console.log(_0x435094.completion);
});
