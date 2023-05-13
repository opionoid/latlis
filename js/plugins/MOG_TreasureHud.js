//=============================================================================
// MOG_TreasureHud.js
//=============================================================================

/*:ja
 * @target MZ
 * @plugindesc (v1.3) 宝箱を手に入れた時にHUDを表示します。
 * @author Moghunter
 *
 * @param Hud X-Axis
 * @text HUDのX軸位置
 * @desc 正:右 / 負:左
 * @type number
 * @min -9007
 * @max 9007
 * @default 555
 *
 * @param Hud Y-Axis
 * @text HUDのY軸位置
 * @desc 正:下 / 負:上
 * @type number
 * @min -9007
 * @max 9007
 * @default 500
 *
 * @param Name X-Axis
 * @text 名前のX軸位置
 * @desc 正:右 / 負:左
 * @type number
 * @min -9007
 * @max 9007
 * @default 78
 *
 * @param Name Y-Axis
 * @text 名前のY軸位置
 * @desc 正:下 / 負:上
 * @type number
 * @min -9007
 * @max 9007
 * @default 24
 *
 * @param Icon X-Axis
 * @text アイコンのX軸位置
 * @desc 正:右 / 負:左
 * @type number
 * @min -9007
 * @max 9007
 * @default 42
 *
 * @param Icon Y-Axis
 * @text アイコンのY軸位置
 * @desc 正:下 / 負:上
 * @type number
 * @min -9007
 * @max 9007
 * @default 24
 *
 * @param Duration
 * @text 表示時間
 * @default 90
 *
 * @param Gold Icon Index
 * @text 通貨アイコン
 * @desc アイコンIDを指定
 * @default 163
 *
 * @param Font Size
 * @text フォントサイズ
 * @type number
 * @max 9007
 * @default 20
 *
 * @help
 * 翻訳:ムノクラ
 * https://fungamemake.com/
 * https://twitter.com/munokura/
 *
 * ===========================================================================
 * +++ MOG Treasure Hud (v1.3) +++
 * By Moghunter
 * https://atelierrgss.wordpress.com/
 * ===========================================================================
 * 宝箱等でアイテム等を手に入れた時にHUDを表示します。
 * 複数のアイテム等が1イベントで手に入った場合、
 * 最後に手に入ったものだけがHUDに表示されます。
 *
 * 下記フォルダ内に画像ファイルが必要になります。
 * (img/system/)
 *
 * Treasure.png
 *
 * ===========================================================================
 * 下記のプラグインコマンドでHUDの表示/非表示を切り替えられます。
 *
 * show_treasure_hud
 * hide_treasure_hud
 *
 * ===========================================================================
 * 変更履歴
 * ===========================================================================
 * (v1.3) - コーディングとプラグインの互換性の向上
 * (v1.2) - HUDを負の値を表示する現象に対する修正
 * (v1.1) - キャラクターの装備機能でHUDを表示するように修正
 *
 */
//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================
　　var Imported = Imported || {};
　　Imported.MOG_TreasureHud = true;
　　var Moghunter = Moghunter || {}; 

  　Moghunter.parameters = PluginManager.parameters('MOG_TreasureHud');   
    Moghunter.thud_pos_x = Number(Moghunter.parameters['Hud X-Axis'] || 555);
	Moghunter.thud_pos_y = Number(Moghunter.parameters['Hud Y-Axis'] || 500);
	Moghunter.thud_text_x = Number(Moghunter.parameters['Name X-Axis'] || 78);
	Moghunter.thud_text_y = Number(Moghunter.parameters['Name Y-Axis'] || 22);
	Moghunter.thud_icon_x = Number(Moghunter.parameters['Icon X-Axis'] || 42);
	Moghunter.thud_icon_y = Number(Moghunter.parameters['Icon Y-Axis'] || 22);	
	Moghunter.thud_duration = Number(Moghunter.parameters['Duration'] || 90);
	Moghunter.thud_gold_index = Number(Moghunter.parameters['Gold Icon Index'] || 163);
	Moghunter.thud_fontsize = Number(Moghunter.parameters['Font Size'] || 20);
	
//=============================================================================
// ■■■  PluginManager ■■■ 
//=============================================================================	
	PluginManager.registerCommand('MOG_TreasureHud', "TreasureHudVisible", data => {
    var vis = String(data.visible) == "true" ? true : false;
	$gameSystem._thud_visible = vis;
});
	
//=============================================================================
// ■■■ Game_System ■■■
//=============================================================================

//==============================
// ♦ ALIAS ♦  Initialize
//==============================
var _alias_mog_thud_sys_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
	_alias_mog_thud_sys_initialize.call(this);
	this._thud_visible = true;
	this._thud_int = false;	
};

