if (self.CavalryLogger) { CavalryLogger.start_js(["p8H7V"]); }

__d("NavigationTimingHelper",["ArtilleryExperiments","NavigationMetricsEnumJS","forEachObject","performance"],(function a(b,c,d,e,f,g){__p&&__p();function h(j,k){var l={};c("forEachObject")(c("NavigationMetricsEnumJS"),function(m){var n=k[m];if(n)l[m]=n+j});return l}var i={getAsyncRequestTimings:function j(k){if(!k||!c("performance").timing||!c("performance").getEntriesByName)return undefined;var l=c("performance").getEntriesByName(k);if(l.length===0)return undefined;return h(c("performance").timing.navigationStart,l[0])},getPerformanceNavigationTiming:function j(){if(!c("performance").timing||!c("performance").getEntriesByType)return{};var k=c("performance").getEntriesByType("navigation");if(!k.length)return{};return h(c("performance").timing.navigationStart,k[0])},getNavTimings:function j(){if(!c("performance").timing)return undefined;if(c("ArtilleryExperiments").artillery_navigation_timing_level_2){var k=babelHelpers["extends"]({},h(0,c("performance").timing),i.getPerformanceNavigationTiming());return h(0,k)}else return h(0,c("performance").timing)}};f.exports=i}),null);