(function (global) {
    "use strict";

    var local = true;

    var $;

    // -----------------------------------------
    // ------      Select NYT4/NYT5       ------

    function isNyt5() {
        var nyt5meta = document.getElementsByName('sourceApp');
        var nytApps = { 'nyt-v5': true, 'blogs': true };
        return (typeof nyt5meta[0] !== "undefined") && (nyt5meta[0].getAttribute('content') in nytApps);
    }

    if (isNyt5()) {
        require(['foundation/main'], function () {
            $ = require('jquery/nyt');
            run($);
        });
    } else {
        $ = window.NYTD && window.NYTD.jQuery || window.jQuery;
        run($);
    }


    var growlData = {
        mc2: {
            ctaURL: "https://myaccount.nytimes.com/auth/login?campaignId=",
            ctaClass: "link_growl registration-modal-trigger link-growl-register",
            copy: 'Register now to save, comment and share on NYTimes.com.',
            button: 'Sign Up'
        },

        checkmarkIcon: '<svg class="checkmark_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 26.5"><path class="checkmark_icon_st0" d="M8.7 17.5l2.5-2.6"/><path class="checkmark_icon_st1" d="M11.2 20L21.5 9.7"/></svg>',
        textMapping: {
            "1": {
                copy: "ARTICLES REMAINING",
                number: 9
            },
            "2": {
                copy: "ARTICLES REMAINING",
                number: 8
            },
            "3": {
                copy: "ARTICLES REMAINING",
                number: 7
            },
            "4": {
                copy: "ARTICLES REMAINING",
                number: 6
            },
            "5": {
                copy: "ARTICLES REMAINING",
                number: 5
            },
            "6": {
                copy: "ARTICLES REMAINING",
                number: 4
            },
            "7": {
                copy: "ARTICLES REMAINING",
                number: 3
            },
            "8": {
                copy: "ARTICLES REMAINING",
                number: 2
            },
            "9": {
                copy: "ARTICLE REMAINING",
                number: 1
            },
            "10": {
                copy: "ARTICLES REMAINING",
                number: 0
            }
        },
        // campaign ids are from the meter 2.0 AB test, variation 2. See: https://confluence.nyt.net/x/IY4iAw
        campaignId: {

            '1': [{
                selector: '#cta-link-collapsed, .cta-smallScrn',
                code: '6KY7W'
            }],
            '2': [{
                selector: '#cta-link-collapsed, .cta-smallScrn',
                code: '6KY7Y'
            }],
            '3': [{
                selector: '#cta-link-collapsed, .cta-smallScrn',
                code: '6KY86'
            }],
            '4': [{
                selector: '#cta-link-collapsed, .cta-smallScrn',
                code: '6KY88'
            }],
            '5': [{
                selector: '#cta-link-collapsed, .cta-smallScrn',
                code: '6KY8F'
            }, {
                selector: '#cta-link-expanded, .cta-smallScrn',
                code: '6KY8J'
            }],
            '6': [{
                selector: '#cta-link-collapsed, .cta-smallScrn',
                code: '6KY66'
            }],
            '7': [{
                selector: '#cta-link-collapsed, .cta-smallScrn',
                code: '6KY8L'
            }],
            '8': [{
                selector: '#cta-link-collapsed, .cta-smallScrn',
                code: '6KY8R'
            }],
            '9': [{
                selector: '#cta-link-collapsed, .cta-smallScrn',
                code: '6KY8W'
            }],
            '10': [{
                selector: '#cta-link-collapsed, .cta-smallScrn',
                code: '6KY96'
            }, {
                selector: '#cta-link-expanded, .cta-smallScrn',
                code: '6KY98'
            }]

        }
    };

    function run($) {

        // --new - Optimizely targeting meter~208123
        var meterCount, meterGrowlcontainer, userLoggedIn, userInfo;

        if (window.NYToptly) {

            meterCount = window.NYToptly.audience("meter_views");
            meterGrowlcontainer = $('#Growl_optly');
            userInfo = window.NYToptly.userInfo;

            // --new - detecting if user is logged in

            if (userInfo.regi_id === 0) {
                userLoggedIn = false;
            }
            else {
                userLoggedIn = true;
                $('html').addClass('user-logged-in');
            }

            //

        }
        else {

            meterGrowlcontainer = $('.mtr-growl-container');
            meterCount = meterGrowlcontainer.data('count');
            userLoggedIn = meterGrowlcontainer.data('loggedIn');

        }

        var textMapping = growlData.textMapping[meterCount];
        var campaignIdData = growlData.campaignId[meterCount];
        var container = $('.meter-asset-wrapper');

        var growlState = 'true';
        var preserveCollapseGrowl = false;
        var storageTestKey = 'test';
        var storage = window.sessionStorage;

        try {
            growlState = localStorage.getItem('growlState');
        } catch (e) {
            if (e.code === DOMException.QUOTA_EXCEEDED_ERR && storage.length === 0) {
                console.log('Prived mode detected');
            }
        }

        //051517 fixed function to place campaignId in proper place in URL~208123
        var appendToHref = function (codes) {
            var i;
            var links = document.querySelectorAll('#Growl_optly a');

            var updateLink = function () {
                this.href = this.href.replace("campaignId=", "campaignId=" + codes[i].code);
            };
            if (typeof codes !== 'object' || typeof codes.length === 'undefined') {
                throw new Error('Parameter should be an array');
            }
            for (i = 0; i < codes.length; i++) {
                $(codes[i].selector).each(updateLink);
            }
        };


        if (meterCount === 2 && userLoggedIn === true) {
            console.log('User is logged-in no need to show sign up growl');
            meterGrowlcontainer.hide();
        }



        function toggleBug() {
            var remArts = $('.rem-arts-small-container');
            var remArtsWidth = 'width: ' + remArts.outerWidth() + 'px';

            remArts.attr('style', remArtsWidth);

            $('.tagline-small-container, .cta-login-small-container').fadeToggle(200);

            container
                .toggleClass("growl_open growl_closed")
                .one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
                    function(e) {
                        remArts.removeAttr('style');


                        try {
                            localStorage.setItem('growlState', $('.tagline-offer-text').is(':visible'));
                        } catch (ev) {
                            if (ev.code === DOMException.QUOTA_EXCEEDED_ERR && storage.length === 0) {
                                console.log('Prived mode detected');
                            }
                        }
                    });
        }



        if (growlState === 'false' && meterCount !== 5 && meterCount < 10) {
            preserveCollapseGrowl = true;

            $('.tagline-small-container, .cta-login-small-container').attr('style', 'visibility:hidden;');
            container.addClass('notransition');
            toggleBug();

            // two references:
            // https://stackoverflow.com/questions/11131875/what-is-the-cleanest-way-to-disable-css-transition-effects-temporarily/16575811#16575811
            // https://onezeronull.com/2016/10/06/disable-css-transitions-and-animations-temporarily-or-permanently/
            // the line below flushes the JS cache of the styling changes
            container[0].offsetHeight; // jshint ignore:line
            container.removeClass('notransition');

            $('.tagline-small-container, .cta-login-small-container').removeAttr('style');
        }



        var controlScroll = function (expand) {
            var scrolled = false;
            var hitBottom = false;

            var assetWrapper = $('.meter-asset-wrapper');
            var smallAsset = $('.meter-asset-small');
            var mediumAsset = $('.meter-asset-medium');
            var mediumAssetInner1 = $('.cta-callout-medium-section--inner');
            var mediumAssetInner2 = $('.cta-connect-medium-section--inner');

            function showSmall() {
                assetWrapper.fadeIn(200);

                mediumAssetInner1.removeClass('show-medium-inner');
                mediumAssetInner2.removeClass('show-medium-inner');
                assetWrapper.removeClass('getMedium');
                mediumAsset.removeClass('show-medium');
                mediumAsset.addClass('hide-medium');
                smallAsset.removeClass('hide-small');
                smallAsset.addClass('show-small');
            }

            function showMedium() {
                assetWrapper.show();

                smallAsset.removeClass('show-small');
                smallAsset.addClass('hide-small');
                assetWrapper.addClass('getMedium');
                mediumAsset.removeClass('hide-medium');
                mediumAsset.addClass('show-medium');
                mediumAssetInner1.addClass('show-medium-inner');
                mediumAssetInner2.addClass('show-medium-inner');
            }

            function shownone () {
                assetWrapper.fadeOut(200);
            }




            $('.closeAsset').on('click', function() {
                showSmall();
            });

            $(window).scroll(function () {

                if ($(window).scrollTop() > 0 && scrolled === false) {
                    if (expand === true) {

                        scrolled = true;
                        showMedium();
                    } else {
                        scrolled = true;
                        showSmall();
                    }
                } else if ($(window).scrollTop() === 0 || ($(window).scrollTop() + $(window).height() < $('#site-index').offset().top && hitBottom === true)) {
                    // scrolled = false;
                    hitBottom = false;
                    showSmall();

                } else if ($(window).scrollTop() + $(window).height() > $('#site-index').offset().top) {
                    hitBottom = true;
                    shownone();
                }
            });
        };



        $('#growl_bug').click(function() {
            toggleBug();

            if (preserveCollapseGrowl === true) {
                preserveCollapseGrowl = false;
            } else {
                preserveCollapseGrowl = true;
            }

        });

        if (textMapping) {
            $('.articles-remain-count').html(textMapping.number);
            $('.articles-remain-copy').html(textMapping.copy);

            $('.smallMeterCount-remain-count').html(textMapping.number);
            $('.smallMeterCount-remain-copy').html(textMapping.copy);

        }

        var expandGrowl = false;


        if (meterCount === 2) {
            $('.tagline-offer-text').html(growlData.mc2.copy);
            $('.tagline-offer-text-smallScrn').html(growlData.mc2.copy);
            $('.cta-btn').html(growlData.mc2.button);
            $('.cta-smallScrn').html(growlData.mc2.button);
            $('#cta-link-collapsed').attr('href', growlData.mc2.ctaURL).addClass(growlData.mc2.ctaClass);
            $('.cta-smallScrn').attr('href', growlData.mc2.ctaURL).addClass(growlData.mc2.ctaClass);
        }

        if (meterCount === 5) {
            container.addClass('meter-5');
            expandGrowl = true;
        }

        if (meterCount > 9) {
            container.addClass('meter-10');
            expandGrowl = true;
        }

        controlScroll(expandGrowl);

        appendToHref(campaignIdData);

        container.animate({bottom: "0"}, 750);
    }

})(window);

