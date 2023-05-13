//=============================================================================
// MOG_EventSensor.js
//=============================================================================

/*:ja
 * @target MZ
 * @plugindesc (v1.1) プレーヤとイベントとの間の距離に応じて、イベントの指定のセルフスイッチを入れます。
 * @author Moghunter
 *
 * @param Self Switch Key
 * @text 指定セルフスイッチ
 * @type combo
 * @option A
 * @option B
 * @option C
 * @option D
 * @default D
 *
 * @help
 * 翻訳:ムノクラ
 * https://fungamemake.com/
 * https://twitter.com/munokura/
 *
 * ===========================================================================
 * +++ MOG - Event Sensor (v1.1) +++
 * By Moghunter
 * https://atelierrgss.wordpress.com/
 * ===========================================================================
 * プレーヤとイベントとの間の距離に応じて、
 * イベントの指定セルフスイッチをONにします。
 * ===========================================================================
 * センサーの距離を設定するには、イベントページに注釈タグを付けます。
 *
 * event sensor : X
 *
 * X- 距離の数
 *
 * ===========================================================================
 * 更新履歴
 * ===========================================================================
 * (v1.1) - 注釈コマンド形式を標準化するようにタグを変更
 *
 */
//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================
　　var Imported = Imported || {};
　　Imported.MOG_EventSensor = true;
　　var Moghunter = Moghunter || {}; 

  　Moghunter.parameters = PluginManager.parameters('MOG_EventSensor');
    Moghunter.sensor_range_key = String(Moghunter.parameters['Self Switch Key'] || "D");

//=============================================================================
// ** Character Base
//=============================================================================

//==============================
// * Init Members
//==============================
var _alias_mog_evensensor_cbase_initMembers = Game_CharacterBase.prototype.initMembers;
Game_CharacterBase.prototype.initMembers = function() {
    _alias_mog_evensensor_cbase_initMembers.call(this);
	this._sensor_range = [false,0];
};

//=============================================================================
// ** Sprite Character
//=============================================================================

//==============================
// * Initialize
//==============================
var _alias_mog_evensensor_schar_initialize = Sprite_Character.prototype.initialize;
Sprite_Character.prototype.initialize = function(character) {
    _alias_mog_evensensor_schar_initialize.call(this,character);
	if (this._character && this._character._eventId) {this._character.check_event_sensor()};
};

//=============================================================================
// ** Scene Map
//=============================================================================

//==============================
// * Terminate
//==============================
var _alias_mog_evensensor_terminate = Scene_Map.prototype.terminate;
Scene_Map.prototype.terminate = function() {
	_alias_mog_evensensor_terminate.call(this);
    $gameMap.events().forEach(function(event) {
        if (event._sensor_range[0]) {$gameSelfSwitches.setValue(event.sensor_key(),false)};
    }, this);	
};

//=============================================================================
// ** Game Event
//=============================================================================

//==============================
// * Setup Page
//==============================
var _alias_mog_evensensor_gevent_setupPage = Game_Event.prototype.setupPage;
Game_Event.prototype.setupPage = function() {
	_alias_mog_evensensor_gevent_setupPage.call(this);
    this.check_event_sensor();
};

//==============================
// * Check Event Sensor
//==============================
Game_Event.prototype.check_event_sensor = function() {
	if (!this._erased && this.page()) {this.list().forEach(function(l) {
	       if (l.code === 108) {var comment = l.parameters[0].split(' : ');
			   if (comment[0].toLowerCase() == "event sensor"){
                 this._sensor_range = [true,Number(Math.abs(comment[1]))];
				 this._need_clear_sensor = false;			  
			   };
     	   };
	}, this);};
};

//==============================
// * Update
//==============================
var _mog_event_sensor_gev_update = Game_Event.prototype.update;
Game_Event.prototype.update = function() {
	_mog_event_sensor_gev_update.call(this);
	if (this.needUpdateSensor()) {this.update_sensor()};
};

//==============================
// * Need Update Sensor
//==============================
Game_Event.prototype.needUpdateSensor = function() {
	if (!this._sensor_range[0]) {return false};	
	return true;
};

//==============================
// * Sensor Dis
//==============================
Game_Event.prototype.sensor_dis = function() {
  return Math.abs($gamePlayer.x - this.x) + Math.abs($gamePlayer.y - this.y);
};

//==============================
// * Sensor Key
//==============================
Game_Event.prototype.sensor_key = function() {
   return [this._mapId, this._eventId, Moghunter.sensor_range_key];
};

//==============================
// * Update Sensor
//==============================
Game_Event.prototype.update_sensor = function() {
      var enable   = (this.sensor_dis() <=  this._sensor_range[1]);
      var last_enable = $gameSelfSwitches.value(this.sensor_key());
      if (enable != last_enable) {this.sensor_effect(enable)};
};

//==============================
// * Sensor Effect
//==============================
Game_Event.prototype.sensor_effect = function(enable) {
	$gameSelfSwitches.setValue(this.sensor_key(),enable);
};
