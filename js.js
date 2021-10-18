$(".tab_content").hide();
$(".tab_content:first").show();
dddd
$("ul.tabs li").click(function () {
  // we will no longer activate this tab once it has been activated.
  const isTabActived = $(this).attr("class") === "active";
  if (isTabActived) return;

  // active tab
  $(".tab_content").hide();
  var activeTab = $(this).attr("rel");
  $("#" + activeTab).fadeIn();
  $("ul.tabs li").removeClass("active");
  $(this).addClass("active");
  $(".tab_drawer_heading").removeClass("d_active");
  $(".tab_drawer_heading[rel^='" + activeTab + "']").addClass("d_active");
});
