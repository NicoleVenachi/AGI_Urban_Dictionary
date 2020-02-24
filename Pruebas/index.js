var client = require('ari-client');
client.connect('http://127.0.0.1:8088', 'asterisk', 'asterisk')
  .then(function (ari) {
    var channel = ari.Channel();
    channel.on('StasisStart', function (event, channel) {});
    channel.on('ChannelDtmfReceived', function (event, channel) {});
    channel.originate({endpoint: 'PJSIP/101', app: 'application', appArgs: 'dialed'})
      .then(function (channel) {})
      .catch(function (err) {});

    var playback = ari.Playback();
    channel.play({media: 'sound:hello-world'}, playback, function (err, playback) {});
  })
  .catch(function (err) {});
