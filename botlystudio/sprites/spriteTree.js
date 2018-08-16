var SpriteManager = SpriteManager || {};

SpriteManager.defaultTree = {
    room: { //Room array
        entrance: {
            key: "entrance",
            id: "0",
            displayName: "Entrée",
            character: { //Character array
                maman: {
                    key: "maman",
                    id: "0",
                    displayName: "Maman",
                    actions: { //Actions array
                        calling: {
                            key: "calling",
                            id: "0",
                            displayName: "crie dans l'escalier",
                            filename: "calling.png"
                        },
                        down: {
                            key: "down",
                            id: "1",
                            displayName: "descend l'escalier",
                            filename: "down.png"
                        },
                        go_out: {
                            key: "go_out",
                            id: "2",
                            displayName: "sort par la porte",
                            filename: "go_out.png"
                        },
                        wear_jacket: {
                            key: "wear_jacket",
                            id: "3",
                            displayName: "met son manteau",
                            filename: "wear_jacket.png"
                        },
                        speaking: {
                            key: "speaking",
                            id: "4",
                            displayName: "monte l'escalier en parlant",
                            filename: "speaking.png"
                        },
                        down_slow: {
                            key: "down_slow",
                            id: "5",
                            displayName: "descend l'escalier prudemment",
                            filename: "down_slow.png"
                        },
                        up: {
                            key: "up",
                            id: "6",
                            displayName: "monte l'escalier",
                            filename: "up.png"
                        },
                        up_nuisette: {
                            key: "up_nuisette",
                            id: "7",
                            displayName: "monte l'escalier en pyjama",
                            filename: "up_nuisette.png"
                        }
                    }
                }
            },
            background: {
                day: {
                    key: "day",
                    id: "0",
                    displayName: "jour",
                    filename: "day.png"
                },
                night: {
                    key: "night",
                    id: "1",
                    displayName: "nuit",
                    filename: "night.png"
                }
            }
        },
        bedRoom: {
            key: "bedRoom",
            id: "1",
            displayName: "Chambre des parents",
            character: { //Character array
            },
            background: {
                day: {
                    key: "day",
                    id: "0",
                    displayName: "jour",
                    filename: "day.png"
                }
            }
        },
        kidRoom: {
            key: "kidRoom",
            id: "2",
            displayName: "Chambre de l'enfant",
            character: { //Character array
            },
            background: {
                day: {
                    key: "day",
                    id: "0",
                    displayName: "jour",
                    filename: "day.png"
                }
            }
        },
        kitchen: {
            key: "kitchen",
            id: "3",
            displayName: "Cuisine",
            character: { //Character array
            },
            background: {
                day: {
                    key: "day",
                    id: "0",
                    displayName: "jour",
                    filename: "day.png"
                }
            }
        },
        roof: {
            key: "roof",
            id: "4",
            displayName: "Toît",
            character: { //Character array
            },
            background: {
                day: {
                    key: "day",
                    id: "0",
                    displayName: "jour",
                    filename: "day.png"
                }
            }
        }
    }
}


SpriteManager.Tree = SpriteManager.defaultTree;