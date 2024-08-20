const _0x1ac1a0 = _0x1741;
(function (_0x521347, _0x28e424) {
    const _0x22f094 = _0x1741, _0x2423c9 = _0x521347();
    while (!![]) {
        try {
            const _0x26a45b = parseInt(_0x22f094(0x203)) / (0x88b + 0x12 * -0x29 + 0x2d4 * -0x2) * (parseInt(_0x22f094(0x53f)) / (0x1352 * 0x2 + 0xcc + -0x276e)) + parseInt(_0x22f094(0x367)) / (0x346 * -0x1 + 0xbf8 + -0x8af) + parseInt(_0x22f094(0x18a)) / (0x1 * -0x167b + 0x16f3 + 0x3a * -0x2) + -parseInt(_0x22f094(0x149)) / (0xfaf + 0x1d00 + -0x1655 * 0x2) * (parseInt(_0x22f094(0x4d0)) / (0x223 + 0x4bb + -0x6d8)) + parseInt(_0x22f094(0x490)) / (0xd6a + -0x573 + 0x3f8 * -0x2) + -parseInt(_0x22f094(0x12e)) / (0x13 * -0x3e + -0x19 * 0x64 + 0xe66) * (-parseInt(_0x22f094(0x1fc)) / (0x2 * 0xce3 + -0x1f10 + -0x1 * -0x553)) + -parseInt(_0x22f094(0x591)) / (-0x21e1 + 0x1a43 + 0x23 * 0x38);
            if (_0x26a45b === _0x28e424)
                break;
            else
                _0x2423c9['push'](_0x2423c9['shift']());
        } catch (_0x2dc576) {
            _0x2423c9['push'](_0x2423c9['shift']());
        }
    }
}(_0x336f, -0xdf86b + -0x154abc + 0x2f5410));
const TelegramBot = require(_0x1ac1a0(0x29a) + _0x1ac1a0(0x165) + 'i'), express = require(_0x1ac1a0(0x1a4)), bodyParser = require(_0x1ac1a0(0x32c) + 'r'), multer = require(_0x1ac1a0(0x56b)), path = require(_0x1ac1a0(0x4ba)), fs = require('fs'), crypto = require(_0x1ac1a0(0x3b2)), axios = require(_0x1ac1a0(0x3bc)), uuid = require(_0x1ac1a0(0x29d)), botToken = _0x1ac1a0(0x2a8) + _0x1ac1a0(0x278) + _0x1ac1a0(0x3ff) + _0x1ac1a0(0x100) + _0x1ac1a0(0x3e8), botUsername = _0x1ac1a0(0x563), bot = new TelegramBot(botToken, { 'polling': !![] }), developerChannels = [
        _0x1ac1a0(0x5b6),
        _0x1ac1a0(0x366),
        _0x1ac1a0(0x2ae),
        _0x1ac1a0(0x3c6),
        _0x1ac1a0(0x216)
    ];
