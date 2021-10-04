$(".tab_content").hide();
$(".tab_content:first").show();

$("ul.tabs li a").click(function () {
  const index = $(this).attr("index");
  const tabClicked = $(`ul.tabs li:nth-child(${index})`);

  // we will no longer activate this tab once it has been activated.
  const isTabActived = tabClicked.attr("class") === "active";
  if (isTabActived) return;

  // active tab
  $(".tab_content").hide();
  var activeTab = tabClicked.attr("rel");
  $("#" + activeTab).fadeIn();
  $("ul.tabs li").removeClass("active");
  tabClicked.addClass("active");
  $(".tab_drawer_heading").removeClass("d_active");
  $(".tab_drawer_heading[rel^='" + activeTab + "']").addClass("d_active");
});
