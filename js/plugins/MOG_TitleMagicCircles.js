//=============================================================================
// MOG_TitleMagicCircle.js
//=============================================================================
/*:ja
 * @target MZ
 * @plugindesc (v1.1 *) タイトル画面に魔法陣アニメーションを追加します。
 * @author Moghunter
 *
 * @param -> Magic Circle 1 <<<<<<<<<<<<<<<<<<<<<<<
 * @text -> 魔法陣 1 <<<<<<<<<<<<<<<<<<<<<<<
 * @desc
 *
 * @param Circle 1 Visible
 * @text 有効化
 * @desc レイヤーの有効化設定
 * @type boolean
 * @on 有効
 * @off 無効
 * @default true
 * @parent -> Magic Circle 1 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 1 File Name
 * @text ファイル名
 * @desc 画像のファイル名
 * @type file
 * @require 1
 * @dir img/titles2
 * @default MCircle1
 * @parent -> Magic Circle 1 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 1 Z-Index
 * @text Z優先順位
 * @desc レイヤーのZ優先順位
 * @type number
 * @max 9007
 * @default 10
 * @parent -> Magic Circle 1 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 1 X-Axis
 * @text X軸位置
 * @desc 画像のX軸位置(原点:中央)
 * @type number
 * @min -9007
 * @max 9007
 * @default 790
 * @parent -> Magic Circle 1 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 1 Y-Axis
 * @text Y軸位置
 * @desc 画像のY軸位置(原点:中央)
 * @type number
 * @min -9007
 * @max 9007
 * @default 600
 * @parent -> Magic Circle 1 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 1 Rotation
 * @text 回転速度
 * @desc 正:時計回り / 負:反時計回り。絶対値が大きいほど高速。
 * @type number
 * @min -9007
 * @max 9007
 * @decimals 2
 * @default 0.01
 * @parent -> Magic Circle 1 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 1 Blend Mode
 * @text 合成方法
 * @desc 画像の合成方法
 * 0:通常 / 1:加算 / 2:乗算
 * @type select
 * @option 通常
 * @value 0
 * @option 加算
 * @value 1
 * @option 乗算
 * @value 2
 * @default 1
 * @parent -> Magic Circle 1 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 1 Transition Time
 * @text 表示ウェイト
 * @desc 画像表示までのウェイト
 * @type number
 * @max 9007
 * @default 0
 * @parent -> Magic Circle 1 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 1 Pulse Mode
 * @text ズームアニメ指定
 * @desc アニメーションパターンの選択
 * 0:無効 / 1:ズームイン・アウト繰り返し / 2:ズームアウト
 * @type select
 * @option 無効
 * @value 0
 * @option ズームイン・アウトの繰り返し
 * @value 1
 * @option ズームアウト
 * @value 2
 * @default 2
 * @parent -> Magic Circle 1 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param
 *
 * @param -> Magic Circle 2 <<<<<<<<<<<<<<<<<<<<<<<
 * @text -> 魔法陣 2 <<<<<<<<<<<<<<<<<<<<<<<
 * @desc
 *
 * @param Circle 2 Visible
 * @text 有効化
 * @desc レイヤーの有効化設定
 * @type boolean
 * @on 有効
 * @off 無効
 * @default true
 * @parent -> Magic Circle 2 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 2 File Name
 * @text ファイル名
 * @desc 画像のファイル名
 * @type file
 * @require 1
 * @dir img/titles2
 * @default MCircle2
 * @parent -> Magic Circle 2 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 2 Z-Index
 * @text Z優先順位
 * @desc レイヤーのZ優先順位
 * @type number
 * @max 9007
 * @default 11
 * @parent -> Magic Circle 2 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 2 X-Axis
 * @text X軸位置
 * @desc 画像のX軸位置(原点:中央)
 * @type number
 * @min -9007
 * @max 9007
 * @default 790
 * @parent -> Magic Circle 2 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 2 Y-Axis
 * @text Y軸位置
 * @desc 画像のY軸位置(原点:中央)
 * @type number
 * @min -9007
 * @max 9007
 * @default 600
 * @parent -> Magic Circle 2 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 2 Rotation
 * @text 回転速度
 * @desc 正:時計回り / 負:反時計回り。絶対値が大きいほど高速。
 * @type number
 * @min -9007
 * @max 9007
 * @decimals 2
 * @default -0.01
 * @parent -> Magic Circle 2 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 2 Blend Mode
 * @text 合成方法
 * @desc 画像の合成方法
 * 0:通常 / 1:加算 / 2:乗算
 * @type select
 * @option 通常
 * @value 0
 * @option 加算
 * @value 1
 * @option 乗算
 * @value 2
 * @default 0
 * @parent -> Magic Circle 2 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 2 Transition Time
 * @text 表示ウェイト
 * @desc 画像表示までのウェイト
 * @type number
 * @max 9007
 * @default 0
 * @parent -> Magic Circle 2 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 2 Pulse Mode
 * @text ズームアニメ指定
 * @desc アニメーションパターンの選択
 * 0:無効 / 1:ズームイン・アウト繰り返し / 2:ズームアウト
 * @type select
 * @option 無効
 * @value 0
 * @option ズームイン・アウトの繰り返し
 * @value 1
 * @option ズームアウト
 * @value 2
 * @default 0
 * @parent -> Magic Circle 2 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param
 *
 * @param -> Magic Circle 3 <<<<<<<<<<<<<<<<<<<<<<<
 * @text -> 魔法陣 3 <<<<<<<<<<<<<<<<<<<<<<<
 * @desc
 *
 * @param Circle 3 Visible
 * @text 有効化
 * @desc レイヤーの有効化設定
 * @type boolean
 * @on 有効
 * @off 無効
 * @default false
 * @parent -> Magic Circle 3 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 3 File Name
 * @text ファイル名
 * @desc 画像のファイル名
 * @type file
 * @require 1
 * @dir img/titles2
 * @default MCircle3
 * @parent -> Magic Circle 3 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 3 Z-Index
 * @text Z優先順位
 * @desc レイヤーのZ優先順位
 * @type number
 * @max 9007
 * @default 12
 * @parent -> Magic Circle 3 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 3 X-Axis
 * @text X軸位置
 * @desc 画像のX軸位置(原点:中央)
 * @type number
 * @min -9007
 * @max 9007
 * @default 200
 * @parent -> Magic Circle 3 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 3 Y-Axis
 * @text Y軸位置
 * @desc 画像のY軸位置(原点:中央)
 * @type number
 * @min -9007
 * @max 9007
 * @default 200
 * @parent -> Magic Circle 3 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 3 Rotation
 * @text 回転速度
 * @desc 正:時計回り / 負:反時計回り。絶対値が大きいほど高速。
 * @type number
 * @min -9007
 * @max 9007
 * @decimals 2
 * @default 0.01
 * @parent -> Magic Circle 3 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 3 Blend Mode
 * @text 合成方法
 * @desc 画像の合成方法
 * 0:通常 / 1:加算 / 2:乗算
 * @type select
 * @option 通常
 * @value 0
 * @option 加算
 * @value 1
 * @option 乗算
 * @value 2
 * @default 1
 * @parent -> Magic Circle 3 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 3 Transition Time
 * @text 表示ウェイト
 * @desc 画像表示までのウェイト
 * @type number
 * @max 9007
 * @default 0
 * @parent -> Magic Circle 3 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 3 Pulse Mode
 * @text ズームアニメ指定
 * @desc アニメーションパターンの選択
 * 0:無効 / 1:ズームイン・アウト繰り返し / 2:ズームアウト
 * @type select
 * @option 無効
 * @value 0
 * @option ズームイン・アウトの繰り返し
 * @value 1
 * @option ズームアウト
 * @value 2
 * @default 0
 * @parent -> Magic Circle 3 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param
 *
 * @param -> Magic Circle 4 <<<<<<<<<<<<<<<<<<<<<<<
 * @text -> 魔法陣 4 <<<<<<<<<<<<<<<<<<<<<<<
 * @desc
 *
 * @param Circle 4 Visible
 * @text 有効化
 * @desc レイヤーの有効化設定
 * @type boolean
 * @on 有効
 * @off 無効
 * @default false
 * @type boolean
 * @parent -> Magic Circle 4 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 4 File Name
 * @text ファイル名
 * @desc 画像のファイル名
 * @type file
 * @require 1
 * @dir img/titles2
 * @default MCircle4
 * @parent -> Magic Circle 4 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 4 Z-Index
 * @text Z優先順位
 * @desc レイヤーのZ優先順位
 * @type number
 * @max 9007
 * @default 13
 * @parent -> Magic Circle 4 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 4 X-Axis
 * @text X軸位置
 * @desc 画像のX軸位置(原点:中央)
 * @type number
 * @min -9007
 * @max 9007
 * @default 300
 * @parent -> Magic Circle 4 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 4 Y-Axis
 * @text Y軸位置
 * @desc 画像のY軸位置(原点:中央)
 * @type number
 * @min -9007
 * @max 9007
 * @default 300
 * @parent -> Magic Circle 4 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 4 Rotation
 * @text 回転速度
 * @desc 正:時計回り / 負:反時計回り。絶対値が大きいほど高速。
 * @type number
 * @min -9007
 * @max 9007
 * @decimals 2
 * @default 0.01
 * @parent -> Magic Circle 4 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 4 Blend Mode
 * @text 合成方法
 * @desc 画像の合成方法
 * 0:通常 / 1:加算 / 2:乗算
 * @type select
 * @option 通常
 * @value 0
 * @option 加算
 * @value 1
 * @option 乗算
 * @value 2
 * @default 1
 * @parent -> Magic Circle 4 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 4 Transition Time
 * @text 表示ウェイト
 * @desc 画像表示までのウェイト
 * @type number
 * @max 9007
 * @default 0
 * @parent -> Magic Circle 4 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 4 Pulse Mode
 * @text ズームアニメ指定
 * @desc アニメーションパターンの選択
 * 0:無効 / 1:ズームイン・アウト繰り返し / 2:ズームアウト
 * @type select
 * @option 無効
 * @value 0
 * @option ズームイン・アウトの繰り返し
 * @value 1
 * @option ズームアウト
 * @value 2
 * @default 0
 * @parent -> Magic Circle 4 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param
 *
 * @param -> Magic Circle 5 <<<<<<<<<<<<<<<<<<<<<<<
 * @text -> 魔法陣 5 <<<<<<<<<<<<<<<<<<<<<<<
 * @desc
 *
 * @param Circle 5 Visible
 * @text 有効化
 * @desc レイヤーの有効化設定
 * @type boolean
 * @on 有効
 * @off 無効
 * @default false
 * @parent -> Magic Circle 5 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 5 File Name
 * @text ファイル名
 * @desc 画像のファイル名
 * @type file
 * @require 1
 * @dir img/titles2
 * @default MCircle5
 * @parent -> Magic Circle 5 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 5 Z-Index
 * @text Z優先順位
 * @desc レイヤーのZ優先順位
 * @type number
 * @max 9007
 * @default 14
 * @parent -> Magic Circle 5 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 5 X-Axis
 * @text X軸位置
 * @desc 画像のX軸位置(原点:中央)
 * @type number
 * @min -9007
 * @max 9007
 * @default 400
 * @parent -> Magic Circle 5 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 5 Y-Axis
 * @text Y軸位置
 * @desc 画像のY軸位置(原点:中央)
 * @type number
 * @min -9007
 * @max 9007
 * @default 400
 * @parent -> Magic Circle 5 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 5 Rotation
 * @text Y軸位置
 * @text 回転速度
 * @desc 正:時計回り / 負:反時計回り。絶対値が大きいほど高速。
 * @type number
 * @min -9007
 * @max 9007
 * @decimals 2
 * @default 0.01
 * @parent -> Magic Circle 5 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 5 Blend Mode
 * @text 合成方法
 * @desc 画像の合成方法
 * 0:通常 / 1:加算 / 2:乗算
 * @type select
 * @option 通常
 * @value 0
 * @option 加算
 * @value 1
 * @option 乗算
 * @value 2
 * @default 1
 * @parent -> Magic Circle 5 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 5 Transition Time
 * @text 表示ウェイト
 * @desc 画像表示までのウェイト
 * @type number
 * @max 9007
 * @default 0
 * @parent -> Magic Circle 5 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 5 Pulse Mode
 * @text ズームアニメ指定
 * @desc アニメーションパターンの選択
 * 0:無効 / 1:ズームイン・アウト繰り返し / 2:ズームアウト
 * @type select
 * @option 無効
 * @value 0
 * @option ズームイン・アウトの繰り返し
 * @value 1
 * @option ズームアウト
 * @value 2
 * @default 0
 * @parent -> Magic Circle 5 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param
 *
 * @param -> Magic Circle 6 <<<<<<<<<<<<<<<<<<<<<<<
 * @text -> 魔法陣 6 <<<<<<<<<<<<<<<<<<<<<<<
 * @desc
 *
 * @param Circle 6 Visible
 * @text 有効化
 * @desc レイヤーの有効化設定
 * @type boolean
 * @on 有効
 * @off 無効
 * @default false
 * @parent -> Magic Circle 6 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 6 File Name
 * @text ファイル名
 * @desc 画像のファイル名
 * @type file
 * @require 1
 * @dir img/titles2
 * @default MCircle6
 * @parent -> Magic Circle 6 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 6 Z-Index
 * @text Z優先順位
 * @desc レイヤーのZ優先順位
 * @type number
 * @max 9007
 * @default 15
 * @parent -> Magic Circle 6 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 6 X-Axis
 * @text X軸位置
 * @desc 画像のX軸位置(原点:中央)
 * @type number
 * @min -9007
 * @max 9007
 * @default 500
 * @parent -> Magic Circle 6 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 6 Y-Axis
 * @text Y軸位置
 * @desc 画像のY軸位置(原点:中央)
 * @type number
 * @min -9007
 * @max 9007
 * @default 500
 * @parent -> Magic Circle 6 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 6 Rotation
 * @text 回転速度
 * @desc 正:時計回り / 負:反時計回り。絶対値が大きいほど高速。
 * @type number
 * @min -9007
 * @max 9007
 * @decimals 2
 * @default 0.01
 * @parent -> Magic Circle 6 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 6 Blend Mode
 * @text 合成方法
 * @desc 画像の合成方法
 * 0:通常 / 1:加算 / 2:乗算
 * @type select
 * @option 通常
 * @value 0
 * @option 加算
 * @value 1
 * @option 乗算
 * @value 2
 * @default 1
 * @parent -> Magic Circle 6 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 6 Transition Time
 * @text 表示ウェイト
 * @desc 画像表示までのウェイト
 * @type number
 * @max 9007
 * @default 0
 * @parent -> Magic Circle 6 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 6 Pulse Mode
 * @text ズームアニメ指定
 * @desc アニメーションパターンの選択
 * 0:無効 / 1:ズームイン・アウト繰り返し / 2:ズームアウト
 * @type select
 * @option 無効
 * @value 0
 * @option ズームイン・アウトの繰り返し
 * @value 1
 * @option ズームアウト
 * @value 2
 * @default 0
 * @parent -> Magic Circle 6 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param
 *
 * @param -> Magic Circle 7 <<<<<<<<<<<<<<<<<<<<<<<
 * @text -> 魔法陣 7 <<<<<<<<<<<<<<<<<<<<<<<
 * @desc
 *
 * @param Circle 7 Visible
 * @text 有効化
 * @desc レイヤーの有効化設定
 * @type boolean
 * @on 有効
 * @off 無効
 * @default false
 * @parent -> Magic Circle 7 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 7 File Name
 * @text ファイル名
 * @desc 画像のファイル名
 * @type file
 * @require 1
 * @dir img/titles2
 * @default MCircle7
 * @parent -> Magic Circle 7 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 7 Z-Index
 * @desc レイヤーのZ優先順位
 * @text Z優先順位
 * @desc レイヤーのZ優先順位
 * @type number
 * @max 9007
 * @default 16
 * @parent -> Magic Circle 7 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 7 X-Axis
 * @text X軸位置
 * @desc 画像のX軸位置(原点:中央)
 * @type number
 * @min -9007
 * @max 9007
 * @default 550
 * @parent -> Magic Circle 7 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 7 Y-Axis
 * @text Y軸位置
 * @desc 画像のY軸位置(原点:中央)
 * @type number
 * @min -9007
 * @max 9007
 * @default 550
 * @parent -> Magic Circle 7 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 7 Rotation
 * @text 回転速度
 * @desc 正:時計回り / 負:反時計回り。絶対値が大きいほど高速。
 * @type number
 * @min -9007
 * @max 9007
 * @decimals 2
 * @default 0.01
 * @parent -> Magic Circle 7 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 7 Blend Mode
 * @text 合成方法
 * @desc 画像の合成方法
 * 0:通常 / 1:加算 / 2:乗算
 * @type select
 * @option 通常
 * @value 0
 * @option 加算
 * @value 1
 * @option 乗算
 * @value 2
 * @default 1
 * @parent -> Magic Circle 7 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 7 Transition Time
 * @text 表示ウェイト
 * @desc 画像表示までのウェイト
 * @type number
 * @max 9007
 * @default 0
 * @parent -> Magic Circle 7 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 7 Pulse Mode
 * @text ズームアニメ指定
 * @desc アニメーションパターンの選択
 * 0:無効 / 1:ズームイン・アウト繰り返し / 2:ズームアウト
 * @type select
 * @option 無効
 * @value 0
 * @option ズームイン・アウトの繰り返し
 * @value 1
 * @option ズームアウト
 * @value 2
 * @default 0
 * @parent -> Magic Circle 7 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param
 *
 * @param -> Magic Circle 8 <<<<<<<<<<<<<<<<<<<<<<<
 * @text -> 魔法陣 8 <<<<<<<<<<<<<<<<<<<<<<<
 * @desc
 *
 * @param Circle 8 Visible
 * @text 有効化
 * @desc レイヤーの有効化設定
 * @type boolean
 * @on 有効
 * @off 無効
 * @default false
 * @parent -> Magic Circle 8 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 8 File Name
 * @text ファイル名
 * @desc 画像のファイル名
 * @type file
 * @require 1
 * @dir img/titles2
 * @default MCircle8
 * @parent -> Magic Circle 8 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 8 Z-Index
 * @desc レイヤーのZ優先順位
 * @text Z優先順位
 * @desc レイヤーのZ優先順位
 * @type number
 * @max 9007
 * @default 17
 * @parent -> Magic Circle 8 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 8 X-Axis
 * @text X軸位置
 * @desc 画像のX軸位置(原点:中央)
 * @type number
 * @min -9007
 * @max 9007
 * @default 600
 * @parent -> Magic Circle 8 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 8 Y-Axis
 * @text Y軸位置
 * @desc 画像のY軸位置(原点:中央)
 * @type number
 * @min -9007
 * @max 9007
 * @default 600
 * @parent -> Magic Circle 8 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 8 Rotation
 * @text 回転速度
 * @desc 正:時計回り / 負:反時計回り。絶対値が大きいほど高速。
 * @type number
 * @min -9007
 * @max 9007
 * @decimals 2
 * @default 0.01
 * @parent -> Magic Circle 8 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 8 Blend Mode
 * @text 合成方法
 * @desc 画像の合成方法
 * 0:通常 / 1:加算 / 2:乗算
 * @type select
 * @option 通常
 * @value 0
 * @option 加算
 * @value 1
 * @option 乗算
 * @value 2
 * @default 1
 * @parent -> Magic Circle 8 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 8 Transition Time
 * @text 表示ウェイト
 * @desc 画像表示までのウェイト
 * @type number
 * @max 9007
 * @default 0
 * @parent -> Magic Circle 8 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 8 Pulse Mode
 * @text ズームアニメ指定
 * @desc アニメーションパターンの選択
 * 0:無効 / 1:ズームイン・アウト繰り返し / 2:ズームアウト
 * @type select
 * @option 無効
 * @value 0
 * @option ズームイン・アウトの繰り返し
 * @value 1
 * @option ズームアウト
 * @value 2
 * @default 0
 * @parent -> Magic Circle 8 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param
 *
 * @param -> Magic Circle 9 <<<<<<<<<<<<<<<<<<<<<<<
 * @text -> 魔法陣 9 <<<<<<<<<<<<<<<<<<<<<<<
 * @desc
 *
 * @param Circle 9 Visible
 * @text 有効化
 * @desc レイヤーの有効化設定
 * @type boolean
 * @on 有効
 * @off 無効
 * @default false
 * @parent -> Magic Circle 9 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 9 File Name
 * @text ファイル名
 * @desc 画像のファイル名
 * @type file
 * @require 1
 * @dir img/titles2
 * @default MCircle9
 * @parent -> Magic Circle 9 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 9 Z-Index
 * @desc レイヤーのZ優先順位
 * @text Z優先順位
 * @desc レイヤーのZ優先順位
 * @type number
 * @max 9007
 * @default 18
 * @parent -> Magic Circle 9 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 9 X-Axis
 * @text X軸位置
 * @desc 画像のX軸位置(原点:中央)
 * @type number
 * @min -9007
 * @max 9007
 * @default 620
 * @parent -> Magic Circle 9 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 9 Y-Axis
 * @text Y軸位置
 * @desc 画像のY軸位置(原点:中央)
 * @type number
 * @min -9007
 * @max 9007
 * @default 620
 * @parent -> Magic Circle 9 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 9 Rotation
 * @text 回転速度
 * @desc 正:時計回り / 負:反時計回り。絶対値が大きいほど高速。
 * @type number
 * @min -9007
 * @max 9007
 * @decimals 2
 * @default 0.01
 * @parent -> Magic Circle 9 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 9 Blend Mode
 * @text 合成方法
 * @desc 画像の合成方法
 * 0:通常 / 1:加算 / 2:乗算
 * @type select
 * @option 通常
 * @value 0
 * @option 加算
 * @value 1
 * @option 乗算
 * @value 2
 * @default 1
 * @parent -> Magic Circle 9 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 9 Transition Time
 * @text 表示ウェイト
 * @desc 画像表示までのウェイト
 * @type number
 * @max 9007
 * @default 0
 * @parent -> Magic Circle 9 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 9 Pulse Mode
 * @text ズームアニメ指定
 * @desc アニメーションパターンの選択
 * 0:無効 / 1:ズームイン・アウト繰り返し / 2:ズームアウト
 * @type select
 * @option 無効
 * @value 0
 * @option ズームイン・アウトの繰り返し
 * @value 1
 * @option ズームアウト
 * @value 2
 * @default 0
 * @parent -> Magic Circle 9 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param
 *
 * @param -> Magic Circle 10 <<<<<<<<<<<<<<<<<<<<<<<
 * @text -> 魔法陣 10 <<<<<<<<<<<<<<<<<<<<<<<
 * @desc
 *
 * @param Circle 10 Visible
 * @text 有効化
 * @desc レイヤーの有効化設定
 * @type boolean
 * @on 有効
 * @off 無効
 * @default false
 * @type boolean
 * @parent -> Magic Circle 10 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 10 File Name
 * @text ファイル名
 * @desc 画像のファイル名
 * @type file
 * @require 1
 * @dir img/titles2
 * @default MCircle10
 * @parent -> Magic Circle 10 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 10 Z-Index
 * @desc レイヤーのZ優先順位
 * @text Z優先順位
 * @desc レイヤーのZ優先順位
 * @type number
 * @max 9007
 * @default 19
 * @parent -> Magic Circle 10 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 10 X-Axis
 * @text X軸位置
 * @desc 画像のX軸位置(原点:中央)
 * @type number
 * @min -9007
 * @max 9007
 * @default 650
 * @parent -> Magic Circle 10 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 10 Y-Axis
 * @text Y軸位置
 * @desc 画像のY軸位置(原点:中央)
 * @type number
 * @min -9007
 * @max 9007
 * @default 600
 * @parent -> Magic Circle 10 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 10 Rotation
 * @text 回転速度
 * @desc 正:時計回り / 負:反時計回り。絶対値が大きいほど高速。
 * @type number
 * @min -9007
 * @max 9007
 * @decimals 2
 * @default 0.01
 * @parent -> Magic Circle 10 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 10 Blend Mode
 * @text 合成方法
 * @desc 画像の合成方法
 * 0:通常 / 1:加算 / 2:乗算
 * @type select
 * @option 通常
 * @value 0
 * @option 加算
 * @value 1
 * @option 乗算
 * @value 2
 * @default 1
 * @parent -> Magic Circle 10 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 10 Transition Time
 * @text 表示ウェイト
 * @desc 画像表示までのウェイト
 * @type number
 * @max 9007
 * @default 0
 * @parent -> Magic Circle 10 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @param Circle 10 Pulse Mode
 * @text ズームアニメ指定
 * @desc アニメーションパターンの選択
 * 0:無効 / 1:ズームイン・アウト繰り返し / 2:ズームアウト
 * @type select
 * @option 無効
 * @value 0
 * @option ズームイン・アウトの繰り返し
 * @value 1
 * @option ズームアウト
 * @value 2
 * @default 0
 * @parent -> Magic Circle 10 <<<<<<<<<<<<<<<<<<<<<<<
 *
 * @help
 * 翻訳:ムノクラ
 * https://fungamemake.com/
 * https://twitter.com/munokura/
 *
 * ===========================================================================
 * +++ MOG - Title Magic Circles (v1.0) +++
 * By Moghunter
 * https://atelierrgss.wordpress.com/
 * ===========================================================================
 * タイトル画面に魔法陣アニメーションを追加します。
 *
 * 下記フォルダに画像を保存してください。
 *
 * img/titles2/
 *
 * ===========================================================================
 * - WHAT'S  NEW (version 1.1)
 * ===========================================================================
 * - (NEW) - RM1.5 +と互換性のあるプラグインパラメータ
 */