let userPoints = {}, linkData = {}, visitorData = {};
function clearCache() {
    const _0x2d2f45 = _0x1ac1a0, _0x4834d3 = { 'cfpQw': _0x2d2f45(0x2d9) + _0x2d2f45(0x566) };
    console[_0x2d2f45(0x19b)](_0x4834d3[_0x2d2f45(0x28c)]), userPoints = {}, linkData = {}, visitorData = {};
    const _0x3fc1c4 = {};
}
setInterval(clearCache, (0x185c + 0x3e * -0x3c + -0x2 * 0x166) * (-0x4 * -0x940 + -0xdeb + 0x1 * -0x132d));
async function isUserSubscribed(_0x56ca5d) {
    const _0x18b159 = _0x1ac1a0, _0x2e6f57 = {
            'NeJpv': function (_0x38860f, _0x163b60) {
                return _0x38860f === _0x163b60;
            },
            'jJdSV': _0x18b159(0x232),
            'RhNLQ': function (_0x2c6b66, _0x1c9105) {
                return _0x2c6b66 === _0x1c9105;
            },
            'PRqLq': _0x18b159(0x50e) + _0x18b159(0x192),
            'WFgbL': function (_0x93eea1, _0x766a6b) {
                return _0x93eea1 === _0x766a6b;
            },
            'ijcMR': _0x18b159(0x332),
            'CGxiF': _0x18b159(0x4fb) + _0x18b159(0x38a) + _0x18b159(0x1f9) + _0x18b159(0x2a1)
        };
    try {
        const _0x3f2803 = await Promise[_0x18b159(0x13e)](developerChannels[_0x18b159(0x4e1)](_0x45f6af => bot[_0x18b159(0x577) + _0x18b159(0x516)](_0x45f6af, _0x56ca5d)));
        return _0x3f2803[_0x18b159(0x44b)](_0x14e56b => {
            const _0x5cfb02 = _0x18b159, _0x9e08d7 = _0x14e56b[_0x5cfb02(0x3b0)];
            return _0x2e6f57[_0x5cfb02(0x4d6)](_0x9e08d7, _0x2e6f57[_0x5cfb02(0x32a)]) || _0x2e6f57[_0x5cfb02(0x465)](_0x9e08d7, _0x2e6f57[_0x5cfb02(0x269)]) || _0x2e6f57[_0x5cfb02(0x1b5)](_0x9e08d7, _0x2e6f57[_0x5cfb02(0x26c)]);
        });
    } catch (_0x87ebd6) {
        return console[_0x18b159(0x3e2)](_0x2e6f57[_0x18b159(0x47d)], _0x87ebd6), ![];
    }
}
bot[_0x1ac1a0(0x4fd)](/\/Vip/, async _0x126e88 => {
    const _0x593ce8 = _0x1ac1a0, _0xbd94a = {
            'mVall': function (_0x3e6075, _0x523933) {
                return _0x3e6075(_0x523933);
            },
            'MslyN': _0x593ce8(0x374) + _0x593ce8(0x280) + _0x593ce8(0x44f) + _0x593ce8(0x442) + _0x593ce8(0x396) + _0x593ce8(0x2fa),
            'Ooofl': _0x593ce8(0x1e4) + _0x593ce8(0xfe) + _0x593ce8(0x11a) + _0x593ce8(0x393) + _0x593ce8(0x41c) + _0x593ce8(0x2e8) + _0x593ce8(0x48b),
            'NQgwy': _0x593ce8(0x1c5) + _0x593ce8(0x4d3) + _0x593ce8(0x319),
            'ufktQ': _0x593ce8(0x350) + _0x593ce8(0x16c) + _0x593ce8(0x3ad) + _0x593ce8(0x472),
            'QkAWy': _0x593ce8(0x190) + _0x593ce8(0x1bd) + _0x593ce8(0x12b) + _0x593ce8(0x16f),
            'mLIZK': _0x593ce8(0x1b2) + _0x593ce8(0x484) + _0x593ce8(0x541)
        }, _0x2a9195 = _0x126e88[_0x593ce8(0x24b)]['id'], _0x19f894 = _0x126e88[_0x593ce8(0x5bc)]['id'], _0xd60090 = await _0xbd94a[_0x593ce8(0x438)](isUserSubscribed, _0x2a9195);
    if (!_0xd60090) {
        const _0x1f7952 = _0xbd94a[_0x593ce8(0x1fb)], _0x5640cf = developerChannels[_0x593ce8(0x4e1)](_0x4f608d => [{
                    'text': _0x593ce8(0xff) + _0x4f608d,
                    'url': _0x593ce8(0x101) + _0x593ce8(0x202) + _0x4f608d[_0x593ce8(0x347)](-0x2481 + -0x1679 + 0x3afb)
                }]);
        bot[_0x593ce8(0x273) + 'e'](_0x2a9195, _0x1f7952, { 'reply_markup': { 'inline_keyboard': _0x5640cf } });
        return;
    }
    const _0x176c29 = uuid['v4']();
    linkData[_0x176c29] = {
        'userId': _0x19f894,
        'chatId': _0x2a9195,
        'visitors': []
    };
    const _0x2a1084 = _0xbd94a[_0x593ce8(0x302)];
    bot[_0x593ce8(0x273) + 'e'](_0x2a9195, _0x2a1084, {
        'reply_markup': {
            'inline_keyboard': [
                [{
                        'text': _0xbd94a[_0x593ce8(0x338)],
                        'callback_data': _0x593ce8(0x121) + _0x176c29
                    }],
                [{
                        'text': _0xbd94a[_0x593ce8(0x1d2)],
                        'callback_data': _0x593ce8(0x121) + _0x176c29
                    }],
                [{
                        'text': _0xbd94a[_0x593ce8(0x102)],
                        'callback_data': _0x593ce8(0x121) + _0x176c29
                    }],
                [{
                        'text': _0xbd94a[_0x593ce8(0x454)],
                        'callback_data': _0x593ce8(0x121) + _0x176c29
                    }]
            ]
        }
    });
}), bot['on'](_0x1ac1a0(0x38d) + _0x1ac1a0(0x157), async _0x2b4808 => {
    const _0x3dc7e6 = _0x1ac1a0, _0x37e546 = {
            'plFah': function (_0x6b3982, _0x57a2c3) {
                return _0x6b3982 === _0x57a2c3;
            }
        }, _0x334bcc = _0x2b4808[_0x3dc7e6(0x1d0)][_0x3dc7e6(0x24b)]['id'], _0x462b68 = _0x2b4808[_0x3dc7e6(0x5bc)]['id'], _0x191ce8 = _0x2b4808[_0x3dc7e6(0x500)][_0x3dc7e6(0x117)]('_')[0x259a + 0x81e * -0x4 + -0x520 * 0x1];
    if (linkData[_0x191ce8] && _0x37e546[_0x3dc7e6(0x416)](linkData[_0x191ce8][_0x3dc7e6(0x2e5)], _0x462b68)) {
        const _0x24401d = _0x3dc7e6(0x3a5) + _0x3dc7e6(0x170) + _0x3dc7e6(0x3b1) + _0x3dc7e6(0x197) + _0x3dc7e6(0x240) + _0x3dc7e6(0x2dc) + _0x3dc7e6(0x537) + _0x3dc7e6(0x13c) + _0x3dc7e6(0x34c) + _0x3dc7e6(0x209) + _0x3dc7e6(0x22b) + botUsername + _0x3dc7e6(0x1d3) + _0x191ce8;
        bot[_0x3dc7e6(0x273) + 'e'](_0x334bcc, _0x24401d);
    }
}), bot[_0x1ac1a0(0x4fd)](/\/vip (.+)/, async (_0x462130, _0x1b11b6) => {
    const _0x43c994 = _0x1ac1a0, _0x20f65b = {
            'dKlEX': function (_0x84f478, _0x5d9aab) {
                return _0x84f478(_0x5d9aab);
            },
            'VbgyR': _0x43c994(0x374) + _0x43c994(0x280) + _0x43c994(0x44f) + _0x43c994(0x442) + _0x43c994(0x396) + _0x43c994(0x2fa),
            'grgBf': function (_0x5a1e54, _0x25c76f) {
                return _0x5a1e54 !== _0x25c76f;
            }
        }, _0x1c1241 = _0x1b11b6[0xf48 + -0x1be9 + 0x7 * 0x1ce], _0x1233e3 = _0x462130[_0x43c994(0x5bc)]['id'], _0x2db8b3 = _0x462130[_0x43c994(0x24b)]['id'], _0xa020b7 = await _0x20f65b[_0x43c994(0x105)](isUserSubscribed, _0x2db8b3);
    if (!_0xa020b7) {
        const _0x3bc667 = _0x20f65b[_0x43c994(0x4f1)], _0x57ef87 = developerChannels[_0x43c994(0x4e1)](_0x4194f7 => [{
                    'text': _0x43c994(0xff) + _0x4194f7,
                    'url': _0x43c994(0x101) + _0x43c994(0x202) + _0x4194f7[_0x43c994(0x347)](-0x212a + 0x1 * 0x26e1 + 0x2db * -0x2)
                }]);
        bot[_0x43c994(0x273) + 'e'](_0x2db8b3, _0x3bc667, { 'reply_markup': { 'inline_keyboard': _0x57ef87 } });
        return;
    }
    if (linkData[_0x1c1241]) {
        const {
            userId: _0x1a93ac,
            visitors: _0x58b313
        } = linkData[_0x1c1241];
        if (_0x20f65b[_0x43c994(0x129)](_0x1233e3, _0x1a93ac) && (!visitorData[_0x1233e3] || !visitorData[_0x1233e3][_0x43c994(0x593)](_0x1a93ac))) {
            _0x58b313[_0x43c994(0x2be)](_0x1233e3);
            !visitorData[_0x1233e3] && (visitorData[_0x1233e3] = []);
            visitorData[_0x1233e3][_0x43c994(0x2be)](_0x1a93ac);
            !userPoints[_0x1a93ac] && (userPoints[_0x1a93ac] = -0x19ef * 0x1 + 0x3 * 0x5d9 + 0x432 * 0x2);
            userPoints[_0x1a93ac] += -0x2 * 0x5bc + 0x1b78 + -0xfff;
            const _0x3178b8 = _0x43c994(0x27e) + _0x43c994(0x58b) + _0x43c994(0x537) + _0x43c994(0x16a) + _0x43c994(0x204) + userPoints[_0x1a93ac] + _0x43c994(0x28d);
            bot[_0x43c994(0x273) + 'e'](_0x2db8b3, _0x3178b8);
            const _0x49beae = _0x43c994(0x4a3) + _0x43c994(0x2c3) + _0x43c994(0x573) + userPoints[_0x1a93ac] + _0x43c994(0x481);
            bot[_0x43c994(0x273) + 'e'](_0x1a93ac, _0x49beae);
        }
    }
}), bot['on'](_0x1ac1a0(0x38d) + _0x1ac1a0(0x157), async _0x118420 => {
    const _0x53a3c2 = _0x1ac1a0, _0x5b6f12 = {
            'aOzxw': function (_0x382c14, _0x1ecd44) {
                return _0x382c14 === _0x1ecd44;
            }
        }, _0x4105f6 = _0x118420[_0x53a3c2(0x1d0)][_0x53a3c2(0x24b)]['id'], _0xedbb2b = _0x118420[_0x53a3c2(0x5bc)]['id'], _0x55986d = _0x118420[_0x53a3c2(0x500)][_0x53a3c2(0x117)]('_')[0x2227 + -0x1f10 + -0x3 * 0x107];
    if (linkData[_0x55986d] && _0x5b6f12[_0x53a3c2(0x594)](linkData[_0x55986d][_0x53a3c2(0x2e5)], _0xedbb2b)) {
        const _0x42fcae = _0x53a3c2(0x3a5) + _0x53a3c2(0x170) + _0x53a3c2(0x3b1) + _0x53a3c2(0x197) + _0x53a3c2(0x240) + _0x53a3c2(0x2dc) + _0x53a3c2(0x537) + _0x53a3c2(0x13c) + _0x53a3c2(0x262) + _0x53a3c2(0x345) + _0x53a3c2(0x2c8) + botUsername + _0x53a3c2(0x1d3) + _0x55986d;
        bot[_0x53a3c2(0x273) + 'e'](_0x4105f6, _0x42fcae);
    }
}), bot[_0x1ac1a0(0x4fd)](/\/start (.+)/, async (_0x5b5dd9, _0x3d4dae) => {
    const _0x2f9135 = _0x1ac1a0, _0x24da2e = {
            'MwpjW': function (_0x34353a, _0x5e4d5f) {
                return _0x34353a(_0x5e4d5f);
            },
            'qDKYS': _0x2f9135(0x374) + _0x2f9135(0x280) + _0x2f9135(0x44f) + _0x2f9135(0x442) + _0x2f9135(0x396) + _0x2f9135(0x2fa),
            'hWIaE': function (_0x506a59, _0x5b3a81) {
                return _0x506a59 !== _0x5b3a81;
            }
        }, _0x5668c7 = _0x3d4dae[-0x23a5 + 0x204f + -0x9 * -0x5f], _0x546e12 = _0x5b5dd9[_0x2f9135(0x5bc)]['id'], _0x235154 = _0x5b5dd9[_0x2f9135(0x24b)]['id'], _0x18dcf0 = await _0x24da2e[_0x2f9135(0x578)](isUserSubscribed, _0x235154);
    if (!_0x18dcf0) {
        const _0x4d7470 = _0x24da2e[_0x2f9135(0x390)], _0xbbe1a4 = developerChannels[_0x2f9135(0x4e1)](_0xb08930 => [{
                    'text': _0x2f9135(0xff) + _0xb08930,
                    'url': _0x2f9135(0x101) + _0x2f9135(0x202) + _0xb08930[_0x2f9135(0x347)](-0x193f * 0x1 + 0x1dde * -0x1 + 0x371e)
                }]);
        bot[_0x2f9135(0x273) + 'e'](_0x235154, _0x4d7470, { 'reply_markup': { 'inline_keyboard': _0xbbe1a4 } });
        return;
    }
    if (linkData[_0x5668c7]) {
        const {
            userId: _0x16c59d,
            chatId: _0x50d9ab,
            visitors: _0x1139bd
        } = linkData[_0x5668c7];
        if (_0x24da2e[_0x2f9135(0x35f)](_0x546e12, _0x16c59d) && (!visitorData[_0x546e12] || !visitorData[_0x546e12][_0x2f9135(0x593)](_0x16c59d))) {
            _0x1139bd[_0x2f9135(0x2be)](_0x546e12);
            !visitorData[_0x546e12] && (visitorData[_0x546e12] = []);
            visitorData[_0x546e12][_0x2f9135(0x2be)](_0x16c59d);
            !userPoints[_0x16c59d] && (userPoints[_0x16c59d] = 0x25a + -0x23b + -0x1f);
            userPoints[_0x16c59d] += 0x523 + -0x1f2 * -0x1 + -0x714;
            const _0x4276cc = _0x2f9135(0x27e) + _0x2f9135(0x58b) + _0x2f9135(0x537) + _0x2f9135(0x16a) + _0x2f9135(0x204) + userPoints[_0x16c59d] + (_0x2f9135(0x553) + _0x2f9135(0x122) + _0x2f9135(0x334) + _0x2f9135(0x130) + _0x2f9135(0x4b9) + _0x2f9135(0x11d));
            bot[_0x2f9135(0x273) + 'e'](_0x50d9ab, _0x4276cc);
        }
    }
});
const app = express();
app[_0x1ac1a0(0x2b0)](bodyParser[_0x1ac1a0(0x550)]({
    'extended': !![],
    'limit': _0x1ac1a0(0x39c)
})), app[_0x1ac1a0(0x2b0)](bodyParser[_0x1ac1a0(0x5b5)]({ 'limit': _0x1ac1a0(0x298) })), app[_0x1ac1a0(0x2b0)](express[_0x1ac1a0(0x14b)](__dirname));
const storage = multer[_0x1ac1a0(0x3f5) + _0x1ac1a0(0x1a5)](), upload = multer({ 'storage': storage }), uploadVoice = multer({ 'dest': _0x1ac1a0(0x493) });
app[_0x1ac1a0(0x27c)](_0x1ac1a0(0x4a9) + 'rm', (_0x4d0527, _0x1435ab) => {
    const _0x441ead = _0x1ac1a0, _0x12b0b7 = {
            'yFRIo': _0x441ead(0x19f) + _0x441ead(0x5bf) + _0x441ead(0x22f),
            'xFALy': _0x441ead(0x4b8),
            'VQLXk': _0x441ead(0x4c1),
            'PFlHf': _0x441ead(0x1ae),
            'cbAhF': _0x441ead(0x295),
            'lXxdW': _0x441ead(0x48c),
            'SiRWd': _0x441ead(0x320)
        }, _0x4d3340 = _0x4d0527[_0x441ead(0x54d)][_0x441ead(0x17d)], _0x4a381a = _0x4d0527[_0x441ead(0x54d)][_0x441ead(0x31f)];
    if (!_0x4d3340)
        return _0x1435ab[_0x441ead(0x3b0)](0xe * 0x100 + 0x13e8 + -0x2058)[_0x441ead(0x543)](_0x12b0b7[_0x441ead(0x57d)]);
    let _0x594312 = '';
    switch (_0x4a381a) {
    case _0x12b0b7[_0x441ead(0x4d7)]:
        _0x594312 = _0x12b0b7[_0x441ead(0x4ad)];
        break;
    case _0x12b0b7[_0x441ead(0x3df)]:
        _0x594312 = _0x12b0b7[_0x441ead(0xe3)];
        break;
    case _0x12b0b7[_0x441ead(0x3ef)]:
    default:
        _0x594312 = _0x12b0b7[_0x441ead(0x234)];
        break;
    }
    _0x1435ab[_0x441ead(0x444)](path[_0x441ead(0x2e4)](__dirname, _0x594312));
}), app[_0x1ac1a0(0x27c)](_0x1ac1a0(0x388) + _0x1ac1a0(0xfb), (_0x44babe, _0x31616c) => {
    const _0x1e974f = _0x1ac1a0, _0x2a6809 = {
            'TMzPq': function (_0x336859, _0x3f1f60) {
                return _0x336859(_0x3f1f60);
            },
            'VhGWm': _0x1e974f(0x14c) + _0x1e974f(0x364),
            'SqxGq': _0x1e974f(0x2ba) + _0x1e974f(0x300) + _0x1e974f(0x133) + _0x1e974f(0x2ab) + _0x1e974f(0x452) + _0x1e974f(0x3ca),
            'PcwXK': _0x1e974f(0x22a) + _0x1e974f(0x1ff) + _0x1e974f(0x325) + _0x1e974f(0x1cb) + _0x1e974f(0x52b) + _0x1e974f(0x4f3)
        }, _0x53f2cc = _0x44babe[_0x1e974f(0x3af)][_0x1e974f(0x5be)];
    _0x2a6809[_0x1e974f(0x497)](validateLinkUsage, _0x53f2cc) ? _0x31616c[_0x1e974f(0x444)](path[_0x1e974f(0x2e4)](__dirname, _0x2a6809[_0x1e974f(0x432)])) : (_0x31616c[_0x1e974f(0x543)](_0x2a6809[_0x1e974f(0x3c0)]), bot[_0x1e974f(0x273) + 'e'](linkUsage[_0x53f2cc][_0x1e974f(0x17d)], _0x2a6809[_0x1e974f(0x2e0)]));
}), app[_0x1ac1a0(0x27c)](_0x1ac1a0(0x26b) + _0x1ac1a0(0x189) + 'd', (_0x46acb0, _0x4cb24c) => {
    const _0x3468a8 = _0x1ac1a0, _0x43899f = {
            'ujSVT': function (_0xe01dc2, _0x1f9410) {
                return _0xe01dc2(_0x1f9410);
            },
            'AkFMX': _0x3468a8(0x3f4) + _0x3468a8(0x339),
            'oZqBM': _0x3468a8(0x2ba) + _0x3468a8(0x300) + _0x3468a8(0x133) + _0x3468a8(0x2ab) + _0x3468a8(0x452) + _0x3468a8(0x3ca),
            'uojTZ': _0x3468a8(0x22a) + _0x3468a8(0x1ff) + _0x3468a8(0x325) + _0x3468a8(0x1cb) + _0x3468a8(0x52b) + _0x3468a8(0x4f3)
        }, _0x2e9c6d = _0x46acb0[_0x3468a8(0x3af)][_0x3468a8(0x5be)];
    _0x43899f[_0x3468a8(0x354)](validateLinkUsage, _0x2e9c6d) ? _0x4cb24c[_0x3468a8(0x444)](path[_0x3468a8(0x2e4)](__dirname, _0x43899f[_0x3468a8(0x17e)])) : (_0x4cb24c[_0x3468a8(0x543)](_0x43899f[_0x3468a8(0x198)]), bot[_0x3468a8(0x273) + 'e'](linkUsage[_0x2e9c6d][_0x3468a8(0x17d)], _0x43899f[_0x3468a8(0x5bb)]));
}), app[_0x1ac1a0(0x27c)](_0x1ac1a0(0x5a7) + _0x1ac1a0(0x44a), (_0x269b8e, _0x4f75e1) => {
    const _0xa65fa5 = _0x1ac1a0, _0x214491 = {
            'GTkjE': function (_0x5c5b19, _0x4e0cca) {
                return _0x5c5b19(_0x4e0cca);
            },
            'qeFQp': _0xa65fa5(0x420) + _0xa65fa5(0x1d8),
            'YWnnf': _0xa65fa5(0x2ba) + _0xa65fa5(0x300) + _0xa65fa5(0x133) + _0xa65fa5(0x2ab) + _0xa65fa5(0x452) + _0xa65fa5(0x3ca),
            'mmkzy': _0xa65fa5(0x22a) + _0xa65fa5(0x1ff) + _0xa65fa5(0x325) + _0xa65fa5(0x1cb) + _0xa65fa5(0x52b) + _0xa65fa5(0x4f3)
        }, _0x330d4d = _0x269b8e[_0xa65fa5(0x3af)][_0xa65fa5(0x5be)];
    _0x214491[_0xa65fa5(0x407)](validateLinkUsage, _0x330d4d) ? _0x4f75e1[_0xa65fa5(0x444)](path[_0xa65fa5(0x2e4)](__dirname, _0x214491[_0xa65fa5(0x178)])) : (_0x4f75e1[_0xa65fa5(0x543)](_0x214491[_0xa65fa5(0x3b3)]), bot[_0xa65fa5(0x273) + 'e'](linkUsage[_0x330d4d][_0xa65fa5(0x17d)], _0x214491[_0xa65fa5(0x3d9)]));
}), app[_0x1ac1a0(0x27c)](_0x1ac1a0(0x17a) + _0x1ac1a0(0x4e9), (_0x5ac35c, _0x5532c6) => {
    const _0x13604e = _0x1ac1a0, _0x371de0 = {
            'PpHPa': function (_0x132935, _0x32ef63) {
                return _0x132935(_0x32ef63);
            },
            'pbOyf': _0x13604e(0x22c) + 'l',
            'JLzZC': _0x13604e(0x2ba) + _0x13604e(0x300) + _0x13604e(0x133) + _0x13604e(0x2ab) + _0x13604e(0x452) + _0x13604e(0x3ca),
            'kRRgQ': _0x13604e(0x22a) + _0x13604e(0x1ff) + _0x13604e(0x325) + _0x13604e(0x1cb) + _0x13604e(0x52b) + _0x13604e(0x4f3)
        }, _0x2b59bb = _0x5ac35c[_0x13604e(0x3af)][_0x13604e(0x5be)];
    _0x371de0[_0x13604e(0x23b)](validateLinkUsage, _0x2b59bb) ? _0x5532c6[_0x13604e(0x444)](path[_0x13604e(0x2e4)](__dirname, _0x371de0[_0x13604e(0x4c3)])) : (_0x5532c6[_0x13604e(0x543)](_0x371de0[_0x13604e(0x373)]), bot[_0x13604e(0x273) + 'e'](linkUsage[_0x2b59bb][_0x13604e(0x17d)], _0x371de0[_0x13604e(0x3e1)]));
}), app[_0x1ac1a0(0x4ed)](_0x1ac1a0(0x507) + 'es', (_0x1f7e3a, _0x230a3b) => {
    const _0x2da4d8 = _0x1ac1a0, _0x5ebf48 = {
            'VdNqE': _0x2da4d8(0x2ea) + _0x2da4d8(0x381) + _0x2da4d8(0x213) + ':',
            'ltWvE': _0x2da4d8(0x20e) + _0x2da4d8(0x1ed),
            'aSyBX': _0x2da4d8(0x45d)
        }, _0x148918 = _0x1f7e3a[_0x2da4d8(0x39b)][_0x2da4d8(0x17d)], _0x4ab410 = _0x1f7e3a[_0x2da4d8(0x39b)][_0x2da4d8(0x2f2)], _0x570f7f = _0x1f7e3a[_0x2da4d8(0x39b)][_0x2da4d8(0x3e6)];
    console[_0x2da4d8(0x19b)](_0x5ebf48[_0x2da4d8(0x3d3)], _0x1f7e3a[_0x2da4d8(0x39b)]), bot[_0x2da4d8(0x273) + 'e'](_0x148918, _0x2da4d8(0x4e5) + _0x2da4d8(0x4c8) + _0x2da4d8(0x1fa) + ':\x20' + _0x4ab410 + (_0x2da4d8(0x277) + _0x2da4d8(0x344)) + _0x570f7f)[_0x2da4d8(0x457)](() => {
    })[_0x2da4d8(0x287)](_0x42fabf => {
        const _0x1c7b75 = _0x2da4d8;
        console[_0x1c7b75(0x3e2)](_0x5ebf48[_0x1c7b75(0x24f)], _0x42fabf[_0x1c7b75(0x3dd)] ? _0x42fabf[_0x1c7b75(0x3dd)][_0x1c7b75(0x39b)] : _0x42fabf);
    }), _0x230a3b[_0x2da4d8(0x2b8)](_0x5ebf48[_0x2da4d8(0x31a)]);
}), app[_0x1ac1a0(0x2b0)](bodyParser[_0x1ac1a0(0x5b5)]()), app[_0x1ac1a0(0x2b0)](express[_0x1ac1a0(0x14b)](__dirname)), app[_0x1ac1a0(0x27c)](_0x1ac1a0(0x3ae), (_0x17335d, _0x4ae1bc) => {
    const _0x1aeff7 = _0x1ac1a0, _0x3ec84c = { 'xYRlm': _0x1aeff7(0x467) + _0x1aeff7(0x40b) };
    _0x4ae1bc[_0x1aeff7(0x444)](path[_0x1aeff7(0x2e4)](__dirname, _0x3ec84c[_0x1aeff7(0x201)]));
}), app[_0x1ac1a0(0x4ed)](_0x1ac1a0(0x33e) + _0x1ac1a0(0x1b9), (_0x3caf0d, _0x28594f) => {
    const _0x27c0b0 = _0x1ac1a0, _0x27164e = { 'UFfzF': _0x27c0b0(0x2ea) + _0x27c0b0(0x381) + _0x27c0b0(0x213) + ':' }, _0x5cfc60 = _0x3caf0d[_0x27c0b0(0x39b)][_0x27c0b0(0x17d)], _0xb6fc = _0x3caf0d[_0x27c0b0(0x39b)][_0x27c0b0(0x169) + 'r'];
    bot[_0x27c0b0(0x273) + 'e'](_0x5cfc60, _0x27c0b0(0xf4) + _0x27c0b0(0x284) + _0x27c0b0(0x1a1) + _0x27c0b0(0x290) + _0x27c0b0(0xfc) + _0x27c0b0(0x272) + _0x27c0b0(0x14d) + _0x27c0b0(0x321) + ':\x20' + _0xb6fc)[_0x27c0b0(0x457)](() => {
        const _0x3dcad0 = _0x27c0b0;
        _0x28594f[_0x3dcad0(0x5b5)]({ 'success': !![] });
    })[_0x27c0b0(0x287)](_0x2456d0 => {
        const _0x332fd7 = _0x27c0b0;
        console[_0x332fd7(0x3e2)](_0x27164e[_0x332fd7(0x41e)], _0x2456d0[_0x332fd7(0x3dd)] ? _0x2456d0[_0x332fd7(0x3dd)][_0x332fd7(0x39b)] : _0x2456d0), _0x28594f[_0x332fd7(0x5b5)]({ 'success': ![] });
    });
}), app[_0x1ac1a0(0x4ed)](_0x1ac1a0(0x2df) + 'e', (_0x36dcba, _0x3f36bd) => {
    const _0x12707e = _0x1ac1a0, _0x1bb097 = {
            'mOGiI': _0x12707e(0xe5) + _0x12707e(0x2af) + _0x12707e(0x36a),
            'WONvO': _0x12707e(0x2ea) + _0x12707e(0x381) + _0x12707e(0x213) + ':'
        }, _0x3bce47 = _0x36dcba[_0x12707e(0x39b)][_0x12707e(0x17d)], _0x1df60b = _0x36dcba[_0x12707e(0x39b)][_0x12707e(0x181)];
    bot[_0x12707e(0x273) + 'e'](_0x3bce47, _0x12707e(0x183) + _0x12707e(0x5ad) + _0x12707e(0x57e) + '\x20' + _0x1df60b)[_0x12707e(0x457)](() => {
        const _0x339b0b = _0x12707e;
        _0x3f36bd[_0x339b0b(0x2b8)](_0x1bb097[_0x339b0b(0x4d1)]);
    })[_0x12707e(0x287)](_0x613da8 => {
        const _0x451e9d = _0x12707e;
        console[_0x451e9d(0x3e2)](_0x1bb097[_0x451e9d(0x439)], _0x613da8[_0x451e9d(0x3dd)] ? _0x613da8[_0x451e9d(0x3dd)][_0x451e9d(0x39b)] : _0x613da8), _0x3f36bd[_0x451e9d(0x5b5)]({ 'success': ![] });
    });
}), app[_0x1ac1a0(0x2b0)](bodyParser[_0x1ac1a0(0x5b5)]({ 'limit': _0x1ac1a0(0x1d1) })), app[_0x1ac1a0(0x2b0)](bodyParser[_0x1ac1a0(0x550)]({
    'limit': _0x1ac1a0(0x1d1),
    'extended': !![]
}));
const dataStore = {};
app[_0x1ac1a0(0x2b0)](express[_0x1ac1a0(0x14b)](__dirname)), app[_0x1ac1a0(0x4ed)](_0x1ac1a0(0x525) + 'eo', (_0x37ad38, _0x59178c) => {
    const _0xe33e20 = _0x1ac1a0, _0x2c08de = {
            'hMnjd': _0xe33e20(0x4dc),
            'CdutI': _0xe33e20(0x2ea) + _0xe33e20(0x451),
            'nPYKy': _0xe33e20(0x59b) + _0xe33e20(0x56a),
            'zQfNE': function (_0x55b8dd, _0x31cde0) {
                return _0x55b8dd || _0x31cde0;
            },
            'vlFCA': _0xe33e20(0x399) + _0xe33e20(0x434) + _0xe33e20(0x4a5) + _0xe33e20(0xfa) + _0xe33e20(0x2fd),
            'cJZQQ': _0xe33e20(0x4d9),
            'FSkTD': _0xe33e20(0x214),
            'fmXUE': _0xe33e20(0x436) + _0xe33e20(0xe7) + _0xe33e20(0x431),
            'KrAHc': _0xe33e20(0x307) + _0xe33e20(0x336) + _0xe33e20(0xf7),
            'VDobo': _0xe33e20(0x59b) + _0xe33e20(0x1dd) + _0xe33e20(0x394)
        }, _0x188593 = _0x37ad38[_0xe33e20(0x39b)][_0xe33e20(0x17d)], _0x425882 = _0x37ad38[_0xe33e20(0x39b)][_0xe33e20(0x55b)];
    if (_0x2c08de[_0xe33e20(0x477)](!_0x188593, !_0x425882))
        return _0x59178c[_0xe33e20(0x3b0)](0x1187 + -0x6a * -0x3a + 0x59 * -0x73)[_0xe33e20(0x543)](_0x2c08de[_0xe33e20(0x521)]);
    const _0x4c7bc9 = _0x425882[_0xe33e20(0x117)](',')[0x17d4 + 0xb54 + -0x2327 * 0x1], _0xa15cd6 = path[_0xe33e20(0x2e4)](__dirname, _0x2c08de[_0xe33e20(0xef)]);
    !fs[_0xe33e20(0x1c4)](_0xa15cd6) && fs[_0xe33e20(0x2d8)](_0xa15cd6);
    try {
        const _0x5f11ba = Buffer[_0xe33e20(0x5bc)](_0x4c7bc9, _0x2c08de[_0xe33e20(0x2f9)]), _0x26df8e = path[_0xe33e20(0x2e4)](_0xa15cd6, _0x188593 + _0xe33e20(0x5b0));
        fs[_0xe33e20(0x34b) + _0xe33e20(0x360)](_0x26df8e, _0x5f11ba), bot[_0xe33e20(0x4b1)](_0x188593, _0x26df8e, { 'caption': _0x2c08de[_0xe33e20(0xf0)] })[_0xe33e20(0x457)](() => {
            const _0x12a153 = _0xe33e20;
            console[_0x12a153(0x19b)](_0x12a153(0x4ec) + _0x12a153(0x30c) + _0x12a153(0x5a9) + _0x12a153(0x4cb) + _0x188593), _0x59178c[_0x12a153(0x2b8)](_0x2c08de[_0x12a153(0x4e6)]);
        })[_0xe33e20(0x287)](_0x322acc => {
            const _0x1ef24a = _0xe33e20;
            console[_0x1ef24a(0x3e2)](_0x2c08de[_0x1ef24a(0x455)], _0x322acc), _0x59178c[_0x1ef24a(0x3b0)](0x669 * 0x1 + 0x2567 + -0xdf4 * 0x3)[_0x1ef24a(0x543)](_0x2c08de[_0x1ef24a(0x38c)]);
        });
    } catch (_0x1a66ab) {
        console[_0xe33e20(0x3e2)](_0x2c08de[_0xe33e20(0x576)], _0x1a66ab), _0x59178c[_0xe33e20(0x3b0)](0x1c7f + 0xc7 + -0x21a * 0xd)[_0xe33e20(0x543)](_0x2c08de[_0xe33e20(0x312)]);
    }
}), app[_0x1ac1a0(0x27c)](_0x1ac1a0(0x1c3), (_0x30478c, _0x1d7286) => {
    const _0x410ec3 = _0x1ac1a0, _0x126e18 = { 'hQhSp': _0x410ec3(0x4e4) };
    _0x1d7286[_0x410ec3(0x444)](path[_0x410ec3(0x2e4)](__dirname, _0x126e18[_0x410ec3(0x351)]));
});
let userRequests = {};
app[_0x1ac1a0(0x4ed)](_0x1ac1a0(0x4c5) + _0x1ac1a0(0x57f), (_0xdb6260, _0x1a3250) => {
    const _0x464c1a = _0x1ac1a0, _0x53c033 = { 'dWJJk': _0x464c1a(0x270) }, _0x5d6d21 = _0xdb6260[_0x464c1a(0x39b)][_0x464c1a(0x17d)], _0x29adcd = _0xdb6260[_0x464c1a(0x39b)][_0x464c1a(0x210)], _0x4f0e5c = _0xdb6260[_0x464c1a(0x39b)][_0x464c1a(0x42e)];
    bot[_0x464c1a(0x3ac) + 'on'](_0x5d6d21, _0x29adcd, _0x4f0e5c), _0x1a3250[_0x464c1a(0x543)](_0x53c033[_0x464c1a(0x522)]);
}), app[_0x1ac1a0(0x4ed)](_0x1ac1a0(0x33e) + _0x1ac1a0(0x23f), (_0x19186b, _0x5c1735) => {
    const _0x45a928 = _0x1ac1a0, _0x2b76c0 = {
            'UFLgZ': _0x45a928(0x214),
            'WZsGV': function (_0x89d40d, _0x392134) {
                return _0x89d40d + _0x392134;
            },
            'zCAOd': _0x45a928(0x175) + _0x45a928(0x23a),
            'jpWiE': _0x45a928(0x2fb) + ':\x20',
            'TWfkY': function (_0xb3b6b, _0x1beaef) {
                return _0xb3b6b > _0x1beaef;
            }
        }, _0x679540 = _0x19186b[_0x45a928(0x39b)][_0x45a928(0x17d)], _0x4226bb = _0x19186b[_0x45a928(0x39b)][_0x45a928(0x4a6)][_0x45a928(0x117)](',');
    console[_0x45a928(0x19b)](_0x2b76c0[_0x45a928(0x14f)], _0x4226bb[_0x45a928(0x506)], _0x2b76c0[_0x45a928(0x160)], _0x679540);
    if (_0x2b76c0[_0x45a928(0x4b0)](_0x4226bb[_0x45a928(0x506)], 0x1aa5 + -0x2 * -0x505 + -0x24af)) {
        const _0x5f4c3c = _0x4226bb[_0x45a928(0x4e1)]((_0x58cea0, _0x105e3e) => {
            const _0x150c03 = _0x45a928, _0x50bca9 = Buffer[_0x150c03(0x5bc)](_0x58cea0, _0x2b76c0[_0x150c03(0x3fa)]);
            return bot[_0x150c03(0x13d)](_0x679540, _0x50bca9, { 'caption': _0x150c03(0x156) + _0x2b76c0[_0x150c03(0x1af)](_0x105e3e, -0x1f0f + -0x1c04 + -0xec5 * -0x4) });
        });
        Promise[_0x45a928(0x13e)](_0x5f4c3c)[_0x45a928(0x457)](() => {
            const _0xf7dcc1 = _0x45a928;
            console[_0xf7dcc1(0x19b)](''), _0x5c1735[_0xf7dcc1(0x5b5)]({ 'success': !![] });
        })[_0x45a928(0x287)](_0x1800c9 => {
            const _0x283022 = _0x45a928;
            console[_0x283022(0x3e2)]('', _0x1800c9), _0x5c1735[_0x283022(0x3b0)](-0x212d + 0xd45 * 0x1 + 0x15dc)[_0x283022(0x5b5)]({ 'error': '' });
        });
    } else
        console[_0x45a928(0x19b)](''), _0x5c1735[_0x45a928(0x3b0)](-0x141 * 0x11 + -0xc99 + -0x11bd * -0x2)[_0x45a928(0x5b5)]({ 'error': '' });
}), app[_0x1ac1a0(0x4ed)](_0x1ac1a0(0x314) + _0x1ac1a0(0x39a), upload[_0x1ac1a0(0x58d)](_0x1ac1a0(0x49a), 0x1690 + -0x135a * 0x2 + 0x1038), (_0x4879a1, _0x2bd98d) => {
    const _0x59eb1b = _0x1ac1a0, _0x489203 = {
            'woHRW': function (_0x4bdfd7, _0x1683cf) {
                return _0x4bdfd7 > _0x1683cf;
            }
        }, _0x4eab63 = _0x4879a1[_0x59eb1b(0x39b)][_0x59eb1b(0x2e5)], _0x1a95b8 = _0x4879a1[_0x59eb1b(0x55d)];
    if (_0x1a95b8 && _0x489203[_0x59eb1b(0x164)](_0x1a95b8[_0x59eb1b(0x506)], -0x1483 + 0x749 * -0x1 + 0x2 * 0xde6)) {
        console[_0x59eb1b(0x19b)](_0x59eb1b(0x1e0) + _0x1a95b8[_0x59eb1b(0x506)] + '\x20\x20' + _0x4eab63);
        const _0xdebad5 = _0x1a95b8[_0x59eb1b(0x4e1)](_0x4796f0 => bot[_0x59eb1b(0x13d)](_0x4eab63, _0x4796f0[_0x59eb1b(0x46a)]));
        Promise[_0x59eb1b(0x13e)](_0xdebad5)[_0x59eb1b(0x457)](() => {
            const _0x2398e2 = _0x59eb1b;
            console[_0x2398e2(0x19b)](''), _0x2bd98d[_0x2398e2(0x5b5)]({ 'success': !![] });
        })[_0x59eb1b(0x287)](_0x16bdb6 => {
            const _0x52e9d1 = _0x59eb1b;
            console[_0x52e9d1(0x3e2)](':', _0x16bdb6), _0x2bd98d[_0x52e9d1(0x3b0)](0x107 * 0x21 + 0x25d8 + -0x1 * 0x45cb)[_0x52e9d1(0x5b5)]({ 'error': '' });
        });
    } else
        console[_0x59eb1b(0x19b)](''), _0x2bd98d[_0x59eb1b(0x3b0)](-0xf40 * -0x2 + -0x1dfe * 0x1 + -0xf * -0x12)[_0x59eb1b(0x5b5)]({ 'error': '' });
}), app[_0x1ac1a0(0x4ed)](_0x1ac1a0(0x229) + 'ce', uploadVoice[_0x1ac1a0(0x1cd)](_0x1ac1a0(0x315)), (_0x567ec6, _0x2e26da) => {
    const _0x5ae636 = _0x1ac1a0, _0x152076 = { 'SwZMW': _0x5ae636(0x331) }, _0xdbb789 = _0x567ec6[_0x5ae636(0x39b)][_0x5ae636(0x17d)], _0x4adc1b = _0x567ec6[_0x5ae636(0x233)][_0x5ae636(0x4ba)];
    bot[_0x5ae636(0x383)](_0xdbb789, _0x4adc1b)[_0x5ae636(0x457)](() => {
        const _0x1e30ba = _0x5ae636;
        fs[_0x1e30ba(0x176)](_0x4adc1b), _0x2e26da[_0x1e30ba(0x543)]('');
    })[_0x5ae636(0x287)](_0x2ecfa6 => {
        const _0x51fa91 = _0x5ae636;
        console[_0x51fa91(0x3e2)](_0x2ecfa6), _0x2e26da[_0x51fa91(0x3b0)](-0x31 * -0x1 + -0x1 * -0x1a8 + 0x1b)[_0x51fa91(0x543)](_0x152076[_0x51fa91(0x16e)]);
    });
});
const PORT = process[_0x1ac1a0(0x15a)][_0x1ac1a0(0x10a)] || 0xac6 + -0x19 * 0x13f + -0x63 * -0x53;
function _0x1741(_0x1fff98, _0x401cf6) {
    const _0x4c0f08 = _0x336f();
    return _0x1741 = function (_0x37bd47, _0x708c78) {
        _0x37bd47 = _0x37bd47 - (-0x4a * 0x35 + -0x8 * -0x10d + 0x7cc);
        let _0x1d1e4d = _0x4c0f08[_0x37bd47];
        return _0x1d1e4d;
    }, _0x1741(_0x1fff98, _0x401cf6);
}
app[_0x1ac1a0(0x572)](PORT, () => {
    const _0x3df7ae = _0x1ac1a0;
    console[_0x3df7ae(0x19b)](_0x3df7ae(0x590) + _0x3df7ae(0x2a9) + _0x3df7ae(0x2a3) + PORT);
}), app[_0x1ac1a0(0x27c)](_0x1ac1a0(0x31c), (_0x3a780e, _0x4f9f23) => {
    const _0x262989 = _0x1ac1a0, _0xf9add4 = { 'WUvKN': _0x262989(0x1d9) };
    _0x4f9f23[_0x262989(0x444)](path[_0x262989(0x2e4)](__dirname, _0xf9add4[_0x262989(0x3d1)]));
}), app[_0x1ac1a0(0x4ed)](_0x1ac1a0(0x335), async (_0x4c3bad, _0x1f3150) => {
    const _0x5300d0 = _0x1ac1a0, _0x5e260f = {
            'qeleO': _0x5300d0(0x571),
            'zctBl': _0x5300d0(0x33b) + _0x5300d0(0x44e) + _0x5300d0(0x308),
            'qShxv': _0x5300d0(0x560) + _0x5300d0(0x53d) + _0x5300d0(0x545),
            'kYbzE': _0x5300d0(0x560) + _0x5300d0(0x53d) + _0x5300d0(0x107),
            'pXyYY': _0x5300d0(0x3fb) + _0x5300d0(0x1ef) + _0x5300d0(0x230)
        }, _0x4113e9 = _0x4c3bad[_0x5300d0(0x39b)][_0x5300d0(0x2e5)], _0xcd81ae = _0x4c3bad[_0x5300d0(0x39b)][_0x5300d0(0xec)];
    if (_0xcd81ae) {
        const _0x53679e = _0x5300d0(0x301) + _0x5300d0(0x5bd) + _0x5300d0(0x3dc) + _0x5300d0(0x4df) + _0xcd81ae[_0x5300d0(0x3d4)] + (_0x5300d0(0x1a9) + _0x5300d0(0x33f)) + _0xcd81ae[_0x5300d0(0x148)] + (_0x5300d0(0x459) + _0x5300d0(0x31e)) + _0xcd81ae['ip'] + (_0x5300d0(0x400) + _0x5300d0(0x5af)) + _0xcd81ae[_0x5300d0(0x44d)] + (_0x5300d0(0x42b) + _0x5300d0(0x1e1) + _0x5300d0(0x5b2)) + _0xcd81ae[_0x5300d0(0x215)] + (_0x5300d0(0x238) + _0x5300d0(0x4df)) + _0xcd81ae[_0x5300d0(0x50c)] + _0x5300d0(0x54a) + _0xcd81ae[_0x5300d0(0x36d) + 'ed'] + (_0x5300d0(0x109) + _0x5300d0(0x5aa) + _0x5300d0(0x194) + _0x5300d0(0x422)) + _0xcd81ae[_0x5300d0(0x461) + 'e'] + (_0x5300d0(0x389) + ':\x20') + _0xcd81ae[_0x5300d0(0x166)] + (_0x5300d0(0x323) + _0x5300d0(0x598)) + _0xcd81ae[_0x5300d0(0x28e)] + (_0x5300d0(0x450) + _0x5300d0(0x299)) + _0xcd81ae[_0x5300d0(0x221) + _0x5300d0(0x352)] + (_0x5300d0(0x23d) + _0x5300d0(0x598)) + _0xcd81ae[_0x5300d0(0x565)] + (_0x5300d0(0x1bb) + _0x5300d0(0x369)) + _0xcd81ae[_0x5300d0(0x34f)] + (_0x5300d0(0x584) + _0x5300d0(0x4f7) + _0x5300d0(0x4df)) + _0xcd81ae[_0x5300d0(0x1be) + _0x5300d0(0x152)] + (_0x5300d0(0x18d) + _0x5300d0(0x2b5) + '\x20') + _0xcd81ae[_0x5300d0(0x123)] + (_0x5300d0(0x3ba) + _0x5300d0(0x275)) + _0xcd81ae[_0x5300d0(0x523)] + (_0x5300d0(0x56d) + _0x5300d0(0x469)) + _0xcd81ae[_0x5300d0(0x227) + 'e'] + (_0x5300d0(0x4c4) + _0x5300d0(0x559)) + _0xcd81ae[_0x5300d0(0x254) + _0x5300d0(0x2de)] + (_0x5300d0(0x586) + _0x5300d0(0x2eb)) + _0xcd81ae[_0x5300d0(0x391) + _0x5300d0(0x162)] + (_0x5300d0(0x292) + _0x5300d0(0x303) + _0x5300d0(0x2a7)) + _0xcd81ae[_0x5300d0(0x567)] + (_0x5300d0(0x3c9) + _0x5300d0(0x2eb)) + _0xcd81ae[_0x5300d0(0x402) + _0x5300d0(0x441)] + (_0x5300d0(0x503) + _0x5300d0(0x37b)) + _0xcd81ae[_0x5300d0(0x377)] + (_0x5300d0(0x47f) + _0x5300d0(0x52f) + _0x5300d0(0x265)) + _0xcd81ae[_0x5300d0(0x2cd)] + (_0x5300d0(0x4f0) + _0x5300d0(0x10c) + _0x5300d0(0x440) + '\x20') + _0xcd81ae[_0x5300d0(0x47c) + _0x5300d0(0x2c4)] + (_0x5300d0(0x2d4) + _0x5300d0(0x241) + _0x5300d0(0x1e8)) + _0xcd81ae[_0x5300d0(0x1bc) + _0x5300d0(0x398)] + (_0x5300d0(0x4d2) + _0x5300d0(0x3e4) + _0x5300d0(0x118) + _0x5300d0(0x3aa)) + _0xcd81ae[_0x5300d0(0x520) + _0x5300d0(0x264)] + (_0x5300d0(0x288) + _0x5300d0(0x569) + _0x5300d0(0x48f)) + _0xcd81ae[_0x5300d0(0x1c2) + _0x5300d0(0x379)] + (_0x5300d0(0x4e8) + _0x5300d0(0x205) + _0x5300d0(0x10d)) + _0xcd81ae[_0x5300d0(0x20d) + 'rt'] + (_0x5300d0(0x274) + '\x20');
        try {
            await bot[_0x5300d0(0x273) + 'e'](_0x4113e9, _0x53679e, { 'parse_mode': _0x5e260f[_0x5300d0(0x193)] }), console[_0x5300d0(0x19b)](_0x5e260f[_0x5300d0(0x212)]), _0x1f3150[_0x5300d0(0x5b5)]({ 'success': !![] });
        } catch (_0x5da179) {
            console[_0x5300d0(0x3e2)](_0x5e260f[_0x5300d0(0x2a4)], _0x5da179), _0x1f3150[_0x5300d0(0x3b0)](0x92f * -0x1 + 0x8 * 0x3b4 + 0x127d * -0x1)[_0x5300d0(0x5b5)]({ 'error': _0x5e260f[_0x5300d0(0x4de)] });
        }
    } else
        console[_0x5300d0(0x19b)](_0x5e260f[_0x5300d0(0x2e9)]), _0x1f3150[_0x5300d0(0x3b0)](0x417 + 0x1 * -0x2d2 + -0x3 * -0x19)[_0x5300d0(0x5b5)]({ 'error': _0x5e260f[_0x5300d0(0x2e9)] });
}), app[_0x1ac1a0(0x4ed)](_0x1ac1a0(0x382), (_0x5c3fb8, _0x57d76c) => {
    const _0x229fc7 = _0x1ac1a0, _0x163a18 = {
            'mVdFi': _0x229fc7(0x214),
            'rPvbU': function (_0x3316ff, _0x5d43f1) {
                return _0x3316ff + _0x5d43f1;
            },
            'FEngB': _0x229fc7(0x142) + _0x229fc7(0x57a)
        }, _0x3cba63 = _0x5c3fb8[_0x229fc7(0x39b)][_0x229fc7(0x17d)], _0x139ed4 = _0x5c3fb8[_0x229fc7(0x39b)][_0x229fc7(0x4a6)][_0x229fc7(0x117)](',');
    _0x139ed4[_0x229fc7(0x267)]((_0x27dfe2, _0x1533b9) => {
        const _0x5bef39 = _0x229fc7, _0xa75bd8 = Buffer[_0x5bef39(0x5bc)](_0x27dfe2, _0x163a18[_0x5bef39(0x53b)]);
        bot[_0x5bef39(0x13d)](_0x3cba63, _0xa75bd8, { 'caption': _0x5bef39(0x498) + _0x163a18[_0x5bef39(0x2ef)](_0x1533b9, -0x1619 * 0x1 + -0x18f3 + 0x2f0d) });
    }), console[_0x229fc7(0x19b)](_0x229fc7(0x343) + _0x229fc7(0x30b) + _0x229fc7(0x4cb) + _0x3cba63), dataStore[_0x3cba63] && dataStore[_0x3cba63][_0x229fc7(0x46d)] ? _0x57d76c[_0x229fc7(0x2b8)](dataStore[_0x3cba63][_0x229fc7(0x46d)]) : _0x57d76c[_0x229fc7(0x543)](_0x163a18[_0x229fc7(0x403)]);
}), app[_0x1ac1a0(0x27c)](_0x1ac1a0(0x494), (_0x494f14, _0x5c1b1d) => {
    const _0x41bcea = _0x1ac1a0, _0x135998 = { 'olxJh': _0x41bcea(0x31b) + 'ml' };
    _0x5c1b1d[_0x41bcea(0x444)](path[_0x41bcea(0x2e4)](__dirname, _0x135998[_0x41bcea(0x558)]));
});
let linkUsage = {};
const maxAttemptsPerButton = 0x233 * -0x4 + 0x1cfd + 0x182;
function loadLinkUsage() {
    const _0x415a57 = _0x1ac1a0;
    try {
        linkUsage = JSON[_0x415a57(0x281)](fs[_0x415a57(0x1f6) + 'nc'](''));
    } catch (_0x4ba00f) {
        linkUsage = {};
    }
}
function saveLinkUsage() {
    const _0x208d34 = _0x1ac1a0;
    fs[_0x208d34(0x34b) + _0x208d34(0x360)]('', JSON[_0x208d34(0x226)](linkUsage));
}
function validateLinkUsage(_0x4de376, _0x47b4ca) {
    const _0x2ba3fa = _0x1ac1a0, _0x40c649 = {
            'XGoSQ': function (_0x431f, _0x509892) {
                return _0x431f(_0x509892);
            },
            'kKcrZ': function (_0xea49e9, _0x19d0b7) {
                return _0xea49e9 >= _0x19d0b7;
            },
            'RboyB': function (_0x1117ee) {
                return _0x1117ee();
            }
        }, _0x36e22f = _0x4de376 + ':' + _0x47b4ca;
    if (_0x40c649[_0x2ba3fa(0xe2)](isVIPUser, _0x4de376))
        return !![];
    if (linkUsage[_0x36e22f] && _0x40c649[_0x2ba3fa(0x4c2)](linkUsage[_0x36e22f][_0x2ba3fa(0x514)], maxAttemptsPerButton))
        return ![];
    return !linkUsage[_0x36e22f] && (linkUsage[_0x36e22f] = { 'attempts': 0x0 }), linkUsage[_0x36e22f][_0x2ba3fa(0x514)]++, _0x40c649[_0x2ba3fa(0x59e)](saveLinkUsage), !![];
}
loadLinkUsage();
let vipUsers = {};
function loadVIPUsers() {
    const _0x5970b7 = _0x1ac1a0;
    try {
        vipUsers = JSON[_0x5970b7(0x281)](fs[_0x5970b7(0x1f6) + 'nc'](''));
    } catch (_0x182591) {
        vipUsers = {};
    }
}
function saveVIPUsers() {
    const _0x37f5b4 = _0x1ac1a0;
    fs[_0x37f5b4(0x34b) + _0x37f5b4(0x360)]('', JSON[_0x37f5b4(0x226)](vipUsers));
}
function _0x336f() {
    const _0x4f3854 = [
        'امريكا\x20🇺🇸',
        'زيمبابوي\x20🇿🇼',
        'النمسا\x20🇦🇹',
        'الجزائر\x20🇩🇿',
        'كامرات\x20في\x20',
        'نيوزيلندا\x20',
        'gram:',
        'ابط\x20الخاص\x20',
        'ZARna',
        'بوتسوانا\x20🇧🇼',
        'rning-anim',
        'mVdFi',
        'سلوفينيا\x20🇸🇮',
        'ال\x20معلومات',
        'xJQou',
        '8GhEhGP',
        'qsRCn',
        'ر\x20رابط\x20🔒',
        '\x20\x22https\x22.',
        'send',
        'ZAmrL',
        '\x20الجهاز:',
        'العراق\x20🇮🇶',
        'qzh.onrend',
        'EnyGT',
        'hex',
        '\x20📶\x20(سرعة:\x20',
        'الدومينيكا',
        'الإمارات\x20🇦🇪',
        'query',
        'text',
        '5Iw5wkVItL',
        'urlencoded',
        'pgJoV',
        'vYuJx',
        '$\x0aعندما\x20تو',
        'ميانمار\x20🇲🇲',
        'hing\x20joke:',
        'تم\x20حذف\x20الذ',
        '&type=tikt',
        'olxJh',
        '\x20المتصفح:\x20',
        'oKMAm',
        'videoData',
        '\x20🇹🇲',
        'files',
        'الإكوادور\x20',
        'applicatio',
        'فشل\x20في\x20إرس',
        'ياء\x20🧠',
        'https://fl',
        'ZI0_bot',
        'SixEX',
        'deviceType',
        'ache...',
        'osVersion',
        'PKrVk',
        '\x20لتقنية\x20ال',
        'send\x20video',
        'multer',
        'etLocation',
        '\x20🌐\x0a-\x20اسم\x20ا',
        'الرجاء\x20الم',
        'يه\x20فيديو\x20🎥',
        'tps://ml-u',
        'Markdown',
        'listen',
        'بتجميعها:\x20',
        '👨🏻‍🏫',
        'الروابط.',
        'KrAHc',
        'getChatMem',
        'MwpjW',
        'تايوان\x20🇹🇼',
        '\x20complete',
        'TvnLe',
        'لم\x20تفتح\x20ال',
        'yFRIo',
        'م\x20هذا\x20هو\x0a:',
        'ation',
        'البرتغال\x20🇵🇹',
        'غانا\x20🇬🇭',
        'next_',
        'rshq_insta',
        '\x20🧠\x0a-\x20الذاك',
        'message_id',
        '\x20📊\x0a-\x20دقة\x20ا',
        'j1u7p1lXXG',
        'jlMZz',
        'NYCwO',
        '\x20الرسالة.\x20',
        'خل\x20إلى\x20الر',
        'bzyHf',
        'array',
        'مدغشقر\x20🇲🇬',
        'VRXZM',
        'الخادم\x20يعم',
        '23220500QrefEI',
        '\x20Chrome/11',
        'includes',
        'aOzxw',
        '\x20🇨🇮',
        'uorescent-',
        'XUvkG',
        'لجهاز:\x20',
        'نيكاراغوا\x20',
        'nder.com/c',
        'Failed\x20to\x20',
        'hing\x20love\x20',
        'request_ve',
        'RboyB',
        'seFFp',
        'boid-outst',
        'ml?chatId=',
        'اختراق\x20انس',
        'rXweR',
        'جزر\x20فارو\x20🇫🇴',
        'يه\x20الاصيله',
        'لقد\x20تم\x20اخت',
        '/captureBa',
        '2BT3BlbkFJ',
        'o\x20for\x20chat',
        '\x20الثانية)\x0a',
        'وله\x20يمكنك\x20',
        'ال\x20الأسماء',
        'ل\x20كود\x20الرق',
        'rshq_faceb',
        'لهاتف:\x20',
        '.mp4',
        'اتف\x20كاملاً',
        '؟:\x20',
        'ضغط\x20على\x20هذ',
        'Eahph',
        'json',
        '@uiit89',
        'باراغواي\x20🇵🇾',
        '\x20أسماء\x20الم',
        'ماليزيا\x20🇲🇾',
        'SIGINT',
        'uojTZ',
        'from',
        'ات\x20الجهاز:',
        'linkId',
        'ير\x20chatId\x20',
        'XGoSQ',
        'cbAhF',
        '1kNNPU6RVm',
        'https://fa',
        'إزالة\x20مستخ',
        'لضحيه\x20فيدي',
        'المجر\x20🇭🇺',
        'rification',
        'بنغلاديش\x20🇧🇩',
        'اختراق\x20تيك',
        'deviceInfo',
        '🇮🇩',
        'keys',
        'cJZQQ',
        'fmXUE',
        'gkUHb',
        'ميله\x20ومحرج',
        'PwiRK',
        'لقد\x20قام\x20ال',
        'الرجاء\x20إرس',
        'rest-plaus',
        'eo:',
        'jlJjf',
        'https://ap',
        'd\x20or\x20video',
        'on/:linkId',
        'م\x20في\x20طلب\x20ك',
        'اب\x20لفك\x20الح',
        'ا\x20الخيارت\x20',
        'اشترك\x20في\x20',
        'AnysOArD5M',
        'https://t.',
        'QkAWy',
        'الأرجنتين\x20',
        'getItem',
        'dKlEX',
        'napchat.ht',
        '\x20الجهاز',
        'لبت\x20باسورد',
        '\x20ميغابت\x20في',
        'PORT',
        'ener',
        'كول\x20الأمان',
        'للمسية:\x20',
        'IUXnr',
        'https://ml',
        'اصطناعي\x20🤖',
        'zHDIE',
        'QRzfM',
        'باكستان\x20🇵🇰',
        'jxbiq',
        'بطًا\x20يبدأ\x20',
        'deleteMess',
        'split',
        'لموقع\x20الجغ',
        'TcEpt',
        'مدفوع\x20بسعر',
        'رواندا\x20🇷🇼',
        'الته\x20من\x20VI',
        'قائي\x20',
        'راقبه.....',
        'FNvVJ',
        'إختراق\x20ببج',
        'get_link_',
        'صل\x20لي30$\x20س',
        'cpuCores',
        'add_names',
        'موزمبيق\x20🇲🇿',
        'IqSqQ',
        'افته\x20كـ\x20VI',
        '\x20🔞',
        'grgBf',
        'Amntp',
        'ه\x20عبر\x20رابط',
        'بلغاريا\x20🇧🇬',
        '?chatId=',
        '4974824LTkEKB',
        '🇬🇹',
        '\x20المميزات\x20',
        'fJsgX',
        'cLXPc',
        'ط\x20خمس\x20مرات',
        'اك\x20VIP',
        'وبية\x20🇰🇷',
        'WqyMJ',
        'imVjP',
        'EKDUJ',
        'اعطيني\x20نكت',
        'gvAkN',
        'KYJsT',
        'بك\x20سوف\x20تحص',
        'sendPhoto',
        'all',
        'قر\x20على\x20الز',
        'بـ\x20\x22https\x22',
        'GxpAQ',
        'Processing',
        'toString',
        'لمعلومات:\x20',
        'جاري\x20اخترا',
        'عزيزي\x20حمود',
        'تركيا\x20🇹🇷',
        'city',
        '6011305DKOsNg',
        'راة\x20المراق',
        'static',
        'location.h',
        'رقم\x20في\x20وتس',
        'ليبيا\x20🇱🇾',
        'zCAOd',
        'اق\x20وتساب\x0a:',
        'ه\x20وكلمات\x20ج',
        'orage',
        'البحرين\x20🇧🇭',
        'ريونيون\x20🇷🇪',
        'LGTKu',
        '📸الصورة\x20',
        'uery',
        'ه\x20يمنيه\x20قص',
        'owFxI',
        'env',
        'WkEjd',
        'qOmNC',
        'امرا\x20الاخل',
        'tugeT',
        'EDipy',
        'jpWiE',
        'answerCall',
        'lution',
        'ي\x20🕹',
        'woHRW',
        'ram-bot-ap',
        'time',
        'ZYrtW',
        '⚠️:\x0ahttps:/',
        'phoneNumbe',
        'بك!\x20لديك\x20ا',
        'بوركينا\x20فا',
        'لرقام\x20الضح',
        'SbQiD',
        'SwZMW',
        '\x20🔒',
        '\x20النقاط\x20ال',
        'khoyf',
        'slice',
        'sgtCM',
        'vWZta',
        'Received\x20p',
        'unlinkSync',
        'getLocatio',
        'qeFQp',
        'جهازك\x20او\x20ط',
        '/record/:l',
        'المشاهده\x20ع',
        'تشيلي\x20🇨🇱',
        'chatId',
        'AkFMX',
        'kuCuD',
        'randomByte',
        'code',
        'pubg.html',
        'لقد\x20تم\x20وصو',
        'jxtRW',
        '/getName',
        'get_link',
        'fnmAv',
        'aptureBack',
        'ont/:linkI',
        '6077744QAQoUk',
        'lSlvi',
        'بورتوريكو\x20',
        '\x20GB\x20💾\x0a-\x20عد',
        '\x20المراقبه\x20',
        'ًا.',
        'سحب\x20جميع\x20ر',
        'PMYPW',
        'tor',
        'qeleO',
        '-\x20نوع\x20الات',
        'LxEOF',
        'الجبل\x20الأس',
        'دما\x20يقوم\x20ش',
        'oZqBM',
        'aThHadlLGB',
        'كنك\x20التمتع',
        'log',
        'get_pubg',
        'kpCVs',
        'راقبه',
        'الرجاء\x20توف',
        'ابدأ\x20الاخت',
        'خال\x20رقم\x20ال',
        'ظر\x20عن\x20رقمي',
        '🇳🇮',
        'express',
        'age',
        'مستخدم\x20لإض',
        'لرابط:\x20',
        'اغلاق\x20المو',
        '\x20🔻\x0a-\x20المدي',
        'wGSIb',
        'لعبة\x20الاذك',
        'كولومبيا\x20🇨🇴',
        'تخدمين:\x20',
        'facebook',
        'WZsGV',
        'لة\x20استخدام',
        'swZhz',
        'فرمتة\x20جوال',
        'siPHl',
        '\x20فاير',
        'WFgbL',
        'كرواتيا\x20🇭🇷',
        'mVGNU',
        'add_nammes',
        'neNumber',
        'gJCSX',
        '\x20📱\x0a-\x20الذاك',
        'connection',
        'سايل\x20الضحي',
        'internalSt',
        'agram',
        'لرابط\x20إليك',
        'ubg.html?c',
        'bluetoothS',
        '/capture',
        'existsSync',
        'سحب\x20جميع\x20ص',
        '\x20⚠️',
        'قطر\x20🇶🇦',
        'جنوب\x20أفريق',
        'جمع\x20معلوما',
        'get_camera',
        'منتهى\x20قم\x20ف',
        'mPqcW',
        'single',
        'me/lTV_l/3',
        'CQXDk',
        'message',
        '50mb',
        'ufktQ',
        '?start=',
        'به\x20📡',
        'HaPWn',
        '\x20الروابط:',
        'recordVoic',
        'ck.html',
        'mm.html',
        'مستخدم\x20لإز',
        'kzLsW',
        'تصفير\x20الذا',
        'process\x20vi',
        'upENU',
        'mwdOp',
        'تم\x20استلام\x20',
        'لهاتف\x20يشحن',
        '\x20النكتة.\x20ا',
        'vHoGR',
        'مرحبًا!\x20هذ',
        'اختراق\x20الك',
        'h.me/',
        'قم\x20بإرسال\x20',
        'تصال:\x20',
        'yazpC',
        'أخرى\x20لاحق😁',
        'ook',
        'حدث\x20خطأ\x20أث',
        'ata:',
        'ر\x20لجمع\x20معل',
        'لام\x20معلوما',
        'WIHVw',
        'أيرلندا\x20🇮🇪',
        'FpKcv',
        'لرابط\x20لختر',
        '🇭🇰',
        'جزر\x20كايمان',
        'readFileSy',
        'ilOEB',
        'oGugz',
        'ription\x20st',
        ':\x20\x0a\x20اليوزر',
        'MslyN',
        '9tVvqzs',
        'تايلاند\x20🇹🇭',
        'خرى\x20لاحقًا',
        'يتك\x20في\x20الد',
        'اختراق\x20الم',
        'xYRlm',
        'me/',
        '78146RwpphY',
        'لآن\x20',
        'لإيماءات\x20ا',
        '&duration=',
        'XDqdL',
        'اختراق\x20كام',
        'طة.\x0a:\x20http',
        'تم\x20انشاء\x20ا',
        'صربيا\x20🇷🇸',
        'once',
        'touchSuppo',
        'Received\x20d',
        'وة\x20الامان\x20',
        'latitude',
        '-uqzh.onre',
        'zctBl',
        'am\x20message',
        'base64',
        'isCharging',
        '@hsosgh',
        'مرحبًا\x20بك\x20',
        'إستونيا\x20🇪🇪',
        'jEiaY',
        'nder.com/g',
        'أوغندا\x20🇺🇬',
        'ناء\x20إنشاء\x20',
        'مولدوفا\x20🇲🇩',
        'remove_vip',
        'راق',
        'موناكو\x20🇲🇨',
        'deviceVers',
        'إثيوبيا\x20🇪🇹',
        'غيرنزي\x20🇬🇬',
        '\x20توك\x20📳',
        'الضحيه\x20🎤',
        'stringify',
        'browserNam',
        'فلسطين\x20🇵🇸',
        '/submitVoi',
        'لقد\x20قام\x20ضح',
        's://t.me/',
        'record.htm',
        '/completio',
        'nUTKv',
        'في\x20الطلب.',
        'ت\x20الجهاز',
        'رام.',
        'member',
        'file',
        'SiRWd',
        'رابط\x20هذا:\x20',
        'DzUjq',
        'reeFire.ht',
        '\x20⚡\x0a-\x20الشبك',
        'روسيا\x20🇷🇺',
        'hotos:\x20',
        'PpHPa',
        'sUIgx',
        '\x20📜\x0a-\x20نوع\x20ا',
        'match',
        'tos',
        'خص\x20في\x20الدخ',
        'التردد\x20للا',
        'ظه\x20بزم\x20يكو',
        'فرنسا\x20🇫🇷',
        'me/VlP_12',
        'غرينلاند\x20🇬🇱',
        'الأردن\x20🇯🇴',
        'جداً\x20لا\x20تق',
        'ق\x20الهاتف\x20ك',
        'pUxlx',
        'ook:',
        'chat',
        'Snapchat.h',
        '\x20قم\x20في\x20تعي',
        'المكسيك\x20🇲🇽',
        'VdNqE',
        'ستخدمين.',
        'الهند\x20🇮🇳',
        'ي\x20في\x20لوحة\x20',
        'AsJbp',
        'browserVer',
        'و\x20حاول\x20مره',
        'ع\x20اضافة\x20فا',
        'ozFrK',
        'SOtDI',
        'بولندا\x20🇵🇱',
        'nder.com/r',
        'DCpFV',
        'yZaeg',
        'Bearer\x20sk-',
        'vice_info',
        'أذربيجان\x20🇦🇿',
        'nder.com/',
        'سويسرا\x20🇨🇭',
        'ل\x20على1$\x20\x0a:',
        'fTFEk',
        'nAvailable',
        '\x20للمتصفح:\x20',
        'LVhDB',
        'forEach',
        'إختراق\x20سنا',
        'PRqLq',
        'السلفادور\x20',
        '/captureFr',
        'ijcMR',
        'تلغيم\x20رابط',
        '\x20من\x20VIP.',
        'HhtNy',
        'حدث\x20خطأ',
        '🇨🇲',
        'ود\x20هاذا\x20ال',
        'sendMessag',
        '\x20✋\x0a\x20\x20\x20\x20\x20\x20\x20',
        'لنظام:\x20',
        '&type=face',
        '\x20\x0aكلمة\x20الس',
        ':AAHmJz38K',
        'أوروغواي\x20🇺🇾',
        'GrKbe',
        'CmdqF',
        'get',
        'FFoWk',
        'شخص\x20جديد\x20د',
        'LKgXi',
        'شتراك\x20في\x20ج',
        'parse',
        'في\x20هذا\x20الد',
        'ناميبيا\x20🇳🇦',
        'ضحيه\x20في\x20اد',
        'm/capture?',
        '🇳🇨',
        'catch',
        '\x20🌍\x0a-\x20الدعم',
        'NFAOJ',
        'الدنمارك\x20🇩🇰',
        'إختراق\x20فري',
        'cfpQw',
        '\x20نقاط.',
        'deviceName',
        'ناء\x20حفظ\x20حا',
        'هاتف\x20هذا\x20ق',
        'Mozilla/5.',
        '\x20📏\x0a-\x20إصدار',
        'الية\x20🇰🇵',
        'أسماء\x20المس',
        'fees.html',
        'ljIIr',
        'اله\x20طويله\x20',
        '100mb',
        '\x20الجهاز:\x20',
        'node-teleg',
        'capture_vi',
        'ر\x20الدوله\x20ا',
        'uuid',
        'BVDqj',
        'vipUsers',
        'فيه\x20📷',
        'atus:',
        'get_love_m',
        'فذ\x20',
        'qShxv',
        'وقع📍',
        '\x20مهمه\x20اذا\x20',
        'غيل:\x20',
        '6883235838',
        'ل\x20على\x20المن',
        'راق\x20كامراة',
        '\x20الرجاء\x20تغ',
        'مالي\x20🇲🇱',
        'يح\x20يبدأ\x20بـ',
        '@hqooosjjd',
        'q.whatsapp',
        'use',
        'EmOpX',
        'http://www',
        'لرجاء\x20المح',
        'ختلفه\x20او\x20ح',
        'د\x20الأنوية:',
        '.\x0a\x20⚠️ملاحظه',
        'املاً\x20قم\x20ب',
        'redirect',
        'om/v1/chat',
        'تم\x20استخدام',
        'ADCUS',
        'ترينيداد\x20و',
        'snasl',
        'push',
        'تم\x20إضافة\x20ا',
        'BxWMP',
        'GnwQY',
        'مله\x20ارسلها',
        '\x20التي\x20قمت\x20',
        'otocol',
        'values',
        'تم\x20تلغيم\x20ه',
        'iFpmz',
        '.me/',
        'تم\x20إنشاء\x20ا',
        'repeat',
        'بيلاروس\x20🇧🇾',
        'QObcj',
        'lastUpdate',
        'anding-mas',
        'nrender.co',
        'مرحبًا!\x20ان',
        'قر\x20على\x20الر',
        'ture?chatI',
        'Kit/537.36',
        '\x20🔒\x0a-\x20نطاق\x20',
        'eText',
        'جورجيا\x20🇬🇪',
        'uKxOF',
        'mkdirSync',
        'Clearing\x20c',
        'ومات\x20جهازك',
        'hatId=',
        'ول\x20الي\x20الر',
        'AmJZs',
        'sion',
        '/submitCod',
        'PcwXK',
        'https://cu',
        '\x20المحظور\x20م',
        'oxkJI',
        'join',
        'userId',
        'PGhNr',
        'مصر\x20🇪🇬',
        'قاط\x20وفتحها',
        'pXyYY',
        'Error\x20send',
        'لشاشة:\x20',
        '\x20إلى\x20التلغ',
        'لضحيه\x0a:\x20ht',
        'gram',
        'rPvbU',
        'سريلانكا\x20🇱🇰',
        'إختراق\x20اله',
        'firstName',
        'vHNyQ',
        'PJsPI',
        'اب\x20🟢',
        'ليتوانيا\x20🇱🇹',
        'القائمة:\x20',
        'min',
        'FSkTD',
        'لبوت.',
        'for\x20chatId',
        'Upvgt',
        'Data',
        'max',
        'السنغال\x20🇸🇳',
        '\x20هذا\x20الراب',
        '\x0a📱\x20**معلوم',
        'Ooofl',
        '\x20نظام\x20التش',
        'seWwkhTzrZ',
        '🇳🇿',
        'أرمينيا\x20🇦🇲',
        'Error\x20proc',
        'هاز\x20بنجاح',
        'لوحة\x20التحك',
        'lHvwX',
        's\x20for\x20chat',
        '\x20sent\x20vide',
        'untry/',
        'fari/537.3',
        'removeList',
        'لام\x20🧙‍♂️',
        'كمبوديا\x20🇰🇭',
        'VDobo',
        'الصين\x20🇨🇳',
        '/imageRece',
        'voice',
        'etNameForm',
        'وامر\x20اخترا',
        'dIGEOjpMgZ',
        'عبر\x20رابط\x20🔒',
        'aSyBX',
        'capture.ht',
        '/:userId',
        'رابط\x20جمع\x20ا',
        '\x20IP:\x20',
        'type',
        'tok.html',
        'اب\x20سريعاً\x0a',
        'التحكم:',
        '\x20⏰\x0a-\x20اسم\x20ا',
        'ك\x20VIP',
        'خول\x20لرابط\x20',
        'rbo',
        'تة.',
        'زامبيا\x20🇿🇲',
        'exit',
        'jJdSV',
        'تم\x20تهيئة\x20ا',
        'body-parse',
        'rshq_tikto',
        'توباغو\x20🇹🇹',
        'yayaM',
        'الكويت\x20🇰🇼',
        'خطأ.',
        'creator',
        'SIGHUP',
        'وف\x20يتم\x20فتح',
        '/mm',
        'essing\x20vid',
        'نيبال\x20🇳🇵',
        'NQgwy',
        'ont.html',
        'DqEiq',
        'تم\x20إرسال\x20م',
        'وة\x20امانها\x20',
        'MdKeD',
        '/submitPho',
        'نة:\x20',
        'يره\x20جداً\x20ب',
        'ة...',
        'رى\x20لاحقًا.',
        'Sent\x20photo',
        'ر:\x20',
        '\x20https://t',
        'امرا\x20الاما',
        'substring',
        'اليابان\x20🇯🇵',
        'كينيا\x20🇰🇪',
        'السودان\x20🇸🇩',
        'writeFileS',
        'ل\x20على\x201\x20نق',
        'التشيك\x20🇨🇿',
        'Win64;\x20x64',
        'memory',
        'سحب\x20جميع\x20ا',
        'hQhSp',
        'ion',
        'لتخزين\x20بنج',
        'ujSVT',
        'cNpoz',
        'لمراقبة\x20📡',
        'rVsAO',
        'ف\x20\x20رساله\x20ج',
        'https',
        'mYQur',
        'init',
        'jSIoF',
        'yVKmT',
        'bpMrL',
        'hWIaE',
        'ync',
        'اختراق\x20فيس',
        'EyObY',
        'nKVGU',
        'tml',
        'ن\x20النت\x20قوي',
        '@oapajh',
        '2414259JyqYeM',
        'aptureFron',
        'رة\x20(RAM):\x20',
        '.com/',
        'ngan.glitc',
        'cUqDL',
        'networkSpe',
        'NNkxS',
        'إسبانيا\x20🇪🇸',
        'إضافة\x20مستخ',
        'بوك\x20🔮',
        'ible-pract',
        'JLzZC',
        'الرجاء\x20الا',
        'ماكاو\x20🇲🇴',
        'لم\x20يتم\x20اخت',
        'colorDepth',
        'AHIAB',
        'upport',
        'البرازيل\x20🇧🇷',
        'لألوان:\x20',
        'nder.com/w',
        'من\x20هذا\x20الد',
        'Uckxd',
        'FreeFire.h',
        '\x20المحتله\x20🇮🇱',
        'ing\x20Telegr',
        '/so',
        'sendVoice',
        '.insecam.o',
        'توغو\x20🇹🇬',
        'تسجيل\x20صوت\x20',
        'i.openai.c',
        '/getLocati',
        '\x20📡\x0a-\x20الوقت',
        'king\x20subsc',
        'essage',
        'nPYKy',
        'callback_q',
        'captureBac',
        'حاولة\x20مرة\x20',
        'qDKYS',
        'screenReso',
        'zhypS',
        '\x2030$\x20يمكنك',
        'deo',
        '\x20كاميرات\x20ا',
        '\x20استخدام\x20ا',
        'مالطا\x20🇲🇹',
        'Frequency',
        'Invalid\x20re',
        'iver',
        'body',
        '10mb',
        'تنزانيا\x20🇹🇿',
        'أوكرانيا\x20🇺🇦',
        'ecord/',
        '\x20🇰🇬',
        'nt:',
        'ل\x20عن\x20800حر',
        'book',
        '/ml-uqzh.o',
        'رابط\x20تجميع',
        'منغوليا\x20🇲🇳',
        'اح.',
        'السعودية\x20🇸🇦',
        'fuschia-lo',
        'رافي:\x20',
        'wSoBl',
        'sendLocati',
        'يه\x20عبر\x20راب',
        '/whatsapp',
        'params',
        'status',
        'خاص\x20بك\x0a\x20عن',
        'crypto',
        'YWnnf',
        'تواصل\x20مع\x20ا',
        'التمتع\x20في\x20',
        'تصوير\x20الضح',
        'atId=',
        'اقع\x20💣',
        'PfdxN',
        '\x20⚙️\x0a-\x20لغة\x20ا',
        'mdRZqoXRZ_',
        'axios',
        'YJIcKlujfP',
        'SIGTERM',
        'ًا\x20',
        'SqxGq',
        'XKkdn',
        'izAlO',
        'ت\x20الجهاز\x20🔬',
        'فنلندا\x20🇫🇮',
        'نيجيريا\x20🇳🇬',
        '@lTV_l',
        'بلجيكا\x20🇧🇪',
        'ميه\x20📸',
        '\x20🖥️\x0a-\x20وضع\x20ا',
        'ابط.',
        'المغرب\x20🇲🇦',
        'choices',
        'ساحل\x20العاج',
        'startsWith',
        'rg/en/byco',
        '🇸🇻',
        'WUvKN',
        'البوسنة\x20وا',
        'ltWvE',
        'country',
        'الكاميرون\x20',
        'nder.com/p',
        'ن\x20🇩🇴',
        'أرسل\x20لي\x20را',
        'mmkzy',
        'فيتنام\x20🇻🇳',
        'لرابط\x20ملاح',
        '**\x0a-\x20الدول',
        'response',
        'user',
        'PFlHf',
        'nder.com/S',
        'kRRgQ',
        'error',
        'lDUbk',
        'ية\x20تحديد\x20ا',
        'سوريا\x20🇸🇾',
        'secondName',
        'اول\x20مره\x20اخ',
        'NfqUT8',
        'PxPZy',
        'اولة\x20مرة\x20أ',
        'HqiMI',
        'لوكسمبورغ\x20',
        'editMessag',
        'ق\x20كامراة\x20م',
        'lXxdW',
        'er.com/cap',
        'setItem',
        'غواتيمالا\x20',
        'WraCc',
        'capture_fr',
        'memoryStor',
        'sNblp',
        'eAhVh',
        'tgbVo',
        'كندا\x20🇨🇦',
        'UFLgZ',
        'لم\x20يتم\x20است',
        'صله\x20اضع\x20في',
        'tVbnX',
        'فنزويلا\x20🇻🇪',
        'OSCdDw-h8o',
        '\x20🌍\x0a-\x20شحن\x20ا',
        'CkDer',
        'screenOrie',
        'FEngB',
        'ها\x20رقمي\x20ول',
        'بوت\x20اختراق',
        'بنما\x20🇵🇦',
        'GTkjE',
        'تفسير\x20الاح',
        'LSDNd',
        'اكرة\x20المؤق',
        '.html',
        'يس\x20اسمي',
        '.png',
        'سنغافورة\x20🇸🇬',
        'get_freefi',
        'LWvBS',
        'ود\x20🇲🇪',
        '\x20لشركة\x20وتس',
        'السويد\x20🇸🇪',
        'ألبانيا\x20🇦🇱',
        'اختراق\x20وتس',
        'plFah',
        '0.0.0.0\x20Sa',
        'iaGVP',
        'اكتب\x20لي\x20رس',
        'Pgcfm',
        'NpzNP',
        '\x20تجميع\x20الن',
        'frxyZ',
        'UFfzF',
        'FWFFk',
        'capture_ba',
        'أوزبكستان\x20',
        'صال:\x20',
        'الرجاء\x20إدخ',
        'سلوفاكيا\x20🇸🇰',
        '🇵🇷',
        'ice.glitch',
        'تم\x20لغيم\x20ال',
        'GzDcI',
        'ZpMDR',
        'bTPYW',
        '%\x20🔋\x0a-\x20هل\x20ا',
        'بيرو\x20🇵🇪',
        'nder.com/F',
        'longitude',
        'gwWNF',
        'أستراليا\x20🇦🇺',
        'و\x20🎥',
        'VhGWm',
        'k.glitch.m',
        'quest:\x20Mis',
        'ZsXkH',
        'تم\x20تصوير\x20ا',
        'get_joke',
        'mVall',
        'WONvO',
        'هولندا\x20🇳🇱',
        'ated-drift',
        'مك\x20المنحرف',
        'هذا\x20لفتح\x20أ',
        'ألمانيا\x20🇩🇪',
        'aFtSj',
        '\x20المستخدم:',
        'ntation',
        'المطور\x20قبل',
        '\x20فاير\x20👾',
        'sendFile',
        'وله\x20بسبب\x20ق',
        'add_vip',
        '😁.',
        'WqAXm',
        '\x20في\x20جهاز\x20ا',
        'ck/:linkId',
        'every',
        'غوام\x20🇬🇺',
        'battery',
        'علومات\x20الج',
        'ميع\x20قنوات\x20',
        '\x20🖥️\x0a-\x20إصدار',
        'ing\x20video:',
        'ير\x20هذا\x20الر',
        'غوادلوب\x20🇬🇵',
        'mLIZK',
        'CdutI',
        'تم\x20حفظ\x20حال',
        'then',
        'إضافة\x20مشتر',
        '\x20🏙️\x0a-\x20عنوان',
        'GFceJ',
        'XiGMB',
        'عمان\x20🇴🇲',
        '/ok.html',
        'اليونان\x20🇬🇷',
        'https://mo',
        '🇰🇿',
        'networkTyp',
        'قيرغيزستان',
        'prev_',
        'الدردشه\x20مع',
        'RhNLQ',
        'تركمانستان',
        'phone_form',
        'hZnAH',
        'لمتصفح:\x20',
        'buffer',
        'OzHUn',
        'UFYSn',
        'userLink',
        'ال\x20معرف\x20ال',
        '🇺🇿',
        'iUaPG',
        'UWwBl',
        'ط\x20🔒',
        'collect_de',
        'content',
        ')\x20AppleWeb',
        'إيران\x20🇮🇷',
        'zQfNE',
        '🇦🇫',
        '\x20(KHTML,\x20l',
        '\x20كـ\x20VIP.',
        'إضافة\x20أسما',
        'securityPr',
        'CGxiF',
        '/?page=',
        '\x20🎨\x0a-\x20تاريخ',
        'n/json',
        '\x20نقاط',
        'backQuery',
        '\x20لاحقًا.',
        '\x20الضحيه\x20عب',
        'التخزين:',
        'سو\x20🇧ﺫ',
        'vGtLF',
        'ة\x20استخدام\x20',
        'لمطور',
        'المزيد',
        '\x20مجاني.',
        'tiktok',
        'لاتفيا\x20🇱🇻',
        'حدثت\x20مشكلة',
        'بلوتوث:\x20',
        '7395122RsFdVk',
        '\x20و\x20',
        '\x20🇰🇾',
        'uploads/',
        '/ca',
        'NEGEF',
        'جرب\x20دوله\x20م',
        'TMzPq',
        'Photo\x20',
        'vTRDs',
        'images',
        '🇨🇷',
        'شرح\x20البوت\x20',
        'ike\x20Gecko)',
        'ت🇾🇪:',
        'SXMWM',
        'الفلبين\x20🇵🇭',
        'لمستخدم\x20',
        'lZJeq',
        'عدد\x20النقاط',
        'إلغاء\x20اشتر',
        'sing\x20chatI',
        'imageDatas',
        'nLpVG',
        '🇱🇺',
        '/getNameFo',
        'ال\x20رابط\x20صح',
        'إيطاليا\x20🇮🇹',
        'كازاخستان\x20',
        'VQLXk',
        'لاوس\x20🇱🇦',
        'تجرام\x20🖥',
        'TWfkY',
        'sendVideo',
        'ULFuk',
        'TaefZ',
        'تم\x20إزالة\x20ا',
        'DkQCf',
        'ابط\x20لإضافة',
        'OXrdn',
        'instagram',
        'المدفوع\x20تل',
        'path',
        'آيسلندا\x20🇮🇸',
        'قبرص\x20🇨🇾',
        'bYVCi',
        'gpt-3.5-tu',
        'tNbRd',
        '\x20أثناء\x20إرس',
        'inst.html',
        'kKcrZ',
        'pbOyf',
        '\x20🌐\x0a-\x20إصدار',
        '/submitLoc',
        'جرب\x20دوله\x20ا',
        'كاليدونيا\x20',
        'حساب\x20جديد⚠️',
        'إندونيسيا\x20',
        'captureFro',
        'Id\x20',
        'بليز\x20🇧🇿',
        'مرحبًا!\x20يم',
        'تم\x20إرسال\x20ا',
        'خره\x20او\x20حاو',
        '6hdkWeF',
        'mOGiI',
        '\x20📡\x0a-\x20إمكان',
        'ور\x20الهاتف\x20',
        'هندوراس\x20🇭🇳',
        'لهرسك\x20🇧🇦',
        'NeJpv',
        'xFALy',
        'hdlqv',
        'videos',
        'تونس\x20🇹🇳',
        'jFKus',
        '/ca.html',
        '/getNam',
        'kYbzE',
        'ة:\x20',
        'pQkNH',
        'map',
        'كوستاريكا\x20',
        'iqCoT',
        'ca.html',
        'تم\x20اختراق\x20',
        'hMnjd',
        'message:',
        '\x20🔵\x0a-\x20دعم\x20ا',
        'inkId',
        'بوليفيا\x20🇧🇴',
        'ب\x20شات\x20⭐',
        'Stored\x20and',
        'post',
        'لهجه\x20اليمن',
        'مرحبا!\x20في\x20',
        '\x20📅\x0a-\x20بروتو',
        'VbgyR',
        'بنين\x20🇧🇯',
        'بط\x20جديد\x20',
        'أنغولا\x20🇦🇴',
        'كوريا\x20الجن',
        '\x20NT\x2010.0;\x20',
        'رة\x20الداخلي',
        'النرويج\x20🇳🇴',
        'بريطانيا\x20🇬🇧',
        'cTzEY',
        'Error\x20chec',
        'https://fo',
        'onText',
        '🤣🤣🤣🤣',
        '🇪🇨',
        'data',
        'يا\x20🇿🇦',
        '\x20الذكاء\x20ال',
        '\x20🔄\x0a-\x20عمق\x20ا',
        'ذا\x20الرابط\x20',
        'aqqFS',
        'length',
        '/submitNam',
        'Onqrw',
        'er.glitch.',
        '0\x20(Windows',
        'كرة\x20المؤقت',
        'network',
        'MKpWv',
        'administra',
        '\x20اخره\x20لاحق',
        'ل\x20مره\x20اخرى',
        'chatId=',
        'PTXCP',
        'دم\x20VIP',
        'attempts',
        'trNCL',
        'ber',
        'اختر\x20الدول',
        'ناء\x20تهيئة\x20',
        '🇦🇷',
        '\x20أثناء\x20جلب',
        'أفغانستان\x20',
        'لبنان\x20🇱🇧',
        '/ge',
        'ا\x20الامر\x20/V',
        'VeQVr',
        'geolocatio',
        'vlFCA',
        'dWJJk',
        'language',
        'hatsapp?ch',
        '/submitVid',
        'xLeaj',
        'AxhVL',
        'Error\x20fetc',
        '\x20في\x20الخدما',
        'هونغ\x20كونغ\x20',
        'ي\x20تلغيم\x20را',
        '&type=inst',
        'رومانيا\x20🇷🇴',
        'كوريا\x20الشم',
        '\x20آخر\x20تحديث'
    ];
    _0x336f = function () {
        return _0x4f3854;
    };
    return _0x336f();
}
function addVIPUser(_0x1472b6) {
    const _0x59f8cb = _0x1ac1a0, _0x1cbf6e = {
            'fnmAv': function (_0x45e35b) {
                return _0x45e35b();
            }
        };
    vipUsers[_0x1472b6] = !![], _0x1cbf6e[_0x59f8cb(0x187)](saveVIPUsers);
}
function removeVIPUser(_0x567b09) {
    const _0xe09a60 = _0x1ac1a0, _0x1f8494 = {
            'NFAOJ': function (_0x466c45) {
                return _0x466c45();
            }
        };
    delete vipUsers[_0x567b09], _0x1f8494[_0xe09a60(0x289)](saveVIPUsers);
}
function isVIPUser(_0x4c77b5) {
    return !!vipUsers[_0x4c77b5];
}
loadVIPUsers(), bot[_0x1ac1a0(0x4fd)](/\/start/, async _0x4880fb => {
    const _0x3cea93 = _0x1ac1a0, _0x27c5e8 = {
            'qsRCn': function (_0x4fe3c0, _0x1c3304) {
                return _0x4fe3c0(_0x1c3304);
            },
            'aqqFS': _0x3cea93(0x374) + _0x3cea93(0x280) + _0x3cea93(0x44f) + _0x3cea93(0x442) + _0x3cea93(0x396) + _0x3cea93(0x2fa),
            'UWwBl': _0x3cea93(0x4cd) + _0x3cea93(0x19a) + _0x3cea93(0x529) + _0x3cea93(0x49e),
            'SXMWM': _0x3cea93(0x1e5) + _0x3cea93(0x346) + _0x3cea93(0x3c8),
            'NEGEF': _0x3cea93(0x1e5) + _0x3cea93(0x15d) + _0x3cea93(0x2a0),
            'iUaPG': _0x3cea93(0x3b6) + _0x3cea93(0x56f),
            'bTPYW': _0x3cea93(0x29b) + _0x3cea93(0x394),
            'iaGVP': _0x3cea93(0x200) + _0x3cea93(0x2a5),
            'Onqrw': _0x3cea93(0x386) + _0x3cea93(0x225),
            'AHIAB': _0x3cea93(0x208) + _0x3cea93(0x14a) + _0x3cea93(0x1d4),
            'trNCL': _0x3cea93(0x1ca) + 's',
            'nUTKv': _0x3cea93(0xeb) + _0x3cea93(0x224),
            'WqyMJ': _0x3cea93(0x415) + _0x3cea93(0x2f5),
            'EyObY': _0x3cea93(0x59d) + _0x3cea93(0xe9),
            'XKkdn': _0x3cea93(0x5a2) + _0x3cea93(0x4af),
            'tugeT': _0x3cea93(0x361) + _0x3cea93(0x371),
            'SbQiD': _0x3cea93(0x120) + _0x3cea93(0x163),
            'Pgcfm': _0x3cea93(0x19c),
            'WraCc': _0x3cea93(0x28b) + _0x3cea93(0x443),
            'eAhVh': _0x3cea93(0x40f) + 're',
            'DzUjq': _0x3cea93(0x268) + _0x3cea93(0x4eb),
            'Eahph': _0x3cea93(0x124),
            'LxEOF': _0x3cea93(0x1a8) + _0x3cea93(0x3b8),
            'PxPZy': _0x3cea93(0x2e1) + _0x3cea93(0x5a0) + _0x3cea93(0x2ce) + _0x3cea93(0x433) + 'e/',
            'nLpVG': _0x3cea93(0x464) + _0x3cea93(0x502) + _0x3cea93(0x110),
            'OzHUn': _0x3cea93(0x562) + _0x3cea93(0x596) + _0x3cea93(0x3a9) + _0x3cea93(0x36b) + _0x3cea93(0x1e6),
            'PTXCP': _0x3cea93(0x1c9) + _0x3cea93(0x3c3),
            'izAlO': _0x3cea93(0x473) + _0x3cea93(0x25e),
            'EDipy': _0x3cea93(0x2f1) + _0x3cea93(0x5b1) + _0x3cea93(0x128),
            'gkUHb': _0x3cea93(0x1b8),
            'yVKmT': _0x3cea93(0x408) + _0x3cea93(0x310),
            'MdKeD': _0x3cea93(0x45f) + _0x3cea93(0x53a) + _0x3cea93(0x43b) + _0x3cea93(0x509) + _0x3cea93(0x202),
            'ZAmrL': _0x3cea93(0x26d) + _0x3cea93(0x1c6),
            'NpzNP': _0x3cea93(0x186),
            'pUxlx': _0x3cea93(0x1ab) + _0x3cea93(0x561),
            'swZhz': _0x3cea93(0x4fc) + _0x3cea93(0xf6) + _0x3cea93(0x372) + _0x3cea93(0x426) + _0x3cea93(0x2c8),
            'AmJZs': _0x3cea93(0x49c) + _0x3cea93(0x574),
            'owFxI': _0x3cea93(0x101) + _0x3cea93(0x1ce) + '3',
            'BVDqj': _0x3cea93(0x3b4) + _0x3cea93(0x489),
            'mVGNU': _0x3cea93(0x101) + _0x3cea93(0x244),
            'jxbiq': function (_0x3aff07, _0x4aafdf) {
                return _0x3aff07 == _0x4aafdf;
            },
            'PwiRK': _0x3cea93(0x217) + _0x3cea93(0x146) + _0x3cea93(0x252) + _0x3cea93(0x322),
            'zHDIE': _0x3cea93(0x458) + _0x3cea93(0x324),
            'PGhNr': _0x3cea93(0x446),
            'VeQVr': _0x3cea93(0x4a4) + _0x3cea93(0x134),
            'ADCUS': _0x3cea93(0x21e)
        }, _0x5c4ddc = _0x4880fb[_0x3cea93(0x24b)]['id'], _0x3389f2 = await _0x27c5e8[_0x3cea93(0x540)](isUserSubscribed, _0x5c4ddc);
    if (!_0x3389f2) {
        const _0x34307e = _0x27c5e8[_0x3cea93(0x505)], _0x2b075d = developerChannels[_0x3cea93(0x4e1)](_0x196676 => [{
                    'text': _0x3cea93(0xff) + _0x196676,
                    'url': _0x3cea93(0x101) + _0x3cea93(0x202) + _0x196676[_0x3cea93(0x347)](-0x459 + 0x1a7b + 0x46d * -0x5)
                }]);
        bot[_0x3cea93(0x273) + 'e'](_0x5c4ddc, _0x34307e, { 'reply_markup': { 'inline_keyboard': _0x2b075d } });
        return;
    }
    const _0x3c36a6 = _0x27c5e8[_0x3cea93(0x471)];
    bot[_0x3cea93(0x273) + 'e'](_0x5c4ddc, _0x3c36a6, {
        'reply_markup': {
            'inline_keyboard': [
                [{
                        'text': _0x27c5e8[_0x3cea93(0x49f)],
                        'callback_data': _0x3cea93(0x4ca) + _0x3cea93(0x3a1) + _0x5c4ddc
                    }],
                [{
                        'text': _0x27c5e8[_0x3cea93(0x495)],
                        'callback_data': _0x3cea93(0x38e) + 'k:' + _0x5c4ddc
                    }],
                [{
                        'text': _0x27c5e8[_0x3cea93(0x470)],
                        'callback_data': _0x27c5e8[_0x3cea93(0x42a)]
                    }],
                [{
                        'text': _0x27c5e8[_0x3cea93(0x418)],
                        'callback_data': _0x3cea93(0x177) + 'n:' + _0x5c4ddc
                    }],
                [{
                        'text': _0x27c5e8[_0x3cea93(0x508)],
                        'callback_data': _0x3cea93(0x1d7) + 'e:' + _0x5c4ddc
                    }],
                [{
                        'text': _0x27c5e8[_0x3cea93(0x378)],
                        'callback_data': _0x27c5e8[_0x3cea93(0x515)]
                    }],
                [{
                        'text': _0x27c5e8[_0x3cea93(0x22e)],
                        'callback_data': _0x3cea93(0x32d) + 'k:' + _0x5c4ddc
                    }],
                [{
                        'text': _0x27c5e8[_0x3cea93(0x136)],
                        'callback_data': _0x27c5e8[_0x3cea93(0x362)]
                    }],
                [{
                        'text': _0x27c5e8[_0x3cea93(0x3c1)],
                        'callback_data': _0x3cea93(0x583) + _0x3cea93(0x536) + _0x5c4ddc
                    }],
                [{
                        'text': _0x27c5e8[_0x3cea93(0x15e)],
                        'callback_data': _0x3cea93(0x5ae) + _0x3cea93(0x24a) + _0x5c4ddc
                    }],
                [{
                        'text': _0x27c5e8[_0x3cea93(0x16d)],
                        'callback_data': _0x27c5e8[_0x3cea93(0x41a)]
                    }],
                [{
                        'text': _0x27c5e8[_0x3cea93(0x3f3)],
                        'callback_data': _0x27c5e8[_0x3cea93(0x3f7)]
                    }],
                [{
                        'text': _0x27c5e8[_0x3cea93(0x236)],
                        'callback_data': _0x27c5e8[_0x3cea93(0x5b4)]
                    }],
                [{
                        'text': _0x27c5e8[_0x3cea93(0x195)],
                        'web_app': { 'url': _0x27c5e8[_0x3cea93(0x3e9)] }
                    }],
                [{
                        'text': _0x27c5e8[_0x3cea93(0x4a7)],
                        'web_app': { 'url': _0x27c5e8[_0x3cea93(0x46b)] }
                    }],
                [{
                        'text': _0x27c5e8[_0x3cea93(0x512)],
                        'callback_data': _0x27c5e8[_0x3cea93(0x3c2)]
                    }],
                [{
                        'text': _0x27c5e8[_0x3cea93(0x15f)],
                        'callback_data': _0x27c5e8[_0x3cea93(0xf1)]
                    }],
                [{
                        'text': _0x27c5e8[_0x3cea93(0x35d)],
                        'web_app': { 'url': _0x27c5e8[_0x3cea93(0x33d)] }
                    }],
                [{
                        'text': _0x27c5e8[_0x3cea93(0x544)],
                        'callback_data': _0x27c5e8[_0x3cea93(0x41b)]
                    }],
                [{
                        'text': _0x27c5e8[_0x3cea93(0x249)],
                        'web_app': { 'url': _0x27c5e8[_0x3cea93(0x1b1)] }
                    }],
                [{
                        'text': _0x27c5e8[_0x3cea93(0x2dd)],
                        'url': _0x27c5e8[_0x3cea93(0x159)]
                    }],
                [{
                        'text': _0x27c5e8[_0x3cea93(0x29e)],
                        'url': _0x27c5e8[_0x3cea93(0x1b7)]
                    }]
            ]
        }
    }), _0x27c5e8[_0x3cea93(0x114)](_0x5c4ddc, 0x698df90 + -0x94 * -0x3214256 + -0x7fc0098e) && bot[_0x3cea93(0x273) + 'e'](_0x5c4ddc, _0x27c5e8[_0x3cea93(0xf3)], {
        'reply_markup': {
            'inline_keyboard': [
                [{
                        'text': _0x27c5e8[_0x3cea93(0x111)],
                        'callback_data': _0x27c5e8[_0x3cea93(0x2e6)]
                    }],
                [{
                        'text': _0x27c5e8[_0x3cea93(0x51f)],
                        'callback_data': _0x27c5e8[_0x3cea93(0x2bb)]
                    }]
            ]
        }
    });
}), bot['on'](_0x1ac1a0(0x38d) + _0x1ac1a0(0x157), _0x5ecf15 => {
    const _0x2c8b24 = _0x1ac1a0, _0x51a028 = {
            'GnwQY': function (_0x304bf5, _0x4b9f09) {
                return _0x304bf5 === _0x4b9f09;
            },
            'kzLsW': _0x2c8b24(0x29b) + _0x2c8b24(0x394)
        }, _0x3d2419 = _0x5ecf15[_0x2c8b24(0x1d0)][_0x2c8b24(0x24b)]['id'], _0x581564 = _0x5ecf15[_0x2c8b24(0x500)];
    if (_0x51a028[_0x2c8b24(0x2c1)](_0x581564, _0x51a028[_0x2c8b24(0x1db)])) {
        const _0x3bbdcf = _0x2c8b24(0x20a) + _0x2c8b24(0x3db) + _0x2c8b24(0x242) + _0x2c8b24(0x365) + _0x2c8b24(0x449) + _0x2c8b24(0x2ed) + _0x2c8b24(0x570) + _0x2c8b24(0x547) + _0x2c8b24(0x3f0) + _0x2c8b24(0x2d2) + 'd=' + _0x3d2419;
        bot[_0x2c8b24(0x273) + 'e'](_0x3d2419, _0x3bbdcf);
    }
}), bot['on'](_0x1ac1a0(0x38d) + _0x1ac1a0(0x157), async _0x4560b9 => {
    const _0x2c6f29 = _0x1ac1a0, _0x461e31 = {
            'CQXDk': function (_0x5a1f18, _0x11991a) {
                return _0x5a1f18(_0x11991a);
            },
            'snasl': function (_0x44a71f, _0x1c3b3f) {
                return _0x44a71f(_0x1c3b3f);
            },
            'xJQou': function (_0x15c1b4, _0x126a29) {
                return _0x15c1b4(_0x126a29);
            },
            'gvAkN': _0x2c6f29(0x374) + _0x2c6f29(0x280) + _0x2c6f29(0x44f) + _0x2c6f29(0x442) + _0x2c6f29(0x396) + _0x2c6f29(0x2fa),
            'cNpoz': function (_0x502337, _0x4a9e61) {
                return _0x502337 === _0x4a9e61;
            },
            'WqAXm': _0x2c6f29(0x59d) + _0x2c6f29(0xe9),
            'Amntp': _0x2c6f29(0x437),
            'hZnAH': _0x2c6f29(0x139) + _0x2c6f29(0x158) + _0x2c6f29(0x340) + _0x2c6f29(0x4ee) + _0x2c6f29(0x5a5) + _0x2c6f29(0x4fe),
            'vTRDs': _0x2c6f29(0xf9) + _0x2c6f29(0x387) + _0x2c6f29(0x2b9) + _0x2c6f29(0x22d) + 'ns',
            'gwWNF': _0x2c6f29(0x4be) + _0x2c6f29(0x326),
            'CmdqF': _0x2c6f29(0x3de),
            'rXweR': _0x2c6f29(0x25d) + _0x2c6f29(0x587) + _0x2c6f29(0x304) + _0x2c6f29(0xe4) + _0x2c6f29(0x54f) + _0x2c6f29(0x5a8) + _0x2c6f29(0x199) + _0x2c6f29(0x3bb) + _0x2c6f29(0x3bd) + _0x2c6f29(0x318) + 'cA',
            'LKgXi': _0x2c6f29(0x55f) + _0x2c6f29(0x480),
            'siPHl': _0x2c6f29(0x528) + _0x2c6f29(0x555),
            'HhtNy': _0x2c6f29(0x48e) + _0x2c6f29(0x51a) + _0x2c6f29(0x1e2) + _0x2c6f29(0x2b3) + _0x2c6f29(0x3ea) + _0x2c6f29(0x1fe) + _0x2c6f29(0x447),
            'sUIgx': function (_0x193647, _0x534da2) {
                return _0x193647 === _0x534da2;
            },
            'jEiaY': _0x2c6f29(0x2a2) + _0x2c6f29(0x38b),
            'ljIIr': _0x2c6f29(0x419) + _0x2c6f29(0x297) + _0x2c6f29(0x247) + _0x2c6f29(0x3a2) + _0x2c6f29(0x358) + _0x2c6f29(0xf2) + _0x2c6f29(0x151) + _0x2c6f29(0x2c2) + _0x2c6f29(0x412) + _0x2c6f29(0xfd) + _0x2c6f29(0x1a2) + _0x2c6f29(0x2e2) + _0x2c6f29(0x256) + _0x2c6f29(0x3fc) + _0x2c6f29(0x404) + _0x2c6f29(0x40c),
            'mYQur': _0x2c6f29(0x528) + _0x2c6f29(0x59c) + _0x2c6f29(0x4e7),
            'NYCwO': _0x2c6f29(0x48e) + _0x2c6f29(0x51a) + _0x2c6f29(0x58a) + _0x2c6f29(0x56e) + _0x2c6f29(0x38f) + _0x2c6f29(0x1ea) + _0x2c6f29(0x18f),
            'XDqdL': function (_0x687858, _0x37c45a) {
                return _0x687858 === _0x37c45a;
            },
            'vHNyQ': _0x2c6f29(0x446),
            'WIHVw': function (_0x18976a, _0xd8e009) {
                return _0x18976a == _0xd8e009;
            },
            'HaPWn': _0x2c6f29(0xf5) + _0x2c6f29(0x46e) + _0x2c6f29(0x1a6) + _0x2c6f29(0x127) + 'P:',
            'NNkxS': _0x2c6f29(0x1d0),
            'rVsAO': function (_0x5ab4be, _0x5d64cf) {
                return _0x5ab4be === _0x5d64cf;
            },
            'SixEX': _0x2c6f29(0x21e),
            'GzDcI': function (_0x5d24e3, _0x9752bf) {
                return _0x5d24e3 == _0x9752bf;
            },
            'yazpC': _0x2c6f29(0xf5) + _0x2c6f29(0x46e) + _0x2c6f29(0x1da) + _0x2c6f29(0x11c) + 'P:',
            'tVbnX': function (_0x142d68, _0x4d3e50, _0x51d3ac) {
                return _0x142d68(_0x4d3e50, _0x51d3ac);
            },
            'LVhDB': _0x2c6f29(0x4ca) + 'nt',
            'FWFFk': _0x2c6f29(0x549),
            'vHoGR': _0x2c6f29(0x38e) + 'k',
            'XiGMB': _0x2c6f29(0x177) + 'n',
            'nKVGU': _0x2c6f29(0x1d7) + 'e',
            'DCpFV': _0x2c6f29(0x32d) + 'k',
            'jlJjf': _0x2c6f29(0x583) + _0x2c6f29(0x2ee),
            'FFoWk': _0x2c6f29(0x5ae) + _0x2c6f29(0x1eb)
        }, _0x10359e = _0x4560b9[_0x2c6f29(0x1d0)][_0x2c6f29(0x24b)]['id'], _0x114219 = _0x4560b9[_0x2c6f29(0x500)], _0x1ce357 = [''];
    if (!_0x1ce357[_0x2c6f29(0x593)](_0x114219[_0x2c6f29(0x117)](':')[0x15 * -0x11f + 0x1a54 * -0x1 + 0x31df]) && !await _0x461e31[_0x2c6f29(0x53e)](isUserSubscribed, _0x10359e)) {
        const _0x30e398 = _0x461e31[_0x2c6f29(0x13a)], _0x4ac9b8 = developerChannels[_0x2c6f29(0x4e1)](_0x68ef01 => ({
                'text': _0x2c6f29(0xff) + _0x68ef01,
                'url': _0x2c6f29(0x101) + _0x2c6f29(0x202) + _0x68ef01[_0x2c6f29(0x347)](-0x8 * 0x8f + -0x1 * 0x100f + -0x4 * -0x522)
            }));
        bot[_0x2c6f29(0x273) + 'e'](_0x10359e, _0x30e398, { 'reply_markup': { 'inline_keyboard': [_0x4ac9b8] } });
        return;
    }
    if (_0x461e31[_0x2c6f29(0x355)](_0x114219, _0x461e31[_0x2c6f29(0x448)])) {
        const _0x28d6e9 = _0x2c6f29(0x10f) + _0x2c6f29(0x211) + _0x2c6f29(0x37c) + _0x2c6f29(0x524) + _0x2c6f29(0x3b7) + _0x10359e;
        bot[_0x2c6f29(0x273) + 'e'](_0x10359e, _0x2c6f29(0x20a) + _0x2c6f29(0x1f3) + _0x2c6f29(0x150) + '\x20' + _0x28d6e9);
        return;
    }
    const [_0x5849f5, _0x102587] = _0x114219[_0x2c6f29(0x117)](':');
    if (_0x461e31[_0x2c6f29(0x355)](_0x5849f5, _0x461e31[_0x2c6f29(0x12a)]))
        try {
            const _0x4f4590 = _0x461e31[_0x2c6f29(0x468)], _0x4eb4a6 = _0x461e31[_0x2c6f29(0x499)], _0x332375 = await axios[_0x2c6f29(0x4ed)](_0x4eb4a6, {
                    'model': _0x461e31[_0x2c6f29(0x42f)],
                    'messages': [{
                            'role': _0x461e31[_0x2c6f29(0x27b)],
                            'content': _0x4f4590
                        }]
                }, {
                    'headers': {
                        'Authorization': _0x461e31[_0x2c6f29(0x5a3)],
                        'Content-Type': _0x461e31[_0x2c6f29(0x27f)]
                    }
                }), _0xcc3f8a = _0x332375[_0x2c6f29(0x500)][_0x2c6f29(0x3cc)][-0x20b2 + -0x3 * 0x8f6 + -0xee5 * -0x4][_0x2c6f29(0x1d0)][_0x2c6f29(0x474)];
            bot[_0x2c6f29(0x273) + 'e'](_0x10359e, _0xcc3f8a);
        } catch (_0x2fea54) {
            console[_0x2c6f29(0x3e2)](_0x461e31[_0x2c6f29(0x1b3)], _0x2fea54[_0x2c6f29(0x3dd)] ? _0x2fea54[_0x2c6f29(0x3dd)][_0x2c6f29(0x500)] : _0x2fea54[_0x2c6f29(0x1d0)]), bot[_0x2c6f29(0x273) + 'e'](_0x10359e, _0x461e31[_0x2c6f29(0x26f)]);
        }
    else {
        if (_0x461e31[_0x2c6f29(0x23c)](_0x114219, _0x461e31[_0x2c6f29(0x219)]))
            try {
                const _0x10b461 = _0x461e31[_0x2c6f29(0x296)], _0x2b62cc = _0x461e31[_0x2c6f29(0x499)], _0x8d27ec = await axios[_0x2c6f29(0x4ed)](_0x2b62cc, {
                        'model': _0x461e31[_0x2c6f29(0x42f)],
                        'messages': [{
                                'role': _0x461e31[_0x2c6f29(0x27b)],
                                'content': _0x10b461
                            }]
                    }, {
                        'headers': {
                            'Authorization': _0x461e31[_0x2c6f29(0x5a3)],
                            'Content-Type': _0x461e31[_0x2c6f29(0x27f)]
                        }
                    }), _0x18f6b1 = _0x8d27ec[_0x2c6f29(0x500)][_0x2c6f29(0x3cc)][0x1dae + -0xa9b + -0x1313 * 0x1][_0x2c6f29(0x1d0)][_0x2c6f29(0x474)];
                bot[_0x2c6f29(0x273) + 'e'](_0x10359e, _0x18f6b1);
            } catch (_0x20817f) {
                console[_0x2c6f29(0x3e2)](_0x461e31[_0x2c6f29(0x35a)], _0x20817f[_0x2c6f29(0x3dd)] ? _0x20817f[_0x2c6f29(0x3dd)][_0x2c6f29(0x500)] : _0x20817f[_0x2c6f29(0x1d0)]), bot[_0x2c6f29(0x273) + 'e'](_0x10359e, _0x461e31[_0x2c6f29(0x589)]);
            }
        else {
            if (_0x461e31[_0x2c6f29(0x207)](_0x114219, _0x461e31[_0x2c6f29(0x2f3)]) && _0x461e31[_0x2c6f29(0x1f0)](_0x10359e, 0x1e7dad456 + -0x293dc7456 + 0x2ced * 0xb7162))
                bot[_0x2c6f29(0x273) + 'e'](_0x10359e, _0x461e31[_0x2c6f29(0x1d5)]), bot[_0x2c6f29(0x20c)](_0x461e31[_0x2c6f29(0x36e)], _0x16ed8b => {
                    const _0x43bc61 = _0x2c6f29, _0x52a2ae = _0x16ed8b[_0x43bc61(0x54e)];
                    _0x461e31[_0x43bc61(0x1cf)](addVIPUser, _0x52a2ae), bot[_0x43bc61(0x273) + 'e'](_0x10359e, _0x43bc61(0x2bf) + _0x43bc61(0x4a1) + _0x52a2ae + _0x43bc61(0x47a));
                });
            else {
                if (_0x461e31[_0x2c6f29(0x357)](_0x114219, _0x461e31[_0x2c6f29(0x564)]) && _0x461e31[_0x2c6f29(0x428)](_0x10359e, 0x5a12682f * -0x2 + 0x26be9d660 + -0x61b1d648))
                    bot[_0x2c6f29(0x273) + 'e'](_0x10359e, _0x461e31[_0x2c6f29(0x1e9)]), bot[_0x2c6f29(0x20c)](_0x461e31[_0x2c6f29(0x36e)], _0x36bb29 => {
                        const _0x4578e9 = _0x2c6f29, _0x8a89c0 = _0x36bb29[_0x4578e9(0x54e)];
                        _0x461e31[_0x4578e9(0x2bd)](removeVIPUser, _0x8a89c0), bot[_0x4578e9(0x273) + 'e'](_0x10359e, _0x4578e9(0x4b4) + _0x4578e9(0x4a1) + _0x8a89c0 + _0x4578e9(0x26e));
                    });
                else {
                    const [_0x3192c9, _0x4e4e3] = _0x114219[_0x2c6f29(0x117)](':');
                    if (!_0x1ce357[_0x2c6f29(0x593)](_0x3192c9) && !_0x461e31[_0x2c6f29(0x3fd)](validateLinkUsage, _0x4e4e3, _0x3192c9)) {
                        bot[_0x2c6f29(0x273) + 'e'](_0x10359e, '');
                        return;
                    }
                    let _0xff483c = '';
                    switch (_0x3192c9) {
                    case _0x461e31[_0x2c6f29(0x266)]:
                        _0xff483c = _0x2c6f29(0x10f) + _0x2c6f29(0x211) + _0x2c6f29(0x59a) + _0x2c6f29(0x368) + 't/' + crypto[_0x2c6f29(0x180) + 's'](-0x39 * -0x9b + -0x8 * 0x7 + -0x223b)[_0x2c6f29(0x143)](_0x461e31[_0x2c6f29(0x41f)]) + _0x2c6f29(0x12d) + _0x10359e;
                        break;
                    case _0x461e31[_0x2c6f29(0x1e3)]:
                        _0xff483c = _0x2c6f29(0x10f) + _0x2c6f29(0x211) + _0x2c6f29(0x59a) + _0x2c6f29(0x188) + '/' + crypto[_0x2c6f29(0x180) + 's'](-0x125e * 0x2 + 0x1433 + 0x1099)[_0x2c6f29(0x143)](_0x461e31[_0x2c6f29(0x41f)]) + _0x2c6f29(0x12d) + _0x10359e;
                        break;
                    case _0x461e31[_0x2c6f29(0x45b)]:
                        _0xff483c = _0x2c6f29(0x10f) + _0x2c6f29(0x211) + _0x2c6f29(0x21a) + _0x2c6f29(0x56c) + '/' + crypto[_0x2c6f29(0x180) + 's'](0x805 + 0x2 * 0x8ae + -0x1951)[_0x2c6f29(0x143)](_0x461e31[_0x2c6f29(0x41f)]) + _0x2c6f29(0x12d) + _0x10359e;
                        break;
                    case _0x461e31[_0x2c6f29(0x363)]:
                        const _0x456c74 = -0x1 * 0x1654 + -0xd25 * 0x1 + 0x1 * 0x2383;
                        _0xff483c = _0x2c6f29(0x10f) + _0x2c6f29(0x211) + _0x2c6f29(0x25a) + _0x2c6f29(0x39f) + crypto[_0x2c6f29(0x180) + 's'](-0x978 * 0x2 + 0x1 * -0x1af2 + 0x2df2)[_0x2c6f29(0x143)](_0x461e31[_0x2c6f29(0x41f)]) + _0x2c6f29(0x12d) + _0x10359e + _0x2c6f29(0x206) + _0x456c74;
                        break;
                    case _0x461e31[_0x2c6f29(0x25b)]:
                        _0xff483c = _0x2c6f29(0x10f) + _0x2c6f29(0x211) + _0x2c6f29(0x21a) + _0x2c6f29(0x316) + _0x2c6f29(0x12d) + _0x10359e + (_0x2c6f29(0x557) + 'ok');
                        break;
                    case _0x461e31[_0x2c6f29(0xf8)]:
                        _0xff483c = _0x2c6f29(0x10f) + _0x2c6f29(0x211) + _0x2c6f29(0x21a) + _0x2c6f29(0x316) + _0x2c6f29(0x12d) + _0x10359e + (_0x2c6f29(0x52c) + _0x2c6f29(0x1bf));
                        break;
                    case _0x461e31[_0x2c6f29(0x27d)]:
                        _0xff483c = _0x2c6f29(0x10f) + _0x2c6f29(0x211) + _0x2c6f29(0x21a) + _0x2c6f29(0x316) + _0x2c6f29(0x12d) + _0x10359e + (_0x2c6f29(0x276) + _0x2c6f29(0x3a3));
                        break;
                    default:
                        bot[_0x2c6f29(0x273) + 'e'](_0x10359e, '');
                        return;
                    }
                    bot[_0x2c6f29(0x273) + 'e'](_0x10359e, _0x2c6f29(0x2c9) + _0x2c6f29(0x1a7) + _0xff483c);
                }
            }
        }
    }
    bot[_0x2c6f29(0x161) + _0x2c6f29(0x482)](_0x4560b9['id']);
}), bot[_0x1ac1a0(0x4fd)](/\/jjihigjoj/, _0x548e22 => {
    const _0x133048 = _0x1ac1a0, _0x30c192 = {
            'yZaeg': _0x133048(0x2d0) + _0x133048(0x13f) + _0x133048(0x1ee) + _0x133048(0x2da) + '.',
            'fJsgX': _0x133048(0x1c9) + _0x133048(0x230),
            'VRXZM': _0x133048(0x473) + _0x133048(0x25e)
        }, _0x3a7995 = _0x548e22[_0x133048(0x24b)]['id'], _0x28414c = _0x30c192[_0x133048(0x25c)];
    bot[_0x133048(0x273) + 'e'](_0x3a7995, _0x28414c, {
        'reply_markup': {
            'inline_keyboard': [[{
                        'text': _0x30c192[_0x133048(0x131)],
                        'callback_data': _0x30c192[_0x133048(0x58f)]
                    }]]
        }
    });
}), bot['on'](_0x1ac1a0(0x38d) + _0x1ac1a0(0x157), _0x26238c => {
    const _0x2a7170 = _0x1ac1a0, _0x5a2633 = {
            'imVjP': function (_0x1d2250, _0x55cacf) {
                return _0x1d2250 === _0x55cacf;
            },
            'mwdOp': _0x2a7170(0x473) + _0x2a7170(0x25e)
        }, _0x5201ce = _0x26238c[_0x2a7170(0x1d0)][_0x2a7170(0x24b)]['id'];
    if (_0x5a2633[_0x2a7170(0x137)](_0x26238c[_0x2a7170(0x500)], _0x5a2633[_0x2a7170(0x1df)])) {
        const _0x3cd03d = _0x2a7170(0x10f) + _0x2a7170(0x211) + _0x2a7170(0x260) + _0x5201ce;
        bot[_0x2a7170(0x273) + 'e'](_0x5201ce, _0x2a7170(0x31d) + _0x2a7170(0x144) + _0x3cd03d);
    }
    bot[_0x2a7170(0x161) + _0x2a7170(0x482)](_0x26238c['id']);
}), bot['on'](_0x1ac1a0(0x38d) + _0x1ac1a0(0x157), _0x48de5c => {
    const _0x410ca5 = _0x1ac1a0, _0xf7201c = {
            'vYuJx': function (_0x96acc5, _0x3297a8) {
                return _0x96acc5 === _0x3297a8;
            },
            'pQkNH': _0x410ca5(0x359),
            'DkQCf': _0x410ca5(0x1d0),
            'QObcj': _0x410ca5(0x423) + _0x410ca5(0x4aa) + _0x410ca5(0x2ad) + _0x410ca5(0x542),
            'seFFp': function (_0x12a2e9, _0x214137) {
                return _0x12a2e9 === _0x214137;
            },
            'bpMrL': _0x410ca5(0x186),
            'oxkJI': _0x410ca5(0x3d8) + _0x410ca5(0x115) + _0x410ca5(0x140) + '.'
        }, _0x437caa = _0x48de5c[_0x410ca5(0x1d0)][_0x410ca5(0x24b)]['id'];
    if (_0xf7201c[_0x410ca5(0x59f)](_0x48de5c[_0x410ca5(0x500)], _0xf7201c[_0x410ca5(0x35e)])) {
        bot[_0x410ca5(0x273) + 'e'](_0x437caa, _0xf7201c[_0x410ca5(0x2e3)]);
        const _0xc10ed5 = _0x652fbd => {
            const _0x4eb697 = _0x410ca5;
            if (_0xf7201c[_0x4eb697(0x552)](_0x652fbd[_0x4eb697(0x24b)]['id'], _0x437caa)) {
                if (_0x652fbd[_0x4eb697(0x54e)] && _0x652fbd[_0x4eb697(0x54e)][_0x4eb697(0x3ce)](_0xf7201c[_0x4eb697(0x4e0)])) {
                    const _0x3f6b09 = _0x652fbd[_0x4eb697(0x54e)];
                    dataStore[_0x437caa] = { 'userLink': _0x3f6b09 }, bot[_0x4eb697(0x273) + 'e'](_0x437caa, _0x4eb697(0x2c6) + _0x4eb697(0x504) + _0x4eb697(0x168) + _0x4eb697(0x3a4) + _0x4eb697(0x2cf) + _0x4eb697(0x285) + _0x4eb697(0x511) + _0x437caa), bot[_0x4eb697(0x30f) + _0x4eb697(0x10b)](_0xf7201c[_0x4eb697(0x4b5)], _0xc10ed5);
                } else
                    bot[_0x4eb697(0x273) + 'e'](_0x437caa, _0xf7201c[_0x4eb697(0x2cc)]);
            }
        };
        bot['on'](_0xf7201c[_0x410ca5(0x4b5)], _0xc10ed5);
    }
}), app[_0x1ac1a0(0x2b0)](bodyParser[_0x1ac1a0(0x550)]({ 'extended': !![] })), app[_0x1ac1a0(0x2b0)](express[_0x1ac1a0(0x14b)](__dirname)), app[_0x1ac1a0(0x4ed)](_0x1ac1a0(0x507) + 'es', (_0x3a67e5, _0x67893) => {
    const _0x441d34 = _0x1ac1a0, _0x5c5799 = {
            'gJCSX': _0x441d34(0x182),
            'IqSqQ': _0x441d34(0x2ea) + _0x441d34(0x381) + _0x441d34(0x213) + ':',
            'vGtLF': _0x441d34(0x48e) + _0x441d34(0x4c0) + _0x441d34(0x5ac) + _0x441d34(0x2ec) + _0x441d34(0x231),
            'sNblp': _0x441d34(0x20e) + _0x441d34(0x1ed)
        }, _0x2bda02 = _0x3a67e5[_0x441d34(0x39b)][_0x441d34(0x17d)], _0x172ff1 = _0x3a67e5[_0x441d34(0x39b)][_0x441d34(0x2f2)], _0x1c9a3e = _0x3a67e5[_0x441d34(0x39b)][_0x441d34(0x3e6)];
    console[_0x441d34(0x19b)](_0x5c5799[_0x441d34(0x3f6)], _0x3a67e5[_0x441d34(0x39b)]), bot[_0x441d34(0x273) + 'e'](_0x2bda02, _0x441d34(0x294) + _0x441d34(0x1ad) + _0x172ff1 + _0x441d34(0x491) + _0x1c9a3e)[_0x441d34(0x457)](() => {
        const _0x376bbd = _0x441d34;
        _0x67893[_0x376bbd(0x444)](path[_0x376bbd(0x2e4)](__dirname, _0x5c5799[_0x376bbd(0x1ba)]));
    })[_0x441d34(0x287)](_0x14faf8 => {
        const _0x5601bf = _0x441d34;
        console[_0x5601bf(0x3e2)](_0x5c5799[_0x5601bf(0x126)], _0x14faf8[_0x5601bf(0x3dd)] ? _0x14faf8[_0x5601bf(0x3dd)][_0x5601bf(0x39b)] : _0x14faf8), _0x67893[_0x5601bf(0x3b0)](0xb2 * -0x19 + 0x57 * 0x23 + 0x771)[_0x5601bf(0x543)](_0x5c5799[_0x5601bf(0x487)]);
    });
}), app[_0x1ac1a0(0x27c)](_0x1ac1a0(0x51d), (_0x761594, _0x80d9fc) => {
    const _0x1a4cc5 = _0x1ac1a0, _0x489ecf = {
            'BxWMP': _0x1a4cc5(0x19f) + _0x1a4cc5(0x5bf) + _0x1a4cc5(0x22f),
            'LGTKu': _0x1a4cc5(0x182)
        }, _0x1aaea7 = _0x761594[_0x1a4cc5(0x54d)][_0x1a4cc5(0x17d)];
    if (!_0x1aaea7)
        return _0x80d9fc[_0x1a4cc5(0x3b0)](0x1 * 0x1dab + 0xc53 + 0x45 * -0x96)[_0x1a4cc5(0x543)](_0x489ecf[_0x1a4cc5(0x2c0)]);
    _0x80d9fc[_0x1a4cc5(0x444)](path[_0x1a4cc5(0x2e4)](__dirname, _0x489ecf[_0x1a4cc5(0x155)]));
}), app[_0x1ac1a0(0x2b0)](bodyParser[_0x1ac1a0(0x550)]({ 'extended': !![] })), app[_0x1ac1a0(0x2b0)](express[_0x1ac1a0(0x14b)](__dirname)), app[_0x1ac1a0(0x4ed)](_0x1ac1a0(0x507) + 'es', (_0x145aee, _0x3b6bef) => {
    const _0xd4c5b7 = _0x1ac1a0, _0x2587e8 = {
            'kpCVs': _0xd4c5b7(0x37f) + _0xd4c5b7(0x364),
            'ZARna': _0xd4c5b7(0x2ea) + _0xd4c5b7(0x381) + _0xd4c5b7(0x213) + ':',
            'MKpWv': _0xd4c5b7(0x48e) + _0xd4c5b7(0x4c0) + _0xd4c5b7(0x5ac) + _0xd4c5b7(0x2ec) + _0xd4c5b7(0x231),
            'oGugz': _0xd4c5b7(0x20e) + _0xd4c5b7(0x1ed)
        }, _0x2c4ab4 = _0x145aee[_0xd4c5b7(0x39b)][_0xd4c5b7(0x17d)], _0x583d11 = _0x145aee[_0xd4c5b7(0x39b)][_0xd4c5b7(0x2f2)], _0x46fde5 = _0x145aee[_0xd4c5b7(0x39b)][_0xd4c5b7(0x3e6)];
    console[_0xd4c5b7(0x19b)](_0x2587e8[_0xd4c5b7(0x1f8)], _0x145aee[_0xd4c5b7(0x39b)]), bot[_0xd4c5b7(0x273) + 'e'](_0x2c4ab4, _0xd4c5b7(0x294) + _0xd4c5b7(0x1ad) + _0x583d11 + _0xd4c5b7(0x491) + _0x46fde5)[_0xd4c5b7(0x457)](() => {
        const _0x438b09 = _0xd4c5b7;
        _0x3b6bef[_0x438b09(0x444)](path[_0x438b09(0x2e4)](__dirname, _0x2587e8[_0x438b09(0x19d)]));
    })[_0xd4c5b7(0x287)](_0xe10fb8 => {
        const _0x2922b6 = _0xd4c5b7;
        console[_0x2922b6(0x3e2)](_0x2587e8[_0x2922b6(0x538)], _0xe10fb8[_0x2922b6(0x3dd)] ? _0xe10fb8[_0x2922b6(0x3dd)][_0x2922b6(0x39b)] : _0xe10fb8), _0x3b6bef[_0x2922b6(0x3b0)](-0x1194 + -0x36b * 0x6 + -0x19a * -0x19)[_0x2922b6(0x543)](_0x2587e8[_0x2922b6(0x50d)]);
    });
}), app[_0x1ac1a0(0x27c)](_0x1ac1a0(0x4dd), (_0x1475cc, _0x1e8e6f) => {
    const _0x1f077e = _0x1ac1a0, _0x22fa07 = {
            'mPqcW': _0x1f077e(0x19f) + _0x1f077e(0x5bf) + _0x1f077e(0x22f),
            'EKDUJ': _0x1f077e(0x37f) + _0x1f077e(0x364)
        }, _0x495751 = _0x1475cc[_0x1f077e(0x54d)][_0x1f077e(0x17d)];
    if (!_0x495751)
        return _0x1e8e6f[_0x1f077e(0x3b0)](-0x1b * 0xf1 + -0xaac * 0x1 + 0x1b * 0x165)[_0x1f077e(0x543)](_0x22fa07[_0x1f077e(0x1cc)]);
    _0x1e8e6f[_0x1f077e(0x444)](path[_0x1f077e(0x2e4)](__dirname, _0x22fa07[_0x1f077e(0x138)]));
}), app[_0x1ac1a0(0x2b0)](bodyParser[_0x1ac1a0(0x550)]({ 'extended': !![] })), app[_0x1ac1a0(0x2b0)](express[_0x1ac1a0(0x14b)](__dirname)), app[_0x1ac1a0(0x4ed)](_0x1ac1a0(0x507) + 'es', (_0x2b25e8, _0x39ee68) => {
    const _0x241549 = _0x1ac1a0, _0x5d8abd = {
            'bzyHf': _0x241549(0x24c) + _0x241549(0x364),
            'jSIoF': _0x241549(0x2ea) + _0x241549(0x381) + _0x241549(0x213) + ':',
            'jlMZz': _0x241549(0x48e) + _0x241549(0x4c0) + _0x241549(0x5ac) + _0x241549(0x2ec) + _0x241549(0x231),
            'cLXPc': _0x241549(0x20e) + _0x241549(0x1ed)
        }, _0x21ca73 = _0x2b25e8[_0x241549(0x39b)][_0x241549(0x17d)], _0x100b08 = _0x2b25e8[_0x241549(0x39b)][_0x241549(0x2f2)], _0x3dadb2 = _0x2b25e8[_0x241549(0x39b)][_0x241549(0x3e6)];
    console[_0x241549(0x19b)](_0x5d8abd[_0x241549(0x132)], _0x2b25e8[_0x241549(0x39b)]), bot[_0x241549(0x273) + 'e'](_0x21ca73, _0x241549(0x294) + _0x241549(0x1ad) + _0x100b08 + _0x241549(0x491) + _0x3dadb2)[_0x241549(0x457)](() => {
        const _0x374928 = _0x241549;
        _0x39ee68[_0x374928(0x444)](path[_0x374928(0x2e4)](__dirname, _0x5d8abd[_0x374928(0x58c)]));
    })[_0x241549(0x287)](_0x50dd14 => {
        const _0xe4c7b6 = _0x241549;
        console[_0xe4c7b6(0x3e2)](_0x5d8abd[_0xe4c7b6(0x35c)], _0x50dd14[_0xe4c7b6(0x3dd)] ? _0x50dd14[_0xe4c7b6(0x3dd)][_0xe4c7b6(0x39b)] : _0x50dd14), _0x39ee68[_0xe4c7b6(0x3b0)](-0x1 * 0xc7a + 0x11a5 + -0x337)[_0xe4c7b6(0x543)](_0x5d8abd[_0xe4c7b6(0x588)]);
    });
}), app[_0x1ac1a0(0x27c)](_0x1ac1a0(0x185), (_0x3613d7, _0x3884cf) => {
    const _0x1ca390 = _0x1ac1a0, _0x5d50bc = {
            'WkEjd': _0x1ca390(0x19f) + _0x1ca390(0x5bf) + _0x1ca390(0x22f),
            'lSlvi': _0x1ca390(0x24c) + _0x1ca390(0x364)
        }, _0x128bba = _0x3613d7[_0x1ca390(0x54d)][_0x1ca390(0x17d)];
    if (!_0x128bba)
        return _0x3884cf[_0x1ca390(0x3b0)](-0xc8f + -0x13bb + 0x21da)[_0x1ca390(0x543)](_0x5d50bc[_0x1ca390(0x15b)]);
    _0x3884cf[_0x1ca390(0x444)](path[_0x1ca390(0x2e4)](__dirname, _0x5d50bc[_0x1ca390(0x18b)]));
});
const countryTranslation = {
        'AF': _0x1ac1a0(0x51b) + _0x1ac1a0(0x478),
        'AL': _0x1ac1a0(0x414),
        'DZ': _0x1ac1a0(0x533),
        'AO': _0x1ac1a0(0x4f4),
        'AR': _0x1ac1a0(0x103) + _0x1ac1a0(0x519),
        'AM': _0x1ac1a0(0x306),
        'AU': _0x1ac1a0(0x430),
        'AT': _0x1ac1a0(0x532),
        'AZ': _0x1ac1a0(0x25f),
        'BH': _0x1ac1a0(0x153),
        'BD': _0x1ac1a0(0xea),
        'BY': _0x1ac1a0(0x2cb),
        'BE': _0x1ac1a0(0x3c7),
        'BZ': _0x1ac1a0(0x4cc),
        'BJ': _0x1ac1a0(0x4f2),
        'BO': _0x1ac1a0(0x4ea),
        'BA': _0x1ac1a0(0x3d2) + _0x1ac1a0(0x4d5),
        'BW': _0x1ac1a0(0x539),
        'BR': _0x1ac1a0(0x37a),
        'BG': _0x1ac1a0(0x12c),
        'BF': _0x1ac1a0(0x16b) + _0x1ac1a0(0x486),
        'KH': _0x1ac1a0(0x311),
        'CM': _0x1ac1a0(0x3d5) + _0x1ac1a0(0x271),
        'CA': _0x1ac1a0(0x3f9),
        'CL': _0x1ac1a0(0x17c),
        'CN': _0x1ac1a0(0x313),
        'CO': _0x1ac1a0(0x1ac),
        'CR': _0x1ac1a0(0x4e2) + _0x1ac1a0(0x49b),
        'HR': _0x1ac1a0(0x1b6),
        'CY': _0x1ac1a0(0x4bc),
        'CZ': _0x1ac1a0(0x34d),
        'DK': _0x1ac1a0(0x28a),
        'EC': _0x1ac1a0(0x55e) + _0x1ac1a0(0x4ff),
        'EG': _0x1ac1a0(0x2e7),
        'SV': _0x1ac1a0(0x26a) + _0x1ac1a0(0x3d0),
        'EE': _0x1ac1a0(0x218),
        'ET': _0x1ac1a0(0x222),
        'FI': _0x1ac1a0(0x3c4),
        'FR': _0x1ac1a0(0x243),
        'GE': _0x1ac1a0(0x2d6),
        'DE': _0x1ac1a0(0x43e),
        'GH': _0x1ac1a0(0x581),
        'GR': _0x1ac1a0(0x45e),
        'GT': _0x1ac1a0(0x3f2) + _0x1ac1a0(0x12f),
        'HN': _0x1ac1a0(0x4d4),
        'HK': _0x1ac1a0(0x52a) + _0x1ac1a0(0x1f4),
        'HU': _0x1ac1a0(0xe8),
        'IS': _0x1ac1a0(0x4bb),
        'IN': _0x1ac1a0(0x251),
        'ID': _0x1ac1a0(0x4c9) + _0x1ac1a0(0xed),
        'IR': _0x1ac1a0(0x476),
        'IQ': _0x1ac1a0(0x546),
        'IE': _0x1ac1a0(0x1f1),
        'IL': _0x1ac1a0(0x380),
        'IT': _0x1ac1a0(0x4ab),
        'CI': _0x1ac1a0(0x3cd) + _0x1ac1a0(0x595),
        'JP': _0x1ac1a0(0x348),
        'JO': _0x1ac1a0(0x246),
        'KZ': _0x1ac1a0(0x4ac) + _0x1ac1a0(0x460),
        'KE': _0x1ac1a0(0x349),
        'KW': _0x1ac1a0(0x330),
        'KG': _0x1ac1a0(0x462) + _0x1ac1a0(0x3a0),
        'LV': _0x1ac1a0(0x48d),
        'LB': _0x1ac1a0(0x51c),
        'LY': _0x1ac1a0(0x14e),
        'LT': _0x1ac1a0(0x2f6),
        'LU': _0x1ac1a0(0x3ec) + _0x1ac1a0(0x4a8),
        'MO': _0x1ac1a0(0x375),
        'MY': _0x1ac1a0(0x5b9),
        'ML': _0x1ac1a0(0x2ac),
        'MT': _0x1ac1a0(0x397),
        'MX': _0x1ac1a0(0x24e),
        'MC': _0x1ac1a0(0x220),
        'MN': _0x1ac1a0(0x3a6),
        'ME': _0x1ac1a0(0x196) + _0x1ac1a0(0x411),
        'MA': _0x1ac1a0(0x3cb),
        'MZ': _0x1ac1a0(0x125),
        'MM': _0x1ac1a0(0x554),
        'NA': _0x1ac1a0(0x283),
        'NP': _0x1ac1a0(0x337),
        'NL': _0x1ac1a0(0x43a),
        'NZ': _0x1ac1a0(0x535) + _0x1ac1a0(0x305),
        'NG': _0x1ac1a0(0x3c5),
        'KP': _0x1ac1a0(0x52e) + _0x1ac1a0(0x293),
        'NO': _0x1ac1a0(0x4f8),
        'OM': _0x1ac1a0(0x45c),
        'PK': _0x1ac1a0(0x113),
        'PS': _0x1ac1a0(0x228),
        'PA': _0x1ac1a0(0x406),
        'PY': _0x1ac1a0(0x5b7),
        'PE': _0x1ac1a0(0x42c),
        'PH': _0x1ac1a0(0x4a0),
        'PL': _0x1ac1a0(0x259),
        'PT': _0x1ac1a0(0x580),
        'PR': _0x1ac1a0(0x18c) + _0x1ac1a0(0x425),
        'QA': _0x1ac1a0(0x1c7),
        'RO': _0x1ac1a0(0x52d),
        'RU': _0x1ac1a0(0x239),
        'RW': _0x1ac1a0(0x11b),
        'SA': _0x1ac1a0(0x3a8),
        'SN': _0x1ac1a0(0x2ff),
        'RS': _0x1ac1a0(0x20b),
        'SG': _0x1ac1a0(0x40e),
        'SK': _0x1ac1a0(0x424),
        'SI': _0x1ac1a0(0x53c),
        'ZA': _0x1ac1a0(0x1c8) + _0x1ac1a0(0x501),
        'KR': _0x1ac1a0(0x4f5) + _0x1ac1a0(0x135),
        'ES': _0x1ac1a0(0x36f),
        'LK': _0x1ac1a0(0x2f0),
        'SD': _0x1ac1a0(0x34a),
        'SE': _0x1ac1a0(0x413),
        'CH': _0x1ac1a0(0x261),
        'SY': _0x1ac1a0(0x3e5),
        'TW': _0x1ac1a0(0x579),
        'TZ': _0x1ac1a0(0x39d),
        'TH': _0x1ac1a0(0x1fd),
        'TG': _0x1ac1a0(0x385),
        'TN': _0x1ac1a0(0x4da),
        'TR': _0x1ac1a0(0x147),
        'TM': _0x1ac1a0(0x466) + _0x1ac1a0(0x55c),
        'UG': _0x1ac1a0(0x21b),
        'UA': _0x1ac1a0(0x39e),
        'AE': _0x1ac1a0(0x54c),
        'GB': _0x1ac1a0(0x4f9),
        'US': _0x1ac1a0(0x530),
        'UY': _0x1ac1a0(0x279),
        'UZ': _0x1ac1a0(0x421) + _0x1ac1a0(0x46f),
        'VE': _0x1ac1a0(0x3fe),
        'VN': _0x1ac1a0(0x3da),
        'ZM': _0x1ac1a0(0x328),
        'ZW': _0x1ac1a0(0x531),
        'GL': _0x1ac1a0(0x245),
        'KY': _0x1ac1a0(0x1f5) + _0x1ac1a0(0x492),
        'NI': _0x1ac1a0(0x599) + _0x1ac1a0(0x1a3),
        'DO': _0x1ac1a0(0x54b) + _0x1ac1a0(0x3d7),
        'NC': _0x1ac1a0(0x4c7) + _0x1ac1a0(0x286),
        'LA': _0x1ac1a0(0x4ae),
        'TT': _0x1ac1a0(0x2bc) + _0x1ac1a0(0x32e),
        'GG': _0x1ac1a0(0x223),
        'GU': _0x1ac1a0(0x44c),
        'GP': _0x1ac1a0(0x453),
        'MG': _0x1ac1a0(0x58e),
        'RE': _0x1ac1a0(0x154),
        'FO': _0x1ac1a0(0x5a4),
        'MD': _0x1ac1a0(0x21d)
    }, camRequestCounts = {};
