var client = require('ari-client');
client.connect(url, username, password)
  .then(function (ari) {})
  .catch(function (err) {});

var channel = ari.Channel();
channel.on('StasisStart', function (event, channel) {});
channel.on('ChannelDtmfReceived', function (event, channel) {});
channel.originate({endpoint: 'PJSIP/1000', app: 'application', appArgs: 'dialed'})
  .then(function (channel) {})
  .catch(function (err) {});

var playback = ari.Playback();
channel.play({media: 'sound:hello-world'}, playback, function (err, playback) {});
