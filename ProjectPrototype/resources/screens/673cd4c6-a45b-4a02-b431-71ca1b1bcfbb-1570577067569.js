jQuery("#simulation")
  .on("click", ".s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Rectangle_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_10 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_10": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_10 span": {
                      "attributes": {
                        "color": "#1E82F7",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_10": {
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
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_3 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_3 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_3": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_6 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_6 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_6": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_8 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_8 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_8": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_5 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_5 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_5": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_4 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_4 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_4": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_3 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_3 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_3": {
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
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-PersonalInfo_Form","#s-Basic_Toolbar" ]
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
                    "action": "jimAnd",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-DoneLbl_1",
                      "property": "jimIsVisible"
                    },{
                      "datatype": "property",
                      "target": "#s-DoneLbl_2",
                      "property": "jimIsVisible"
                    } ]
                  },{
                    "datatype": "property",
                    "target": "#s-DoneLbl_4",
                    "property": "jimIsVisible"
                  } ]
                },{
                  "action": "jimAnd",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-DoneLbl_3",
                    "property": "jimIsVisible"
                  },{
                    "datatype": "property",
                    "target": "#s-DoneLbl_6",
                    "property": "jimIsVisible"
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-ContinueBtn_Normal_1","#s-UploadBtn_Normal" ]
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
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-ProgressIndicator_1" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "137"
                    },
                    "height": {
                      "type": "noresize"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_10" ],
                    "value": "Step 1 of 7"
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
    } else if(jFirer.is("#s-Rectangle_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_3 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_3 span": {
                      "attributes": {
                        "color": "#1E82F7"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_3": {
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
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_3 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_3 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_3": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_6 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_6 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_6": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_10 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_10 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_10": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_8 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_8 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_8": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_5 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_5 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_5": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_4 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_4 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_4": {
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
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Identity_Form_1" ]
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
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-ProgressIndicator_1" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "274"
                    },
                    "height": {
                      "type": "noresize"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_10" ],
                    "value": "Step 2 of 7"
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
                    "action": "jimAnd",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-DoneLbl_1",
                      "property": "jimIsVisible"
                    },{
                      "datatype": "property",
                      "target": "#s-DoneLbl_2",
                      "property": "jimIsVisible"
                    } ]
                  },{
                    "datatype": "property",
                    "target": "#s-DoneLbl_4",
                    "property": "jimIsVisible"
                  } ]
                },{
                  "action": "jimAnd",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-DoneLbl_3",
                    "property": "jimIsVisible"
                  },{
                    "datatype": "property",
                    "target": "#s-DoneLbl_6",
                    "property": "jimIsVisible"
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-ContinueBtn_Normal_1","#s-UploadBtn_Normal" ]
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
    } else if(jFirer.is("#s-Item_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-ProgressIndicator_1" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "412"
                    },
                    "height": {
                      "type": "noresize"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_10" ],
                    "value": "Step 3 of 7"
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
                    "target": [ "#s-SocialStatus_Form" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_4 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_4": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_4 span": {
                      "attributes": {
                        "color": "#1E82F7",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_4": {
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
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_3 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_3": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_3 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_3": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_6 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_6": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_6 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_6": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_10 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_10": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_10 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_10": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_8 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_8": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_8 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_8": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_5 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_5": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_5 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_5": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_3 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_3": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_3 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_3": {
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
                    "action": "jimAnd",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-DoneLbl_1",
                      "property": "jimIsVisible"
                    },{
                      "datatype": "property",
                      "target": "#s-DoneLbl_2",
                      "property": "jimIsVisible"
                    } ]
                  },{
                    "datatype": "property",
                    "target": "#s-DoneLbl_4",
                    "property": "jimIsVisible"
                  } ]
                },{
                  "action": "jimAnd",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-DoneLbl_3",
                    "property": "jimIsVisible"
                  },{
                    "datatype": "property",
                    "target": "#s-DoneLbl_6",
                    "property": "jimIsVisible"
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-ContinueBtn_Normal_1","#s-UploadBtn_Normal" ]
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
    } else if(jFirer.is("#s-Item_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-ProgressIndicator_1" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "549"
                    },
                    "height": {
                      "type": "noresize"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_10" ],
                    "value": "Step 4 of 7"
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
                    "target": [ "#s-ContactInfo_Form_1_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_3 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_3 span": {
                      "attributes": {
                        "color": "#1E82F7"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_3": {
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
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_6 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_6": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_6 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_6": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_10 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_10": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_10 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_10": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_8 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_8": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_8 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_8": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_5 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_5": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_5 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_5": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_4 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_4": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_4 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_4": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_3 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_3": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_3 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_3": {
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
                    "action": "jimAnd",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-DoneLbl_1",
                      "property": "jimIsVisible"
                    },{
                      "datatype": "property",
                      "target": "#s-DoneLbl_2",
                      "property": "jimIsVisible"
                    } ]
                  },{
                    "datatype": "property",
                    "target": "#s-DoneLbl_4",
                    "property": "jimIsVisible"
                  } ]
                },{
                  "action": "jimAnd",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-DoneLbl_3",
                    "property": "jimIsVisible"
                  },{
                    "datatype": "property",
                    "target": "#s-DoneLbl_6",
                    "property": "jimIsVisible"
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-ContinueBtn_Normal_1","#s-UploadBtn_Normal" ]
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
    } else if(jFirer.is("#s-Item_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-ProgressIndicator_1" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "686"
                    },
                    "height": {
                      "type": "noresize"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_10" ],
                    "value": "Step 5 of 7"
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
                    "target": [ "#s-ContactInfo_Form_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_6 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_6 span": {
                      "attributes": {
                        "color": "#1E82F7"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_6": {
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
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_3 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_3": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_3 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_3": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_10 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_10": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_10 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_10": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_8 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_8": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_8 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_8": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_5 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_5": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_5 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_5": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_4 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_4": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_4 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_4": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_3 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_3": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_3 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_3": {
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
                    "action": "jimAnd",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-DoneLbl_1",
                      "property": "jimIsVisible"
                    },{
                      "datatype": "property",
                      "target": "#s-DoneLbl_2",
                      "property": "jimIsVisible"
                    } ]
                  },{
                    "datatype": "property",
                    "target": "#s-DoneLbl_4",
                    "property": "jimIsVisible"
                  } ]
                },{
                  "action": "jimAnd",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-DoneLbl_3",
                    "property": "jimIsVisible"
                  },{
                    "datatype": "property",
                    "target": "#s-DoneLbl_6",
                    "property": "jimIsVisible"
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-ContinueBtn_Normal_1","#s-UploadBtn_Normal" ]
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
    } else if(jFirer.is("#s-Item_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-ProgressIndicator_1" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "823"
                    },
                    "height": {
                      "type": "noresize"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_10" ],
                    "value": "Step 6 of 7"
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
                    "target": [ "#s-Bio_Form" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_5 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_5": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_5 span": {
                      "attributes": {
                        "color": "#1E82F7",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_5": {
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
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_3 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_3": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_3 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_3": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_6 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_6": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_6 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_6": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_10 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_10": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_10 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_10": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_8 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_8": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_8 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_8": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_4 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_4": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_4 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_4": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_3 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_3": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_3 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_3": {
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
                    "action": "jimAnd",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-DoneLbl_1",
                      "property": "jimIsVisible"
                    },{
                      "datatype": "property",
                      "target": "#s-DoneLbl_2",
                      "property": "jimIsVisible"
                    } ]
                  },{
                    "datatype": "property",
                    "target": "#s-DoneLbl_4",
                    "property": "jimIsVisible"
                  } ]
                },{
                  "action": "jimAnd",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-DoneLbl_3",
                    "property": "jimIsVisible"
                  },{
                    "datatype": "property",
                    "target": "#s-DoneLbl_6",
                    "property": "jimIsVisible"
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-ContinueBtn_Normal_1","#s-UploadBtn_Normal" ]
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
    } else if(jFirer.is("#s-Item_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-ProgressIndicator_1" ],
                    "width": {
                      "type": "percentage",
                      "value": "100"
                    },
                    "height": {
                      "type": "noresize"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_10" ],
                    "value": "Step 7 of 7"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Signature_Form" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_8 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_8": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_8 span": {
                      "attributes": {
                        "color": "#1E82F7",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_8": {
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
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_3 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_3": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_3 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_3": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_6 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_6": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_6 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_6": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_10 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_10": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_10 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_10": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_5 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_5": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_5 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_5": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_4 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_4": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_4 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_4": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_3 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_3": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_3 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_3": {
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
                    "action": "jimAnd",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-DoneLbl_1",
                      "property": "jimIsVisible"
                    },{
                      "datatype": "property",
                      "target": "#s-DoneLbl_2",
                      "property": "jimIsVisible"
                    } ]
                  },{
                    "datatype": "property",
                    "target": "#s-DoneLbl_4",
                    "property": "jimIsVisible"
                  } ]
                },{
                  "action": "jimAnd",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-DoneLbl_3",
                    "property": "jimIsVisible"
                  },{
                    "datatype": "property",
                    "target": "#s-DoneLbl_6",
                    "property": "jimIsVisible"
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-ContinueBtn_Normal_1","#s-UploadBtn_Normal" ]
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
    } else if(jFirer.is("#s-Hotspot_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-DocTypeMenu_1" ],
                    "effect": {
                      "type": "slide",
                      "easing": "swing",
                      "duration": 200,
                      "direction": "left"
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
    } else if(jFirer.is("#s-Image_57")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-ReplaceBtn_1","#s-AddFingerprint" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-ReplaceBtn_2","#s-ReplacementReason_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Title_3" ],
                    "value": "Right Thumb Fingerprint"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "ActiveTab" ],
                    "value": "2"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-R1" ]
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
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "ReplaceInProcess"
                },"False" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-ReplaceBtn_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "ReplaceInProcess"
                },"True" ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-ReplaceBtn_1" ]
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
                    "target": [ "#s-ScanBtn_Normal_2","#s-ScanBtn_Normal_3","#s-ScanBtn_Normal_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Step_1" ]
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
    } else if(jFirer.is("#s-Image_20")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Add_R1" ],
                    "transition": {
                      "type": "pop",
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNot",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-NA_L2",
                  "property": "jimIsVisible"
                } ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-L2" ]
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
                "action": "jimNot",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-NA_R2",
                  "property": "jimIsVisible"
                } ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-R2" ]
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
                "action": "jimNot",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-NA_L1",
                  "property": "jimIsVisible"
                } ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-L1" ]
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
    } else if(jFirer.is("#s-Image_58")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-ReplaceBtn_1","#s-AddFingerprint" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-ReplaceBtn_2","#s-ReplacementReason_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Title_3" ],
                    "value": "Right Index Fingerprint"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "ActiveTab" ],
                    "value": "4"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-R2" ]
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
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "ReplaceInProcess"
                },"False" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-ReplaceBtn_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "ReplaceInProcess"
                },"True" ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-ReplaceBtn_1" ]
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
                    "target": [ "#s-ScanBtn_Normal_2","#s-ScanBtn_Normal_3","#s-ScanBtn_Normal_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Step_1" ]
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
    } else if(jFirer.is("#s-Image_25")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Add_R2" ],
                    "transition": {
                      "type": "pop",
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNot",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-NA_R1",
                  "property": "jimIsVisible"
                } ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-R1" ]
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
                "action": "jimNot",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-NA_L2",
                  "property": "jimIsVisible"
                } ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-L2" ]
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
                "action": "jimNot",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-NA_L1",
                  "property": "jimIsVisible"
                } ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-L1" ]
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
    } else if(jFirer.is("#s-Image_55")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-AddFingerprint" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-ReplaceBtn_2","#s-ReplacementReason_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Title_3" ],
                    "value": "Left Thumb Fingerprint"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "ActiveTab" ],
                    "value": "1"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-L1" ]
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
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "ReplaceInProcess"
                },"False" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-ReplaceBtn_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "ReplaceInProcess"
                },"True" ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-ReplaceBtn_1" ]
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
                    "target": [ "#s-ScanBtn_Normal_2","#s-ScanBtn_Normal_3","#s-ScanBtn_Normal_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Step_1" ]
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
    } else if(jFirer.is("#s-Image_16")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Add_L1" ],
                    "transition": {
                      "type": "pop",
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNot",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-NA_R1",
                  "property": "jimIsVisible"
                } ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-R1" ]
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
                "action": "jimNot",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-NA_R2",
                  "property": "jimIsVisible"
                } ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-R2" ]
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
                "action": "jimNot",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-NA_L2",
                  "property": "jimIsVisible"
                } ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-L2" ]
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
    } else if(jFirer.is("#s-Image_56")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Title_3" ],
                    "value": "Left Index Fingerprint"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-ReplaceBtn_1","#s-AddFingerprint" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-ReplaceBtn_2","#s-ReplacementReason_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "ActiveTab" ],
                    "value": "3"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-L2" ]
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
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "ReplaceInProcess"
                },"False" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-ReplaceBtn_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "ReplaceInProcess"
                },"True" ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-ReplaceBtn_1" ]
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
                    "target": [ "#s-ScanBtn_Normal_2","#s-ScanBtn_Normal_3","#s-ScanBtn_Normal_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Step_1" ]
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
    } else if(jFirer.is("#s-Image_19")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Add_L2" ],
                    "transition": {
                      "type": "pop",
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNot",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-NA_R1",
                  "property": "jimIsVisible"
                } ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-R1" ]
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
                "action": "jimNot",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-NA_R2",
                  "property": "jimIsVisible"
                } ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-R2" ]
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
                "action": "jimNot",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-NA_L1",
                  "property": "jimIsVisible"
                } ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-L1" ]
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
    } else if(jFirer.is("#s-CancelReplaceBtn_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-R1","#s-L1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-R2","#s-L2" ]
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
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "ActiveTab"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Add_L1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "ActiveTab"
                },"2" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Add_R1" ]
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
                "action": "jimContains",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "L1"
                },"Done" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Done_L1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimContains",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "L1"
                },"Add" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Add_L1" ]
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
                "action": "jimContains",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "R1"
                },"Done" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Done_R1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimContains",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "R1"
                },"Add" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Add_R1" ]
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
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-CancelReplaceBtn_3" ]
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
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-SectionTitle_3" ],
                    "value": "Selected fingers for bio enrollment"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "ReplaceInProcess" ],
                    "value": "False"
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
    } else if(jFirer.is("#s-checkbox-on-light")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-False_1","#s-False" ]
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
    } else if(jFirer.is("#s-Image_28")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-False_1","#s-True" ]
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
    } else if(jFirer.is("#s-RemoveBtn_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_36" ],
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_76" ],
                    "effect": {
                      "type": "slide",
                      "easing": "swing",
                      "duration": 100,
                      "direction": "up"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-DoneLbl_6" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-RemoveBtn_7" ]
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
    } else if(jFirer.is("#s-checkbox-on-light_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-False_1","#s-False" ]
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
    } else if(jFirer.is("#s-Image_29")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-True_1","#s-False" ]
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
    } else if(jFirer.is("#s-RemoveBtn_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Phone_2" ],
                    "effect": {
                      "type": "slide",
                      "easing": "swing",
                      "duration": 200,
                      "direction": "up"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_38" ],
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_77" ],
                    "effect": {
                      "type": "slide",
                      "easing": "swing",
                      "duration": 100,
                      "direction": "up"
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
    } else if(jFirer.is("#s-Image_47")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Phone_2" ],
                    "effect": {
                      "type": "slide",
                      "easing": "swing",
                      "duration": 200,
                      "direction": "up"
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
    } else if(jFirer.is("#s-AddBtn_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Phone_2" ],
                    "effect": {
                      "type": "slide",
                      "easing": "swing",
                      "duration": 200,
                      "direction": "up"
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
    } else if(jFirer.is("#s-checkbox-on-light_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-False_2" ]
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
    } else if(jFirer.is("#s-Image_32")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-True_2" ]
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
    } else if(jFirer.is("#s-RemoveBtn_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Email_1" ],
                    "effect": {
                      "type": "slide",
                      "easing": "swing",
                      "duration": 200,
                      "direction": "up"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_40" ],
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_79" ],
                    "effect": {
                      "type": "slide",
                      "easing": "swing",
                      "duration": 100,
                      "direction": "up"
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
    } else if(jFirer.is("#s-Image_49")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Email_1" ],
                    "effect": {
                      "type": "slide",
                      "easing": "swing",
                      "duration": 200,
                      "direction": "up"
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
    } else if(jFirer.is("#s-AddBtn_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Email_1" ],
                    "effect": {
                      "type": "slide",
                      "easing": "swing",
                      "duration": 200,
                      "direction": "up"
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
    } else if(jFirer.is("#s-Image_43")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "ActiveTab" ],
                    "value": "1"
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
                    "target": [ "#s-AddAddress_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Title_2" ],
                    "value": "Home Address"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-AddressType_2" ]
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
    } else if(jFirer.is("#s-Rectangle_98")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "ActiveTab" ],
                    "value": "1"
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
                    "target": [ "#s-AddAddress_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Title_2" ],
                    "value": "Home Address"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-AddressType_2" ]
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
    } else if(jFirer.is("#s-Image_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "ActiveTab" ],
                    "value": "1"
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
                    "target": [ "#s-AddAddress_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Title_2" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Image_6",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-AddressType_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-AddressPanel_1" ]
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
    } else if(jFirer.is("#s-Address_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "ActiveTab" ],
                    "value": "1"
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
                    "target": [ "#s-AddAddress_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Title_2" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Rectangle_28",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-AddressType_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-AddressPanel_1" ]
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
    } else if(jFirer.is("#s-Rectangle_26")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "ActiveTab" ],
                    "value": "1"
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
                    "target": [ "#s-AddAddress_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Title_2" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Rectangle_26",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-AddressType_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-AddressPanel_1" ]
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
    } else if(jFirer.is("#s-Image_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-EmptyState_4" ],
                    "width": {
                      "type": "noresize"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "48"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-EmptyState_4" ]
                  },
                  "exectype": "parallel",
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
    } else if(jFirer.is("#s-Image_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "ActiveTab" ],
                    "value": "1"
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
                    "target": [ "#s-AddAddress_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Title_2" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Rectangle_26",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-AddressType_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-MapPanel_1" ]
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
    } else if(jFirer.is("#s-Image_45")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "ActiveTab" ],
                    "value": "1"
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
                    "target": [ "#s-AddAddress_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Title_2" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Image_45",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-AddressType_2" ]
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
    } else if(jFirer.is("#s-Rectangle_99")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "ActiveTab" ],
                    "value": "1"
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
                    "target": [ "#s-AddAddress_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Title_2" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Rectangle_99",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-AddressType_2" ]
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
    } else if(jFirer.is("#s-Image_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "ActiveTab" ],
                    "value": "1"
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
                    "target": [ "#s-AddAddress_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Title_2" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Rectangle_28",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-AddressType_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-AddressPanel_1" ]
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
    } else if(jFirer.is("#s-Address_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "ActiveTab" ],
                    "value": "1"
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
                    "target": [ "#s-AddAddress_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Title_2" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Rectangle_28",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-AddressType_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-AddressPanel_1" ]
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
    } else if(jFirer.is("#s-Rectangle_28")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "ActiveTab" ],
                    "value": "1"
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
                    "target": [ "#s-AddAddress_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Title_2" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Rectangle_28",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-AddressType_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-AddressPanel_1" ]
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
    } else if(jFirer.is("#s-Image_21")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Section_5" ]
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
    } else if(jFirer.is("#s-Image_22")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "ActiveTab" ],
                    "value": "1"
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
                    "target": [ "#s-AddAddress_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Title_2" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Rectangle_28",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-AddressType_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-MapPanel_1" ]
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
    } else if(jFirer.is("#s-Image_52")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "ActiveTab" ],
                    "value": "3"
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
                    "target": [ "#s-AddAddress_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Title_2" ],
                    "value": "Add Address"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-AddressType_2" ]
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
    } else if(jFirer.is("#s-Rectangle_101")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "ActiveTab" ],
                    "value": "3"
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
                    "target": [ "#s-AddAddress_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Title_2" ],
                    "value": "Add Address"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-AddressType_2" ]
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
    } else if(jFirer.is("#s-Image_46")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "ActiveTab" ],
                    "value": "1"
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
                    "target": [ "#s-AddDocument_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-OCR_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Title_1" ],
                    "value": "National Identity Card"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-DocumentType_2" ]
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
    } else if(jFirer.is("#s-Rectangle_100")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "ActiveTab" ],
                    "value": "1"
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
                    "target": [ "#s-CameraApp_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-OCR_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Title_1" ],
                    "value": "National Identity Card"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-DocumentType_2" ]
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
    } else if(jFirer.is("#s-Image_24")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "ActiveTab" ],
                    "value": "1"
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
                    "target": [ "#s-AddDocument_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-OCR_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Back_1","#s-Front_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Title_1" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Image_24",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-DocumentType_2" ]
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
    } else if(jFirer.is("#s-Address_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "ActiveTab" ],
                    "value": "1"
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
                    "target": [ "#s-AddDocument_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-OCR_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Back_1","#s-Front_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Title_1" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Rectangle_30",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-DocumentType_2" ]
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
    } else if(jFirer.is("#s-Rectangle_30")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "ActiveTab" ],
                    "value": "1"
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
                    "target": [ "#s-AddDocument_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-OCR_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Back_1","#s-Front_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Title_1" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Rectangle_30",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-DocumentType_2" ]
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
    } else if(jFirer.is("#s-Image_33")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-EmptyState_1" ],
                    "width": {
                      "type": "noresize"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "48"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-EmptyState_1" ]
                  },
                  "exectype": "parallel",
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
    } else if(jFirer.is("#s-Image_37")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "ActiveTab" ],
                    "value": "1"
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
                    "target": [ "#s-AddDocument_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-OCR_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Back_1","#s-Front_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Title_1" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Rectangle_30",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-DocumentType_2" ]
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
    } else if(jFirer.is("#s-Rectangle_95")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "ActiveTab" ],
                    "value": "1"
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
                    "target": [ "#s-AddDocument_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-OCR_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Back_1","#s-Front_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Title_1" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Rectangle_30",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-DocumentType_2" ]
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
    } else if(jFirer.is("#s-Image_48")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "ActiveTab" ],
                    "value": "2"
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
                    "target": [ "#s-AddDocument_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-OCR_1","#s-Back_1","#s-Front_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Title_1" ],
                    "value": "Letter from the Ward Secretary"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-DocumentType_2" ]
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
    } else if(jFirer.is("#s-Rectangle_103")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "ActiveTab" ],
                    "value": "2"
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
                    "target": [ "#s-CameraApp_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-OCR_1","#s-Back_1","#s-Front_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Title_1" ],
                    "value": "Letter from the Ward Secretary"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-DocumentType_2" ]
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
    } else if(jFirer.is("#s-Image_34")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "ActiveTab" ],
                    "value": "2"
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
                    "target": [ "#s-AddDocument_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-OCR_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-OCR_1","#s-Back_1","#s-Front_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Title_1" ],
                    "value": "Letter from the Ward Secretary"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-DocumentType_2" ]
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
    } else if(jFirer.is("#s-Address_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "ActiveTab" ],
                    "value": "2"
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
                    "target": [ "#s-AddDocument_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-OCR_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-OCR_1","#s-Back_1","#s-Front_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Title_1" ],
                    "value": "Letter from the Ward Secretary"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-DocumentType_2" ]
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
    } else if(jFirer.is("#s-Rectangle_31")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "ActiveTab" ],
                    "value": "2"
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
                    "target": [ "#s-AddDocument_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-OCR_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-OCR_1","#s-Back_1","#s-Front_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Title_1" ],
                    "value": "Letter from the Ward Secretary"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-DocumentType_2" ]
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
    } else if(jFirer.is("#s-Image_39")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-EmptyState_2" ],
                    "width": {
                      "type": "noresize"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "48"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-EmptyState_2" ]
                  },
                  "exectype": "parallel",
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
    } else if(jFirer.is("#s-Image_41")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "ActiveTab" ],
                    "value": "2"
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
                    "target": [ "#s-AddDocument_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-OCR_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-OCR_1","#s-Back_1","#s-Front_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Title_1" ],
                    "value": "Letter from the Ward Secretary"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-DocumentType_2" ]
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
    } else if(jFirer.is("#s-Image_51")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "ActiveTab" ],
                    "value": "1"
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
                    "target": [ "#s-AddDocument_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-OCR_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Title_1" ],
                    "value": "National Identity Card"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-DocumentType_2" ]
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
    } else if(jFirer.is("#s-Rectangle_104")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "ActiveTab" ],
                    "value": "1"
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
                    "target": [ "#s-AddDocument_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-OCR_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Title_1" ],
                    "value": "National Identity Card"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-DocumentType_2" ]
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
    } else if(jFirer.is("#s-Address_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "ActiveTab" ],
                    "value": "3"
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
                    "target": [ "#s-AddDocument_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-OCR_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Title_1" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Rectangle_34",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-DocumentType_2" ]
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
    } else if(jFirer.is("#s-Rectangle_34")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "ActiveTab" ],
                    "value": "3"
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
                    "target": [ "#s-AddDocument_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-OCR_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-OCR_1","#s-Back_1","#s-Front_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Title_1" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Rectangle_34",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-DocumentType_2" ]
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
    } else if(jFirer.is("#s-Image_42")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Section_3" ]
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
    } else if(jFirer.is("#s-Image_44")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "ActiveTab" ],
                    "value": "3"
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
                    "target": [ "#s-AddDocument_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-OCR_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-OCR_1","#s-Back_1","#s-Front_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Title_1" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Rectangle_34",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-DocumentType_2" ]
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
    } else if(jFirer.is("#s-Image_63")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "ActiveTab" ],
                    "value": "3"
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
                    "target": [ "#s-AddDocument_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-OCR_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-OCR_1","#s-Back_1","#s-Front_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Title_1" ],
                    "value": "Add Document"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-DocumentType_2" ]
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
    } else if(jFirer.is("#s-Rectangle_102")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "ActiveTab" ],
                    "value": "3"
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
                    "target": [ "#s-AddDocument_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-OCR_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-OCR_1","#s-Back_1","#s-Front_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Title_1" ],
                    "value": "Add Document"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-DocumentType_2" ]
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
    } else if(jFirer.is("#s-Image_50")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-AddSignature" ]
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
    } else if(jFirer.is("#s-AddBtn_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-AddSignature" ]
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
    } else if(jFirer.is("#s-Image_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Image_5","#s-SignatureImg_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-AddBtn_6" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-DoneLbl_8" ]
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
    } else if(jFirer.is("#s-Button_19")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Button_19 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#D9D9D9"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Button_19": {
                      "attributes-ie": {
                        "-pie-background": "#D9D9D9",
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
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Button_21 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Button_21": {
                      "attributes-ie": {
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
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-CustomerType_Individul" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-CustomerType_Corporate" ]
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
    } else if(jFirer.is("#s-Button_21")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Button_19 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Button_19": {
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
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Button_21 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#D9D9D9"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Button_21": {
                      "attributes-ie": {
                        "-pie-background": "#D9D9D9",
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
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-CustomerType_Individul" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-CustomerType_Corporate" ]
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
    } else if(jFirer.is("#s-Button_23")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-IndividualCustomer" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-SaveAsDraftBtn_1","#s-UploadBtn_1","#s-OverflowBtn_1" ]
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
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-ProgressIndicator_1" ],
                    "width": {
                      "type": "percentage",
                      "value": "40"
                    },
                    "height": {
                      "type": "noresize"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_10" ],
                    "value": "2/5"
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
    } else if(jFirer.is("#s-Button_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Button_4 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#D9D9D9"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Button_4": {
                      "attributes-ie": {
                        "-pie-background": "#D9D9D9",
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
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Button_14 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Button_14": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
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
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-IndividualCustomer" ],
                    "transition": {
                      "type": "slideup",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-SaveAsDraftBtn_1","#s-UploadBtn_1","#s-OverflowBtn_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "timed",
          "delay": 100
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-ProgressIndicator_1" ],
                    "width": {
                      "type": "percentage",
                      "value": "40"
                    },
                    "height": {
                      "type": "noresize"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_10" ],
                    "value": "2/5"
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
    } else if(jFirer.is("#s-Button_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Button_4 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Button_4": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
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
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Button_14 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#D9D9D9"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Button_14": {
                      "attributes-ie": {
                        "-pie-background": "#D9D9D9",
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
    } else if(jFirer.is("#s-OverflowBtn_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-OverflowMenu_1" ]
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
    } else if(jFirer.is("#s-Image_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#m-5ea3b4c3-MessageSubmit" ]
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
    } else if(jFirer.is("#s-Btn_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#m-5ea3b4c3-MessageSubmit" ]
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
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "New" ],
                    "value": "False"
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
    } else if(jFirer.is("#s-Image_86")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Status_MC" ]
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/835f79ed-9094-4ba3-9221-0287e197be01"
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
    } else if(jFirer.is("#s-Btn_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Status_MC" ]
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/835f79ed-9094-4ba3-9221-0287e197be01"
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
    } else if(jFirer.is("#s-Image_87")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Status_MC" ]
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/835f79ed-9094-4ba3-9221-0287e197be01"
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
    } else if(jFirer.is("#s-Btn_4")) {
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
        },
        {
          "blocks": [
            {
              "condition": {
                "datatype": "property",
                "target": "#s-PersonalInfo_Form",
                "property": "jimIsVisible"
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_3 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_3 span": {
                      "attributes": {
                        "color": "#1E82F7"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_3": {
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
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_3 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_3 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_3": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_4 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_4 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_4": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_8 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_8 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_8": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_6 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_6 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_6": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_10 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_10 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_10": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_5 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_5 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_5": {
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
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Identity_Form_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-ProgressIndicator_1" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "274"
                    },
                    "height": {
                      "type": "noresize"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_10" ],
                    "value": "Step 2 of 7"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "datatype": "property",
                "target": "#s-Identity_Form_1",
                "property": "jimIsVisible"
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-SocialStatus_Form" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_4 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_4 span": {
                      "attributes": {
                        "color": "#1E82F7"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_4": {
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
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_3 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_3": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_3 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_3": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_6 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_6": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_6 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_6": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_10 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_10": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_10 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_10": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_8 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_8": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_8 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_8": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_5 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_5": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_5 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_5": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_3 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_3": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_3 span": {
                      "attributes": {
                        "color": "#3F3F3F",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_3": {
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
                    "target": [ "#s-Text_10" ],
                    "value": "Step 3 of 7"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-ProgressIndicator_1" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "412"
                    },
                    "height": {
                      "type": "noresize"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "datatype": "property",
                "target": "#s-SocialStatus_Form",
                "property": "jimIsVisible"
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-ContactInfo_Form_1_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_3 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC",
                        "background-attachment": "scroll",
                        "border-left-color": "#1E82F7"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_3 span": {
                      "attributes": {
                        "color": "#1E82F7"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_3": {
                      "attributes-ie": {
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
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_3 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_3 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_3": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_4 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_4 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_4": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_8 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_8 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_8": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_6 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_6 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_6": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_10 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_10 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_10": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_5 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_5 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_5": {
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
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-ProgressIndicator_1" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "549"
                    },
                    "height": {
                      "type": "noresize"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_10" ],
                    "value": "Step 4 of 7"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "datatype": "property",
                "target": "#s-ContactInfo_Form_1_1",
                "property": "jimIsVisible"
              },
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-ProgressIndicator_1" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "686"
                    },
                    "height": {
                      "type": "noresize"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_10" ],
                    "value": "Step 5 of 7"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-ContactInfo_Form_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_6 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_6": {
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
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_3 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_3 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_3": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_3 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_3 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_3": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_4 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_4 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_4": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_8 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_8 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_8": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_10 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_10 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_10": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_5 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_5 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_5": {
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
            },
            {
              "condition": {
                "datatype": "property",
                "target": "#s-ContactInfo_Form_2",
                "property": "jimIsVisible"
              },
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-ProgressIndicator_1" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "823"
                    },
                    "height": {
                      "type": "noresize"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_10" ],
                    "value": "Step 6 of 7"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Bio_Form" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_5 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_5 span": {
                      "attributes": {
                        "color": "#1E82F7"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_5": {
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
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_3 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_3 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_3": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_3 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_3 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_3": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_4 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_4 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_4": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_8 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_8 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_8": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_6 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_6 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_6": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_10 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_10 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_10": {
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
            },
            {
              "condition": {
                "datatype": "property",
                "target": "#s-Bio_Form",
                "property": "jimIsVisible"
              },
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-ProgressIndicator_1" ],
                    "width": {
                      "type": "percentage",
                      "value": "100"
                    },
                    "height": {
                      "type": "noresize"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_10" ],
                    "value": "Step 7 of 7"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Signature_Form" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_8 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_8 span": {
                      "attributes": {
                        "color": "#1E82F7"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_8": {
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
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_3 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_3 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_3": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_3 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_3 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_3": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_4 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_4 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_4": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_6 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_6 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_6": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_10 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_10 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_10": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_5 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_5 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Item_5": {
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
                  "action": "jimScrollTo",
                  "parameter": {
                    "target": [ "#s-Signature_1" ],
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
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-DoneLbl_1",
                      "property": "jimIsVisible"
                    },{
                      "datatype": "property",
                      "target": "#s-DoneLbl_2",
                      "property": "jimIsVisible"
                    } ]
                  },{
                    "datatype": "property",
                    "target": "#s-DoneLbl_4",
                    "property": "jimIsVisible"
                  } ]
                },{
                  "action": "jimAnd",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-DoneLbl_3",
                    "property": "jimIsVisible"
                  },{
                    "datatype": "property",
                    "target": "#s-DoneLbl_6",
                    "property": "jimIsVisible"
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-ContinueBtn_Normal_1","#s-UploadBtn_Normal" ]
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
    } else if(jFirer.is("#s-Image_18")) {
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
    } else if(jFirer.is("#s-CancelBtn_1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "datatype": "property",
                "target": "#s-IndividualCustomer",
                "property": "jimIsVisible"
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#m-0669e2a5-MessageBack" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724"
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
    } else if(jFirer.is("#s-Image_31")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "datatype": "property",
                "target": "#s-IndividualCustomer",
                "property": "jimIsVisible"
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#m-0669e2a5-MessageBack" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724"
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
    } else if(jFirer.is("#s-Rectangle_41")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-DocTypeMenu_1" ]
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
    } else if(jFirer.is("#s-Rectangle_45")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "ActiveTab" ],
                    "value": "1"
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
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-DocTypeMenu_1" ]
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
                    "target": [ "#s-CameraApp_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-OCR_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Title_1" ],
                    "value": "National Identity Card"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-DocumentType_2" ]
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
    } else if(jFirer.is("#s-Rectangle_46")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-DocTypeMenu_1" ]
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
    } else if(jFirer.is("#s-Rectangle_66")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-DocTypeMenu_1" ]
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
    } else if(jFirer.is("#s-Rectangle_40")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-OverflowMenu_1" ]
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
    } else if(jFirer.is("#s-Rectangle_39")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#m-7c5faf12-MessageDiscard" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-OverflowMenu_1" ]
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
    } else if(jFirer.is("#s-AddImageBtn_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-CameraApp_1" ],
                    "effect": {
                      "type": "slide",
                      "easing": "swing",
                      "duration": 200,
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
    } else if(jFirer.is("#s-checkbox-on-light_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-False_1","#s-False_3" ]
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
    } else if(jFirer.is("#s-Image_64")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-False_1","#s-True_3" ]
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
    } else if(jFirer.is("#s-Category_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Title_1" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Category_6",
                      "property": "jimGetSelectedValue"
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
    } else if(jFirer.is("#s-Image_26")) {
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
    } else if(jFirer.is("#s-Btn_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-AddDocument_1" ]
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
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "ActiveTab"
                },"3" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Section_3" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Rectangle_34" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Category_6",
                      "property": "jimGetSelectedValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "ActiveTab"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Added_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Added_1" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "537"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "98"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Snackbar_1" ],
                    "effect": {
                      "type": "fade",
                      "easing": "swing",
                      "duration": 200
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Snackbar_1" ]
                  },
                  "exectype": "timed",
                  "delay": 5000
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "ActiveTab"
                },"2" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Added_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Added_2" ],
                    "width": {
                      "type": "noresize"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "98"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "timed",
          "delay": 200
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Added_1",
                  "property": "jimIsVisible"
                },{
                  "datatype": "property",
                  "target": "#s-Added_2",
                  "property": "jimIsVisible"
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-NewSectionBtn_Normal_6" ]
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
    } else if(jFirer.is("#s-Image_27")) {
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
    } else if(jFirer.is("#s-Image_75")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-AddDocument_1" ]
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
    } else if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-AddressPanel_1" ]
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
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Button_2 > .backgroundLayer": {
                      "attributes": {
                        "border-bottom-color": "#1E82F7"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Button_2 span": {
                      "attributes": {
                        "color": "#1E82F7"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Button_2": {
                      "attributes-ie": {
                        "border-bottom-color": "#1E82F7"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Button_1 > .backgroundLayer": {
                      "attributes": {
                        "border-bottom-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Button_1 span": {
                      "attributes": {
                        "color": "#444444"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Button_1": {
                      "attributes-ie": {
                        "border-bottom-color": "#FFFFFF"
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
    } else if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-MapPanel_1" ]
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
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Button_1 > .backgroundLayer": {
                      "attributes": {
                        "border-bottom-color": "#1E82F7"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Button_1 span": {
                      "attributes": {
                        "color": "#1E82F7"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Button_1": {
                      "attributes-ie": {
                        "border-bottom-color": "#1E82F7"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Button_2 > .backgroundLayer": {
                      "attributes": {
                        "border-bottom-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Button_2 span": {
                      "attributes": {
                        "color": "#444444"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Button_2": {
                      "attributes-ie": {
                        "border-bottom-color": "#FFFFFF"
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
    } else if(jFirer.is("#s-Rectangle_27")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_9" ],
                    "value": "32.724965, -117.206317"
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
    } else if(jFirer.is("#s-Image_53")) {
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
    } else if(jFirer.is("#s-Btn_19")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-AddAddress_1" ]
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
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "ActiveTab"
                },"3" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Section_5" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Rectangle_28" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Category_5",
                      "property": "jimGetSelectedValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "ActiveTab"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Added_4" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-NewSectionBtn_Normal_5" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Added_4" ],
                    "width": {
                      "type": "noresize"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "98"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "timed",
          "delay": 200
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_54")) {
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
    } else if(jFirer.is("#s-Image_76")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-AddAddress_1" ]
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
    } else if(jFirer.is("#s-FingerprintImg_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-ProgressIndicator_2" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "480"
                    },
                    "height": {
                      "type": "noresize"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 1000
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-FingerprintImg_3" ],
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-FingerprintImg_2" ],
                    "effect": {
                      "type": "fade",
                      "easing": "swing",
                      "duration": 1000
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-DoneLbl_10" ],
                    "effect": {
                      "type": "explode",
                      "easing": "swing",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-SaveBtn_Normal_3" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Success" ],
                    "transition": {
                      "type": "slideup",
                      "duration": 300
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
    } else if(jFirer.is("#s-FingerprintImg_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-ProgressIndicator_2" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "320"
                    },
                    "height": {
                      "type": "noresize"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 1000
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-FingerprintImg_2" ],
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-FingerprintImg_1" ],
                    "effect": {
                      "type": "fade",
                      "easing": "swing",
                      "duration": 1000
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Step_3" ],
                    "transition": {
                      "type": "slideup",
                      "duration": 300
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
    } else if(jFirer.is("#s-FingerprintImg_0")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Image_94" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-ProgressIndicator_2" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "160"
                    },
                    "height": {
                      "type": "noresize"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 1000
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-FingerprintImg_1" ],
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-FingerprintImg_0" ],
                    "effect": {
                      "type": "fade",
                      "easing": "swing",
                      "duration": 1000
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Step_2" ],
                    "transition": {
                      "type": "slideup",
                      "duration": 300
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
    } else if(jFirer.is("#s-Btn_23")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-ScanBtn_Dsbld_1" ]
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
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Image_94" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-ProgressIndicator_2" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "160"
                    },
                    "height": {
                      "type": "noresize"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 1000
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-FingerprintImg_1" ],
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-FingerprintImg_0" ],
                    "effect": {
                      "type": "fade",
                      "easing": "swing",
                      "duration": 1000
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Step_2" ],
                    "transition": {
                      "type": "slideup",
                      "duration": 300
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
    } else if(jFirer.is("#s-Btn_25")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-ScanBtn_Dsbld_2" ]
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
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-ProgressIndicator_2" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "320"
                    },
                    "height": {
                      "type": "noresize"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 1000
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-FingerprintImg_2" ],
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-FingerprintImg_1" ],
                    "effect": {
                      "type": "fade",
                      "easing": "swing",
                      "duration": 1000
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Step_3" ],
                    "transition": {
                      "type": "slideup",
                      "duration": 300
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
    } else if(jFirer.is("#s-Btn_27")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-ScanBtn_Dsbld_3" ]
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
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-ProgressIndicator_2" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "480"
                    },
                    "height": {
                      "type": "noresize"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 1000
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-FingerprintImg_3" ],
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-FingerprintImg_2" ],
                    "effect": {
                      "type": "fade",
                      "easing": "swing",
                      "duration": 1000
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-DoneLbl_10" ],
                    "effect": {
                      "type": "explode",
                      "easing": "swing",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-SaveBtn_Normal_3" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Success" ],
                    "transition": {
                      "type": "slideup",
                      "duration": 300
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
    } else if(jFirer.is("#s-Rectangle_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-ReplaceBtn_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-ReplaceBtn_2","#s-ReplacementReason_1" ],
                    "effect": {
                      "type": "slide",
                      "easing": "swing",
                      "duration": 300,
                      "direction": "up"
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
    } else if(jFirer.is("#s-Btn_29")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-ScanBtn_Dsbld_4" ]
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
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Image_94" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-ProgressIndicator_2" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "160"
                    },
                    "height": {
                      "type": "noresize"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 1000
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-FingerprintImg_1" ],
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-FingerprintImg_0" ],
                    "effect": {
                      "type": "fade",
                      "easing": "swing",
                      "duration": 1000
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Step_2" ],
                    "transition": {
                      "type": "slideup",
                      "duration": 300
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-ScanBtn_Normal_4" ]
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
    } else if(jFirer.is("#s-ReplaceBtn_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-ReplaceBtn_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-ReplaceBtn_2","#s-ReplacementReason_1" ],
                    "effect": {
                      "type": "slide",
                      "easing": "swing",
                      "duration": 300,
                      "direction": "up"
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
    } else if(jFirer.is("#s-Rectangle_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_1 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#F7FFEC",
                        "background-attachment": "scroll",
                        "border-top-color": "#78BF12",
                        "border-right-color": "#78BF12",
                        "border-bottom-color": "#78BF12",
                        "border-left-color": "#78BF12"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_1 span": {
                      "attributes": {
                        "color": "#6AA90F"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_1": {
                      "attributes-ie": {
                        "border-top-color": "#78BF12",
                        "border-right-color": "#78BF12",
                        "border-bottom-color": "#78BF12",
                        "border-left-color": "#78BF12",
                        "-pie-background": "#F7FFEC",
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
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_36 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-attachment": "scroll",
                        "border-top-color": "#E5E5E5",
                        "border-right-color": "#E5E5E5",
                        "border-bottom-color": "#E5E5E5",
                        "border-left-color": "#E5E5E5"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_36 span": {
                      "attributes": {
                        "color": "#494949"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_36": {
                      "attributes-ie": {
                        "border-top-color": "#E5E5E5",
                        "border-right-color": "#E5E5E5",
                        "border-bottom-color": "#E5E5E5",
                        "border-left-color": "#E5E5E5",
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_35 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-attachment": "scroll",
                        "border-top-color": "#E5E5E5",
                        "border-right-color": "#E5E5E5",
                        "border-bottom-color": "#E5E5E5",
                        "border-left-color": "#E5E5E5"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_35 span": {
                      "attributes": {
                        "color": "#494949"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_35": {
                      "attributes-ie": {
                        "border-top-color": "#E5E5E5",
                        "border-right-color": "#E5E5E5",
                        "border-bottom-color": "#E5E5E5",
                        "border-left-color": "#E5E5E5",
                        "-pie-background": "#FFFFFF",
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
    } else if(jFirer.is("#s-Rectangle_35")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_35 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#F7FFEC",
                        "background-attachment": "scroll",
                        "border-top-color": "#78BF12",
                        "border-right-color": "#78BF12",
                        "border-bottom-color": "#78BF12",
                        "border-left-color": "#78BF12"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_35 span": {
                      "attributes": {
                        "color": "#6AA90F"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_35": {
                      "attributes-ie": {
                        "border-top-color": "#78BF12",
                        "border-right-color": "#78BF12",
                        "border-bottom-color": "#78BF12",
                        "border-left-color": "#78BF12",
                        "-pie-background": "#F7FFEC",
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
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_36 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-attachment": "scroll",
                        "border-top-color": "#E5E5E5",
                        "border-right-color": "#E5E5E5",
                        "border-bottom-color": "#E5E5E5",
                        "border-left-color": "#E5E5E5"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_36 span": {
                      "attributes": {
                        "color": "#494949"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_36": {
                      "attributes-ie": {
                        "border-top-color": "#E5E5E5",
                        "border-right-color": "#E5E5E5",
                        "border-bottom-color": "#E5E5E5",
                        "border-left-color": "#E5E5E5",
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_1 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-attachment": "scroll",
                        "border-top-color": "#E5E5E5",
                        "border-right-color": "#E5E5E5",
                        "border-bottom-color": "#E5E5E5",
                        "border-left-color": "#E5E5E5"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_1 span": {
                      "attributes": {
                        "color": "#494949"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_1": {
                      "attributes-ie": {
                        "border-top-color": "#E5E5E5",
                        "border-right-color": "#E5E5E5",
                        "border-bottom-color": "#E5E5E5",
                        "border-left-color": "#E5E5E5",
                        "-pie-background": "#FFFFFF",
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
    } else if(jFirer.is("#s-Rectangle_36")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_36 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#F7FFEC",
                        "background-attachment": "scroll",
                        "border-top-color": "#78BF12",
                        "border-right-color": "#78BF12",
                        "border-bottom-color": "#78BF12",
                        "border-left-color": "#78BF12"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_36 span": {
                      "attributes": {
                        "color": "#6AA90F"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_36": {
                      "attributes-ie": {
                        "border-top-color": "#78BF12",
                        "border-right-color": "#78BF12",
                        "border-bottom-color": "#78BF12",
                        "border-left-color": "#78BF12",
                        "-pie-background": "#F7FFEC",
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
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_35 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-attachment": "scroll",
                        "border-top-color": "#E5E5E5",
                        "border-right-color": "#E5E5E5",
                        "border-bottom-color": "#E5E5E5",
                        "border-left-color": "#E5E5E5"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_35 span": {
                      "attributes": {
                        "color": "#494949"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_35": {
                      "attributes-ie": {
                        "border-top-color": "#E5E5E5",
                        "border-right-color": "#E5E5E5",
                        "border-bottom-color": "#E5E5E5",
                        "border-left-color": "#E5E5E5",
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_1 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-attachment": "scroll",
                        "border-top-color": "#E5E5E5",
                        "border-right-color": "#E5E5E5",
                        "border-bottom-color": "#E5E5E5",
                        "border-left-color": "#E5E5E5"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_1 span": {
                      "attributes": {
                        "color": "#494949"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Rectangle_1": {
                      "attributes-ie": {
                        "border-top-color": "#E5E5E5",
                        "border-right-color": "#E5E5E5",
                        "border-bottom-color": "#E5E5E5",
                        "border-left-color": "#E5E5E5",
                        "-pie-background": "#FFFFFF",
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
    } else if(jFirer.is("#s-ReplaceBtn_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-AddFingerprint" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-SectionTitle_3" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ "Choose replacement finger for ",{
                        "datatype": "property",
                        "target": "#s-Title_3",
                        "property": "jimGetValue"
                      } ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-CancelReplaceBtn_3" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "ReplaceInProcess" ],
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimOr",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Done_R1",
                  "property": "jimIsVisible"
                },{
                  "datatype": "property",
                  "target": "#s-Add_R1",
                  "property": "jimIsVisible"
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-NA_R1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Empty_R2","#s-Empty_L2","#s-Empty_L1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimOr",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Done_L1",
                  "property": "jimIsVisible"
                },{
                  "datatype": "property",
                  "target": "#s-Add_L1",
                  "property": "jimIsVisible"
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-NA_L1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Empty_R2","#s-Empty_L2","#s-Empty_R1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimOr",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Done_L2",
                  "property": "jimIsVisible"
                },{
                  "datatype": "property",
                  "target": "#s-Add_L2",
                  "property": "jimIsVisible"
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-NA_L2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Empty_R2","#s-Empty_L1","#s-Empty_R1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimOr",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Done_R2",
                  "property": "jimIsVisible"
                },{
                  "datatype": "property",
                  "target": "#s-Add_R2",
                  "property": "jimIsVisible"
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-NA_R2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Empty_L2","#s-Empty_L1","#s-Empty_R1" ]
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
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "ActiveTab"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-NA_L1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-R2","#s-L2","#s-R1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "ActiveTab"
                },"2" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-NA_R1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-R2","#s-L2","#s-L1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "ActiveTab"
                },"3" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-NA_L2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-R2","#s-R1","#s-L1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "ActiveTab"
                },"4" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-NA_R2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-L2","#s-R1","#s-L1" ]
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
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-ProgressIndicator_2" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "0"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "3"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-FingerprintImg_0" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-FingerprintImg_2","#s-FingerprintImg_1","#s-Image_94","#s-FingerprintImg_3","#s-DoneLbl_10" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-SaveBtn_Dsbld_3","#s-Step_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-ReplaceBtn_2","#s-ReplacementReason_1" ]
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
    } else if(jFirer.is("#s-Btn_21")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-AddFingerprint" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-SectionTitle_3" ],
                    "value": "Selected fingers for bio enrollment "
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "ReplaceInProcess" ],
                    "value": "False"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-CancelReplaceBtn_3" ]
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
                    "target": [ "#s-DoneLbl_5" ]
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
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "ActiveTab"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Done_L1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-L1" ],
                    "effect": {
                      "type": "explode",
                      "easing": "swing",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "ActiveTab"
                },"2" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Done_R1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-R1" ],
                    "effect": {
                      "type": "explode",
                      "easing": "swing",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "ActiveTab"
                },"3" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Done_L2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-L2" ],
                    "effect": {
                      "type": "explode",
                      "easing": "swing",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "ActiveTab"
                },"4" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Done_R2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-R2" ],
                    "effect": {
                      "type": "explode",
                      "easing": "swing",
                      "duration": 300
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-NA_L1",
                  "property": "jimIsVisible"
                },{
                  "action": "jimContains",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "L1"
                  },"Done" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Done_L1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-NA_L1",
                  "property": "jimIsVisible"
                },{
                  "action": "jimContains",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "L1"
                  },"Add" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Add_L1" ]
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
                  "datatype": "property",
                  "target": "#s-NA_L2",
                  "property": "jimIsVisible"
                },{
                  "action": "jimContains",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "L2"
                  },"Done" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Done_L2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-NA_L2",
                  "property": "jimIsVisible"
                },{
                  "action": "jimContains",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "L2"
                  },"Add" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Add_L2" ]
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
                  "datatype": "property",
                  "target": "#s-NA_R1",
                  "property": "jimIsVisible"
                },{
                  "action": "jimContains",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "R1"
                  },"Done" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Done_R1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-NA_R1",
                  "property": "jimIsVisible"
                },{
                  "action": "jimContains",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "R1"
                  },"Add" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Add_R1" ]
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
                  "datatype": "property",
                  "target": "#s-NA_R2",
                  "property": "jimIsVisible"
                },{
                  "action": "jimContains",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "R2"
                  },"Done" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Done_R2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-NA_R2",
                  "property": "jimIsVisible"
                },{
                  "action": "jimContains",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "R2"
                  },"Add" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Add_R2" ]
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
                    "target": [ "#s-FingerprintImg_0" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-FingerprintImg_3","#s-DoneLbl_10" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-ProgressIndicator_2" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "0"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "3"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-SaveBtn_Dsbld_3" ]
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
    } else if(jFirer.is("#s-Image_36")) {
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
    } else if(jFirer.is("#s-Image_79")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-AddFingerprint" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-CancelReplaceBtn_3" ]
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
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-ProgressIndicator_2" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "0"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "3"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-FingerprintImg_0" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-FingerprintImg_2","#s-FingerprintImg_1","#s-Image_94","#s-FingerprintImg_3","#s-DoneLbl_10" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-SaveBtn_Dsbld_3","#s-Step_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-ReplaceBtn_2","#s-ReplacementReason_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-ReplaceBtn_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "ReplaceInProcess" ],
                    "value": "False"
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
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "ActiveTab"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-L1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "ActiveTab"
                },"2" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-R1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "ActiveTab"
                },"3" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-L2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "ActiveTab"
                },"4" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-R2" ]
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
                  "datatype": "property",
                  "target": "#s-NA_L1",
                  "property": "jimIsVisible"
                },{
                  "action": "jimContains",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "L1"
                  },"Done" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Done_L1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-NA_L1",
                  "property": "jimIsVisible"
                },{
                  "action": "jimContains",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "L1"
                  },"Add" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Add_L1" ]
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
                  "datatype": "property",
                  "target": "#s-NA_L2",
                  "property": "jimIsVisible"
                },{
                  "action": "jimContains",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "L2"
                  },"Done" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Done_L2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-NA_L2",
                  "property": "jimIsVisible"
                },{
                  "action": "jimContains",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "L2"
                  },"Add" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Add_L2" ]
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
                  "datatype": "property",
                  "target": "#s-NA_R1",
                  "property": "jimIsVisible"
                },{
                  "action": "jimContains",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "R1"
                  },"Done" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Done_R1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-NA_R1",
                  "property": "jimIsVisible"
                },{
                  "action": "jimContains",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "R1"
                  },"Add" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Add_R1" ]
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
                  "datatype": "property",
                  "target": "#s-NA_R2",
                  "property": "jimIsVisible"
                },{
                  "action": "jimContains",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "R2"
                  },"Done" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Done_R2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-NA_R2",
                  "property": "jimIsVisible"
                },{
                  "action": "jimContains",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "R2"
                  },"Add" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Add_R2" ]
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
    } else if(jFirer.is("#s-Button_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-FingerprintImg_0" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-FingerprintImg_2","#s-FingerprintImg_1","#s-FingerprintImg_3","#s-DoneLbl_10" ]
                  },
                  "exectype": "parallel",
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
                    "target": [ "#s-Step_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-SaveBtn_Dsbld_3" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-ProgressIndicator_2" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "0"
                    },
                    "height": {
                      "type": "noresize"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-ProgressIndicator_2" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "120"
                    },
                    "height": {
                      "type": "noresize"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-ProgressIndicator_2" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "0"
                    },
                    "height": {
                      "type": "noresize"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 500
                    }
                  },
                  "exectype": "timed",
                  "delay": 1500
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Image_94" ],
                    "effect": {
                      "type": "explode",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Failure" ],
                    "transition": {
                      "type": "slideup",
                      "duration": 300
                    }
                  },
                  "exectype": "parallel",
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
    } else if(jFirer.is("#s-SubmitBtn_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-AddSignature" ]
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
                    "target": [ "#s-Image_5","#s-SignatureImg_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-AddBtn_6" ]
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
                    "target": [ "#s-DoneLbl_8" ]
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
    } else if(jFirer.is("#s-CancelBtn_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-AddSignature" ]
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
    } else if(jFirer.is("#s-SnackbarBtn_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-PersonalInfo_Form" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Snackbar_1" ]
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
    } else if(jFirer.is("#s-SnackbarBtn_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "ActiveTabSync" ],
                    "value": "2"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/6d76b208-c981-4975-85e2-579fb217b360"
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
    } else if(jFirer.is("#s-Image_66")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Back" ]
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
    } else if(jFirer.is("#s-Rectangle_74")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-CameraApp_1" ]
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
    } else if(jFirer.is("#s-Image_68")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 500
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-AddDocument_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-CameraApp_1" ],
                    "effect": {
                      "type": "slide",
                      "easing": "swing",
                      "duration": 200,
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Back_1","#s-Front_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_11" ],
                    "value": "12345678"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_14" ],
                    "value": "Kenya"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_54","#s-Rectangle_55" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-SaveBtn_Normal_1" ]
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
    } else if(jFirer.is("#s-Rectangle_72")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Front" ]
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
    } else if(jFirer.is("#s-Rectangle_73")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-CameraApp_1" ]
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
    } else if(jFirer.is("#s-PrototypeTip_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-PrototypeTip_1" ]
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
  .on("drag", ".s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb .drag", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Title_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-AddFingerprint" ],
                    "top": {
                      "type": "nomove"
                    },
                    "left": {
                      "type": "movewithcursor",
                      "value": null
                    },
                    "containment": true
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
  .on("dragend", ".s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb .drag", function(event, data) {
    jimEvent(event).jimRestoreDrag(jQuery(this));
  })
  .on("dragend", ".s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb .drag", function(event, data) {
    jimEvent(event).jimDestroyDrag(jQuery(this));
  })
  .on("keyup.jim", ".s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb .keyup", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_36")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.which === 13 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false),
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Input_36 > .backgroundLayer": {
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
              "condition": (data.which === 13 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false) && {
                "action": "jimOr",
                "parameter": [ {
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_36",
                    "property": "jimGetValue"
                  }," " ]
                },{
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_36",
                    "property": "jimGetValue"
                  },"" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_76" ],
                    "effect": {
                      "type": "slide",
                      "easing": "swing",
                      "duration": 100,
                      "direction": "up"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_36" ],
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-RemoveBtn_7" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-DoneLbl_6" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": (data.which === 13 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false),
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-RemoveBtn_7" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-DoneLbl_6" ]
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
              "condition": (data.which === 13 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false) && {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimAnd",
                  "parameter": [ {
                    "action": "jimAnd",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-DoneLbl_1",
                      "property": "jimIsVisible"
                    },{
                      "datatype": "property",
                      "target": "#s-DoneLbl_2",
                      "property": "jimIsVisible"
                    } ]
                  },{
                    "datatype": "property",
                    "target": "#s-DoneLbl_4",
                    "property": "jimIsVisible"
                  } ]
                },{
                  "action": "jimAnd",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-DoneLbl_3",
                    "property": "jimIsVisible"
                  },{
                    "datatype": "property",
                    "target": "#s-DoneLbl_6",
                    "property": "jimIsVisible"
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-ContinueBtn_Normal_1","#s-UploadBtn_Normal" ]
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
      if(data.which === 9) {
        return false;
      }
    } else if(jFirer.is("#s-Input_38")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.which === 13 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false),
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Input_38 > .backgroundLayer": {
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
              "condition": (data.which === 13 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false) && {
                "action": "jimOr",
                "parameter": [ {
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_38",
                    "property": "jimGetValue"
                  }," " ]
                },{
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_38",
                    "property": "jimGetValue"
                  },"" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_77" ],
                    "effect": {
                      "type": "slide",
                      "easing": "swing",
                      "duration": 100,
                      "direction": "up"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_38" ],
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
      if(data.which === 9) {
        return false;
      }
    } else if(jFirer.is("#s-Input_40")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.which === 13 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false),
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Input_40 > .backgroundLayer": {
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
              "condition": (data.which === 13 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false) && {
                "action": "jimOr",
                "parameter": [ {
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_40",
                    "property": "jimGetValue"
                  }," " ]
                },{
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_40",
                    "property": "jimGetValue"
                  },"" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_79" ],
                    "effect": {
                      "type": "slide",
                      "easing": "swing",
                      "duration": 100,
                      "direction": "up"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_40" ],
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
      if(data.which === 9) {
        return false;
      }
    } else if(jFirer.is("#s-Input_11")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.which === 13 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false),
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Input_11 > .backgroundLayer": {
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
              "condition": (data.which === 13 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false) && {
                "action": "jimOr",
                "parameter": [ {
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_11",
                    "property": "jimGetValue"
                  }," " ]
                },{
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_11",
                    "property": "jimGetValue"
                  },"" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_54" ],
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
                    "target": [ "#s-Input_11" ],
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
              "condition": (data.which === 13 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false) && {
                "action": "jimNotEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_11",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-DoneLbl_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-SaveBtn_Normal_1" ]
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
              "condition": (data.which === 13 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false) && {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimAnd",
                  "parameter": [ {
                    "action": "jimAnd",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-DoneLbl_1",
                      "property": "jimIsVisible"
                    },{
                      "datatype": "property",
                      "target": "#s-DoneLbl_2",
                      "property": "jimIsVisible"
                    } ]
                  },{
                    "datatype": "property",
                    "target": "#s-DoneLbl_4",
                    "property": "jimIsVisible"
                  } ]
                },{
                  "action": "jimAnd",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-DoneLbl_3",
                    "property": "jimIsVisible"
                  },{
                    "datatype": "property",
                    "target": "#s-DoneLbl_6",
                    "property": "jimIsVisible"
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-ContinueBtn_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-SaveAsDraftBtn_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-UploadBtn_Normal" ]
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
      if(data.which === 9) {
        return false;
      }
    }
  })
  .on("change", ".s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb .change", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Category_9")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "ActiveTab"
                },"2" ]
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
    } else if(jFirer.is("#s-Category_10")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "ActiveTab"
                },"2" ]
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
    } else if(jFirer.is("#s-Category_12")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "ActiveTab"
                },"2" ]
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
    } else if(jFirer.is("#s-Category_17")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Category_17",
                  "property": "jimGetSelectedValue"
                },{
                  "datatype": "property",
                  "target": "#s-Rectangle_83",
                  "property": "jimGetValue"
                } ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_83" ],
                    "effect": {
                      "type": "slide",
                      "easing": "swing",
                      "duration": 200,
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
    } else if(jFirer.is("#s-Category_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Title_1" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Category_6",
                      "property": "jimGetSelectedValue"
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
    } else if(jFirer.is("#s-Category_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Title_2" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Category_5",
                      "property": "jimGetSelectedValue"
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
  .on("focusin", ".s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_27")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Input_27 > .backgroundLayer": {
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
                  "target": "#s-Input_27",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_27" ],
                    "value": " "
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_65" ],
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
    } else if(jFirer.is("#s-Input_26")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Input_26 > .backgroundLayer": {
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
                  "target": "#s-Input_26",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_26" ],
                    "value": " "
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_64" ],
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
    } else if(jFirer.is("#s-Input_25")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Input_25 > .backgroundLayer": {
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
                  "target": "#s-Input_25",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_25" ],
                    "value": " "
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_63" ],
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
    } else if(jFirer.is("#s-Input_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Input_4 > .backgroundLayer": {
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Category_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Category_1 > .backgroundLayer": {
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Category_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Category_2 > .backgroundLayer": {
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_24")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Input_24 > .backgroundLayer": {
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
                  "target": "#s-Input_24",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_24" ],
                    "value": " "
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_62" ],
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
    } else if(jFirer.is("#s-Input_23")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Input_23 > .backgroundLayer": {
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
                  "target": "#s-Input_23",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_23" ],
                    "value": " "
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_61" ],
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
    } else if(jFirer.is("#s-Input_22")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Input_22 > .backgroundLayer": {
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
                  "target": "#s-Input_22",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_22" ],
                    "value": " "
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_60" ],
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
    } else if(jFirer.is("#s-Input_20")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Input_20 > .backgroundLayer": {
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
                  "target": "#s-Input_20",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_20" ],
                    "value": " "
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_59" ],
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
    } else if(jFirer.is("#s-Category_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Category_9 > .backgroundLayer": {
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_36")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Input_36 > .backgroundLayer": {
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
                  "target": "#s-Input_36",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_36" ],
                    "value": " "
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_76" ],
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
    } else if(jFirer.is("#s-Category_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Category_10 > .backgroundLayer": {
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_38")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Input_38 > .backgroundLayer": {
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
                  "target": "#s-Input_38",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_38" ],
                    "value": " "
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_77" ],
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
    } else if(jFirer.is("#s-Category_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Category_12 > .backgroundLayer": {
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_40")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Input_40 > .backgroundLayer": {
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
                  "target": "#s-Input_40",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_40" ],
                    "value": " "
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_79" ],
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
    } else if(jFirer.is("#s-Input_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Input_12 > .backgroundLayer": {
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
                  "target": "#s-Input_12",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_12" ],
                    "value": " "
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_44" ],
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
    } else if(jFirer.is("#s-Input_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Input_13 > .backgroundLayer": {
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
                  "target": "#s-Input_13",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_13" ],
                    "value": " "
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_47" ],
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
    } else if(jFirer.is("#s-Input_18")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Input_18 > .backgroundLayer": {
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
                  "target": "#s-Input_18",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_18" ],
                    "value": " "
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_48" ],
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
    } else if(jFirer.is("#s-Category_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Category_11 > .backgroundLayer": {
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Category_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Category_13 > .backgroundLayer": {
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Category_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Category_14 > .backgroundLayer": {
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Category_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Category_15 > .backgroundLayer": {
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Category_16")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Category_16 > .backgroundLayer": {
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_19")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Input_19 > .backgroundLayer": {
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
                  "target": "#s-Input_19",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_19" ],
                    "value": " "
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_50" ],
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
    } else if(jFirer.is("#s-Category_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Category_17 > .backgroundLayer": {
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
                "action": "jimNot",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Rectangle_83",
                  "property": "jimIsVisible"
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_83" ],
                    "effect": {
                      "type": "slide",
                      "easing": "swing",
                      "duration": 200,
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
    } else if(jFirer.is("#s-Input_21")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Input_21 > .backgroundLayer": {
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Category_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Category_6 > .backgroundLayer": {
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Input_11 > .backgroundLayer": {
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
                  "target": "#s-Input_11",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_11" ],
                    "value": " "
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_54" ],
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
    } else if(jFirer.is("#s-Input_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Input_14 > .backgroundLayer": {
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
                  "target": "#s-Input_14",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_14" ],
                    "value": " "
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_55" ],
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
    } else if(jFirer.is("#s-Input_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Input_15 > .backgroundLayer": {
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_16")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Input_16 > .backgroundLayer": {
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Category_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Category_5 > .backgroundLayer": {
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Input_1 > .backgroundLayer": {
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
                  "target": "#s-Input_1",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_1" ],
                    "value": " "
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_9" ],
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
    } else if(jFirer.is("#s-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Input_2 > .backgroundLayer": {
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
                  "target": "#s-Input_2",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_2" ],
                    "value": " "
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_12" ],
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
    } else if(jFirer.is("#s-Input_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Input_3 > .backgroundLayer": {
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
                  "target": "#s-Input_3",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_3" ],
                    "value": " "
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_13" ],
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
    } else if(jFirer.is("#s-Input_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Input_6 > .backgroundLayer": {
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
                  "target": "#s-Input_6",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_6" ],
                    "value": " "
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_14" ],
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
    } else if(jFirer.is("#s-Input_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Input_7 > .backgroundLayer": {
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
                  "target": "#s-Input_7",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_7" ],
                    "value": " "
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_15" ],
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
    } else if(jFirer.is("#s-Input_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Input_8 > .backgroundLayer": {
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
                  "target": "#s-Input_8",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_8" ],
                    "value": " "
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_16" ],
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
    } else if(jFirer.is("#s-Input_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Input_9 > .backgroundLayer": {
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
                  "target": "#s-Input_9",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_9" ],
                    "value": " "
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_21" ],
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
  .on("focusout", ".s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_27")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Input_27 > .backgroundLayer": {
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
                    "target": "#s-Input_27",
                    "property": "jimGetValue"
                  }," " ]
                },{
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_27",
                    "property": "jimGetValue"
                  },"" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_65" ],
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
                    "target": [ "#s-Input_27" ],
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
                      "target": "#s-Input_27",
                      "property": "jimGetValue"
                    },"" ]
                  },{
                    "action": "jimNotEquals",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Input_26",
                      "property": "jimGetValue"
                    },"" ]
                  } ]
                },{
                  "action": "jimNotEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_24",
                    "property": "jimGetValue"
                  },"" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-DoneLbl_1" ]
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
                    "action": "jimAnd",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-DoneLbl_1",
                      "property": "jimIsVisible"
                    },{
                      "datatype": "property",
                      "target": "#s-DoneLbl_2",
                      "property": "jimIsVisible"
                    } ]
                  },{
                    "datatype": "property",
                    "target": "#s-DoneLbl_4",
                    "property": "jimIsVisible"
                  } ]
                },{
                  "action": "jimAnd",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-DoneLbl_3",
                    "property": "jimIsVisible"
                  },{
                    "datatype": "property",
                    "target": "#s-DoneLbl_6",
                    "property": "jimIsVisible"
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-ContinueBtn_Normal_1","#s-UploadBtn_Normal" ]
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
    } else if(jFirer.is("#s-Input_26")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Input_26 > .backgroundLayer": {
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
                    "target": "#s-Input_26",
                    "property": "jimGetValue"
                  }," " ]
                },{
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_26",
                    "property": "jimGetValue"
                  },"" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_64" ],
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
                    "target": [ "#s-Input_26" ],
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
                      "target": "#s-Input_27",
                      "property": "jimGetValue"
                    },"" ]
                  },{
                    "action": "jimNotEquals",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Input_26",
                      "property": "jimGetValue"
                    },"" ]
                  } ]
                },{
                  "action": "jimNotEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_24",
                    "property": "jimGetValue"
                  },"" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-DoneLbl_1" ]
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
                    "action": "jimAnd",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-DoneLbl_1",
                      "property": "jimIsVisible"
                    },{
                      "datatype": "property",
                      "target": "#s-DoneLbl_2",
                      "property": "jimIsVisible"
                    } ]
                  },{
                    "datatype": "property",
                    "target": "#s-DoneLbl_4",
                    "property": "jimIsVisible"
                  } ]
                },{
                  "action": "jimAnd",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-DoneLbl_3",
                    "property": "jimIsVisible"
                  },{
                    "datatype": "property",
                    "target": "#s-DoneLbl_6",
                    "property": "jimIsVisible"
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-ContinueBtn_Normal_1","#s-UploadBtn_Normal" ]
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
    } else if(jFirer.is("#s-Input_25")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Input_25 > .backgroundLayer": {
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
                    "target": "#s-Input_25",
                    "property": "jimGetValue"
                  }," " ]
                },{
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_25",
                    "property": "jimGetValue"
                  },"" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_63" ],
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
                    "target": [ "#s-Input_25" ],
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Input_4 > .backgroundLayer": {
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Category_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Category_1 > .backgroundLayer": {
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Category_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Category_2 > .backgroundLayer": {
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_24")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Input_24 > .backgroundLayer": {
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
                    "target": "#s-Input_24",
                    "property": "jimGetValue"
                  }," " ]
                },{
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_24",
                    "property": "jimGetValue"
                  },"" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_62" ],
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
                    "target": [ "#s-Input_24" ],
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
                      "target": "#s-Input_27",
                      "property": "jimGetValue"
                    },"" ]
                  },{
                    "action": "jimNotEquals",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-Input_26",
                      "property": "jimGetValue"
                    },"" ]
                  } ]
                },{
                  "action": "jimNotEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_24",
                    "property": "jimGetValue"
                  },"" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-DoneLbl_1" ]
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
                    "action": "jimAnd",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-DoneLbl_1",
                      "property": "jimIsVisible"
                    },{
                      "datatype": "property",
                      "target": "#s-DoneLbl_2",
                      "property": "jimIsVisible"
                    } ]
                  },{
                    "datatype": "property",
                    "target": "#s-DoneLbl_4",
                    "property": "jimIsVisible"
                  } ]
                },{
                  "action": "jimAnd",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-DoneLbl_3",
                    "property": "jimIsVisible"
                  },{
                    "datatype": "property",
                    "target": "#s-DoneLbl_6",
                    "property": "jimIsVisible"
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-ContinueBtn_Normal_1","#s-UploadBtn_Normal" ]
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
    } else if(jFirer.is("#s-Input_23")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Input_23 > .backgroundLayer": {
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
                    "target": "#s-Input_23",
                    "property": "jimGetValue"
                  }," " ]
                },{
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_23",
                    "property": "jimGetValue"
                  },"" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_61" ],
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
                    "target": [ "#s-Input_23" ],
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_22")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Input_22 > .backgroundLayer": {
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
                    "target": "#s-Input_22",
                    "property": "jimGetValue"
                  }," " ]
                },{
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_22",
                    "property": "jimGetValue"
                  },"" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_60" ],
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
                    "target": [ "#s-Input_22" ],
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_20")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Input_20 > .backgroundLayer": {
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
                    "target": "#s-Input_20",
                    "property": "jimGetValue"
                  }," " ]
                },{
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_20",
                    "property": "jimGetValue"
                  },"" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_59" ],
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
                    "target": [ "#s-Input_20" ],
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Category_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Category_9 > .backgroundLayer": {
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_36")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Input_36 > .backgroundLayer": {
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
                    "target": "#s-Input_36",
                    "property": "jimGetValue"
                  }," " ]
                },{
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_36",
                    "property": "jimGetValue"
                  },"" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_76" ],
                    "effect": {
                      "type": "slide",
                      "easing": "swing",
                      "duration": 100,
                      "direction": "up"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_36" ],
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-RemoveBtn_7" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-DoneLbl_6" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-RemoveBtn_7" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-DoneLbl_6" ]
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
                    "action": "jimAnd",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-DoneLbl_1",
                      "property": "jimIsVisible"
                    },{
                      "datatype": "property",
                      "target": "#s-DoneLbl_2",
                      "property": "jimIsVisible"
                    } ]
                  },{
                    "datatype": "property",
                    "target": "#s-DoneLbl_4",
                    "property": "jimIsVisible"
                  } ]
                },{
                  "action": "jimAnd",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-DoneLbl_3",
                    "property": "jimIsVisible"
                  },{
                    "datatype": "property",
                    "target": "#s-DoneLbl_6",
                    "property": "jimIsVisible"
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-ContinueBtn_Normal_1","#s-UploadBtn_Normal" ]
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
    } else if(jFirer.is("#s-Category_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Category_10 > .backgroundLayer": {
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_38")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Input_38 > .backgroundLayer": {
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
                    "target": "#s-Input_38",
                    "property": "jimGetValue"
                  }," " ]
                },{
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_38",
                    "property": "jimGetValue"
                  },"" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_77" ],
                    "effect": {
                      "type": "slide",
                      "easing": "swing",
                      "duration": 100,
                      "direction": "up"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_38" ],
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Category_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Category_12 > .backgroundLayer": {
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_40")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Input_40 > .backgroundLayer": {
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
                    "target": "#s-Input_40",
                    "property": "jimGetValue"
                  }," " ]
                },{
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_40",
                    "property": "jimGetValue"
                  },"" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_79" ],
                    "effect": {
                      "type": "slide",
                      "easing": "swing",
                      "duration": 100,
                      "direction": "up"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_40" ],
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Input_12 > .backgroundLayer": {
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
                    "target": "#s-Input_12",
                    "property": "jimGetValue"
                  }," " ]
                },{
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_12",
                    "property": "jimGetValue"
                  },"" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_44" ],
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
                    "target": [ "#s-Input_12" ],
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
                "action": "jimNotEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_12",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-DoneLbl_4" ]
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
                    "action": "jimAnd",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-DoneLbl_1",
                      "property": "jimIsVisible"
                    },{
                      "datatype": "property",
                      "target": "#s-DoneLbl_2",
                      "property": "jimIsVisible"
                    } ]
                  },{
                    "datatype": "property",
                    "target": "#s-DoneLbl_4",
                    "property": "jimIsVisible"
                  } ]
                },{
                  "action": "jimAnd",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-DoneLbl_3",
                    "property": "jimIsVisible"
                  },{
                    "datatype": "property",
                    "target": "#s-DoneLbl_6",
                    "property": "jimIsVisible"
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-ContinueBtn_Normal_1","#s-UploadBtn_Normal" ]
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
    } else if(jFirer.is("#s-Input_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Input_13 > .backgroundLayer": {
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
                    "target": "#s-Input_13",
                    "property": "jimGetValue"
                  }," " ]
                },{
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_13",
                    "property": "jimGetValue"
                  },"" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_47" ],
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
                    "target": [ "#s-Input_13" ],
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_18")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Input_18 > .backgroundLayer": {
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
                    "target": "#s-Input_18",
                    "property": "jimGetValue"
                  }," " ]
                },{
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_18",
                    "property": "jimGetValue"
                  },"" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_48" ],
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
                    "target": [ "#s-Input_18" ],
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Category_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Category_11 > .backgroundLayer": {
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Category_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Category_13 > .backgroundLayer": {
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Category_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Category_14 > .backgroundLayer": {
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Category_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Category_15 > .backgroundLayer": {
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Category_16")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Category_16 > .backgroundLayer": {
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_19")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Input_19 > .backgroundLayer": {
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
                    "target": "#s-Input_19",
                    "property": "jimGetValue"
                  }," " ]
                },{
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_19",
                    "property": "jimGetValue"
                  },"" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_50" ],
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
                    "target": [ "#s-Input_19" ],
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Category_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Category_17 > .backgroundLayer": {
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_21")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Input_21 > .backgroundLayer": {
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Category_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Category_6 > .backgroundLayer": {
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Input_11 > .backgroundLayer": {
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
                    "target": "#s-Input_11",
                    "property": "jimGetValue"
                  }," " ]
                },{
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_11",
                    "property": "jimGetValue"
                  },"" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_54" ],
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
                    "target": [ "#s-Input_11" ],
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
                "action": "jimNotEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_11",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-DoneLbl_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-SaveBtn_Normal_1" ]
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
                    "action": "jimAnd",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-DoneLbl_1",
                      "property": "jimIsVisible"
                    },{
                      "datatype": "property",
                      "target": "#s-DoneLbl_2",
                      "property": "jimIsVisible"
                    } ]
                  },{
                    "datatype": "property",
                    "target": "#s-DoneLbl_4",
                    "property": "jimIsVisible"
                  } ]
                },{
                  "action": "jimAnd",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-DoneLbl_3",
                    "property": "jimIsVisible"
                  },{
                    "datatype": "property",
                    "target": "#s-DoneLbl_6",
                    "property": "jimIsVisible"
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-ContinueBtn_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-SaveAsDraftBtn_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-UploadBtn_Normal" ]
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
    } else if(jFirer.is("#s-Input_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Input_14 > .backgroundLayer": {
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
                    "target": "#s-Input_14",
                    "property": "jimGetValue"
                  }," " ]
                },{
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_14",
                    "property": "jimGetValue"
                  },"" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_55" ],
                    "effect": {
                      "type": "slide",
                      "easing": "swing",
                      "duration": 100,
                      "direction": "up"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_14" ],
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Input_15 > .backgroundLayer": {
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_16")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Input_16 > .backgroundLayer": {
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Category_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Category_5 > .backgroundLayer": {
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
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-DoneLbl_3" ]
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
                    "action": "jimAnd",
                    "parameter": [ {
                      "datatype": "property",
                      "target": "#s-DoneLbl_1",
                      "property": "jimIsVisible"
                    },{
                      "datatype": "property",
                      "target": "#s-DoneLbl_2",
                      "property": "jimIsVisible"
                    } ]
                  },{
                    "datatype": "property",
                    "target": "#s-DoneLbl_4",
                    "property": "jimIsVisible"
                  } ]
                },{
                  "action": "jimAnd",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-DoneLbl_3",
                    "property": "jimIsVisible"
                  },{
                    "datatype": "property",
                    "target": "#s-DoneLbl_6",
                    "property": "jimIsVisible"
                  } ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-ContinueBtn_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-SaveAsDraftBtn_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-UploadBtn_Normal" ]
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
    } else if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Input_1 > .backgroundLayer": {
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
                    "target": "#s-Input_1",
                    "property": "jimGetValue"
                  }," " ]
                },{
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_1",
                    "property": "jimGetValue"
                  },"" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_9" ],
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
                    "target": [ "#s-Input_1" ],
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Input_2 > .backgroundLayer": {
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
                    "target": "#s-Input_2",
                    "property": "jimGetValue"
                  }," " ]
                },{
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_2",
                    "property": "jimGetValue"
                  },"" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_12" ],
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
                    "target": [ "#s-Input_2" ],
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Input_3 > .backgroundLayer": {
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
                    "target": "#s-Input_3",
                    "property": "jimGetValue"
                  }," " ]
                },{
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_3",
                    "property": "jimGetValue"
                  },"" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_13" ],
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
                    "target": [ "#s-Input_3" ],
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Input_6 > .backgroundLayer": {
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
                    "target": "#s-Input_6",
                    "property": "jimGetValue"
                  }," " ]
                },{
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_6",
                    "property": "jimGetValue"
                  },"" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_14" ],
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
                    "target": [ "#s-Input_6" ],
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Input_7 > .backgroundLayer": {
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
                    "target": "#s-Input_7",
                    "property": "jimGetValue"
                  }," " ]
                },{
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_7",
                    "property": "jimGetValue"
                  },"" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_15" ],
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
                    "target": [ "#s-Input_7" ],
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Input_8 > .backgroundLayer": {
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
                    "target": "#s-Input_8",
                    "property": "jimGetValue"
                  }," " ]
                },{
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_8",
                    "property": "jimGetValue"
                  },"" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_16" ],
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
                    "target": [ "#s-Input_8" ],
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Input_9 > .backgroundLayer": {
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
                    "target": "#s-Input_9",
                    "property": "jimGetValue"
                  }," " ]
                },{
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_9",
                    "property": "jimGetValue"
                  },"" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Rectangle_21" ],
                    "effect": {
                      "type": "slide",
                      "easing": "swing",
                      "duration": 100,
                      "direction": "up"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_9" ],
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("variablechange.jim", ".s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb .variablechange", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Panel_29")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "ActiveTab") && {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "ActiveTab"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Back_1","#s-Front_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": (data.variableTarget === "ActiveTab"),
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Back_1","#s-Front_1" ]
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
  .on("panelactive", ".s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb .panelactive", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-PersonalInfo_Form")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-SaveAsDraftBtn_Normal" ]
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
    } else if(jFirer.is("#s-Bio_Form")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-SaveAsDraftBtn_Normal" ]
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
    } else if(jFirer.is("#s-Add_R1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "R1" ],
                    "value": "Add"
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
    } else if(jFirer.is("#s-Done_R1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "R1" ],
                    "value": "Done"
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
    } else if(jFirer.is("#s-Add_R2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "R2" ],
                    "value": "Add"
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
    } else if(jFirer.is("#s-Done_R2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "R2" ],
                    "value": "Done"
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
    } else if(jFirer.is("#s-Add_L1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "L1" ],
                    "value": "Add"
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
    } else if(jFirer.is("#s-Done_L1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "L1" ],
                    "value": "Done"
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
    } else if(jFirer.is("#s-Add_L2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "L2" ],
                    "value": "Add"
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
    } else if(jFirer.is("#s-Done_L2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "L2" ],
                    "value": "Done"
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
    } else if(jFirer.is("#s-ContactInfo_Form_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-SaveAsDraftBtn_Normal" ]
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
    } else if(jFirer.is("#s-SocialStatus_Form")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-SaveAsDraftBtn_Normal" ]
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
    } else if(jFirer.is("#s-ContactInfo_Form_1_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-SaveAsDraftBtn_Normal" ]
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
    } else if(jFirer.is("#s-EmptyState_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-DoneLbl_3" ]
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
    } else if(jFirer.is("#s-Added_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-DoneLbl_3" ]
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
    } else if(jFirer.is("#s-Identity_Form_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-SaveAsDraftBtn_Normal" ]
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
    } else if(jFirer.is("#s-EmptyState_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-DoneLbl_2" ]
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
    } else if(jFirer.is("#s-Added_1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "datatype": "property",
                "target": "#s-Added_2",
                "property": "jimIsVisible"
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-DoneLbl_2" ]
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
    } else if(jFirer.is("#s-EmptyState_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-DoneLbl_2" ]
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
    } else if(jFirer.is("#s-Added_2")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "datatype": "property",
                "target": "#s-Added_1",
                "property": "jimIsVisible"
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-DoneLbl_2" ]
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
    } else if(jFirer.is("#s-Signature_Form")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-SaveAsDraftBtn_Dsbld" ]
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
    } else if(jFirer.is("#s-AddressPanel_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Button_2 > .backgroundLayer": {
                      "attributes": {
                        "border-bottom-color": "#1E82F7"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Button_2 span": {
                      "attributes": {
                        "color": "#1E82F7"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Button_2": {
                      "attributes-ie": {
                        "border-bottom-color": "#1E82F7"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Button_1 > .backgroundLayer": {
                      "attributes": {
                        "border-bottom-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Button_1 span": {
                      "attributes": {
                        "color": "#444444"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Button_1": {
                      "attributes-ie": {
                        "border-bottom-color": "#FFFFFF"
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
    } else if(jFirer.is("#s-MapPanel_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Button_1 > .backgroundLayer": {
                      "attributes": {
                        "border-bottom-color": "#1E82F7"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Button_1 span": {
                      "attributes": {
                        "color": "#1E82F7"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Button_1": {
                      "attributes-ie": {
                        "border-bottom-color": "#1E82F7"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Button_2 > .backgroundLayer": {
                      "attributes": {
                        "border-bottom-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Button_2 span": {
                      "attributes": {
                        "color": "#444444"
                      }
                    }
                  },{
                    "#s-673cd4c6-a45b-4a02-b431-71ca1b1bcfbb #s-Button_2": {
                      "attributes-ie": {
                        "border-bottom-color": "#FFFFFF"
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
    } else if(jFirer.is("#s-Syncronizing_Success")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 5000
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Snackbar_1" ],
                    "effect": {
                      "type": "fade",
                      "easing": "swing",
                      "duration": 200
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
  });