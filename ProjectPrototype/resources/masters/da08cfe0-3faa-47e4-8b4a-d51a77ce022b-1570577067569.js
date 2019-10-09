jQuery("#simulation")
  .on("click", ".m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#m-da08cfe0-Rectangle_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_115 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_115": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_12 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_12": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_113 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_113": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_116 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_116": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_3 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_3": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_114 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_114": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_111 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_111": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_10 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_10": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_112 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_112": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_3 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_3": {
                      "attributes-ie": {
                        "-pie-background": "#EFF8FC",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-da08cfe0-Rectangle_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_115 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_115": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_12 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_12": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_113 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_113": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_116 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_116": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_3 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_3": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_114 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_114": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_111 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_111": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_10 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_10": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_112 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_112": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_10 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_10": {
                      "attributes-ie": {
                        "-pie-background": "#EFF8FC",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-da08cfe0-Rectangle_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_115 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_115": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_12 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_12": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_113 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_113": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_116 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_116": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_3 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_3": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_114 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_114": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_111 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_111": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_10 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_10": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_112 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_112": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_12 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_12": {
                      "attributes-ie": {
                        "-pie-background": "#EFF8FC",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-da08cfe0-Rectangle_111")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_115 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_115": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_12 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_12": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_113 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_113": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_116 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_116": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_3 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_3": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_114 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_114": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_111 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_111": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_10 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_10": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_112 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_112": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_111 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_111": {
                      "attributes-ie": {
                        "-pie-background": "#EFF8FC",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-da08cfe0-Rectangle_112")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_115 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_115": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_12 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_12": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_113 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_113": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_116 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_116": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_3 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_3": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_114 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_114": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_111 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_111": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_10 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_10": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_112 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_112": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_112 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_112": {
                      "attributes-ie": {
                        "-pie-background": "#EFF8FC",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-da08cfe0-Rectangle_113")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_115 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_115": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_12 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_12": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_113 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_113": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_116 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_116": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_3 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_3": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_114 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_114": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_111 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_111": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_10 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_10": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_112 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_112": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_113 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_113": {
                      "attributes-ie": {
                        "-pie-background": "#EFF8FC",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-da08cfe0-Rectangle_114")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_115 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_115": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_12 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_12": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_113 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_113": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_116 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_116": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_3 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_3": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_114 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_114": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_111 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_111": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_10 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_10": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_112 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_112": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_114 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_114": {
                      "attributes-ie": {
                        "-pie-background": "#EFF8FC",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-da08cfe0-Rectangle_115")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_115 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_115": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_12 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_12": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_113 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_113": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_116 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_116": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_3 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_3": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_114 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_114": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_111 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_111": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_10 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_10": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_112 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_112": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_115 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_115": {
                      "attributes-ie": {
                        "-pie-background": "#EFF8FC",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-da08cfe0-Rectangle_116")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_115 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_115": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_12 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_12": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_113 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_113": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_116 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_116": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_3 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_3": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_114 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_114": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_111 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_111": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_10 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_10": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_112 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_112": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_116 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_116": {
                      "attributes-ie": {
                        "-pie-background": "#EFF8FC",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-da08cfe0-Rectangle_117")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_115 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_115": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_117 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_117": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_12 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_12": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_113 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_113": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_116 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_116": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_3 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_3": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_114 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_114": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_111 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_111": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_10 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_10": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_112 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_112": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_117 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC"
                      }
                    }
                  },{
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Rectangle_117": {
                      "attributes-ie": {
                        "-pie-background": "#EFF8FC",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-da08cfe0-CloseBtn_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#m-da08cfe0-AddRejectionReason" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-da08cfe0-Btn_21")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#m-da08cfe0-AddRejectionReason" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#m-da08cfe0-MessageDiscard" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-da08cfe0-Image_56")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "New" ],
                    "value": "True"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-da08cfe0-DiscardBtn_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#m-da08cfe0-MessageDiscard" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d20144f7-473d-43e3-815f-0819f318e179"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-da08cfe0-Image_73")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#m-da08cfe0-MessageDiscard" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#m-da08cfe0-CancelBtn_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#m-da08cfe0-MessageDiscard" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusin", ".m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#m-da08cfe0-Input_61")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Input_61 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "2px",
                        "border-top-style": "none",
                        "border-top-color": "#1E82F7",
                        "border-right-width": "2px",
                        "border-right-style": "none",
                        "border-right-color": "#1E82F7",
                        "border-bottom-width": "2px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#1E82F7",
                        "border-left-width": "2px",
                        "border-left-style": "none",
                        "border-left-color": "#1E82F7",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#m-da08cfe0-Input_61",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#m-da08cfe0-Input_61" ],
                    "value": " "
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#m-da08cfe0-Rectangle_106" ],
                    "effect": {
                      "type": "slide",
                      "easing": "swing",
                      "duration": 100,
                      "direction": "down"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusout", ".m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#m-da08cfe0-Input_61")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-da08cfe0-3faa-47e4-8b4a-d51a77ce022b #m-da08cfe0-Input_61 > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "none",
                        "border-top-color": "#DCDCDC",
                        "border-right-width": "1px",
                        "border-right-style": "none",
                        "border-right-color": "#DCDCDC",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#DCDCDC",
                        "border-left-width": "1px",
                        "border-left-style": "none",
                        "border-left-color": "#DCDCDC",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimOr",
                "parameter": [ {
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#m-da08cfe0-Input_61",
                    "property": "jimGetValue"
                  }," " ]
                },{
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#m-da08cfe0-Input_61",
                    "property": "jimGetValue"
                  },"" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#m-da08cfe0-Rectangle_106" ],
                    "effect": {
                      "type": "slide",
                      "easing": "swing",
                      "duration": 200,
                      "direction": "down"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#m-da08cfe0-Input_61" ],
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimAnd",
                  "parameter": [ {
                    "action": "jimNotEquals",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#m-da08cfe0-Input_61",
                      "property": "jimGetValue"
                    },"" ]
                  },{
                    "action": "jimNotEquals",
                    "parameter": [ null,"" ]
                  } ]
                },{
                  "action": "jimNotEquals",
                  "parameter": [ null,"" ]
                } ]
              },
              "actions": [
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimAnd",
                  "parameter": [ {
                    "action": "jimAnd",
                    "parameter": [ null,null ]
                  },null ]
                },{
                  "action": "jimAnd",
                  "parameter": [ null,null ]
                } ]
              },
              "actions": [
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });