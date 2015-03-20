// Compiled by ClojureScript 0.0-3126 {}
goog.provide('om_semantic.dropdown');
goog.require('cljs.core');
goog.require('om_tools.dom');
goog.require('om.core');
/**
 * As select-key but works for cursors
 */
om_semantic.dropdown.select_cursor_key = (function om_semantic$dropdown$select_cursor_key(coll,k){
return cljs.core.apply.call(null,cljs.core.dissoc,coll,cljs.core.keys.call(null,cljs.core.dissoc.call(null,coll,k)));
});
/**
 * Throws a javascript warning
 */
om_semantic.dropdown.jswarn = (function om_semantic$dropdown$jswarn(warn){
return console.warn(warn);
});
/**
 * Select dropdown item
 */
om_semantic.dropdown.dropdown_select = (function om_semantic$dropdown$dropdown_select(owner,item,e){
e.stopPropagation();

e.preventDefault();

var G__7892_7893 = owner;
om.core.set_state_BANG_.call(null,G__7892_7893,new cljs.core.Keyword(null,"open","open",-1763596448),false);

om.core.set_state_BANG_.call(null,G__7892_7893,new cljs.core.Keyword(null,"selected","selected",574897764),item);


return om.core.update_BANG_.call(null,om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-cursor","selected-cursor",1353494057)),om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"skey","skey",323967048)),item);
});
/**
 * Dropdown is clicked
 */
om_semantic.dropdown.dropdown_click = (function om_semantic$dropdown$dropdown_click(owner,open){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"open","open",-1763596448),cljs.core.not.call(null,open));
});
/**
 * Generates item div
 */
om_semantic.dropdown._itemdiv = (function om_semantic$dropdown$_itemdiv(item,owner,selected,idkey,lkey){
var value = cljs.core.get.call(null,item,idkey);
var label = cljs.core.get.call(null,item,lkey);
return cljs.core.apply.call(null,React.DOM.div,{"data-text": om_tools.dom.format_opts.call(null,label), "data-value": om_tools.dom.format_opts.call(null,value), "onClick": om_tools.dom.format_opts.call(null,((function (value,label){
return (function (e){
return om_semantic.dropdown.dropdown_select.call(null,owner,item,e);
});})(value,label))
), "key": om_tools.dom.format_opts.call(null,value), "className": om_tools.dom.format_opts.call(null,[cljs.core.str("item"),cljs.core.str(((cljs.core._EQ_.call(null,value,cljs.core.get.call(null,selected,idkey)))?" active selected":null))].join(''))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[label],null))));
});
/**
 * A simple dropdown component for Om using Semantic UI css
 * opts:
 * skey: the key to the cursor that holds the selected item
 * mkey: the key to the cursor that holds the menu items
 * idkey: which key in the menu items that should be used as value
 * lkey: which key in the menu items that should be used as label (text)
 */
