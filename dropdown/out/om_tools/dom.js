// Compiled by ClojureScript 0.0-3126 {}
goog.provide('om_tools.dom');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('clojure.string');
/**
 * Converts kebab-case to camelCase
 */
om_tools.dom.camel_case = (function om_tools$dom$camel_case(s){
return clojure.string.replace.call(null,s,/-(\w)/,cljs.core.comp.call(null,clojure.string.upper_case,cljs.core.second));
});
/**
 * Converts attributes that are kebab-case and should be camelCase
 */
om_tools.dom.opt_key_case = (function om_tools$dom$opt_key_case(attr){
if(cljs.core.truth_((function (){var or__4122__auto__ = (cljs.core.count.call(null,attr) < (5));
if(or__4122__auto__){
return or__4122__auto__;
} else {
var G__7922 = cljs.core.subs.call(null,attr,(0),(5));
switch (G__7922) {
case "data-":
case "aria-":
return true;

break;
default:
return false;

}
}
})())){
return attr;
} else {
return om_tools.dom.camel_case.call(null,attr);
}
});
/**
 * Converts aliased attributes
 */
om_tools.dom.opt_key_alias = (function om_tools$dom$opt_key_alias(opt){
var G__7925 = (((opt instanceof cljs.core.Keyword))?opt.fqn:null);
switch (G__7925) {
case "for":
return new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720);

break;
case "class":
return new cljs.core.Keyword(null,"className","className",-1983287057);

break;
default:
return opt;

}
});
/**
 * Returns potentially formatted name for DOM element attribute.
 * Converts kebab-case to camelCase.
 */
om_tools.dom.format_opt_key = (function om_tools$dom$format_opt_key(opt_key){
return cljs.core.keyword.call(null,om_tools.dom.opt_key_case.call(null,cljs.core.name.call(null,om_tools.dom.opt_key_alias.call(null,opt_key))));
});
/**
 * Returns potentially modified value for DOM element attribute.
 * Recursively formats map values (ie :style attribute)
 */
om_tools.dom.format_opt_val = (function om_tools$dom$format_opt_val(opt_val){
if(cljs.core.map_QMARK_.call(null,opt_val)){
return om_tools.dom.format_opts.call(null,opt_val);
} else {
return opt_val;

}
});
/**
 * Returns JavaScript object for React DOM attributes from opts map
 */
om_tools.dom.format_opts = (function om_tools$dom$format_opts(opts){
if(cljs.core.map_QMARK_.call(null,opts)){
return cljs.core.clj__GT_js.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__7929){
var vec__7930 = p__7929;
var k = cljs.core.nth.call(null,vec__7930,(0),null);
var v = cljs.core.nth.call(null,vec__7930,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_tools.dom.format_opt_key.call(null,k),om_tools.dom.format_opt_val.call(null,v)], null);
}),opts)));
} else {
return opts;
}
});
om_tools.dom.possible_coll_QMARK_ = (function om_tools$dom$possible_coll_QMARK_(form){
return (cljs.core.coll_QMARK_.call(null,form)) || ((form instanceof cljs.core.Symbol)) || (cljs.core.list_QMARK_.call(null,form));
});
om_tools.dom.valid_element_QMARK_ = (function om_tools$dom$valid_element_QMARK_(x){
return (function (){var or__4122__auto__ = React.isValidElement;
if(cljs.core.truth_(or__4122__auto__)){
return or__4122__auto__;
} else {
return React.isValidComponent;
}
})().call(null,x);
});
om_tools.dom.js_opts_QMARK_ = (function om_tools$dom$js_opts_QMARK_(x){
return (cljs.core.object_QMARK_.call(null,x)) && (!(om_tools.dom.valid_element_QMARK_.call(null,x)));
});
/**
 * Returns a vector of [opts children] for from first and second
 * argument given to DOM function
 */
om_tools.dom.element_args = (function om_tools$dom$element_args(opts,children){
if((opts == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,children], null);
} else {
if(cljs.core.map_QMARK_.call(null,opts)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_tools.dom.format_opts.call(null,opts),children], null);
} else {
if(om_tools.dom.js_opts_QMARK_.call(null,opts)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [opts,children], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.cons.call(null,opts,children)], null);

}
}
}
});
om_tools.dom.element = (function om_tools$dom$element(ctor,opts,children){
var vec__7932 = om_tools.dom.element_args.call(null,opts,children);
var opts__$1 = cljs.core.nth.call(null,vec__7932,(0),null);
var children__$1 = cljs.core.nth.call(null,vec__7932,(1),null);
return cljs.core.apply.call(null,ctor,cljs.core.flatten.call(null,cljs.core.cons.call(null,opts__$1,children__$1)));
});
/**
 * @param {...*} var_args
 */
