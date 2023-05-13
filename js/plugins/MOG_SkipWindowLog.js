//=============================================================================
// MOG_SkipWindowLog.js
//=============================================================================

/*:ja
 * @target MZ
 * @plugindesc (v1.2) 戦闘ログウィンドウを非表示にします。
 * @author Moghunter
 *
 * @param Lag Time
 * @text 行動後のタイムアウト時間
 * @type number
 * @max 9007
 * @default 10
 *
 * @param Display Start Message
 * @text 戦闘開始メッセージの表示
 * @type boolean
 * @on 表示
 * @off 非表示
 * @default false
 *
 * @param Display Preemptive Message
 * @text 先制攻撃メッセージの表示
 * @type boolean
 * @on 表示
 * @off 非表示
 * @default true
 *
 * @help
 * 翻訳:ムノクラ
 * https://fungamemake.com/
 * https://twitter.com/munokura/
 *
 * ===========================================================================
 * +++ MOG - Skip Window Log (v1.2) +++
 * By Moghunter
 * https://atelierrgss.wordpress.com/
 * ===========================================================================
 * 戦闘ログウィンドウを非表示にします。
 *
 * ===========================================================================
 * 更新履歴
 * ===========================================================================
 * v1.2 - 戦闘開始メッセージを無効にするオプション追加
 * v1.1 - MOG Flash Damageとの互換性
 *
 */
//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================
　　var Imported = Imported || {};
　　Imported.MOG_SkipWindowLog = true;
　　var Moghunter = Moghunter || {}; 

  　Moghunter.parameters = PluginManager.parameters('MOG_SkipWindowLog');
    Moghunter.winLogSpeed = Number(Moghunter.parameters['Lag Time'] || 10);
	Moghunter.battleStartMessage = String(Moghunter.parameters['Display Start Message'] || "false");
	Moghunter.battlePreemptiveMessage = String(Moghunter.parameters['Display Preemptive Message'] || "true");
	
//=============================================================================
// ■■■ Window BattleLog ■■■
//=============================================================================

//==============================
// ♦ OVERWRITE ♦ Refresh 
//==============================
Window_BattleLog.prototype.refresh = function() {
   this.visible = false;
};

//==============================
// ♦ OVERWRITE ♦ Message Speed
//==============================
Window_BattleLog.prototype.messageSpeed = function() {
	if (Imported.MOG_FlashDamage) {if ($gameTemp._flashDamage) {return 0}};
    return Moghunter.winLogSpeed;
};


//=============================================================================
// ■■■ Battle Manager ■■■
//=============================================================================

//==============================
// ♦ OVERWRITE ♦ Refresh 
//==============================
BattleManager.displayStartMessages = function() {
    if (String(Moghunter.battleStartMessage) === "true") {
		for (const name of $gameTroop.enemyNames()) {
			$gameMessage.add(TextManager.emerge.format(name));
		}
	};
	if (String(Moghunter.battlePreemptiveMessage) === "true") {
		if (this._preemptive) {
			$gameMessage.add(TextManager.preemptive.format($gameParty.name()));
		} else if (this._surprise) {
			$gameMessage.add(TextManager.surprise.format($gameParty.name()));
		}
	};
};