om_semantic.dropdown.dropdown = (function om_semantic$dropdown$dropdown(data,owner,p__7895){
var map__7900 = p__7895;
var map__7900__$1 = ((cljs.core.seq_QMARK_.call(null,map__7900))?cljs.core.apply.call(null,cljs.core.hash_map,map__7900):map__7900);
var opts = map__7900__$1;
var lkey = cljs.core.get.call(null,map__7900__$1,new cljs.core.Keyword(null,"lkey","lkey",-1483416360));
var idkey = cljs.core.get.call(null,map__7900__$1,new cljs.core.Keyword(null,"idkey","idkey",1269944726));
var mkey = cljs.core.get.call(null,map__7900__$1,new cljs.core.Keyword(null,"mkey","mkey",-1799972432));
var skey = cljs.core.get.call(null,map__7900__$1,new cljs.core.Keyword(null,"skey","skey",323967048));
if(typeof om_semantic.dropdown.t7901 !== 'undefined'){
} else {

/**
* @constructor
*/
om_semantic.dropdown.t7901 = (function (owner,data,p__7895,map__7900,skey,dropdown,mkey,opts,idkey,lkey,meta7902){
this.owner = owner;
this.data = data;
this.p__7895 = p__7895;
this.map__7900 = map__7900;
this.skey = skey;
this.dropdown = dropdown;
this.mkey = mkey;
this.opts = opts;
this.idkey = idkey;
this.lkey = lkey;
this.meta7902 = meta7902;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_semantic.dropdown.t7901.prototype.om$core$IRenderState$ = true;

om_semantic.dropdown.t7901.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__7900,map__7900__$1,opts,lkey,idkey,mkey,skey){
return (function (_,state){
var self__ = this;
var ___$1 = this;
var def_text = new cljs.core.Keyword(null,"default-text","default-text",-631230836).cljs$core$IFn$_invoke$arity$1(state);
var items = cljs.core.get.call(null,self__.data,self__.mkey);
var open = new cljs.core.Keyword(null,"open","open",-1763596448).cljs$core$IFn$_invoke$arity$1(state);
var selected = new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(state);
var tclass = [cljs.core.str("text"),cljs.core.str((cljs.core.truth_(selected)?null:" default"))].join('');
var mclass = [cljs.core.str("menu"),cljs.core.str((cljs.core.truth_(open)?" transition visible":null))].join('');
var text = (cljs.core.truth_(selected)?cljs.core.get.call(null,selected,self__.lkey):def_text);
var itemdiv = ((function (def_text,items,open,selected,tclass,mclass,text,___$1,map__7900,map__7900__$1,opts,lkey,idkey,mkey,skey){
return (function (p1__7894_SHARP_){
return om_semantic.dropdown._itemdiv.call(null,p1__7894_SHARP_,self__.owner,selected,self__.idkey,self__.lkey);
});})(def_text,items,open,selected,tclass,mclass,text,___$1,map__7900,map__7900__$1,opts,lkey,idkey,mkey,skey))
;
return cljs.core.apply.call(null,React.DOM.div,{"onClick": om_tools.dom.format_opts.call(null,((function (def_text,items,open,selected,tclass,mclass,text,itemdiv,___$1,map__7900,map__7900__$1,opts,lkey,idkey,mkey,skey){
return (function (){
return om_semantic.dropdown.dropdown_click.call(null,self__.owner,open);
});})(def_text,items,open,selected,tclass,mclass,text,itemdiv,___$1,map__7900,map__7900__$1,opts,lkey,idkey,mkey,skey))
), "tabIndex": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"tabidx","tabidx",89766096).cljs$core$IFn$_invoke$arity$1(state)), "onBlur": om_tools.dom.format_opts.call(null,((function (def_text,items,open,selected,tclass,mclass,text,itemdiv,___$1,map__7900,map__7900__$1,opts,lkey,idkey,mkey,skey){
return (function (){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"open","open",-1763596448),false);
});})(def_text,items,open,selected,tclass,mclass,text,itemdiv,___$1,map__7900,map__7900__$1,opts,lkey,idkey,mkey,skey))
), "className": "ui selection dropdown"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.dom.input.call(null,{"name": "gender", "key": "input", "type": "hidden"}),React.DOM.i({"className": "dropdown icon"}),cljs.core.apply.call(null,React.DOM.div,{"className": om_tools.dom.format_opts.call(null,tclass)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[text],null)))),cljs.core.apply.call(null,React.DOM.div,{"key": "dropdown-menu", "className": om_tools.dom.format_opts.call(null,mclass)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.map.call(null,itemdiv,items)],null))))],null))));
});})(map__7900,map__7900__$1,opts,lkey,idkey,mkey,skey))
;

om_semantic.dropdown.t7901.prototype.om$core$IWillReceiveProps$ = true;

om_semantic.dropdown.t7901.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = ((function (map__7900,map__7900__$1,opts,lkey,idkey,mkey,skey){
return (function (_,next_props){
var self__ = this;
var ___$1 = this;
cljs.core.println.call(null,next_props);

var next_selected = cljs.core.get.call(null,next_props,self__.skey);
if(cljs.core._EQ_.call(null,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764)),next_selected)){
return null;
} else {
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected","selected",574897764),next_selected);
}
});})(map__7900,map__7900__$1,opts,lkey,idkey,mkey,skey))
;

om_semantic.dropdown.t7901.prototype.om$core$IInitState$ = true;

