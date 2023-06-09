//=============================================================================
// MOG_MenuParticles.js
//=============================================================================

/*:ja
 * @target MZ
 * @plugindesc (v1.1) メニューにパーティクルを追加します。
 * @author Moghunter
 *
 * @param Number of Particles
 * @text パーティクル量
 * @default 15
 *
 * @param Unique Particles
 * @text シーン別パーティクルの有効化
 * @type boolean
 * @on 有効
 * @off 無効
 * @default false
 *
 * @param Disable Scenes
 * @text 無効にするシーン
 * @desc 例:Scene_Menu, Scene_Item, Scene_Skill, Scene_Equip, Scene_Status, Scene_Options, Scene_Save, Scene_GameEnd
 * @default Scene_Menu,Scene_Item,Scene_Skill,Scene_Equip,Scene_Status,Scene_Options,Scene_Save,Scene_GameEnd
 *
 * @param X-Axis Speed
 * @text X方向移動速度
 * @desc 正:右 / 負:左
 * @default 0
 *
 * @param Y-Axis Speed
 * @text Y方向移動速度
 * @desc 正:下 / 負:上
 * @default -1
 *
 * @param Rotation Speed
 * @text 回転速度
 * @desc 正:時計回り / 負:反時計回り。絶対値が大きいほど高速。
 * @default 1
 *
 * @param Blend Mode
 * @text 合成方法
 * @desc 0:通常 / 1:加算 / 2:乗算
 * @type select
 * @option 通常
 * @value 0
 * @option 加算
 * @value 1
 * @option 乗算
 * @value 2
 * @default 1
 *
 * @help
 * 翻訳:ムノクラ
 * https://fungamemake.com/
 * https://twitter.com/munokura/
 *
 * ===========================================================================
 * +++ MOG - Menu Particles (v1.1) +++
 * By Moghunter
 * https://atelierrgss.wordpress.com/
 * ===========================================================================
 * メニューにパーティクルを追加します。
 * シーン別に異なるパーティクルを有効/無効にできます。
 * ===========================================================================
 * 必要な画像ファイルを下記に保存して下さい。
 * /img/menus/
 *
 * デフォルトのパーティクル画像ファイルが必要です。
 * Particles.png
 *
 * ===========================================================================
 * シーン別パーティクルが有効の場合、
 * 各パーティクル画像ファイル名は下記の法則に従って下さい。
 *
 * Scene_Name + _par.png
 *
 * 例
 *
 * Scene_Menu_par.png
 * Scene_Item_par.png
 * Scene_Skill_par.png
 * Scene_Equip_par.png
 * Scene_Status_par.png
 * Scene_Options_par.png
 * Scene_Save_par.png
 * Scene_GameEnd_par.png
 *
 * ===========================================================================
 * 更新履歴
 * ===========================================================================
 * (v1.1) - シーン別パーティクル機能修正
 *
 */ 
