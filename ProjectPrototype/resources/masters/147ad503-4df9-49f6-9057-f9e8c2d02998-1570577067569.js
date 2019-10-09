jQuery("#simulation")
  .on("click", ".m-147ad503-4df9-49f6-9057-f9e8c2d02998 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#m-147ad503-Rectangle_21")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_21 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_21": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_21 span": {
                      "attributes": {
                        "color": "#1E82F7",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_21": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7",
                        "-pie-background": "#EFF8FC",
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
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_20 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_20 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_20": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimAnd",
                  "parameter": [ {
                    "action": "jimNot",
                    "parameter": [ {
                      "action": "jimContains",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "CurrentScreen"
                      },"borrower" ]
                    } ]
                  },{
                    "action": "jimAnd",
                    "parameter": [ {
                      "action": "jimNot",
                      "parameter": [ {
                        "action": "jimContains",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "CurrentScreen"
                        },"installment" ]
                      } ]
                    },{
                      "action": "jimNot",
                      "parameter": [ {
                        "action": "jimContains",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "CurrentScreen"
                        },"eligibility" ]
                      } ]
                    } ]
                  } ]
                },{
                  "action": "jimNot",
                  "parameter": [ {
                    "action": "jimContains",
                    "parameter": [ {
                      "datatype": "variable",
                      "element": "CurrentScreen"
                    },"loan" ]
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "CurrentScreen" ],
                    "value": "borrower"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/4e7d35cb-2bd9-4d51-a064-d3c1af4a01bb"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "CurrentScreen" ],
                    "value": "borrower"
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
    } else if(jFirer.is("#m-147ad503-Rectangle_20")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_20 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_20": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_20 span": {
                      "attributes": {
                        "color": "#1E82F7",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_20": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7",
                        "-pie-background": "#EFF8FC",
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
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimAnd",
                  "parameter": [ {
                    "action": "jimNot",
                    "parameter": [ {
                      "action": "jimContains",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "CurrentScreen"
                      },"borrower" ]
                    } ]
                  },{
                    "action": "jimAnd",
                    "parameter": [ {
                      "action": "jimNot",
                      "parameter": [ {
                        "action": "jimContains",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "CurrentScreen"
                        },"installment" ]
                      } ]
                    },{
                      "action": "jimNot",
                      "parameter": [ {
                        "action": "jimContains",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "CurrentScreen"
                        },"eligibility" ]
                      } ]
                    } ]
                  } ]
                },{
                  "action": "jimNot",
                  "parameter": [ {
                    "action": "jimContains",
                    "parameter": [ {
                      "datatype": "variable",
                      "element": "CurrentScreen"
                    },"loan" ]
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "CurrentScreen" ],
                    "value": "eligibility"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/4e7d35cb-2bd9-4d51-a064-d3c1af4a01bb"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "CurrentScreen" ],
                    "value": "eligibility"
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
    } else if(jFirer.is("#m-147ad503-Rectangle_19")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19 span": {
                      "attributes": {
                        "color": "#1E82F7",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7",
                        "-pie-background": "#EFF8FC",
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
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimAnd",
                  "parameter": [ {
                    "action": "jimNot",
                    "parameter": [ {
                      "action": "jimContains",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "CurrentScreen"
                      },"borrower" ]
                    } ]
                  },{
                    "action": "jimAnd",
                    "parameter": [ {
                      "action": "jimNot",
                      "parameter": [ {
                        "action": "jimContains",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "CurrentScreen"
                        },"installment" ]
                      } ]
                    },{
                      "action": "jimNot",
                      "parameter": [ {
                        "action": "jimContains",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "CurrentScreen"
                        },"eligibility" ]
                      } ]
                    } ]
                  } ]
                },{
                  "action": "jimNot",
                  "parameter": [ {
                    "action": "jimContains",
                    "parameter": [ {
                      "datatype": "variable",
                      "element": "CurrentScreen"
                    },"loan" ]
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "CurrentScreen" ],
                    "value": "loan"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/4e7d35cb-2bd9-4d51-a064-d3c1af4a01bb"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "CurrentScreen" ],
                    "value": "loan"
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
    } else if(jFirer.is("#m-147ad503-Item_21")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21 span": {
                      "attributes": {
                        "color": "#1E82F7",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7",
                        "-pie-background": "#EFF8FC",
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
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimAnd",
                  "parameter": [ {
                    "action": "jimNot",
                    "parameter": [ {
                      "action": "jimContains",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "CurrentScreen"
                      },"borrower" ]
                    } ]
                  },{
                    "action": "jimAnd",
                    "parameter": [ {
                      "action": "jimNot",
                      "parameter": [ {
                        "action": "jimContains",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "CurrentScreen"
                        },"installment" ]
                      } ]
                    },{
                      "action": "jimNot",
                      "parameter": [ {
                        "action": "jimContains",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "CurrentScreen"
                        },"eligibility" ]
                      } ]
                    } ]
                  } ]
                },{
                  "action": "jimNot",
                  "parameter": [ {
                    "action": "jimContains",
                    "parameter": [ {
                      "datatype": "variable",
                      "element": "CurrentScreen"
                    },"loan" ]
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "CurrentScreen" ],
                    "value": "installment"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/4e7d35cb-2bd9-4d51-a064-d3c1af4a01bb"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "CurrentScreen" ],
                    "value": "installment"
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
    } else if(jFirer.is("#m-147ad503-Item_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7 span": {
                      "attributes": {
                        "color": "#1E82F7",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7",
                        "-pie-background": "#EFF8FC",
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
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "CurrentScreen" ],
                    "value": "family"
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
                    "target": "screens/555f9ada-e25c-4f43-a44c-4caa1dfd1980"
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
    } else if(jFirer.is("#m-147ad503-Item_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8 span": {
                      "attributes": {
                        "color": "#1E82F7",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7",
                        "-pie-background": "#EFF8FC",
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
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "CurrentScreen" ],
                    "value": "expense"
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
                    "target": "screens/cc5dade7-ed55-4cc1-b3bb-c51ad168be7b"
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
    } else if(jFirer.is("#m-147ad503-Item_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9 span": {
                      "attributes": {
                        "color": "#1E82F7",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7",
                        "-pie-background": "#EFF8FC",
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
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "CurrentScreen" ],
                    "value": "debt"
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
                    "target": "screens/3abdf0e8-490a-4cfb-9362-99f504c7638d"
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
    } else if(jFirer.is("#m-147ad503-Item_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10 span": {
                      "attributes": {
                        "color": "#1E82F7",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7",
                        "-pie-background": "#EFF8FC",
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
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "CurrentScreen" ],
                    "value": "asset"
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
                    "target": "screens/c52b29a4-53d0-4035-9d02-45dab7b57beb"
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
    } else if(jFirer.is("#m-147ad503-Rectangle_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_9 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_9": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_9 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_9": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_8 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_8": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_8 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_8": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
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
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 span": {
                      "attributes": {
                        "color": "#1E82F7",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7",
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimAnd",
                  "parameter": [ {
                    "action": "jimNot",
                    "parameter": [ {
                      "action": "jimContains",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "CurrentScreen"
                      },"business" ]
                    } ]
                  },{
                    "action": "jimAnd",
                    "parameter": [ {
                      "action": "jimNot",
                      "parameter": [ {
                        "action": "jimContains",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "CurrentScreen"
                        },"cashsummary" ]
                      } ]
                    },{
                      "action": "jimNot",
                      "parameter": [ {
                        "action": "jimContains",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "CurrentScreen"
                        },"balance" ]
                      } ]
                    } ]
                  } ]
                },{
                  "action": "jimNot",
                  "parameter": [ {
                    "action": "jimContains",
                    "parameter": [ {
                      "datatype": "variable",
                      "element": "CurrentScreen"
                    },"profile" ]
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "CurrentScreen" ],
                    "value": "business"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/0bcbb520-0f2b-4827-a2c3-5f6248b7764e"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "CurrentScreen" ],
                    "value": "business"
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
    } else if(jFirer.is("#m-147ad503-Rectangle_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_9 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_9": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_9 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_9": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_8 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_8": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_8 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_8": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
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
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_8 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_8": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_8 span": {
                      "attributes": {
                        "color": "#1E82F7",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_8": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7",
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimAnd",
                  "parameter": [ {
                    "action": "jimNot",
                    "parameter": [ {
                      "action": "jimContains",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "CurrentScreen"
                      },"business" ]
                    } ]
                  },{
                    "action": "jimAnd",
                    "parameter": [ {
                      "action": "jimNot",
                      "parameter": [ {
                        "action": "jimContains",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "CurrentScreen"
                        },"cashsummary" ]
                      } ]
                    },{
                      "action": "jimNot",
                      "parameter": [ {
                        "action": "jimContains",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "CurrentScreen"
                        },"balance" ]
                      } ]
                    } ]
                  } ]
                },{
                  "action": "jimNot",
                  "parameter": [ {
                    "action": "jimContains",
                    "parameter": [ {
                      "datatype": "variable",
                      "element": "CurrentScreen"
                    },"profile" ]
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "CurrentScreen" ],
                    "value": "cashsummary"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/0bcbb520-0f2b-4827-a2c3-5f6248b7764e"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "CurrentScreen" ],
                    "value": "cashsummary"
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
    } else if(jFirer.is("#m-147ad503-Rectangle_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_9 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_9": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_9 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_9": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_8 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_8": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_8 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_8": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
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
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_9 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_9": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_9 span": {
                      "attributes": {
                        "color": "#1E82F7",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_9": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7",
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimAnd",
                  "parameter": [ {
                    "action": "jimNot",
                    "parameter": [ {
                      "action": "jimContains",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "CurrentScreen"
                      },"business" ]
                    } ]
                  },{
                    "action": "jimAnd",
                    "parameter": [ {
                      "action": "jimNot",
                      "parameter": [ {
                        "action": "jimContains",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "CurrentScreen"
                        },"cashsummary" ]
                      } ]
                    },{
                      "action": "jimNot",
                      "parameter": [ {
                        "action": "jimContains",
                        "parameter": [ {
                          "datatype": "variable",
                          "element": "CurrentScreen"
                        },"balance" ]
                      } ]
                    } ]
                  } ]
                },{
                  "action": "jimNot",
                  "parameter": [ {
                    "action": "jimContains",
                    "parameter": [ {
                      "datatype": "variable",
                      "element": "CurrentScreen"
                    },"profile" ]
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "CurrentScreen" ],
                    "value": "balance"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/0bcbb520-0f2b-4827-a2c3-5f6248b7764e"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "CurrentScreen" ],
                    "value": "balance"
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
    } else if(jFirer.is("#m-147ad503-Item_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
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
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14 span": {
                      "attributes": {
                        "color": "#1E82F7",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7",
                        "border-radius": "0px 0px 0px 0px",
                        "-pie-background": "#EFF8FC",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "CurrentScreen" ],
                    "value": "guarantor"
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
                    "target": "screens/1ad56ffa-b025-41be-974a-7369511bc25a"
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
    } else if(jFirer.is("#m-147ad503-Item_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
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
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15 span": {
                      "attributes": {
                        "color": "#1E82F7",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7",
                        "border-radius": "0px 0px 0px 0px",
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "CurrentScreen" ],
                    "value": "collateral"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/c2deb8fa-9207-4dcd-aac4-a12fb70752ed"
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
    } else if(jFirer.is("#m-147ad503-Item_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
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
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17 span": {
                      "attributes": {
                        "color": "#1E82F7",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7",
                        "border-radius": "0px 0px 0px 0px",
                        "-pie-background": "#EFF8FC",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "CurrentScreen" ],
                    "value": "social"
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
                    "target": "screens/2210cae7-25fd-4a4c-a319-ef79104ad71b"
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
    } else if(jFirer.is("#m-147ad503-Item_27")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_27 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_27": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_27 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_27": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
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
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_27 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_27": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_27 span": {
                      "attributes": {
                        "color": "#1E82F7",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_27": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7",
                        "border-radius": "0px 0px 0px 0px",
                        "-pie-background": "#EFF8FC",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "CurrentScreen" ],
                    "value": "auth"
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
                    "target": "screens/095113c8-291e-41a0-995c-fdbd04e2a6ba"
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
    } else if(jFirer.is("#m-147ad503-Item_28")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
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
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_28 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_28": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_28 span": {
                      "attributes": {
                        "color": "#1E82F7",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_28": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7",
                        "border-radius": "0px 0px 0px 0px",
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "CurrentScreen" ],
                    "value": "credit"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/51e3812f-937e-4bb0-a63b-8c81301de8b1"
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
    } else if(jFirer.is("#m-147ad503-Item_22")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_22 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_22": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_22 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_22": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
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
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_22 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_22": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_22 span": {
                      "attributes": {
                        "color": "#1E82F7",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_22": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7",
                        "border-radius": "0px 0px 0px 0px",
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimAnd",
                  "parameter": [ {
                    "action": "jimNot",
                    "parameter": [ {
                      "action": "jimContains",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "CurrentScreen"
                      },"proposition" ]
                    } ]
                  },{
                    "action": "jimNot",
                    "parameter": [ {
                      "action": "jimEquals",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "CurrentScreen"
                      },"summary" ]
                    } ]
                  } ]
                },{
                  "action": "jimNot",
                  "parameter": [ {
                    "action": "jimContains",
                    "parameter": [ {
                      "datatype": "variable",
                      "element": "CurrentScreen"
                    },"history" ]
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "CurrentScreen" ],
                    "value": "summary"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/dff16748-1cdf-46cb-a183-482c66625957"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "CurrentScreen" ],
                    "value": "summary"
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
    } else if(jFirer.is("#m-147ad503-Item_18")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_22 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_22": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_22 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_22": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
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
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18 span": {
                      "attributes": {
                        "color": "#1E82F7",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7",
                        "border-radius": "0px 0px 0px 0px",
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimAnd",
                  "parameter": [ {
                    "action": "jimNot",
                    "parameter": [ {
                      "action": "jimContains",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "CurrentScreen"
                      },"proposition" ]
                    } ]
                  },{
                    "action": "jimNot",
                    "parameter": [ {
                      "action": "jimEquals",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "CurrentScreen"
                      },"summary" ]
                    } ]
                  } ]
                },{
                  "action": "jimNot",
                  "parameter": [ {
                    "action": "jimContains",
                    "parameter": [ {
                      "datatype": "variable",
                      "element": "CurrentScreen"
                    },"history" ]
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "CurrentScreen" ],
                    "value": "decproposition"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/dff16748-1cdf-46cb-a183-482c66625957"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "CurrentScreen" ],
                    "value": "decproposition"
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
    } else if(jFirer.is("#m-147ad503-Item_19")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_22 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_22": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_22 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_22": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
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
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 span": {
                      "attributes": {
                        "color": "#1E82F7",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7",
                        "border-radius": "0px 0px 0px 0px",
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimAnd",
                  "parameter": [ {
                    "action": "jimNot",
                    "parameter": [ {
                      "action": "jimContains",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "CurrentScreen"
                      },"proposition" ]
                    } ]
                  },{
                    "action": "jimNot",
                    "parameter": [ {
                      "action": "jimEquals",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "CurrentScreen"
                      },"summary" ]
                    } ]
                  } ]
                },{
                  "action": "jimNot",
                  "parameter": [ {
                    "action": "jimContains",
                    "parameter": [ {
                      "datatype": "variable",
                      "element": "CurrentScreen"
                    },"history" ]
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "CurrentScreen" ],
                    "value": "dechistory"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/dff16748-1cdf-46cb-a183-482c66625957"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "CurrentScreen" ],
                    "value": "dechistory"
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
    } else if(jFirer.is("#m-147ad503-Item_20")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
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
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20 span": {
                      "attributes": {
                        "color": "#1E82F7",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7",
                        "border-radius": "0px 0px 0px 0px",
                        "-pie-background": "#EFF8FC",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "CurrentScreen" ],
                    "value": "document"
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
                    "target": "screens/20638bf2-b6b0-410e-bc83-9274b61ec066"
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
    } else if(jFirer.is("#m-147ad503-Item_29")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_29 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC",
                        "background-attachment": "scroll",
                        "border-left-color": "#1E82F7"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_29": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_29 span": {
                      "attributes": {
                        "color": "#1E82F7",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_29": {
                      "attributes-ie": {
                        "border-left-color": "#1E82F7",
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "CurrentScreen" ],
                    "value": "credit"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/51e3812f-937e-4bb0-a63b-8c81301de8b1"
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
  .on("pageload", ".m-147ad503-4df9-49f6-9057-f9e8c2d02998 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#m-147ad503-Panel_3")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Collaterals"
                },"1" ]
              },
              "actions": [
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Collaterals"
                },"2" ]
              },
              "actions": [
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Collaterals"
                },"3" ]
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
                "action": "jimNotEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Business"
                },"0" ]
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
                "action": "jimContains",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "New"
                },"Offer" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#m-147ad503-ListItem_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#m-147ad503-DoneLbl_7" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#m-147ad503-ListItem_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#m-147ad503-DoneLbl_7" ]
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
    } else if(jFirer.is("#m-147ad503-Rectangle_21")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimContains",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "CurrentScreen"
                },"borrower" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_21 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_21": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_21 span": {
                      "attributes": {
                        "color": "#1E82F7",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_21": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7",
                        "-pie-background": "#EFF8FC",
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
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_20 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_20 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_20": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
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
    } else if(jFirer.is("#m-147ad503-DoneLbl_36")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimContains",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "New"
                },"offer" ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#m-147ad503-DoneLbl_36" ]
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
    } else if(jFirer.is("#m-147ad503-Rectangle_20")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimContains",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "CurrentScreen"
                },"eligibility" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_20 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_20": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_20 span": {
                      "attributes": {
                        "color": "#1E82F7",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_20": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7",
                        "-pie-background": "#EFF8FC",
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
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_21 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_21 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_21": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
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
    } else if(jFirer.is("#m-147ad503-DoneLbl_8")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimContains",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "New"
                },"offer" ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#m-147ad503-DoneLbl_8" ]
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
    } else if(jFirer.is("#m-147ad503-Rectangle_19")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimContains",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "CurrentScreen"
                },"loan" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19 span": {
                      "attributes": {
                        "color": "#1E82F7",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7",
                        "-pie-background": "#EFF8FC",
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
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_21 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_21 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_21": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_20 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_20 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_20": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
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
    } else if(jFirer.is("#m-147ad503-Item_21")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimContains",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "CurrentScreen"
                },"installment" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
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
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21 span": {
                      "attributes": {
                        "color": "#1E82F7",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7",
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
    } else if(jFirer.is("#m-147ad503-Item_7")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimContains",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "CurrentScreen"
                },"family" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7 span": {
                      "attributes": {
                        "color": "#1E82F7",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7",
                        "-pie-background": "#EFF8FC",
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
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
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
    } else if(jFirer.is("#m-147ad503-DoneLbl_10")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimContains",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "IsDone"
                },"family" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#m-147ad503-DoneLbl_10" ],
                    "effect": {
                      "type": "pulsate",
                      "easing": "swing",
                      "duration": 500
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
    } else if(jFirer.is("#m-147ad503-Item_8")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimContains",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "CurrentScreen"
                },"expense" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8 span": {
                      "attributes": {
                        "color": "#1E82F7",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7",
                        "-pie-background": "#EFF8FC",
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
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
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
    } else if(jFirer.is("#m-147ad503-DoneLbl_15")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimContains",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "IsDone"
                },"expense" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#m-147ad503-DoneLbl_15" ],
                    "effect": {
                      "type": "pulsate",
                      "easing": "swing",
                      "duration": 500
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
    } else if(jFirer.is("#m-147ad503-Item_9")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimContains",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "CurrentScreen"
                },"debt" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9 span": {
                      "attributes": {
                        "color": "#1E82F7",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7",
                        "-pie-background": "#EFF8FC",
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
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
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
    } else if(jFirer.is("#m-147ad503-DoneLbl_11")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimContains",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "IsDone"
                },"debt" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#m-147ad503-DoneLbl_11" ],
                    "effect": {
                      "type": "pulsate",
                      "easing": "swing",
                      "duration": 500
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
    } else if(jFirer.is("#m-147ad503-Item_10")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimContains",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "CurrentScreen"
                },"asset" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10 span": {
                      "attributes": {
                        "color": "#1E82F7",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7",
                        "-pie-background": "#EFF8FC",
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
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
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
    } else if(jFirer.is("#m-147ad503-DoneLbl_12")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimContains",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "IsDone"
                },"asset" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#m-147ad503-DoneLbl_12" ],
                    "effect": {
                      "type": "pulsate",
                      "easing": "swing",
                      "duration": 500
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
    } else if(jFirer.is("#m-147ad503-Rectangle_7")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimContains",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "CurrentScreen"
                },"business" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_9 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_9": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_9 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_9": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_8 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_8": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_8 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_8": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
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
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 span": {
                      "attributes": {
                        "color": "#1E82F7",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7",
                        "-pie-background": "#EFF8FC",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimScrollTo",
                  "parameter": {
                    "target": [ "#m-147ad503-MainGroup_6" ],
                    "axis": "scrolly"
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
    } else if(jFirer.is("#m-147ad503-DoneLbl_9")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimContains",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "IsDone"
                },"cashflow" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#m-147ad503-DoneLbl_9" ],
                    "effect": {
                      "type": "pulsate",
                      "easing": "swing",
                      "duration": 500
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
    } else if(jFirer.is("#m-147ad503-Rectangle_8")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimContains",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "CurrentScreen"
                },"cashsummary" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_9 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_9": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_9 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_9": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_8 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_8": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_8 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_8": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
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
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_8 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_8": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_8 span": {
                      "attributes": {
                        "color": "#1E82F7",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_8": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7",
                        "-pie-background": "#EFF8FC",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimScrollTo",
                  "parameter": {
                    "target": [ "#m-147ad503-MainGroup_6" ],
                    "axis": "scrolly"
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
    } else if(jFirer.is("#m-147ad503-Rectangle_9")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimContains",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "CurrentScreen"
                },"balance" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_9 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_9": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_9 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_9": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_8 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_8": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_8 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_8": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
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
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_9 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_9": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_9 span": {
                      "attributes": {
                        "color": "#1E82F7",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_9": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7",
                        "-pie-background": "#EFF8FC",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimScrollTo",
                  "parameter": {
                    "target": [ "#m-147ad503-MainGroup_6" ],
                    "axis": "scrolly"
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
    } else if(jFirer.is("#m-147ad503-DoneLbl_14")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimContains",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "IsDone"
                },"balance" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#m-147ad503-DoneLbl_14" ],
                    "effect": {
                      "type": "pulsate",
                      "easing": "swing",
                      "duration": 500
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
    } else if(jFirer.is("#m-147ad503-Item_14")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimContains",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "CurrentScreen"
                },"guarantor" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
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
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14 span": {
                      "attributes": {
                        "color": "#1E82F7",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7",
                        "border-radius": "0px 0px 0px 0px",
                        "-pie-background": "#EFF8FC",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimScrollTo",
                  "parameter": {
                    "target": [ "#m-147ad503-MainGroup_11" ],
                    "axis": "scrolly"
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
    } else if(jFirer.is("#m-147ad503-DoneLbl_17")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimContains",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "IsDone"
                },"guarantor" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#m-147ad503-DoneLbl_17" ],
                    "effect": {
                      "type": "pulsate",
                      "easing": "swing",
                      "duration": 500
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
    } else if(jFirer.is("#m-147ad503-Item_15")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimContains",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "CurrentScreen"
                },"collateral" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
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
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15 span": {
                      "attributes": {
                        "color": "#1E82F7",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7",
                        "border-radius": "0px 0px 0px 0px",
                        "-pie-background": "#EFF8FC",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimScrollTo",
                  "parameter": {
                    "target": [ "#m-147ad503-MainGroup_13" ],
                    "axis": "scrolly"
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
    } else if(jFirer.is("#m-147ad503-Item_17")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimContains",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "CurrentScreen"
                },"social" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
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
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17 span": {
                      "attributes": {
                        "color": "#1E82F7",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7",
                        "border-radius": "0px 0px 0px 0px",
                        "-pie-background": "#EFF8FC",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimScrollTo",
                  "parameter": {
                    "target": [ "#m-147ad503-MainGroup_9" ],
                    "axis": "scrolly"
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
    } else if(jFirer.is("#m-147ad503-DoneLbl_20")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimContains",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "IsDone"
                },"social" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#m-147ad503-DoneLbl_20" ],
                    "effect": {
                      "type": "pulsate",
                      "easing": "swing",
                      "duration": 500
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
    } else if(jFirer.is("#m-147ad503-Item_27")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimContains",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "CurrentScreen"
                },"auth" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_27 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_27": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_27 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_27": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
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
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_27 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_27": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_27 span": {
                      "attributes": {
                        "color": "#1E82F7",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_27": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7",
                        "border-radius": "0px 0px 0px 0px",
                        "-pie-background": "#EFF8FC",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimScrollTo",
                  "parameter": {
                    "target": [ "#m-147ad503-MainGroup_14" ],
                    "axis": "scrolly"
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
    } else if(jFirer.is("#m-147ad503-DoneLbl_34")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimContains",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "IsDone"
                },"auth" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#m-147ad503-DoneLbl_34" ],
                    "effect": {
                      "type": "pulsate",
                      "easing": "swing",
                      "duration": 500
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
    } else if(jFirer.is("#m-147ad503-Item_28")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimContains",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "CurrentScreen"
                },"credit" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_28 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_28": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_28 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_28": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
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
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_28 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_28": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_28 span": {
                      "attributes": {
                        "color": "#1E82F7",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_28": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7",
                        "border-radius": "0px 0px 0px 0px",
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
    } else if(jFirer.is("#m-147ad503-Item_22")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "CurrentScreen"
                },"summary" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_22 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_22": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_22 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_22": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
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
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_22 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_22": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_22 span": {
                      "attributes": {
                        "color": "#1E82F7",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_22": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7",
                        "border-radius": "0px 0px 0px 0px",
                        "-pie-background": "#EFF8FC",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimScrollTo",
                  "parameter": {
                    "target": [ "#m-147ad503-MainGroup_9" ],
                    "axis": "scrolly"
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
    } else if(jFirer.is("#m-147ad503-Item_18")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimContains",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "CurrentScreen"
                },"proposition" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_22 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_22": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_22 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_22": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
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
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18 span": {
                      "attributes": {
                        "color": "#1E82F7",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7",
                        "border-radius": "0px 0px 0px 0px",
                        "-pie-background": "#EFF8FC",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimScrollTo",
                  "parameter": {
                    "target": [ "#m-147ad503-MainGroup_9" ],
                    "axis": "scrolly"
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
    } else if(jFirer.is("#m-147ad503-Item_19")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimContains",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "CurrentScreen"
                },"history" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_22 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_22": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_22 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_22": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
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
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 span": {
                      "attributes": {
                        "color": "#1E82F7",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7",
                        "border-radius": "0px 0px 0px 0px",
                        "-pie-background": "#EFF8FC",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimScrollTo",
                  "parameter": {
                    "target": [ "#m-147ad503-MainGroup_9" ],
                    "axis": "scrolly"
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
    } else if(jFirer.is("#m-147ad503-Item_20")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimContains",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "CurrentScreen"
                },"document" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
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
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20 span": {
                      "attributes": {
                        "color": "#1E82F7",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7",
                        "border-radius": "0px 0px 0px 0px",
                        "-pie-background": "#EFF8FC",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimScrollTo",
                  "parameter": {
                    "target": [ "#m-147ad503-MainGroup_12" ],
                    "axis": "scrolly"
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
    } else if(jFirer.is("#m-147ad503-Item_29")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimContains",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "CurrentScreen"
                },"credit" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_29 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC",
                        "background-attachment": "scroll",
                        "border-left-color": "#1E82F7"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_29": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_29 span": {
                      "attributes": {
                        "color": "#1E82F7",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_29": {
                      "attributes-ie": {
                        "border-left-color": "#1E82F7",
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
    }
  })
  .on("variablechange.jim", ".m-147ad503-4df9-49f6-9057-f9e8c2d02998 .variablechange", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#m-147ad503-Rectangle_21")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "CurrentScreen") && {
                "action": "jimContains",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "CurrentScreen"
                },"borrower" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_21 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_21": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_21 span": {
                      "attributes": {
                        "color": "#1E82F7",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_21": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7",
                        "-pie-background": "#EFF8FC",
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
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_20 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_20 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_20": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
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
    } else if(jFirer.is("#m-147ad503-DoneLbl_36")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "New") && {
                "action": "jimContains",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "New"
                },"offer" ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#m-147ad503-DoneLbl_36" ]
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
    } else if(jFirer.is("#m-147ad503-Rectangle_20")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "CurrentScreen") && {
                "action": "jimContains",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "CurrentScreen"
                },"eligibility" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_20 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_20": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_20 span": {
                      "attributes": {
                        "color": "#1E82F7",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_20": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7",
                        "-pie-background": "#EFF8FC",
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
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_21 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_21 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_21": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
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
    } else if(jFirer.is("#m-147ad503-DoneLbl_8")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "New") && {
                "action": "jimContains",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "New"
                },"offer" ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#m-147ad503-DoneLbl_8" ]
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
    } else if(jFirer.is("#m-147ad503-Rectangle_19")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "CurrentScreen") && {
                "action": "jimContains",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "CurrentScreen"
                },"loan" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19 span": {
                      "attributes": {
                        "color": "#1E82F7",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7",
                        "-pie-background": "#EFF8FC",
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
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_21 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_21 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_21": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_20 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_20 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_20": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
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
    } else if(jFirer.is("#m-147ad503-Item_21")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "CurrentScreen") && {
                "action": "jimContains",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "CurrentScreen"
                },"installment" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21 span": {
                      "attributes": {
                        "color": "#1E82F7",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7",
                        "-pie-background": "#EFF8FC",
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
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
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
    } else if(jFirer.is("#m-147ad503-Rectangle_7")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "CurrentScreen") && {
                "action": "jimContains",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "CurrentScreen"
                },"business" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_9 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_9": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_9 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_9": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_8 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_8": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_8 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_8": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
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
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 span": {
                      "attributes": {
                        "color": "#1E82F7",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7",
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
    } else if(jFirer.is("#m-147ad503-Rectangle_8")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "CurrentScreen") && {
                "action": "jimContains",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "CurrentScreen"
                },"cashsummary" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_9 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_9": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_9 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_9": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_8 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_8": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_8 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_8": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
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
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_8 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_8": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_8 span": {
                      "attributes": {
                        "color": "#1E82F7",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_8": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7",
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
    } else if(jFirer.is("#m-147ad503-Rectangle_9")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "CurrentScreen") && {
                "action": "jimContains",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "CurrentScreen"
                },"balance" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_9 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_9": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_9 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_9": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_8 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_8": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_8 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_8": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
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
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_9 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_9": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_9 span": {
                      "attributes": {
                        "color": "#1E82F7",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_9": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7",
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
    } else if(jFirer.is("#m-147ad503-DoneLbl_34")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "IsDone") && {
                "action": "jimContains",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "IsDone"
                },"auth" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#m-147ad503-DoneLbl_34" ],
                    "effect": {
                      "type": "pulsate",
                      "easing": "swing",
                      "duration": 500
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
    } else if(jFirer.is("#m-147ad503-Item_28")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "CurrentScreen") && {
                "action": "jimContains",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "CurrentScreen"
                },"credit" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_28 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_28": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_28 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_28": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_9": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_15": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_20": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_7": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_17": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_10": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_7": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Rectangle_19": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_8": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_21": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_14": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
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
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_28 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_28": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_28 span": {
                      "attributes": {
                        "color": "#1E82F7",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_28": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7",
                        "border-radius": "0px 0px 0px 0px",
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
    } else if(jFirer.is("#m-147ad503-Item_22")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "CurrentScreen") && {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "CurrentScreen"
                },"summary" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_22 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_22": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_22 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_22": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
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
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_22 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_22": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_22 span": {
                      "attributes": {
                        "color": "#1E82F7",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_22": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7",
                        "border-radius": "0px 0px 0px 0px",
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
    } else if(jFirer.is("#m-147ad503-Item_18")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "CurrentScreen") && {
                "action": "jimContains",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "CurrentScreen"
                },"proposition" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_22 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_22": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_22 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_22": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
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
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18 span": {
                      "attributes": {
                        "color": "#1E82F7",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7",
                        "border-radius": "0px 0px 0px 0px",
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
    } else if(jFirer.is("#m-147ad503-Item_19")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "CurrentScreen") && {
                "action": "jimContains",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "CurrentScreen"
                },"history" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_22 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_22": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_22 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_22": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_18": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
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
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7",
                        "border-radius": "0px 0px 0px 0px"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19 span": {
                      "attributes": {
                        "color": "#1E82F7",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_19": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7",
                        "border-radius": "0px 0px 0px 0px",
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
    } else if(jFirer.is("#m-147ad503-Item_29")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "CurrentScreen") && {
                "action": "jimContains",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "CurrentScreen"
                },"credit" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_29 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC",
                        "background-attachment": "scroll",
                        "border-left-color": "#1E82F7"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_29": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_29 span": {
                      "attributes": {
                        "color": "#1E82F7",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#m-147ad503-4df9-49f6-9057-f9e8c2d02998 #m-147ad503-Item_29": {
                      "attributes-ie": {
                        "border-left-color": "#1E82F7",
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
    }
  });