//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================
    var Imported = Imported || {};
    Imported.MOG_TitleMagicCircles = true;
　　var Moghunter = Moghunter || {}; 

  　Moghunter.parameters = PluginManager.parameters('MOG_TitleMagicCircles');
    Moghunter.titleMcircles_M = 10
	Moghunter.titleMcircles_V = [];	Moghunter.titleMcircles_N = [];
	Moghunter.titleMcircles_X = [];	Moghunter.titleMcircles_Y = [];
	Moghunter.titleMcircles_R = [];	Moghunter.titleMcircles_T = [];
	Moghunter.titleMcircles_P = []; Moghunter.titleMcircles_Z = [];
	Moghunter.titleMcircles_B = [];
	for (var i = 0; i < Moghunter.titleMcircles_M; i++) {
		Moghunter.titleMcircles_V[i] = String(Moghunter.parameters['Circle ' + String(i + 1) + " Visible"] || "true");
		Moghunter.titleMcircles_N[i] = String(Moghunter.parameters['Circle ' + String(i + 1) + " File Name"] || "Magic_Circle"); 
		Moghunter.titleMcircles_X[i] = Number(Moghunter.parameters['Circle ' + String(i + 1) + " X-Axis"] || 0); 
		Moghunter.titleMcircles_Y[i] = Number(Moghunter.parameters['Circle ' + String(i + 1) + " Y-Axis"] || 0);
		Moghunter.titleMcircles_Z[i] = Number(Moghunter.parameters['Circle ' + String(i + 1) + " Z-Index"] || 10); 
		Moghunter.titleMcircles_R[i] = Number(Moghunter.parameters['Circle ' + String(i + 1) + " Rotation"] || 0.01);
		Moghunter.titleMcircles_T[i] = Number(Moghunter.parameters['Circle ' + String(i + 1) + " Transition Time"] || 60);
		Moghunter.titleMcircles_P[i] = Number(Moghunter.parameters['Circle ' + String(i + 1) + " Pulse Mode"] || 0);
		Moghunter.titleMcircles_B[i] = Number(Moghunter.parameters['Circle ' + String(i + 1) + " Blend Mode"] || 1);
	};	
	
