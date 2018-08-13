var SpriteManager = SpriteManager || {};

const basePath = "botlystudio/sprites/"

const defaulTree = {
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
                            displayName: "appelle",
                            filename: "calling.png"
                        },
                        down: {
                            key: "down",
                            id: "1",
                            displayName: "descend",
                            filename: "down.png"
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
        }
    }
}


SpriteManager.Tree = defaulTree;

SpriteManager.getRoomSubTree = function () {
    tree = SpriteManager.Tree;
    if (tree != null) return tree.room;
    else return null;
}

SpriteManager.getCharacterSubTree = function (room) {
    tree = SpriteManager.getRoomSubTree();
    if (tree != null) {
        roomJSON = tree[room];
        if (roomJSON != null) return roomJSON.character
        else return null;
    }
    else return null;
}


SpriteManager.getBackgroundSubTree = function (room) {
    tree = SpriteManager.getRoomSubTree();
    if (tree != null) {
        roomJSON = tree[room];
        if (roomJSON != null) return roomJSON.background
        else return null;
    }
    else return null;
}

SpriteManager.getActionsSubTree = function (room, character) {
    tree = SpriteManager.getCharacterSubTree(room);
    if (tree != null) {
        characterJSON = tree[character];
        if (characterJSON != null) return characterJSON.actions
        else return null;
    }
    else return null;
}

SpriteManager.getJsonElementByName = function (json, name) {
    for (subTree in json) {
        if (subTree.displayName == name) {
            return subTree;
        }
    }
    return null;
}

SpriteManager.getJsonElementById = function (json, id) {
    for (subTree in json) {
        if (subTree.id == id) {
            return subTree;
        }
    }
    return null;
}

SpriteManager.getBackgroundPath = function (roomKey, backgroundKey) {
    room = SpriteManager.getRoomSubTree[roomKey];
    background = SpriteManager.getBackgroundSubTree(roomKey)[backgroundKey];
    path = basePath + "room/" + roomKey + "/background/" + background.filename;
    return path;
}

SpriteManager.getDisplayNameArray = function(tree){
    array = [];
    if(tree != null){
        for(obj in tree){
            array.push(tree[obj].displayName);
        }
    }
    return array;
}
