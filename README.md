# jquery.em-en
A jQuery plugin to convert EM and EN text.  （[日本語の説明](#japanese)）

Requirements
====

* [jQuery](https://jquery.com/)

Installation
=====
Using bower is the simplest way.

    bower install jquery.em-en --save-dev

Preparation
====

Load jQuery and this package.

    <script src="YOUR_PATH/jquery.min.js"></script>
    <script src="YOUR_PATH/jquery.em-en.js"></script>

Usage<a name="usage"></a>
====

**Text**

    var enText = $.toEn('５５５ＭＭＭ');
    var emText = $.toEm('555MMM');
    
**Selector**

    var enText = $('#em_text').enVal();
    var emText = $('#en_text').emVal();
    
**Convert automatically**

    $('#em_text').autoEn();
    $('#en_text').autoEm();
    
**with Callback**

    $('#em_text').autoEn(function(e, enText){

        alert(enText);

    });
    $('#en_text').autoEm(function(e, emText){

        alert(emText);

    });

**Set Additional Replacements**

    $.setEmEnReplacements({
    
        em: ['ー', '＠'],
        en: ['-', '@']
    
    });

License
====

This package is licensed under the MIT License.

Copyright 2015 Sukohi Kuhoh


<a name="japanese"></a>

# jquery.em-en
全角／半角を変換する jQuery プラグイン。

要件
====

* [jQuery](https://jquery.com/)

インストール
=====
bowerコマンドを使えば簡単にインストールできます。

    bower install jquery.em-en --save-dev
    
準備
====

jQuery と このパッケージを読み込む

    <script src="YOUR_PATH/jquery.min.js"></script>
    <script src="YOUR_PATH/jquery.em-en.js"></script>
    
使い方
====

**テキスト**

    var enText = $.toEn('５５５ＭＭＭ');
    var emText = $.toEm('555MMM');
    
**セレクタ**

    var enText = $('#em_text').enVal();
    var emText = $('#en_text').emVal();
    
**自動変換**

    $('#em_text').autoEn();
    $('#en_text').autoEm();
    
**自動変換後のコールバック**

    $('#em_text').autoEn(function(e, enText){

        alert(enText);

    });
    $('#en_text').autoEm(function(e, emText){

        alert(emText);

    });

**追加の置換文字**

    $.setEmEnReplacements({
    
        em: ['ー', '＠'],     // 全角
        en: ['-', '@']      // 半角
    
    });

ライセンス
====

MITライセンスにて配布されています。

Copyright 2015 Sukohi Kuhoh