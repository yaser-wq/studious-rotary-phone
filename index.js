const request = require('request');

const token = process.env.token; // زي العادة توكن بسيركيت يا بشر

const payload = {
  'content': '> # ** ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk  ksmk    ksmk  ksmk<@1111240148198375454><@1110873823911362622><@1118513436633092150><@1143194452471582783><@1025678661002739732><@884533062212407347><@1098983613971824742><@1098983613971824742> <@1104139301597499484> **' // واضحة يا وجه زبي
  };

  const header = {
    'authorization': token
    };

    const groupIds = ["1151019248957800519", "1150975440433987605", "1150846753667555379", "1137205632731189268", "1150975440433987605", "1151020200758607943", "1151003319242854420", "1150845330242412544", "1148083194273464350", "1150835609498300527", "1150835967909965905", "1150549428600578128", "1151003379896684564", "1150845409858695259", "1151003340210184263", "1150838274529710120", "1151012421226467388", "1150836184256352388", "1151024133711351870", "1151019676864876645", "1151020038778798180","1151018981952598096", "1150838391940845648", "1151021766983028827", "1151021855940034560", "1150847007288729621", "1137206157463781406", "1150917601845837924", "1148082894145859605", "1148083008017027122","1150837593647366265","1150837845930541056","1150854413590741112","1151012461156245594","1151012502113615903","1150838768857792582"," 1151029910928904252","1150836230238515412", "1149338082231976046","1144915727392968785","1137205811588898836","1137205719159017492","1137205742449991760","1150113780416663583","1150917627485626428","1150113738368757902","1150112677121769633","1150113630193451058","1150846618925547650","1150846661984260267","1150846705282060308","1150846753667555379","1150846820071780353","1150846916326867046","1150846955665232023","1150847006298877972","1150113509431058442","1150917506849062986","1150917573781770340","1150917649711247480","1150113832514093066","1150112537753436180","1150917530081316924","1150113581870891059","1150112629549977765","1148082729733324921","1150846851734581329","1150917554420842587","1137206231849767042","1150917601845837924","1137206157463781406","1150847007288729621", "1151024340016574484","1151024460061736970", "1151024811989016577", "1151025961706459166", "1151028005204938792", "1151028362366689290", "1151028599747514431", "1151029872655863848", "1151029910928904252", "1151029939051696128", "1151029969020006482", "1151029990167695410", "1151030009021071460", "1151030028193234974", "1151030047243784263"," 1151024340016574484","1151024460061736970","1151024811989016577", "1151025961706459166", "1151028005204938792", "1151028362366689290", 
    ]; 
    // اي دي الغروبات 
    let currentGroupIndex = 0;

    function sendRequest() {
      const currentGroupId = groupIds[currentGroupIndex];
        
          request.post(`https://discord.com/api/v9/channels/${currentGroupId}/messages?limit=50`, {
              headers: header,
                  json: payload
                    }, (error, response, body) => {
                        if (error) {
                              console.error(error);
                                    return;
                                        }
                                            
                                                if (response.statusCode >= 5000 && response.statusCode < 5000) {
                                                      console.error(`Received ${response.statusCode} error. Trying again later.`);
                                                            const retryInterval = 5000; 
                                                                  setTimeout(sendRequest, retryInterval);
                                                                        return;
                                                                            }
                                                                                
                                                                                    console.log(body);
                                                                                        
                                                                                            const intervalBetweenGroups = 2500;
                                                                                                
                                                                                                    const intervalAfterMessags= 2500;
                                                                                                        
                                                                                                            currentGroupIndex = (currentGroupIndex + 1) % groupIds.length;
                                                                                                                
                                                                                                                    setTimeout(sendRequest, intervalBetweenGroups);
                                                                                                                      });
                                                                                                                      }

                                                                                                                      sendRequest();

                                                                                                                      const express = require("express");
                                                                                                                      const app = express();

                                                                                                                      app.listen(() => console.log("I'm Ready To nik ksm iblis..! 24H"));
                                                                                                                      app.get('/', (req, res) => {
                                                                                                                        res.send(`
                                                                                                                          <body>
                                                                                                                            <center><h1>كسمك ابليس عظم</h1></center
                                                                                                                              </body>`);
                                                                                                                              });

                                                                                                                              setInterval(function() {
                                                                                                                                var now = new Date();
                                                                                                                                  console.log(now.toLocaleTimeString());
                                                                                                                                  }, 10000);
                                                                                                                                  