om_tools.dom.a = (function() {
var om_tools$dom$a = null;
var om_tools$dom$a__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.a,null,null);
});
var om_tools$dom$a__2 = (function() { 
var G__7933__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.a,opts__7559__auto__,children__7560__auto__);
};
var G__7933 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__7934__i = 0, G__7934__a = new Array(arguments.length -  1);
while (G__7934__i < G__7934__a.length) {G__7934__a[G__7934__i] = arguments[G__7934__i + 1]; ++G__7934__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__7934__a,0);
} 
return G__7933__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__7933.cljs$lang$maxFixedArity = 1;
G__7933.cljs$lang$applyTo = (function (arglist__7935){
var opts__7559__auto__ = cljs.core.first(arglist__7935);
var children__7560__auto__ = cljs.core.rest(arglist__7935);
return G__7933__delegate(opts__7559__auto__,children__7560__auto__);
});
G__7933.cljs$core$IFn$_invoke$arity$variadic = G__7933__delegate;
return G__7933;
})()
;
om_tools$dom$a = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$a__0.call(this);
default:
var G__7936 = null;
if (arguments.length > 1) {
var G__7937__i = 0, G__7937__a = new Array(arguments.length -  1);
while (G__7937__i < G__7937__a.length) {G__7937__a[G__7937__i] = arguments[G__7937__i + 1]; ++G__7937__i;}
G__7936 = new cljs.core.IndexedSeq(G__7937__a,0);
}
return om_tools$dom$a__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__7936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$a.cljs$lang$maxFixedArity = 1;
om_tools$dom$a.cljs$lang$applyTo = om_tools$dom$a__2.cljs$lang$applyTo;
om_tools$dom$a.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$a__0;
om_tools$dom$a.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$a__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$a;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.abbr = (function() {
var om_tools$dom$abbr = null;
var om_tools$dom$abbr__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.abbr,null,null);
});
var om_tools$dom$abbr__2 = (function() { 
var G__7938__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.abbr,opts__7559__auto__,children__7560__auto__);
};
var G__7938 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__7939__i = 0, G__7939__a = new Array(arguments.length -  1);
while (G__7939__i < G__7939__a.length) {G__7939__a[G__7939__i] = arguments[G__7939__i + 1]; ++G__7939__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__7939__a,0);
} 
return G__7938__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__7938.cljs$lang$maxFixedArity = 1;
G__7938.cljs$lang$applyTo = (function (arglist__7940){
var opts__7559__auto__ = cljs.core.first(arglist__7940);
var children__7560__auto__ = cljs.core.rest(arglist__7940);
return G__7938__delegate(opts__7559__auto__,children__7560__auto__);
});
G__7938.cljs$core$IFn$_invoke$arity$variadic = G__7938__delegate;
return G__7938;
})()
;
om_tools$dom$abbr = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$abbr__0.call(this);
default:
var G__7941 = null;
if (arguments.length > 1) {
var G__7942__i = 0, G__7942__a = new Array(arguments.length -  1);
while (G__7942__i < G__7942__a.length) {G__7942__a[G__7942__i] = arguments[G__7942__i + 1]; ++G__7942__i;}
G__7941 = new cljs.core.IndexedSeq(G__7942__a,0);
}
return om_tools$dom$abbr__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__7941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$abbr.cljs$lang$maxFixedArity = 1;
om_tools$dom$abbr.cljs$lang$applyTo = om_tools$dom$abbr__2.cljs$lang$applyTo;
om_tools$dom$abbr.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$abbr__0;
om_tools$dom$abbr.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$abbr__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$abbr;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.address = (function() {
var om_tools$dom$address = null;
var om_tools$dom$address__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.address,null,null);
});
var om_tools$dom$address__2 = (function() { 
var G__7943__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.address,opts__7559__auto__,children__7560__auto__);
};
var G__7943 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__7944__i = 0, G__7944__a = new Array(arguments.length -  1);
while (G__7944__i < G__7944__a.length) {G__7944__a[G__7944__i] = arguments[G__7944__i + 1]; ++G__7944__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__7944__a,0);
} 
return G__7943__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__7943.cljs$lang$maxFixedArity = 1;
G__7943.cljs$lang$applyTo = (function (arglist__7945){
var opts__7559__auto__ = cljs.core.first(arglist__7945);
var children__7560__auto__ = cljs.core.rest(arglist__7945);
return G__7943__delegate(opts__7559__auto__,children__7560__auto__);
});
G__7943.cljs$core$IFn$_invoke$arity$variadic = G__7943__delegate;
return G__7943;
})()
;
om_tools$dom$address = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$address__0.call(this);
default:
var G__7946 = null;
if (arguments.length > 1) {
var G__7947__i = 0, G__7947__a = new Array(arguments.length -  1);
while (G__7947__i < G__7947__a.length) {G__7947__a[G__7947__i] = arguments[G__7947__i + 1]; ++G__7947__i;}
G__7946 = new cljs.core.IndexedSeq(G__7947__a,0);
}
return om_tools$dom$address__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__7946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$address.cljs$lang$maxFixedArity = 1;
om_tools$dom$address.cljs$lang$applyTo = om_tools$dom$address__2.cljs$lang$applyTo;
om_tools$dom$address.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$address__0;
om_tools$dom$address.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$address__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$address;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.area = (function() {
var om_tools$dom$area = null;
var om_tools$dom$area__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.area,null,null);
});
var om_tools$dom$area__2 = (function() { 
var G__7948__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.area,opts__7559__auto__,children__7560__auto__);
};
var G__7948 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__7949__i = 0, G__7949__a = new Array(arguments.length -  1);
while (G__7949__i < G__7949__a.length) {G__7949__a[G__7949__i] = arguments[G__7949__i + 1]; ++G__7949__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__7949__a,0);
} 
return G__7948__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__7948.cljs$lang$maxFixedArity = 1;
G__7948.cljs$lang$applyTo = (function (arglist__7950){
var opts__7559__auto__ = cljs.core.first(arglist__7950);
var children__7560__auto__ = cljs.core.rest(arglist__7950);
return G__7948__delegate(opts__7559__auto__,children__7560__auto__);
});
G__7948.cljs$core$IFn$_invoke$arity$variadic = G__7948__delegate;
return G__7948;
})()
;
om_tools$dom$area = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$area__0.call(this);
default:
var G__7951 = null;
if (arguments.length > 1) {
var G__7952__i = 0, G__7952__a = new Array(arguments.length -  1);
while (G__7952__i < G__7952__a.length) {G__7952__a[G__7952__i] = arguments[G__7952__i + 1]; ++G__7952__i;}
G__7951 = new cljs.core.IndexedSeq(G__7952__a,0);
}
return om_tools$dom$area__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__7951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$area.cljs$lang$maxFixedArity = 1;
om_tools$dom$area.cljs$lang$applyTo = om_tools$dom$area__2.cljs$lang$applyTo;
om_tools$dom$area.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$area__0;
om_tools$dom$area.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$area__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$area;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.article = (function() {
var om_tools$dom$article = null;
var om_tools$dom$article__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.article,null,null);
});
var om_tools$dom$article__2 = (function() { 
var G__7953__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.article,opts__7559__auto__,children__7560__auto__);
};
var G__7953 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__7954__i = 0, G__7954__a = new Array(arguments.length -  1);
while (G__7954__i < G__7954__a.length) {G__7954__a[G__7954__i] = arguments[G__7954__i + 1]; ++G__7954__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__7954__a,0);
} 
return G__7953__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__7953.cljs$lang$maxFixedArity = 1;
G__7953.cljs$lang$applyTo = (function (arglist__7955){
var opts__7559__auto__ = cljs.core.first(arglist__7955);
var children__7560__auto__ = cljs.core.rest(arglist__7955);
return G__7953__delegate(opts__7559__auto__,children__7560__auto__);
});
G__7953.cljs$core$IFn$_invoke$arity$variadic = G__7953__delegate;
return G__7953;
})()
;
om_tools$dom$article = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$article__0.call(this);
default:
var G__7956 = null;
if (arguments.length > 1) {
var G__7957__i = 0, G__7957__a = new Array(arguments.length -  1);
while (G__7957__i < G__7957__a.length) {G__7957__a[G__7957__i] = arguments[G__7957__i + 1]; ++G__7957__i;}
G__7956 = new cljs.core.IndexedSeq(G__7957__a,0);
}
return om_tools$dom$article__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__7956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$article.cljs$lang$maxFixedArity = 1;
om_tools$dom$article.cljs$lang$applyTo = om_tools$dom$article__2.cljs$lang$applyTo;
om_tools$dom$article.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$article__0;
om_tools$dom$article.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$article__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$article;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.aside = (function() {
var om_tools$dom$aside = null;
var om_tools$dom$aside__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.aside,null,null);
});
var om_tools$dom$aside__2 = (function() { 
var G__7958__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.aside,opts__7559__auto__,children__7560__auto__);
};
var G__7958 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__7959__i = 0, G__7959__a = new Array(arguments.length -  1);
while (G__7959__i < G__7959__a.length) {G__7959__a[G__7959__i] = arguments[G__7959__i + 1]; ++G__7959__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__7959__a,0);
} 
return G__7958__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__7958.cljs$lang$maxFixedArity = 1;
G__7958.cljs$lang$applyTo = (function (arglist__7960){
var opts__7559__auto__ = cljs.core.first(arglist__7960);
var children__7560__auto__ = cljs.core.rest(arglist__7960);
return G__7958__delegate(opts__7559__auto__,children__7560__auto__);
});
G__7958.cljs$core$IFn$_invoke$arity$variadic = G__7958__delegate;
return G__7958;
})()
;
om_tools$dom$aside = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$aside__0.call(this);
default:
var G__7961 = null;
if (arguments.length > 1) {
var G__7962__i = 0, G__7962__a = new Array(arguments.length -  1);
while (G__7962__i < G__7962__a.length) {G__7962__a[G__7962__i] = arguments[G__7962__i + 1]; ++G__7962__i;}
G__7961 = new cljs.core.IndexedSeq(G__7962__a,0);
}
return om_tools$dom$aside__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__7961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$aside.cljs$lang$maxFixedArity = 1;
om_tools$dom$aside.cljs$lang$applyTo = om_tools$dom$aside__2.cljs$lang$applyTo;
om_tools$dom$aside.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$aside__0;
om_tools$dom$aside.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$aside__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$aside;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.audio = (function() {
var om_tools$dom$audio = null;
var om_tools$dom$audio__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.audio,null,null);
});
var om_tools$dom$audio__2 = (function() { 
var G__7963__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.audio,opts__7559__auto__,children__7560__auto__);
};
var G__7963 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__7964__i = 0, G__7964__a = new Array(arguments.length -  1);
while (G__7964__i < G__7964__a.length) {G__7964__a[G__7964__i] = arguments[G__7964__i + 1]; ++G__7964__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__7964__a,0);
} 
return G__7963__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__7963.cljs$lang$maxFixedArity = 1;
G__7963.cljs$lang$applyTo = (function (arglist__7965){
var opts__7559__auto__ = cljs.core.first(arglist__7965);
var children__7560__auto__ = cljs.core.rest(arglist__7965);
return G__7963__delegate(opts__7559__auto__,children__7560__auto__);
});
G__7963.cljs$core$IFn$_invoke$arity$variadic = G__7963__delegate;
return G__7963;
})()
;
om_tools$dom$audio = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$audio__0.call(this);
default:
var G__7966 = null;
if (arguments.length > 1) {
var G__7967__i = 0, G__7967__a = new Array(arguments.length -  1);
while (G__7967__i < G__7967__a.length) {G__7967__a[G__7967__i] = arguments[G__7967__i + 1]; ++G__7967__i;}
G__7966 = new cljs.core.IndexedSeq(G__7967__a,0);
}
return om_tools$dom$audio__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__7966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$audio.cljs$lang$maxFixedArity = 1;
om_tools$dom$audio.cljs$lang$applyTo = om_tools$dom$audio__2.cljs$lang$applyTo;
om_tools$dom$audio.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$audio__0;
om_tools$dom$audio.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$audio__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$audio;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.b = (function() {
var om_tools$dom$b = null;
var om_tools$dom$b__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.b,null,null);
});
var om_tools$dom$b__2 = (function() { 
var G__7968__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.b,opts__7559__auto__,children__7560__auto__);
};
var G__7968 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__7969__i = 0, G__7969__a = new Array(arguments.length -  1);
while (G__7969__i < G__7969__a.length) {G__7969__a[G__7969__i] = arguments[G__7969__i + 1]; ++G__7969__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__7969__a,0);
} 
return G__7968__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__7968.cljs$lang$maxFixedArity = 1;
G__7968.cljs$lang$applyTo = (function (arglist__7970){
var opts__7559__auto__ = cljs.core.first(arglist__7970);
var children__7560__auto__ = cljs.core.rest(arglist__7970);
return G__7968__delegate(opts__7559__auto__,children__7560__auto__);
});
G__7968.cljs$core$IFn$_invoke$arity$variadic = G__7968__delegate;
return G__7968;
})()
;
om_tools$dom$b = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$b__0.call(this);
default:
var G__7971 = null;
if (arguments.length > 1) {
var G__7972__i = 0, G__7972__a = new Array(arguments.length -  1);
while (G__7972__i < G__7972__a.length) {G__7972__a[G__7972__i] = arguments[G__7972__i + 1]; ++G__7972__i;}
G__7971 = new cljs.core.IndexedSeq(G__7972__a,0);
}
return om_tools$dom$b__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__7971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$b.cljs$lang$maxFixedArity = 1;
om_tools$dom$b.cljs$lang$applyTo = om_tools$dom$b__2.cljs$lang$applyTo;
om_tools$dom$b.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$b__0;
om_tools$dom$b.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$b__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$b;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.base = (function() {
var om_tools$dom$base = null;
var om_tools$dom$base__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.base,null,null);
});
var om_tools$dom$base__2 = (function() { 
var G__7973__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.base,opts__7559__auto__,children__7560__auto__);
};
var G__7973 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__7974__i = 0, G__7974__a = new Array(arguments.length -  1);
while (G__7974__i < G__7974__a.length) {G__7974__a[G__7974__i] = arguments[G__7974__i + 1]; ++G__7974__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__7974__a,0);
} 
return G__7973__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__7973.cljs$lang$maxFixedArity = 1;
G__7973.cljs$lang$applyTo = (function (arglist__7975){
var opts__7559__auto__ = cljs.core.first(arglist__7975);
var children__7560__auto__ = cljs.core.rest(arglist__7975);
return G__7973__delegate(opts__7559__auto__,children__7560__auto__);
});
G__7973.cljs$core$IFn$_invoke$arity$variadic = G__7973__delegate;
return G__7973;
})()
;
om_tools$dom$base = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$base__0.call(this);
default:
var G__7976 = null;
if (arguments.length > 1) {
var G__7977__i = 0, G__7977__a = new Array(arguments.length -  1);
while (G__7977__i < G__7977__a.length) {G__7977__a[G__7977__i] = arguments[G__7977__i + 1]; ++G__7977__i;}
G__7976 = new cljs.core.IndexedSeq(G__7977__a,0);
}
return om_tools$dom$base__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__7976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$base.cljs$lang$maxFixedArity = 1;
om_tools$dom$base.cljs$lang$applyTo = om_tools$dom$base__2.cljs$lang$applyTo;
om_tools$dom$base.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$base__0;
om_tools$dom$base.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$base__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$base;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.bdi = (function() {
var om_tools$dom$bdi = null;
var om_tools$dom$bdi__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.bdi,null,null);
});
var om_tools$dom$bdi__2 = (function() { 
var G__7978__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.bdi,opts__7559__auto__,children__7560__auto__);
};
var G__7978 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__7979__i = 0, G__7979__a = new Array(arguments.length -  1);
while (G__7979__i < G__7979__a.length) {G__7979__a[G__7979__i] = arguments[G__7979__i + 1]; ++G__7979__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__7979__a,0);
} 
return G__7978__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__7978.cljs$lang$maxFixedArity = 1;
G__7978.cljs$lang$applyTo = (function (arglist__7980){
var opts__7559__auto__ = cljs.core.first(arglist__7980);
var children__7560__auto__ = cljs.core.rest(arglist__7980);
return G__7978__delegate(opts__7559__auto__,children__7560__auto__);
});
G__7978.cljs$core$IFn$_invoke$arity$variadic = G__7978__delegate;
return G__7978;
})()
;
om_tools$dom$bdi = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$bdi__0.call(this);
default:
var G__7981 = null;
if (arguments.length > 1) {
var G__7982__i = 0, G__7982__a = new Array(arguments.length -  1);
while (G__7982__i < G__7982__a.length) {G__7982__a[G__7982__i] = arguments[G__7982__i + 1]; ++G__7982__i;}
G__7981 = new cljs.core.IndexedSeq(G__7982__a,0);
}
return om_tools$dom$bdi__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__7981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$bdi.cljs$lang$maxFixedArity = 1;
om_tools$dom$bdi.cljs$lang$applyTo = om_tools$dom$bdi__2.cljs$lang$applyTo;
om_tools$dom$bdi.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$bdi__0;
om_tools$dom$bdi.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$bdi__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$bdi;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.bdo = (function() {
var om_tools$dom$bdo = null;
var om_tools$dom$bdo__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.bdo,null,null);
});
var om_tools$dom$bdo__2 = (function() { 
var G__7983__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.bdo,opts__7559__auto__,children__7560__auto__);
};
var G__7983 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__7984__i = 0, G__7984__a = new Array(arguments.length -  1);
while (G__7984__i < G__7984__a.length) {G__7984__a[G__7984__i] = arguments[G__7984__i + 1]; ++G__7984__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__7984__a,0);
} 
return G__7983__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__7983.cljs$lang$maxFixedArity = 1;
G__7983.cljs$lang$applyTo = (function (arglist__7985){
var opts__7559__auto__ = cljs.core.first(arglist__7985);
var children__7560__auto__ = cljs.core.rest(arglist__7985);
return G__7983__delegate(opts__7559__auto__,children__7560__auto__);
});
G__7983.cljs$core$IFn$_invoke$arity$variadic = G__7983__delegate;
return G__7983;
})()
;
om_tools$dom$bdo = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$bdo__0.call(this);
default:
var G__7986 = null;
if (arguments.length > 1) {
var G__7987__i = 0, G__7987__a = new Array(arguments.length -  1);
while (G__7987__i < G__7987__a.length) {G__7987__a[G__7987__i] = arguments[G__7987__i + 1]; ++G__7987__i;}
G__7986 = new cljs.core.IndexedSeq(G__7987__a,0);
}
return om_tools$dom$bdo__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__7986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$bdo.cljs$lang$maxFixedArity = 1;
om_tools$dom$bdo.cljs$lang$applyTo = om_tools$dom$bdo__2.cljs$lang$applyTo;
om_tools$dom$bdo.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$bdo__0;
om_tools$dom$bdo.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$bdo__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$bdo;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.big = (function() {
var om_tools$dom$big = null;
var om_tools$dom$big__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.big,null,null);
});
var om_tools$dom$big__2 = (function() { 
var G__7988__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.big,opts__7559__auto__,children__7560__auto__);
};
var G__7988 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__7989__i = 0, G__7989__a = new Array(arguments.length -  1);
while (G__7989__i < G__7989__a.length) {G__7989__a[G__7989__i] = arguments[G__7989__i + 1]; ++G__7989__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__7989__a,0);
} 
return G__7988__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__7988.cljs$lang$maxFixedArity = 1;
G__7988.cljs$lang$applyTo = (function (arglist__7990){
var opts__7559__auto__ = cljs.core.first(arglist__7990);
var children__7560__auto__ = cljs.core.rest(arglist__7990);
return G__7988__delegate(opts__7559__auto__,children__7560__auto__);
});
G__7988.cljs$core$IFn$_invoke$arity$variadic = G__7988__delegate;
return G__7988;
})()
;
om_tools$dom$big = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$big__0.call(this);
default:
var G__7991 = null;
if (arguments.length > 1) {
var G__7992__i = 0, G__7992__a = new Array(arguments.length -  1);
while (G__7992__i < G__7992__a.length) {G__7992__a[G__7992__i] = arguments[G__7992__i + 1]; ++G__7992__i;}
G__7991 = new cljs.core.IndexedSeq(G__7992__a,0);
}
return om_tools$dom$big__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__7991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$big.cljs$lang$maxFixedArity = 1;
om_tools$dom$big.cljs$lang$applyTo = om_tools$dom$big__2.cljs$lang$applyTo;
om_tools$dom$big.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$big__0;
om_tools$dom$big.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$big__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$big;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.blockquote = (function() {
var om_tools$dom$blockquote = null;
var om_tools$dom$blockquote__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.blockquote,null,null);
});
var om_tools$dom$blockquote__2 = (function() { 
var G__7993__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.blockquote,opts__7559__auto__,children__7560__auto__);
};
var G__7993 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__7994__i = 0, G__7994__a = new Array(arguments.length -  1);
while (G__7994__i < G__7994__a.length) {G__7994__a[G__7994__i] = arguments[G__7994__i + 1]; ++G__7994__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__7994__a,0);
} 
return G__7993__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__7993.cljs$lang$maxFixedArity = 1;
G__7993.cljs$lang$applyTo = (function (arglist__7995){
var opts__7559__auto__ = cljs.core.first(arglist__7995);
var children__7560__auto__ = cljs.core.rest(arglist__7995);
return G__7993__delegate(opts__7559__auto__,children__7560__auto__);
});
G__7993.cljs$core$IFn$_invoke$arity$variadic = G__7993__delegate;
return G__7993;
})()
;
om_tools$dom$blockquote = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$blockquote__0.call(this);
default:
var G__7996 = null;
if (arguments.length > 1) {
var G__7997__i = 0, G__7997__a = new Array(arguments.length -  1);
while (G__7997__i < G__7997__a.length) {G__7997__a[G__7997__i] = arguments[G__7997__i + 1]; ++G__7997__i;}
G__7996 = new cljs.core.IndexedSeq(G__7997__a,0);
}
return om_tools$dom$blockquote__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__7996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$blockquote.cljs$lang$maxFixedArity = 1;
om_tools$dom$blockquote.cljs$lang$applyTo = om_tools$dom$blockquote__2.cljs$lang$applyTo;
om_tools$dom$blockquote.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$blockquote__0;
om_tools$dom$blockquote.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$blockquote__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$blockquote;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.body = (function() {
var om_tools$dom$body = null;
var om_tools$dom$body__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.body,null,null);
});
var om_tools$dom$body__2 = (function() { 
var G__7998__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.body,opts__7559__auto__,children__7560__auto__);
};
var G__7998 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__7999__i = 0, G__7999__a = new Array(arguments.length -  1);
while (G__7999__i < G__7999__a.length) {G__7999__a[G__7999__i] = arguments[G__7999__i + 1]; ++G__7999__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__7999__a,0);
} 
return G__7998__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__7998.cljs$lang$maxFixedArity = 1;
G__7998.cljs$lang$applyTo = (function (arglist__8000){
var opts__7559__auto__ = cljs.core.first(arglist__8000);
var children__7560__auto__ = cljs.core.rest(arglist__8000);
return G__7998__delegate(opts__7559__auto__,children__7560__auto__);
});
G__7998.cljs$core$IFn$_invoke$arity$variadic = G__7998__delegate;
return G__7998;
})()
;
om_tools$dom$body = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$body__0.call(this);
default:
var G__8001 = null;
if (arguments.length > 1) {
var G__8002__i = 0, G__8002__a = new Array(arguments.length -  1);
while (G__8002__i < G__8002__a.length) {G__8002__a[G__8002__i] = arguments[G__8002__i + 1]; ++G__8002__i;}
G__8001 = new cljs.core.IndexedSeq(G__8002__a,0);
}
return om_tools$dom$body__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$body.cljs$lang$maxFixedArity = 1;
om_tools$dom$body.cljs$lang$applyTo = om_tools$dom$body__2.cljs$lang$applyTo;
om_tools$dom$body.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$body__0;
om_tools$dom$body.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$body__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$body;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.br = (function() {
var om_tools$dom$br = null;
var om_tools$dom$br__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.br,null,null);
});
var om_tools$dom$br__2 = (function() { 
var G__8003__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.br,opts__7559__auto__,children__7560__auto__);
};
var G__8003 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8004__i = 0, G__8004__a = new Array(arguments.length -  1);
while (G__8004__i < G__8004__a.length) {G__8004__a[G__8004__i] = arguments[G__8004__i + 1]; ++G__8004__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8004__a,0);
} 
return G__8003__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8003.cljs$lang$maxFixedArity = 1;
G__8003.cljs$lang$applyTo = (function (arglist__8005){
var opts__7559__auto__ = cljs.core.first(arglist__8005);
var children__7560__auto__ = cljs.core.rest(arglist__8005);
return G__8003__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8003.cljs$core$IFn$_invoke$arity$variadic = G__8003__delegate;
return G__8003;
})()
;
om_tools$dom$br = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$br__0.call(this);
default:
var G__8006 = null;
if (arguments.length > 1) {
var G__8007__i = 0, G__8007__a = new Array(arguments.length -  1);
while (G__8007__i < G__8007__a.length) {G__8007__a[G__8007__i] = arguments[G__8007__i + 1]; ++G__8007__i;}
G__8006 = new cljs.core.IndexedSeq(G__8007__a,0);
}
return om_tools$dom$br__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$br.cljs$lang$maxFixedArity = 1;
om_tools$dom$br.cljs$lang$applyTo = om_tools$dom$br__2.cljs$lang$applyTo;
om_tools$dom$br.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$br__0;
om_tools$dom$br.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$br__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$br;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.button = (function() {
var om_tools$dom$button = null;
var om_tools$dom$button__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.button,null,null);
});
var om_tools$dom$button__2 = (function() { 
var G__8008__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.button,opts__7559__auto__,children__7560__auto__);
};
var G__8008 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8009__i = 0, G__8009__a = new Array(arguments.length -  1);
while (G__8009__i < G__8009__a.length) {G__8009__a[G__8009__i] = arguments[G__8009__i + 1]; ++G__8009__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8009__a,0);
} 
return G__8008__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8008.cljs$lang$maxFixedArity = 1;
G__8008.cljs$lang$applyTo = (function (arglist__8010){
var opts__7559__auto__ = cljs.core.first(arglist__8010);
var children__7560__auto__ = cljs.core.rest(arglist__8010);
return G__8008__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8008.cljs$core$IFn$_invoke$arity$variadic = G__8008__delegate;
return G__8008;
})()
;
om_tools$dom$button = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$button__0.call(this);
default:
var G__8011 = null;
if (arguments.length > 1) {
var G__8012__i = 0, G__8012__a = new Array(arguments.length -  1);
while (G__8012__i < G__8012__a.length) {G__8012__a[G__8012__i] = arguments[G__8012__i + 1]; ++G__8012__i;}
G__8011 = new cljs.core.IndexedSeq(G__8012__a,0);
}
return om_tools$dom$button__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$button.cljs$lang$maxFixedArity = 1;
om_tools$dom$button.cljs$lang$applyTo = om_tools$dom$button__2.cljs$lang$applyTo;
om_tools$dom$button.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$button__0;
om_tools$dom$button.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$button__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$button;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.canvas = (function() {
var om_tools$dom$canvas = null;
var om_tools$dom$canvas__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.canvas,null,null);
});
var om_tools$dom$canvas__2 = (function() { 
var G__8013__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.canvas,opts__7559__auto__,children__7560__auto__);
};
var G__8013 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8014__i = 0, G__8014__a = new Array(arguments.length -  1);
while (G__8014__i < G__8014__a.length) {G__8014__a[G__8014__i] = arguments[G__8014__i + 1]; ++G__8014__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8014__a,0);
} 
return G__8013__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8013.cljs$lang$maxFixedArity = 1;
G__8013.cljs$lang$applyTo = (function (arglist__8015){
var opts__7559__auto__ = cljs.core.first(arglist__8015);
var children__7560__auto__ = cljs.core.rest(arglist__8015);
return G__8013__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8013.cljs$core$IFn$_invoke$arity$variadic = G__8013__delegate;
return G__8013;
})()
;
om_tools$dom$canvas = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$canvas__0.call(this);
default:
var G__8016 = null;
if (arguments.length > 1) {
var G__8017__i = 0, G__8017__a = new Array(arguments.length -  1);
while (G__8017__i < G__8017__a.length) {G__8017__a[G__8017__i] = arguments[G__8017__i + 1]; ++G__8017__i;}
G__8016 = new cljs.core.IndexedSeq(G__8017__a,0);
}
return om_tools$dom$canvas__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$canvas.cljs$lang$maxFixedArity = 1;
om_tools$dom$canvas.cljs$lang$applyTo = om_tools$dom$canvas__2.cljs$lang$applyTo;
om_tools$dom$canvas.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$canvas__0;
om_tools$dom$canvas.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$canvas__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$canvas;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.caption = (function() {
var om_tools$dom$caption = null;
var om_tools$dom$caption__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.caption,null,null);
});
var om_tools$dom$caption__2 = (function() { 
var G__8018__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.caption,opts__7559__auto__,children__7560__auto__);
};
var G__8018 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8019__i = 0, G__8019__a = new Array(arguments.length -  1);
while (G__8019__i < G__8019__a.length) {G__8019__a[G__8019__i] = arguments[G__8019__i + 1]; ++G__8019__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8019__a,0);
} 
return G__8018__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8018.cljs$lang$maxFixedArity = 1;
G__8018.cljs$lang$applyTo = (function (arglist__8020){
var opts__7559__auto__ = cljs.core.first(arglist__8020);
var children__7560__auto__ = cljs.core.rest(arglist__8020);
return G__8018__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8018.cljs$core$IFn$_invoke$arity$variadic = G__8018__delegate;
return G__8018;
})()
;
om_tools$dom$caption = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$caption__0.call(this);
default:
var G__8021 = null;
if (arguments.length > 1) {
var G__8022__i = 0, G__8022__a = new Array(arguments.length -  1);
while (G__8022__i < G__8022__a.length) {G__8022__a[G__8022__i] = arguments[G__8022__i + 1]; ++G__8022__i;}
G__8021 = new cljs.core.IndexedSeq(G__8022__a,0);
}
return om_tools$dom$caption__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$caption.cljs$lang$maxFixedArity = 1;
om_tools$dom$caption.cljs$lang$applyTo = om_tools$dom$caption__2.cljs$lang$applyTo;
om_tools$dom$caption.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$caption__0;
om_tools$dom$caption.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$caption__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$caption;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.cite = (function() {
var om_tools$dom$cite = null;
var om_tools$dom$cite__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.cite,null,null);
});
var om_tools$dom$cite__2 = (function() { 
var G__8023__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.cite,opts__7559__auto__,children__7560__auto__);
};
var G__8023 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8024__i = 0, G__8024__a = new Array(arguments.length -  1);
while (G__8024__i < G__8024__a.length) {G__8024__a[G__8024__i] = arguments[G__8024__i + 1]; ++G__8024__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8024__a,0);
} 
return G__8023__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8023.cljs$lang$maxFixedArity = 1;
G__8023.cljs$lang$applyTo = (function (arglist__8025){
var opts__7559__auto__ = cljs.core.first(arglist__8025);
var children__7560__auto__ = cljs.core.rest(arglist__8025);
return G__8023__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8023.cljs$core$IFn$_invoke$arity$variadic = G__8023__delegate;
return G__8023;
})()
;
om_tools$dom$cite = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$cite__0.call(this);
default:
var G__8026 = null;
if (arguments.length > 1) {
var G__8027__i = 0, G__8027__a = new Array(arguments.length -  1);
while (G__8027__i < G__8027__a.length) {G__8027__a[G__8027__i] = arguments[G__8027__i + 1]; ++G__8027__i;}
G__8026 = new cljs.core.IndexedSeq(G__8027__a,0);
}
return om_tools$dom$cite__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$cite.cljs$lang$maxFixedArity = 1;
om_tools$dom$cite.cljs$lang$applyTo = om_tools$dom$cite__2.cljs$lang$applyTo;
om_tools$dom$cite.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$cite__0;
om_tools$dom$cite.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$cite__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$cite;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.code = (function() {
var om_tools$dom$code = null;
var om_tools$dom$code__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.code,null,null);
});
var om_tools$dom$code__2 = (function() { 
var G__8028__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.code,opts__7559__auto__,children__7560__auto__);
};
var G__8028 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8029__i = 0, G__8029__a = new Array(arguments.length -  1);
while (G__8029__i < G__8029__a.length) {G__8029__a[G__8029__i] = arguments[G__8029__i + 1]; ++G__8029__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8029__a,0);
} 
return G__8028__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8028.cljs$lang$maxFixedArity = 1;
G__8028.cljs$lang$applyTo = (function (arglist__8030){
var opts__7559__auto__ = cljs.core.first(arglist__8030);
var children__7560__auto__ = cljs.core.rest(arglist__8030);
return G__8028__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8028.cljs$core$IFn$_invoke$arity$variadic = G__8028__delegate;
return G__8028;
})()
;
om_tools$dom$code = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$code__0.call(this);
default:
var G__8031 = null;
if (arguments.length > 1) {
var G__8032__i = 0, G__8032__a = new Array(arguments.length -  1);
while (G__8032__i < G__8032__a.length) {G__8032__a[G__8032__i] = arguments[G__8032__i + 1]; ++G__8032__i;}
G__8031 = new cljs.core.IndexedSeq(G__8032__a,0);
}
return om_tools$dom$code__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$code.cljs$lang$maxFixedArity = 1;
om_tools$dom$code.cljs$lang$applyTo = om_tools$dom$code__2.cljs$lang$applyTo;
om_tools$dom$code.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$code__0;
om_tools$dom$code.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$code__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$code;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.col = (function() {
var om_tools$dom$col = null;
var om_tools$dom$col__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.col,null,null);
});
var om_tools$dom$col__2 = (function() { 
var G__8033__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.col,opts__7559__auto__,children__7560__auto__);
};
var G__8033 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8034__i = 0, G__8034__a = new Array(arguments.length -  1);
while (G__8034__i < G__8034__a.length) {G__8034__a[G__8034__i] = arguments[G__8034__i + 1]; ++G__8034__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8034__a,0);
} 
return G__8033__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8033.cljs$lang$maxFixedArity = 1;
G__8033.cljs$lang$applyTo = (function (arglist__8035){
var opts__7559__auto__ = cljs.core.first(arglist__8035);
var children__7560__auto__ = cljs.core.rest(arglist__8035);
return G__8033__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8033.cljs$core$IFn$_invoke$arity$variadic = G__8033__delegate;
return G__8033;
})()
;
om_tools$dom$col = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$col__0.call(this);
default:
var G__8036 = null;
if (arguments.length > 1) {
var G__8037__i = 0, G__8037__a = new Array(arguments.length -  1);
while (G__8037__i < G__8037__a.length) {G__8037__a[G__8037__i] = arguments[G__8037__i + 1]; ++G__8037__i;}
G__8036 = new cljs.core.IndexedSeq(G__8037__a,0);
}
return om_tools$dom$col__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$col.cljs$lang$maxFixedArity = 1;
om_tools$dom$col.cljs$lang$applyTo = om_tools$dom$col__2.cljs$lang$applyTo;
om_tools$dom$col.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$col__0;
om_tools$dom$col.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$col__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$col;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.colgroup = (function() {
var om_tools$dom$colgroup = null;
var om_tools$dom$colgroup__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.colgroup,null,null);
});
var om_tools$dom$colgroup__2 = (function() { 
var G__8038__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.colgroup,opts__7559__auto__,children__7560__auto__);
};
var G__8038 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8039__i = 0, G__8039__a = new Array(arguments.length -  1);
while (G__8039__i < G__8039__a.length) {G__8039__a[G__8039__i] = arguments[G__8039__i + 1]; ++G__8039__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8039__a,0);
} 
return G__8038__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8038.cljs$lang$maxFixedArity = 1;
G__8038.cljs$lang$applyTo = (function (arglist__8040){
var opts__7559__auto__ = cljs.core.first(arglist__8040);
var children__7560__auto__ = cljs.core.rest(arglist__8040);
return G__8038__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8038.cljs$core$IFn$_invoke$arity$variadic = G__8038__delegate;
return G__8038;
})()
;
om_tools$dom$colgroup = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$colgroup__0.call(this);
default:
var G__8041 = null;
if (arguments.length > 1) {
var G__8042__i = 0, G__8042__a = new Array(arguments.length -  1);
while (G__8042__i < G__8042__a.length) {G__8042__a[G__8042__i] = arguments[G__8042__i + 1]; ++G__8042__i;}
G__8041 = new cljs.core.IndexedSeq(G__8042__a,0);
}
return om_tools$dom$colgroup__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$colgroup.cljs$lang$maxFixedArity = 1;
om_tools$dom$colgroup.cljs$lang$applyTo = om_tools$dom$colgroup__2.cljs$lang$applyTo;
om_tools$dom$colgroup.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$colgroup__0;
om_tools$dom$colgroup.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$colgroup__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$colgroup;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.data = (function() {
var om_tools$dom$data = null;
var om_tools$dom$data__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.data,null,null);
});
var om_tools$dom$data__2 = (function() { 
var G__8043__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.data,opts__7559__auto__,children__7560__auto__);
};
var G__8043 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8044__i = 0, G__8044__a = new Array(arguments.length -  1);
while (G__8044__i < G__8044__a.length) {G__8044__a[G__8044__i] = arguments[G__8044__i + 1]; ++G__8044__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8044__a,0);
} 
return G__8043__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8043.cljs$lang$maxFixedArity = 1;
G__8043.cljs$lang$applyTo = (function (arglist__8045){
var opts__7559__auto__ = cljs.core.first(arglist__8045);
var children__7560__auto__ = cljs.core.rest(arglist__8045);
return G__8043__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8043.cljs$core$IFn$_invoke$arity$variadic = G__8043__delegate;
return G__8043;
})()
;
om_tools$dom$data = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$data__0.call(this);
default:
var G__8046 = null;
if (arguments.length > 1) {
var G__8047__i = 0, G__8047__a = new Array(arguments.length -  1);
while (G__8047__i < G__8047__a.length) {G__8047__a[G__8047__i] = arguments[G__8047__i + 1]; ++G__8047__i;}
G__8046 = new cljs.core.IndexedSeq(G__8047__a,0);
}
return om_tools$dom$data__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$data.cljs$lang$maxFixedArity = 1;
om_tools$dom$data.cljs$lang$applyTo = om_tools$dom$data__2.cljs$lang$applyTo;
om_tools$dom$data.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$data__0;
om_tools$dom$data.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$data__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$data;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.datalist = (function() {
var om_tools$dom$datalist = null;
var om_tools$dom$datalist__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.datalist,null,null);
});
var om_tools$dom$datalist__2 = (function() { 
var G__8048__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.datalist,opts__7559__auto__,children__7560__auto__);
};
var G__8048 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8049__i = 0, G__8049__a = new Array(arguments.length -  1);
while (G__8049__i < G__8049__a.length) {G__8049__a[G__8049__i] = arguments[G__8049__i + 1]; ++G__8049__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8049__a,0);
} 
return G__8048__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8048.cljs$lang$maxFixedArity = 1;
G__8048.cljs$lang$applyTo = (function (arglist__8050){
var opts__7559__auto__ = cljs.core.first(arglist__8050);
var children__7560__auto__ = cljs.core.rest(arglist__8050);
return G__8048__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8048.cljs$core$IFn$_invoke$arity$variadic = G__8048__delegate;
return G__8048;
})()
;
om_tools$dom$datalist = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$datalist__0.call(this);
default:
var G__8051 = null;
if (arguments.length > 1) {
var G__8052__i = 0, G__8052__a = new Array(arguments.length -  1);
while (G__8052__i < G__8052__a.length) {G__8052__a[G__8052__i] = arguments[G__8052__i + 1]; ++G__8052__i;}
G__8051 = new cljs.core.IndexedSeq(G__8052__a,0);
}
return om_tools$dom$datalist__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$datalist.cljs$lang$maxFixedArity = 1;
om_tools$dom$datalist.cljs$lang$applyTo = om_tools$dom$datalist__2.cljs$lang$applyTo;
om_tools$dom$datalist.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$datalist__0;
om_tools$dom$datalist.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$datalist__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$datalist;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.dd = (function() {
var om_tools$dom$dd = null;
var om_tools$dom$dd__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dd,null,null);
});
var om_tools$dom$dd__2 = (function() { 
var G__8053__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.dd,opts__7559__auto__,children__7560__auto__);
};
var G__8053 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8054__i = 0, G__8054__a = new Array(arguments.length -  1);
while (G__8054__i < G__8054__a.length) {G__8054__a[G__8054__i] = arguments[G__8054__i + 1]; ++G__8054__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8054__a,0);
} 
return G__8053__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8053.cljs$lang$maxFixedArity = 1;
G__8053.cljs$lang$applyTo = (function (arglist__8055){
var opts__7559__auto__ = cljs.core.first(arglist__8055);
var children__7560__auto__ = cljs.core.rest(arglist__8055);
return G__8053__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8053.cljs$core$IFn$_invoke$arity$variadic = G__8053__delegate;
return G__8053;
})()
;
om_tools$dom$dd = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$dd__0.call(this);
default:
var G__8056 = null;
if (arguments.length > 1) {
var G__8057__i = 0, G__8057__a = new Array(arguments.length -  1);
while (G__8057__i < G__8057__a.length) {G__8057__a[G__8057__i] = arguments[G__8057__i + 1]; ++G__8057__i;}
G__8056 = new cljs.core.IndexedSeq(G__8057__a,0);
}
return om_tools$dom$dd__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$dd.cljs$lang$maxFixedArity = 1;
om_tools$dom$dd.cljs$lang$applyTo = om_tools$dom$dd__2.cljs$lang$applyTo;
om_tools$dom$dd.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$dd__0;
om_tools$dom$dd.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$dd__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$dd;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.del = (function() {
var om_tools$dom$del = null;
var om_tools$dom$del__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.del,null,null);
});
var om_tools$dom$del__2 = (function() { 
var G__8058__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.del,opts__7559__auto__,children__7560__auto__);
};
var G__8058 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8059__i = 0, G__8059__a = new Array(arguments.length -  1);
while (G__8059__i < G__8059__a.length) {G__8059__a[G__8059__i] = arguments[G__8059__i + 1]; ++G__8059__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8059__a,0);
} 
return G__8058__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8058.cljs$lang$maxFixedArity = 1;
G__8058.cljs$lang$applyTo = (function (arglist__8060){
var opts__7559__auto__ = cljs.core.first(arglist__8060);
var children__7560__auto__ = cljs.core.rest(arglist__8060);
return G__8058__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8058.cljs$core$IFn$_invoke$arity$variadic = G__8058__delegate;
return G__8058;
})()
;
om_tools$dom$del = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$del__0.call(this);
default:
var G__8061 = null;
if (arguments.length > 1) {
var G__8062__i = 0, G__8062__a = new Array(arguments.length -  1);
while (G__8062__i < G__8062__a.length) {G__8062__a[G__8062__i] = arguments[G__8062__i + 1]; ++G__8062__i;}
G__8061 = new cljs.core.IndexedSeq(G__8062__a,0);
}
return om_tools$dom$del__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$del.cljs$lang$maxFixedArity = 1;
om_tools$dom$del.cljs$lang$applyTo = om_tools$dom$del__2.cljs$lang$applyTo;
om_tools$dom$del.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$del__0;
om_tools$dom$del.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$del__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$del;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.dfn = (function() {
var om_tools$dom$dfn = null;
var om_tools$dom$dfn__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dfn,null,null);
});
var om_tools$dom$dfn__2 = (function() { 
var G__8063__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.dfn,opts__7559__auto__,children__7560__auto__);
};
var G__8063 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8064__i = 0, G__8064__a = new Array(arguments.length -  1);
while (G__8064__i < G__8064__a.length) {G__8064__a[G__8064__i] = arguments[G__8064__i + 1]; ++G__8064__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8064__a,0);
} 
return G__8063__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8063.cljs$lang$maxFixedArity = 1;
G__8063.cljs$lang$applyTo = (function (arglist__8065){
var opts__7559__auto__ = cljs.core.first(arglist__8065);
var children__7560__auto__ = cljs.core.rest(arglist__8065);
return G__8063__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8063.cljs$core$IFn$_invoke$arity$variadic = G__8063__delegate;
return G__8063;
})()
;
om_tools$dom$dfn = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$dfn__0.call(this);
default:
var G__8066 = null;
if (arguments.length > 1) {
var G__8067__i = 0, G__8067__a = new Array(arguments.length -  1);
while (G__8067__i < G__8067__a.length) {G__8067__a[G__8067__i] = arguments[G__8067__i + 1]; ++G__8067__i;}
G__8066 = new cljs.core.IndexedSeq(G__8067__a,0);
}
return om_tools$dom$dfn__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$dfn.cljs$lang$maxFixedArity = 1;
om_tools$dom$dfn.cljs$lang$applyTo = om_tools$dom$dfn__2.cljs$lang$applyTo;
om_tools$dom$dfn.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$dfn__0;
om_tools$dom$dfn.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$dfn__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$dfn;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.div = (function() {
var om_tools$dom$div = null;
var om_tools$dom$div__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.div,null,null);
});
var om_tools$dom$div__2 = (function() { 
var G__8068__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.div,opts__7559__auto__,children__7560__auto__);
};
var G__8068 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8069__i = 0, G__8069__a = new Array(arguments.length -  1);
while (G__8069__i < G__8069__a.length) {G__8069__a[G__8069__i] = arguments[G__8069__i + 1]; ++G__8069__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8069__a,0);
} 
return G__8068__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8068.cljs$lang$maxFixedArity = 1;
G__8068.cljs$lang$applyTo = (function (arglist__8070){
var opts__7559__auto__ = cljs.core.first(arglist__8070);
var children__7560__auto__ = cljs.core.rest(arglist__8070);
return G__8068__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8068.cljs$core$IFn$_invoke$arity$variadic = G__8068__delegate;
return G__8068;
})()
;
om_tools$dom$div = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$div__0.call(this);
default:
var G__8071 = null;
if (arguments.length > 1) {
var G__8072__i = 0, G__8072__a = new Array(arguments.length -  1);
while (G__8072__i < G__8072__a.length) {G__8072__a[G__8072__i] = arguments[G__8072__i + 1]; ++G__8072__i;}
G__8071 = new cljs.core.IndexedSeq(G__8072__a,0);
}
return om_tools$dom$div__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$div.cljs$lang$maxFixedArity = 1;
om_tools$dom$div.cljs$lang$applyTo = om_tools$dom$div__2.cljs$lang$applyTo;
om_tools$dom$div.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$div__0;
om_tools$dom$div.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$div__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$div;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.dl = (function() {
var om_tools$dom$dl = null;
var om_tools$dom$dl__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dl,null,null);
});
var om_tools$dom$dl__2 = (function() { 
var G__8073__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.dl,opts__7559__auto__,children__7560__auto__);
};
var G__8073 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8074__i = 0, G__8074__a = new Array(arguments.length -  1);
while (G__8074__i < G__8074__a.length) {G__8074__a[G__8074__i] = arguments[G__8074__i + 1]; ++G__8074__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8074__a,0);
} 
return G__8073__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8073.cljs$lang$maxFixedArity = 1;
G__8073.cljs$lang$applyTo = (function (arglist__8075){
var opts__7559__auto__ = cljs.core.first(arglist__8075);
var children__7560__auto__ = cljs.core.rest(arglist__8075);
return G__8073__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8073.cljs$core$IFn$_invoke$arity$variadic = G__8073__delegate;
return G__8073;
})()
;
om_tools$dom$dl = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$dl__0.call(this);
default:
var G__8076 = null;
if (arguments.length > 1) {
var G__8077__i = 0, G__8077__a = new Array(arguments.length -  1);
while (G__8077__i < G__8077__a.length) {G__8077__a[G__8077__i] = arguments[G__8077__i + 1]; ++G__8077__i;}
G__8076 = new cljs.core.IndexedSeq(G__8077__a,0);
}
return om_tools$dom$dl__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$dl.cljs$lang$maxFixedArity = 1;
om_tools$dom$dl.cljs$lang$applyTo = om_tools$dom$dl__2.cljs$lang$applyTo;
om_tools$dom$dl.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$dl__0;
om_tools$dom$dl.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$dl__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$dl;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.dt = (function() {
var om_tools$dom$dt = null;
var om_tools$dom$dt__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dt,null,null);
});
var om_tools$dom$dt__2 = (function() { 
var G__8078__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.dt,opts__7559__auto__,children__7560__auto__);
};
var G__8078 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8079__i = 0, G__8079__a = new Array(arguments.length -  1);
while (G__8079__i < G__8079__a.length) {G__8079__a[G__8079__i] = arguments[G__8079__i + 1]; ++G__8079__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8079__a,0);
} 
return G__8078__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8078.cljs$lang$maxFixedArity = 1;
G__8078.cljs$lang$applyTo = (function (arglist__8080){
var opts__7559__auto__ = cljs.core.first(arglist__8080);
var children__7560__auto__ = cljs.core.rest(arglist__8080);
return G__8078__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8078.cljs$core$IFn$_invoke$arity$variadic = G__8078__delegate;
return G__8078;
})()
;
om_tools$dom$dt = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$dt__0.call(this);
default:
var G__8081 = null;
if (arguments.length > 1) {
var G__8082__i = 0, G__8082__a = new Array(arguments.length -  1);
while (G__8082__i < G__8082__a.length) {G__8082__a[G__8082__i] = arguments[G__8082__i + 1]; ++G__8082__i;}
G__8081 = new cljs.core.IndexedSeq(G__8082__a,0);
}
return om_tools$dom$dt__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$dt.cljs$lang$maxFixedArity = 1;
om_tools$dom$dt.cljs$lang$applyTo = om_tools$dom$dt__2.cljs$lang$applyTo;
om_tools$dom$dt.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$dt__0;
om_tools$dom$dt.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$dt__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$dt;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.em = (function() {
var om_tools$dom$em = null;
var om_tools$dom$em__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.em,null,null);
});
var om_tools$dom$em__2 = (function() { 
var G__8083__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.em,opts__7559__auto__,children__7560__auto__);
};
var G__8083 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8084__i = 0, G__8084__a = new Array(arguments.length -  1);
while (G__8084__i < G__8084__a.length) {G__8084__a[G__8084__i] = arguments[G__8084__i + 1]; ++G__8084__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8084__a,0);
} 
return G__8083__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8083.cljs$lang$maxFixedArity = 1;
G__8083.cljs$lang$applyTo = (function (arglist__8085){
var opts__7559__auto__ = cljs.core.first(arglist__8085);
var children__7560__auto__ = cljs.core.rest(arglist__8085);
return G__8083__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8083.cljs$core$IFn$_invoke$arity$variadic = G__8083__delegate;
return G__8083;
})()
;
om_tools$dom$em = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$em__0.call(this);
default:
var G__8086 = null;
if (arguments.length > 1) {
var G__8087__i = 0, G__8087__a = new Array(arguments.length -  1);
while (G__8087__i < G__8087__a.length) {G__8087__a[G__8087__i] = arguments[G__8087__i + 1]; ++G__8087__i;}
G__8086 = new cljs.core.IndexedSeq(G__8087__a,0);
}
return om_tools$dom$em__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$em.cljs$lang$maxFixedArity = 1;
om_tools$dom$em.cljs$lang$applyTo = om_tools$dom$em__2.cljs$lang$applyTo;
om_tools$dom$em.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$em__0;
om_tools$dom$em.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$em__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$em;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.embed = (function() {
var om_tools$dom$embed = null;
var om_tools$dom$embed__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.embed,null,null);
});
var om_tools$dom$embed__2 = (function() { 
var G__8088__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.embed,opts__7559__auto__,children__7560__auto__);
};
var G__8088 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8089__i = 0, G__8089__a = new Array(arguments.length -  1);
while (G__8089__i < G__8089__a.length) {G__8089__a[G__8089__i] = arguments[G__8089__i + 1]; ++G__8089__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8089__a,0);
} 
return G__8088__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8088.cljs$lang$maxFixedArity = 1;
G__8088.cljs$lang$applyTo = (function (arglist__8090){
var opts__7559__auto__ = cljs.core.first(arglist__8090);
var children__7560__auto__ = cljs.core.rest(arglist__8090);
return G__8088__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8088.cljs$core$IFn$_invoke$arity$variadic = G__8088__delegate;
return G__8088;
})()
;
om_tools$dom$embed = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$embed__0.call(this);
default:
var G__8091 = null;
if (arguments.length > 1) {
var G__8092__i = 0, G__8092__a = new Array(arguments.length -  1);
while (G__8092__i < G__8092__a.length) {G__8092__a[G__8092__i] = arguments[G__8092__i + 1]; ++G__8092__i;}
G__8091 = new cljs.core.IndexedSeq(G__8092__a,0);
}
return om_tools$dom$embed__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$embed.cljs$lang$maxFixedArity = 1;
om_tools$dom$embed.cljs$lang$applyTo = om_tools$dom$embed__2.cljs$lang$applyTo;
om_tools$dom$embed.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$embed__0;
om_tools$dom$embed.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$embed__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$embed;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.fieldset = (function() {
var om_tools$dom$fieldset = null;
var om_tools$dom$fieldset__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.fieldset,null,null);
});
var om_tools$dom$fieldset__2 = (function() { 
var G__8093__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.fieldset,opts__7559__auto__,children__7560__auto__);
};
var G__8093 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8094__i = 0, G__8094__a = new Array(arguments.length -  1);
while (G__8094__i < G__8094__a.length) {G__8094__a[G__8094__i] = arguments[G__8094__i + 1]; ++G__8094__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8094__a,0);
} 
return G__8093__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8093.cljs$lang$maxFixedArity = 1;
G__8093.cljs$lang$applyTo = (function (arglist__8095){
var opts__7559__auto__ = cljs.core.first(arglist__8095);
var children__7560__auto__ = cljs.core.rest(arglist__8095);
return G__8093__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8093.cljs$core$IFn$_invoke$arity$variadic = G__8093__delegate;
return G__8093;
})()
;
om_tools$dom$fieldset = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$fieldset__0.call(this);
default:
var G__8096 = null;
if (arguments.length > 1) {
var G__8097__i = 0, G__8097__a = new Array(arguments.length -  1);
while (G__8097__i < G__8097__a.length) {G__8097__a[G__8097__i] = arguments[G__8097__i + 1]; ++G__8097__i;}
G__8096 = new cljs.core.IndexedSeq(G__8097__a,0);
}
return om_tools$dom$fieldset__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$fieldset.cljs$lang$maxFixedArity = 1;
om_tools$dom$fieldset.cljs$lang$applyTo = om_tools$dom$fieldset__2.cljs$lang$applyTo;
om_tools$dom$fieldset.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$fieldset__0;
om_tools$dom$fieldset.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$fieldset__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$fieldset;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.figcaption = (function() {
var om_tools$dom$figcaption = null;
var om_tools$dom$figcaption__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.figcaption,null,null);
});
var om_tools$dom$figcaption__2 = (function() { 
var G__8098__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.figcaption,opts__7559__auto__,children__7560__auto__);
};
var G__8098 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8099__i = 0, G__8099__a = new Array(arguments.length -  1);
while (G__8099__i < G__8099__a.length) {G__8099__a[G__8099__i] = arguments[G__8099__i + 1]; ++G__8099__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8099__a,0);
} 
return G__8098__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8098.cljs$lang$maxFixedArity = 1;
G__8098.cljs$lang$applyTo = (function (arglist__8100){
var opts__7559__auto__ = cljs.core.first(arglist__8100);
var children__7560__auto__ = cljs.core.rest(arglist__8100);
return G__8098__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8098.cljs$core$IFn$_invoke$arity$variadic = G__8098__delegate;
return G__8098;
})()
;
om_tools$dom$figcaption = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$figcaption__0.call(this);
default:
var G__8101 = null;
if (arguments.length > 1) {
var G__8102__i = 0, G__8102__a = new Array(arguments.length -  1);
while (G__8102__i < G__8102__a.length) {G__8102__a[G__8102__i] = arguments[G__8102__i + 1]; ++G__8102__i;}
G__8101 = new cljs.core.IndexedSeq(G__8102__a,0);
}
return om_tools$dom$figcaption__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$figcaption.cljs$lang$maxFixedArity = 1;
om_tools$dom$figcaption.cljs$lang$applyTo = om_tools$dom$figcaption__2.cljs$lang$applyTo;
om_tools$dom$figcaption.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$figcaption__0;
om_tools$dom$figcaption.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$figcaption__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$figcaption;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.figure = (function() {
var om_tools$dom$figure = null;
var om_tools$dom$figure__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.figure,null,null);
});
var om_tools$dom$figure__2 = (function() { 
var G__8103__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.figure,opts__7559__auto__,children__7560__auto__);
};
var G__8103 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8104__i = 0, G__8104__a = new Array(arguments.length -  1);
while (G__8104__i < G__8104__a.length) {G__8104__a[G__8104__i] = arguments[G__8104__i + 1]; ++G__8104__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8104__a,0);
} 
return G__8103__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8103.cljs$lang$maxFixedArity = 1;
G__8103.cljs$lang$applyTo = (function (arglist__8105){
var opts__7559__auto__ = cljs.core.first(arglist__8105);
var children__7560__auto__ = cljs.core.rest(arglist__8105);
return G__8103__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8103.cljs$core$IFn$_invoke$arity$variadic = G__8103__delegate;
return G__8103;
})()
;
om_tools$dom$figure = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$figure__0.call(this);
default:
var G__8106 = null;
if (arguments.length > 1) {
var G__8107__i = 0, G__8107__a = new Array(arguments.length -  1);
while (G__8107__i < G__8107__a.length) {G__8107__a[G__8107__i] = arguments[G__8107__i + 1]; ++G__8107__i;}
G__8106 = new cljs.core.IndexedSeq(G__8107__a,0);
}
return om_tools$dom$figure__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$figure.cljs$lang$maxFixedArity = 1;
om_tools$dom$figure.cljs$lang$applyTo = om_tools$dom$figure__2.cljs$lang$applyTo;
om_tools$dom$figure.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$figure__0;
om_tools$dom$figure.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$figure__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$figure;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.footer = (function() {
var om_tools$dom$footer = null;
var om_tools$dom$footer__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.footer,null,null);
});
var om_tools$dom$footer__2 = (function() { 
var G__8108__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.footer,opts__7559__auto__,children__7560__auto__);
};
var G__8108 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8109__i = 0, G__8109__a = new Array(arguments.length -  1);
while (G__8109__i < G__8109__a.length) {G__8109__a[G__8109__i] = arguments[G__8109__i + 1]; ++G__8109__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8109__a,0);
} 
return G__8108__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8108.cljs$lang$maxFixedArity = 1;
G__8108.cljs$lang$applyTo = (function (arglist__8110){
var opts__7559__auto__ = cljs.core.first(arglist__8110);
var children__7560__auto__ = cljs.core.rest(arglist__8110);
return G__8108__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8108.cljs$core$IFn$_invoke$arity$variadic = G__8108__delegate;
return G__8108;
})()
;
om_tools$dom$footer = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$footer__0.call(this);
default:
var G__8111 = null;
if (arguments.length > 1) {
var G__8112__i = 0, G__8112__a = new Array(arguments.length -  1);
while (G__8112__i < G__8112__a.length) {G__8112__a[G__8112__i] = arguments[G__8112__i + 1]; ++G__8112__i;}
G__8111 = new cljs.core.IndexedSeq(G__8112__a,0);
}
return om_tools$dom$footer__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$footer.cljs$lang$maxFixedArity = 1;
om_tools$dom$footer.cljs$lang$applyTo = om_tools$dom$footer__2.cljs$lang$applyTo;
om_tools$dom$footer.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$footer__0;
om_tools$dom$footer.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$footer__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$footer;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.form = (function() {
var om_tools$dom$form = null;
var om_tools$dom$form__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.form,null,null);
});
var om_tools$dom$form__2 = (function() { 
var G__8113__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.form,opts__7559__auto__,children__7560__auto__);
};
var G__8113 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8114__i = 0, G__8114__a = new Array(arguments.length -  1);
while (G__8114__i < G__8114__a.length) {G__8114__a[G__8114__i] = arguments[G__8114__i + 1]; ++G__8114__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8114__a,0);
} 
return G__8113__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8113.cljs$lang$maxFixedArity = 1;
G__8113.cljs$lang$applyTo = (function (arglist__8115){
var opts__7559__auto__ = cljs.core.first(arglist__8115);
var children__7560__auto__ = cljs.core.rest(arglist__8115);
return G__8113__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8113.cljs$core$IFn$_invoke$arity$variadic = G__8113__delegate;
return G__8113;
})()
;
om_tools$dom$form = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$form__0.call(this);
default:
var G__8116 = null;
if (arguments.length > 1) {
var G__8117__i = 0, G__8117__a = new Array(arguments.length -  1);
while (G__8117__i < G__8117__a.length) {G__8117__a[G__8117__i] = arguments[G__8117__i + 1]; ++G__8117__i;}
G__8116 = new cljs.core.IndexedSeq(G__8117__a,0);
}
return om_tools$dom$form__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$form.cljs$lang$maxFixedArity = 1;
om_tools$dom$form.cljs$lang$applyTo = om_tools$dom$form__2.cljs$lang$applyTo;
om_tools$dom$form.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$form__0;
om_tools$dom$form.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$form__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$form;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.h1 = (function() {
var om_tools$dom$h1 = null;
var om_tools$dom$h1__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h1,null,null);
});
var om_tools$dom$h1__2 = (function() { 
var G__8118__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.h1,opts__7559__auto__,children__7560__auto__);
};
var G__8118 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8119__i = 0, G__8119__a = new Array(arguments.length -  1);
while (G__8119__i < G__8119__a.length) {G__8119__a[G__8119__i] = arguments[G__8119__i + 1]; ++G__8119__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8119__a,0);
} 
return G__8118__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8118.cljs$lang$maxFixedArity = 1;
G__8118.cljs$lang$applyTo = (function (arglist__8120){
var opts__7559__auto__ = cljs.core.first(arglist__8120);
var children__7560__auto__ = cljs.core.rest(arglist__8120);
return G__8118__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8118.cljs$core$IFn$_invoke$arity$variadic = G__8118__delegate;
return G__8118;
})()
;
om_tools$dom$h1 = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$h1__0.call(this);
default:
var G__8121 = null;
if (arguments.length > 1) {
var G__8122__i = 0, G__8122__a = new Array(arguments.length -  1);
while (G__8122__i < G__8122__a.length) {G__8122__a[G__8122__i] = arguments[G__8122__i + 1]; ++G__8122__i;}
G__8121 = new cljs.core.IndexedSeq(G__8122__a,0);
}
return om_tools$dom$h1__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$h1.cljs$lang$maxFixedArity = 1;
om_tools$dom$h1.cljs$lang$applyTo = om_tools$dom$h1__2.cljs$lang$applyTo;
om_tools$dom$h1.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$h1__0;
om_tools$dom$h1.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$h1__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$h1;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.h2 = (function() {
var om_tools$dom$h2 = null;
var om_tools$dom$h2__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h2,null,null);
});
var om_tools$dom$h2__2 = (function() { 
var G__8123__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.h2,opts__7559__auto__,children__7560__auto__);
};
var G__8123 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8124__i = 0, G__8124__a = new Array(arguments.length -  1);
while (G__8124__i < G__8124__a.length) {G__8124__a[G__8124__i] = arguments[G__8124__i + 1]; ++G__8124__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8124__a,0);
} 
return G__8123__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8123.cljs$lang$maxFixedArity = 1;
G__8123.cljs$lang$applyTo = (function (arglist__8125){
var opts__7559__auto__ = cljs.core.first(arglist__8125);
var children__7560__auto__ = cljs.core.rest(arglist__8125);
return G__8123__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8123.cljs$core$IFn$_invoke$arity$variadic = G__8123__delegate;
return G__8123;
})()
;
om_tools$dom$h2 = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$h2__0.call(this);
default:
var G__8126 = null;
if (arguments.length > 1) {
var G__8127__i = 0, G__8127__a = new Array(arguments.length -  1);
while (G__8127__i < G__8127__a.length) {G__8127__a[G__8127__i] = arguments[G__8127__i + 1]; ++G__8127__i;}
G__8126 = new cljs.core.IndexedSeq(G__8127__a,0);
}
return om_tools$dom$h2__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$h2.cljs$lang$maxFixedArity = 1;
om_tools$dom$h2.cljs$lang$applyTo = om_tools$dom$h2__2.cljs$lang$applyTo;
om_tools$dom$h2.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$h2__0;
om_tools$dom$h2.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$h2__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$h2;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.h3 = (function() {
var om_tools$dom$h3 = null;
var om_tools$dom$h3__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h3,null,null);
});
var om_tools$dom$h3__2 = (function() { 
var G__8128__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.h3,opts__7559__auto__,children__7560__auto__);
};
var G__8128 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8129__i = 0, G__8129__a = new Array(arguments.length -  1);
while (G__8129__i < G__8129__a.length) {G__8129__a[G__8129__i] = arguments[G__8129__i + 1]; ++G__8129__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8129__a,0);
} 
return G__8128__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8128.cljs$lang$maxFixedArity = 1;
G__8128.cljs$lang$applyTo = (function (arglist__8130){
var opts__7559__auto__ = cljs.core.first(arglist__8130);
var children__7560__auto__ = cljs.core.rest(arglist__8130);
return G__8128__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8128.cljs$core$IFn$_invoke$arity$variadic = G__8128__delegate;
return G__8128;
})()
;
om_tools$dom$h3 = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$h3__0.call(this);
default:
var G__8131 = null;
if (arguments.length > 1) {
var G__8132__i = 0, G__8132__a = new Array(arguments.length -  1);
while (G__8132__i < G__8132__a.length) {G__8132__a[G__8132__i] = arguments[G__8132__i + 1]; ++G__8132__i;}
G__8131 = new cljs.core.IndexedSeq(G__8132__a,0);
}
return om_tools$dom$h3__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$h3.cljs$lang$maxFixedArity = 1;
om_tools$dom$h3.cljs$lang$applyTo = om_tools$dom$h3__2.cljs$lang$applyTo;
om_tools$dom$h3.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$h3__0;
om_tools$dom$h3.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$h3__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$h3;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.h4 = (function() {
var om_tools$dom$h4 = null;
var om_tools$dom$h4__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h4,null,null);
});
var om_tools$dom$h4__2 = (function() { 
var G__8133__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.h4,opts__7559__auto__,children__7560__auto__);
};
var G__8133 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8134__i = 0, G__8134__a = new Array(arguments.length -  1);
while (G__8134__i < G__8134__a.length) {G__8134__a[G__8134__i] = arguments[G__8134__i + 1]; ++G__8134__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8134__a,0);
} 
return G__8133__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8133.cljs$lang$maxFixedArity = 1;
G__8133.cljs$lang$applyTo = (function (arglist__8135){
var opts__7559__auto__ = cljs.core.first(arglist__8135);
var children__7560__auto__ = cljs.core.rest(arglist__8135);
return G__8133__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8133.cljs$core$IFn$_invoke$arity$variadic = G__8133__delegate;
return G__8133;
})()
;
om_tools$dom$h4 = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$h4__0.call(this);
default:
var G__8136 = null;
if (arguments.length > 1) {
var G__8137__i = 0, G__8137__a = new Array(arguments.length -  1);
while (G__8137__i < G__8137__a.length) {G__8137__a[G__8137__i] = arguments[G__8137__i + 1]; ++G__8137__i;}
G__8136 = new cljs.core.IndexedSeq(G__8137__a,0);
}
return om_tools$dom$h4__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$h4.cljs$lang$maxFixedArity = 1;
om_tools$dom$h4.cljs$lang$applyTo = om_tools$dom$h4__2.cljs$lang$applyTo;
om_tools$dom$h4.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$h4__0;
om_tools$dom$h4.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$h4__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$h4;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.h5 = (function() {
var om_tools$dom$h5 = null;
var om_tools$dom$h5__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h5,null,null);
});
var om_tools$dom$h5__2 = (function() { 
var G__8138__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.h5,opts__7559__auto__,children__7560__auto__);
};
var G__8138 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8139__i = 0, G__8139__a = new Array(arguments.length -  1);
while (G__8139__i < G__8139__a.length) {G__8139__a[G__8139__i] = arguments[G__8139__i + 1]; ++G__8139__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8139__a,0);
} 
return G__8138__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8138.cljs$lang$maxFixedArity = 1;
G__8138.cljs$lang$applyTo = (function (arglist__8140){
var opts__7559__auto__ = cljs.core.first(arglist__8140);
var children__7560__auto__ = cljs.core.rest(arglist__8140);
return G__8138__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8138.cljs$core$IFn$_invoke$arity$variadic = G__8138__delegate;
return G__8138;
})()
;
om_tools$dom$h5 = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$h5__0.call(this);
default:
var G__8141 = null;
if (arguments.length > 1) {
var G__8142__i = 0, G__8142__a = new Array(arguments.length -  1);
while (G__8142__i < G__8142__a.length) {G__8142__a[G__8142__i] = arguments[G__8142__i + 1]; ++G__8142__i;}
G__8141 = new cljs.core.IndexedSeq(G__8142__a,0);
}
return om_tools$dom$h5__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$h5.cljs$lang$maxFixedArity = 1;
om_tools$dom$h5.cljs$lang$applyTo = om_tools$dom$h5__2.cljs$lang$applyTo;
om_tools$dom$h5.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$h5__0;
om_tools$dom$h5.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$h5__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$h5;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.h6 = (function() {
var om_tools$dom$h6 = null;
var om_tools$dom$h6__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h6,null,null);
});
var om_tools$dom$h6__2 = (function() { 
var G__8143__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.h6,opts__7559__auto__,children__7560__auto__);
};
var G__8143 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8144__i = 0, G__8144__a = new Array(arguments.length -  1);
while (G__8144__i < G__8144__a.length) {G__8144__a[G__8144__i] = arguments[G__8144__i + 1]; ++G__8144__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8144__a,0);
} 
return G__8143__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8143.cljs$lang$maxFixedArity = 1;
G__8143.cljs$lang$applyTo = (function (arglist__8145){
var opts__7559__auto__ = cljs.core.first(arglist__8145);
var children__7560__auto__ = cljs.core.rest(arglist__8145);
return G__8143__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8143.cljs$core$IFn$_invoke$arity$variadic = G__8143__delegate;
return G__8143;
})()
;
om_tools$dom$h6 = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$h6__0.call(this);
default:
var G__8146 = null;
if (arguments.length > 1) {
var G__8147__i = 0, G__8147__a = new Array(arguments.length -  1);
while (G__8147__i < G__8147__a.length) {G__8147__a[G__8147__i] = arguments[G__8147__i + 1]; ++G__8147__i;}
G__8146 = new cljs.core.IndexedSeq(G__8147__a,0);
}
return om_tools$dom$h6__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$h6.cljs$lang$maxFixedArity = 1;
om_tools$dom$h6.cljs$lang$applyTo = om_tools$dom$h6__2.cljs$lang$applyTo;
om_tools$dom$h6.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$h6__0;
om_tools$dom$h6.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$h6__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$h6;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.head = (function() {
var om_tools$dom$head = null;
var om_tools$dom$head__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.head,null,null);
});
var om_tools$dom$head__2 = (function() { 
var G__8148__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.head,opts__7559__auto__,children__7560__auto__);
};
var G__8148 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8149__i = 0, G__8149__a = new Array(arguments.length -  1);
while (G__8149__i < G__8149__a.length) {G__8149__a[G__8149__i] = arguments[G__8149__i + 1]; ++G__8149__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8149__a,0);
} 
return G__8148__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8148.cljs$lang$maxFixedArity = 1;
G__8148.cljs$lang$applyTo = (function (arglist__8150){
var opts__7559__auto__ = cljs.core.first(arglist__8150);
var children__7560__auto__ = cljs.core.rest(arglist__8150);
return G__8148__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8148.cljs$core$IFn$_invoke$arity$variadic = G__8148__delegate;
return G__8148;
})()
;
om_tools$dom$head = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$head__0.call(this);
default:
var G__8151 = null;
if (arguments.length > 1) {
var G__8152__i = 0, G__8152__a = new Array(arguments.length -  1);
while (G__8152__i < G__8152__a.length) {G__8152__a[G__8152__i] = arguments[G__8152__i + 1]; ++G__8152__i;}
G__8151 = new cljs.core.IndexedSeq(G__8152__a,0);
}
return om_tools$dom$head__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$head.cljs$lang$maxFixedArity = 1;
om_tools$dom$head.cljs$lang$applyTo = om_tools$dom$head__2.cljs$lang$applyTo;
om_tools$dom$head.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$head__0;
om_tools$dom$head.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$head__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$head;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.header = (function() {
var om_tools$dom$header = null;
var om_tools$dom$header__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.header,null,null);
});
var om_tools$dom$header__2 = (function() { 
var G__8153__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.header,opts__7559__auto__,children__7560__auto__);
};
var G__8153 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8154__i = 0, G__8154__a = new Array(arguments.length -  1);
while (G__8154__i < G__8154__a.length) {G__8154__a[G__8154__i] = arguments[G__8154__i + 1]; ++G__8154__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8154__a,0);
} 
return G__8153__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8153.cljs$lang$maxFixedArity = 1;
G__8153.cljs$lang$applyTo = (function (arglist__8155){
var opts__7559__auto__ = cljs.core.first(arglist__8155);
var children__7560__auto__ = cljs.core.rest(arglist__8155);
return G__8153__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8153.cljs$core$IFn$_invoke$arity$variadic = G__8153__delegate;
return G__8153;
})()
;
om_tools$dom$header = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$header__0.call(this);
default:
var G__8156 = null;
if (arguments.length > 1) {
var G__8157__i = 0, G__8157__a = new Array(arguments.length -  1);
while (G__8157__i < G__8157__a.length) {G__8157__a[G__8157__i] = arguments[G__8157__i + 1]; ++G__8157__i;}
G__8156 = new cljs.core.IndexedSeq(G__8157__a,0);
}
return om_tools$dom$header__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$header.cljs$lang$maxFixedArity = 1;
om_tools$dom$header.cljs$lang$applyTo = om_tools$dom$header__2.cljs$lang$applyTo;
om_tools$dom$header.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$header__0;
om_tools$dom$header.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$header__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$header;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.hr = (function() {
var om_tools$dom$hr = null;
var om_tools$dom$hr__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.hr,null,null);
});
var om_tools$dom$hr__2 = (function() { 
var G__8158__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.hr,opts__7559__auto__,children__7560__auto__);
};
var G__8158 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8159__i = 0, G__8159__a = new Array(arguments.length -  1);
while (G__8159__i < G__8159__a.length) {G__8159__a[G__8159__i] = arguments[G__8159__i + 1]; ++G__8159__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8159__a,0);
} 
return G__8158__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8158.cljs$lang$maxFixedArity = 1;
G__8158.cljs$lang$applyTo = (function (arglist__8160){
var opts__7559__auto__ = cljs.core.first(arglist__8160);
var children__7560__auto__ = cljs.core.rest(arglist__8160);
return G__8158__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8158.cljs$core$IFn$_invoke$arity$variadic = G__8158__delegate;
return G__8158;
})()
;
om_tools$dom$hr = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$hr__0.call(this);
default:
var G__8161 = null;
if (arguments.length > 1) {
var G__8162__i = 0, G__8162__a = new Array(arguments.length -  1);
while (G__8162__i < G__8162__a.length) {G__8162__a[G__8162__i] = arguments[G__8162__i + 1]; ++G__8162__i;}
G__8161 = new cljs.core.IndexedSeq(G__8162__a,0);
}
return om_tools$dom$hr__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8161);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$hr.cljs$lang$maxFixedArity = 1;
om_tools$dom$hr.cljs$lang$applyTo = om_tools$dom$hr__2.cljs$lang$applyTo;
om_tools$dom$hr.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$hr__0;
om_tools$dom$hr.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$hr__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$hr;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.html = (function() {
var om_tools$dom$html = null;
var om_tools$dom$html__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.html,null,null);
});
var om_tools$dom$html__2 = (function() { 
var G__8163__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.html,opts__7559__auto__,children__7560__auto__);
};
var G__8163 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8164__i = 0, G__8164__a = new Array(arguments.length -  1);
while (G__8164__i < G__8164__a.length) {G__8164__a[G__8164__i] = arguments[G__8164__i + 1]; ++G__8164__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8164__a,0);
} 
return G__8163__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8163.cljs$lang$maxFixedArity = 1;
G__8163.cljs$lang$applyTo = (function (arglist__8165){
var opts__7559__auto__ = cljs.core.first(arglist__8165);
var children__7560__auto__ = cljs.core.rest(arglist__8165);
return G__8163__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8163.cljs$core$IFn$_invoke$arity$variadic = G__8163__delegate;
return G__8163;
})()
;
om_tools$dom$html = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$html__0.call(this);
default:
var G__8166 = null;
if (arguments.length > 1) {
var G__8167__i = 0, G__8167__a = new Array(arguments.length -  1);
while (G__8167__i < G__8167__a.length) {G__8167__a[G__8167__i] = arguments[G__8167__i + 1]; ++G__8167__i;}
G__8166 = new cljs.core.IndexedSeq(G__8167__a,0);
}
return om_tools$dom$html__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$html.cljs$lang$maxFixedArity = 1;
om_tools$dom$html.cljs$lang$applyTo = om_tools$dom$html__2.cljs$lang$applyTo;
om_tools$dom$html.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$html__0;
om_tools$dom$html.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$html__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$html;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.i = (function() {
var om_tools$dom$i = null;
var om_tools$dom$i__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.i,null,null);
});
var om_tools$dom$i__2 = (function() { 
var G__8168__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.i,opts__7559__auto__,children__7560__auto__);
};
var G__8168 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8169__i = 0, G__8169__a = new Array(arguments.length -  1);
while (G__8169__i < G__8169__a.length) {G__8169__a[G__8169__i] = arguments[G__8169__i + 1]; ++G__8169__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8169__a,0);
} 
return G__8168__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8168.cljs$lang$maxFixedArity = 1;
G__8168.cljs$lang$applyTo = (function (arglist__8170){
var opts__7559__auto__ = cljs.core.first(arglist__8170);
var children__7560__auto__ = cljs.core.rest(arglist__8170);
return G__8168__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8168.cljs$core$IFn$_invoke$arity$variadic = G__8168__delegate;
return G__8168;
})()
;
om_tools$dom$i = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$i__0.call(this);
default:
var G__8171 = null;
if (arguments.length > 1) {
var G__8172__i = 0, G__8172__a = new Array(arguments.length -  1);
while (G__8172__i < G__8172__a.length) {G__8172__a[G__8172__i] = arguments[G__8172__i + 1]; ++G__8172__i;}
G__8171 = new cljs.core.IndexedSeq(G__8172__a,0);
}
return om_tools$dom$i__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$i.cljs$lang$maxFixedArity = 1;
om_tools$dom$i.cljs$lang$applyTo = om_tools$dom$i__2.cljs$lang$applyTo;
om_tools$dom$i.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$i__0;
om_tools$dom$i.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$i__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$i;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.iframe = (function() {
var om_tools$dom$iframe = null;
var om_tools$dom$iframe__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.iframe,null,null);
});
var om_tools$dom$iframe__2 = (function() { 
var G__8173__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.iframe,opts__7559__auto__,children__7560__auto__);
};
var G__8173 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8174__i = 0, G__8174__a = new Array(arguments.length -  1);
while (G__8174__i < G__8174__a.length) {G__8174__a[G__8174__i] = arguments[G__8174__i + 1]; ++G__8174__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8174__a,0);
} 
return G__8173__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8173.cljs$lang$maxFixedArity = 1;
G__8173.cljs$lang$applyTo = (function (arglist__8175){
var opts__7559__auto__ = cljs.core.first(arglist__8175);
var children__7560__auto__ = cljs.core.rest(arglist__8175);
return G__8173__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8173.cljs$core$IFn$_invoke$arity$variadic = G__8173__delegate;
return G__8173;
})()
;
om_tools$dom$iframe = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$iframe__0.call(this);
default:
var G__8176 = null;
if (arguments.length > 1) {
var G__8177__i = 0, G__8177__a = new Array(arguments.length -  1);
while (G__8177__i < G__8177__a.length) {G__8177__a[G__8177__i] = arguments[G__8177__i + 1]; ++G__8177__i;}
G__8176 = new cljs.core.IndexedSeq(G__8177__a,0);
}
return om_tools$dom$iframe__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$iframe.cljs$lang$maxFixedArity = 1;
om_tools$dom$iframe.cljs$lang$applyTo = om_tools$dom$iframe__2.cljs$lang$applyTo;
om_tools$dom$iframe.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$iframe__0;
om_tools$dom$iframe.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$iframe__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$iframe;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.img = (function() {
var om_tools$dom$img = null;
var om_tools$dom$img__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.img,null,null);
});
var om_tools$dom$img__2 = (function() { 
var G__8178__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.img,opts__7559__auto__,children__7560__auto__);
};
var G__8178 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8179__i = 0, G__8179__a = new Array(arguments.length -  1);
while (G__8179__i < G__8179__a.length) {G__8179__a[G__8179__i] = arguments[G__8179__i + 1]; ++G__8179__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8179__a,0);
} 
return G__8178__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8178.cljs$lang$maxFixedArity = 1;
G__8178.cljs$lang$applyTo = (function (arglist__8180){
var opts__7559__auto__ = cljs.core.first(arglist__8180);
var children__7560__auto__ = cljs.core.rest(arglist__8180);
return G__8178__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8178.cljs$core$IFn$_invoke$arity$variadic = G__8178__delegate;
return G__8178;
})()
;
om_tools$dom$img = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$img__0.call(this);
default:
var G__8181 = null;
if (arguments.length > 1) {
var G__8182__i = 0, G__8182__a = new Array(arguments.length -  1);
while (G__8182__i < G__8182__a.length) {G__8182__a[G__8182__i] = arguments[G__8182__i + 1]; ++G__8182__i;}
G__8181 = new cljs.core.IndexedSeq(G__8182__a,0);
}
return om_tools$dom$img__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$img.cljs$lang$maxFixedArity = 1;
om_tools$dom$img.cljs$lang$applyTo = om_tools$dom$img__2.cljs$lang$applyTo;
om_tools$dom$img.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$img__0;
om_tools$dom$img.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$img__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$img;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.ins = (function() {
var om_tools$dom$ins = null;
var om_tools$dom$ins__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ins,null,null);
});
var om_tools$dom$ins__2 = (function() { 
var G__8183__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.ins,opts__7559__auto__,children__7560__auto__);
};
var G__8183 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8184__i = 0, G__8184__a = new Array(arguments.length -  1);
while (G__8184__i < G__8184__a.length) {G__8184__a[G__8184__i] = arguments[G__8184__i + 1]; ++G__8184__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8184__a,0);
} 
return G__8183__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8183.cljs$lang$maxFixedArity = 1;
G__8183.cljs$lang$applyTo = (function (arglist__8185){
var opts__7559__auto__ = cljs.core.first(arglist__8185);
var children__7560__auto__ = cljs.core.rest(arglist__8185);
return G__8183__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8183.cljs$core$IFn$_invoke$arity$variadic = G__8183__delegate;
return G__8183;
})()
;
om_tools$dom$ins = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$ins__0.call(this);
default:
var G__8186 = null;
if (arguments.length > 1) {
var G__8187__i = 0, G__8187__a = new Array(arguments.length -  1);
while (G__8187__i < G__8187__a.length) {G__8187__a[G__8187__i] = arguments[G__8187__i + 1]; ++G__8187__i;}
G__8186 = new cljs.core.IndexedSeq(G__8187__a,0);
}
return om_tools$dom$ins__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$ins.cljs$lang$maxFixedArity = 1;
om_tools$dom$ins.cljs$lang$applyTo = om_tools$dom$ins__2.cljs$lang$applyTo;
om_tools$dom$ins.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$ins__0;
om_tools$dom$ins.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$ins__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$ins;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.kbd = (function() {
var om_tools$dom$kbd = null;
var om_tools$dom$kbd__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.kbd,null,null);
});
var om_tools$dom$kbd__2 = (function() { 
var G__8188__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.kbd,opts__7559__auto__,children__7560__auto__);
};
var G__8188 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8189__i = 0, G__8189__a = new Array(arguments.length -  1);
while (G__8189__i < G__8189__a.length) {G__8189__a[G__8189__i] = arguments[G__8189__i + 1]; ++G__8189__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8189__a,0);
} 
return G__8188__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8188.cljs$lang$maxFixedArity = 1;
G__8188.cljs$lang$applyTo = (function (arglist__8190){
var opts__7559__auto__ = cljs.core.first(arglist__8190);
var children__7560__auto__ = cljs.core.rest(arglist__8190);
return G__8188__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8188.cljs$core$IFn$_invoke$arity$variadic = G__8188__delegate;
return G__8188;
})()
;
om_tools$dom$kbd = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$kbd__0.call(this);
default:
var G__8191 = null;
if (arguments.length > 1) {
var G__8192__i = 0, G__8192__a = new Array(arguments.length -  1);
while (G__8192__i < G__8192__a.length) {G__8192__a[G__8192__i] = arguments[G__8192__i + 1]; ++G__8192__i;}
G__8191 = new cljs.core.IndexedSeq(G__8192__a,0);
}
return om_tools$dom$kbd__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$kbd.cljs$lang$maxFixedArity = 1;
om_tools$dom$kbd.cljs$lang$applyTo = om_tools$dom$kbd__2.cljs$lang$applyTo;
om_tools$dom$kbd.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$kbd__0;
om_tools$dom$kbd.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$kbd__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$kbd;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.keygen = (function() {
var om_tools$dom$keygen = null;
var om_tools$dom$keygen__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.keygen,null,null);
});
var om_tools$dom$keygen__2 = (function() { 
var G__8193__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.keygen,opts__7559__auto__,children__7560__auto__);
};
var G__8193 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8194__i = 0, G__8194__a = new Array(arguments.length -  1);
while (G__8194__i < G__8194__a.length) {G__8194__a[G__8194__i] = arguments[G__8194__i + 1]; ++G__8194__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8194__a,0);
} 
return G__8193__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8193.cljs$lang$maxFixedArity = 1;
G__8193.cljs$lang$applyTo = (function (arglist__8195){
var opts__7559__auto__ = cljs.core.first(arglist__8195);
var children__7560__auto__ = cljs.core.rest(arglist__8195);
return G__8193__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8193.cljs$core$IFn$_invoke$arity$variadic = G__8193__delegate;
return G__8193;
})()
;
om_tools$dom$keygen = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$keygen__0.call(this);
default:
var G__8196 = null;
if (arguments.length > 1) {
var G__8197__i = 0, G__8197__a = new Array(arguments.length -  1);
while (G__8197__i < G__8197__a.length) {G__8197__a[G__8197__i] = arguments[G__8197__i + 1]; ++G__8197__i;}
G__8196 = new cljs.core.IndexedSeq(G__8197__a,0);
}
return om_tools$dom$keygen__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$keygen.cljs$lang$maxFixedArity = 1;
om_tools$dom$keygen.cljs$lang$applyTo = om_tools$dom$keygen__2.cljs$lang$applyTo;
om_tools$dom$keygen.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$keygen__0;
om_tools$dom$keygen.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$keygen__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$keygen;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.label = (function() {
var om_tools$dom$label = null;
var om_tools$dom$label__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.label,null,null);
});
var om_tools$dom$label__2 = (function() { 
var G__8198__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.label,opts__7559__auto__,children__7560__auto__);
};
var G__8198 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8199__i = 0, G__8199__a = new Array(arguments.length -  1);
while (G__8199__i < G__8199__a.length) {G__8199__a[G__8199__i] = arguments[G__8199__i + 1]; ++G__8199__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8199__a,0);
} 
return G__8198__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8198.cljs$lang$maxFixedArity = 1;
G__8198.cljs$lang$applyTo = (function (arglist__8200){
var opts__7559__auto__ = cljs.core.first(arglist__8200);
var children__7560__auto__ = cljs.core.rest(arglist__8200);
return G__8198__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8198.cljs$core$IFn$_invoke$arity$variadic = G__8198__delegate;
return G__8198;
})()
;
om_tools$dom$label = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$label__0.call(this);
default:
var G__8201 = null;
if (arguments.length > 1) {
var G__8202__i = 0, G__8202__a = new Array(arguments.length -  1);
while (G__8202__i < G__8202__a.length) {G__8202__a[G__8202__i] = arguments[G__8202__i + 1]; ++G__8202__i;}
G__8201 = new cljs.core.IndexedSeq(G__8202__a,0);
}
return om_tools$dom$label__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$label.cljs$lang$maxFixedArity = 1;
om_tools$dom$label.cljs$lang$applyTo = om_tools$dom$label__2.cljs$lang$applyTo;
om_tools$dom$label.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$label__0;
om_tools$dom$label.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$label__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$label;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.legend = (function() {
var om_tools$dom$legend = null;
var om_tools$dom$legend__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.legend,null,null);
});
var om_tools$dom$legend__2 = (function() { 
var G__8203__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.legend,opts__7559__auto__,children__7560__auto__);
};
var G__8203 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8204__i = 0, G__8204__a = new Array(arguments.length -  1);
while (G__8204__i < G__8204__a.length) {G__8204__a[G__8204__i] = arguments[G__8204__i + 1]; ++G__8204__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8204__a,0);
} 
return G__8203__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8203.cljs$lang$maxFixedArity = 1;
G__8203.cljs$lang$applyTo = (function (arglist__8205){
var opts__7559__auto__ = cljs.core.first(arglist__8205);
var children__7560__auto__ = cljs.core.rest(arglist__8205);
return G__8203__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8203.cljs$core$IFn$_invoke$arity$variadic = G__8203__delegate;
return G__8203;
})()
;
om_tools$dom$legend = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$legend__0.call(this);
default:
var G__8206 = null;
if (arguments.length > 1) {
var G__8207__i = 0, G__8207__a = new Array(arguments.length -  1);
while (G__8207__i < G__8207__a.length) {G__8207__a[G__8207__i] = arguments[G__8207__i + 1]; ++G__8207__i;}
G__8206 = new cljs.core.IndexedSeq(G__8207__a,0);
}
return om_tools$dom$legend__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$legend.cljs$lang$maxFixedArity = 1;
om_tools$dom$legend.cljs$lang$applyTo = om_tools$dom$legend__2.cljs$lang$applyTo;
om_tools$dom$legend.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$legend__0;
om_tools$dom$legend.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$legend__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$legend;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.li = (function() {
var om_tools$dom$li = null;
var om_tools$dom$li__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.li,null,null);
});
var om_tools$dom$li__2 = (function() { 
var G__8208__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.li,opts__7559__auto__,children__7560__auto__);
};
var G__8208 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8209__i = 0, G__8209__a = new Array(arguments.length -  1);
while (G__8209__i < G__8209__a.length) {G__8209__a[G__8209__i] = arguments[G__8209__i + 1]; ++G__8209__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8209__a,0);
} 
return G__8208__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8208.cljs$lang$maxFixedArity = 1;
G__8208.cljs$lang$applyTo = (function (arglist__8210){
var opts__7559__auto__ = cljs.core.first(arglist__8210);
var children__7560__auto__ = cljs.core.rest(arglist__8210);
return G__8208__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8208.cljs$core$IFn$_invoke$arity$variadic = G__8208__delegate;
return G__8208;
})()
;
om_tools$dom$li = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$li__0.call(this);
default:
var G__8211 = null;
if (arguments.length > 1) {
var G__8212__i = 0, G__8212__a = new Array(arguments.length -  1);
while (G__8212__i < G__8212__a.length) {G__8212__a[G__8212__i] = arguments[G__8212__i + 1]; ++G__8212__i;}
G__8211 = new cljs.core.IndexedSeq(G__8212__a,0);
}
return om_tools$dom$li__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$li.cljs$lang$maxFixedArity = 1;
om_tools$dom$li.cljs$lang$applyTo = om_tools$dom$li__2.cljs$lang$applyTo;
om_tools$dom$li.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$li__0;
om_tools$dom$li.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$li__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$li;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.link = (function() {
var om_tools$dom$link = null;
var om_tools$dom$link__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.link,null,null);
});
var om_tools$dom$link__2 = (function() { 
var G__8213__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.link,opts__7559__auto__,children__7560__auto__);
};
var G__8213 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8214__i = 0, G__8214__a = new Array(arguments.length -  1);
while (G__8214__i < G__8214__a.length) {G__8214__a[G__8214__i] = arguments[G__8214__i + 1]; ++G__8214__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8214__a,0);
} 
return G__8213__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8213.cljs$lang$maxFixedArity = 1;
G__8213.cljs$lang$applyTo = (function (arglist__8215){
var opts__7559__auto__ = cljs.core.first(arglist__8215);
var children__7560__auto__ = cljs.core.rest(arglist__8215);
return G__8213__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8213.cljs$core$IFn$_invoke$arity$variadic = G__8213__delegate;
return G__8213;
})()
;
om_tools$dom$link = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$link__0.call(this);
default:
var G__8216 = null;
if (arguments.length > 1) {
var G__8217__i = 0, G__8217__a = new Array(arguments.length -  1);
while (G__8217__i < G__8217__a.length) {G__8217__a[G__8217__i] = arguments[G__8217__i + 1]; ++G__8217__i;}
G__8216 = new cljs.core.IndexedSeq(G__8217__a,0);
}
return om_tools$dom$link__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$link.cljs$lang$maxFixedArity = 1;
om_tools$dom$link.cljs$lang$applyTo = om_tools$dom$link__2.cljs$lang$applyTo;
om_tools$dom$link.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$link__0;
om_tools$dom$link.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$link__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$link;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.main = (function() {
var om_tools$dom$main = null;
var om_tools$dom$main__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.main,null,null);
});
var om_tools$dom$main__2 = (function() { 
var G__8218__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.main,opts__7559__auto__,children__7560__auto__);
};
var G__8218 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8219__i = 0, G__8219__a = new Array(arguments.length -  1);
while (G__8219__i < G__8219__a.length) {G__8219__a[G__8219__i] = arguments[G__8219__i + 1]; ++G__8219__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8219__a,0);
} 
return G__8218__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8218.cljs$lang$maxFixedArity = 1;
G__8218.cljs$lang$applyTo = (function (arglist__8220){
var opts__7559__auto__ = cljs.core.first(arglist__8220);
var children__7560__auto__ = cljs.core.rest(arglist__8220);
return G__8218__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8218.cljs$core$IFn$_invoke$arity$variadic = G__8218__delegate;
return G__8218;
})()
;
om_tools$dom$main = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$main__0.call(this);
default:
var G__8221 = null;
if (arguments.length > 1) {
var G__8222__i = 0, G__8222__a = new Array(arguments.length -  1);
while (G__8222__i < G__8222__a.length) {G__8222__a[G__8222__i] = arguments[G__8222__i + 1]; ++G__8222__i;}
G__8221 = new cljs.core.IndexedSeq(G__8222__a,0);
}
return om_tools$dom$main__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$main.cljs$lang$maxFixedArity = 1;
om_tools$dom$main.cljs$lang$applyTo = om_tools$dom$main__2.cljs$lang$applyTo;
om_tools$dom$main.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$main__0;
om_tools$dom$main.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$main__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$main;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.map = (function() {
var om_tools$dom$map = null;
var om_tools$dom$map__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.map,null,null);
});
var om_tools$dom$map__2 = (function() { 
var G__8223__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.map,opts__7559__auto__,children__7560__auto__);
};
var G__8223 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8224__i = 0, G__8224__a = new Array(arguments.length -  1);
while (G__8224__i < G__8224__a.length) {G__8224__a[G__8224__i] = arguments[G__8224__i + 1]; ++G__8224__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8224__a,0);
} 
return G__8223__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8223.cljs$lang$maxFixedArity = 1;
G__8223.cljs$lang$applyTo = (function (arglist__8225){
var opts__7559__auto__ = cljs.core.first(arglist__8225);
var children__7560__auto__ = cljs.core.rest(arglist__8225);
return G__8223__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8223.cljs$core$IFn$_invoke$arity$variadic = G__8223__delegate;
return G__8223;
})()
;
om_tools$dom$map = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$map__0.call(this);
default:
var G__8226 = null;
if (arguments.length > 1) {
var G__8227__i = 0, G__8227__a = new Array(arguments.length -  1);
while (G__8227__i < G__8227__a.length) {G__8227__a[G__8227__i] = arguments[G__8227__i + 1]; ++G__8227__i;}
G__8226 = new cljs.core.IndexedSeq(G__8227__a,0);
}
return om_tools$dom$map__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$map.cljs$lang$maxFixedArity = 1;
om_tools$dom$map.cljs$lang$applyTo = om_tools$dom$map__2.cljs$lang$applyTo;
om_tools$dom$map.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$map__0;
om_tools$dom$map.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$map__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$map;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.mark = (function() {
var om_tools$dom$mark = null;
var om_tools$dom$mark__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.mark,null,null);
});
var om_tools$dom$mark__2 = (function() { 
var G__8228__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.mark,opts__7559__auto__,children__7560__auto__);
};
var G__8228 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8229__i = 0, G__8229__a = new Array(arguments.length -  1);
while (G__8229__i < G__8229__a.length) {G__8229__a[G__8229__i] = arguments[G__8229__i + 1]; ++G__8229__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8229__a,0);
} 
return G__8228__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8228.cljs$lang$maxFixedArity = 1;
G__8228.cljs$lang$applyTo = (function (arglist__8230){
var opts__7559__auto__ = cljs.core.first(arglist__8230);
var children__7560__auto__ = cljs.core.rest(arglist__8230);
return G__8228__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8228.cljs$core$IFn$_invoke$arity$variadic = G__8228__delegate;
return G__8228;
})()
;
om_tools$dom$mark = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$mark__0.call(this);
default:
var G__8231 = null;
if (arguments.length > 1) {
var G__8232__i = 0, G__8232__a = new Array(arguments.length -  1);
while (G__8232__i < G__8232__a.length) {G__8232__a[G__8232__i] = arguments[G__8232__i + 1]; ++G__8232__i;}
G__8231 = new cljs.core.IndexedSeq(G__8232__a,0);
}
return om_tools$dom$mark__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$mark.cljs$lang$maxFixedArity = 1;
om_tools$dom$mark.cljs$lang$applyTo = om_tools$dom$mark__2.cljs$lang$applyTo;
om_tools$dom$mark.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$mark__0;
om_tools$dom$mark.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$mark__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$mark;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.marquee = (function() {
var om_tools$dom$marquee = null;
var om_tools$dom$marquee__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.marquee,null,null);
});
var om_tools$dom$marquee__2 = (function() { 
var G__8233__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.marquee,opts__7559__auto__,children__7560__auto__);
};
var G__8233 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8234__i = 0, G__8234__a = new Array(arguments.length -  1);
while (G__8234__i < G__8234__a.length) {G__8234__a[G__8234__i] = arguments[G__8234__i + 1]; ++G__8234__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8234__a,0);
} 
return G__8233__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8233.cljs$lang$maxFixedArity = 1;
G__8233.cljs$lang$applyTo = (function (arglist__8235){
var opts__7559__auto__ = cljs.core.first(arglist__8235);
var children__7560__auto__ = cljs.core.rest(arglist__8235);
return G__8233__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8233.cljs$core$IFn$_invoke$arity$variadic = G__8233__delegate;
return G__8233;
})()
;
om_tools$dom$marquee = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$marquee__0.call(this);
default:
var G__8236 = null;
if (arguments.length > 1) {
var G__8237__i = 0, G__8237__a = new Array(arguments.length -  1);
while (G__8237__i < G__8237__a.length) {G__8237__a[G__8237__i] = arguments[G__8237__i + 1]; ++G__8237__i;}
G__8236 = new cljs.core.IndexedSeq(G__8237__a,0);
}
return om_tools$dom$marquee__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$marquee.cljs$lang$maxFixedArity = 1;
om_tools$dom$marquee.cljs$lang$applyTo = om_tools$dom$marquee__2.cljs$lang$applyTo;
om_tools$dom$marquee.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$marquee__0;
om_tools$dom$marquee.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$marquee__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$marquee;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.menu = (function() {
var om_tools$dom$menu = null;
var om_tools$dom$menu__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.menu,null,null);
});
var om_tools$dom$menu__2 = (function() { 
var G__8238__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.menu,opts__7559__auto__,children__7560__auto__);
};
var G__8238 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8239__i = 0, G__8239__a = new Array(arguments.length -  1);
while (G__8239__i < G__8239__a.length) {G__8239__a[G__8239__i] = arguments[G__8239__i + 1]; ++G__8239__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8239__a,0);
} 
return G__8238__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8238.cljs$lang$maxFixedArity = 1;
G__8238.cljs$lang$applyTo = (function (arglist__8240){
var opts__7559__auto__ = cljs.core.first(arglist__8240);
var children__7560__auto__ = cljs.core.rest(arglist__8240);
return G__8238__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8238.cljs$core$IFn$_invoke$arity$variadic = G__8238__delegate;
return G__8238;
})()
;
om_tools$dom$menu = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$menu__0.call(this);
default:
var G__8241 = null;
if (arguments.length > 1) {
var G__8242__i = 0, G__8242__a = new Array(arguments.length -  1);
while (G__8242__i < G__8242__a.length) {G__8242__a[G__8242__i] = arguments[G__8242__i + 1]; ++G__8242__i;}
G__8241 = new cljs.core.IndexedSeq(G__8242__a,0);
}
return om_tools$dom$menu__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$menu.cljs$lang$maxFixedArity = 1;
om_tools$dom$menu.cljs$lang$applyTo = om_tools$dom$menu__2.cljs$lang$applyTo;
om_tools$dom$menu.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$menu__0;
om_tools$dom$menu.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$menu__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$menu;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.menuitem = (function() {
var om_tools$dom$menuitem = null;
var om_tools$dom$menuitem__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.menuitem,null,null);
});
var om_tools$dom$menuitem__2 = (function() { 
var G__8243__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.menuitem,opts__7559__auto__,children__7560__auto__);
};
var G__8243 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8244__i = 0, G__8244__a = new Array(arguments.length -  1);
while (G__8244__i < G__8244__a.length) {G__8244__a[G__8244__i] = arguments[G__8244__i + 1]; ++G__8244__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8244__a,0);
} 
return G__8243__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8243.cljs$lang$maxFixedArity = 1;
G__8243.cljs$lang$applyTo = (function (arglist__8245){
var opts__7559__auto__ = cljs.core.first(arglist__8245);
var children__7560__auto__ = cljs.core.rest(arglist__8245);
return G__8243__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8243.cljs$core$IFn$_invoke$arity$variadic = G__8243__delegate;
return G__8243;
})()
;
om_tools$dom$menuitem = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$menuitem__0.call(this);
default:
var G__8246 = null;
if (arguments.length > 1) {
var G__8247__i = 0, G__8247__a = new Array(arguments.length -  1);
while (G__8247__i < G__8247__a.length) {G__8247__a[G__8247__i] = arguments[G__8247__i + 1]; ++G__8247__i;}
G__8246 = new cljs.core.IndexedSeq(G__8247__a,0);
}
return om_tools$dom$menuitem__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$menuitem.cljs$lang$maxFixedArity = 1;
om_tools$dom$menuitem.cljs$lang$applyTo = om_tools$dom$menuitem__2.cljs$lang$applyTo;
om_tools$dom$menuitem.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$menuitem__0;
om_tools$dom$menuitem.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$menuitem__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$menuitem;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.meta = (function() {
var om_tools$dom$meta = null;
var om_tools$dom$meta__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.meta,null,null);
});
var om_tools$dom$meta__2 = (function() { 
var G__8248__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.meta,opts__7559__auto__,children__7560__auto__);
};
var G__8248 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8249__i = 0, G__8249__a = new Array(arguments.length -  1);
while (G__8249__i < G__8249__a.length) {G__8249__a[G__8249__i] = arguments[G__8249__i + 1]; ++G__8249__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8249__a,0);
} 
return G__8248__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8248.cljs$lang$maxFixedArity = 1;
G__8248.cljs$lang$applyTo = (function (arglist__8250){
var opts__7559__auto__ = cljs.core.first(arglist__8250);
var children__7560__auto__ = cljs.core.rest(arglist__8250);
return G__8248__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8248.cljs$core$IFn$_invoke$arity$variadic = G__8248__delegate;
return G__8248;
})()
;
om_tools$dom$meta = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$meta__0.call(this);
default:
var G__8251 = null;
if (arguments.length > 1) {
var G__8252__i = 0, G__8252__a = new Array(arguments.length -  1);
while (G__8252__i < G__8252__a.length) {G__8252__a[G__8252__i] = arguments[G__8252__i + 1]; ++G__8252__i;}
G__8251 = new cljs.core.IndexedSeq(G__8252__a,0);
}
return om_tools$dom$meta__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$meta.cljs$lang$maxFixedArity = 1;
om_tools$dom$meta.cljs$lang$applyTo = om_tools$dom$meta__2.cljs$lang$applyTo;
om_tools$dom$meta.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$meta__0;
om_tools$dom$meta.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$meta__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$meta;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.meter = (function() {
var om_tools$dom$meter = null;
var om_tools$dom$meter__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.meter,null,null);
});
var om_tools$dom$meter__2 = (function() { 
var G__8253__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.meter,opts__7559__auto__,children__7560__auto__);
};
var G__8253 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8254__i = 0, G__8254__a = new Array(arguments.length -  1);
while (G__8254__i < G__8254__a.length) {G__8254__a[G__8254__i] = arguments[G__8254__i + 1]; ++G__8254__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8254__a,0);
} 
return G__8253__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8253.cljs$lang$maxFixedArity = 1;
G__8253.cljs$lang$applyTo = (function (arglist__8255){
var opts__7559__auto__ = cljs.core.first(arglist__8255);
var children__7560__auto__ = cljs.core.rest(arglist__8255);
return G__8253__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8253.cljs$core$IFn$_invoke$arity$variadic = G__8253__delegate;
return G__8253;
})()
;
om_tools$dom$meter = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$meter__0.call(this);
default:
var G__8256 = null;
if (arguments.length > 1) {
var G__8257__i = 0, G__8257__a = new Array(arguments.length -  1);
while (G__8257__i < G__8257__a.length) {G__8257__a[G__8257__i] = arguments[G__8257__i + 1]; ++G__8257__i;}
G__8256 = new cljs.core.IndexedSeq(G__8257__a,0);
}
return om_tools$dom$meter__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$meter.cljs$lang$maxFixedArity = 1;
om_tools$dom$meter.cljs$lang$applyTo = om_tools$dom$meter__2.cljs$lang$applyTo;
om_tools$dom$meter.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$meter__0;
om_tools$dom$meter.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$meter__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$meter;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.nav = (function() {
var om_tools$dom$nav = null;
var om_tools$dom$nav__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.nav,null,null);
});
var om_tools$dom$nav__2 = (function() { 
var G__8258__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.nav,opts__7559__auto__,children__7560__auto__);
};
var G__8258 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8259__i = 0, G__8259__a = new Array(arguments.length -  1);
while (G__8259__i < G__8259__a.length) {G__8259__a[G__8259__i] = arguments[G__8259__i + 1]; ++G__8259__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8259__a,0);
} 
return G__8258__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8258.cljs$lang$maxFixedArity = 1;
G__8258.cljs$lang$applyTo = (function (arglist__8260){
var opts__7559__auto__ = cljs.core.first(arglist__8260);
var children__7560__auto__ = cljs.core.rest(arglist__8260);
return G__8258__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8258.cljs$core$IFn$_invoke$arity$variadic = G__8258__delegate;
return G__8258;
})()
;
om_tools$dom$nav = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$nav__0.call(this);
default:
var G__8261 = null;
if (arguments.length > 1) {
var G__8262__i = 0, G__8262__a = new Array(arguments.length -  1);
while (G__8262__i < G__8262__a.length) {G__8262__a[G__8262__i] = arguments[G__8262__i + 1]; ++G__8262__i;}
G__8261 = new cljs.core.IndexedSeq(G__8262__a,0);
}
return om_tools$dom$nav__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$nav.cljs$lang$maxFixedArity = 1;
om_tools$dom$nav.cljs$lang$applyTo = om_tools$dom$nav__2.cljs$lang$applyTo;
om_tools$dom$nav.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$nav__0;
om_tools$dom$nav.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$nav__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$nav;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.noscript = (function() {
var om_tools$dom$noscript = null;
var om_tools$dom$noscript__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.noscript,null,null);
});
var om_tools$dom$noscript__2 = (function() { 
var G__8263__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.noscript,opts__7559__auto__,children__7560__auto__);
};
var G__8263 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8264__i = 0, G__8264__a = new Array(arguments.length -  1);
while (G__8264__i < G__8264__a.length) {G__8264__a[G__8264__i] = arguments[G__8264__i + 1]; ++G__8264__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8264__a,0);
} 
return G__8263__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8263.cljs$lang$maxFixedArity = 1;
G__8263.cljs$lang$applyTo = (function (arglist__8265){
var opts__7559__auto__ = cljs.core.first(arglist__8265);
var children__7560__auto__ = cljs.core.rest(arglist__8265);
return G__8263__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8263.cljs$core$IFn$_invoke$arity$variadic = G__8263__delegate;
return G__8263;
})()
;
om_tools$dom$noscript = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$noscript__0.call(this);
default:
var G__8266 = null;
if (arguments.length > 1) {
var G__8267__i = 0, G__8267__a = new Array(arguments.length -  1);
while (G__8267__i < G__8267__a.length) {G__8267__a[G__8267__i] = arguments[G__8267__i + 1]; ++G__8267__i;}
G__8266 = new cljs.core.IndexedSeq(G__8267__a,0);
}
return om_tools$dom$noscript__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$noscript.cljs$lang$maxFixedArity = 1;
om_tools$dom$noscript.cljs$lang$applyTo = om_tools$dom$noscript__2.cljs$lang$applyTo;
om_tools$dom$noscript.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$noscript__0;
om_tools$dom$noscript.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$noscript__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$noscript;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.object = (function() {
var om_tools$dom$object = null;
var om_tools$dom$object__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.object,null,null);
});
var om_tools$dom$object__2 = (function() { 
var G__8268__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.object,opts__7559__auto__,children__7560__auto__);
};
var G__8268 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8269__i = 0, G__8269__a = new Array(arguments.length -  1);
while (G__8269__i < G__8269__a.length) {G__8269__a[G__8269__i] = arguments[G__8269__i + 1]; ++G__8269__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8269__a,0);
} 
return G__8268__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8268.cljs$lang$maxFixedArity = 1;
G__8268.cljs$lang$applyTo = (function (arglist__8270){
var opts__7559__auto__ = cljs.core.first(arglist__8270);
var children__7560__auto__ = cljs.core.rest(arglist__8270);
return G__8268__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8268.cljs$core$IFn$_invoke$arity$variadic = G__8268__delegate;
return G__8268;
})()
;
om_tools$dom$object = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$object__0.call(this);
default:
var G__8271 = null;
if (arguments.length > 1) {
var G__8272__i = 0, G__8272__a = new Array(arguments.length -  1);
while (G__8272__i < G__8272__a.length) {G__8272__a[G__8272__i] = arguments[G__8272__i + 1]; ++G__8272__i;}
G__8271 = new cljs.core.IndexedSeq(G__8272__a,0);
}
return om_tools$dom$object__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$object.cljs$lang$maxFixedArity = 1;
om_tools$dom$object.cljs$lang$applyTo = om_tools$dom$object__2.cljs$lang$applyTo;
om_tools$dom$object.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$object__0;
om_tools$dom$object.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$object__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$object;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.ol = (function() {
var om_tools$dom$ol = null;
var om_tools$dom$ol__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ol,null,null);
});
var om_tools$dom$ol__2 = (function() { 
var G__8273__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.ol,opts__7559__auto__,children__7560__auto__);
};
var G__8273 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8274__i = 0, G__8274__a = new Array(arguments.length -  1);
while (G__8274__i < G__8274__a.length) {G__8274__a[G__8274__i] = arguments[G__8274__i + 1]; ++G__8274__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8274__a,0);
} 
return G__8273__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8273.cljs$lang$maxFixedArity = 1;
G__8273.cljs$lang$applyTo = (function (arglist__8275){
var opts__7559__auto__ = cljs.core.first(arglist__8275);
var children__7560__auto__ = cljs.core.rest(arglist__8275);
return G__8273__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8273.cljs$core$IFn$_invoke$arity$variadic = G__8273__delegate;
return G__8273;
})()
;
om_tools$dom$ol = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$ol__0.call(this);
default:
var G__8276 = null;
if (arguments.length > 1) {
var G__8277__i = 0, G__8277__a = new Array(arguments.length -  1);
while (G__8277__i < G__8277__a.length) {G__8277__a[G__8277__i] = arguments[G__8277__i + 1]; ++G__8277__i;}
G__8276 = new cljs.core.IndexedSeq(G__8277__a,0);
}
return om_tools$dom$ol__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$ol.cljs$lang$maxFixedArity = 1;
om_tools$dom$ol.cljs$lang$applyTo = om_tools$dom$ol__2.cljs$lang$applyTo;
om_tools$dom$ol.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$ol__0;
om_tools$dom$ol.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$ol__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$ol;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.optgroup = (function() {
var om_tools$dom$optgroup = null;
var om_tools$dom$optgroup__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.optgroup,null,null);
});
var om_tools$dom$optgroup__2 = (function() { 
var G__8278__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.optgroup,opts__7559__auto__,children__7560__auto__);
};
var G__8278 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8279__i = 0, G__8279__a = new Array(arguments.length -  1);
while (G__8279__i < G__8279__a.length) {G__8279__a[G__8279__i] = arguments[G__8279__i + 1]; ++G__8279__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8279__a,0);
} 
return G__8278__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8278.cljs$lang$maxFixedArity = 1;
G__8278.cljs$lang$applyTo = (function (arglist__8280){
var opts__7559__auto__ = cljs.core.first(arglist__8280);
var children__7560__auto__ = cljs.core.rest(arglist__8280);
return G__8278__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8278.cljs$core$IFn$_invoke$arity$variadic = G__8278__delegate;
return G__8278;
})()
;
om_tools$dom$optgroup = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$optgroup__0.call(this);
default:
var G__8281 = null;
if (arguments.length > 1) {
var G__8282__i = 0, G__8282__a = new Array(arguments.length -  1);
while (G__8282__i < G__8282__a.length) {G__8282__a[G__8282__i] = arguments[G__8282__i + 1]; ++G__8282__i;}
G__8281 = new cljs.core.IndexedSeq(G__8282__a,0);
}
return om_tools$dom$optgroup__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$optgroup.cljs$lang$maxFixedArity = 1;
om_tools$dom$optgroup.cljs$lang$applyTo = om_tools$dom$optgroup__2.cljs$lang$applyTo;
om_tools$dom$optgroup.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$optgroup__0;
om_tools$dom$optgroup.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$optgroup__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$optgroup;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.output = (function() {
var om_tools$dom$output = null;
var om_tools$dom$output__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.output,null,null);
});
var om_tools$dom$output__2 = (function() { 
var G__8283__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.output,opts__7559__auto__,children__7560__auto__);
};
var G__8283 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8284__i = 0, G__8284__a = new Array(arguments.length -  1);
while (G__8284__i < G__8284__a.length) {G__8284__a[G__8284__i] = arguments[G__8284__i + 1]; ++G__8284__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8284__a,0);
} 
return G__8283__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8283.cljs$lang$maxFixedArity = 1;
G__8283.cljs$lang$applyTo = (function (arglist__8285){
var opts__7559__auto__ = cljs.core.first(arglist__8285);
var children__7560__auto__ = cljs.core.rest(arglist__8285);
return G__8283__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8283.cljs$core$IFn$_invoke$arity$variadic = G__8283__delegate;
return G__8283;
})()
;
om_tools$dom$output = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$output__0.call(this);
default:
var G__8286 = null;
if (arguments.length > 1) {
var G__8287__i = 0, G__8287__a = new Array(arguments.length -  1);
while (G__8287__i < G__8287__a.length) {G__8287__a[G__8287__i] = arguments[G__8287__i + 1]; ++G__8287__i;}
G__8286 = new cljs.core.IndexedSeq(G__8287__a,0);
}
return om_tools$dom$output__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$output.cljs$lang$maxFixedArity = 1;
om_tools$dom$output.cljs$lang$applyTo = om_tools$dom$output__2.cljs$lang$applyTo;
om_tools$dom$output.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$output__0;
om_tools$dom$output.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$output__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$output;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.p = (function() {
var om_tools$dom$p = null;
var om_tools$dom$p__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.p,null,null);
});
var om_tools$dom$p__2 = (function() { 
var G__8288__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.p,opts__7559__auto__,children__7560__auto__);
};
var G__8288 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8289__i = 0, G__8289__a = new Array(arguments.length -  1);
while (G__8289__i < G__8289__a.length) {G__8289__a[G__8289__i] = arguments[G__8289__i + 1]; ++G__8289__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8289__a,0);
} 
return G__8288__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8288.cljs$lang$maxFixedArity = 1;
G__8288.cljs$lang$applyTo = (function (arglist__8290){
var opts__7559__auto__ = cljs.core.first(arglist__8290);
var children__7560__auto__ = cljs.core.rest(arglist__8290);
return G__8288__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8288.cljs$core$IFn$_invoke$arity$variadic = G__8288__delegate;
return G__8288;
})()
;
om_tools$dom$p = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$p__0.call(this);
default:
var G__8291 = null;
if (arguments.length > 1) {
var G__8292__i = 0, G__8292__a = new Array(arguments.length -  1);
while (G__8292__i < G__8292__a.length) {G__8292__a[G__8292__i] = arguments[G__8292__i + 1]; ++G__8292__i;}
G__8291 = new cljs.core.IndexedSeq(G__8292__a,0);
}
return om_tools$dom$p__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$p.cljs$lang$maxFixedArity = 1;
om_tools$dom$p.cljs$lang$applyTo = om_tools$dom$p__2.cljs$lang$applyTo;
om_tools$dom$p.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$p__0;
om_tools$dom$p.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$p__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$p;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.param = (function() {
var om_tools$dom$param = null;
var om_tools$dom$param__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.param,null,null);
});
var om_tools$dom$param__2 = (function() { 
var G__8293__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.param,opts__7559__auto__,children__7560__auto__);
};
var G__8293 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8294__i = 0, G__8294__a = new Array(arguments.length -  1);
while (G__8294__i < G__8294__a.length) {G__8294__a[G__8294__i] = arguments[G__8294__i + 1]; ++G__8294__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8294__a,0);
} 
return G__8293__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8293.cljs$lang$maxFixedArity = 1;
G__8293.cljs$lang$applyTo = (function (arglist__8295){
var opts__7559__auto__ = cljs.core.first(arglist__8295);
var children__7560__auto__ = cljs.core.rest(arglist__8295);
return G__8293__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8293.cljs$core$IFn$_invoke$arity$variadic = G__8293__delegate;
return G__8293;
})()
;
om_tools$dom$param = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$param__0.call(this);
default:
var G__8296 = null;
if (arguments.length > 1) {
var G__8297__i = 0, G__8297__a = new Array(arguments.length -  1);
while (G__8297__i < G__8297__a.length) {G__8297__a[G__8297__i] = arguments[G__8297__i + 1]; ++G__8297__i;}
G__8296 = new cljs.core.IndexedSeq(G__8297__a,0);
}
return om_tools$dom$param__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$param.cljs$lang$maxFixedArity = 1;
om_tools$dom$param.cljs$lang$applyTo = om_tools$dom$param__2.cljs$lang$applyTo;
om_tools$dom$param.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$param__0;
om_tools$dom$param.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$param__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$param;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.pre = (function() {
var om_tools$dom$pre = null;
var om_tools$dom$pre__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.pre,null,null);
});
var om_tools$dom$pre__2 = (function() { 
var G__8298__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.pre,opts__7559__auto__,children__7560__auto__);
};
var G__8298 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8299__i = 0, G__8299__a = new Array(arguments.length -  1);
while (G__8299__i < G__8299__a.length) {G__8299__a[G__8299__i] = arguments[G__8299__i + 1]; ++G__8299__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8299__a,0);
} 
return G__8298__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8298.cljs$lang$maxFixedArity = 1;
G__8298.cljs$lang$applyTo = (function (arglist__8300){
var opts__7559__auto__ = cljs.core.first(arglist__8300);
var children__7560__auto__ = cljs.core.rest(arglist__8300);
return G__8298__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8298.cljs$core$IFn$_invoke$arity$variadic = G__8298__delegate;
return G__8298;
})()
;
om_tools$dom$pre = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$pre__0.call(this);
default:
var G__8301 = null;
if (arguments.length > 1) {
var G__8302__i = 0, G__8302__a = new Array(arguments.length -  1);
while (G__8302__i < G__8302__a.length) {G__8302__a[G__8302__i] = arguments[G__8302__i + 1]; ++G__8302__i;}
G__8301 = new cljs.core.IndexedSeq(G__8302__a,0);
}
return om_tools$dom$pre__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$pre.cljs$lang$maxFixedArity = 1;
om_tools$dom$pre.cljs$lang$applyTo = om_tools$dom$pre__2.cljs$lang$applyTo;
om_tools$dom$pre.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$pre__0;
om_tools$dom$pre.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$pre__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$pre;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.progress = (function() {
var om_tools$dom$progress = null;
var om_tools$dom$progress__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.progress,null,null);
});
var om_tools$dom$progress__2 = (function() { 
var G__8303__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.progress,opts__7559__auto__,children__7560__auto__);
};
var G__8303 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8304__i = 0, G__8304__a = new Array(arguments.length -  1);
while (G__8304__i < G__8304__a.length) {G__8304__a[G__8304__i] = arguments[G__8304__i + 1]; ++G__8304__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8304__a,0);
} 
return G__8303__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8303.cljs$lang$maxFixedArity = 1;
G__8303.cljs$lang$applyTo = (function (arglist__8305){
var opts__7559__auto__ = cljs.core.first(arglist__8305);
var children__7560__auto__ = cljs.core.rest(arglist__8305);
return G__8303__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8303.cljs$core$IFn$_invoke$arity$variadic = G__8303__delegate;
return G__8303;
})()
;
om_tools$dom$progress = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$progress__0.call(this);
default:
var G__8306 = null;
if (arguments.length > 1) {
var G__8307__i = 0, G__8307__a = new Array(arguments.length -  1);
while (G__8307__i < G__8307__a.length) {G__8307__a[G__8307__i] = arguments[G__8307__i + 1]; ++G__8307__i;}
G__8306 = new cljs.core.IndexedSeq(G__8307__a,0);
}
return om_tools$dom$progress__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$progress.cljs$lang$maxFixedArity = 1;
om_tools$dom$progress.cljs$lang$applyTo = om_tools$dom$progress__2.cljs$lang$applyTo;
om_tools$dom$progress.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$progress__0;
om_tools$dom$progress.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$progress__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$progress;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.q = (function() {
var om_tools$dom$q = null;
var om_tools$dom$q__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.q,null,null);
});
var om_tools$dom$q__2 = (function() { 
var G__8308__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.q,opts__7559__auto__,children__7560__auto__);
};
var G__8308 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8309__i = 0, G__8309__a = new Array(arguments.length -  1);
while (G__8309__i < G__8309__a.length) {G__8309__a[G__8309__i] = arguments[G__8309__i + 1]; ++G__8309__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8309__a,0);
} 
return G__8308__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8308.cljs$lang$maxFixedArity = 1;
G__8308.cljs$lang$applyTo = (function (arglist__8310){
var opts__7559__auto__ = cljs.core.first(arglist__8310);
var children__7560__auto__ = cljs.core.rest(arglist__8310);
return G__8308__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8308.cljs$core$IFn$_invoke$arity$variadic = G__8308__delegate;
return G__8308;
})()
;
om_tools$dom$q = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$q__0.call(this);
default:
var G__8311 = null;
if (arguments.length > 1) {
var G__8312__i = 0, G__8312__a = new Array(arguments.length -  1);
while (G__8312__i < G__8312__a.length) {G__8312__a[G__8312__i] = arguments[G__8312__i + 1]; ++G__8312__i;}
G__8311 = new cljs.core.IndexedSeq(G__8312__a,0);
}
return om_tools$dom$q__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$q.cljs$lang$maxFixedArity = 1;
om_tools$dom$q.cljs$lang$applyTo = om_tools$dom$q__2.cljs$lang$applyTo;
om_tools$dom$q.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$q__0;
om_tools$dom$q.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$q__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$q;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.rp = (function() {
var om_tools$dom$rp = null;
var om_tools$dom$rp__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rp,null,null);
});
var om_tools$dom$rp__2 = (function() { 
var G__8313__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.rp,opts__7559__auto__,children__7560__auto__);
};
var G__8313 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8314__i = 0, G__8314__a = new Array(arguments.length -  1);
while (G__8314__i < G__8314__a.length) {G__8314__a[G__8314__i] = arguments[G__8314__i + 1]; ++G__8314__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8314__a,0);
} 
return G__8313__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8313.cljs$lang$maxFixedArity = 1;
G__8313.cljs$lang$applyTo = (function (arglist__8315){
var opts__7559__auto__ = cljs.core.first(arglist__8315);
var children__7560__auto__ = cljs.core.rest(arglist__8315);
return G__8313__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8313.cljs$core$IFn$_invoke$arity$variadic = G__8313__delegate;
return G__8313;
})()
;
om_tools$dom$rp = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$rp__0.call(this);
default:
var G__8316 = null;
if (arguments.length > 1) {
var G__8317__i = 0, G__8317__a = new Array(arguments.length -  1);
while (G__8317__i < G__8317__a.length) {G__8317__a[G__8317__i] = arguments[G__8317__i + 1]; ++G__8317__i;}
G__8316 = new cljs.core.IndexedSeq(G__8317__a,0);
}
return om_tools$dom$rp__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$rp.cljs$lang$maxFixedArity = 1;
om_tools$dom$rp.cljs$lang$applyTo = om_tools$dom$rp__2.cljs$lang$applyTo;
om_tools$dom$rp.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$rp__0;
om_tools$dom$rp.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$rp__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$rp;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.rt = (function() {
var om_tools$dom$rt = null;
var om_tools$dom$rt__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rt,null,null);
});
var om_tools$dom$rt__2 = (function() { 
var G__8318__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.rt,opts__7559__auto__,children__7560__auto__);
};
var G__8318 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8319__i = 0, G__8319__a = new Array(arguments.length -  1);
while (G__8319__i < G__8319__a.length) {G__8319__a[G__8319__i] = arguments[G__8319__i + 1]; ++G__8319__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8319__a,0);
} 
return G__8318__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8318.cljs$lang$maxFixedArity = 1;
G__8318.cljs$lang$applyTo = (function (arglist__8320){
var opts__7559__auto__ = cljs.core.first(arglist__8320);
var children__7560__auto__ = cljs.core.rest(arglist__8320);
return G__8318__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8318.cljs$core$IFn$_invoke$arity$variadic = G__8318__delegate;
return G__8318;
})()
;
om_tools$dom$rt = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$rt__0.call(this);
default:
var G__8321 = null;
if (arguments.length > 1) {
var G__8322__i = 0, G__8322__a = new Array(arguments.length -  1);
while (G__8322__i < G__8322__a.length) {G__8322__a[G__8322__i] = arguments[G__8322__i + 1]; ++G__8322__i;}
G__8321 = new cljs.core.IndexedSeq(G__8322__a,0);
}
return om_tools$dom$rt__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$rt.cljs$lang$maxFixedArity = 1;
om_tools$dom$rt.cljs$lang$applyTo = om_tools$dom$rt__2.cljs$lang$applyTo;
om_tools$dom$rt.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$rt__0;
om_tools$dom$rt.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$rt__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$rt;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.ruby = (function() {
var om_tools$dom$ruby = null;
var om_tools$dom$ruby__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ruby,null,null);
});
var om_tools$dom$ruby__2 = (function() { 
var G__8323__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.ruby,opts__7559__auto__,children__7560__auto__);
};
var G__8323 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8324__i = 0, G__8324__a = new Array(arguments.length -  1);
while (G__8324__i < G__8324__a.length) {G__8324__a[G__8324__i] = arguments[G__8324__i + 1]; ++G__8324__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8324__a,0);
} 
return G__8323__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8323.cljs$lang$maxFixedArity = 1;
G__8323.cljs$lang$applyTo = (function (arglist__8325){
var opts__7559__auto__ = cljs.core.first(arglist__8325);
var children__7560__auto__ = cljs.core.rest(arglist__8325);
return G__8323__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8323.cljs$core$IFn$_invoke$arity$variadic = G__8323__delegate;
return G__8323;
})()
;
om_tools$dom$ruby = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$ruby__0.call(this);
default:
var G__8326 = null;
if (arguments.length > 1) {
var G__8327__i = 0, G__8327__a = new Array(arguments.length -  1);
while (G__8327__i < G__8327__a.length) {G__8327__a[G__8327__i] = arguments[G__8327__i + 1]; ++G__8327__i;}
G__8326 = new cljs.core.IndexedSeq(G__8327__a,0);
}
return om_tools$dom$ruby__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$ruby.cljs$lang$maxFixedArity = 1;
om_tools$dom$ruby.cljs$lang$applyTo = om_tools$dom$ruby__2.cljs$lang$applyTo;
om_tools$dom$ruby.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$ruby__0;
om_tools$dom$ruby.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$ruby__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$ruby;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.s = (function() {
var om_tools$dom$s = null;
var om_tools$dom$s__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.s,null,null);
});
var om_tools$dom$s__2 = (function() { 
var G__8328__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.s,opts__7559__auto__,children__7560__auto__);
};
var G__8328 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8329__i = 0, G__8329__a = new Array(arguments.length -  1);
while (G__8329__i < G__8329__a.length) {G__8329__a[G__8329__i] = arguments[G__8329__i + 1]; ++G__8329__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8329__a,0);
} 
return G__8328__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8328.cljs$lang$maxFixedArity = 1;
G__8328.cljs$lang$applyTo = (function (arglist__8330){
var opts__7559__auto__ = cljs.core.first(arglist__8330);
var children__7560__auto__ = cljs.core.rest(arglist__8330);
return G__8328__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8328.cljs$core$IFn$_invoke$arity$variadic = G__8328__delegate;
return G__8328;
})()
;
om_tools$dom$s = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$s__0.call(this);
default:
var G__8331 = null;
if (arguments.length > 1) {
var G__8332__i = 0, G__8332__a = new Array(arguments.length -  1);
while (G__8332__i < G__8332__a.length) {G__8332__a[G__8332__i] = arguments[G__8332__i + 1]; ++G__8332__i;}
G__8331 = new cljs.core.IndexedSeq(G__8332__a,0);
}
return om_tools$dom$s__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$s.cljs$lang$maxFixedArity = 1;
om_tools$dom$s.cljs$lang$applyTo = om_tools$dom$s__2.cljs$lang$applyTo;
om_tools$dom$s.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$s__0;
om_tools$dom$s.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$s__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$s;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.samp = (function() {
var om_tools$dom$samp = null;
var om_tools$dom$samp__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.samp,null,null);
});
var om_tools$dom$samp__2 = (function() { 
var G__8333__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.samp,opts__7559__auto__,children__7560__auto__);
};
var G__8333 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8334__i = 0, G__8334__a = new Array(arguments.length -  1);
while (G__8334__i < G__8334__a.length) {G__8334__a[G__8334__i] = arguments[G__8334__i + 1]; ++G__8334__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8334__a,0);
} 
return G__8333__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8333.cljs$lang$maxFixedArity = 1;
G__8333.cljs$lang$applyTo = (function (arglist__8335){
var opts__7559__auto__ = cljs.core.first(arglist__8335);
var children__7560__auto__ = cljs.core.rest(arglist__8335);
return G__8333__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8333.cljs$core$IFn$_invoke$arity$variadic = G__8333__delegate;
return G__8333;
})()
;
om_tools$dom$samp = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$samp__0.call(this);
default:
var G__8336 = null;
if (arguments.length > 1) {
var G__8337__i = 0, G__8337__a = new Array(arguments.length -  1);
while (G__8337__i < G__8337__a.length) {G__8337__a[G__8337__i] = arguments[G__8337__i + 1]; ++G__8337__i;}
G__8336 = new cljs.core.IndexedSeq(G__8337__a,0);
}
return om_tools$dom$samp__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$samp.cljs$lang$maxFixedArity = 1;
om_tools$dom$samp.cljs$lang$applyTo = om_tools$dom$samp__2.cljs$lang$applyTo;
om_tools$dom$samp.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$samp__0;
om_tools$dom$samp.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$samp__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$samp;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.script = (function() {
var om_tools$dom$script = null;
var om_tools$dom$script__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.script,null,null);
});
var om_tools$dom$script__2 = (function() { 
var G__8338__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.script,opts__7559__auto__,children__7560__auto__);
};
var G__8338 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8339__i = 0, G__8339__a = new Array(arguments.length -  1);
while (G__8339__i < G__8339__a.length) {G__8339__a[G__8339__i] = arguments[G__8339__i + 1]; ++G__8339__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8339__a,0);
} 
return G__8338__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8338.cljs$lang$maxFixedArity = 1;
G__8338.cljs$lang$applyTo = (function (arglist__8340){
var opts__7559__auto__ = cljs.core.first(arglist__8340);
var children__7560__auto__ = cljs.core.rest(arglist__8340);
return G__8338__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8338.cljs$core$IFn$_invoke$arity$variadic = G__8338__delegate;
return G__8338;
})()
;
om_tools$dom$script = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$script__0.call(this);
default:
var G__8341 = null;
if (arguments.length > 1) {
var G__8342__i = 0, G__8342__a = new Array(arguments.length -  1);
while (G__8342__i < G__8342__a.length) {G__8342__a[G__8342__i] = arguments[G__8342__i + 1]; ++G__8342__i;}
G__8341 = new cljs.core.IndexedSeq(G__8342__a,0);
}
return om_tools$dom$script__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$script.cljs$lang$maxFixedArity = 1;
om_tools$dom$script.cljs$lang$applyTo = om_tools$dom$script__2.cljs$lang$applyTo;
om_tools$dom$script.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$script__0;
om_tools$dom$script.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$script__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$script;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.section = (function() {
var om_tools$dom$section = null;
var om_tools$dom$section__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.section,null,null);
});
var om_tools$dom$section__2 = (function() { 
var G__8343__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.section,opts__7559__auto__,children__7560__auto__);
};
var G__8343 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8344__i = 0, G__8344__a = new Array(arguments.length -  1);
while (G__8344__i < G__8344__a.length) {G__8344__a[G__8344__i] = arguments[G__8344__i + 1]; ++G__8344__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8344__a,0);
} 
return G__8343__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8343.cljs$lang$maxFixedArity = 1;
G__8343.cljs$lang$applyTo = (function (arglist__8345){
var opts__7559__auto__ = cljs.core.first(arglist__8345);
var children__7560__auto__ = cljs.core.rest(arglist__8345);
return G__8343__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8343.cljs$core$IFn$_invoke$arity$variadic = G__8343__delegate;
return G__8343;
})()
;
om_tools$dom$section = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$section__0.call(this);
default:
var G__8346 = null;
if (arguments.length > 1) {
var G__8347__i = 0, G__8347__a = new Array(arguments.length -  1);
while (G__8347__i < G__8347__a.length) {G__8347__a[G__8347__i] = arguments[G__8347__i + 1]; ++G__8347__i;}
G__8346 = new cljs.core.IndexedSeq(G__8347__a,0);
}
return om_tools$dom$section__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$section.cljs$lang$maxFixedArity = 1;
om_tools$dom$section.cljs$lang$applyTo = om_tools$dom$section__2.cljs$lang$applyTo;
om_tools$dom$section.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$section__0;
om_tools$dom$section.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$section__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$section;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.select = (function() {
var om_tools$dom$select = null;
var om_tools$dom$select__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.select,null,null);
});
var om_tools$dom$select__2 = (function() { 
var G__8348__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.select,opts__7559__auto__,children__7560__auto__);
};
var G__8348 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8349__i = 0, G__8349__a = new Array(arguments.length -  1);
while (G__8349__i < G__8349__a.length) {G__8349__a[G__8349__i] = arguments[G__8349__i + 1]; ++G__8349__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8349__a,0);
} 
return G__8348__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8348.cljs$lang$maxFixedArity = 1;
G__8348.cljs$lang$applyTo = (function (arglist__8350){
var opts__7559__auto__ = cljs.core.first(arglist__8350);
var children__7560__auto__ = cljs.core.rest(arglist__8350);
return G__8348__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8348.cljs$core$IFn$_invoke$arity$variadic = G__8348__delegate;
return G__8348;
})()
;
om_tools$dom$select = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$select__0.call(this);
default:
var G__8351 = null;
if (arguments.length > 1) {
var G__8352__i = 0, G__8352__a = new Array(arguments.length -  1);
while (G__8352__i < G__8352__a.length) {G__8352__a[G__8352__i] = arguments[G__8352__i + 1]; ++G__8352__i;}
G__8351 = new cljs.core.IndexedSeq(G__8352__a,0);
}
return om_tools$dom$select__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$select.cljs$lang$maxFixedArity = 1;
om_tools$dom$select.cljs$lang$applyTo = om_tools$dom$select__2.cljs$lang$applyTo;
om_tools$dom$select.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$select__0;
om_tools$dom$select.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$select__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$select;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.small = (function() {
var om_tools$dom$small = null;
var om_tools$dom$small__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.small,null,null);
});
var om_tools$dom$small__2 = (function() { 
var G__8353__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.small,opts__7559__auto__,children__7560__auto__);
};
var G__8353 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8354__i = 0, G__8354__a = new Array(arguments.length -  1);
while (G__8354__i < G__8354__a.length) {G__8354__a[G__8354__i] = arguments[G__8354__i + 1]; ++G__8354__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8354__a,0);
} 
return G__8353__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8353.cljs$lang$maxFixedArity = 1;
G__8353.cljs$lang$applyTo = (function (arglist__8355){
var opts__7559__auto__ = cljs.core.first(arglist__8355);
var children__7560__auto__ = cljs.core.rest(arglist__8355);
return G__8353__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8353.cljs$core$IFn$_invoke$arity$variadic = G__8353__delegate;
return G__8353;
})()
;
om_tools$dom$small = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$small__0.call(this);
default:
var G__8356 = null;
if (arguments.length > 1) {
var G__8357__i = 0, G__8357__a = new Array(arguments.length -  1);
while (G__8357__i < G__8357__a.length) {G__8357__a[G__8357__i] = arguments[G__8357__i + 1]; ++G__8357__i;}
G__8356 = new cljs.core.IndexedSeq(G__8357__a,0);
}
return om_tools$dom$small__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$small.cljs$lang$maxFixedArity = 1;
om_tools$dom$small.cljs$lang$applyTo = om_tools$dom$small__2.cljs$lang$applyTo;
om_tools$dom$small.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$small__0;
om_tools$dom$small.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$small__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$small;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.source = (function() {
var om_tools$dom$source = null;
var om_tools$dom$source__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.source,null,null);
});
var om_tools$dom$source__2 = (function() { 
var G__8358__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.source,opts__7559__auto__,children__7560__auto__);
};
var G__8358 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8359__i = 0, G__8359__a = new Array(arguments.length -  1);
while (G__8359__i < G__8359__a.length) {G__8359__a[G__8359__i] = arguments[G__8359__i + 1]; ++G__8359__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8359__a,0);
} 
return G__8358__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8358.cljs$lang$maxFixedArity = 1;
G__8358.cljs$lang$applyTo = (function (arglist__8360){
var opts__7559__auto__ = cljs.core.first(arglist__8360);
var children__7560__auto__ = cljs.core.rest(arglist__8360);
return G__8358__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8358.cljs$core$IFn$_invoke$arity$variadic = G__8358__delegate;
return G__8358;
})()
;
om_tools$dom$source = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$source__0.call(this);
default:
var G__8361 = null;
if (arguments.length > 1) {
var G__8362__i = 0, G__8362__a = new Array(arguments.length -  1);
while (G__8362__i < G__8362__a.length) {G__8362__a[G__8362__i] = arguments[G__8362__i + 1]; ++G__8362__i;}
G__8361 = new cljs.core.IndexedSeq(G__8362__a,0);
}
return om_tools$dom$source__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$source.cljs$lang$maxFixedArity = 1;
om_tools$dom$source.cljs$lang$applyTo = om_tools$dom$source__2.cljs$lang$applyTo;
om_tools$dom$source.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$source__0;
om_tools$dom$source.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$source__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$source;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.span = (function() {
var om_tools$dom$span = null;
var om_tools$dom$span__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.span,null,null);
});
var om_tools$dom$span__2 = (function() { 
var G__8363__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.span,opts__7559__auto__,children__7560__auto__);
};
var G__8363 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8364__i = 0, G__8364__a = new Array(arguments.length -  1);
while (G__8364__i < G__8364__a.length) {G__8364__a[G__8364__i] = arguments[G__8364__i + 1]; ++G__8364__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8364__a,0);
} 
return G__8363__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8363.cljs$lang$maxFixedArity = 1;
G__8363.cljs$lang$applyTo = (function (arglist__8365){
var opts__7559__auto__ = cljs.core.first(arglist__8365);
var children__7560__auto__ = cljs.core.rest(arglist__8365);
return G__8363__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8363.cljs$core$IFn$_invoke$arity$variadic = G__8363__delegate;
return G__8363;
})()
;
om_tools$dom$span = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$span__0.call(this);
default:
var G__8366 = null;
if (arguments.length > 1) {
var G__8367__i = 0, G__8367__a = new Array(arguments.length -  1);
while (G__8367__i < G__8367__a.length) {G__8367__a[G__8367__i] = arguments[G__8367__i + 1]; ++G__8367__i;}
G__8366 = new cljs.core.IndexedSeq(G__8367__a,0);
}
return om_tools$dom$span__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$span.cljs$lang$maxFixedArity = 1;
om_tools$dom$span.cljs$lang$applyTo = om_tools$dom$span__2.cljs$lang$applyTo;
om_tools$dom$span.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$span__0;
om_tools$dom$span.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$span__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$span;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.strong = (function() {
var om_tools$dom$strong = null;
var om_tools$dom$strong__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.strong,null,null);
});
var om_tools$dom$strong__2 = (function() { 
var G__8368__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.strong,opts__7559__auto__,children__7560__auto__);
};
var G__8368 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8369__i = 0, G__8369__a = new Array(arguments.length -  1);
while (G__8369__i < G__8369__a.length) {G__8369__a[G__8369__i] = arguments[G__8369__i + 1]; ++G__8369__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8369__a,0);
} 
return G__8368__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8368.cljs$lang$maxFixedArity = 1;
G__8368.cljs$lang$applyTo = (function (arglist__8370){
var opts__7559__auto__ = cljs.core.first(arglist__8370);
var children__7560__auto__ = cljs.core.rest(arglist__8370);
return G__8368__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8368.cljs$core$IFn$_invoke$arity$variadic = G__8368__delegate;
return G__8368;
})()
;
om_tools$dom$strong = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$strong__0.call(this);
default:
var G__8371 = null;
if (arguments.length > 1) {
var G__8372__i = 0, G__8372__a = new Array(arguments.length -  1);
while (G__8372__i < G__8372__a.length) {G__8372__a[G__8372__i] = arguments[G__8372__i + 1]; ++G__8372__i;}
G__8371 = new cljs.core.IndexedSeq(G__8372__a,0);
}
return om_tools$dom$strong__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$strong.cljs$lang$maxFixedArity = 1;
om_tools$dom$strong.cljs$lang$applyTo = om_tools$dom$strong__2.cljs$lang$applyTo;
om_tools$dom$strong.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$strong__0;
om_tools$dom$strong.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$strong__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$strong;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.style = (function() {
var om_tools$dom$style = null;
var om_tools$dom$style__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.style,null,null);
});
var om_tools$dom$style__2 = (function() { 
var G__8373__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.style,opts__7559__auto__,children__7560__auto__);
};
var G__8373 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8374__i = 0, G__8374__a = new Array(arguments.length -  1);
while (G__8374__i < G__8374__a.length) {G__8374__a[G__8374__i] = arguments[G__8374__i + 1]; ++G__8374__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8374__a,0);
} 
return G__8373__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8373.cljs$lang$maxFixedArity = 1;
G__8373.cljs$lang$applyTo = (function (arglist__8375){
var opts__7559__auto__ = cljs.core.first(arglist__8375);
var children__7560__auto__ = cljs.core.rest(arglist__8375);
return G__8373__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8373.cljs$core$IFn$_invoke$arity$variadic = G__8373__delegate;
return G__8373;
})()
;
om_tools$dom$style = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$style__0.call(this);
default:
var G__8376 = null;
if (arguments.length > 1) {
var G__8377__i = 0, G__8377__a = new Array(arguments.length -  1);
while (G__8377__i < G__8377__a.length) {G__8377__a[G__8377__i] = arguments[G__8377__i + 1]; ++G__8377__i;}
G__8376 = new cljs.core.IndexedSeq(G__8377__a,0);
}
return om_tools$dom$style__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$style.cljs$lang$maxFixedArity = 1;
om_tools$dom$style.cljs$lang$applyTo = om_tools$dom$style__2.cljs$lang$applyTo;
om_tools$dom$style.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$style__0;
om_tools$dom$style.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$style__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$style;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.sub = (function() {
var om_tools$dom$sub = null;
var om_tools$dom$sub__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.sub,null,null);
});
var om_tools$dom$sub__2 = (function() { 
var G__8378__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.sub,opts__7559__auto__,children__7560__auto__);
};
var G__8378 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8379__i = 0, G__8379__a = new Array(arguments.length -  1);
while (G__8379__i < G__8379__a.length) {G__8379__a[G__8379__i] = arguments[G__8379__i + 1]; ++G__8379__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8379__a,0);
} 
return G__8378__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8378.cljs$lang$maxFixedArity = 1;
G__8378.cljs$lang$applyTo = (function (arglist__8380){
var opts__7559__auto__ = cljs.core.first(arglist__8380);
var children__7560__auto__ = cljs.core.rest(arglist__8380);
return G__8378__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8378.cljs$core$IFn$_invoke$arity$variadic = G__8378__delegate;
return G__8378;
})()
;
om_tools$dom$sub = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$sub__0.call(this);
default:
var G__8381 = null;
if (arguments.length > 1) {
var G__8382__i = 0, G__8382__a = new Array(arguments.length -  1);
while (G__8382__i < G__8382__a.length) {G__8382__a[G__8382__i] = arguments[G__8382__i + 1]; ++G__8382__i;}
G__8381 = new cljs.core.IndexedSeq(G__8382__a,0);
}
return om_tools$dom$sub__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$sub.cljs$lang$maxFixedArity = 1;
om_tools$dom$sub.cljs$lang$applyTo = om_tools$dom$sub__2.cljs$lang$applyTo;
om_tools$dom$sub.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$sub__0;
om_tools$dom$sub.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$sub__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$sub;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.summary = (function() {
var om_tools$dom$summary = null;
var om_tools$dom$summary__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.summary,null,null);
});
var om_tools$dom$summary__2 = (function() { 
var G__8383__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.summary,opts__7559__auto__,children__7560__auto__);
};
var G__8383 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8384__i = 0, G__8384__a = new Array(arguments.length -  1);
while (G__8384__i < G__8384__a.length) {G__8384__a[G__8384__i] = arguments[G__8384__i + 1]; ++G__8384__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8384__a,0);
} 
return G__8383__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8383.cljs$lang$maxFixedArity = 1;
G__8383.cljs$lang$applyTo = (function (arglist__8385){
var opts__7559__auto__ = cljs.core.first(arglist__8385);
var children__7560__auto__ = cljs.core.rest(arglist__8385);
return G__8383__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8383.cljs$core$IFn$_invoke$arity$variadic = G__8383__delegate;
return G__8383;
})()
;
om_tools$dom$summary = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$summary__0.call(this);
default:
var G__8386 = null;
if (arguments.length > 1) {
var G__8387__i = 0, G__8387__a = new Array(arguments.length -  1);
while (G__8387__i < G__8387__a.length) {G__8387__a[G__8387__i] = arguments[G__8387__i + 1]; ++G__8387__i;}
G__8386 = new cljs.core.IndexedSeq(G__8387__a,0);
}
return om_tools$dom$summary__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$summary.cljs$lang$maxFixedArity = 1;
om_tools$dom$summary.cljs$lang$applyTo = om_tools$dom$summary__2.cljs$lang$applyTo;
om_tools$dom$summary.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$summary__0;
om_tools$dom$summary.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$summary__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$summary;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.sup = (function() {
var om_tools$dom$sup = null;
var om_tools$dom$sup__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.sup,null,null);
});
var om_tools$dom$sup__2 = (function() { 
var G__8388__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.sup,opts__7559__auto__,children__7560__auto__);
};
var G__8388 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8389__i = 0, G__8389__a = new Array(arguments.length -  1);
while (G__8389__i < G__8389__a.length) {G__8389__a[G__8389__i] = arguments[G__8389__i + 1]; ++G__8389__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8389__a,0);
} 
return G__8388__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8388.cljs$lang$maxFixedArity = 1;
G__8388.cljs$lang$applyTo = (function (arglist__8390){
var opts__7559__auto__ = cljs.core.first(arglist__8390);
var children__7560__auto__ = cljs.core.rest(arglist__8390);
return G__8388__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8388.cljs$core$IFn$_invoke$arity$variadic = G__8388__delegate;
return G__8388;
})()
;
om_tools$dom$sup = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$sup__0.call(this);
default:
var G__8391 = null;
if (arguments.length > 1) {
var G__8392__i = 0, G__8392__a = new Array(arguments.length -  1);
while (G__8392__i < G__8392__a.length) {G__8392__a[G__8392__i] = arguments[G__8392__i + 1]; ++G__8392__i;}
G__8391 = new cljs.core.IndexedSeq(G__8392__a,0);
}
return om_tools$dom$sup__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$sup.cljs$lang$maxFixedArity = 1;
om_tools$dom$sup.cljs$lang$applyTo = om_tools$dom$sup__2.cljs$lang$applyTo;
om_tools$dom$sup.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$sup__0;
om_tools$dom$sup.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$sup__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$sup;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.table = (function() {
var om_tools$dom$table = null;
var om_tools$dom$table__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.table,null,null);
});
var om_tools$dom$table__2 = (function() { 
var G__8393__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.table,opts__7559__auto__,children__7560__auto__);
};
var G__8393 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8394__i = 0, G__8394__a = new Array(arguments.length -  1);
while (G__8394__i < G__8394__a.length) {G__8394__a[G__8394__i] = arguments[G__8394__i + 1]; ++G__8394__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8394__a,0);
} 
return G__8393__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8393.cljs$lang$maxFixedArity = 1;
G__8393.cljs$lang$applyTo = (function (arglist__8395){
var opts__7559__auto__ = cljs.core.first(arglist__8395);
var children__7560__auto__ = cljs.core.rest(arglist__8395);
return G__8393__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8393.cljs$core$IFn$_invoke$arity$variadic = G__8393__delegate;
return G__8393;
})()
;
om_tools$dom$table = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$table__0.call(this);
default:
var G__8396 = null;
if (arguments.length > 1) {
var G__8397__i = 0, G__8397__a = new Array(arguments.length -  1);
while (G__8397__i < G__8397__a.length) {G__8397__a[G__8397__i] = arguments[G__8397__i + 1]; ++G__8397__i;}
G__8396 = new cljs.core.IndexedSeq(G__8397__a,0);
}
return om_tools$dom$table__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$table.cljs$lang$maxFixedArity = 1;
om_tools$dom$table.cljs$lang$applyTo = om_tools$dom$table__2.cljs$lang$applyTo;
om_tools$dom$table.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$table__0;
om_tools$dom$table.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$table__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$table;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.tbody = (function() {
var om_tools$dom$tbody = null;
var om_tools$dom$tbody__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tbody,null,null);
});
var om_tools$dom$tbody__2 = (function() { 
var G__8398__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.tbody,opts__7559__auto__,children__7560__auto__);
};
var G__8398 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8399__i = 0, G__8399__a = new Array(arguments.length -  1);
while (G__8399__i < G__8399__a.length) {G__8399__a[G__8399__i] = arguments[G__8399__i + 1]; ++G__8399__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8399__a,0);
} 
return G__8398__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8398.cljs$lang$maxFixedArity = 1;
G__8398.cljs$lang$applyTo = (function (arglist__8400){
var opts__7559__auto__ = cljs.core.first(arglist__8400);
var children__7560__auto__ = cljs.core.rest(arglist__8400);
return G__8398__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8398.cljs$core$IFn$_invoke$arity$variadic = G__8398__delegate;
return G__8398;
})()
;
om_tools$dom$tbody = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$tbody__0.call(this);
default:
var G__8401 = null;
if (arguments.length > 1) {
var G__8402__i = 0, G__8402__a = new Array(arguments.length -  1);
while (G__8402__i < G__8402__a.length) {G__8402__a[G__8402__i] = arguments[G__8402__i + 1]; ++G__8402__i;}
G__8401 = new cljs.core.IndexedSeq(G__8402__a,0);
}
return om_tools$dom$tbody__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$tbody.cljs$lang$maxFixedArity = 1;
om_tools$dom$tbody.cljs$lang$applyTo = om_tools$dom$tbody__2.cljs$lang$applyTo;
om_tools$dom$tbody.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$tbody__0;
om_tools$dom$tbody.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$tbody__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$tbody;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.td = (function() {
var om_tools$dom$td = null;
var om_tools$dom$td__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.td,null,null);
});
var om_tools$dom$td__2 = (function() { 
var G__8403__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.td,opts__7559__auto__,children__7560__auto__);
};
var G__8403 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8404__i = 0, G__8404__a = new Array(arguments.length -  1);
while (G__8404__i < G__8404__a.length) {G__8404__a[G__8404__i] = arguments[G__8404__i + 1]; ++G__8404__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8404__a,0);
} 
return G__8403__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8403.cljs$lang$maxFixedArity = 1;
G__8403.cljs$lang$applyTo = (function (arglist__8405){
var opts__7559__auto__ = cljs.core.first(arglist__8405);
var children__7560__auto__ = cljs.core.rest(arglist__8405);
return G__8403__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8403.cljs$core$IFn$_invoke$arity$variadic = G__8403__delegate;
return G__8403;
})()
;
om_tools$dom$td = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$td__0.call(this);
default:
var G__8406 = null;
if (arguments.length > 1) {
var G__8407__i = 0, G__8407__a = new Array(arguments.length -  1);
while (G__8407__i < G__8407__a.length) {G__8407__a[G__8407__i] = arguments[G__8407__i + 1]; ++G__8407__i;}
G__8406 = new cljs.core.IndexedSeq(G__8407__a,0);
}
return om_tools$dom$td__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$td.cljs$lang$maxFixedArity = 1;
om_tools$dom$td.cljs$lang$applyTo = om_tools$dom$td__2.cljs$lang$applyTo;
om_tools$dom$td.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$td__0;
om_tools$dom$td.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$td__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$td;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.tfoot = (function() {
var om_tools$dom$tfoot = null;
var om_tools$dom$tfoot__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tfoot,null,null);
});
var om_tools$dom$tfoot__2 = (function() { 
var G__8408__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.tfoot,opts__7559__auto__,children__7560__auto__);
};
var G__8408 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8409__i = 0, G__8409__a = new Array(arguments.length -  1);
while (G__8409__i < G__8409__a.length) {G__8409__a[G__8409__i] = arguments[G__8409__i + 1]; ++G__8409__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8409__a,0);
} 
return G__8408__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8408.cljs$lang$maxFixedArity = 1;
G__8408.cljs$lang$applyTo = (function (arglist__8410){
var opts__7559__auto__ = cljs.core.first(arglist__8410);
var children__7560__auto__ = cljs.core.rest(arglist__8410);
return G__8408__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8408.cljs$core$IFn$_invoke$arity$variadic = G__8408__delegate;
return G__8408;
})()
;
om_tools$dom$tfoot = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$tfoot__0.call(this);
default:
var G__8411 = null;
if (arguments.length > 1) {
var G__8412__i = 0, G__8412__a = new Array(arguments.length -  1);
while (G__8412__i < G__8412__a.length) {G__8412__a[G__8412__i] = arguments[G__8412__i + 1]; ++G__8412__i;}
G__8411 = new cljs.core.IndexedSeq(G__8412__a,0);
}
return om_tools$dom$tfoot__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$tfoot.cljs$lang$maxFixedArity = 1;
om_tools$dom$tfoot.cljs$lang$applyTo = om_tools$dom$tfoot__2.cljs$lang$applyTo;
om_tools$dom$tfoot.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$tfoot__0;
om_tools$dom$tfoot.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$tfoot__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$tfoot;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.th = (function() {
var om_tools$dom$th = null;
var om_tools$dom$th__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.th,null,null);
});
var om_tools$dom$th__2 = (function() { 
var G__8413__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.th,opts__7559__auto__,children__7560__auto__);
};
var G__8413 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8414__i = 0, G__8414__a = new Array(arguments.length -  1);
while (G__8414__i < G__8414__a.length) {G__8414__a[G__8414__i] = arguments[G__8414__i + 1]; ++G__8414__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8414__a,0);
} 
return G__8413__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8413.cljs$lang$maxFixedArity = 1;
G__8413.cljs$lang$applyTo = (function (arglist__8415){
var opts__7559__auto__ = cljs.core.first(arglist__8415);
var children__7560__auto__ = cljs.core.rest(arglist__8415);
return G__8413__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8413.cljs$core$IFn$_invoke$arity$variadic = G__8413__delegate;
return G__8413;
})()
;
om_tools$dom$th = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$th__0.call(this);
default:
var G__8416 = null;
if (arguments.length > 1) {
var G__8417__i = 0, G__8417__a = new Array(arguments.length -  1);
while (G__8417__i < G__8417__a.length) {G__8417__a[G__8417__i] = arguments[G__8417__i + 1]; ++G__8417__i;}
G__8416 = new cljs.core.IndexedSeq(G__8417__a,0);
}
return om_tools$dom$th__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$th.cljs$lang$maxFixedArity = 1;
om_tools$dom$th.cljs$lang$applyTo = om_tools$dom$th__2.cljs$lang$applyTo;
om_tools$dom$th.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$th__0;
om_tools$dom$th.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$th__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$th;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.thead = (function() {
var om_tools$dom$thead = null;
var om_tools$dom$thead__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.thead,null,null);
});
var om_tools$dom$thead__2 = (function() { 
var G__8418__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.thead,opts__7559__auto__,children__7560__auto__);
};
var G__8418 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8419__i = 0, G__8419__a = new Array(arguments.length -  1);
while (G__8419__i < G__8419__a.length) {G__8419__a[G__8419__i] = arguments[G__8419__i + 1]; ++G__8419__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8419__a,0);
} 
return G__8418__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8418.cljs$lang$maxFixedArity = 1;
G__8418.cljs$lang$applyTo = (function (arglist__8420){
var opts__7559__auto__ = cljs.core.first(arglist__8420);
var children__7560__auto__ = cljs.core.rest(arglist__8420);
return G__8418__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8418.cljs$core$IFn$_invoke$arity$variadic = G__8418__delegate;
return G__8418;
})()
;
om_tools$dom$thead = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$thead__0.call(this);
default:
var G__8421 = null;
if (arguments.length > 1) {
var G__8422__i = 0, G__8422__a = new Array(arguments.length -  1);
while (G__8422__i < G__8422__a.length) {G__8422__a[G__8422__i] = arguments[G__8422__i + 1]; ++G__8422__i;}
G__8421 = new cljs.core.IndexedSeq(G__8422__a,0);
}
return om_tools$dom$thead__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$thead.cljs$lang$maxFixedArity = 1;
om_tools$dom$thead.cljs$lang$applyTo = om_tools$dom$thead__2.cljs$lang$applyTo;
om_tools$dom$thead.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$thead__0;
om_tools$dom$thead.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$thead__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$thead;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.time = (function() {
var om_tools$dom$time = null;
var om_tools$dom$time__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.time,null,null);
});
var om_tools$dom$time__2 = (function() { 
var G__8423__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.time,opts__7559__auto__,children__7560__auto__);
};
var G__8423 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8424__i = 0, G__8424__a = new Array(arguments.length -  1);
while (G__8424__i < G__8424__a.length) {G__8424__a[G__8424__i] = arguments[G__8424__i + 1]; ++G__8424__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8424__a,0);
} 
return G__8423__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8423.cljs$lang$maxFixedArity = 1;
G__8423.cljs$lang$applyTo = (function (arglist__8425){
var opts__7559__auto__ = cljs.core.first(arglist__8425);
var children__7560__auto__ = cljs.core.rest(arglist__8425);
return G__8423__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8423.cljs$core$IFn$_invoke$arity$variadic = G__8423__delegate;
return G__8423;
})()
;
om_tools$dom$time = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$time__0.call(this);
default:
var G__8426 = null;
if (arguments.length > 1) {
var G__8427__i = 0, G__8427__a = new Array(arguments.length -  1);
while (G__8427__i < G__8427__a.length) {G__8427__a[G__8427__i] = arguments[G__8427__i + 1]; ++G__8427__i;}
G__8426 = new cljs.core.IndexedSeq(G__8427__a,0);
}
return om_tools$dom$time__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$time.cljs$lang$maxFixedArity = 1;
om_tools$dom$time.cljs$lang$applyTo = om_tools$dom$time__2.cljs$lang$applyTo;
om_tools$dom$time.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$time__0;
om_tools$dom$time.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$time__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$time;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.title = (function() {
var om_tools$dom$title = null;
var om_tools$dom$title__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.title,null,null);
});
var om_tools$dom$title__2 = (function() { 
var G__8428__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.title,opts__7559__auto__,children__7560__auto__);
};
var G__8428 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8429__i = 0, G__8429__a = new Array(arguments.length -  1);
while (G__8429__i < G__8429__a.length) {G__8429__a[G__8429__i] = arguments[G__8429__i + 1]; ++G__8429__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8429__a,0);
} 
return G__8428__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8428.cljs$lang$maxFixedArity = 1;
G__8428.cljs$lang$applyTo = (function (arglist__8430){
var opts__7559__auto__ = cljs.core.first(arglist__8430);
var children__7560__auto__ = cljs.core.rest(arglist__8430);
return G__8428__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8428.cljs$core$IFn$_invoke$arity$variadic = G__8428__delegate;
return G__8428;
})()
;
om_tools$dom$title = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$title__0.call(this);
default:
var G__8431 = null;
if (arguments.length > 1) {
var G__8432__i = 0, G__8432__a = new Array(arguments.length -  1);
while (G__8432__i < G__8432__a.length) {G__8432__a[G__8432__i] = arguments[G__8432__i + 1]; ++G__8432__i;}
G__8431 = new cljs.core.IndexedSeq(G__8432__a,0);
}
return om_tools$dom$title__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$title.cljs$lang$maxFixedArity = 1;
om_tools$dom$title.cljs$lang$applyTo = om_tools$dom$title__2.cljs$lang$applyTo;
om_tools$dom$title.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$title__0;
om_tools$dom$title.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$title__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$title;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.tr = (function() {
var om_tools$dom$tr = null;
var om_tools$dom$tr__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tr,null,null);
});
var om_tools$dom$tr__2 = (function() { 
var G__8433__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.tr,opts__7559__auto__,children__7560__auto__);
};
var G__8433 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8434__i = 0, G__8434__a = new Array(arguments.length -  1);
while (G__8434__i < G__8434__a.length) {G__8434__a[G__8434__i] = arguments[G__8434__i + 1]; ++G__8434__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8434__a,0);
} 
return G__8433__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8433.cljs$lang$maxFixedArity = 1;
G__8433.cljs$lang$applyTo = (function (arglist__8435){
var opts__7559__auto__ = cljs.core.first(arglist__8435);
var children__7560__auto__ = cljs.core.rest(arglist__8435);
return G__8433__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8433.cljs$core$IFn$_invoke$arity$variadic = G__8433__delegate;
return G__8433;
})()
;
om_tools$dom$tr = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$tr__0.call(this);
default:
var G__8436 = null;
if (arguments.length > 1) {
var G__8437__i = 0, G__8437__a = new Array(arguments.length -  1);
while (G__8437__i < G__8437__a.length) {G__8437__a[G__8437__i] = arguments[G__8437__i + 1]; ++G__8437__i;}
G__8436 = new cljs.core.IndexedSeq(G__8437__a,0);
}
return om_tools$dom$tr__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$tr.cljs$lang$maxFixedArity = 1;
om_tools$dom$tr.cljs$lang$applyTo = om_tools$dom$tr__2.cljs$lang$applyTo;
om_tools$dom$tr.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$tr__0;
om_tools$dom$tr.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$tr__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$tr;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.track = (function() {
var om_tools$dom$track = null;
var om_tools$dom$track__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.track,null,null);
});
var om_tools$dom$track__2 = (function() { 
var G__8438__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.track,opts__7559__auto__,children__7560__auto__);
};
var G__8438 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8439__i = 0, G__8439__a = new Array(arguments.length -  1);
while (G__8439__i < G__8439__a.length) {G__8439__a[G__8439__i] = arguments[G__8439__i + 1]; ++G__8439__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8439__a,0);
} 
return G__8438__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8438.cljs$lang$maxFixedArity = 1;
G__8438.cljs$lang$applyTo = (function (arglist__8440){
var opts__7559__auto__ = cljs.core.first(arglist__8440);
var children__7560__auto__ = cljs.core.rest(arglist__8440);
return G__8438__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8438.cljs$core$IFn$_invoke$arity$variadic = G__8438__delegate;
return G__8438;
})()
;
om_tools$dom$track = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$track__0.call(this);
default:
var G__8441 = null;
if (arguments.length > 1) {
var G__8442__i = 0, G__8442__a = new Array(arguments.length -  1);
while (G__8442__i < G__8442__a.length) {G__8442__a[G__8442__i] = arguments[G__8442__i + 1]; ++G__8442__i;}
G__8441 = new cljs.core.IndexedSeq(G__8442__a,0);
}
return om_tools$dom$track__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$track.cljs$lang$maxFixedArity = 1;
om_tools$dom$track.cljs$lang$applyTo = om_tools$dom$track__2.cljs$lang$applyTo;
om_tools$dom$track.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$track__0;
om_tools$dom$track.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$track__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$track;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.u = (function() {
var om_tools$dom$u = null;
var om_tools$dom$u__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.u,null,null);
});
var om_tools$dom$u__2 = (function() { 
var G__8443__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.u,opts__7559__auto__,children__7560__auto__);
};
var G__8443 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8444__i = 0, G__8444__a = new Array(arguments.length -  1);
while (G__8444__i < G__8444__a.length) {G__8444__a[G__8444__i] = arguments[G__8444__i + 1]; ++G__8444__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8444__a,0);
} 
return G__8443__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8443.cljs$lang$maxFixedArity = 1;
G__8443.cljs$lang$applyTo = (function (arglist__8445){
var opts__7559__auto__ = cljs.core.first(arglist__8445);
var children__7560__auto__ = cljs.core.rest(arglist__8445);
return G__8443__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8443.cljs$core$IFn$_invoke$arity$variadic = G__8443__delegate;
return G__8443;
})()
;
om_tools$dom$u = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$u__0.call(this);
default:
var G__8446 = null;
if (arguments.length > 1) {
var G__8447__i = 0, G__8447__a = new Array(arguments.length -  1);
while (G__8447__i < G__8447__a.length) {G__8447__a[G__8447__i] = arguments[G__8447__i + 1]; ++G__8447__i;}
G__8446 = new cljs.core.IndexedSeq(G__8447__a,0);
}
return om_tools$dom$u__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$u.cljs$lang$maxFixedArity = 1;
om_tools$dom$u.cljs$lang$applyTo = om_tools$dom$u__2.cljs$lang$applyTo;
om_tools$dom$u.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$u__0;
om_tools$dom$u.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$u__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$u;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.ul = (function() {
var om_tools$dom$ul = null;
var om_tools$dom$ul__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ul,null,null);
});
var om_tools$dom$ul__2 = (function() { 
var G__8448__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.ul,opts__7559__auto__,children__7560__auto__);
};
var G__8448 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8449__i = 0, G__8449__a = new Array(arguments.length -  1);
while (G__8449__i < G__8449__a.length) {G__8449__a[G__8449__i] = arguments[G__8449__i + 1]; ++G__8449__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8449__a,0);
} 
return G__8448__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8448.cljs$lang$maxFixedArity = 1;
G__8448.cljs$lang$applyTo = (function (arglist__8450){
var opts__7559__auto__ = cljs.core.first(arglist__8450);
var children__7560__auto__ = cljs.core.rest(arglist__8450);
return G__8448__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8448.cljs$core$IFn$_invoke$arity$variadic = G__8448__delegate;
return G__8448;
})()
;
om_tools$dom$ul = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$ul__0.call(this);
default:
var G__8451 = null;
if (arguments.length > 1) {
var G__8452__i = 0, G__8452__a = new Array(arguments.length -  1);
while (G__8452__i < G__8452__a.length) {G__8452__a[G__8452__i] = arguments[G__8452__i + 1]; ++G__8452__i;}
G__8451 = new cljs.core.IndexedSeq(G__8452__a,0);
}
return om_tools$dom$ul__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$ul.cljs$lang$maxFixedArity = 1;
om_tools$dom$ul.cljs$lang$applyTo = om_tools$dom$ul__2.cljs$lang$applyTo;
om_tools$dom$ul.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$ul__0;
om_tools$dom$ul.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$ul__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$ul;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.var$ = (function() {
var om_tools$dom$var = null;
var om_tools$dom$var__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.var$,null,null);
});
var om_tools$dom$var__2 = (function() { 
var G__8453__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.var$,opts__7559__auto__,children__7560__auto__);
};
var G__8453 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8454__i = 0, G__8454__a = new Array(arguments.length -  1);
while (G__8454__i < G__8454__a.length) {G__8454__a[G__8454__i] = arguments[G__8454__i + 1]; ++G__8454__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8454__a,0);
} 
return G__8453__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8453.cljs$lang$maxFixedArity = 1;
G__8453.cljs$lang$applyTo = (function (arglist__8455){
var opts__7559__auto__ = cljs.core.first(arglist__8455);
var children__7560__auto__ = cljs.core.rest(arglist__8455);
return G__8453__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8453.cljs$core$IFn$_invoke$arity$variadic = G__8453__delegate;
return G__8453;
})()
;
om_tools$dom$var = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$var__0.call(this);
default:
var G__8456 = null;
if (arguments.length > 1) {
var G__8457__i = 0, G__8457__a = new Array(arguments.length -  1);
while (G__8457__i < G__8457__a.length) {G__8457__a[G__8457__i] = arguments[G__8457__i + 1]; ++G__8457__i;}
G__8456 = new cljs.core.IndexedSeq(G__8457__a,0);
}
return om_tools$dom$var__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$var.cljs$lang$maxFixedArity = 1;
om_tools$dom$var.cljs$lang$applyTo = om_tools$dom$var__2.cljs$lang$applyTo;
om_tools$dom$var.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$var__0;
om_tools$dom$var.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$var__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$var;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.video = (function() {
var om_tools$dom$video = null;
var om_tools$dom$video__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.video,null,null);
});
var om_tools$dom$video__2 = (function() { 
var G__8458__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.video,opts__7559__auto__,children__7560__auto__);
};
var G__8458 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8459__i = 0, G__8459__a = new Array(arguments.length -  1);
while (G__8459__i < G__8459__a.length) {G__8459__a[G__8459__i] = arguments[G__8459__i + 1]; ++G__8459__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8459__a,0);
} 
return G__8458__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8458.cljs$lang$maxFixedArity = 1;
G__8458.cljs$lang$applyTo = (function (arglist__8460){
var opts__7559__auto__ = cljs.core.first(arglist__8460);
var children__7560__auto__ = cljs.core.rest(arglist__8460);
return G__8458__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8458.cljs$core$IFn$_invoke$arity$variadic = G__8458__delegate;
return G__8458;
})()
;
om_tools$dom$video = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$video__0.call(this);
default:
var G__8461 = null;
if (arguments.length > 1) {
var G__8462__i = 0, G__8462__a = new Array(arguments.length -  1);
while (G__8462__i < G__8462__a.length) {G__8462__a[G__8462__i] = arguments[G__8462__i + 1]; ++G__8462__i;}
G__8461 = new cljs.core.IndexedSeq(G__8462__a,0);
}
return om_tools$dom$video__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$video.cljs$lang$maxFixedArity = 1;
om_tools$dom$video.cljs$lang$applyTo = om_tools$dom$video__2.cljs$lang$applyTo;
om_tools$dom$video.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$video__0;
om_tools$dom$video.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$video__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$video;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.wbr = (function() {
var om_tools$dom$wbr = null;
var om_tools$dom$wbr__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.wbr,null,null);
});
var om_tools$dom$wbr__2 = (function() { 
var G__8463__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.wbr,opts__7559__auto__,children__7560__auto__);
};
var G__8463 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8464__i = 0, G__8464__a = new Array(arguments.length -  1);
while (G__8464__i < G__8464__a.length) {G__8464__a[G__8464__i] = arguments[G__8464__i + 1]; ++G__8464__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8464__a,0);
} 
return G__8463__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8463.cljs$lang$maxFixedArity = 1;
G__8463.cljs$lang$applyTo = (function (arglist__8465){
var opts__7559__auto__ = cljs.core.first(arglist__8465);
var children__7560__auto__ = cljs.core.rest(arglist__8465);
return G__8463__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8463.cljs$core$IFn$_invoke$arity$variadic = G__8463__delegate;
return G__8463;
})()
;
om_tools$dom$wbr = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$wbr__0.call(this);
default:
var G__8466 = null;
if (arguments.length > 1) {
var G__8467__i = 0, G__8467__a = new Array(arguments.length -  1);
while (G__8467__i < G__8467__a.length) {G__8467__a[G__8467__i] = arguments[G__8467__i + 1]; ++G__8467__i;}
G__8466 = new cljs.core.IndexedSeq(G__8467__a,0);
}
return om_tools$dom$wbr__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$wbr.cljs$lang$maxFixedArity = 1;
om_tools$dom$wbr.cljs$lang$applyTo = om_tools$dom$wbr__2.cljs$lang$applyTo;
om_tools$dom$wbr.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$wbr__0;
om_tools$dom$wbr.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$wbr__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$wbr;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.circle = (function() {
var om_tools$dom$circle = null;
var om_tools$dom$circle__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.circle,null,null);
});
var om_tools$dom$circle__2 = (function() { 
var G__8468__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.circle,opts__7559__auto__,children__7560__auto__);
};
var G__8468 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8469__i = 0, G__8469__a = new Array(arguments.length -  1);
while (G__8469__i < G__8469__a.length) {G__8469__a[G__8469__i] = arguments[G__8469__i + 1]; ++G__8469__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8469__a,0);
} 
return G__8468__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8468.cljs$lang$maxFixedArity = 1;
G__8468.cljs$lang$applyTo = (function (arglist__8470){
var opts__7559__auto__ = cljs.core.first(arglist__8470);
var children__7560__auto__ = cljs.core.rest(arglist__8470);
return G__8468__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8468.cljs$core$IFn$_invoke$arity$variadic = G__8468__delegate;
return G__8468;
})()
;
om_tools$dom$circle = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$circle__0.call(this);
default:
var G__8471 = null;
if (arguments.length > 1) {
var G__8472__i = 0, G__8472__a = new Array(arguments.length -  1);
while (G__8472__i < G__8472__a.length) {G__8472__a[G__8472__i] = arguments[G__8472__i + 1]; ++G__8472__i;}
G__8471 = new cljs.core.IndexedSeq(G__8472__a,0);
}
return om_tools$dom$circle__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$circle.cljs$lang$maxFixedArity = 1;
om_tools$dom$circle.cljs$lang$applyTo = om_tools$dom$circle__2.cljs$lang$applyTo;
om_tools$dom$circle.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$circle__0;
om_tools$dom$circle.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$circle__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$circle;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.ellipse = (function() {
var om_tools$dom$ellipse = null;
var om_tools$dom$ellipse__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ellipse,null,null);
});
var om_tools$dom$ellipse__2 = (function() { 
var G__8473__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.ellipse,opts__7559__auto__,children__7560__auto__);
};
var G__8473 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8474__i = 0, G__8474__a = new Array(arguments.length -  1);
while (G__8474__i < G__8474__a.length) {G__8474__a[G__8474__i] = arguments[G__8474__i + 1]; ++G__8474__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8474__a,0);
} 
return G__8473__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8473.cljs$lang$maxFixedArity = 1;
G__8473.cljs$lang$applyTo = (function (arglist__8475){
var opts__7559__auto__ = cljs.core.first(arglist__8475);
var children__7560__auto__ = cljs.core.rest(arglist__8475);
return G__8473__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8473.cljs$core$IFn$_invoke$arity$variadic = G__8473__delegate;
return G__8473;
})()
;
om_tools$dom$ellipse = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$ellipse__0.call(this);
default:
var G__8476 = null;
if (arguments.length > 1) {
var G__8477__i = 0, G__8477__a = new Array(arguments.length -  1);
while (G__8477__i < G__8477__a.length) {G__8477__a[G__8477__i] = arguments[G__8477__i + 1]; ++G__8477__i;}
G__8476 = new cljs.core.IndexedSeq(G__8477__a,0);
}
return om_tools$dom$ellipse__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$ellipse.cljs$lang$maxFixedArity = 1;
om_tools$dom$ellipse.cljs$lang$applyTo = om_tools$dom$ellipse__2.cljs$lang$applyTo;
om_tools$dom$ellipse.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$ellipse__0;
om_tools$dom$ellipse.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$ellipse__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$ellipse;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.g = (function() {
var om_tools$dom$g = null;
var om_tools$dom$g__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.g,null,null);
});
var om_tools$dom$g__2 = (function() { 
var G__8478__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.g,opts__7559__auto__,children__7560__auto__);
};
var G__8478 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8479__i = 0, G__8479__a = new Array(arguments.length -  1);
while (G__8479__i < G__8479__a.length) {G__8479__a[G__8479__i] = arguments[G__8479__i + 1]; ++G__8479__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8479__a,0);
} 
return G__8478__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8478.cljs$lang$maxFixedArity = 1;
G__8478.cljs$lang$applyTo = (function (arglist__8480){
var opts__7559__auto__ = cljs.core.first(arglist__8480);
var children__7560__auto__ = cljs.core.rest(arglist__8480);
return G__8478__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8478.cljs$core$IFn$_invoke$arity$variadic = G__8478__delegate;
return G__8478;
})()
;
om_tools$dom$g = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$g__0.call(this);
default:
var G__8481 = null;
if (arguments.length > 1) {
var G__8482__i = 0, G__8482__a = new Array(arguments.length -  1);
while (G__8482__i < G__8482__a.length) {G__8482__a[G__8482__i] = arguments[G__8482__i + 1]; ++G__8482__i;}
G__8481 = new cljs.core.IndexedSeq(G__8482__a,0);
}
return om_tools$dom$g__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$g.cljs$lang$maxFixedArity = 1;
om_tools$dom$g.cljs$lang$applyTo = om_tools$dom$g__2.cljs$lang$applyTo;
om_tools$dom$g.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$g__0;
om_tools$dom$g.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$g__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$g;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.line = (function() {
var om_tools$dom$line = null;
var om_tools$dom$line__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.line,null,null);
});
var om_tools$dom$line__2 = (function() { 
var G__8483__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.line,opts__7559__auto__,children__7560__auto__);
};
var G__8483 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8484__i = 0, G__8484__a = new Array(arguments.length -  1);
while (G__8484__i < G__8484__a.length) {G__8484__a[G__8484__i] = arguments[G__8484__i + 1]; ++G__8484__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8484__a,0);
} 
return G__8483__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8483.cljs$lang$maxFixedArity = 1;
G__8483.cljs$lang$applyTo = (function (arglist__8485){
var opts__7559__auto__ = cljs.core.first(arglist__8485);
var children__7560__auto__ = cljs.core.rest(arglist__8485);
return G__8483__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8483.cljs$core$IFn$_invoke$arity$variadic = G__8483__delegate;
return G__8483;
})()
;
om_tools$dom$line = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$line__0.call(this);
default:
var G__8486 = null;
if (arguments.length > 1) {
var G__8487__i = 0, G__8487__a = new Array(arguments.length -  1);
while (G__8487__i < G__8487__a.length) {G__8487__a[G__8487__i] = arguments[G__8487__i + 1]; ++G__8487__i;}
G__8486 = new cljs.core.IndexedSeq(G__8487__a,0);
}
return om_tools$dom$line__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$line.cljs$lang$maxFixedArity = 1;
om_tools$dom$line.cljs$lang$applyTo = om_tools$dom$line__2.cljs$lang$applyTo;
om_tools$dom$line.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$line__0;
om_tools$dom$line.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$line__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$line;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.path = (function() {
var om_tools$dom$path = null;
var om_tools$dom$path__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.path,null,null);
});
var om_tools$dom$path__2 = (function() { 
var G__8488__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.path,opts__7559__auto__,children__7560__auto__);
};
var G__8488 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8489__i = 0, G__8489__a = new Array(arguments.length -  1);
while (G__8489__i < G__8489__a.length) {G__8489__a[G__8489__i] = arguments[G__8489__i + 1]; ++G__8489__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8489__a,0);
} 
return G__8488__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8488.cljs$lang$maxFixedArity = 1;
G__8488.cljs$lang$applyTo = (function (arglist__8490){
var opts__7559__auto__ = cljs.core.first(arglist__8490);
var children__7560__auto__ = cljs.core.rest(arglist__8490);
return G__8488__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8488.cljs$core$IFn$_invoke$arity$variadic = G__8488__delegate;
return G__8488;
})()
;
om_tools$dom$path = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$path__0.call(this);
default:
var G__8491 = null;
if (arguments.length > 1) {
var G__8492__i = 0, G__8492__a = new Array(arguments.length -  1);
while (G__8492__i < G__8492__a.length) {G__8492__a[G__8492__i] = arguments[G__8492__i + 1]; ++G__8492__i;}
G__8491 = new cljs.core.IndexedSeq(G__8492__a,0);
}
return om_tools$dom$path__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$path.cljs$lang$maxFixedArity = 1;
om_tools$dom$path.cljs$lang$applyTo = om_tools$dom$path__2.cljs$lang$applyTo;
om_tools$dom$path.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$path__0;
om_tools$dom$path.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$path__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$path;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.polyline = (function() {
var om_tools$dom$polyline = null;
var om_tools$dom$polyline__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.polyline,null,null);
});
var om_tools$dom$polyline__2 = (function() { 
var G__8493__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.polyline,opts__7559__auto__,children__7560__auto__);
};
var G__8493 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8494__i = 0, G__8494__a = new Array(arguments.length -  1);
while (G__8494__i < G__8494__a.length) {G__8494__a[G__8494__i] = arguments[G__8494__i + 1]; ++G__8494__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8494__a,0);
} 
return G__8493__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8493.cljs$lang$maxFixedArity = 1;
G__8493.cljs$lang$applyTo = (function (arglist__8495){
var opts__7559__auto__ = cljs.core.first(arglist__8495);
var children__7560__auto__ = cljs.core.rest(arglist__8495);
return G__8493__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8493.cljs$core$IFn$_invoke$arity$variadic = G__8493__delegate;
return G__8493;
})()
;
om_tools$dom$polyline = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$polyline__0.call(this);
default:
var G__8496 = null;
if (arguments.length > 1) {
var G__8497__i = 0, G__8497__a = new Array(arguments.length -  1);
while (G__8497__i < G__8497__a.length) {G__8497__a[G__8497__i] = arguments[G__8497__i + 1]; ++G__8497__i;}
G__8496 = new cljs.core.IndexedSeq(G__8497__a,0);
}
return om_tools$dom$polyline__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$polyline.cljs$lang$maxFixedArity = 1;
om_tools$dom$polyline.cljs$lang$applyTo = om_tools$dom$polyline__2.cljs$lang$applyTo;
om_tools$dom$polyline.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$polyline__0;
om_tools$dom$polyline.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$polyline__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$polyline;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.rect = (function() {
var om_tools$dom$rect = null;
var om_tools$dom$rect__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rect,null,null);
});
var om_tools$dom$rect__2 = (function() { 
var G__8498__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.rect,opts__7559__auto__,children__7560__auto__);
};
var G__8498 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8499__i = 0, G__8499__a = new Array(arguments.length -  1);
while (G__8499__i < G__8499__a.length) {G__8499__a[G__8499__i] = arguments[G__8499__i + 1]; ++G__8499__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8499__a,0);
} 
return G__8498__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8498.cljs$lang$maxFixedArity = 1;
G__8498.cljs$lang$applyTo = (function (arglist__8500){
var opts__7559__auto__ = cljs.core.first(arglist__8500);
var children__7560__auto__ = cljs.core.rest(arglist__8500);
return G__8498__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8498.cljs$core$IFn$_invoke$arity$variadic = G__8498__delegate;
return G__8498;
})()
;
om_tools$dom$rect = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$rect__0.call(this);
default:
var G__8501 = null;
if (arguments.length > 1) {
var G__8502__i = 0, G__8502__a = new Array(arguments.length -  1);
while (G__8502__i < G__8502__a.length) {G__8502__a[G__8502__i] = arguments[G__8502__i + 1]; ++G__8502__i;}
G__8501 = new cljs.core.IndexedSeq(G__8502__a,0);
}
return om_tools$dom$rect__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$rect.cljs$lang$maxFixedArity = 1;
om_tools$dom$rect.cljs$lang$applyTo = om_tools$dom$rect__2.cljs$lang$applyTo;
om_tools$dom$rect.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$rect__0;
om_tools$dom$rect.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$rect__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$rect;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.svg = (function() {
var om_tools$dom$svg = null;
var om_tools$dom$svg__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.svg,null,null);
});
var om_tools$dom$svg__2 = (function() { 
var G__8503__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.svg,opts__7559__auto__,children__7560__auto__);
};
var G__8503 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8504__i = 0, G__8504__a = new Array(arguments.length -  1);
while (G__8504__i < G__8504__a.length) {G__8504__a[G__8504__i] = arguments[G__8504__i + 1]; ++G__8504__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8504__a,0);
} 
return G__8503__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8503.cljs$lang$maxFixedArity = 1;
G__8503.cljs$lang$applyTo = (function (arglist__8505){
var opts__7559__auto__ = cljs.core.first(arglist__8505);
var children__7560__auto__ = cljs.core.rest(arglist__8505);
return G__8503__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8503.cljs$core$IFn$_invoke$arity$variadic = G__8503__delegate;
return G__8503;
})()
;
om_tools$dom$svg = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$svg__0.call(this);
default:
var G__8506 = null;
if (arguments.length > 1) {
var G__8507__i = 0, G__8507__a = new Array(arguments.length -  1);
while (G__8507__i < G__8507__a.length) {G__8507__a[G__8507__i] = arguments[G__8507__i + 1]; ++G__8507__i;}
G__8506 = new cljs.core.IndexedSeq(G__8507__a,0);
}
return om_tools$dom$svg__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$svg.cljs$lang$maxFixedArity = 1;
om_tools$dom$svg.cljs$lang$applyTo = om_tools$dom$svg__2.cljs$lang$applyTo;
om_tools$dom$svg.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$svg__0;
om_tools$dom$svg.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$svg__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$svg;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.text = (function() {
var om_tools$dom$text = null;
var om_tools$dom$text__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.text,null,null);
});
var om_tools$dom$text__2 = (function() { 
var G__8508__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.text,opts__7559__auto__,children__7560__auto__);
};
var G__8508 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8509__i = 0, G__8509__a = new Array(arguments.length -  1);
while (G__8509__i < G__8509__a.length) {G__8509__a[G__8509__i] = arguments[G__8509__i + 1]; ++G__8509__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8509__a,0);
} 
return G__8508__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8508.cljs$lang$maxFixedArity = 1;
G__8508.cljs$lang$applyTo = (function (arglist__8510){
var opts__7559__auto__ = cljs.core.first(arglist__8510);
var children__7560__auto__ = cljs.core.rest(arglist__8510);
return G__8508__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8508.cljs$core$IFn$_invoke$arity$variadic = G__8508__delegate;
return G__8508;
})()
;
om_tools$dom$text = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$text__0.call(this);
default:
var G__8511 = null;
if (arguments.length > 1) {
var G__8512__i = 0, G__8512__a = new Array(arguments.length -  1);
while (G__8512__i < G__8512__a.length) {G__8512__a[G__8512__i] = arguments[G__8512__i + 1]; ++G__8512__i;}
G__8511 = new cljs.core.IndexedSeq(G__8512__a,0);
}
return om_tools$dom$text__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$text.cljs$lang$maxFixedArity = 1;
om_tools$dom$text.cljs$lang$applyTo = om_tools$dom$text__2.cljs$lang$applyTo;
om_tools$dom$text.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$text__0;
om_tools$dom$text.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$text__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$text;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.defs = (function() {
var om_tools$dom$defs = null;
var om_tools$dom$defs__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.defs,null,null);
});
var om_tools$dom$defs__2 = (function() { 
var G__8513__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.defs,opts__7559__auto__,children__7560__auto__);
};
var G__8513 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8514__i = 0, G__8514__a = new Array(arguments.length -  1);
while (G__8514__i < G__8514__a.length) {G__8514__a[G__8514__i] = arguments[G__8514__i + 1]; ++G__8514__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8514__a,0);
} 
return G__8513__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8513.cljs$lang$maxFixedArity = 1;
G__8513.cljs$lang$applyTo = (function (arglist__8515){
var opts__7559__auto__ = cljs.core.first(arglist__8515);
var children__7560__auto__ = cljs.core.rest(arglist__8515);
return G__8513__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8513.cljs$core$IFn$_invoke$arity$variadic = G__8513__delegate;
return G__8513;
})()
;
om_tools$dom$defs = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$defs__0.call(this);
default:
var G__8516 = null;
if (arguments.length > 1) {
var G__8517__i = 0, G__8517__a = new Array(arguments.length -  1);
while (G__8517__i < G__8517__a.length) {G__8517__a[G__8517__i] = arguments[G__8517__i + 1]; ++G__8517__i;}
G__8516 = new cljs.core.IndexedSeq(G__8517__a,0);
}
return om_tools$dom$defs__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$defs.cljs$lang$maxFixedArity = 1;
om_tools$dom$defs.cljs$lang$applyTo = om_tools$dom$defs__2.cljs$lang$applyTo;
om_tools$dom$defs.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$defs__0;
om_tools$dom$defs.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$defs__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$defs;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.linearGradient = (function() {
var om_tools$dom$linearGradient = null;
var om_tools$dom$linearGradient__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.linearGradient,null,null);
});
var om_tools$dom$linearGradient__2 = (function() { 
var G__8518__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.linearGradient,opts__7559__auto__,children__7560__auto__);
};
var G__8518 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8519__i = 0, G__8519__a = new Array(arguments.length -  1);
while (G__8519__i < G__8519__a.length) {G__8519__a[G__8519__i] = arguments[G__8519__i + 1]; ++G__8519__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8519__a,0);
} 
return G__8518__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8518.cljs$lang$maxFixedArity = 1;
G__8518.cljs$lang$applyTo = (function (arglist__8520){
var opts__7559__auto__ = cljs.core.first(arglist__8520);
var children__7560__auto__ = cljs.core.rest(arglist__8520);
return G__8518__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8518.cljs$core$IFn$_invoke$arity$variadic = G__8518__delegate;
return G__8518;
})()
;
om_tools$dom$linearGradient = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$linearGradient__0.call(this);
default:
var G__8521 = null;
if (arguments.length > 1) {
var G__8522__i = 0, G__8522__a = new Array(arguments.length -  1);
while (G__8522__i < G__8522__a.length) {G__8522__a[G__8522__i] = arguments[G__8522__i + 1]; ++G__8522__i;}
G__8521 = new cljs.core.IndexedSeq(G__8522__a,0);
}
return om_tools$dom$linearGradient__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$linearGradient.cljs$lang$maxFixedArity = 1;
om_tools$dom$linearGradient.cljs$lang$applyTo = om_tools$dom$linearGradient__2.cljs$lang$applyTo;
om_tools$dom$linearGradient.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$linearGradient__0;
om_tools$dom$linearGradient.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$linearGradient__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$linearGradient;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.polygon = (function() {
var om_tools$dom$polygon = null;
var om_tools$dom$polygon__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.polygon,null,null);
});
var om_tools$dom$polygon__2 = (function() { 
var G__8523__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.polygon,opts__7559__auto__,children__7560__auto__);
};
var G__8523 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8524__i = 0, G__8524__a = new Array(arguments.length -  1);
while (G__8524__i < G__8524__a.length) {G__8524__a[G__8524__i] = arguments[G__8524__i + 1]; ++G__8524__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8524__a,0);
} 
return G__8523__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8523.cljs$lang$maxFixedArity = 1;
G__8523.cljs$lang$applyTo = (function (arglist__8525){
var opts__7559__auto__ = cljs.core.first(arglist__8525);
var children__7560__auto__ = cljs.core.rest(arglist__8525);
return G__8523__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8523.cljs$core$IFn$_invoke$arity$variadic = G__8523__delegate;
return G__8523;
})()
;
om_tools$dom$polygon = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$polygon__0.call(this);
default:
var G__8526 = null;
if (arguments.length > 1) {
var G__8527__i = 0, G__8527__a = new Array(arguments.length -  1);
while (G__8527__i < G__8527__a.length) {G__8527__a[G__8527__i] = arguments[G__8527__i + 1]; ++G__8527__i;}
G__8526 = new cljs.core.IndexedSeq(G__8527__a,0);
}
return om_tools$dom$polygon__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$polygon.cljs$lang$maxFixedArity = 1;
om_tools$dom$polygon.cljs$lang$applyTo = om_tools$dom$polygon__2.cljs$lang$applyTo;
om_tools$dom$polygon.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$polygon__0;
om_tools$dom$polygon.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$polygon__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$polygon;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.radialGradient = (function() {
var om_tools$dom$radialGradient = null;
var om_tools$dom$radialGradient__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.radialGradient,null,null);
});
var om_tools$dom$radialGradient__2 = (function() { 
var G__8528__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.radialGradient,opts__7559__auto__,children__7560__auto__);
};
var G__8528 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8529__i = 0, G__8529__a = new Array(arguments.length -  1);
while (G__8529__i < G__8529__a.length) {G__8529__a[G__8529__i] = arguments[G__8529__i + 1]; ++G__8529__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8529__a,0);
} 
return G__8528__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8528.cljs$lang$maxFixedArity = 1;
G__8528.cljs$lang$applyTo = (function (arglist__8530){
var opts__7559__auto__ = cljs.core.first(arglist__8530);
var children__7560__auto__ = cljs.core.rest(arglist__8530);
return G__8528__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8528.cljs$core$IFn$_invoke$arity$variadic = G__8528__delegate;
return G__8528;
})()
;
om_tools$dom$radialGradient = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$radialGradient__0.call(this);
default:
var G__8531 = null;
if (arguments.length > 1) {
var G__8532__i = 0, G__8532__a = new Array(arguments.length -  1);
while (G__8532__i < G__8532__a.length) {G__8532__a[G__8532__i] = arguments[G__8532__i + 1]; ++G__8532__i;}
G__8531 = new cljs.core.IndexedSeq(G__8532__a,0);
}
return om_tools$dom$radialGradient__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$radialGradient.cljs$lang$maxFixedArity = 1;
om_tools$dom$radialGradient.cljs$lang$applyTo = om_tools$dom$radialGradient__2.cljs$lang$applyTo;
om_tools$dom$radialGradient.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$radialGradient__0;
om_tools$dom$radialGradient.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$radialGradient__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$radialGradient;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.stop = (function() {
var om_tools$dom$stop = null;
var om_tools$dom$stop__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.stop,null,null);
});
var om_tools$dom$stop__2 = (function() { 
var G__8533__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.stop,opts__7559__auto__,children__7560__auto__);
};
var G__8533 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8534__i = 0, G__8534__a = new Array(arguments.length -  1);
while (G__8534__i < G__8534__a.length) {G__8534__a[G__8534__i] = arguments[G__8534__i + 1]; ++G__8534__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8534__a,0);
} 
return G__8533__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8533.cljs$lang$maxFixedArity = 1;
G__8533.cljs$lang$applyTo = (function (arglist__8535){
var opts__7559__auto__ = cljs.core.first(arglist__8535);
var children__7560__auto__ = cljs.core.rest(arglist__8535);
return G__8533__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8533.cljs$core$IFn$_invoke$arity$variadic = G__8533__delegate;
return G__8533;
})()
;
om_tools$dom$stop = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$stop__0.call(this);
default:
var G__8536 = null;
if (arguments.length > 1) {
var G__8537__i = 0, G__8537__a = new Array(arguments.length -  1);
while (G__8537__i < G__8537__a.length) {G__8537__a[G__8537__i] = arguments[G__8537__i + 1]; ++G__8537__i;}
G__8536 = new cljs.core.IndexedSeq(G__8537__a,0);
}
return om_tools$dom$stop__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$stop.cljs$lang$maxFixedArity = 1;
om_tools$dom$stop.cljs$lang$applyTo = om_tools$dom$stop__2.cljs$lang$applyTo;
om_tools$dom$stop.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$stop__0;
om_tools$dom$stop.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$stop__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$stop;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.tspan = (function() {
var om_tools$dom$tspan = null;
var om_tools$dom$tspan__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tspan,null,null);
});
var om_tools$dom$tspan__2 = (function() { 
var G__8538__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,React.DOM.tspan,opts__7559__auto__,children__7560__auto__);
};
var G__8538 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8539__i = 0, G__8539__a = new Array(arguments.length -  1);
while (G__8539__i < G__8539__a.length) {G__8539__a[G__8539__i] = arguments[G__8539__i + 1]; ++G__8539__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8539__a,0);
} 
return G__8538__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8538.cljs$lang$maxFixedArity = 1;
G__8538.cljs$lang$applyTo = (function (arglist__8540){
var opts__7559__auto__ = cljs.core.first(arglist__8540);
var children__7560__auto__ = cljs.core.rest(arglist__8540);
return G__8538__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8538.cljs$core$IFn$_invoke$arity$variadic = G__8538__delegate;
return G__8538;
})()
;
om_tools$dom$tspan = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$tspan__0.call(this);
default:
var G__8541 = null;
if (arguments.length > 1) {
var G__8542__i = 0, G__8542__a = new Array(arguments.length -  1);
while (G__8542__i < G__8542__a.length) {G__8542__a[G__8542__i] = arguments[G__8542__i + 1]; ++G__8542__i;}
G__8541 = new cljs.core.IndexedSeq(G__8542__a,0);
}
return om_tools$dom$tspan__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$tspan.cljs$lang$maxFixedArity = 1;
om_tools$dom$tspan.cljs$lang$applyTo = om_tools$dom$tspan__2.cljs$lang$applyTo;
om_tools$dom$tspan.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$tspan__0;
om_tools$dom$tspan.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$tspan__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$tspan;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.input = (function() {
var om_tools$dom$input = null;
var om_tools$dom$input__0 = (function (){
return om_tools.dom.element.call(null,om.dom.input,null,null);
});
var om_tools$dom$input__2 = (function() { 
var G__8543__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,om.dom.input,opts__7559__auto__,children__7560__auto__);
};
var G__8543 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8544__i = 0, G__8544__a = new Array(arguments.length -  1);
while (G__8544__i < G__8544__a.length) {G__8544__a[G__8544__i] = arguments[G__8544__i + 1]; ++G__8544__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8544__a,0);
} 
return G__8543__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8543.cljs$lang$maxFixedArity = 1;
G__8543.cljs$lang$applyTo = (function (arglist__8545){
var opts__7559__auto__ = cljs.core.first(arglist__8545);
var children__7560__auto__ = cljs.core.rest(arglist__8545);
return G__8543__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8543.cljs$core$IFn$_invoke$arity$variadic = G__8543__delegate;
return G__8543;
})()
;
om_tools$dom$input = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$input__0.call(this);
default:
var G__8546 = null;
if (arguments.length > 1) {
var G__8547__i = 0, G__8547__a = new Array(arguments.length -  1);
while (G__8547__i < G__8547__a.length) {G__8547__a[G__8547__i] = arguments[G__8547__i + 1]; ++G__8547__i;}
G__8546 = new cljs.core.IndexedSeq(G__8547__a,0);
}
return om_tools$dom$input__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$input.cljs$lang$maxFixedArity = 1;
om_tools$dom$input.cljs$lang$applyTo = om_tools$dom$input__2.cljs$lang$applyTo;
om_tools$dom$input.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$input__0;
om_tools$dom$input.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$input__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$input;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.textarea = (function() {
var om_tools$dom$textarea = null;
var om_tools$dom$textarea__0 = (function (){
return om_tools.dom.element.call(null,om.dom.textarea,null,null);
});
var om_tools$dom$textarea__2 = (function() { 
var G__8548__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,om.dom.textarea,opts__7559__auto__,children__7560__auto__);
};
var G__8548 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8549__i = 0, G__8549__a = new Array(arguments.length -  1);
while (G__8549__i < G__8549__a.length) {G__8549__a[G__8549__i] = arguments[G__8549__i + 1]; ++G__8549__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8549__a,0);
} 
return G__8548__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8548.cljs$lang$maxFixedArity = 1;
G__8548.cljs$lang$applyTo = (function (arglist__8550){
var opts__7559__auto__ = cljs.core.first(arglist__8550);
var children__7560__auto__ = cljs.core.rest(arglist__8550);
return G__8548__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8548.cljs$core$IFn$_invoke$arity$variadic = G__8548__delegate;
return G__8548;
})()
;
om_tools$dom$textarea = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$textarea__0.call(this);
default:
var G__8551 = null;
if (arguments.length > 1) {
var G__8552__i = 0, G__8552__a = new Array(arguments.length -  1);
while (G__8552__i < G__8552__a.length) {G__8552__a[G__8552__i] = arguments[G__8552__i + 1]; ++G__8552__i;}
G__8551 = new cljs.core.IndexedSeq(G__8552__a,0);
}
return om_tools$dom$textarea__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$textarea.cljs$lang$maxFixedArity = 1;
om_tools$dom$textarea.cljs$lang$applyTo = om_tools$dom$textarea__2.cljs$lang$applyTo;
om_tools$dom$textarea.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$textarea__0;
om_tools$dom$textarea.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$textarea__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$textarea;
})()
;

