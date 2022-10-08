(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[c[0x0]] = c;
    return '';
}
function regTextVar(a, b) {
    var c = ![];
    b = b['toLowerCase']();
    var d = function () {
        var m = this['get']('data');
        m['updateText'](m['translateObjs'][a]);
    };
    var e = function (m) {
        var n = m['data']['nextSelectedIndex'];
        if (n >= 0x0) {
            var o = m['source']['get']('items')[n];
            var p = function () {
                o['unbind']('start', p, this);
                d['call'](this);
            };
            o['bind']('start', p, this);
        } else
            d['call'](this);
    };
    var f = function (m) {
        return function (n) {
            if (m in n) {
                d['call'](this);
            }
        }['bind'](this);
    };
    var g = function (m, n) {
        return function (o, p) {
            if (m == o && n in p) {
                d['call'](this);
            }
        }['bind'](this);
    };
    var h = function (m, n, o) {
        for (var p = 0x0; p < m['length']; ++p) {
            var q = m[p];
            var r = q['get']('selectedIndex');
            if (r >= 0x0) {
                var s = n['split']('.');
                var t = q['get']('items')[r];
                if (o !== undefined && !o['call'](this, t))
                    continue;
                for (var u = 0x0; u < s['length']; ++u) {
                    if (t == undefined)
                        return '';
                    t = 'get' in t ? t['get'](s[u]) : t[s[u]];
                }
                return t;
            }
        }
        return '';
    };
    var i = function (m) {
        var n = m['get']('player');
        return n !== undefined && n['get']('viewerArea') == this['getMainViewer']();
    };
    switch (b) {
    case 'title':
    case 'subtitle':
        var k = function () {
            switch (b) {
            case 'title':
                return 'media.label';
            case 'subtitle':
                return 'media.data.subtitle';
            }
        }();
        if (k) {
            return function () {
                var m = this['_getPlayListsWithViewer'](this['getMainViewer']());
                if (!c) {
                    for (var n = 0x0; n < m['length']; ++n) {
                        m[n]['bind']('changing', e, this);
                    }
                    c = !![];
                }
                return h['call'](this, m, k, i);
            };
        }
        break;
    default:
        if (b['startsWith']('quiz.') && 'Quiz' in TDV) {
            var l = undefined;
            var k = function () {
                switch (b) {
                case 'quiz.questions.answered':
                    return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                case 'quiz.question.count':
                    return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                case 'quiz.items.found':
                    return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                case 'quiz.item.count':
                    return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                case 'quiz.score':
                    return TDV['Quiz']['PROPERTY']['SCORE'];
                case 'quiz.score.total':
                    return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                case 'quiz.time.remaining':
                    return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                case 'quiz.time.elapsed':
                    return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                case 'quiz.time.limit':
                    return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                case 'quiz.media.items.found':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                case 'quiz.media.item.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                case 'quiz.media.questions.answered':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                case 'quiz.media.question.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                case 'quiz.media.score':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                case 'quiz.media.score.total':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                case 'quiz.media.index':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                case 'quiz.media.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                case 'quiz.media.visited':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                default:
                    var m = /quiz\.([\w_]+)\.(.+)/['exec'](b);
                    if (m) {
                        l = m[0x1];
                        switch ('quiz.' + m[0x2]) {
                        case 'quiz.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                        case 'quiz.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                        case 'quiz.media.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                        case 'quiz.media.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                        case 'quiz.media.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                        case 'quiz.media.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                        case 'quiz.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                        case 'quiz.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                        case 'quiz.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                        case 'quiz.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                        case 'quiz.media.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                        case 'quiz.media.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                        }
                    }
                }
            }();
            if (k) {
                return function () {
                    var m = this['get']('data')['quiz'];
                    if (m) {
                        if (!c) {
                            if (l != undefined)
                                if (l == 'global') {
                                    var o = this['get']('data')['quizConfig'];
                                    var q = o['objectives'];
                                    for (var s = 0x0, u = q['length']; s < u; ++s) {
                                        m['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], g['call'](this, q[s]['id'], k), this);
                                    }
                                } else {
                                    m['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], g['call'](this, l, k), this);
                                }
                            else
                                m['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], f['call'](this, k), this);
                            c = !![];
                        }
                        try {
                            var v = 0x0;
                            if (l != undefined) {
                                if (l == 'global') {
                                    var o = this['get']('data')['quizConfig'];
                                    var q = o['objectives'];
                                    for (var s = 0x0, u = q['length']; s < u; ++s) {
                                        v += m['getObjective'](q[s]['id'], k);
                                    }
                                } else {
                                    v = m['getObjective'](l, k);
                                }
                            } else {
                                v = m['get'](k);
                                if (k == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                    v += 0x1;
                            }
                            return v;
                        } catch (w) {
                            return undefined;
                        }
                    }
                };
            }
        }
        break;
    }
    return '';
}
function createQuizConfig(player, a) {
    var b = {};
    b['player'] = player;
    b['playList'] = a;
    function c(f) {
        for (var g = 0x0; g < f['length']; ++g) {
            var h = f[g];
            if ('id' in h)
                player[h['id']] = h;
        }
    }
    if (b['questions']) {
        c(b['questions']);
        for (var d = 0x0; d < b['questions']['length']; ++d) {
            var e = b['questions'][d];
            c(e['options']);
        }
    }
    if (b['objectives']) {
        c(b['objectives']);
    }
    if (b['califications']) {
        c(b['califications']);
    }
    if (b['score']) {
        player[b['score']['id']] = b['score'];
    }
    if (b['question']) {
        player[b['question']['id']] = b['question'];
    }
    if (b['timeout']) {
        player[b['timeout']['id']] = b['timeout'];
    }
    player['get']('data')['translateObjs'] = translateObjs;
    return b;
}
var script = {"borderSize":0,"shadow":false,"buttonToggleFullscreen":"this.IconButton_BD74F3DD_AF97_D3B4_41AE_B50ECA944BA7","gap":10,"data":{"name":"Player762","locales":{"pt":"locale/pt.txt"},"textToSpeechConfig":{"speechOnQuizQuestion":false,"stopBackgroundAudio":false,"speechOnInfoWindow":false,"speechOnTooltip":false,"volume":1,"pitch":1,"rate":1},"defaultLocale":"pt"},"width":"100%","paddingLeft":0,"paddingTop":0,"id":"rootPlayer","mouseWheelEnabled":true,"definitions": [{"borderSize":0,"shadow":false,"gap":0,"data":{"name":"Container2177"},"width":"100%","paddingLeft":0,"children":["this.IconButton_A22B29BC_AF93_3FF4_41D3_388923FC4A50","this.IconButton_BC326FF0_B1C2_0AAD_41C2_2B50AD73DD6B","this.IconButton_A24EF961_AF91_5C8C_41DD_F7835061599E","this.IconButton_A186418E_AF91_4F95_41E3_2B1CEA78E105","this.IconButton_AA036099_B242_169F_41E6_3B65DFBCB323"],"id":"Container_A29F0DB4_AF93_57F5_41DF_D34256ADE717","borderRadius":0,"paddingTop":0,"paddingBottom":0,"scrollBarVisible":"rollOver","paddingRight":0,"horizontalAlign":"center","contentOpaque":false,"toolTipHorizontalAlign":"center","backgroundOpacity":0,"bottom":"0%","height":"7.297%","verticalAlign":"middle","scrollBarOpacity":0.5,"scrollBarWidth":10,"scrollBarColor":"#000000","overflow":"scroll","layout":"horizontal","scrollBarMargin":2,"class":"Container","left":"0%","propagateClick":false,"minWidth":20,"minHeight":20},{"automaticZoomSpeed":10,"idleSequence":"this.sequence_A4BB5790_AEC6_CD6F_41CE_0EDC19E6B885","manualZoomSpeed":4,"manualRotationSpeed":200,"id":"panorama_A4A53D9F_AEC6_DC90_41E1_B707B1372146_camera","hoverFactor":0,"initialSequence":"this.sequence_A4BB5790_AEC6_CD6F_41CE_0EDC19E6B885","class":"PanoramaCamera","initialPosition":{"yaw":-177.13,"class":"PanoramaCameraPosition","pitch":-5.47},"timeToIdle":5000},{"borderSize":0,"shadow":false,"toolTipBackgroundColor":"#F6F6F6","toolTipTextShadowBlurRadius":3,"width":53,"toolTipPaddingTop":4,"toolTip":trans('IconButton_BC326FF0_B1C2_0AAD_41C2_2B50AD73DD6B.toolTip'),"toolTipTextShadowOpacity":0,"paddingLeft":0,"paddingTop":0,"id":"IconButton_BC326FF0_B1C2_0AAD_41C2_2B50AD73DD6B","cursor":"hand","iconURL":"skin/IconButton_BC326FF0_B1C2_0AAD_41C2_2B50AD73DD6B.png","borderRadius":0,"toolTipBorderSize":1,"paddingBottom":0,"data":{"name":"Whatsapp"},"paddingRight":0,"toolTipFontColor":"#606060","horizontalAlign":"center","toolTipShadowOpacity":1,"toolTipShadowHorizontalLength":0,"toolTipShadowBlurRadius":3,"toolTipPaddingRight":6,"toolTipHorizontalAlign":"center","backgroundColorDirection":"vertical","backgroundOpacity":0.3,"toolTipDisplayTime":600,"toolTipFontFamily":"Arial","toolTipTextShadowColor":"#000000","transparencyActive":true,"toolTipOpacity":1,"height":36,"toolTipFontSize":"1.11vmin","verticalAlign":"middle","backgroundColor":[],"toolTipShadowColor":"#333138","click":"this.openLink(this.translate('LinkBehaviour_A17D8993_B1C2_176C_41D0_E451FA818CDA.source'), '_blank')","backgroundColorRatios":[],"toolTipShadowVerticalLength":0,"toolTipFontWeight":"normal","toolTipPaddingLeft":6,"toolTipShadowSpread":0,"propagateClick":false,"mode":"push","class":"IconButton","minHeight":1,"toolTipBorderColor":"#767676","minWidth":1,"toolTipPaddingBottom":4,"toolTipFontStyle":"normal","toolTipBorderRadius":3,"rollOverIconURL":"skin/IconButton_BC326FF0_B1C2_0AAD_41C2_2B50AD73DD6B_rollover.png"},{"adjacentPanoramas":[{"distance":3.89,"yaw":97.98,"select":"this.overlay_BEB6B7FD_AEDA_CC91_41D4_B5AAB9B055DE.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_A4A53D9F_AEC6_DC90_41E1_B707B1372146","class":"AdjacentPanorama","data":{"overlayID":"overlay_BEB6B7FD_AEDA_CC91_41D4_B5AAB9B055DE"}}],"hfovMax":130,"hfov":360,"vfov":180,"partial":false,"hfovMin":"135%","id":"panorama_A4A77A61_AEC6_C7B1_41E1_BA741B769A9A","overlays":["this.overlay_BEB6B7FD_AEDA_CC91_41D4_B5AAB9B055DE","this.panorama_A4A77A61_AEC6_C7B1_41E1_BA741B769A9A_tcap0","this.overlay_AA3BA283_B870_2FB4_41CF_EB79F117E0BA"],"pitch":0,"label":trans('panorama_A4A77A61_AEC6_C7B1_41E1_BA741B769A9A.label'),"thumbnailUrl":"media/panorama_A4A77A61_AEC6_C7B1_41E1_BA741B769A9A_t.jpg","class":"Panorama","data":{"label":"Parte interna 2"},"frames":[{"thumbnailUrl":"media/panorama_A4A77A61_AEC6_C7B1_41E1_BA741B769A9A_t.jpg","cube":{"levels":[{"width":12288,"colCount":24,"url":"media/panorama_A4A77A61_AEC6_C7B1_41E1_BA741B769A9A_0/{face}/0/{row}_{column}.jpg","height":2048,"class":"TiledImageResourceLevel","tags":"ondemand","rowCount":4},{"width":6144,"colCount":12,"url":"media/panorama_A4A77A61_AEC6_C7B1_41E1_BA741B769A9A_0/{face}/1/{row}_{column}.jpg","height":1024,"class":"TiledImageResourceLevel","tags":"ondemand","rowCount":2},{"width":3072,"colCount":6,"url":"media/panorama_A4A77A61_AEC6_C7B1_41E1_BA741B769A9A_0/{face}/2/{row}_{column}.jpg","height":512,"class":"TiledImageResourceLevel","tags":["ondemand","preload"],"rowCount":1},{"width":9216,"colCount":6,"url":"media/panorama_A4A77A61_AEC6_C7B1_41E1_BA741B769A9A_0/{face}/vr/0.jpg","height":1536,"class":"TiledImageResourceLevel","tags":"mobilevr","rowCount":1},{"width":12288,"colCount":6,"url":"media/panorama_A4A77A61_AEC6_C7B1_41E1_BA741B769A9A_0/{face}/vr2gen/0.jpg","height":2048,"class":"TiledImageResourceLevel","tags":"mobilevr2gen","rowCount":1}],"class":"ImageResource"},"class":"CubicPanoramaFrame"}]},{"borderSize":0,"shadow":false,"width":62.65,"cursor":"hand","paddingLeft":0,"paddingTop":0,"id":"IconButton_A24EF961_AF91_5C8C_41DD_F7835061599E","borderRadius":0,"paddingBottom":0,"data":{"name":"Instagram"},"paddingRight":0,"iconURL":"skin/IconButton_A24EF961_AF91_5C8C_41DD_F7835061599E.png","horizontalAlign":"center","toolTipHorizontalAlign":"center","backgroundColorDirection":"vertical","backgroundOpacity":0.3,"transparencyActive":true,"height":44,"verticalAlign":"middle","backgroundColor":[],"click":"this.openLink(this.translate('LinkBehaviour_BF720FF3_AF91_538C_41E2_B8DF6F70D276.source'), '_blank')","backgroundColorRatios":[],"propagateClick":false,"mode":"push","class":"IconButton","minHeight":1,"minWidth":1,"rollOverIconURL":"skin/IconButton_A24EF961_AF91_5C8C_41DD_F7835061599E_rollover.png"},{"borderSize":0,"shadow":false,"gap":10,"data":{"name":"Container18239"},"width":"14.368%","paddingLeft":0,"children":["this.Container_AAD483BD_B242_3A97_41BE_DF43DCA2CD11"],"id":"Container_A4E11BD1_B2C2_0AEF_41E2_99C94DC96777","borderRadius":0,"paddingTop":0,"paddingBottom":0,"scrollBarVisible":"rollOver","paddingRight":0,"horizontalAlign":"left","contentOpaque":false,"toolTipHorizontalAlign":"center","backgroundOpacity":0,"height":"24.71%","verticalAlign":"top","scrollBarOpacity":0.5,"top":"0.12%","scrollBarWidth":10,"scrollBarColor":"#000000","overflow":"scroll","layout":"absolute","scrollBarMargin":2,"class":"Container","left":"0.29%","propagateClick":false,"minWidth":20,"minHeight":20},{"displayMovements":[{"duration":1000,"easing":"linear","class":"TargetRotationalCameraDisplayMovement"},{"targetPitch":-2.53,"targetStereographicFactor":0,"class":"TargetRotationalCameraDisplayMovement","duration":3000,"easing":"cubic_in_out","targetHfov":120}],"manualRotationSpeed":200,"automaticZoomSpeed":10,"class":"PanoramaCamera","timeToIdle":5000,"displayOriginPosition":{"yaw":7.05,"class":"RotationalCameraDisplayPosition","hfov":165,"pitch":-90,"stereographicFactor":1},"initialSequence":"this.sequence_A4BE2790_AEC6_CD6F_41E5_174BAD7044EE","idleSequence":"this.sequence_A4BE2790_AEC6_CD6F_41E5_174BAD7044EE","initialPosition":{"yaw":7.05,"class":"PanoramaCameraPosition","hfov":120,"pitch":-2.53},"hoverFactor":0,"manualZoomSpeed":4,"id":"panorama_A4B0A555_AEC6_4D91_41DB_AAF0C6ACD01C_camera"},{"adjacentPanoramas":[{"distance":54.45,"yaw":-37.91,"select":"this.overlay_BB9D6B28_AFC7_D86A_41DC_FB386554A92D.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_A4A77A61_AEC6_C7B1_41E1_BA741B769A9A","class":"AdjacentPanorama","data":{"overlayID":"overlay_BB9D6B28_AFC7_D86A_41DC_FB386554A92D"}}],"hfovMax":120,"hfov":360,"vfov":180,"partial":false,"hfovMin":"115%","id":"panorama_A4B0A555_AEC6_4D91_41DB_AAF0C6ACD01C","pitch":0,"label":trans('panorama_A4B0A555_AEC6_4D91_41DB_AAF0C6ACD01C.label'),"thumbnailUrl":"media/panorama_A4B0A555_AEC6_4D91_41DB_AAF0C6ACD01C_t.jpg","class":"Panorama","overlays":["this.overlay_BB9D6B28_AFC7_D86A_41DC_FB386554A92D","this.panorama_A4B0A555_AEC6_4D91_41DB_AAF0C6ACD01C_tcap0"],"data":{"label":"Fachada Cartel do bon\u00e9"},"frames":[{"thumbnailUrl":"media/panorama_A4B0A555_AEC6_4D91_41DB_AAF0C6ACD01C_t.jpg","cube":{"levels":[{"width":12288,"colCount":24,"url":"media/panorama_A4B0A555_AEC6_4D91_41DB_AAF0C6ACD01C_0/{face}/0/{row}_{column}.jpg","height":2048,"class":"TiledImageResourceLevel","tags":"ondemand","rowCount":4},{"width":6144,"colCount":12,"url":"media/panorama_A4B0A555_AEC6_4D91_41DB_AAF0C6ACD01C_0/{face}/1/{row}_{column}.jpg","height":1024,"class":"TiledImageResourceLevel","tags":"ondemand","rowCount":2},{"width":3072,"colCount":6,"url":"media/panorama_A4B0A555_AEC6_4D91_41DB_AAF0C6ACD01C_0/{face}/2/{row}_{column}.jpg","height":512,"class":"TiledImageResourceLevel","tags":["ondemand","preload"],"rowCount":1},{"width":9216,"colCount":6,"url":"media/panorama_A4B0A555_AEC6_4D91_41DB_AAF0C6ACD01C_0/{face}/vr/0.jpg","height":1536,"class":"TiledImageResourceLevel","tags":"mobilevr","rowCount":1},{"width":12288,"colCount":6,"url":"media/panorama_A4B0A555_AEC6_4D91_41DB_AAF0C6ACD01C_0/{face}/vr2gen/0.jpg","height":2048,"class":"TiledImageResourceLevel","tags":"mobilevr2gen","rowCount":1}],"class":"ImageResource"},"class":"CubicPanoramaFrame"}]},{"automaticZoomSpeed":10,"idleSequence":"this.sequence_A4BA8790_AEC6_CD6F_41D7_177AE3BE3DA0","id":"panorama_A4A77A61_AEC6_C7B1_41E1_BA741B769A9A_camera","hoverFactor":0,"initialSequence":"this.sequence_A4BA8790_AEC6_CD6F_41D7_177AE3BE3DA0","class":"PanoramaCamera","initialPosition":{"yaw":-80.96,"class":"PanoramaCameraPosition","pitch":-5.99},"timeToIdle":5000},{"borderSize":0,"shadow":false,"width":40,"cursor":"hand","paddingLeft":0,"id":"IconButton_A186418E_AF91_4F95_41E3_2B1CEA78E105","borderRadius":0,"paddingTop":0,"paddingBottom":0,"data":{"name":"Mudo"},"paddingRight":0,"iconURL":"skin/IconButton_A186418E_AF91_4F95_41E3_2B1CEA78E105.png","horizontalAlign":"center","toolTipHorizontalAlign":"center","backgroundOpacity":0,"transparencyActive":true,"height":33,"verticalAlign":"middle","pressedIconURL":"skin/IconButton_A186418E_AF91_4F95_41E3_2B1CEA78E105_pressed.png","mode":"toggle","class":"IconButton","propagateClick":false,"minWidth":0,"minHeight":0,"rollOverIconURL":"skin/IconButton_A186418E_AF91_4F95_41E3_2B1CEA78E105_rollover.png"},{"autoplay":true,"loop":false,"audio":"this.audiores_BFEB35B9_AF3E_CC90_41BC_B05C8A6DAB25","class":"MediaAudio","data":{"label":"Audio Cartel do bon\u00e9 Editado"},"id":"audio_BFA3EADF_AF3E_C491_41E1_9E785C41EFA4"},{"progressBarOpacity":1,"subtitlesTextShadowHorizontalLength":1,"borderSize":0,"toolTipFontStyle":"normal","playbackBarHeadBackgroundColorDirection":"vertical","surfaceReticleOpacity":0.6,"toolTipTextShadowOpacity":0,"progressBackgroundColorRatios":[0],"subtitlesShadow":false,"subtitlesTop":0,"progressBottom":0,"playbackBarHeadWidth":6,"width":"100%","paddingLeft":0,"data":{"name":"Main Viewer"},"vrPointerSelectionColor":"#FF6600","id":"MainViewer","playbackBarProgressBorderSize":0,"progressHeight":10,"playbackBarBackgroundColorDirection":"vertical","paddingRight":0,"subtitlesFontWeight":"normal","subtitlesOpacity":1,"playbackBarRight":0,"playbackBarProgressBackgroundColor":["#3399FF"],"toolTipShadowOpacity":1,"subtitlesGap":0,"progressBorderSize":0,"vrPointerSelectionTime":2000,"subtitlesHorizontalAlign":"center","subtitlesTextShadowColor":"#000000","toolTipHorizontalAlign":"center","playbackBarProgressBorderRadius":0,"playbackBarHeadShadowHorizontalLength":0,"toolTipDisplayTime":600,"vrPointerColor":"#FFFFFF","firstTransitionDuration":0,"progressRight":0,"subtitlesBackgroundColor":"#000000","progressBarBorderSize":0,"playbackBarHeadShadowVerticalLength":0,"toolTipOpacity":1,"progressOpacity":1,"progressBarBorderRadius":0,"toolTipFontSize":"1.11vmin","subtitlesFontSize":"3vmin","playbackBarHeadShadowBlurRadius":3,"playbackBarHeadShadowOpacity":0.7,"subtitlesPaddingBottom":5,"playbackBarBackgroundOpacity":1,"subtitlesPaddingLeft":5,"transitionDuration":500,"subtitlesBackgroundOpacity":0.2,"subtitlesVerticalAlign":"bottom","surfaceReticleSelectionOpacity":1,"toolTipFontWeight":"normal","translationTransitionDuration":1000,"subtitlesBottom":50,"toolTipShadowSpread":0,"height":"100%","progressBarBackgroundColorDirection":"vertical","subtitlesTextShadowOpacity":1,"progressBarBorderColor":"#000000","class":"ViewerArea","playbackBarLeft":0,"minHeight":50,"playbackBarHeadHeight":15,"toolTipBorderColor":"#767676","minWidth":100,"subtitlesBorderColor":"#FFFFFF","progressBarBackgroundColorRatios":[0],"subtitlesBorderSize":0,"playbackBarProgressBackgroundColorRatios":[0],"subtitlesPaddingRight":5,"playbackBarHeadShadowColor":"#000000","toolTipBackgroundColor":"#F6F6F6","surfaceReticleSelectionColor":"#FFFFFF","playbackBarHeadBackgroundColorRatios":[0,1],"progressBorderRadius":0,"toolTipTextShadowBlurRadius":3,"displayTooltipInTouchScreens":true,"toolTipPaddingTop":4,"progressBackgroundColorDirection":"vertical","playbackBarProgressBorderColor":"#000000","playbackBarHeadBorderSize":0,"playbackBarBorderColor":"#FFFFFF","borderRadius":0,"subtitlesTextDecoration":"none","paddingTop":0,"playbackBarHeadShadow":true,"toolTipShadowHorizontalLength":0,"playbackBarBorderRadius":0,"toolTipBorderSize":1,"paddingBottom":0,"subtitlesTextShadowBlurRadius":0,"progressLeft":0,"toolTipFontColor":"#606060","doubleClickAction":"toggle_fullscreen","playbackBarHeadOpacity":1,"toolTipShadowBlurRadius":3,"toolTipPaddingRight":6,"toolTipFontFamily":"Arial","playbackBarHeadBorderRadius":0,"toolTipTextShadowColor":"#000000","progressBarBackgroundColor":["#3399FF"],"progressBorderColor":"#000000","subtitlesFontColor":"#FFFFFF","playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarHeadBorderColor":"#000000","playbackBarOpacity":1,"toolTipShadowColor":"#333138","playbackBarProgressOpacity":1,"subtitlesFontFamily":"Arial","displayTooltipInSurfaceSelection":true,"toolTipShadowVerticalLength":0,"toolTipPaddingLeft":6,"subtitlesEnabled":true,"playbackBarBorderSize":0,"playbackBarBottom":5,"transitionMode":"blending","progressBackgroundOpacity":1,"playbackBarProgressBackgroundColorDirection":"vertical","propagateClick":false,"subtitlesPaddingTop":5,"shadow":false,"playbackBarBackgroundColor":["#FFFFFF"],"toolTipBorderRadius":3,"subtitlesTextShadowVerticalLength":1,"surfaceReticleColor":"#FFFFFF","playbackBarHeight":10,"toolTipPaddingBottom":4,"progressBackgroundColor":["#FFFFFF"]},{"adjacentPanoramas":[{"distance":7.24,"yaw":8.15,"select":"this.overlay_A122F42E_AEC6_C3B0_41BB_CCD4420A76AE.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_A4B0A555_AEC6_4D91_41DB_AAF0C6ACD01C","class":"AdjacentPanorama","data":{"overlayID":"overlay_A122F42E_AEC6_C3B0_41BB_CCD4420A76AE"}}],"hfovMax":130,"hfov":360,"vfov":180,"partial":false,"hfovMin":"135%","id":"panorama_A4A53D9F_AEC6_DC90_41E1_B707B1372146","overlays":["this.overlay_A122F42E_AEC6_C3B0_41BB_CCD4420A76AE","this.panorama_A4A53D9F_AEC6_DC90_41E1_B707B1372146_tcap0"],"pitch":0,"label":trans('panorama_A4A53D9F_AEC6_DC90_41E1_B707B1372146.label'),"thumbnailUrl":"media/panorama_A4A53D9F_AEC6_DC90_41E1_B707B1372146_t.jpg","class":"Panorama","data":{"label":"Parte interna 1"},"frames":[{"thumbnailUrl":"media/panorama_A4A53D9F_AEC6_DC90_41E1_B707B1372146_t.jpg","cube":{"levels":[{"width":12288,"colCount":24,"url":"media/panorama_A4A53D9F_AEC6_DC90_41E1_B707B1372146_0/{face}/0/{row}_{column}.jpg","height":2048,"class":"TiledImageResourceLevel","tags":"ondemand","rowCount":4},{"width":6144,"colCount":12,"url":"media/panorama_A4A53D9F_AEC6_DC90_41E1_B707B1372146_0/{face}/1/{row}_{column}.jpg","height":1024,"class":"TiledImageResourceLevel","tags":"ondemand","rowCount":2},{"width":3072,"colCount":6,"url":"media/panorama_A4A53D9F_AEC6_DC90_41E1_B707B1372146_0/{face}/2/{row}_{column}.jpg","height":512,"class":"TiledImageResourceLevel","tags":["ondemand","preload"],"rowCount":1},{"width":9216,"colCount":6,"url":"media/panorama_A4A53D9F_AEC6_DC90_41E1_B707B1372146_0/{face}/vr/0.jpg","height":1536,"class":"TiledImageResourceLevel","tags":"mobilevr","rowCount":1},{"width":12288,"colCount":6,"url":"media/panorama_A4A53D9F_AEC6_DC90_41E1_B707B1372146_0/{face}/vr2gen/0.jpg","height":2048,"class":"TiledImageResourceLevel","tags":"mobilevr2gen","rowCount":1}],"class":"ImageResource"},"class":"CubicPanoramaFrame"}]},{"class":"PlayList","items":["this.PanoramaPlayListItem_AB061EE3_B810_1775_41DF_E97408911C24","this.PanoramaPlayListItem_AB05CEE2_B810_1777_41DA_ED1B7CAF8A36","this.PanoramaPlayListItem_AB052EE3_B810_1775_419D_4A61F3D90D22"],"id":"mainPlayList"},{"borderSize":0,"toolTipPaddingBottom":4,"toolTipBackgroundColor":"#F6F6F6","toolTipTextShadowBlurRadius":3,"width":49,"toolTipPaddingTop":4,"toolTip":trans('IconButton_BD74F3DD_AF97_D3B4_41AE_B50ECA944BA7.toolTip'),"toolTipTextShadowOpacity":0,"paddingLeft":0,"paddingTop":0,"id":"IconButton_BD74F3DD_AF97_D3B4_41AE_B50ECA944BA7","cursor":"hand","iconURL":"skin/IconButton_BD74F3DD_AF97_D3B4_41AE_B50ECA944BA7.png","borderRadius":0,"toolTipBorderSize":1,"paddingBottom":0,"shadow":false,"paddingRight":0,"toolTipFontColor":"#606060","horizontalAlign":"center","toolTipShadowOpacity":1,"toolTipShadowHorizontalLength":0,"toolTipShadowBlurRadius":3,"toolTipPaddingRight":6,"toolTipHorizontalAlign":"center","toolTipTextShadowColor":"#000000","backgroundOpacity":0,"toolTipDisplayTime":600,"toolTipFontFamily":"Arial","data":{"name":"IconButton1493"},"transparencyActive":true,"toolTipOpacity":1,"height":39,"toolTipFontSize":12,"verticalAlign":"middle","toolTipShadowColor":"#333333","toolTipShadowVerticalLength":0,"top":"3.32%","maxHeight":128,"toolTipPaddingLeft":6,"maxWidth":128,"toolTipFontWeight":"normal","propagateClick":false,"toolTipShadowSpread":0,"class":"IconButton","minHeight":1,"mode":"toggle","toolTipBorderColor":"#767676","minWidth":1,"right":"2.97%","toolTipFontStyle":"normal","toolTipBorderRadius":3},{"aaEnabled":true,"gyroscopeVerticalDraggingEnabled":true,"displayPlaybackBar":true,"surfaceSelectionHorizontalAngle":47.7,"surfaceSelectionEnabled":false,"touchControlMode":"drag_rotation","class":"PanoramaPlayer","mouseControlMode":"drag_rotation","zoomEnabled":true,"buttonCardboardView":"this.IconButton_AA036099_B242_169F_41E6_3B65DFBCB323","viewerArea":"this.MainViewer","surfaceSelectionVerticalAngle":95.4,"arrowKeysAction":"translate","id":"MainViewerPanoramaPlayer"},{"borderSize":0,"shadow":false,"gap":10,"data":{"name":"Container Logo GIF"},"width":"100%","paddingLeft":0,"children":["this.Image_A5D4DA41_B242_15EF_41E2_8CECD1747BCC"],"id":"Container_AAD483BD_B242_3A97_41BE_DF43DCA2CD11","borderRadius":0,"paddingTop":0,"paddingBottom":0,"scrollBarVisible":"rollOver","paddingRight":0,"horizontalAlign":"left","contentOpaque":false,"toolTipHorizontalAlign":"center","backgroundOpacity":0,"height":"100%","verticalAlign":"top","scrollBarOpacity":0.5,"top":"0%","scrollBarWidth":10,"scrollBarColor":"#000000","overflow":"scroll","layout":"absolute","scrollBarMargin":2,"class":"Container","left":"0%","propagateClick":false,"minWidth":20,"minHeight":20},{"borderSize":0,"shadow":false,"width":60,"cursor":"hand","paddingLeft":0,"id":"IconButton_AA036099_B242_169F_41E6_3B65DFBCB323","borderRadius":0,"paddingTop":0,"paddingBottom":0,"data":{"name":"IconButton12329"},"paddingRight":0,"horizontalAlign":"center","toolTipHorizontalAlign":"center","backgroundOpacity":0,"transparencyActive":false,"height":44,"verticalAlign":"middle","maxHeight":70,"maxWidth":70,"propagateClick":false,"class":"IconButton","iconURL":"skin/IconButton_AA036099_B242_169F_41E6_3B65DFBCB323.png","minHeight":1,"mode":"push","minWidth":1},{"borderSize":0,"shadow":false,"width":49,"cursor":"hand","paddingLeft":0,"paddingTop":0,"id":"IconButton_A22B29BC_AF93_3FF4_41D3_388923FC4A50","borderRadius":0,"paddingBottom":0,"data":{"name":"Localiza\u00e7\u00e3o"},"paddingRight":0,"iconURL":"skin/IconButton_A22B29BC_AF93_3FF4_41D3_388923FC4A50.png","horizontalAlign":"center","toolTipHorizontalAlign":"center","backgroundColorDirection":"vertical","backgroundOpacity":0.3,"transparencyActive":true,"height":44,"verticalAlign":"middle","backgroundColor":[],"click":"this.openLink(this.translate('LinkBehaviour_BF7C97E8_AF91_739D_41E2_CDBB9F41D5EC.source'), '_blank')","backgroundColorRatios":[],"propagateClick":false,"mode":"push","class":"IconButton","minHeight":1,"minWidth":1,"rollOverIconURL":"skin/IconButton_A22B29BC_AF93_3FF4_41D3_388923FC4A50_rollover.png"},{"borderSize":0,"shadow":false,"data":{"name":"Logo GIF"},"url":trans('Image_A5D4DA41_B242_15EF_41E2_8CECD1747BCC.url'),"width":"92.667%","paddingLeft":0,"horizontalAlign":"center","id":"Image_A5D4DA41_B242_15EF_41E2_8CECD1747BCC","borderRadius":0,"scaleMode":"fit_inside","paddingBottom":0,"paddingRight":0,"paddingTop":0,"toolTipHorizontalAlign":"center","verticalAlign":"middle","backgroundOpacity":0,"height":"91.946%","top":"0%","class":"Image","left":"0%","propagateClick":false,"minWidth":1,"minHeight":1},{"restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawDelta":32.5,"yawSpeed":5.31},{"easing":"linear","class":"DistancePanoramaCameraMovement","yawDelta":295,"yawSpeed":5.31},{"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawDelta":32.5,"yawSpeed":5.31}],"id":"sequence_A4BB5790_AEC6_CD6F_41CE_0EDC19E6B885"},{"maps":[],"areas":["this.HotspotPanoramaOverlayArea_BEBEA80C_AEDA_C370_41C1_5EAB1D84AFEF"],"data":{"hasPanoramaAction":true,"label":"Circle Arrow 04 Right"},"useHandCursor":true,"enabledInCardboard":true,"items":[{"image":"this.AnimatedImageResource_AB026E14_B810_16D3_41E2_DBAB8C9FD45F","distance":50,"yaw":97.98,"hfov":10.5,"vfov":10.5,"class":"HotspotPanoramaOverlayImage","data":{"label":"Circle Arrow 04 Right"},"verticalAlign":"middle","horizontalAlign":"center","pitch":-23.62,"scaleMode":"fit_inside"}],"class":"HotspotPanoramaOverlay","id":"overlay_BEB6B7FD_AEDA_CC91_41D4_B5AAB9B055DE"},{"image":"this.res_BE478703_AFCE_481E_41D1_D0880A886BD0","distance":50,"useHandCursor":false,"angle":0,"hfov":30,"class":"TripodCapPanoramaOverlay","rotate":true,"inertia":false,"id":"panorama_A4A77A61_AEC6_C7B1_41E1_BA741B769A9A_tcap0"},{"maps":[],"class":"HotspotPanoramaOverlay","data":{"label":"Design_sem_nome-removebg-preview"},"useHandCursor":true,"enabledInCardboard":true,"items":[{"image":"this.res_BE478703_AFCE_481E_41D1_D0880A886BD0","distance":50,"yaw":132.31,"rotationY":24.19,"hfov":8.56,"vfov":5.43,"class":"HotspotPanoramaOverlayImage","data":{"label":"Design_sem_nome-removebg-preview"},"roll":6.57,"verticalAlign":"middle","horizontalAlign":"center","pitch":7.65,"scaleMode":"fit_inside"}],"areas":["this.HotspotPanoramaOverlayArea_A997935C_B870_2D53_41D0_686BFF0224D7"],"id":"overlay_AA3BA283_B870_2FB4_41CF_EB79F117E0BA"},{"restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96},{"easing":"linear","class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96},{"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96}],"id":"sequence_A4BE2790_AEC6_CD6F_41E5_174BAD7044EE"},{"maps":[],"areas":["this.HotspotPanoramaOverlayArea_BB98DB37_AFC7_D865_41E2_4B748080097E"],"data":{"hasPanoramaAction":true,"label":"Circle Arrow 04 Right"},"useHandCursor":true,"enabledInCardboard":true,"items":[{"image":"this.AnimatedImageResource_AB023E13_B810_16D5_41DD_C77D72D41029","distance":50,"yaw":-37.91,"rotationY":-8.12,"hfov":9.45,"vfov":14.23,"class":"HotspotPanoramaOverlayImage","data":{"label":"Circle Arrow 04 Right"},"verticalAlign":"middle","horizontalAlign":"center","pitch":-1.78,"scaleMode":"fit_inside"}],"class":"HotspotPanoramaOverlay","id":"overlay_BB9D6B28_AFC7_D86A_41DC_FB386554A92D"},{"image":"this.res_BE478703_AFCE_481E_41D1_D0880A886BD0","distance":50,"useHandCursor":false,"angle":0,"hfov":30,"class":"TripodCapPanoramaOverlay","rotate":true,"inertia":false,"id":"panorama_A4B0A555_AEC6_4D91_41DB_AAF0C6ACD01C_tcap0"},{"restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawDelta":32.5,"yawSpeed":5.31},{"easing":"linear","class":"DistancePanoramaCameraMovement","yawDelta":295,"yawSpeed":5.31},{"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawDelta":32.5,"yawSpeed":5.31}],"id":"sequence_A4BA8790_AEC6_CD6F_41D7_177AE3BE3DA0"},{"mp3Url":trans('audiores_BFEB35B9_AF3E_CC90_41BC_B05C8A6DAB25.mp3Url'),"class":"AudioResource","id":"audiores_BFEB35B9_AF3E_CC90_41BC_B05C8A6DAB25"},{"maps":[],"areas":["this.HotspotPanoramaOverlayArea_BED2343E_AEC6_C393_41C3_8306C3898AFB"],"data":{"hasPanoramaAction":true,"label":"Circle Arrow 04 Left"},"useHandCursor":true,"enabledInCardboard":true,"items":[{"hfov":11.88,"vfov":11.5,"roll":1.47,"horizontalAlign":"center","pitch":-13.21,"image":"this.AnimatedImageResource_AB01FE14_B810_16D3_4192_F17721374E80","distance":50,"yaw":8.15,"rotationY":6.43,"rotationX":-6.84,"data":{"label":"Circle Arrow 04 Left"},"verticalAlign":"middle","class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside"}],"class":"HotspotPanoramaOverlay","id":"overlay_A122F42E_AEC6_C3B0_41BB_CCD4420A76AE"},{"image":"this.res_BE478703_AFCE_481E_41D1_D0880A886BD0","distance":50,"useHandCursor":false,"angle":0,"hfov":30,"class":"TripodCapPanoramaOverlay","rotate":true,"inertia":false,"id":"panorama_A4A53D9F_AEC6_DC90_41E1_B707B1372146_tcap0"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_A4B0A555_AEC6_4D91_41DB_AAF0C6ACD01C_camera","media":"this.panorama_A4B0A555_AEC6_4D91_41DB_AAF0C6ACD01C","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","id":"PanoramaPlayListItem_AB061EE3_B810_1775_41DF_E97408911C24"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_A4A77A61_AEC6_C7B1_41E1_BA741B769A9A_camera","media":"this.panorama_A4A77A61_AEC6_C7B1_41E1_BA741B769A9A","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)","id":"PanoramaPlayListItem_AB05CEE2_B810_1777_41DA_ED1B7CAF8A36"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_A4A53D9F_AEC6_DC90_41E1_B707B1372146_camera","media":"this.panorama_A4A53D9F_AEC6_DC90_41E1_B707B1372146","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 0)","end":"this.trigger('tourEnded')","id":"PanoramaPlayListItem_AB052EE3_B810_1775_419D_4A61F3D90D22"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_AB052EE3_B810_1775_419D_4A61F3D90D22, 173.35384615384615, 0.21896243291592216, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.mainPlayList.set('selectedIndex', 2)","id":"HotspotPanoramaOverlayArea_BEBEA80C_AEDA_C370_41C1_5EAB1D84AFEF"},{"frameDuration":41,"frameCount":24,"colCount":4,"levels":[{"height":804,"width":536,"class":"ImageResourceLevel","url":"media/res_BE59B2A7_AECA_44B1_41E4_49CB99F99BC9_0.png"}],"class":"AnimatedImageResource","rowCount":6,"id":"AnimatedImageResource_AB026E14_B810_16D3_41E2_DBAB8C9FD45F"},{"levels":[{"height":150,"width":150,"class":"ImageResourceLevel","url":"media/res_BE478703_AFCE_481E_41D1_D0880A886BD0_0.png"}],"class":"ImageResource","id":"res_BE478703_AFCE_481E_41D1_D0880A886BD0"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_A997935C_B870_2D53_41D0_686BFF0224D7"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_AB05CEE2_B810_1777_41DA_ED1B7CAF8A36, -93.6, -0.8894454382826467, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.mainPlayList.set('selectedIndex', 1)","id":"HotspotPanoramaOverlayArea_BB98DB37_AFC7_D865_41E2_4B748080097E"},{"frameDuration":41,"frameCount":24,"colCount":4,"levels":[{"height":804,"width":536,"class":"ImageResourceLevel","url":"media/res_BE59B2A7_AECA_44B1_41E4_49CB99F99BC9_0.png"}],"class":"AnimatedImageResource","rowCount":6,"id":"AnimatedImageResource_AB023E13_B810_16D5_41DD_C77D72D41029"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_AB061EE3_B810_1775_41DF_E97408911C24, -119.63076923076925, -0.8894454382826467, 120 || TDV.Player.DEFAULT_PANORAMA_HFOV); this.mainPlayList.set('selectedIndex', 0)","id":"HotspotPanoramaOverlayArea_BED2343E_AEC6_C393_41C3_8306C3898AFB"},{"frameDuration":41,"frameCount":24,"colCount":4,"levels":[{"height":804,"width":536,"class":"ImageResourceLevel","url":"media/res_BE5962A7_AECA_44B1_41BC_483A580D9BCF_0.png"}],"class":"AnimatedImageResource","rowCount":6,"id":"AnimatedImageResource_AB01FE14_B810_16D3_4192_F17721374E80"}],"borderRadius":0,"paddingBottom":0,"scrollBarVisible":"rollOver","vrPolyfillScale":0.75,"paddingRight":0,"defaultVRPointer":"laser","buttonToggleMute":"this.IconButton_A186418E_AF91_4F95_41E3_2B1CEA78E105","horizontalAlign":"left","children":["this.MainViewer","this.Container_A29F0DB4_AF93_57F5_41DF_D34256ADE717","this.IconButton_BD74F3DD_AF97_D3B4_41AE_B50ECA944BA7","this.Container_A4E11BD1_B2C2_0AEF_41E2_99C94DC96777"],"mobileMipmappingEnabled":false,"contentOpaque":false,"toolTipHorizontalAlign":"center","backgroundColorDirection":"vertical","backgroundOpacity":1,"desktopMipmappingEnabled":false,"height":"100%","verticalAlign":"top","backgroundColor":["#CC9933"],"scrollBarOpacity":0.5,"scrollBarWidth":10,"scripts":{"playAudioList":TDV.Tour.Script.playAudioList,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"historyGoForward":TDV.Tour.Script.historyGoForward,"existsKey":TDV.Tour.Script.existsKey,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"shareSocial":TDV.Tour.Script.shareSocial,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"getMainViewer":TDV.Tour.Script.getMainViewer,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"showWindow":TDV.Tour.Script.showWindow,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"initQuiz":TDV.Tour.Script.initQuiz,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getKey":TDV.Tour.Script.getKey,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"cloneBindings":TDV.Tour.Script.cloneBindings,"textToSpeech":TDV.Tour.Script.textToSpeech,"clone":TDV.Tour.Script.clone,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"openLink":TDV.Tour.Script.openLink,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"init":TDV.Tour.Script.init,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"cloneCamera":TDV.Tour.Script.cloneCamera,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"executeJS":TDV.Tour.Script.executeJS,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"quizShowScore":TDV.Tour.Script.quizShowScore,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"setMapLocation":TDV.Tour.Script.setMapLocation,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getOverlays":TDV.Tour.Script.getOverlays,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"resumePlayers":TDV.Tour.Script.resumePlayers,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getMediaByName":TDV.Tour.Script.getMediaByName,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"downloadFile":TDV.Tour.Script.downloadFile,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"quizStart":TDV.Tour.Script.quizStart,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"historyGoBack":TDV.Tour.Script.historyGoBack,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"setValue":TDV.Tour.Script.setValue,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setLocale":TDV.Tour.Script.setLocale,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getPixels":TDV.Tour.Script.getPixels,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"registerKey":TDV.Tour.Script.registerKey,"initAnalytics":TDV.Tour.Script.initAnalytics,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"mixObject":TDV.Tour.Script.mixObject,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"showPopupImage":TDV.Tour.Script.showPopupImage,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"unregisterKey":TDV.Tour.Script.unregisterKey,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getComponentByName":TDV.Tour.Script.getComponentByName,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"quizFinish":TDV.Tour.Script.quizFinish,"isPanorama":TDV.Tour.Script.isPanorama,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"translate":TDV.Tour.Script.translate,"getMediaHeight":TDV.Tour.Script.getMediaHeight},"downloadEnabled":true,"backgroundColorRatios":[0],"scrollBarColor":"#000000","overflow":"hidden","backgroundPreloadEnabled":true,"propagateClick":false,"scrollBarMargin":2,"class":"Player","mediaActivationMode":"window","layout":"absolute","start":"this.playAudioList([this.audio_BFA3EADF_AF3E_C491_41E1_9E785C41EFA4], true); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_AA036099_B242_169F_41E6_3B65DFBCB323], 'cardboardAvailable'); if(!this.get('fullscreenAvailable')) { [this.IconButton_BD74F3DD_AF97_D3B4_41AE_B50ECA944BA7].forEach(function(component) { if(component.get('class') != 'ViewerArea') component.set('visible', false); }) }","minHeight":0,"defaultMenu":["fullscreen","mute","rotation"],"minWidth":0};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['history'] = {};
script['scripts']['createQuizConfig'] = createQuizConfig;
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2022.1.14.js.map
})();
//Generated with v2022.1.14, Sat Oct 8 2022