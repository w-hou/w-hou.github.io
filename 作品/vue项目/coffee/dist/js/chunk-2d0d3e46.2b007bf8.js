(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d3e46"],{"5f65":function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"new-address"},[t("van-nav-bar",{attrs:{title:"新增地址","left-text":"返回","left-arrow":""},on:{"click-left":function(a){return e.$router.go(-1)}}}),t("van-address-edit",{attrs:{"area-list":e.areaList,"show-postal":"","show-delete":"","show-set-default":"","search-result":e.searchResult,"area-columns-placeholder":["请选择","请选择","请选择"]},on:{save:e.onSave}})],1)},r=[],o=(t("b0c0"),t("a9e3"),t("e7e5"),t("d399")),n=t("8e28"),l={data:function(){return{areaList:n["a"],searchResult:[]}},methods:{onSave:function(e){var a=this,t=e.name,s=e.tel,r=e.province,n=e.city,l=e.county,c=e.postalCode,d=e.areaCode,i=e.addressDetail,u=e.isDefault,f=localStorage.getItem("Tk"),h={appkey:this.appkey,tokenString:f,name:t,tel:s,province:r,city:n,county:l,postalCode:c,areaCode:d,addressDetail:i,isDefault:Number(u)};o["a"].loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"POST",url:"/addAddress",data:h}).then((function(e){o["a"].clear(),9e3==e.data.code?a.$router.go(-1):Object(o["a"])(e.data.msg)})).catch((function(e){o["a"].clear()}))}}},c=l,d=t("2877"),i=Object(d["a"])(c,s,r,!1,null,"6e64e4e8",null);a["default"]=i.exports}}]);
//# sourceMappingURL=chunk-2d0d3e46.2b007bf8.js.map