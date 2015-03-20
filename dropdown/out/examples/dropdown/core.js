// Compiled by ClojureScript 0.0-3126 {}
goog.provide('examples.dropdown.core');
goog.require('cljs.core');
goog.require('om_tools.dom');
goog.require('om_semantic.dropdown');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
console.clear();
examples.dropdown.core.menu = cljs.core.mapv.call(null,(function (p1__9385_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"label","label",1718410804)],[clojure.string.lower_case.call(null,p1__9385_SHARP_),p1__9385_SHARP_]);
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Viktor","Sebastian","Pelle","Rikard","Supertramp"], null));
if(typeof examples.dropdown.core.app_state !== 'undefined'){
} else {
examples.dropdown.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"menu","menu",352255198),examples.dropdown.core.menu,new cljs.core.Keyword(null,"selected","selected",574897764),null], null));
}
examples.dropdown.core.button = (function examples$dropdown$core$button(data,owner){
if(typeof examples.dropdown.core.t9389 !== 'undefined'){
} else {

/**
* @constructor
*/
examples.dropdown.core.t9389 = (function (owner,data,button,meta9390){
this.owner = owner;
this.data = data;
this.button = button;
this.meta9390 = meta9390;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
examples.dropdown.core.t9389.prototype.om$core$IRender$ = true;

examples.dropdown.core.t9389.prototype.om$core$IRender$render$arity$1 = (function (this__7589__auto__){
var self__ = this;
var this__7589__auto____$1 = this;
return cljs.core.apply.call(null,React.DOM.div,{"onClick": om_tools.dom.format_opts.call(null,((function (this__7589__auto____$1){
return (function (){
return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.last.call(null,examples.dropdown.core.menu));
});})(this__7589__auto____$1))
), "className": "ui button"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,examples.dropdown.core.menu))],null))));
});

examples.dropdown.core.t9389.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9391){
var self__ = this;
var _9391__$1 = this;
return self__.meta9390;
});

examples.dropdown.core.t9389.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9391,meta9390__$1){
var self__ = this;
var _9391__$1 = this;
return (new examples.dropdown.core.t9389(self__.owner,self__.data,self__.button,meta9390__$1));
});

examples.dropdown.core.t9389.cljs$lang$type = true;

examples.dropdown.core.t9389.cljs$lang$ctorStr = "examples.dropdown.core/t9389";

examples.dropdown.core.t9389.cljs$lang$ctorPrWriter = (function (this__4701__auto__,writer__4702__auto__,opt__4703__auto__){
return cljs.core._write.call(null,writer__4702__auto__,"examples.dropdown.core/t9389");
});

examples.dropdown.core.__GT_t9389 = (function examples$dropdown$core$button_$___GT_t9389(owner__$1,data__$1,button__$1,meta9390){
return (new examples.dropdown.core.t9389(owner__$1,data__$1,button__$1,meta9390));
});

}

return (new examples.dropdown.core.t9389(owner,data,examples$dropdown$core$button,null));
});
om.core.root.call(null,(function (data,owner){
if(typeof examples.dropdown.core.t9392 !== 'undefined'){
} else {

/**
* @constructor
*/
examples.dropdown.core.t9392 = (function (owner,data,meta9393){
this.owner = owner;
this.data = data;
this.meta9393 = meta9393;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
examples.dropdown.core.t9392.prototype.om$core$IRender$ = true;

examples.dropdown.core.t9392.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return om_tools.dom.element.call(null,React.DOM.div,React.DOM.h3(null,"Dropdown example"),(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build.call(null,examples.dropdown.core.button,self__.data),om.core.build.call(null,om_semantic.dropdown.dropdown,self__.data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default-text","default-text",-631230836),"Pick Character"], null),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"skey","skey",323967048),new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"mkey","mkey",-1799972432),new cljs.core.Keyword(null,"menu","menu",352255198),new cljs.core.Keyword(null,"idkey","idkey",1269944726),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"lkey","lkey",-1483416360),new cljs.core.Keyword(null,"label","label",1718410804)], null)], null)),cljs.core.apply.call(null,React.DOM.span,null,cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[" You picked: ",cljs.core.get_in.call(null,self__.data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"label","label",1718410804)], null))],null))))],null)));
});

examples.dropdown.core.t9392.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9394){
var self__ = this;
var _9394__$1 = this;
return self__.meta9393;
});

examples.dropdown.core.t9392.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9394,meta9393__$1){
var self__ = this;
var _9394__$1 = this;
return (new examples.dropdown.core.t9392(self__.owner,self__.data,meta9393__$1));
});

examples.dropdown.core.t9392.cljs$lang$type = true;

examples.dropdown.core.t9392.cljs$lang$ctorStr = "examples.dropdown.core/t9392";

examples.dropdown.core.t9392.cljs$lang$ctorPrWriter = (function (this__4701__auto__,writer__4702__auto__,opt__4703__auto__){
return cljs.core._write.call(null,writer__4702__auto__,"examples.dropdown.core/t9392");
});

examples.dropdown.core.__GT_t9392 = (function examples$dropdown$core$__GT_t9392(owner__$1,data__$1,meta9393){
return (new examples.dropdown.core.t9392(owner__$1,data__$1,meta9393));
});

}

return (new examples.dropdown.core.t9392(owner,data,cljs.core.PersistentArrayMap.EMPTY));
}),examples.dropdown.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map