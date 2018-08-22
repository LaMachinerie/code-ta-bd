var SpriteManager = SpriteManager || {};

SpriteManager.defaultTree = {
  "room": {
    "entrance": {
      "key": "entrance",
      "id": "0",
      "displayName": "l'entrée",
      "character": {
        "maman": {
          "key": "maman",
          "id": "0",
          "displayName": "la maman",
          "actions": {
            "calling": {
              "key": "calling",
              "id": "0",
              "displayName": "crie dans l'escalier",
              "filename": "calling.png"
            },
            "down": {
              "key": "down",
              "id": "1",
              "displayName": "descend l'escalier",
              "filename": "down.png"
            },
            "call": {
              "key": "call",
              "id": "0",
              "displayName": "crie dans l'escalier",
              "filename": "call.png"
            },
            "climb1": {
              "key": "climb1",
              "id": "1",
              "displayName": "monte l'escalier",
              "filename": "climb1.png"
            },
            "climb2": {
              "key": "climb2",
              "id": "2",
              "displayName": "monte l'escalier en nuisette",
              "filename": "climb2.png"
            },
            "down1": {
              "key": "down1",
              "id": "3",
              "displayName": "descend l'escalier",
              "filename": "down1.png"
            },
            "down2": {
              "key": "down2",
              "id": "4",
              "displayName": "descend l'escalier",
              "filename": "down2.png"
            },
            "talking": {
              "key": "talking",
              "id": "5",
              "displayName": "parle dans l'escalier",
              "filename": "talking.png"
            }
          }
        },
        "papa": {
          "key": "papa",
          "id": "1",
          "displayName": "le papa",
          "actions": {
            "up": {
              "key": "up",
              "id": "0",
              "displayName": "monte l'escalier",
              "filename": "up.png"
            },
            "climb": {
              "key": "climb",
              "id": "0",
              "displayName": "monte l'escalier",
              "filename": "climb.png"
            },
            "climb2": {
              "key": "climb2",
              "id": "1",
              "displayName": "monte l'escalier",
              "filename": "climb2.png"
            },
            "close": {
              "key": "close",
              "id": "2",
              "displayName": "ferme la porte à clef",
              "filename": "close.png"
            },
            "enter": {
              "key": "enter",
              "id": "3",
              "displayName": "rentre à la maison",
              "filename": "enter.png"
            }
          }
        },
        "kid": {
          "key": "kid",
          "id": "2",
          "displayName": "l'enfant",
          "actions": {
            "go_out": {
              "key": "go_out",
              "id": "0",
              "displayName": "sort par la porte",
              "filename": "go_out.png"
            },
            "climb_up": {
              "key": "climb_up",
              "id": "1",
              "displayName": "monte l'escalier en courant",
              "filename": "climb_up.png"
            },
            "climb": {
              "key": "climb",
              "id": "0",
              "displayName": "monte l'escalier",
              "filename": "climb.png"
            },
            "enter": {
              "key": "enter",
              "id": "1",
              "displayName": "entre par la porte",
              "filename": "enter.png"
            }
          }
        },
        "cat": {
          "key": "cat",
          "id": "3",
          "displayName": "le chat",
          "actions": {
            "affraid_cat": {
              "key": "affraid_cat",
              "id": "0",
              "displayName": "est surpris",
              "filename": "affraid_cat.png"
            },
            "cat_down": {
              "key": "cat_down",
              "id": "1",
              "displayName": "descend l'escalier",
              "filename": "cat_down.png"
            },
            "drunk_cat": {
              "key": "drunk_cat",
              "id": "2",
              "displayName": "est ivre",
              "filename": "drunk_cat.png"
            },
            "affraid": {
              "key": "affraid",
              "id": "0",
              "displayName": "est surpris",
              "filename": "affraid.png"
            },
            "down": {
              "key": "down",
              "id": "1",
              "displayName": "descend l'escalier",
              "filename": "down.png"
            },
            "drunk": {
              "key": "drunk",
              "id": "2",
              "displayName": "est ivre",
              "filename": "drunk.png"
            }
          }
        },
        "green_monster": {
          "key": "green_monster",
          "id": "1",
          "displayName": "le monstre vert",
          "actions": {
            "run": {
              "key": "run",
              "id": "0",
              "displayName": "s'enfui",
              "filename": "run.png"
            },
            "slide": {
              "key": "slide",
              "id": "1",
              "displayName": "glisse dans l'escalier",
              "filename": "slide.png"
            }
          }
        },
        "mouse": {
          "key": "mouse",
          "id": "4",
          "displayName": "la/les souris",
          "actions": {
            "run": {
              "key": "run",
              "id": "0",
              "displayName": "court",
              "filename": "run.png"
            },
            "down": {
              "key": "down",
              "id": "1",
              "displayName": "descend l'escalier",
              "filename": "down.png"
            }
          }
        },
        "pink_monster": {
          "key": "pink_monster",
          "id": "6",
          "displayName": "le monstre rose",
          "actions": {
            "get_out": {
              "key": "get_out",
              "id": "0",
              "displayName": "sort de la cave",
              "filename": "get_out.png"
            },
            "watch": {
              "key": "watch",
              "id": "1",
              "displayName": "observe l'escalier",
              "filename": "watch.png"
            }
          }
        }
      },
      "background": {
        "day": {
          "key": "day",
          "id": "0",
          "displayName": "jour",
          "filename": "day.png"
        },
        "night": {
          "key": "night",
          "id": "1",
          "displayName": "nuit",
          "filename": "night.png"
        }
      },
      "object": {}
    },
    "bedRoom": {
      "key": "bedRoom",
      "id": "1",
      "displayName": "la chambre des parents",
      "character": {
        "papa": {
          "key": "papa",
          "id": "0",
          "displayName": "le papa",
          "actions": {
            "wake_up": {
              "key": "wake_up",
              "id": "0",
              "displayName": "s'étire",
              "filename": "wake_up.png"
            },
            "unwear": {
              "key": "unwear",
              "id": "1",
              "displayName": "enlève sa chemise",
              "filename": "unwear.png"
            }
          }
        },
        "maman": {
          "key": "maman",
          "id": "1",
          "displayName": "la maman",
          "actions": {
            "break": {
              "key": "break",
              "id": "0",
              "displayName": "est assise avec son café",
              "filename": "break.png"
            },
            "drinking_coffee": {
              "key": "drinking_coffee",
              "id": "1",
              "displayName": "boit son café",
              "filename": "drinking_coffee.png"
            },
            "hunting": {
              "key": "hunting",
              "id": "2",
              "displayName": "chasse le chat",
              "filename": "hunting.png"
            },
            "placing_left": {
              "key": "placing_left",
              "id": "3",
              "displayName": "recouvre le café de papa",
              "filename": "placing_left.png"
            },
            "placing_right": {
              "key": "placing_right",
              "id": "4",
              "displayName": "recouvre son café",
              "filename": "placing_right.png"
            },
            "sitting": {
              "key": "sitting",
              "id": "5",
              "displayName": "est assise sur le lit",
              "filename": "sitting.png"
            },
            "taking_coffee": {
              "key": "taking_coffee",
              "id": "6",
              "displayName": "attrape son café",
              "filename": "taking_coffee.png"
            },
            "unwear": {
              "key": "unwear",
              "id": "7",
              "displayName": "enlève sa robe",
              "filename": "unwear.png"
            },
            "wear": {
              "key": "wear",
              "id": "8",
              "displayName": "met son pyjama",
              "filename": "wear.png"
            }
          }
        },
        "mouse": {
          "key": "mouse",
          "id": "2",
          "displayName": "la/les souris",
          "actions": {
            "chill": {
              "key": "chill",
              "id": "0",
              "displayName": "se regroupe",
              "filename": "chill.png"
            },
            "eat": {
              "key": "eat",
              "id": "1",
              "displayName": "mangent leur butin",
              "filename": "eat.png"
            },
            "plan": {
              "key": "plan",
              "id": "2",
              "displayName": "étudie la tapette",
              "filename": "plan.png"
            },
            "run": {
              "key": "run",
              "id": "3",
              "displayName": "court",
              "filename": "run.png"
            },
            "steal": {
              "key": "steal",
              "id": "4",
              "displayName": "volent le fromage",
              "filename": "steal.png"
            }
          }
        }
      },
      "background": {
        "day": {
          "key": "day",
          "id": "0",
          "displayName": "jour",
          "filename": "day.png"
        },
        "night": {
          "key": "night",
          "id": "1",
          "displayName": "nuit",
          "filename": "night.png"
        }
      },
      "object": {}
    },
    "kidRoom": {
      "key": "kidRoom",
      "id": "2",
      "displayName": "la chambre de l'enfant",
      "background": {
        "day": {
          "key": "day",
          "id": "0",
          "displayName": "jour",
          "filename": "day.png"
        }
      },
      "character": {},
      "object": {}
    },
    "kitchen": {
      "key": "kitchen",
      "id": "2",
      "displayName": "la cuisine",
      "background": {
        "day": {
          "key": "day",
          "id": "0",
          "displayName": "jour",
          "filename": "day.png"
        },
        "night": {
          "key": "night",
          "id": "1",
          "displayName": "nuit",
          "filename": "night.png"
        }
      },
      "character": {
        "cat": {
          "key": "cat",
          "id": "0",
          "displayName": "le chat",
          "actions": {}
        },
        "green_monster": {
          "key": "green_monster",
          "id": "1",
          "displayName": "le monstre vert",
          "actions": {}
        },
        "kid": {
          "key": "kid",
          "id": "2",
          "displayName": "l'enfant",
          "actions": {}
        },
        "maman": {
          "key": "maman",
          "id": "3",
          "displayName": "la maman",
          "actions": {}
        },
        "mouse": {
          "key": "mouse",
          "id": "4",
          "displayName": "la/les souris",
          "actions": {}
        },
        "papa": {
          "key": "papa",
          "id": "5",
          "displayName": "le papa",
          "actions": {}
        },
        "pink_monster": {
          "key": "pink_monster",
          "id": "6",
          "displayName": "le monstre rose",
          "actions": {
            "get_out": {
              "key": "get_out",
              "id": "0",
              "displayName": "sort de la cave",
              "filename": "get_out.png"
            },
            "watch": {
              "key": "watch",
              "id": "1",
              "displayName": "observe l'escalier",
              "filename": "watch.png"
            }
          }
        }
      },
      "object": {}
    },
    "roof": {
      "key": "roof",
      "id": "3",
      "displayName": "le toît",
      "background": {
        "day": {
          "key": "day",
          "id": "0",
          "displayName": "jour",
          "filename": "day.png"
        }
      },
      "character": {},
      "object": {}
    },
    "up": {
      "key": "up",
      "id": "4",
      "displayName": "l'étage",
      "background": {
        "day": {
          "key": "day",
          "id": "0",
          "displayName": "jour",
          "filename": "day.png"
        }
      },
      "character": {},
      "object": {}
    }
  }
}


SpriteManager.Tree = SpriteManager.defaultTree;