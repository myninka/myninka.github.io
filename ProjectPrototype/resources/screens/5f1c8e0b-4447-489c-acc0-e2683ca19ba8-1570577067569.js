jQuery("#simulation")
  .on("click", ".s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-ClearBtn_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-ClearBtn_1" ]
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
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-SearchIcon" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_14")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNot",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Panel_14",
                  "property": "jimIsVisible"
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-AdvancedFilter" ],
                    "effect": {
                      "type": "slide",
                      "easing": "swing",
                      "duration": 200,
                      "direction": "right"
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
    } else if(jFirer.is("#s-SearchFilter_Btn_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-SearchFilter_Dlg_1" ],
                    "effect": {
                      "type": "fade",
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Deco_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-SearchFilter_Dlg_1" ],
                    "effect": {
                      "type": "fade",
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
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-SearchFilter_Dlg_1" ],
                    "effect": {
                      "type": "fade",
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-ServerData_Img")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-SearchFilter_Dlg_1" ],
                    "effect": {
                      "type": "fade",
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-DeviceData_Img")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-SearchFilter_Dlg_1" ],
                    "effect": {
                      "type": "fade",
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_25")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_109 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_109 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_109": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_46 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_46 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_46": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_108 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_108 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_108": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_25 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_25 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_25": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_83 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_83 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_83": {
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
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_25 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_25": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_25 span": {
                      "attributes": {
                        "color": "#1E82F7",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_25": {
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
    } else if(jFirer.is("#s-Rectangle_83")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_109 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_109 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_109": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_46 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_46 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_46": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_108 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_108 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_108": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_25 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_25 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_25": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_83 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_83 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_83": {
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
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_83 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_83 span": {
                      "attributes": {
                        "color": "#1E82F7"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_83": {
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
    } else if(jFirer.is("#s-Rectangle_46")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_109 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_109 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_109": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_46 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_46 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_46": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_108 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_108 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_108": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_25 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_25 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_25": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_83 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_83 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_83": {
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
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_46 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_46 span": {
                      "attributes": {
                        "color": "#1E82F7"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_46": {
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
    } else if(jFirer.is("#s-Rectangle_108")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_109 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_109 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_109": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_46 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_46 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_46": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_108 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_108 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_108": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_25 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_25 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_25": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_83 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_83 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_83": {
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
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_108 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_108 span": {
                      "attributes": {
                        "color": "#1E82F7"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_108": {
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
    } else if(jFirer.is("#s-Rectangle_109")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_109 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_109 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_109": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_46 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_46 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_46": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_108 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_108 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_108": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_25 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_25 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_25": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_83 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_83 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_83": {
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
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_109 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_109 span": {
                      "attributes": {
                        "color": "#1E82F7"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Rectangle_109": {
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
    } else if(jFirer.is("#s-Rectangle_26")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/56942cd0-2160-4841-b843-ac43598bed1b"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
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
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/56942cd0-2160-4841-b843-ac43598bed1b"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
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
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/56942cd0-2160-4841-b843-ac43598bed1b"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_32")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/56942cd0-2160-4841-b843-ac43598bed1b"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_42")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/56942cd0-2160-4841-b843-ac43598bed1b"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
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
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/56942cd0-2160-4841-b843-ac43598bed1b"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_47")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/56942cd0-2160-4841-b843-ac43598bed1b"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-FilterResults_Lbl_1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNot",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Panel_14",
                  "property": "jimIsVisible"
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-AdvancedFilter" ],
                    "effect": {
                      "type": "slide",
                      "easing": "swing",
                      "duration": 200,
                      "direction": "right"
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
    } else if(jFirer.is("#s-Image_16")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNot",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Panel_14",
                  "property": "jimIsVisible"
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-AdvancedFilter" ],
                    "effect": {
                      "type": "slide",
                      "easing": "swing",
                      "duration": 200,
                      "direction": "right"
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
    } else if(jFirer.is("#s-Label_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Label_7 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Label_9 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Label_8 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Label_6 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Label_6 span": {
                      "attributes": {
                        "color": "#1E82F7"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Line_5" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "47"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "52"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "linear",
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
    } else if(jFirer.is("#s-Label_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Label_7 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Label_9 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Label_8 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Label_6 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Label_7 span": {
                      "attributes": {
                        "color": "#1E82F7"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Line_5" ],
                    "top": {
                      "type": "nomove"
                    },
                    "left": {
                      "type": "exprvalue",
                      "value": {
                        "datatype": "property",
                        "target": "#s-Label_7",
                        "property": "jimGetPositionX"
                      }
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "linear",
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
    } else if(jFirer.is("#s-Label_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Label_7 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Label_9 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Label_8 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Label_6 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Label_8 span": {
                      "attributes": {
                        "color": "#1E82F7"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Line_5" ],
                    "top": {
                      "type": "nomove"
                    },
                    "left": {
                      "type": "exprvalue",
                      "value": {
                        "datatype": "property",
                        "target": "#s-Label_8",
                        "property": "jimGetPositionX"
                      }
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "linear",
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
    } else if(jFirer.is("#s-Label_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Label_7 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Label_9 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Label_8 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Label_6 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Label_9 span": {
                      "attributes": {
                        "color": "#1E82F7"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Line_5" ],
                    "top": {
                      "type": "nomove"
                    },
                    "left": {
                      "type": "exprvalue",
                      "value": {
                        "datatype": "property",
                        "target": "#s-Label_9",
                        "property": "jimGetPositionX"
                      }
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "linear",
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
    } else if(jFirer.is("#s-Image_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isbackward": true
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_7")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNot",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Panel_24",
                  "property": "jimIsVisible"
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-History_Dlg_1" ],
                    "effect": {
                      "type": "slide",
                      "easing": "swing",
                      "duration": 300,
                      "direction": "right"
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
    } else if(jFirer.is("#s-Hotspot_4")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNot",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Panel_21",
                  "property": "jimIsVisible"
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Alert_Error","#s-Alert_Success" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Alerts_None" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Alerts_Dlg_1" ],
                    "effect": {
                      "type": "slide",
                      "easing": "swing",
                      "duration": 300,
                      "direction": "right"
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
    } else if(jFirer.is("#s-Hotspot_5")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNot",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Panel_21",
                  "property": "jimIsVisible"
                } ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Alert_Error","#s-Alert_Success" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Alerts_None" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Alerts_Dlg_1" ],
                    "effect": {
                      "type": "slide",
                      "easing": "swing",
                      "duration": 300,
                      "direction": "right"
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
    } else if(jFirer.is("#s-Rectangle_110")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-SearchFilter_Dlg_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-SearchFilter_Btn_1" ],
                    "value": "Phone #"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_111")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Item_Chkd_4","#s-Item_Chkd_5","#s-Item_Chkd_6","#s-Item_Chkd_7","#s-Item_Chkd_8" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Item_Chkd_7" ]
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
                    "target": [ "#s-SearchFilter_Btn_1" ],
                    "value": "Set search filter"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_112")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Item_Chkd_4","#s-Item_Chkd_5","#s-Item_Chkd_6","#s-Item_Chkd_7","#s-Item_Chkd_8" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Item_Chkd_4" ]
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
                    "target": [ "#s-SearchFilter_Btn_1" ],
                    "value": "By phone"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_113")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Item_Chkd_4","#s-Item_Chkd_5","#s-Item_Chkd_6","#s-Item_Chkd_7","#s-Item_Chkd_8" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Item_Chkd_6" ]
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
                    "target": [ "#s-SearchFilter_Btn_1" ],
                    "value": "By name"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_114")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Item_Chkd_4","#s-Item_Chkd_5","#s-Item_Chkd_6","#s-Item_Chkd_7","#s-Item_Chkd_8" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Item_Chkd_5" ]
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
                    "target": [ "#s-SearchFilter_Btn_1" ],
                    "value": "By customer ID"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_115")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Item_Chkd_4","#s-Item_Chkd_5","#s-Item_Chkd_6","#s-Item_Chkd_7","#s-Item_Chkd_8" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Item_Chkd_8" ]
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
                    "target": [ "#s-SearchFilter_Btn_1" ],
                    "value": "By application ID"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_116")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-SearchFilter_Dlg_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-SearchFilter_Btn_1" ],
                    "value": "Phone #"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_117")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Item_Chkd_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Item_Chkd_2" ]
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
                    "target": [ "#s-DeviceData_Img" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-ServerData_Img" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_118")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Item_Chkd_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Item_Chkd_1" ]
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
                    "target": [ "#s-DeviceData_Img" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-ServerData_Img" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
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
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-SearchFilter_Dlg" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_33")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-SearchFilter_Dlg" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
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
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-SearchFilter_Dlg" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_43")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-SearchFilter_Dlg" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
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
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-SearchFilter_Dlg" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Rectangle_35" ],
                    "value": "By application ID"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_37")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-SearchFilter_Dlg" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-NavDrawerBG_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Drawer_1" ],
                    "effect": {
                      "type": "slide",
                      "easing": "swing",
                      "duration": 200,
                      "direction": "left"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-NavDrawer_1" ],
                    "effect": {
                      "type": "fade",
                      "easing": "swing",
                      "duration": 250
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
    } else if(jFirer.is("#s-Rectangle_51")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "ActiveTabSync" ],
                    "value": "1"
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
    } else if(jFirer.is("#s-Rectangle_22")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#m-1628bfaf-MessageLogOut" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_38")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-AdvancedFilter" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_59")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Image_14 > svg": {
                      "attributes": {
                        "overlay": "#666666"
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
                    "target": [ "#s-ClearBtn_1" ]
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
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-SearchIcon" ]
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
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Image_14 > svg": {
                      "attributes": {
                        "overlay": "#666666"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-True_14","#s-True_15","#s-True_16" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-CloseBtn_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-AdvancedFilter" ],
                    "effect": {
                      "type": "slide",
                      "easing": "swing",
                      "duration": 300,
                      "direction": "right"
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
    } else if(jFirer.is("#s-Rectangle_84")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-AdvancedFilter" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
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
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-AdvancedFilter" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-LoanStatus_1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "datatype": "property",
                "target": "#s-True_14",
                "property": "jimIsVisible"
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-False_14" ]
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
                    "target": [ "#s-True_14" ]
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
                    "target": [ "#s-spinner-2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 500
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-spinner-2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Image_14 > svg": {
                      "attributes": {
                        "overlay": "#1E82F7"
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
    } else if(jFirer.is("#s-Image_26")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-False_14" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
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
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-True_14" ]
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
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Image_14 > svg": {
                      "attributes": {
                        "overlay": "#1E82F7"
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
    } else if(jFirer.is("#s-LoanStatus_2")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "datatype": "property",
                "target": "#s-True_15",
                "property": "jimIsVisible"
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-False_15" ]
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
                    "target": [ "#s-True_15" ]
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
                    "target": [ "#s-spinner-2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 500
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-spinner-2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Image_14 > svg": {
                      "attributes": {
                        "overlay": "#1E82F7"
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
    } else if(jFirer.is("#s-Image_28")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-False_15" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
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
                    "target": [ "#s-True_15" ]
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
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Image_14 > svg": {
                      "attributes": {
                        "overlay": "#1E82F7"
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
    } else if(jFirer.is("#s-LoanStatus_3")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "datatype": "property",
                "target": "#s-True_16",
                "property": "jimIsVisible"
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-False_16" ]
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
                    "target": [ "#s-True_16" ]
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
                    "target": [ "#s-spinner-2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 500
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-spinner-2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Image_14 > svg": {
                      "attributes": {
                        "overlay": "#1E82F7"
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
    } else if(jFirer.is("#s-Image_32")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-False_16" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
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
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-True_16" ]
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
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Image_14 > svg": {
                      "attributes": {
                        "overlay": "#1E82F7"
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
    } else if(jFirer.is("#s-Rectangle_40")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-AdvancedFilter" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
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
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isbackward": true
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Title_Dlg_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Alerts_Dlg_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-CloseBtn_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Alerts_Dlg_1" ],
                    "effect": {
                      "type": "slide",
                      "easing": "swing",
                      "duration": 300,
                      "direction": "right"
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
    } else if(jFirer.is("#s-Rectangle_60")) {
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
    } else if(jFirer.is("#s-Rectangle_61")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "ActiveTabSync" ],
                    "value": "4"
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
    } else if(jFirer.is("#s-Title_Dlg_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-History_Dlg_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-CloseBtn_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-History_Dlg_1" ],
                    "effect": {
                      "type": "slide",
                      "easing": "swing",
                      "duration": 300,
                      "direction": "right"
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
    } else if(jFirer.is("#s-Rectangle_86")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/4e7d35cb-2bd9-4d51-a064-d3c1af4a01bb"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_87")) {
      cases = [
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
    }
  })
  .on("click", ".s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 .toggle", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Rectangle_58")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "actions": [
                  {
                    "action": "jimHide",
                    "parameter": {
                      "target": [ "#s-Alert_Error","#s-Alert_Success" ]
                    },
                    "exectype": "serial",
                    "delay": 0
                  },
                  {
                    "action": "jimShow",
                    "parameter": {
                      "target": [ "#s-Alerts_None" ]
                    },
                    "exectype": "serial",
                    "delay": 0
                  }
                ]
              }
            ],
            "exectype": "serial",
            "delay": 0
          }
        ];
        jEvent.launchCases(cases);
      }
    } else if(jFirer.is("#s-Rectangle_85")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "actions": [
                  {
                    "action": "jimHide",
                    "parameter": {
                      "target": [ "#s-Alert_Error_1","#s-Alert_Success_1" ]
                    },
                    "exectype": "serial",
                    "delay": 0
                  },
                  {
                    "action": "jimShow",
                    "parameter": {
                      "target": [ "#s-Alerts_None_1" ]
                    },
                    "exectype": "serial",
                    "delay": 0
                  }
                ]
              }
            ],
            "exectype": "serial",
            "delay": 0
          }
        ];
        jEvent.launchCases(cases);
      }
    }
  })
  .on("dragstart", ".s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 .dragstart", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Hotspot_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-NavDrawer_1","#s-NavDrawerBG_1" ],
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Drawer_1" ],
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
    }
  })
  .on("keyup.jim", ".s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 .keyup", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.which === 13 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false),
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-spinner-2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 500
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-spinner-2" ]
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
                  "target": "#s-Input_2",
                  "property": "jimGetValue"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-ClearBtn_1" ]
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
                    "target": [ "#s-ClearBtn_1" ]
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
                    "target": [ "#s-ClearBtn_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-SearchIcon" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
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
  .on("focusin", ".s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-SearchFilter_Btn_1 > .backgroundLayer": {
                      "attributes": {
                        "border-top-color": "#1E82F7",
                        "border-right-color": "#1E82F7",
                        "border-bottom-color": "#1E82F7",
                        "border-left-color": "#1E82F7"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-SearchFilter_Btn_1": {
                      "attributes-ie": {
                        "border-top-color": "#1E82F7",
                        "border-right-color": "#1E82F7",
                        "border-bottom-color": "#1E82F7",
                        "border-left-color": "#1E82F7"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Input_2 > .backgroundLayer": {
                      "attributes": {
                        "border-top-color": "#1E82F7",
                        "border-right-color": "#1E82F7",
                        "border-bottom-color": "#1E82F7",
                        "border-left-color": "#1E82F7"
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
                    "target": [ "#s-SearchFilter_Dlg_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
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
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Category_5 > .backgroundLayer": {
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
    }
  })
  .on("focusout", ".s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-SearchFilter_Btn_1 > .backgroundLayer": {
                      "attributes": {
                        "border-top-color": "#DCDCDC",
                        "border-right-color": "#DCDCDC",
                        "border-bottom-color": "#DCDCDC",
                        "border-left-color": "#DCDCDC"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-SearchFilter_Btn_1": {
                      "attributes-ie": {
                        "border-top-color": "#DCDCDC",
                        "border-right-color": "#DCDCDC",
                        "border-bottom-color": "#DCDCDC",
                        "border-left-color": "#DCDCDC"
                      }
                    }
                  },{
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Input_2 > .backgroundLayer": {
                      "attributes": {
                        "border-top-color": "#DCDCDC",
                        "border-right-color": "#DCDCDC",
                        "border-bottom-color": "#DCDCDC",
                        "border-left-color": "#DCDCDC"
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
                    "#s-5f1c8e0b-4447-489c-acc0-e2683ca19ba8 #s-Category_5 > .backgroundLayer": {
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
    }
  });