(() => {
//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================
　　var Imported = Imported || {};
　　Imported.MOG_MenuParticles = true;
　　var Moghunter = Moghunter || {}; 

  　Moghunter.parameters = PluginManager.parameters('MOG_MenuParticles');
    Moghunter.mpart_fileName = String(Moghunter.parameters['File Name'] || "Particles");
    Moghunter.mpart_selfpart = String(Moghunter.parameters['Unique Particles'] || "false");
	Moghunter.mpart_skipscenes = Object(Moghunter.parameters['Disable Scenes'] || []);
	Moghunter.mpart_ox = Number(Moghunter.parameters['X-Axis Speed'] || 0);
	Moghunter.mpart_oy = Number(Moghunter.parameters['Y-Axis Speed'] || -1);
	Moghunter.mpart_a = Number(Moghunter.parameters['Rotation Speed'] || 1);
	Moghunter.mpart_number = Number(Moghunter.parameters['Number of Particles'] || 15);
	Moghunter.mpart_blendMode = String(Moghunter.parameters['Blend Mode'] || "Normal");
	SceneManager._mpart             = false;
	
//==============================
// * Setup Command
//==============================
PluginManager.registerCommand('MOG_MenuParticles', "MenuParticles_Setup", data => {
	const fileName = String(data.fileName);
	const sx = Number(data.sx);
	const sy = Number(data.sy);
	const rt = Number(data.rt);
	const power = Number(data.power);
	const blendMode = $gameSystem.parameterCommandGetBlend(String(data.blendMode));	
	$gameSystem._menuParticlesData.fileName = fileName;
	$gameSystem._menuParticlesData.sx = sx;
	$gameSystem._menuParticlesData.sy = sy;
	$gameSystem._menuParticlesData.rt = rt;
	$gameSystem._menuParticlesData.power = (Math.min(Math.max(power,5),1000));
	$gameSystem._menuParticlesData.blensMode = blendMode;
	$gameSystem._menuParticlesData.needRefresh = true;
});		
	
//=============================================================================
// ■■■ ImageManager ■■■
//=============================================================================

//==============================
// * Menus
//==============================
ImageManager.loadMenus = function(filename) {
    return this.loadBitmap('img/menus/', filename);
};

//=============================================================================
// ■■■ Game System ■■■
//=============================================================================

//==============================
// ♦ ALIAS ♦  Initialize
//==============================
const _mog_menuParticles_gSystem_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
	_mog_menuParticles_gSystem_initialize.call(this);
	this.setupMenuParticles();
};

//==============================
// * Setup Menu Particles
//==============================
Game_System.prototype.setupMenuParticles = function() {
    this._menuParticlesData = {};
	this._menuParticlesData.fileName = String(Moghunter.mpart_fileName);
	this._menuParticlesData.sx = Number(Moghunter.mpart_ox);
	this._menuParticlesData.sy = Number(Moghunter.mpart_oy);
	this._menuParticlesData.rt = Number(Moghunter.mpart_a);
	this._menuParticlesData.power = (Math.min(Math.max(Number(Moghunter.mpart_number),5),1000));
	this._menuParticlesData.blendMode = this.parameterCommandGetBlend(String(Moghunter.mpart_blendMode));
	this._menuParticlesData.needRefresh = false;
};

//==============================
// * parameterCommandGetBlend
//==============================
Game_System.prototype.parameterCommandGetBlend = function(blend) {
	if (blend == "Additive") {return 1;
	} else if (blend == "Multiply") {return 2};
	return 0;
}; 

//==============================
// * Get Par Array
//==============================
Game_System.prototype.get_par_array = function(object,value,type) {
	if (value.length === 0) {return};
	var s = value.split(',');
	if (type === 0){
		for (var i = 0; i < s.length; i++) {object.push(String(s[i]));	};
	} else {
	    for (var i = 0; i < s.length; i++) {object.push(Number(s[i]));	};
   };
};

//=============================================================================
// ■■■ Scene MenuBase ■■■
//=============================================================================

//==============================
// ** create Menu Field 1
//==============================
Scene_MenuBase.prototype.createMenuField1 = function() {
	this._menuField1 = new Sprite();
	this._menuField1.z = 10;
	this.addChild(this._menuField1);
};

//==============================
// ** sort MZ
//==============================
Scene_MenuBase.prototype.sortMenuMz = function() {
   if (this._menuField1) {this._menuField1.children.sort((a, b) => a.z - b.z)};
   if (this._menuField2) {this._menuField2.children.sort((a, b) => a.z - b.z)};
   if (this._menuField3) {this._menuField3.children.sort((a, b) => a.z - b.z)};
};

//==============================
// * Skip Particles
//==============================
Scene_MenuBase.prototype.skip_particles = function() {
	if (!SceneManager._scene) {return false};
	this._mb_skip_scenes = [];
	$gameSystem.get_par_array(this._mb_skip_scenes, Moghunter.mpart_skipscenes, 0);
   	for (var i = 0; i < this._mb_skip_scenes.length; i++) {
		if (this._mb_skip_scenes[i] === SceneManager._scene.constructor.name) {return true};
	};	
    return false;
};

//==============================
// ♦ ALIAS ♦  Create
//==============================
const _mog_mpart_scbase_createBackground = Scene_MenuBase.prototype.createBackground;
Scene_MenuBase.prototype.createBackground = function() {
	SceneManager._mpart = false;	
	_mog_mpart_scbase_createBackground.call(this);
	if (!this._menuField1) {this.createMenuField1()};
	if (!this.skip_particles()) {this.createMenuParticles()};
	this.sortMenuMz();
};

//==============================
// ♦ ALIAS ♦  Terminate
//==============================
const _mog_mpart_scmb_terminate = Scene_MenuBase.prototype.terminate;
Scene_MenuBase.prototype.terminate = function() {
	_mog_mpart_scmb_terminate.call(this);
	SceneManager._mpart = false;
};

//==============================
// * Create Menu Particles
//==============================
Scene_MenuBase.prototype.createMenuParticles = function() {	
    this._menuParticles = new MenuParticles()
    this._menuParticles.z = 30;
    this._menuField1.addChild(this._menuParticles);
	SceneManager._mpart = true;
};

//=============================================================================
// ■■■ MenuParticles ■■■
//=============================================================================
function MenuParticles() {
    this.initialize.apply(this, arguments);
};

MenuParticles.prototype = Object.create(Sprite.prototype);
MenuParticles.prototype.constructor = MenuParticles;

//==============================
// ♦♦ Initialize
//==============================
MenuParticles.prototype.initialize = function() {
	Sprite.prototype.initialize.call(this);
    this.createParticles();
};

//==============================
// * File Name
//==============================
MenuParticles.prototype.fileName = function() {
	if (this._self_par && SceneManager._scene) {return SceneManager._scene.constructor.name + "_par"}
	return String($gameSystem._menuParticlesData.fileName);
};

//==============================
// * max Particles
//==============================
MenuParticles.prototype.maxParticles = function() {
   return $gameSystem._menuParticlesData.power
};

//==============================
// * Create Mbackground
//==============================
MenuParticles.prototype.createParticles = function() {	
    this._self_par = false;
	if (String(Moghunter.mpart_selfpart) === "true") {this._self_par = true};
   	this._sprite_particles = [];
	this._sprite_particles_data = [];
	this._nw = [0,0];
	if (Moghunter.mpart_ox > 0) {this._nw[0] = -(Graphics.width / 3)};
	if (Moghunter.mpart_ox < 0) {this._nw[0] = (Graphics.width / 3)};
	this._nw[1] = Math.abs(this._nw[0]);
    for (i = 0; i < this.maxParticles(); i++) {
	  this._sprite_particles.push(new Sprite(ImageManager.loadMenus(this.fileName())));
	  this.addChild(this._sprite_particles[i]);
	  this._sprite_particles_data[i] = []	  
	  this.reset_particles(i);
	  this._sprite_particles[i].x = Math.randomInt(Graphics.width);
	  this._sprite_particles[i].y = Math.randomInt(Graphics.height);
	  this._sprite_particles[i].opacity = 0;
	  this._sprite_particles[i].blendMode = $gameSystem._menuParticlesData.blendMode;
	  this._sprite_particles[i].z = 30 + i;
    };	
};

//==============================
// * Reset Particles
//==============================	
MenuParticles.prototype.reset_particles = function(i) {	
	this._sprite_particles_data[i][0] = ((Math.random() * 2) + 0.4) * $gameSystem._menuParticlesData.sx;
	this._sprite_particles_data[i][1] = ((Math.random() * 2) + 0.4) * $gameSystem._menuParticlesData.sy;
	this._sprite_particles_data[i][2] = ((Math.random() * $gameSystem._menuParticlesData.rt)) * 0.01;
	this._sprite_particles[i].opacity = 0;
	this._sprite_particles[i].x = this._nw[0] + Math.randomInt(Graphics.width);
	var pz = ((Math.random() * 0.5) * 1);
	this._sprite_particles[i].scale = new PIXI.Point(0.5 + Number(pz), 0.5 + Number(pz));
	if (Moghunter.mpart_oy < 0) { 
	    this._sprite_particles[i].y = Graphics.boxHeight + this._sprite_particles[i].height * 3;
	} else if (Moghunter.mpart_oy > 0) {
		this._sprite_particles[i].y = -this._sprite_particles[i].height * 3;
	} else {
	    this._sprite_particles[i].y = Math.randomInt(Graphics.height);
    }; 
	if (this._sprite_particles_data[i][0] == 0 && this._sprite_particles_data[i][1] == 0) {
       this._sprite_particles[i].x = -Graphics.width
    };
};

//==============================
// * Update Particles
//==============================
MenuParticles.prototype.updateParticles = function() {
   for (var i = 0; i < this._sprite_particles.length; i++) {
        this._sprite_particles[i].x += this._sprite_particles_data[i][0];
		this._sprite_particles[i].y += this._sprite_particles_data[i][1];
		this._sprite_particles[i].opacity += 4;
		this._sprite_particles[i].rotation += this._sprite_particles_data[i][2];
    	if (this.need_reset_particles(i)) { this.reset_particles(i);};
	};
};

//==============================
// * Need Reset Particles
//==============================	
MenuParticles.prototype.need_reset_particles = function(i) {
	if (this._sprite_particles[i].x < -this._nw[1] - this._sprite_particles[i].width * 3) {return true};
	if (this._sprite_particles[i].x > this._nw[1] + Graphics.width + this._sprite_particles[i].width * 3) {return true};
	if (this._sprite_particles[i].y < - this._sprite_particles[i].height * 3) {return true};
	if (this._sprite_particles[i].y > Graphics.height + this._sprite_particles[i].height * 3) {return true};
	return false;
};

//==============================
// ♦♦ Update
//==============================
MenuParticles.prototype.update = function() {
	Sprite.prototype.update.call(this);
    if (this._sprite_particles) {this.updateParticles()};
};

})();