//=============================================================================
// ■ Scene Title  ■ 
//=============================================================================	
		
//==============================
// ♦ ALIAS ♦  Create
//==============================
var _mog_mcirclestitles_create = Scene_Title.prototype.create;
Scene_Title.prototype.create = function() {
	_mog_mcirclestitles_create.call(this);
	if (this._titleField2) {this._titleField2.children.sort((a, b) => a.z - b.z)}
};	
		
//==============================
// ♦ ALIAS ♦  Create Foreground
//==============================
var _mog_mcirclestitles_createForeground = Scene_Title.prototype.createForeground;
Scene_Title.prototype.createForeground = function() {
	if (!this._titleField2) {this.createTitleField2()};
	this.createMcircles();
	_mog_mcirclestitles_createForeground.call(this);
};		
		
//==============================
// * Create Title Field 2
//==============================
Scene_Title.prototype.createTitleField2 = function() {
    this._titleField2 = new Sprite();
	this._titleField2.z = 100;
    this.addChild(this._titleField2);
};
    
//==============================
// * Create M Circles
//==============================
Scene_Title.prototype.createMcircles = function() {
	this._mcircles = [];	
    for (var i = 0; i < Moghunter.titleMcircles_M; i++) {
        this._mcircles[i] = new TitleMCircles(i);
	    this._mcircles[i].zIndex = Moghunter.titleMcircles_Z[i];
	    this._titleField2.addChild(this._mcircles[i]);
    };
};
  