/**
 * @param {...*} var_args
 */
om_tools.dom.option = (function() {
var om_tools$dom$option = null;
var om_tools$dom$option__0 = (function (){
return om_tools.dom.element.call(null,om.dom.option,null,null);
});
var om_tools$dom$option__2 = (function() { 
var G__8553__delegate = function (opts__7559__auto__,children__7560__auto__){
return om_tools.dom.element.call(null,om.dom.option,opts__7559__auto__,children__7560__auto__);
};
var G__8553 = function (opts__7559__auto__,var_args){
var children__7560__auto__ = null;
if (arguments.length > 1) {
var G__8554__i = 0, G__8554__a = new Array(arguments.length -  1);
while (G__8554__i < G__8554__a.length) {G__8554__a[G__8554__i] = arguments[G__8554__i + 1]; ++G__8554__i;}
  children__7560__auto__ = new cljs.core.IndexedSeq(G__8554__a,0);
} 
return G__8553__delegate.call(this,opts__7559__auto__,children__7560__auto__);};
G__8553.cljs$lang$maxFixedArity = 1;
G__8553.cljs$lang$applyTo = (function (arglist__8555){
var opts__7559__auto__ = cljs.core.first(arglist__8555);
var children__7560__auto__ = cljs.core.rest(arglist__8555);
return G__8553__delegate(opts__7559__auto__,children__7560__auto__);
});
G__8553.cljs$core$IFn$_invoke$arity$variadic = G__8553__delegate;
return G__8553;
})()
;
om_tools$dom$option = function(opts__7559__auto__,var_args){
var children__7560__auto__ = var_args;
switch(arguments.length){
case 0:
return om_tools$dom$option__0.call(this);
default:
var G__8556 = null;
if (arguments.length > 1) {
var G__8557__i = 0, G__8557__a = new Array(arguments.length -  1);
while (G__8557__i < G__8557__a.length) {G__8557__a[G__8557__i] = arguments[G__8557__i + 1]; ++G__8557__i;}
G__8556 = new cljs.core.IndexedSeq(G__8557__a,0);
}
return om_tools$dom$option__2.cljs$core$IFn$_invoke$arity$variadic(opts__7559__auto__, G__8556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_tools$dom$option.cljs$lang$maxFixedArity = 1;
om_tools$dom$option.cljs$lang$applyTo = om_tools$dom$option__2.cljs$lang$applyTo;
om_tools$dom$option.cljs$core$IFn$_invoke$arity$0 = om_tools$dom$option__0;
om_tools$dom$option.cljs$core$IFn$_invoke$arity$variadic = om_tools$dom$option__2.cljs$core$IFn$_invoke$arity$variadic;
return om_tools$dom$option;
})()
;
om_tools.dom.class_set = (function om_tools$dom$class_set(m){

var temp__4126__auto__ = cljs.core.seq.call(null,cljs.core.distinct.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.keys.call(null,cljs.core.filter.call(null,cljs.core.val,m)))));
if(temp__4126__auto__){
var ks = temp__4126__auto__;
return clojure.string.join.call(null," ",ks);
} else {
return null;
}
});

//# sourceMappingURL=dom.js.map