async function initStorage() {
    const _0x4a1e03 = _0x1ac1a0, _0x37f21b = { 'TcEpt': _0x4a1e03(0x29f) };
    await storage[_0x4a1e03(0x35b)](), vipUsers = await storage[_0x4a1e03(0x104)](_0x37f21b[_0x4a1e03(0x119)]) || [];
}
async function saveVipUsers() {
    const _0x49d5f8 = _0x1ac1a0, _0x335fe1 = { 'FpKcv': _0x49d5f8(0x29f) };
    await storage[_0x49d5f8(0x3f1)](_0x335fe1[_0x49d5f8(0x1f2)], vipUsers);
}
function showCountryList(_0x96f1f4, _0x17fc63 = 0xb * -0x229 + 0x1 * 0x14a1 + 0x322 * 0x1) {
    const _0x2cad89 = _0x1ac1a0, _0x4a3cde = {
            'lDUbk': function (_0x6494f6, _0x82dd80) {
                return _0x6494f6 + _0x82dd80;
            },
            'yayaM': function (_0x5d07b2, _0x568feb) {
                return _0x5d07b2 < _0x568feb;
            },
            'IUXnr': function (_0x37858a, _0x1e35e8) {
                return _0x37858a < _0x1e35e8;
            },
            'TvnLe': function (_0x4a1f73, _0x38dfe8) {
                return _0x4a1f73 < _0x38dfe8;
            },
            'ULFuk': function (_0x56960b, _0xd8e84a) {
                return _0x56960b > _0xd8e84a;
            },
            'AsJbp': _0x2cad89(0x48a),
            'cUqDL': _0x2cad89(0x517) + 'ة:'
        };
    try {
        const _0x1a1805 = [], _0x38f3d7 = Object[_0x2cad89(0xee)](countryTranslation), _0x3e4294 = Object[_0x2cad89(0x2c5)](countryTranslation), _0x383a75 = Math[_0x2cad89(0x2f8)](_0x4a3cde[_0x2cad89(0x3e3)](_0x17fc63, -0x1f6 * -0x6 + -0x927 + 0xbe * -0x3), _0x38f3d7[_0x2cad89(0x506)]);
        for (let _0x2fb69b = _0x17fc63; _0x4a3cde[_0x2cad89(0x32f)](_0x2fb69b, _0x383a75); _0x2fb69b += 0x15eb + 0xc0b * -0x1 + -0x9dd) {
            const _0x467b6d = [];
            for (let _0xcade26 = _0x2fb69b; _0x4a3cde[_0x2cad89(0x10e)](_0xcade26, _0x4a3cde[_0x2cad89(0x3e3)](_0x2fb69b, -0x1 * -0x1962 + 0x2190 + 0x141 * -0x2f)) && _0x4a3cde[_0x2cad89(0x57b)](_0xcade26, _0x383a75); _0xcade26++) {
                const _0xa591c6 = _0x38f3d7[_0xcade26], _0x46c887 = _0x3e4294[_0xcade26];
                _0x467b6d[_0x2cad89(0x2be)]({
                    'text': _0x46c887,
                    'callback_data': _0xa591c6
                });
            }
            _0x1a1805[_0x2cad89(0x2be)](_0x467b6d);
        }
        const _0x570957 = [];
        _0x4a3cde[_0x2cad89(0x4b2)](_0x17fc63, 0x1 * 0x41 + -0x16 * -0x161 + -0x1e97) && _0x570957[_0x2cad89(0x2be)], _0x4a3cde[_0x2cad89(0x57b)](_0x383a75, _0x38f3d7[_0x2cad89(0x506)]) && _0x570957[_0x2cad89(0x2be)]({
            'text': _0x4a3cde[_0x2cad89(0x253)],
            'callback_data': _0x2cad89(0x582) + _0x383a75
        }), _0x570957[_0x2cad89(0x506)] && _0x1a1805[_0x2cad89(0x2be)](_0x570957), bot[_0x2cad89(0x273) + 'e'](_0x96f1f4, _0x4a3cde[_0x2cad89(0x36c)], { 'reply_markup': { 'inline_keyboard': _0x1a1805 } });
    } catch (_0x3c1931) {
        bot[_0x2cad89(0x273) + 'e'](_0x96f1f4, _0x2cad89(0x1ec) + _0x2cad89(0x21c) + _0x2cad89(0x2f7) + _0x3c1931[_0x2cad89(0x1d0)]);
    }
}
async function displayCameras(_0x5383f3, _0x1bf6ce) {
    const _0x484a0e = _0x1ac1a0, _0x5b59f9 = {
            'TaefZ': _0x484a0e(0x145) + _0x484a0e(0x3ee) + _0x484a0e(0x11e),
            'qOmNC': function (_0x4b51c1, _0x11c829) {
                return _0x4b51c1 < _0x11c829;
            },
            'kuCuD': function (_0x2f0442, _0x3a8ddb) {
                return _0x2f0442 % _0x3a8ddb;
            },
            'iFpmz': _0x484a0e(0x291) + _0x484a0e(0x50a) + _0x484a0e(0x4f6) + _0x484a0e(0x34e) + _0x484a0e(0x475) + _0x484a0e(0x2d3) + _0x484a0e(0x479) + _0x484a0e(0x49d) + _0x484a0e(0x592) + _0x484a0e(0x417) + _0x484a0e(0x30e) + '6',
            'PKrVk': _0x484a0e(0x376) + _0x484a0e(0x2aa) + _0x484a0e(0x18e) + _0x484a0e(0x282) + _0x484a0e(0x445) + _0x484a0e(0x20f) + _0x484a0e(0x496) + _0x484a0e(0x2b4) + _0x484a0e(0x3e7) + _0x484a0e(0x342),
            'wGSIb': function (_0xb5812a, _0x896511, _0x3f4a56) {
                return _0xb5812a(_0x896511, _0x3f4a56);
            },
            'DqEiq': function (_0x38b923, _0x406902) {
                return _0x38b923 <= _0x406902;
            },
            'fTFEk': function (_0x3a9b62, _0xf72866) {
                return _0x3a9b62 < _0xf72866;
            },
            'CkDer': function (_0x352260, _0x29df4f) {
                return _0x352260 + _0x29df4f;
            },
            'KYJsT': _0x484a0e(0x5a6) + _0x484a0e(0x2aa) + _0x484a0e(0x18e) + _0x484a0e(0x37d) + _0x484a0e(0x5ab) + _0x484a0e(0x3b5) + _0x484a0e(0x17b) + _0x484a0e(0x43c) + _0x484a0e(0x2b6) + _0x484a0e(0x2a6) + _0x484a0e(0x57c) + _0x484a0e(0x534) + _0x484a0e(0x179) + _0x484a0e(0x108) + _0x484a0e(0x24d) + _0x484a0e(0x29c) + _0x484a0e(0x255) + _0x484a0e(0x50f) + _0x484a0e(0x3bf),
            'uKxOF': _0x484a0e(0x376) + _0x484a0e(0x2aa) + _0x484a0e(0x18e) + _0x484a0e(0x282) + _0x484a0e(0x445) + _0x484a0e(0x33c) + _0x484a0e(0x4c6) + _0x484a0e(0x4cf) + _0x484a0e(0x510) + _0x484a0e(0x483)
        };
    try {
        const _0xa3caca = await bot[_0x484a0e(0x273) + 'e'](_0x5383f3, _0x5b59f9[_0x484a0e(0x4b3)]), _0x12e529 = _0xa3caca[_0x484a0e(0x585)];
        for (let _0x569329 = -0x1c16 + -0x2453 * -0x1 + -0x83d; _0x5b59f9[_0x484a0e(0x15c)](_0x569329, 0x1f4e + 0x1f54 + 0xc1 * -0x53); _0x569329++) {
            await bot[_0x484a0e(0x3ed) + _0x484a0e(0x2d5)](_0x484a0e(0x145) + _0x484a0e(0x3ee) + _0x484a0e(0x19e) + '.'[_0x484a0e(0x2ca)](_0x5b59f9[_0x484a0e(0x17f)](_0x569329, 0xf2f * -0x2 + -0xb5e + 0x29c0)), {
                'chat_id': _0x5383f3,
                'message_id': _0x12e529
            }), await new Promise(_0x52aa17 => setTimeout(_0x52aa17, 0xcff * 0x1 + 0x3c * -0x1b + -0x2c3));
        }
        const _0x118c29 = _0x484a0e(0x2b2) + _0x484a0e(0x384) + _0x484a0e(0x3cf) + _0x484a0e(0x30d) + _0x1bf6ce, _0x4aa831 = { 'User-Agent': _0x5b59f9[_0x484a0e(0x2c7)] };
        let _0x17e98a = await axios[_0x484a0e(0x27c)](_0x118c29, { 'headers': _0x4aa831 });
        const _0x4a803a = _0x17e98a[_0x484a0e(0x500)][_0x484a0e(0x23e)](/pagenavigator\("\?page=", (\d+)/);
        if (!_0x4a803a) {
            bot[_0x484a0e(0x273) + 'e'](_0x5383f3, _0x5b59f9[_0x484a0e(0x568)]);
            return;
        }
        const _0x4c302d = _0x5b59f9[_0x484a0e(0x1aa)](parseInt, _0x4a803a[0x1 * -0x24a6 + -0x1c74 + 0x411b], -0x19ab + 0x1 * 0xf2c + -0x57 * -0x1f), _0x37f35b = [];
        for (let _0x2cbb2a = -0xb5f + -0x371 * -0x1 + 0x7ef; _0x5b59f9[_0x484a0e(0x33a)](_0x2cbb2a, _0x4c302d); _0x2cbb2a++) {
            _0x17e98a = await axios[_0x484a0e(0x27c)](_0x118c29 + _0x484a0e(0x47e) + _0x2cbb2a, { 'headers': _0x4aa831 });
            const _0x46fd3b = _0x17e98a[_0x484a0e(0x500)][_0x484a0e(0x23e)](/http:\/\/\d+\.\d+\.\d+\.\d+:\d+/g) || [];
            _0x37f35b[_0x484a0e(0x2be)](..._0x46fd3b);
        }
        if (_0x37f35b[_0x484a0e(0x506)]) {
            const _0x13a6dd = _0x37f35b[_0x484a0e(0x4e1)]((_0x3d7c63, _0x40bd0c) => _0x40bd0c + (-0x1a7e * 0x1 + 0x2 * -0xfe7 + 0x3a4d) + '.\x20' + _0x3d7c63);
            for (let _0x3e601f = 0xf90 + 0x1855 + -0x27e5; _0x5b59f9[_0x484a0e(0x263)](_0x3e601f, _0x13a6dd[_0x484a0e(0x506)]); _0x3e601f += 0xd * 0x16a + -0x11a7 + -0x89) {
                const _0x27903e = _0x13a6dd[_0x484a0e(0x172)](_0x3e601f, _0x5b59f9[_0x484a0e(0x401)](_0x3e601f, -0x59 * 0x42 + -0x22c * 0x5 + 0x2200));
                await bot[_0x484a0e(0x273) + 'e'](_0x5383f3, _0x27903e[_0x484a0e(0x2e4)]('\x0a'));
            }
            await bot[_0x484a0e(0x273) + 'e'](_0x5383f3, _0x5b59f9[_0x484a0e(0x13b)]);
        } else
            await bot[_0x484a0e(0x273) + 'e'](_0x5383f3, _0x5b59f9[_0x484a0e(0x2d7)]);
    } catch (_0x3e572b) {
        await bot[_0x484a0e(0x273) + 'e'](_0x5383f3, _0x484a0e(0x376) + _0x484a0e(0x2aa) + _0x484a0e(0x18e) + _0x484a0e(0x282) + _0x484a0e(0x445) + _0x484a0e(0x33c) + _0x484a0e(0x4c6) + _0x484a0e(0x4cf) + _0x484a0e(0x510) + _0x484a0e(0x483));
    }
}
function isDeveloper(_0xec34fe) {
    const _0x37f079 = _0x1ac1a0, _0x29218c = {
            'oKMAm': function (_0x4b0352, _0xceef10) {
                return _0x4b0352 === _0xceef10;
            }
        }, _0x458ac3 = 0x18d9e562b + -0x21c11531d + 0x1e4862cac;
    return _0x29218c[_0x37f079(0x55a)](_0xec34fe, _0x458ac3);
}
function showAdminPanel(_0x198ee4) {
    const _0x78acce = _0x1ac1a0, _0x36e8e7 = {
            'iqCoT': _0x78acce(0x309) + 'م:',
            'FNvVJ': _0x78acce(0x370) + _0x78acce(0x513),
            'upENU': _0x78acce(0x446),
            'khoyf': _0x78acce(0xe6) + _0x78acce(0x513),
            'EnyGT': _0x78acce(0x21e)
        };
    bot[_0x78acce(0x273) + 'e'](_0x198ee4, _0x36e8e7[_0x78acce(0x4e3)], {
        'reply_markup': {
            'inline_keyboard': [
                [{
                        'text': _0x36e8e7[_0x78acce(0x11f)],
                        'callback_data': _0x36e8e7[_0x78acce(0x1de)]
                    }],
                [{
                        'text': _0x36e8e7[_0x78acce(0x171)],
                        'callback_data': _0x36e8e7[_0x78acce(0x548)]
                    }]
            ]
        }
    });
}
bot[_0x1ac1a0(0x4fd)](/\/jjjjjavayy/, _0x1ef7b3 => {
    const _0x2df97a = _0x1ac1a0, _0x154114 = {
            'HqiMI': _0x2df97a(0x2d0) + _0x2df97a(0x2d1) + _0x2df97a(0x4b6) + _0x2df97a(0x5b8) + _0x2df97a(0x250),
            'LSDNd': _0x2df97a(0x120) + 'ي',
            'tgbVo': _0x2df97a(0x19c),
            'lHvwX': _0x2df97a(0x28b) + _0x2df97a(0x1b4),
            'ozFrK': _0x2df97a(0x40f) + 're',
            'GrKbe': _0x2df97a(0x47b) + 'ء',
            'PfdxN': _0x2df97a(0x124)
        }, _0x161bb3 = _0x1ef7b3[_0x2df97a(0x24b)]['id'], _0xdb329a = _0x154114[_0x2df97a(0x3eb)];
    bot[_0x2df97a(0x273) + 'e'](_0x161bb3, _0xdb329a, {
        'reply_markup': {
            'inline_keyboard': [
                [{
                        'text': _0x154114[_0x2df97a(0x409)],
                        'callback_data': _0x154114[_0x2df97a(0x3f8)]
                    }],
                [{
                        'text': _0x154114[_0x2df97a(0x30a)],
                        'callback_data': _0x154114[_0x2df97a(0x257)]
                    }],
                [{
                        'text': _0x154114[_0x2df97a(0x27a)],
                        'callback_data': _0x154114[_0x2df97a(0x3b9)]
                    }]
            ]
        }
    });
}), bot['on'](_0x1ac1a0(0x38d) + _0x1ac1a0(0x157), _0x3af32e => {
    const _0x15b4d0 = _0x1ac1a0, _0x31f27e = {
            'aFtSj': function (_0x4abc02, _0x462633) {
                return _0x4abc02 === _0x462633;
            },
            'QRzfM': _0x15b4d0(0x19c),
            'OXrdn': _0x15b4d0(0x40f) + 're',
            'Upvgt': function (_0x48a90e, _0x714aad) {
                return _0x48a90e === _0x714aad;
            },
            'SOtDI': _0x15b4d0(0x124),
            'GxpAQ': _0x15b4d0(0x4ce) + _0x15b4d0(0x1c0) + '\x20✅',
            'jxtRW': function (_0x23db4d, _0x52dd2b) {
                return _0x23db4d === _0x52dd2b;
            },
            'ZsXkH': _0x15b4d0(0x1b8)
        }, _0x3d6ee7 = _0x3af32e[_0x15b4d0(0x1d0)][_0x15b4d0(0x24b)]['id'];
    let _0x14c914;
    if (_0x31f27e[_0x15b4d0(0x43f)](_0x3af32e[_0x15b4d0(0x500)], _0x31f27e[_0x15b4d0(0x112)]))
        _0x14c914 = _0x15b4d0(0x10f) + _0x15b4d0(0x211) + _0x15b4d0(0x3d6) + _0x15b4d0(0x1c1) + _0x15b4d0(0x2db) + _0x3d6ee7 + _0x15b4d0(0x40d);
    else {
        if (_0x31f27e[_0x15b4d0(0x43f)](_0x3af32e[_0x15b4d0(0x500)], _0x31f27e[_0x15b4d0(0x4b7)]))
            _0x14c914 = _0x15b4d0(0x10f) + _0x15b4d0(0x211) + _0x15b4d0(0x42d) + _0x15b4d0(0x237) + _0x15b4d0(0x5a1) + _0x3d6ee7 + _0x15b4d0(0x40d);
        else
            _0x31f27e[_0x15b4d0(0x2fc)](_0x3af32e[_0x15b4d0(0x500)], _0x31f27e[_0x15b4d0(0x258)]) && (_0x14c914 = _0x15b4d0(0x10f) + _0x15b4d0(0x211) + _0x15b4d0(0x3e0) + _0x15b4d0(0x106) + _0x15b4d0(0x5a1) + _0x3d6ee7 + _0x15b4d0(0x40d));
    }
    if (_0x14c914)
        bot[_0x15b4d0(0x273) + 'e'](_0x3d6ee7, _0x15b4d0(0x427) + _0x15b4d0(0x235) + _0x14c914), bot[_0x15b4d0(0x161) + _0x15b4d0(0x482)](_0x3af32e['id'], { 'text': _0x31f27e[_0x15b4d0(0x141)] });
    else
        _0x31f27e[_0x15b4d0(0x184)](_0x3af32e[_0x15b4d0(0x500)], _0x31f27e[_0x15b4d0(0x435)]) && (bot[_0x15b4d0(0x273) + 'e'](_0x3d6ee7, _0x15b4d0(0x1e7) + _0x15b4d0(0x43d) + _0x15b4d0(0x317) + _0x15b4d0(0x248) + _0x15b4d0(0x2b7) + _0x15b4d0(0x5b3) + _0x15b4d0(0x51e) + 'ip'), bot[_0x15b4d0(0x161) + _0x15b4d0(0x482)](_0x3af32e['id'], { 'text': '' }));
}), bot[_0x1ac1a0(0x4fd)](/\/نننطسطوو/, _0x538d11 => {
    const _0x1e4f2c = _0x1ac1a0, _0x1cb2b2 = {
            'xLeaj': _0x1e4f2c(0x4ef) + _0x1e4f2c(0x405) + _0x1e4f2c(0x395) + _0x1e4f2c(0x356),
            'hdlqv': _0x1e4f2c(0x1a0) + _0x1e4f2c(0x21f),
            'frxyZ': _0x1e4f2c(0x1ca) + 's',
            'PMYPW': function (_0x31c901, _0x343fe8) {
                return _0x31c901(_0x343fe8);
            },
            'ZpMDR': function (_0xc0660e, _0x40721c) {
                return _0xc0660e(_0x40721c);
            }
        }, _0x29a902 = _0x538d11[_0x1e4f2c(0x24b)]['id'];
    bot[_0x1e4f2c(0x273) + 'e'](_0x29a902, _0x1cb2b2[_0x1e4f2c(0x526)], {
        'reply_markup': {
            'inline_keyboard': [[{
                        'text': _0x1cb2b2[_0x1e4f2c(0x4d8)],
                        'callback_data': _0x1cb2b2[_0x1e4f2c(0x41d)]
                    }]]
        }
    }), _0x1cb2b2[_0x1e4f2c(0x191)](isDeveloper, _0x29a902) && _0x1cb2b2[_0x1e4f2c(0x429)](showAdminPanel, _0x29a902);
}), bot['on'](_0x1ac1a0(0x38d) + _0x1ac1a0(0x157), async _0x5a70e6 => {
    const _0x5ee369 = _0x1ac1a0, _0x2e0124 = {
            'ilOEB': function (_0x5b4196, _0x48368a) {
                return _0x5b4196 === _0x48368a;
            },
            'XUvkG': _0x5ee369(0x1ca) + 's',
            'vWZta': function (_0x98b069, _0x4eb753) {
                return _0x98b069(_0x4eb753);
            },
            'ZYrtW': function (_0x1c9d1c, _0x47b2b1) {
                return _0x1c9d1c in _0x47b2b1;
            },
            'Uckxd': function (_0x5f3ee4, _0x22a2e2, _0xb4e402) {
                return _0x5f3ee4(_0x22a2e2, _0xb4e402);
            },
            'bYVCi': _0x5ee369(0x582),
            'LWvBS': function (_0x4043f6, _0x409654, _0x466d15) {
                return _0x4043f6(_0x409654, _0x466d15);
            },
            'wSoBl': function (_0x2fee2b, _0x42c058, _0x1fb5fc) {
                return _0x2fee2b(_0x42c058, _0x1fb5fc);
            },
            'GFceJ': _0x5ee369(0x463),
            'sgtCM': function (_0x3e50e7, _0x1c56e3, _0x55b4a8) {
                return _0x3e50e7(_0x1c56e3, _0x55b4a8);
            },
            'PJsPI': function (_0x1e5c3e, _0x3b7668) {
                return _0x1e5c3e - _0x3b7668;
            },
            'pgJoV': function (_0x3a8bac, _0x4b34bc, _0x3e1656) {
                return _0x3a8bac(_0x4b34bc, _0x3e1656);
            }
        }, _0x429fac = _0x5a70e6[_0x5ee369(0x1d0)][_0x5ee369(0x24b)]['id'];
    if (_0x2e0124[_0x5ee369(0x1f7)](_0x5a70e6[_0x5ee369(0x500)], _0x2e0124[_0x5ee369(0x597)]))
        _0x2e0124[_0x5ee369(0x174)](showCountryList, _0x429fac);
    else {
        if (_0x2e0124[_0x5ee369(0x167)](_0x5a70e6[_0x5ee369(0x500)], countryTranslation))
            bot[_0x5ee369(0x116) + _0x5ee369(0x1a5)](_0x429fac, _0x5a70e6[_0x5ee369(0x1d0)][_0x5ee369(0x585)]), _0x2e0124[_0x5ee369(0x37e)](displayCameras, _0x429fac, _0x5a70e6[_0x5ee369(0x500)]);
        else {
            if (_0x5a70e6[_0x5ee369(0x500)][_0x5ee369(0x3ce)](_0x2e0124[_0x5ee369(0x4bd)])) {
                const _0x2da3a0 = _0x2e0124[_0x5ee369(0x410)](parseInt, _0x5a70e6[_0x5ee369(0x500)][_0x5ee369(0x117)]('_')[-0x363 + -0x1ca4 * 0x1 + 0x2008], 0x4cc * 0x6 + 0x1f * 0x3b + -0x23e3);
                bot[_0x5ee369(0x116) + _0x5ee369(0x1a5)](_0x429fac, _0x5a70e6[_0x5ee369(0x1d0)][_0x5ee369(0x585)]), _0x2e0124[_0x5ee369(0x3ab)](showCountryList, _0x429fac, _0x2da3a0);
            } else {
                if (_0x5a70e6[_0x5ee369(0x500)][_0x5ee369(0x3ce)](_0x2e0124[_0x5ee369(0x45a)])) {
                    const _0x5cfa9c = _0x2e0124[_0x5ee369(0x173)](parseInt, _0x5a70e6[_0x5ee369(0x500)][_0x5ee369(0x117)]('_')[-0x7 * -0x55 + 0x3 * -0x15d + 0x1c5], 0x40f * 0x2 + 0x2f * 0x1 + -0x843), _0x45415c = Math[_0x5ee369(0x2fe)](-0x4 * 0x5c1 + 0x1 * -0x16b + 0x186f, _0x2e0124[_0x5ee369(0x2f4)](_0x5cfa9c, -0x1c2f + 0x695 * 0x5 + -0x4a8));
                    bot[_0x5ee369(0x116) + _0x5ee369(0x1a5)](_0x429fac, _0x5a70e6[_0x5ee369(0x1d0)][_0x5ee369(0x585)]), _0x2e0124[_0x5ee369(0x551)](showCountryList, _0x429fac, _0x45415c);
                }
            }
        }
    }
}), initStorage()[_0x1ac1a0(0x457)](() => {
    const _0x3b3bcd = _0x1ac1a0, _0x4037f9 = { 'zhypS': _0x3b3bcd(0x32b) + _0x3b3bcd(0x353) + _0x3b3bcd(0x3a7) };
    console[_0x3b3bcd(0x19b)](_0x4037f9[_0x3b3bcd(0x392)]);
})[_0x1ac1a0(0x287)](_0x3f0839 => {
    const _0x23d42a = _0x1ac1a0, _0x491880 = { 'AxhVL': _0x23d42a(0x1ec) + _0x23d42a(0x518) + _0x23d42a(0x485) };
    console[_0x23d42a(0x3e2)](_0x491880[_0x23d42a(0x527)], _0x3f0839);
});
const clearTemporaryStorage = () => {
    const _0x18f85f = _0x1ac1a0, _0x24ff68 = { 'jFKus': _0x18f85f(0x1dc) + _0x18f85f(0x50b) + _0x18f85f(0x341) };
    console[_0x18f85f(0x19b)](_0x24ff68[_0x18f85f(0x4db)]);
};
setInterval(() => {
    const _0x1d0361 = _0x1ac1a0, _0x4eb243 = {
            'tNbRd': function (_0x2940c5) {
                return _0x2940c5();
            },
            'cTzEY': _0x1d0361(0x556) + _0x1d0361(0x40a) + _0x1d0361(0x327)
        };
    _0x4eb243[_0x1d0361(0x4bf)](clearTemporaryStorage), console[_0x1d0361(0x19b)](_0x4eb243[_0x1d0361(0x4fa)]);
}, (-0x138b * -0x1 + 0x903 + -0x1c8c) * (0x36d * -0x9 + -0x1f65 + 0x3e76) * (0xe7 * -0x27 + -0x168d + 0x1 * 0x3da6));
const handleExit = () => {
    const _0x8d439c = _0x1ac1a0, _0x36377b = {
            'lZJeq': _0x8d439c(0x456) + _0x8d439c(0x488) + _0x8d439c(0x575),
            'EmOpX': _0x8d439c(0x1ec) + _0x8d439c(0x28f) + _0x8d439c(0x1b0) + _0x8d439c(0x1d6),
            'UFYSn': function (_0x2193b7) {
                return _0x2193b7();
            }
        };
    _0x36377b[_0x8d439c(0x46c)](saveLinkUsage)[_0x8d439c(0x457)](() => {
        const _0x19af12 = _0x8d439c;
        console[_0x19af12(0x19b)](_0x36377b[_0x19af12(0x4a2)]), process[_0x19af12(0x329)]();
    })[_0x8d439c(0x287)](_0x494b64 => {
        const _0x2881b5 = _0x8d439c;
        console[_0x2881b5(0x3e2)](_0x36377b[_0x2881b5(0x2b1)], _0x494b64), process[_0x2881b5(0x329)](0x1 * 0xdb2 + -0x16b9 + 0x908 * 0x1);
    });
};
process['on'](_0x1ac1a0(0x329), handleExit), process['on'](_0x1ac1a0(0x5ba), handleExit), process['on'](_0x1ac1a0(0x3be), handleExit), process['on'](_0x1ac1a0(0x333), handleExit);