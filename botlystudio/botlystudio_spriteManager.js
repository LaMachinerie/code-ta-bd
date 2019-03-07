var SpriteManager = SpriteManager || {};

SpriteManager.basePath = "botlystudio/sprites/"
SpriteManager.missingPath = SpriteManager.basePath + "missingFile.png";
SpriteManager.treeBuffer = {};
SpriteManager.Tree = {};
SpriteManager.defaultTree = {
    rooms : {
        entrance : {
            displayName : "Entrée",
            character : {
                dad : {
                    displayName : "Papa",
                    default :{
                        displayName: "fait quelque chose",
                        filename: "default"
                    }
                }
            },
            background : {
                day :{
                    displayName : "jour",
                    filename : "day.png"
                },
                night :{
                    displayName : "nuit",
                    filename : "night.png"
                }
            },
            object : {}
        }
    }
}

SpriteManager.bathroomLight = {
    bathroom: true,
    stairs: true
};

/*
var s = {name: "raul", age: "22", gender: "Male"}
   var keys = [];
   for(var k in s) keys.push(k);

*/

SpriteManager.initSpriteManager = function (){
    BotlyStudioIPC.getJsonTree();
}

SpriteManager.getRoomSubTree = function () {
    tree = SpriteManager.Tree;
    if (tree != null) return tree.room;
    else return SpriteManager.defaultTree.rooms;
}


SpriteManager.getCharacterSubTree = function (room) {
    tree = SpriteManager.getRoomSubTree();
    if (tree != null) {
        roomJSON = tree[room];
        if (roomJSON != null) return roomJSON.character
        else return null;
    }
    else return SpriteManager.defaultTree.rooms.entrance.character;
}


SpriteManager.getObjectSubTree = function (room) {
    tree = SpriteManager.getRoomSubTree();
    if (tree != null) {
        roomJSON = tree[room];
        if (roomJSON != null) return roomJSON.object
        else return null;
    }
    else return SpriteManager.defaultTree.rooms.entrance.object;
}

SpriteManager.getBackgroundSubTree = function (room) {
    tree = SpriteManager.getRoomSubTree();
    if (tree != null) {
        roomJSON = tree[room];
        if (roomJSON != null) return roomJSON.background
        else return SpriteManager.defaultTree.rooms.entrance.background;
    }
    else return SpriteManager.defaultTree.rooms.entrance.background;
}


SpriteManager.getActionsSubTree = function (room, character) {
    tree = SpriteManager.getCharacterSubTree(room)[character];
    var actionsTree = {}

    if (tree != undefined) {
        var keys = [];
        for(var k in tree) keys.push(k);

        for(var k in keys){
            if(keys[k] != "displayName")
                actionsTree[keys[k]] = tree[keys[k]];
        }

        if (actionsTree != {}) return actionsTree
        else {
            actionsTree["default"] = SpriteManager.defaultTree.rooms.entrance.character.dad.default;
            return actionsTree;
        }
    }
    else{
        actionsTree["default"] = SpriteManager.defaultTree.rooms.entrance.character.dad.default;
        return actionsTree;
    }
}



SpriteManager.getJsonElementByName = function (json, name) {
    for (subTree in json) {
        if (subTree.displayName == name) {
            return subTree;
        }
    }
    return json[0];
}

SpriteManager.getBackgroundPath = function (roomKey, backgroundKey) {
    if(backgroundKey == undefined && roomKey != "bathroom") backgroundKey = "day";
    else if(backgroundKey == undefined && roomKey == "bathroom") backgroundKey = "full_light";

    background = SpriteManager.getBackgroundSubTree(roomKey)[backgroundKey];
    if(background != undefined)
        return SpriteManager.basePath + "room/" + roomKey + "/background/" + background.filename;
    else 
        return SpriteManager.missingPath;
}

SpriteManager.getCharacterPath = function (roomKey, characterKey, actionKey) {
    if (characterKey == "default") return SpriteManager.missingPath;
    room = SpriteManager.getRoomSubTree[roomKey];
    character = SpriteManager.getCharacterSubTree(roomKey)[characterKey];
    path = SpriteManager.basePath + "room/" + roomKey + "/character/" + characterKey + '/' + character[actionKey].filename;
    if (path != null) return path;
    else return SpriteManager.missingPath;
}


