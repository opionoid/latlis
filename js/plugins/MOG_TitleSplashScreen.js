//=============================================================================
// MOG_TitleSplashScreen.js
//=============================================================================

/*:ja
 * @target MZ
 * @plugindesc (v1.1 *) タイトル画面の表示前に複数のロゴを表示します。
 * @author Moghunter
 *
 * @param Number of Logos
 * @text ロゴ数
 * @desc デフォルト:1
 * @default 1
 * @type number
 * @max 9007
 *
 * @param Slash Duration
 * @text ロゴの表示時間
 * @desc デフォルト:60
 * @default 60
 * @type number
 * @max 9007
 *
 * @param Splash Fade Duration
 * @text フェード速度
 * @desc デフォルト:2
 * @default 2
 * @type number
 * @max 9007
 *
 * @param Full Screen Mode
 * @text 起動時全画面表示の有効化
 * @desc デフォルト:無効
 * @type boolean
 * @on 有効
 * @off 無効
 * @default false
 *
 * @help
 * 翻訳:ムノクラ
 * https://fungamemake.com/
 * https://twitter.com/munokura/
 *
 * ===========================================================================
 * +++ MOG - Title Splash Screen (v1.1) +++
 * By Moghunter
 * https://atelierrgss.wordpress.com/
 * ===========================================================================
 * タイトル画面の表示前に複数のロゴを表示します。
 * 画像を下記フォルダに入れてください。
 *
 * img/titles2/
 *
 * 下記のファイルが必要になります。
 *
 * Splash_INDEX.png
 *
 * INDEXの代わりに表示順の番号を付けます。
 *
 * Splash_0.png
 * Splash_1.png
 * Splash_2.png
 * ...
 *
 * ===========================================================================
 * - 更新履歴 (version 1.1)
 * ===========================================================================
 * - (NEW) - RM1.5 +準拠パラメータプラグイン
 */
//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================
    var Imported = Imported || {};
    Imported.MOG_TitleSplashScreen = true;
　　var Moghunter = Moghunter || {}; 

  　Moghunter.parameters = PluginManager.parameters('MOG_TitleSplashScreen');
    Moghunter.title_splash_fitScreen = String(Moghunter.parameters['Fit Screen Resolution'] || "true");	
    Moghunter.title_splash_number = Number(Moghunter.parameters['Number of Logos'] || 1);
    Moghunter.title_splash_duration = Number(Moghunter.parameters['Slash Duration'] || 60);
    Moghunter.title_splash_fade_speed = Number(Moghunter.parameters['Splash Fade Duration'] || 2);

//=============================================================================
// ■ Scene Boot ■ 
//=============================================================================	

//==============================
// ♦ ALIAS ♦  Start Normal Game
//==============================
var _mog_splashScreen_scnboot_startNormalGame = Scene_Boot.prototype.startNormalGame;
Scene_Boot.prototype.startNormalGame = function() {
	_mog_splashScreen_scnboot_startNormalGame.call(this)
	SceneManager.goto(Scene_Splash_Screen)
};

//=============================================================================
// ■ Scene Splash Screen ■ 
//=============================================================================	
function Scene_Splash_Screen() {
    this.initialize.apply(this, arguments);
};

Scene_Splash_Screen.prototype = Object.create(Scene_Base.prototype);
Scene_Splash_Screen.prototype.constructor = Scene_Splash_Screen;

//==============================
// * Create
//==============================
Scene_Splash_Screen.prototype.create = function() {	
    Scene_Base.prototype.create.call(this);
	this._splash_data = [0,0, Math.max(Moghunter.title_splash_duration,1),Math.max(Moghunter.title_splash_fade_speed, 1)];
    this._splash_img = [];
	this._splash_sprite = new Sprite();
    this._splash_sprite.anchor.x = 0.5;
    this._splash_sprite.anchor.y = 0.5;
	this._splash_sprite.x = Graphics.width / 2;
	this._splash_sprite.y = Graphics.height / 2;
	this.addChild(this._splash_sprite);
	for (i = 0; i < Moghunter.title_splash_number; i++){
		this._splash_img.push(ImageManager.loadTitle2("Splash_" + i));
	};
};

//==============================
// * Refresh Splash Screen
//==============================
Scene_Splash_Screen.prototype.refresh_splash_screen = function() {
   if (this._splash_data[0] >= this._splash_img.length) {
	   AudioManager.stopMe();
	   this.checkPlayerLocation();
       DataManager.setupNewGame();
       SceneManager.goto(Scene_Title);
       Window_TitleCommand.initCommandPosition();
       return;
   };	
   this._splash_sprite.bitmap = this._splash_img[this._splash_data[0]];
   this._splash_sprite.opacity = 0;
   this._splash_data[0] += 1;
   this._splash_data[1] = this._splash_data[2];
   if (this.needFitScreen()) {	this.fitScreen()};
};

//==============================
// * Fit Screen
//==============================
Scene_Splash_Screen.prototype.fitScreen = function() {
	if (this._splash_sprite.bitmap.width < Graphics.width) {
    	this._splash_sprite.scale.x = Graphics.width / this._splash_sprite.bitmap.width;
	};
	if (this._splash_sprite.bitmap.height < Graphics.height) {
	    this._splash_sprite.scale.y = Graphics.height / this._splash_sprite.bitmap.height;
	};
};

//==============================
// * needFitScreen
//==============================
Scene_Splash_Screen.prototype.needFitScreen = function() {
	if (Moghunter.title_splash_fitScreen != "true") {return false};
	return true;
};

//==============================
// * Check Player Location
//==============================
Scene_Splash_Screen.prototype.checkPlayerLocation = function() {
    if ($dataSystem.startMapId === 0) {
        throw new Error("Player's starting position is not set");
    }
};

//==============================
// * Start
//==============================
Scene_Splash_Screen.prototype.start = function() {
    Scene_Base.prototype.start.call(this);
    this.startFadeIn(this.fadeSpeed(), false);
};

//==============================
// * getData
//==============================
Scene_Splash_Screen.prototype.getData = function() {
    this._splash_sprite.data = true;
	this.refresh_splash_screen();
};

//==============================
// * Update Splash Screen
//==============================
Scene_Splash_Screen.prototype.updateSplashScreen = function() {
	if (!this._splash_sprite.data) {
	     if (this._splash_img[0].isReady()) {this.getData()};
	     return;
    };
	if (this._splash_data[1] <= 0) {
		this._splash_sprite.opacity -= this._splash_data[3];
	    if (Input.isTriggered("ok") || TouchInput.isTriggered()) {this._splash_data[0] = this._splash_img.length};		
		if (this._splash_sprite.opacity <= 0) {this.refresh_splash_screen()};
	}
	else {
	  this._splash_sprite.opacity += this._splash_data[3];
	  if ((Input.isTriggered("ok") || TouchInput.isTriggered()) && this._splash_sprite.opacity > 60) {
		  this._splash_data[1] = 0; this._splash_data[0] = this._splash_img.length};
	  if (this._splash_sprite.opacity >= 255) {this._splash_data[1] -= 1};
	};
};

//==============================
// * Update
//==============================
Scene_Splash_Screen.prototype.update = function() {
	Scene_Base.prototype.update.call(this);
    this.updateSplashScreen();
};