om_semantic.dropdown.t7901.prototype.om$core$IInitState$init_state$arity$1 = ((function (map__7900,map__7900__$1,opts,lkey,idkey,mkey,skey){
return (function (_){
var self__ = this;
var ___$1 = this;
var missing_7904 = cljs.core.apply.call(null,cljs.core.disj,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"skey","skey",323967048),null,new cljs.core.Keyword(null,"mkey","mkey",-1799972432),null,new cljs.core.Keyword(null,"idkey","idkey",1269944726),null,new cljs.core.Keyword(null,"lkey","lkey",-1483416360),null], null), null),cljs.core.keys.call(null,self__.opts));
if(!(cljs.core.empty_QMARK_.call(null,missing_7904))){
om_semantic.dropdown.jswarn.call(null,[cljs.core.str("No "),cljs.core.str(cljs.core.first.call(null,missing_7904)),cljs.core.str(" set for dropdown")].join(''));
} else {
}

return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"selected-cursor","selected-cursor",1353494057),om_semantic.dropdown.select_cursor_key.call(null,self__.data,self__.skey),new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.get.call(null,self__.data,self__.skey),new cljs.core.Keyword(null,"default-text","default-text",-631230836),"-",new cljs.core.Keyword(null,"skey","skey",323967048),self__.skey,new cljs.core.Keyword(null,"tabidx","tabidx",89766096),(0),new cljs.core.Keyword(null,"open","open",-1763596448),false], null);
});})(map__7900,map__7900__$1,opts,lkey,idkey,mkey,skey))
;

om_semantic.dropdown.t7901.prototype.om$core$IDisplayName$ = true;

om_semantic.dropdown.t7901.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__7900,map__7900__$1,opts,lkey,idkey,mkey,skey){
return (function (_){
var self__ = this;
var ___$1 = this;
return "Dropdown";
});})(map__7900,map__7900__$1,opts,lkey,idkey,mkey,skey))
;

om_semantic.dropdown.t7901.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__7900,map__7900__$1,opts,lkey,idkey,mkey,skey){
return (function (_7903){
var self__ = this;
var _7903__$1 = this;
return self__.meta7902;
});})(map__7900,map__7900__$1,opts,lkey,idkey,mkey,skey))
;

om_semantic.dropdown.t7901.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__7900,map__7900__$1,opts,lkey,idkey,mkey,skey){
return (function (_7903,meta7902__$1){
var self__ = this;
var _7903__$1 = this;
return (new om_semantic.dropdown.t7901(self__.owner,self__.data,self__.p__7895,self__.map__7900,self__.skey,self__.dropdown,self__.mkey,self__.opts,self__.idkey,self__.lkey,meta7902__$1));
});})(map__7900,map__7900__$1,opts,lkey,idkey,mkey,skey))
;

om_semantic.dropdown.t7901.cljs$lang$type = true;

om_semantic.dropdown.t7901.cljs$lang$ctorStr = "om-semantic.dropdown/t7901";

om_semantic.dropdown.t7901.cljs$lang$ctorPrWriter = ((function (map__7900,map__7900__$1,opts,lkey,idkey,mkey,skey){
return (function (this__4701__auto__,writer__4702__auto__,opt__4703__auto__){
return cljs.core._write.call(null,writer__4702__auto__,"om-semantic.dropdown/t7901");
});})(map__7900,map__7900__$1,opts,lkey,idkey,mkey,skey))
;

om_semantic.dropdown.__GT_t7901 = ((function (map__7900,map__7900__$1,opts,lkey,idkey,mkey,skey){
return (function om_semantic$dropdown$dropdown_$___GT_t7901(owner__$1,data__$1,p__7895__$1,map__7900__$2,skey__$1,dropdown__$1,mkey__$1,opts__$1,idkey__$1,lkey__$1,meta7902){
return (new om_semantic.dropdown.t7901(owner__$1,data__$1,p__7895__$1,map__7900__$2,skey__$1,dropdown__$1,mkey__$1,opts__$1,idkey__$1,lkey__$1,meta7902));
});})(map__7900,map__7900__$1,opts,lkey,idkey,mkey,skey))
;

}

return (new om_semantic.dropdown.t7901(owner,data,p__7895,map__7900__$1,skey,om_semantic$dropdown$dropdown,mkey,opts,idkey,lkey,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=dropdown.js.map