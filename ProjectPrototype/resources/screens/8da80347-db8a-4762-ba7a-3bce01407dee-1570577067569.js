jQuery("#simulation")
  .on("click", ".s-8da80347-db8a-4762-ba7a-3bce01407dee .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Rectangle_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Contract_Step1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_50")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Payment_Step2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_21")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Signees_Step3" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
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
                    "target": [ "#s-AddSignature_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Status_MC_4")) {
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_7")) {
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
                    "target": [ "#s-AddSignature_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
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
                    "target": [ "#s-AddSignature_3" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Status_MC_3")) {
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
                    "target": [ "#s-AddSignature_3" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_44")) {
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
                    "target": [ "#s-AddSignature_3" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Status_MC_5")) {
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_4")) {
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
                    "target": [ "#s-AddSignature_3" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
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
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "ActiveTab" ],
                    "value": "4"
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
                    "target": [ "#s-AddSignature_3" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "ActiveTab" ],
                    "value": "4"
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
                    "target": [ "#s-AddSignature_3" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
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
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_84 > .backgroundLayer": {
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
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_84 span": {
                      "attributes": {
                        "color": "#6AA90F"
                      }
                    }
                  },{
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_84": {
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
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_87 > .backgroundLayer": {
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
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_87 span": {
                      "attributes": {
                        "color": "#494949"
                      }
                    }
                  },{
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_87": {
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
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_86 > .backgroundLayer": {
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
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_86 span": {
                      "attributes": {
                        "color": "#494949"
                      }
                    }
                  },{
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_86": {
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
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_85 > .backgroundLayer": {
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
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_85 span": {
                      "attributes": {
                        "color": "#494949"
                      }
                    }
                  },{
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_85": {
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
        },
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_85")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_85 > .backgroundLayer": {
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
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_85 span": {
                      "attributes": {
                        "color": "#6AA90F"
                      }
                    }
                  },{
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_85": {
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
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_87 > .backgroundLayer": {
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
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_87 span": {
                      "attributes": {
                        "color": "#494949"
                      }
                    }
                  },{
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_87": {
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
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_86 > .backgroundLayer": {
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
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_86 span": {
                      "attributes": {
                        "color": "#494949"
                      }
                    }
                  },{
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_86": {
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
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_84 > .backgroundLayer": {
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
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_84 span": {
                      "attributes": {
                        "color": "#494949"
                      }
                    }
                  },{
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_84": {
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
        },
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
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_86 > .backgroundLayer": {
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
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_86 span": {
                      "attributes": {
                        "color": "#6AA90F"
                      }
                    }
                  },{
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_86": {
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
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_87 > .backgroundLayer": {
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
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_87 span": {
                      "attributes": {
                        "color": "#494949"
                      }
                    }
                  },{
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_87": {
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
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_85 > .backgroundLayer": {
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
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_85 span": {
                      "attributes": {
                        "color": "#494949"
                      }
                    }
                  },{
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_85": {
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
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_84 > .backgroundLayer": {
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
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_84 span": {
                      "attributes": {
                        "color": "#494949"
                      }
                    }
                  },{
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_84": {
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
        },
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
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_87 > .backgroundLayer": {
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
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_87 span": {
                      "attributes": {
                        "color": "#6AA90F"
                      }
                    }
                  },{
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_87": {
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
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_86 > .backgroundLayer": {
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
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_86 span": {
                      "attributes": {
                        "color": "#494949"
                      }
                    }
                  },{
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_86": {
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
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_85 > .backgroundLayer": {
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
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_85 span": {
                      "attributes": {
                        "color": "#494949"
                      }
                    }
                  },{
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_85": {
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
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_84 > .backgroundLayer": {
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
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_84 span": {
                      "attributes": {
                        "color": "#494949"
                      }
                    }
                  },{
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_84": {
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
        },
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
                    "target": [ "#s-ContractFullScreen" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
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
                    "target": [ "#s-MessageNotAccepted_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
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
              "condition": {
                "datatype": "property",
                "target": "#s-Contract_Step1",
                "property": "jimIsVisible"
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Payment_Step2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "datatype": "property",
                "target": "#s-Payment_Step2",
                "property": "jimIsVisible"
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Signees_Step3" ]
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
                  "target": "#s-Signees_Step3",
                  "property": "jimIsVisible"
                },{
                  "action": "jimGreaterOrEquals",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "Signees"
                  },"4" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-MessageAccepted_1" ]
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
                  "target": "#s-Signees_Step3",
                  "property": "jimIsVisible"
                },{
                  "action": "jimLess",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "Signees"
                  },"4" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-MessageNotAccepted_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
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
    } else if(jFirer.is("#s-CloseBtn_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isbackward": true,
                    "transition": {
                      "type": "slidedown",
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
    } else if(jFirer.is("#s-Hotspot_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-ContractFullScreen" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
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
              "condition": null,
              "actions": [
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
    } else if(jFirer.is("#s-Rectangle_102")) {
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
    } else if(jFirer.is("#s-Rectangle_103")) {
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
    } else if(jFirer.is("#s-DiscardBtn_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-MessageNotAccepted_1" ]
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
                    "target": "screens/d20144f7-473d-43e3-815f-0819f318e179",
                    "transition": {
                      "type": "slideright",
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
    } else if(jFirer.is("#s-Image_74")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-MessageNotAccepted_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-SaveBtn_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-MessageNotAccepted_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
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
                    "target": [ "#s-ProgressIndicator_3" ],
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
                    "target": [ "#s-SaveBtn_Normal_6" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Success_1" ],
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
                    "target": [ "#s-ProgressIndicator_3" ],
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
                    "target": [ "#s-ProgressIndicator_3" ],
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
    } else if(jFirer.is("#s-Btn_27")) {
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
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Image_94" ]
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
                    "target": [ "#s-ProgressIndicator_3" ],
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
                      "duration": 1200
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
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-FingerprintImg_0" ],
                    "effect": {
                      "type": "fade",
                      "easing": "swing",
                      "duration": 400
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-FingerprintImg_1" ],
                    "effect": {
                      "type": "fade",
                      "duration": 400
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
                      "duration": 400
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
                      "duration": 400
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
                      "duration": 400
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
                      "duration": 400
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
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "parallel",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Success_1" ],
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
    } else if(jFirer.is("#s-Btn_35")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-ScanBtn_Dsbld_5" ]
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
                    "target": [ "#s-ProgressIndicator_3" ],
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
    } else if(jFirer.is("#s-Btn_37")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-ScanBtn_Dsbld_6" ]
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
                    "target": [ "#s-ProgressIndicator_3" ],
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
                    "target": [ "#s-SaveBtn_Normal_6" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Success_1" ],
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
    } else if(jFirer.is("#s-Rectangle_52")) {
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
                    "target": [ "#s-ReplacementReason_1" ],
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
    } else if(jFirer.is("#s-Btn_39")) {
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
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-ReplaceBtn_1","#s-ReplacementReason_1","#s-Image_94" ]
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
                    "target": [ "#s-ProgressIndicator_3" ],
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
                      "duration": 1200
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
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-FingerprintImg_0" ],
                    "effect": {
                      "type": "fade",
                      "easing": "swing",
                      "duration": 400
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-FingerprintImg_1" ],
                    "effect": {
                      "type": "fade",
                      "duration": 400
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
                      "duration": 400
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
                      "duration": 400
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
                      "duration": 400
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
                      "duration": 400
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
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "parallel",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Success_1" ],
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
                    "target": [ "#s-ReplacementReason_1" ],
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
    } else if(jFirer.is("#s-Rectangle_53")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_53 > .backgroundLayer": {
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
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_53 span": {
                      "attributes": {
                        "color": "#6AA90F"
                      }
                    }
                  },{
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_53": {
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
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_72 > .backgroundLayer": {
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
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_72 span": {
                      "attributes": {
                        "color": "#494949"
                      }
                    }
                  },{
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_72": {
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
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_57 > .backgroundLayer": {
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
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_57 span": {
                      "attributes": {
                        "color": "#494949"
                      }
                    }
                  },{
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_57": {
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-ReplaceBtn_1","#s-ReplacementReason_1","#s-Image_94" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-ScanBtn_Normal_4","#s-Step_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-FingerName_1" ],
                    "value": "Right thumb on the scanner"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "timed",
          "delay": 100
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_57")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_57 > .backgroundLayer": {
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
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_57 span": {
                      "attributes": {
                        "color": "#6AA90F"
                      }
                    }
                  },{
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_57": {
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
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_72 > .backgroundLayer": {
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
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_72 span": {
                      "attributes": {
                        "color": "#494949"
                      }
                    }
                  },{
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_72": {
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
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_53 > .backgroundLayer": {
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
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_53 span": {
                      "attributes": {
                        "color": "#494949"
                      }
                    }
                  },{
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_53": {
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-ReplaceBtn_1","#s-ReplacementReason_1","#s-Image_94" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-ScanBtn_Normal_4","#s-Step_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-FingerName_1" ],
                    "value": "Left index on the scanner"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "timed",
          "delay": 100
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
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_72 > .backgroundLayer": {
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
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_72 span": {
                      "attributes": {
                        "color": "#6AA90F"
                      }
                    }
                  },{
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_72": {
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
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_57 > .backgroundLayer": {
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
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_57 span": {
                      "attributes": {
                        "color": "#494949"
                      }
                    }
                  },{
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_57": {
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
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_53 > .backgroundLayer": {
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
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_53 span": {
                      "attributes": {
                        "color": "#494949"
                      }
                    }
                  },{
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_53": {
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-ReplaceBtn_1","#s-ReplacementReason_1","#s-Image_94" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-ScanBtn_Normal_4","#s-Step_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-FingerName_1" ],
                    "value": "Right index on the scanner"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "timed",
          "delay": 100
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Btn_41")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-AddSignature_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Image_7 > svg": {
                      "attributes": {
                        "overlay": "#78BF12"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Image_7" ],
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Signees" ],
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "Signees"
                      },"1" ]
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
                    "target": [ "#s-AddSignature_1" ]
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
                    "target": [ "#s-ProgressIndicator_3" ],
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
                    "target": [ "#s-SaveBtn_Dsbld_6","#s-Step_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-ReplacementReason_1" ]
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
                "parameter": [ null,{
                  "action": "jimContains",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "L1"
                  },"Done" ]
                } ]
              },
              "actions": [
              ]
            },
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ null,{
                  "action": "jimContains",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "L1"
                  },"Add" ]
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
                "parameter": [ null,{
                  "action": "jimContains",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "L2"
                  },"Done" ]
                } ]
              },
              "actions": [
              ]
            },
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ null,{
                  "action": "jimContains",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "L2"
                  },"Add" ]
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
                "parameter": [ null,{
                  "action": "jimContains",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "R1"
                  },"Done" ]
                } ]
              },
              "actions": [
              ]
            },
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ null,{
                  "action": "jimContains",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "R1"
                  },"Add" ]
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
                "parameter": [ null,{
                  "action": "jimContains",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "R2"
                  },"Done" ]
                } ]
              },
              "actions": [
              ]
            },
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ null,{
                  "action": "jimContains",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "R2"
                  },"Add" ]
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
    } else if(jFirer.is("#s-Button_5")) {
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
                    "target": [ "#s-SaveBtn_Dsbld_6" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-ProgressIndicator_3" ],
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
                    "target": [ "#s-ProgressIndicator_3" ],
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
                    "target": [ "#s-ProgressIndicator_3" ],
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
                    "target": [ "#s-Failure_1" ],
                    "transition": {
                      "type": "slideup",
                      "duration": 300
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-ReplaceBtn_1" ],
                    "effect": {
                      "type": "slide",
                      "easing": "swing",
                      "duration": 500,
                      "direction": "down"
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
    } else if(jFirer.is("#s-Btn_49")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-AddSignature_2" ]
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
                },"2" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Image_2 > svg": {
                      "attributes": {
                        "overlay": "#5FB54A"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Image_2" ],
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
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Image_4 > svg": {
                      "attributes": {
                        "overlay": "#5FB54A"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Image_4" ],
                    "effect": {
                      "type": "slide",
                      "easing": "swing",
                      "duration": 300,
                      "direction": "up"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "IsDone" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "IsDone"
                      },"auth" ]
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
    } else if(jFirer.is("#s-Image_39")) {
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
    } else if(jFirer.is("#s-Image_80")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-AddSignature_2" ]
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
                    "target": [ "#s-SaveBtn_Dsbld_7" ]
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
                "parameter": [ null,{
                  "action": "jimContains",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "L1"
                  },"Done" ]
                } ]
              },
              "actions": [
              ]
            },
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ null,{
                  "action": "jimContains",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "L1"
                  },"Add" ]
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
                "parameter": [ null,{
                  "action": "jimContains",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "L2"
                  },"Done" ]
                } ]
              },
              "actions": [
              ]
            },
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ null,{
                  "action": "jimContains",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "L2"
                  },"Add" ]
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
                "parameter": [ null,{
                  "action": "jimContains",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "R1"
                  },"Done" ]
                } ]
              },
              "actions": [
              ]
            },
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ null,{
                  "action": "jimContains",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "R1"
                  },"Add" ]
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
                "parameter": [ null,{
                  "action": "jimContains",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "R2"
                  },"Done" ]
                } ]
              },
              "actions": [
              ]
            },
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ null,{
                  "action": "jimContains",
                  "parameter": [ {
                    "datatype": "variable",
                    "element": "R2"
                  },"Add" ]
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
    } else if(jFirer.is("#s-SubmitBtn_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-AddSignature_3" ]
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
                },"2" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Image_2 > svg": {
                      "attributes": {
                        "overlay": "#5FB54A"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Image_2" ],
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
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Image_4 > svg": {
                      "attributes": {
                        "overlay": "#5FB54A"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Image_4" ],
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
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Image_3 > svg": {
                      "attributes": {
                        "overlay": "#5FB54A"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Image_3" ],
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
          "exectype": "timed",
          "delay": 200
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Signees" ],
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "Signees"
                      },"1" ]
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
    } else if(jFirer.is("#s-CancelBtn_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-AddSignature_3" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-SubmitBtn_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d20144f7-473d-43e3-815f-0819f318e179",
                    "transition": {
                      "type": "slideright",
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
    } else if(jFirer.is("#s-Image_72")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-MessageAccepted_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-CancelBtn_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-MessageAccepted_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
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
                    "target": [ "#s-MessageNotAccepted_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-SaveBtn_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-MessageNotAccepted_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
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
  .on("drag", ".s-8da80347-db8a-4762-ba7a-3bce01407dee .drag", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Title_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-AddSignature_1" ],
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
    } else if(jFirer.is("#s-Title_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-AddSignature_2" ],
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
  .on("dragend", ".s-8da80347-db8a-4762-ba7a-3bce01407dee .drag", function(event, data) {
    jimEvent(event).jimRestoreDrag(jQuery(this));
  })
  .on("dragend", ".s-8da80347-db8a-4762-ba7a-3bce01407dee .drag", function(event, data) {
    jimEvent(event).jimDestroyDrag(jQuery(this));
  })
  .on("pageload", ".s-8da80347-db8a-4762-ba7a-3bce01407dee .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-BG_0")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Signees" ],
                    "value": "0"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Panel_1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimContains",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "TabbarSize"
                },"L" ]
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
                  "element": "HLvlInfo"
                },"Main" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-AppBar_Main" ]
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
                  "element": "HLvlInfo"
                },"DetailsEdit" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Details" ]
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
                  "element": "HLvlInfo"
                },"DetailsView" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Details" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Panel_31")) {
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
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Image_7 > svg": {
                      "attributes": {
                        "overlay": "#5FB54A"
                      }
                    }
                  },{
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Image_2 > svg": {
                      "attributes": {
                        "overlay": "#5FB54A"
                      }
                    }
                  },{
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Image_4 > svg": {
                      "attributes": {
                        "overlay": "#5FB54A"
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
    } else if(jFirer.is("#s-Panel_4")) {
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
  .on("variablechange.jim", ".s-8da80347-db8a-4762-ba7a-3bce01407dee .variablechange", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_Accept")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.variableTarget === "Signees") && {
                "action": "jimGreaterOrEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Signees"
                },"4" ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Image_Next" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Image_Accept" ],
                    "effect": {
                      "type": "slide",
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
    }
  })
  .on("panelactive", ".s-8da80347-db8a-4762-ba7a-3bce01407dee .panelactive", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Details")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "HLvlInfo" ],
                    "value": "Details"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Signees_Step3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Btn_4" ],
                    "value": "Accept"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_12" ],
                    "value": "Step 3 of 3"
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
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_21 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_21 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_21": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_11 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_11 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_11": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_50 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_50 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_50": {
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
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_21 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7"
                      }
                    }
                  },{
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_21 span": {
                      "attributes": {
                        "color": "#1E82F7"
                      }
                    }
                  },{
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_21": {
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
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-ProgressIndicator_2" ],
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
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Payment_Step2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Btn_4" ],
                    "value": "Next"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_12" ],
                    "value": "Step 2 of 3"
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
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_21 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_21 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_21": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_11 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_11 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_11": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_50 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_50 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_50": {
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
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_50 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7"
                      }
                    }
                  },{
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_50 span": {
                      "attributes": {
                        "color": "#1E82F7"
                      }
                    }
                  },{
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_50": {
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
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-ProgressIndicator_2" ],
                    "width": {
                      "type": "percentage",
                      "value": "66"
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
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Contract_Step1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Btn_4" ],
                    "value": "Next"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_12" ],
                    "value": "Step 1 of 3"
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
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_21 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_21 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_21": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_11 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_11 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_11": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_50 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_50 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_50": {
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
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_11 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7"
                      }
                    }
                  },{
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_11": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_11 span": {
                      "attributes": {
                        "color": "#1E82F7",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_11": {
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
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-ProgressIndicator_2" ],
                    "width": {
                      "type": "percentage",
                      "value": "33"
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
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Contract_Step1_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Btn_4" ],
                    "value": "Next"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_12" ],
                    "value": "Step 1 of 3"
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
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_21 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_21 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_21": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_11 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_11 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_11": {
                      "attributes-ie": {
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF",
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  },{
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_50 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_50 span": {
                      "attributes": {
                        "color": "#3F3F3F"
                      }
                    }
                  },{
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_50": {
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
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_11 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#EFF8FC",
                        "background-attachment": "scroll",
                        "border-left-width": "3px",
                        "border-left-color": "#1E82F7"
                      }
                    }
                  },{
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_11": {
                      "attributes": {
                        "line-height": "23px",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_11 span": {
                      "attributes": {
                        "color": "#1E82F7",
                        "font-size": "12.0pt"
                      }
                    }
                  },{
                    "#s-8da80347-db8a-4762-ba7a-3bce01407dee #s-Rectangle_11": {
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
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-ProgressIndicator_2" ],
                    "width": {
                      "type": "percentage",
                      "value": "33"
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
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Step_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-SaveBtn_Dsbld_6" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Success_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-SaveBtn_Normal_6" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Failure_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-SaveBtn_Dsbld_6" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
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