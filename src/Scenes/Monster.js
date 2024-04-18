class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        this.aKey = null;
        this.dKey = null;
        this.sKey = null;
        this.fKey = null;

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;

        this.leftArmX = this.bodyX - 100;
        this.leftArmY = this.bodyY + 30;
        this.rightArmX = this.bodyX + 100;
        this.rightArmY = this.bodyY + 30;

        this.eyeX = this.bodyX;
        this.eyeY = this.bodyY - 50;

        this.rightLegX = this.bodyX + 50;
        this.rightLegY = this.bodyY + 130;

        this.leftLegX = this.bodyX - 50;
        this.leftLegY = this.bodyY + 130;

        this.smileX = this.bodyX;
        this.smileY = this.bodyY + 40;
        this.fangsX = this.bodyX;
        this.fangsY = this.bodyY + 40;

        this.leftAntX = this.bodyX - 40;
        this.leftAntY = this.bodyY - 100;
        this.rightAntX = this.bodyX + 40;
        this.rightAntY = this.bodyY - 100;

        this.smileType = true;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability
        
        this.aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.sKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.fKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);


        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");

        my.sprite.rightArm = this.add.sprite(this.rightArmX, this.rightArmY, "monsterParts", "arm_blueC.png");
        my.sprite.leftArm = this.add.sprite(this.leftArmX, this.leftArmY, "monsterParts", "arm_blueC.png");
        my.sprite.leftArm.flipX = true;

        my.sprite.eye = this.add.sprite(this.eyeX, this.eyeY, "monsterParts", "eye_red.png");

        my.sprite.rightLeg = this.add.sprite(this.rightLegX, this.rightLegY, "monsterParts", "leg_blueC.png");
        my.sprite.leftLeg = this.add.sprite(this.leftLegX, this.leftLegY, "monsterParts", "leg_blueC.png");
        my.sprite.leftLeg.flipX = true;

        my.sprite.smile = this.add.sprite(this.smileX, this.smileY, "monsterParts", "mouthC.png");
        my.sprite.fangs = this.add.sprite(this.fangsX, this.fangsY, "monsterParts", "mouth_closed_fangs.png");
        my.sprite.fangs.visible = false;
        
        my.sprite.leftAnt = this.add.sprite(this.leftAntX, this.leftAntY, "monsterParts", "detail_red_antenna_small.png");
        my.sprite.leftAnt.flipX = true;
        my.sprite.rightAnt = this.add.sprite(this.rightAntX, this.rightAntY, "monsterParts", "detail_red_antenna_small.png");
    

    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

        if (this.aKey.isDown){
            console.log("a");
            my.sprite.body.x -= 1;
            my.sprite.rightArm.x -= 1;
            my.sprite.leftArm.x -= 1;
            my.sprite.eye.x -= 1;
            my.sprite.rightLeg.x -= 1;
            my.sprite.leftLeg.x -= 1;
            my.sprite.smile.x -= 1;
            my.sprite.fangs.x -= 1;
            my.sprite.leftAnt.x -= 1;
            my.sprite.rightAnt.x -= 1;
        }
        if (this.dKey.isDown){
            my.sprite.body.x += 1;
            my.sprite.rightArm.x += 1;
            my.sprite.leftArm.x += 1;
            my.sprite.eye.x += 1;
            my.sprite.rightLeg.x += 1;
            my.sprite.leftLeg.x += 1;
            my.sprite.smile.x += 1;
            my.sprite.fangs.x += 1;
            my.sprite.leftAnt.x += 1;
            my.sprite.rightAnt.x += 1;
        }
        if (this.sKey.isDown){
            console.log("a");
            this.smileType = true;
        }
        if (this.fKey.isDown){
            console.log("a");
            this.smileType = false;
        }
        if (this.smileType) {
            my.sprite.smile.visible = true;
            my.sprite.fangs.visible = false;
        } else {
            my.sprite.smile.visible = false;
            my.sprite.fangs.visible = true;
        }
    }
}