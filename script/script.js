$(".con2>ul>li:nth-child(1)").click(function () {
  $(".con2_salad").css({
    'display': 'block',
  });
  $(".salad_but").css({
    'color': '#ff8f3b',
    'font-weight': '900'
  });
  $(".con2_beverage").css({
    'display': 'none',
  });
  $(".beverage_but").css({
    'color': '#2f2f2f',
    'font-weight': '400'
  });
});
$(".con2>ul>li:nth-child(2)").click(function () {
  $(".con2_beverage").css({
    'display': 'block',
  });
  $(".beverage_but").css({
    'color': '#ff8f3b',
    'font-weight': '900'
  });
  $(".con2_salad").css({
    'display': 'none',
  });
  $(".salad_but").css({
    'color': '#2f2f2f',
    'font-weight': '400'
  });
});

