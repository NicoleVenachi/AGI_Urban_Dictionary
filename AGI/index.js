require('agi').createServer(function(context) {
  //context is a new instance of agi.Context for each new agi session
  //immedately after asterisk connects to the node process
  context.on('variables', function(vars) {
    console.log('received new call from: ' + vars.agi_callerid + ' with uniqueid: ' + vars.agi_uniqueid);
    context.exec('ANSWER', function(err, res) {
    //the channel is now answered
  });

  context.exec('RecieveFax', '/tmp/myfax.tif', function(err, res) {
    //fax has been recieved by asterisk and written to /tmp/myfax.tif
  });
  context.hangup(function(err, res) {
  //the channel has now been hungup.
  });
  });
}).listen(3000);