//=============================================================================
// ■■■ Game_Temp ■■■
//=============================================================================

//==============================
// ♦ ALIAS ♦  Initialize
//==============================
var _alias_mog_thud_temp_initialize = Game_Temp.prototype.initialize;
Game_Temp.prototype.initialize = function() {
	_alias_mog_thud_temp_initialize.call(this);
	this._thud_sprite = [false,0,0];
	this._thud_data = [false,null,0];	
};

//=============================================================================
// ■■■ Game_Interpreter ■■■
//=============================================================================

//==============================
// ♦ ALIAS ♦  Command125
//==============================
var _alias_mog_thud_command125 = Game_Interpreter.prototype.command125;
Game_Interpreter.prototype.command125 = function(params) {
	$gameTemp._thud_int = true;
    _alias_mog_thud_command125.call(this,params);
    return true;
};

//==============================
// ♦ ALIAS ♦  Command126
//==============================
var _alias_mog_thud_command126 = Game_Interpreter.prototype.command126;
Game_Interpreter.prototype.command126 = function(params) {
	$gameTemp._thud_int = true;
    _alias_mog_thud_command126.call(this,params);
    return true;
};

//==============================
// ♦ ALIAS ♦  Command127
//==============================
var _alias_mog_thud_command127 = Game_Interpreter.prototype.command127;
Game_Interpreter.prototype.command127 = function(params) {
	$gameTemp._thud_int = true;
    _alias_mog_thud_command127.call(this,params);
    return true;
};

//==============================
// ♦ ALIAS ♦  Command128
//==============================
var _alias_mog_thud_command128 = Game_Interpreter.prototype.command128;
Game_Interpreter.prototype.command128 = function(params) {
	$gameTemp._thud_int = true;
    _alias_mog_thud_command128.call(this,params);
    return true;
};


//=============================================================================
// ■■■ Game_Party ■■■
//=============================================================================

//==============================
// ♦ ALIAS ♦  Gain Item
//==============================
var _alias_mog_thud_gparty_gainItem = Game_Party.prototype.gainItem;
Game_Party.prototype.gainItem = function(item, amount, includeEquip) {
	_alias_mog_thud_gparty_gainItem.call(this,item, amount, includeEquip);
	if ($gameSystem._thud_visible && !this.inBattle() && $gameTemp._thud_int && amount > 0) {$gameTemp._thud_data = [true,item,amount]};
    $gameTemp._thud_int = false;
};

//==============================
// ♦ ALIAS ♦  Gain Gold
//==============================
var _alias_mog_thud_gainGold = Game_Party.prototype.gainGold;
Game_Party.prototype.gainGold = function(amount) {
	_alias_mog_thud_gainGold.call(this,amount);
	if ($gameSystem._thud_visible && !this.inBattle() && amount > 0) {$gameTemp._thud_data = [true,"gold",amount]};
    $gameTemp._thud_int = false;
};

//=============================================================================
// ■■■ Scene Base ■■■
//=============================================================================

//==============================
// * create Hud Field
//==============================
Scene_Base.prototype.createHudField = function() {
	this._hudField = new Sprite();
	this._hudField.z = 10;
	this.addChild(this._hudField);
};

//==============================
// * sort MZ
//==============================
Scene_Base.prototype.sortMz = function() {
   this._hudField.children.sort((a, b) => a.z - b.z);
};

//=============================================================================
// ■■■ Scene Map ■■■
//=============================================================================

//==============================
// ♦ ALIAS ♦  create Spriteset
//==============================
var _mog_treHud_sMap_createSpriteset = Scene_Map.prototype.createSpriteset;
Scene_Map.prototype.createSpriteset = function() {
	_mog_treHud_sMap_createSpriteset.call(this);
	if (!this._hudField) {this.createHudField()};
	this.createtreasureHud();
	this.sortMz();
};

//==============================
// ♦ ALIAS ♦  snapForBattleBackground
//==============================
var _mog_treHud_scnMap_snapForBattleBackground = Scene_Map.prototype.snapForBattleBackground;
Scene_Map.prototype.snapForBattleBackground = function() {
	if (this._hudField && SceneManager.isNextScene(Scene_Battle)) {this._hudField.visible = false};
	_mog_treHud_scnMap_snapForBattleBackground.call(this);
};

//==============================
// * create Treasure Hud
//==============================
Scene_Map.prototype.createtreasureHud = function() {
	this._treasure_hud = new Treasure_Hud();
	this._treasure_hud.z = 121;
	this._hudField.addChild(this._treasure_hud);
};

//=============================================================================
// ■■■ Treasure_Hud ■■■
//=============================================================================
function Treasure_Hud() {
    this.initialize.apply(this, arguments);
};

