webpackJsonp(["app/js/courseset/show/notes/index"],{"8b60dd4a66f0e5efac4b":function(t,e,s){"use strict";$(".js-like").on("click",function(t){var e=$(t.currentTarget),s=e.find(".js-like-num"),n=parseInt(s.text()),o=void 0,i=e.hasClass("color-primary");o=i?e.data("cancelLikeUrl"):e.data("likeUrl"),$.post(o).done(function(t){i?(e.removeClass("color-primary"),s.text(n-1)):(e.addClass("color-primary"),s.text(n+1))})}),$("#note-list .content").each(function(){$(this).find(".editor-text").height()>90&&$(this).next().show()}),$("#note-list").on("click",".js-more-show",function(){$(this).find(".js-change-btn").toggle(),$(this).prev().toggleClass("active")})}},["8b60dd4a66f0e5efac4b"]);