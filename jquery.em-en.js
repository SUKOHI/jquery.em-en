;(function($) {

    var MNConverter = {

        toM: function(text){

            emText = text.replace(/[A-Za-z0-9]/g, function(s){

                return String.fromCharCode(s.charCodeAt(0) + 0xFEE0);

            });

            if(MNConverter.checkReplacementCount()) {

                $(MNConverter.replacements.en).each(function(index, target){

                    var regex = new RegExp('['+ target +']', 'g');
                    console.log(target);
                    var replacement = MNConverter.replacements.em[index];
                    emText = emText.replace(regex, replacement);

                });

            }

            return emText;

        },
        toN: function(text){

            var enText = text.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function(s){

                return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);

            });

            if(MNConverter.checkReplacementCount()) {

                $(MNConverter.replacements.em).each(function(index, target){

                    var regex = new RegExp('['+ target +']', 'g');
                    var replacement = MNConverter.replacements.en[index];
                    enText = enText.replace(regex, replacement);

                });

            }

            return enText;


        },
        checkReplacementCount: function(){

            if(typeof(MNConverter.replacements.em) != 'object'
                    || typeof(MNConverter.replacements.en) != 'object') {

                return false;

            }

            return (MNConverter.replacements.em.length == MNConverter.replacements.en.length);

        },
        replacements: {}

    };

    jQuery.toEm = function(text) {

        return MNConverter.toM(text);

    }

    jQuery.toEn = function(text) {

        return MNConverter.toN(text);

    }

    jQuery.setEmEnReplacements = function(replacements) {

        MNConverter.replacements = replacements;

    }

    $.fn.emVal = function() {

        var text = $(this).val();
        return MNConverter.toM(text);

    }

    $.fn.enVal = function() {

        var text = $(this).val();
        return MNConverter.toN(text);

    }

    $.fn.autoEm = function(callback) {

        $(this).on('keyup', function(e){

            var text = $(this).val();
            var emText = MNConverter.toM(text);
            $(this).val(emText);

            if(typeof(callback) == 'function') {

                callback(e, emText);

            }

        });

    }

    $.fn.autoEn = function(callback) {

        $(this).on('keyup', function(e){

            var text = $(this).val();
            var enText = MNConverter.toN(text);
            $(this).val(enText);

            if(typeof(callback) == 'function') {

                callback(e, enText);

            }

        });

    }

})(jQuery);