SpriteManager.getObjectPath = function (roomKey, objectKey, lightMode) {
    object = SpriteManager.getObjectSubTree(roomKey)[objectKey];
    if(object != undefined){
        var file = SpriteManager.missingPath;
        if(SpriteManager.isTwice(object, roomKey)){
            console.log("isTwice : ");
            console.log(true)
            let array = SpriteManager.getTwice(object, roomKey);
            if(array != []){
                for(var mode in array){
                    if(array[mode].time == lightMode){
                        console.log(lightMode);
                        file = SpriteManager.basePath + "room/" + roomKey + "/object/" + array[mode].filename;
                        return file;
                    }
                }
            }
        }else{
            console.log("isTwice : ");
            console.log(false)
            return SpriteManager.basePath + "room/" + roomKey + "/object/" + object.filename;
        }
        return file;
    }
    else 
        return SpriteManager.missingPath;
}


SpriteManager.getDisplayNameArray = function (tree, defaultArray) {
    array = [];
    if (tree != undefined) {
        for (obj in tree) {
            if(tree[obj].displayName != "" && tree[obj].displayName != undefined)
                array.push([tree[obj].displayName, obj]);
        }
    }
    if (array[0] != undefined) return array;
    else return defaultArray;
}

//DisplayName Array parsing
SpriteManager.checkTwice = function(array){
    let buf = [];
    let twice = false;
    console.log("array : ");
    console.log(array);
    for(var curkey in array){
        twice = false;
        for(var k in buf){
            if(buf[k][0] == array[curkey][0]){
                console.log(buf[k][0]  );
                console.log(array[curkey][0]);
                twice = true;
            }
        }
        if(twice == false){
            buf.push(array[curkey]);
        }
    }
    console.log("checkTwice : ");
    console.log(buf);
    return buf
}


SpriteManager.getTwice = function(object, roomKey){
    let buf = [object];
    let array = SpriteManager.getObjectSubTree(roomKey);

    for(var key in array){
        let isTwice = false;
        for(var k in buf){
            if(buf[k].displayName == array[key].displayName && buf[k].time != array[key].time) isTwice = true;
        }
        if(isTwice) buf.push(array[key]);
    }
    console.log("getTwice : ");
    console.log(buf);
    return buf
}


SpriteManager.isTwice = function(obj, roomKey){
    let count = 0
    objects = SpriteManager.getObjectSubTree(roomKey);
    for(var key in objects){
        if(objects[key].displayName == obj.displayName) count++;
    }
    if(count >= 2) return true;
    else return false;
}

SpriteManager.importTreeJson = function (override) {
    BotlyStudioIPC.getJsonTree();
}

SpriteManager.saveTree = function(){
    SpriteManager.Tree.room =  SpriteManager.treeBuffer;
}

SpriteManager.processRootJson = function (rootJson, override) {
    for (roomKey in rootJson) {
        if (SpriteManager.Tree.room[roomKey] == null || override)
            SpriteManager.Tree.room[roomKey] = rootJson[roomKey];
    }
}

SpriteManager.processRoomJson = function (roomJson, roomKey, override) {
    for (cat in roomJson) {
        if (SpriteManager.Tree.room[roomKey][cat] == null || override)
            SpriteManager.Tree.room[roomKey][cat] = {};
    }
}

SpriteManager.processCharacterJson = function (characterJson, roomKey, override) {
    for (characterKey in characterJson) {
        if (SpriteManager.Tree.room[roomKey].character[characterKey] == null || override)
            SpriteManager.Tree.room[roomKey].character[characterKey] = characterJson[characterKey];
    }
}

SpriteManager.processActionsJson = function (actionsJson, roomKey, characterKey, override) {
    for (actionsKey in actionsJson) {
        if (SpriteManager.Tree.room[roomKey].character[characterKey].actions[actionsKey] == null || override)
            SpriteManager.Tree.room[roomKey].character[characterKey].actions[actionsKey] = actionsJson[actionsKey];
    }
}

SpriteManager.processBackgroundJson = function (backgroundJson, roomKey, override) {
    for (backgroundKey in backgroundJson) {
        if (SpriteManager.Tree.room[roomKey].background[backgroundKey] == null || override)
            SpriteManager.Tree.room[roomKey].background[backgroundKey] = backgroundJson[backgroundKey];
    }
}


SpriteManager.downloadJson = function(){
	var content = JSON.stringify(SpriteManager.Tree,null,2);
	// any kind of extension (.txt,.cpp,.cs,.bat)
	var filename = "sprite.json";

	var blob = new Blob([content], {
	 type: "text/plain;charset=utf-8"
	});

	saveAs(blob, filename);
}

SpriteManager.loadAsset = function(){
    BotlyStudioIPC.importAsset();
}


SpriteManager.loadPicture = function(){
    $('#sprite_dialog').openModal({
        dismissible: true,
        opacity: .5,
        in_duration: 200,
        out_duration: 250
      });
}

SpriteManager.saveAsset = function(){


}