Treasure_Hud.prototype = Object.create(Sprite.prototype);
Treasure_Hud.prototype.constructor = Treasure_Hud;

//==============================
// ♦ ALIAS ♦  Initialize
//==============================
Treasure_Hud.prototype.initialize = function() {	
    Sprite.prototype.initialize.call(this);	
    this._pos_x = Moghunter.thud_pos_x;
	this._pos_y = Moghunter.thud_pos_y;	
    this.load_img();
	this.create_sprites();
	this.opacity = 0;
	this.visible = false;
	this.refresh();
};

//==============================
// * Load Img
//==============================
Treasure_Hud.prototype.load_img = function() {
	this._layout_img = ImageManager.loadSystem("Treasure");
	this._icon_img = ImageManager.loadSystem("IconSet");
};

//==============================
// * Create Layout
//==============================
Treasure_Hud.prototype.create_layout = function() {
	this._layout = new Sprite(this._layout_img);
	this._layout.x = this._pos_x;
	this._layout.y = this._pos_y;
	this.addChild(this._layout);
};

//==============================
// * Create Text
//==============================
Treasure_Hud.prototype.create_text = function() {
	this._text = new Sprite(new Bitmap(160,32));
	this._text.x = this._pos_x + Moghunter.thud_text_x;
	this._text.y = this._pos_y + Moghunter.thud_text_y;
	this._text.bitmap.fontSize = Moghunter.thud_fontsize;
	this.addChild(this._text);
};

//==============================
// * Create Icon
//==============================
Treasure_Hud.prototype.create_icon = function() {
	this._icon = new Sprite(this._icon_img);
	this._icon.x = this._pos_x + Moghunter.thud_icon_x;
	this._icon.y = this._pos_y + Moghunter.thud_icon_y;
	this.addChild(this._icon);
};

//==============================
// * Create Sprites
//==============================
Treasure_Hud.prototype.create_sprites = function() {
  	 this.create_layout();
	 this.create_icon();
     this.create_text();	 
};

//==============================
// * Item
//==============================
Treasure_Hud.prototype.item = function() {
     return $gameTemp._thud_data[1];
};

//==============================
// * Number
//==============================
Treasure_Hud.prototype.number = function() {
     return $gameTemp._thud_data[2];
};

//==============================
// * Name
//==============================
Treasure_Hud.prototype.name = function() {
	 if (this.item() === "gold") {return ""};
     return "x " + $gameTemp._thud_data[1].name;
};

//==============================
// * Refresh Init
//==============================
Treasure_Hud.prototype.refresh_init = function() {
  $gameTemp._thud_data[0] = false;
  $gameTemp._thud_sprite = [true,0,0];
  this.x = -50;
  this.opacity = 0;
};

//==============================
// * Refresh
//==============================
Treasure_Hud.prototype.refresh = function() {
	if ($gameTemp._thud_data[0]) {this.refresh_init()};	
	if (!this.item()) {return};
    this.refresh_icon();
	this.refresh_name();
	this.opacity = $gameTemp._thud_sprite[1];
	if (!$gameTemp._thud_sprite[0]) {this.opacity = 0};
};

//==============================
// * Refresh Icon
//==============================
Treasure_Hud.prototype.refresh_icon = function() { 
    if (this.item() === "gold") {var iconIndex = Moghunter.thud_gold_index;
    } else {var iconIndex = this.item().iconIndex};
    var sx = iconIndex % 16 * 32;
    var sy = Math.floor(iconIndex / 16) * 32;
    this._icon.setFrame(sx, sy, 32, 32);
};

//==============================
// * Refresh Name
//==============================
Treasure_Hud.prototype.refresh_name = function() {
    this._text.bitmap.clear();
	var text = String(this.number() + " " + this.name());
	this._text.bitmap.drawText(text,0,0,160,32,"left");
};

//==============================
// * Update visible
//==============================
Treasure_Hud.prototype.update_position = function() {
	$gameTemp._thud_sprite[1] += 1;
    if ($gameTemp._thud_sprite[1] < 20) {
		this.opacity += 13;	this.x += 2.5;
	} else if ($gameTemp._thud_sprite[1] < 20 + Moghunter.thud_duration) {
		this.x = 0;	this.opacity = 255;
	} else { 
	    this.opacity -= 13;	this.x += 2.5;
		if (this.opacity === 0) {$gameTemp._thud_sprite[0] = false};
	};
};

//==============================
// * Update
//==============================
Treasure_Hud.prototype.update = function() {	
    Sprite.prototype.update.call(this);	
	if ($gameTemp._thud_sprite[0]) {this.update_position()
	} else {this.opacity = 0};
	if ($gameTemp._thud_data[0]) {this.refresh()};
	this.visible = true;
};