//=============================================================================
// ■ Title Magic Circle  ■ 
//=============================================================================
function TitleMCircles() {
    this.initialize.apply(this, arguments);
};

TitleMCircles.prototype = Object.create(Sprite.prototype);
TitleMCircles.prototype.constructor = TitleMCircles;

//==============================
// * Initialize
//==============================
TitleMCircles.prototype.initialize = function(index) {
    Sprite.prototype.initialize.call(this);
	this._index = index;
	this._enabled = String(Moghunter.titleMcircles_V[this._index]) == "true" ? true : false;
    if (this._enabled) {this.create_mcircles()};
};
  
//==============================
// * Create M circles
//==============================
TitleMCircles.prototype.create_mcircles = function() {	
	this.bitmap = ImageManager.loadTitle2(String(Moghunter.titleMcircles_N[this._index]));
	this.anchor.x = 0.5;
	this.anchor.y = 0.5;
	var fx = (Graphics.width - 816) / 2; 
	var fy = (Graphics.height - 624) / 2;		
	this.x = Number(Moghunter.titleMcircles_X[this._index]) + fx;
	this.y = Number(Moghunter.titleMcircles_Y[this._index]) + fy;
	this.r = Number(Moghunter.titleMcircles_R[this._index]);
	this.t = Number(Moghunter.titleMcircles_T[this._index]);
	this.p = [Number(Moghunter.titleMcircles_P[this._index]),0,0];
	this.blendMode = Number(Moghunter.titleMcircles_B[this._index]);
	this.opacity = this.t > 0 && this.p[0] < 2? 0 : 255;
};  

//==============================
// * Update Mcircle Pulse 
//==============================
TitleMCircles.prototype.updateMcirclePulse = function() {
	if (this.p[0] === 1) {
	    this.updateMcirclePulseM1();
	} else {0
	    this.updateMcirclePulseM2();
	};
	this.scale.y = this.scale.x;
};
  
//==============================
// * Update Mcircle Pulse M1
//==============================
TitleMCircles.prototype.updateMcirclePulseM1 = function() {
	this.p[1]++;
	if (this.p[1] < 90) { 
	    this.scale.x += 0.002;
	} else if (this.p[1] < 180) {
		this.scale.x -= 0.002;
	} else {
		this.p[1] = 0;
		this.scale.x = 1.00;
	};	
};   
  
//==============================
// * Update Mcircle Pulse M2
//==============================
TitleMCircles.prototype.updateMcirclePulseM2 = function() {
	this.scale.x += 0.003;
	if (this.p[1] === 0) {
		this.opacity += 4;
		if (this.opacity >= 255) {this.p[1] = 1};
	} else {
	    this.opacity -= 2;
	};
    if (this.opacity <= 0) {
		this.p[1] = 0;
		this.scale.x = 1.00;
		this.opacity = 0;	
	};
};     
  
//==============================
// * Update M Circles
//==============================
TitleMCircles.prototype.update_magic_circle = function() {
	this.rotation += this.r;
	if (this.p[0] < 2) {this.opacity += 2};
	if (this.p[0] > 0) {this.updateMcirclePulse()};
};    
  
//==============================
// * Update
//==============================
TitleMCircles.prototype.update = function() {
    Sprite.prototype.update.call(this);
	if (this._enabled) {this.update_magic_circle()};
};