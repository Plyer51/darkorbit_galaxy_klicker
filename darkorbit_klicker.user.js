// ==UserScript==
// @name        DarkOrbit Klick Reloader
// @namespace   DarkOrbit Klick Reloader
// @description Tool zum Reloaden der DarkOrbit Klick-Seite.
// @version     1
// @include     http://de7.darkorbit.bigpoint.com/flashinput/*
// @grant       none
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @updateURL https://openuserjs.org/meta/plyer51/DarkOrbit_Klick_Reloader.meta.js
// @autor      Andreas Ritter
// ==/UserScript==
function getParameter(key) {
  var query = window.location.search.substring(1); 
  var pairs = query.split('&');
 
  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i].split('=');
    if(pair[0] == key) {
      if(pair[1].length > 0)
        return pair[1];
    }  
  }
 
  return undefined;  
}
jQuery.fn.extend({
   disable: function(state) {
       return this.each(function() {
           this.disabled = state;
       });
   }
});
if(getParameter("action") == "init" || getParameter("action") == "multiEnergy") {
  /*setInterval(function() {
    location.reload();
  },100);*/
  $("body").css("font-family", "Verdana");
  var user_id = getParameter("userID");
  var session_id = getParameter("sid");
  var alpha = getParameter("alpha");
  var beta = getParameter("beta");
  var gamma = getParameter("gamma");
  var delta = getParameter("delta");
  var epsilon = getParameter("epsilon");
  var zeta = getParameter("zeta");
  var kappa = getParameter("kappa");
  var lambda = getParameter("lambda");
  var hades = getParameter("hades");
  var streuner = getParameter("streuner");
  var multiplier = getParameter("multiplier");
  var gate, little_window2;
  if(alpha == 1) {
    gate = "alpha";
  } else if(beta == 1) {
    gate = "beta";
  } else if(gamma == 1) {
    gate = "gamma";
  } else if(delta == 1) {
    gate = "delta";
  } else if(epsilon == 1) {
    gate = "epsilon";
  } else if(zeta == 1) {
    gate = "zeta";
  } else if(kappa == 1) {
    gate = "kappa";
  } else if(lambda == 1) {
    gate = "lambda";
  } else if(hades == 1) {
    gate = "hades";
  } else if(streuner == 1) {
    gate = "streuner";
  }
  if(multiplier == 0 || multiplier == undefined) {
    multiplier = 1;
  }
  $("body").append("<iframe height = '100%' width = '100%' frameborder = '0' marginwidth = '0px;' id = 'little_window1' scrolling = 'no' src = 'http://de7.darkorbit.bigpoint.com/flashinput/galaxyGates.php?userID="+user_id+"&action=init&sid="+session_id+"&"+gate+"=1&window=little_window&multiplier="+multiplier+"'>Dein Browser unterstützt keine iFrames.</iframe>");
  //$("body").append("<br><iframe frameborder = '0' scrolling = 'no' src = 'http://de7.darkorbit.bigpoint.com/flashinput/galaxyGates.php?userID=95088923&action=multiEnergy&sid=eef0e2b5ad763b7c1aae781f4112c97e&gamma=1&sample=1&multiplier=1'>Dein Browser unterstützt keine iFrames.</iframe>");
  var little_window1 = document.getElementById("little_window1");
  var alpha, beta, gamma, delta, epsilon, zeta, kappa, lambda, hades, streuner, klick_interval;
  var alpha_tiles, beta_tiles, gamma_tiles, delta_tiles, epsilon_tiles, zeta_tiles, kappa_tiles, lambda_tiles, hades_tiles, streuner_tiles;
  var play_status = false, klick_interval;
  little_window1.onload = function() {
    $("jumpgate:first").remove();
    $("#little_window1").contents().find("jumpgate").prepend("<center><table id = 'jumpgate_table'><tr><th colspan = '11'><font style = 'font-size: 20px; font-weight: bold; color: gray;'>Übersicht</font></th></tr>");
    var new_text = $("#little_window1").contents().find("mode").text().replace("Gate", "");
    $("#little_window1").contents().find("mode").empty();
    $("#little_window1").contents().find("#jumpgate_table").append("<tr id = 'mode_div' style = 'background-color: lightgray;'><td><font style = 'font-size: 15px; color: gray; font-weight: bold;'>Gate</font></td><td class = 'mode'>");
    $("#little_window1").contents().find(".mode").html(new_text);
    $("#little_window1").contents().find(".mode").after("</td></tr>");
    var new_text1 = $("#little_window1").contents().find("money").text().replace("Uridium", "");
    $("#little_window1").contents().find("money").empty();
    $("#little_window1").contents().find("#jumpgate_table").append("<tr id = 'mode_div' style = 'background-color: lightgray;'><td><font style = 'font-size: 15px; color: gray; font-weight: bold;'>Uridium</font></td><td class = 'money'>");
    $("#little_window1").contents().find(".money").html(new_text1);
    $("#little_window1").contents().find(".money").after("</td></tr>");
    var new_text2 = $("#little_window1").contents().find("samples").text().replace("???", "");
    $("#little_window1").contents().find("samples").empty();
    $("#little_window1").contents().find("#jumpgate_table").append("<tr id = 'mode_div' style = 'background-color: lightgray;'><td><font style = 'font-size: 15px; color: gray; font-weight: bold;'>???</font></td><td class = 'samples'>");
    $("#little_window1").contents().find(".samples").html(new_text2);
    $("#little_window1").contents().find(".samples").after("</td></tr>");
    var new_text3 = $("#little_window1").contents().find("spinamount_selected").text().replace("Energiestösse", "");
    $("#little_window1").contents().find("spinamount_selected").empty();
    $("#little_window1").contents().find("#jumpgate_table").append("<tr id = 'mode_div' style = 'background-color: lightgray;'><td><font style = 'font-size: 15px; color: gray; font-weight: bold;'>Energiestösse</font></td><td class = 'spinamount_selected'>");
    $("#little_window1").contents().find(".spinamount_selected").html(new_text3);
    $("#little_window1").contents().find(".spinamount_selected").after("</td></tr>");
    var new_text4 = $("#little_window1").contents().find("energy_cost").text().replace("Kosten", "");
    $("#little_window1").contents().find("energy_cost").empty();
    $("#little_window1").contents().find("#jumpgate_table").append("<tr id = 'mode_div' style = 'background-color: lightgray;'><td><font style = 'font-size: 15px; color: gray; font-weight: bold;'>Kosten</font></td><td class = 'energy_cost'>");
    $("#little_window1").contents().find(".energy_cost").html(new_text4);
    $("#little_window1").contents().find(".energy_cost").after("</td></tr>");
    var new_text5 = $("#little_window1").contents().find("hadesgatedialog").text().replace("Hades-Gate-Dialog", "");
    $("#little_window1").contents().find("hadesgatedialog").empty();
    $("#little_window1").contents().find("#jumpgate_table").append("<tr id = 'mode_div' style = 'background-color: lightgray;'><td><font style = 'font-size: 15px; color: gray; font-weight: bold;'>Hades-Gate-Dialog</font></td><td class = 'hadesgatedialog'>");
    $("#little_window1").contents().find(".hadesgatedialog").html(new_text5);
    $("#little_window1").contents().find(".hadesgatedialog").after("</td></tr>");
    var new_text6 = $("#little_window1").contents().find("spinamounts").text().replace("Mögliche Energiestösse", "");
    $("#little_window1").contents().find("spinamounts").empty();
    $("#little_window1").contents().find("#jumpgate_table").append("<tr id = 'mode_div' style = 'background-color: lightgray;'><td><font style = 'font-size: 15px; color: gray; font-weight: bold;'>Mögliche Energiestösse</font></td><td class = 'spinamounts'>");
    $("#little_window1").contents().find(".spinamounts").html(new_text6);
    $("#little_window1").contents().find(".spinamounts").after("</td></tr>");
    var new_text7 = $("#little_window1").contents().find("spinonsale").text().replace("???", "");
    $("#little_window1").contents().find("spinonsale").empty();
    $("#little_window1").contents().find("#jumpgate_table").append("<tr id = 'mode_div' style = 'background-color: lightgray;'><td><font style = 'font-size: 15px; color: gray; font-weight: bold;'>???</font></td><td class = 'spinonsale'>");
    $("#little_window1").contents().find(".spinonsale").html(new_text7);
    $("#little_window1").contents().find(".spinonsale").after("</td></tr>");
    var new_text8 = $("#little_window1").contents().find("spinsalepercentage").text().replace("???", "");
    $("#little_window1").contents().find("spinsalepercentage").empty();
    $("#little_window1").contents().find("#jumpgate_table").append("<tr id = 'mode_div' style = 'background-color: lightgray;'><td><font style = 'font-size: 15px; color: gray; font-weight: bold;'>???</font></td><td class = 'spinsalepercentage'>");
    $("#little_window1").contents().find(".spinsalepercentage").html(new_text8);
    $("#little_window1").contents().find(".spinsalepercentage").after("</td></tr>");
    var new_text9 = $("#little_window1").contents().find("galaxygateday").text().replace("Doppelte Gatebelohnungen", "");
    $("#little_window1").contents().find("galaxygateday").empty();
    $("#little_window1").contents().find("#jumpgate_table").append("<tr id = 'mode_div' style = 'background-color: lightgray;'><td><font style = 'font-size: 15px; color: gray; font-weight: bold;'>Doppelte Gatebelohnungen</font></td><td class = 'galaxygateday'>");
    $("#little_window1").contents().find(".galaxygateday").html(new_text9);
    $("#little_window1").contents().find(".galaxygateday").after("</td></tr>");
    var new_text10 = $("#little_window1").contents().find("bonusrewardsday").text().replace("Spezielle Gatebelohnungen", "");
    $("#little_window1").contents().find("bonusrewardsday").empty();
    $("#little_window1").contents().find("#jumpgate_table").append("<tr id = 'mode_div' style = 'background-color: lightgray;'><td><font style = 'font-size: 15px; color: gray; font-weight: bold;'>Spezielle Gatebelohnungen</font></td><td class = 'bonusrewardsday'>");
    $("#little_window1").contents().find(".bonusrewardsday").html(new_text10);
    $("#little_window1").contents().find(".bonusrewardsday").after("</td></tr>");
    
    var data = little_window1.contentWindow.document.documentElement.outerHTML;
    data = data.split("<gates>");
    data = data[1];
    data = data.split("</gates>");
    data = data[0];
    data = data.split("<gate ");
    //console.log(data);
    if(getParameter("alpha") == 1 || getParameter("beta") == 1 || getParameter("gamma") == 1) {
      alpha = data[1].split("prepared=");
      alpha = alpha[1].charAt(1);
      alpha_tiles = data[1];
      alpha_tiles = alpha_tiles.substring(alpha_tiles.lastIndexOf('current=')+1,alpha_tiles.lastIndexOf('id'));
      alpha_tiles = alpha_tiles.replace('urrent="', '');
      alpha_tiles = alpha_tiles.replace('"', '');
      $("#little_window1").contents().find("#jumpgate_table").append("<tr id = 'mode_div' style = 'background-color: lightgray;'><td><font style = 'font-size: 15px; color: gray; font-weight: bold;'>Alpha vorbereitet?</font></td><td class = 'bonusrewardsday'>"+alpha+"</td></tr>");
      $("#little_window1").contents().find("#jumpgate_table").append("<tr id = 'mode_div' style = 'background-color: lightgray;'><td><font style = 'font-size: 15px; color: gray; font-weight: bold;'>Alpha-Teile</font></td><td class = 'bonusrewardsday'>"+alpha_tiles+"</td></tr>");
      beta = data[2].split("prepared=");
      beta = beta[1].charAt(1);
      beta_tiles = data[2];
      beta_tiles = beta_tiles.substring(beta_tiles.lastIndexOf('current=')+1,beta_tiles.lastIndexOf('id'));
      beta_tiles = beta_tiles.replace('urrent="', '');
      beta_tiles = beta_tiles.replace('"', '');
      $("#little_window1").contents().find("#jumpgate_table").append("<tr id = 'mode_div' style = 'background-color: lightgray;'><td><font style = 'font-size: 15px; color: gray; font-weight: bold;'>Beta vorbereitet?</font></td><td class = 'bonusrewardsday'>"+beta+"</td></tr>");
      $("#little_window1").contents().find("#jumpgate_table").append("<tr id = 'mode_div' style = 'background-color: lightgray;'><td><font style = 'font-size: 15px; color: gray; font-weight: bold;'>Beta-Teile</font></td><td class = 'bonusrewardsday'>"+beta_tiles+"</td></tr>");
      gamma = data[3].split("prepared=");
      gamma = gamma[1].charAt(1);
      gamma_tiles = data[3];
      gamma_tiles = gamma_tiles.substring(gamma_tiles.lastIndexOf('current=')+1,gamma_tiles.lastIndexOf('id'));
      gamma_tiles = gamma_tiles.replace('urrent="', '');
      gamma_tiles = gamma_tiles.replace('"', '');
      $("#little_window1").contents().find("#jumpgate_table").append("<tr id = 'mode_div' style = 'background-color: lightgray;'><td><font style = 'font-size: 15px; color: gray; font-weight: bold;'>Gamma vorbereitet?</font></td><td class = 'bonusrewardsday'>"+gamma+"</td></tr>");
      $("#little_window1").contents().find("#jumpgate_table").append("<tr id = 'mode_div' style = 'background-color: lightgray;'><td><font style = 'font-size: 15px; color: gray; font-weight: bold;'>Gamma-Teile</font></td><td class = 'bonusrewardsday'>"+gamma_tiles+"</td></tr>");
    } else if(getParameter("delta") == 1) {
      delta = data[4].split("prepared=");
      delta = delta[1].charAt(1);
      delta_tiles = data[4];
      delta_tiles = delta_tiles.substring(delta_tiles.lastIndexOf('current=')+1,delta_tiles.lastIndexOf('id'));
      delta_tiles = delta_tiles.replace('urrent="', '');
      delta_tiles = delta_tiles.replace('"', '');
      $("#little_window1").contents().find("#jumpgate_table").append("<tr id = 'mode_div' style = 'background-color: lightgray;'><td><font style = 'font-size: 15px; color: gray; font-weight: bold;'>Delta vorbereitet?</font></td><td class = 'bonusrewardsday'>"+delta+"</td></tr>");
      $("#little_window1").contents().find("#jumpgate_table").append("<tr id = 'mode_div' style = 'background-color: lightgray;'><td><font style = 'font-size: 15px; color: gray; font-weight: bold;'>Delta-Teile</font></td><td class = 'bonusrewardsday'>"+delta_tiles+"</td></tr>");
    } else if(getParameter("epsilon") == 1) {
      epsilon = data[5].split("prepared=");
      epsilon = epsilon[1].charAt(1);
      epsilon_tiles = data[5];
      epsilon_tiles = epsilon_tiles.substring(epsilon_tiles.lastIndexOf('current=')+1,epsilon_tiles.lastIndexOf('id'));
      epsilon_tiles = epsilon_tiles.replace('urrent="', '');
      epsilon_tiles = epsilon_tiles.replace('"', '');
      $("#little_window1").contents().find("#jumpgate_table").append("<tr id = 'mode_div' style = 'background-color: lightgray;'><td><font style = 'font-size: 15px; color: gray; font-weight: bold;'>Epsilon vorbereitet?</font></td><td class = 'bonusrewardsday'>"+epsilon+"</td></tr>");
      $("#little_window1").contents().find("#jumpgate_table").append("<tr id = 'mode_div' style = 'background-color: lightgray;'><td><font style = 'font-size: 15px; color: gray; font-weight: bold;'>Epsilon-Teile</font></td><td class = 'bonusrewardsday'>"+epsilon_tiles+"</td></tr>");
    } else if(getParameter("zeta") == 1) {
      zeta = data[6].split("prepared=");
      zeta = zeta[1].charAt(1);
      zeta_tiles = data[6];
      zeta_tiles = zeta_tiles.substring(zeta_tiles.lastIndexOf('current=')+1,zeta_tiles.lastIndexOf('id'));
      zeta_tiles = zeta_tiles.replace('urrent="', '');
      zeta_tiles = zeta_tiles.replace('"', '');
      $("#little_window1").contents().find("#jumpgate_table").append("<tr id = 'mode_div' style = 'background-color: lightgray;'><td><font style = 'font-size: 15px; color: gray; font-weight: bold;'>Zeta vorbereitet?</font></td><td class = 'bonusrewardsday'>"+zeta+"</td></tr>");
      $("#little_window1").contents().find("#jumpgate_table").append("<tr id = 'mode_div' style = 'background-color: lightgray;'><td><font style = 'font-size: 15px; color: gray; font-weight: bold;'>Zeta-Teile</font></td><td class = 'bonusrewardsday'>"+zeta_tiles+"</td></tr>");
    } else if(getParameter("kappa") == 1) {
      kappa = data[7].split("prepared=");
      kappa = kappa[1].charAt(1);
      kappa_tiles = data[7];
      kappa_tiles = kappa_tiles.substring(kappa_tiles.lastIndexOf('current=')+1,kappa_tiles.lastIndexOf('id'));
      kappa_tiles = kappa_tiles.replace('urrent="', '');
      kappa_tiles = kappa_tiles.replace('"', '');
      $("#little_window1").contents().find("#jumpgate_table").append("<tr id = 'mode_div' style = 'background-color: lightgray;'><td><font style = 'font-size: 15px; color: gray; font-weight: bold;'>Kappa vorbereitet?</font></td><td class = 'bonusrewardsday'>"+kappa+"</td></tr>");
      $("#little_window1").contents().find("#jumpgate_table").append("<tr id = 'mode_div' style = 'background-color: lightgray;'><td><font style = 'font-size: 15px; color: gray; font-weight: bold;'>Kappa-Teile</font></td><td class = 'bonusrewardsday'>"+kappa_tiles+"</td></tr>");
    } else if(getParameter("lambda") == 1) {
      lambda = data[8].split("prepared=");
      lambda = lambda[1].charAt(1);
      lambda_tiles = data[8];
      lambda_tiles = lambda_tiles.substring(lambda_tiles.lastIndexOf('current=')+1,lambda_tiles.lastIndexOf('id'));
      lambda_tiles = lambda_tiles.replace('urrent="', '');
      lambda_tiles = lambda_tiles.replace('"', '');
      $("#little_window1").contents().find("#jumpgate_table").append("<tr id = 'mode_div' style = 'background-color: lightgray;'><td><font style = 'font-size: 15px; color: gray; font-weight: bold;'>Lambda vorbereitet?</font></td><td class = 'bonusrewardsday'>"+lambda+"</td></tr>");
      $("#little_window1").contents().find("#jumpgate_table").append("<tr id = 'mode_div' style = 'background-color: lightgray;'><td><font style = 'font-size: 15px; color: gray; font-weight: bold;'>Lambda-Teile</font></td><td class = 'bonusrewardsday'>"+lambda_tiles+"</td></tr>");
    } else if(getParameter("hades") == 1) {
      hades = data[10].split("prepared=");
      hades = hades[1].charAt(1);
      hades_tiles = data[10];
      hades_tiles = hades_tiles.substring(hades_tiles.lastIndexOf('current=')+1,hades_tiles.lastIndexOf('id'));
      hades_tiles = hades_tiles.replace('urrent="', '');
      hades_tiles = hades_tiles.replace('"', '');
      $("#little_window1").contents().find("#jumpgate_table").append("<tr id = 'mode_div' style = 'background-color: lightgray;'><td><font style = 'font-size: 15px; color: gray; font-weight: bold;'>Hades vorbereitet?</font></td><td class = 'bonusrewardsday'>"+hades+"</td></tr>");
      $("#little_window1").contents().find("#jumpgate_table").append("<tr id = 'mode_div' style = 'background-color: lightgray;'><td><font style = 'font-size: 15px; color: gray; font-weight: bold;'>Hades-Teile</font></td><td class = 'bonusrewardsday'>"+hades_tiles+"</td></tr>");
    } else if(getParameter("streuner") == 1) {
      streuner = data[11].split("prepared=");
      streuner = streuner[1].charAt(1);
      streuner_tiles = data[11];
      streuner_tiles = streuner_tiles.substring(streuner_tiles.lastIndexOf('current=')+1,streuner_tiles.lastIndexOf('id'));
      streuner_tiles = streuner_tiles.replace('urrent="', '');
      streuner_tiles = streuner_tiles.replace('"', '');
      $("#little_window1").contents().find("#jumpgate_table").append("<tr id = 'mode_div' style = 'background-color: lightgray;'><td><font style = 'font-size: 15px; color: gray; font-weight: bold;'>Kuiper vorbereitet?</font></td><td class = 'bonusrewardsday'>"+streuner+"</td></tr>");
      $("#little_window1").contents().find("#jumpgate_table").append("<tr id = 'mode_div' style = 'background-color: lightgray;'><td><font style = 'font-size: 15px; color: gray; font-weight: bold;'>Kuiper-Teile</font></td><td class = 'bonusrewardsday'>"+streuner_tiles+"</td></tr>");
    }
    //hier weitere Gates einbauen
    $("#little_window1").contents().find("#jumpgate_table").append("<tr id = 'mode_div' style = 'background-color: lightgray;'><td><center><input type = 'button' value = 'Starten' id = 'click_start'></input></center></td><td class = 'bonusrewardsday'><center><input type = 'button' value = 'Stoppen' id = 'click_stop'></input></center></td></tr>");
    if(play_status == false) {
      $("#little_window1").contents().find("#click_stop").prop("disabled", true);
      $("#little_window1").contents().find("#click_start").prop("disabled", false);
    } else {
      $("#little_window1").contents().find("#click_stop").prop("disabled", false);
      $("#little_window1").contents().find("#click_start").prop("disabled", true);
    }
    $($("#little_window1").contents().find("#click_start")).click(function() {
      play_status = true;
      $("#little_window4").remove();
      $("body").append("<iframe frameborder = '0' marginwidth = '0px;' id = 'little_window4' scrolling = 'no' src = 'http://de7.darkorbit.bigpoint.com/flashinput/galaxyGates.php?userID="+user_id+"&action=init&sid="+session_id+"&"+gate+"=1&window=little_window&multiplier="+multiplier+"'>Dein Browser unterstützt keine iFrames.</iframe>");
      var little_window4 = document.getElementById("little_window4");
      little_window4.onload = function() {
        little_window4.src = little_window4.src;
        var data = little_window4.contentWindow.document.documentElement.outerHTML;
        data = data.split("<gates>");
        data = data[1];
        data = data.split("</gates>");
        data = data[0];
        data = data.split("<gate ");
        alpha = data[1].split("prepared=");
        alpha = alpha[1].charAt(1);
        alpha_tiles = data[1];
        alpha_tiles = alpha_tiles.substring(alpha_tiles.lastIndexOf('current=')+1,alpha_tiles.lastIndexOf('id'));
        alpha_tiles = alpha_tiles.replace('urrent="', '');
        alpha_tiles = alpha_tiles.replace('"', '');
        beta = data[2].split("prepared=");
        beta = beta[1].charAt(1);
        beta_tiles = data[2];
        beta_tiles = beta_tiles.substring(beta_tiles.lastIndexOf('current=')+1,beta_tiles.lastIndexOf('id'));
        beta_tiles = beta_tiles.replace('urrent="', '');
        beta_tiles = beta_tiles.replace('"', '');
        gamma = data[3].split("prepared=");
        gamma = gamma[1].charAt(1);
        gamma_tiles = data[3];
        gamma_tiles = gamma_tiles.substring(gamma_tiles.lastIndexOf('current=')+1,gamma_tiles.lastIndexOf('id'));
        gamma_tiles = gamma_tiles.replace('urrent="', '');
        gamma_tiles = gamma_tiles.replace('"', '');
        delta = data[4].split("prepared=");
        delta = delta[1].charAt(1);
        delta_tiles = data[4];
        delta_tiles = delta_tiles.substring(delta_tiles.lastIndexOf('current=')+1,delta_tiles.lastIndexOf('id'));
        delta_tiles = delta_tiles.replace('urrent="', '');
        delta_tiles = delta_tiles.replace('"', '');
        epsilon = data[5].split("prepared=");
        epsilon = epsilon[1].charAt(1);
        epsilon_tiles = data[5];
        epsilon_tiles = epsilon_tiles.substring(epsilon_tiles.lastIndexOf('current=')+1,epsilon_tiles.lastIndexOf('id'));
        epsilon_tiles = epsilon_tiles.replace('urrent="', '');
        epsilon_tiles = epsilon_tiles.replace('"', '');
        zeta = data[6].split("prepared=");
        zeta = zeta[1].charAt(1);
        zeta_tiles = data[6];
        zeta_tiles = zeta_tiles.substring(zeta_tiles.lastIndexOf('current=')+1,zeta_tiles.lastIndexOf('id'));
        zeta_tiles = zeta_tiles.replace('urrent="', '');
        zeta_tiles = zeta_tiles.replace('"', '');
        kappa = data[7].split("prepared=");
        kappa = kappa[1].charAt(1);
        kappa_tiles = data[7];
        kappa_tiles = kappa_tiles.substring(kappa_tiles.lastIndexOf('current=')+1,kappa_tiles.lastIndexOf('id'));
        kappa_tiles = kappa_tiles.replace('urrent="', '');
        kappa_tiles = kappa_tiles.replace('"', '');
        lambda = data[8].split("prepared=");
        lambda = lambda[1].charAt(1);
        lambda_tiles = data[8];
        lambda_tiles = lambda_tiles.substring(lambda_tiles.lastIndexOf('current=')+1,lambda_tiles.lastIndexOf('id'));
        lambda_tiles = lambda_tiles.replace('urrent="', '');
        lambda_tiles = lambda_tiles.replace('"', '');
        hades = data[10].split("prepared=");
        hades = hades[1].charAt(1);
        hades_tiles = data[10];
        hades_tiles = hades_tiles.substring(hades_tiles.lastIndexOf('current=')+1,hades_tiles.lastIndexOf('id'));
        hades_tiles = hades_tiles.replace('urrent="', '');
        hades_tiles = hades_tiles.replace('"', '');
        streuner = data[11].split("prepared=");
        streuner = streuner[1].charAt(1);
        streuner_tiles = data[11];
        streuner_tiles = streuner_tiles.substring(streuner_tiles.lastIndexOf('current=')+1,streuner_tiles.lastIndexOf('id'));
        streuner_tiles = streuner_tiles.replace('urrent="', '');
        streuner_tiles = streuner_tiles.replace('"', '');
        console.log("Alpha-Teile: "+alpha_tiles);
        console.log("Beta-Teile: "+beta_tiles);
        console.log("Gamma-Teile: "+gamma_tiles);
        console.log("Delta-Teile: "+delta_tiles);
        console.log("Epsilon-Teile: "+epsilon_tiles);
        console.log("Zeta-Teile: "+zeta_tiles);
        console.log("Kappa-Teile: "+kappa_tiles);
        console.log("Lambda-Teile: "+lambda_tiles);
        console.log("Hades-Teile: "+hades_tiles);
        console.log("Kuiper-Teile: "+streuner_tiles);
      }
      $("#little_window1").contents().find("#click_stop").prop("disabled", false);
      $("#little_window1").contents().find("#click_start").prop("disabled", true);
      klick_interval = setInterval(function() {
        little_window1.src = little_window1.src;
        $("#little_window2").remove();
        $("#little_window5").remove();
        $("#little_window6").remove();
        $("#little_window7").remove();
        $("body").append("<iframe width = '1' height = '1' frameborder = '0' marginwidth = '0px;' id = 'little_window2' scrolling = 'no' src = 'http://de7.darkorbit.bigpoint.com/flashinput/galaxyGates.php?userID="+user_id+"&action=multiEnergy&sid="+session_id+"&"+gate+"=1&sample=1&multiplier="+multiplier+"'>Dein Browser unterstützt keine iFrames.</iframe>");
        $("body").append("<iframe width = '1' height = '1' frameborder = '0' marginwidth = '0px;' id = 'little_window5' scrolling = 'no' src = 'http://de7.darkorbit.bigpoint.com/flashinput/galaxyGates.php?userID="+user_id+"&action=multiEnergy&sid="+session_id+"&"+gate+"=1&sample=1&multiplier="+multiplier+"'>Dein Browser unterstützt keine iFrames.</iframe>");
        $("body").append("<iframe width = '1' height = '1' frameborder = '0' marginwidth = '0px;' id = 'little_window6' scrolling = 'no' src = 'http://de7.darkorbit.bigpoint.com/flashinput/galaxyGates.php?userID="+user_id+"&action=multiEnergy&sid="+session_id+"&"+gate+"=1&sample=1&multiplier="+multiplier+"'>Dein Browser unterstützt keine iFrames.</iframe>");
        $("body").append("<iframe width = '1' height = '1' frameborder = '0' marginwidth = '0px;' id = 'little_window7' scrolling = 'no' src = 'http://de7.darkorbit.bigpoint.com/flashinput/galaxyGates.php?userID="+user_id+"&action=multiEnergy&sid="+session_id+"&"+gate+"=1&sample=1&multiplier="+multiplier+"'>Dein Browser unterstützt keine iFrames.</iframe>");
        little_window2 = document.getElementById("little_window2");
        little_window2.src = little_window2.src;
        little_window5 = document.getElementById("little_window5");
        little_window5.src = little_window5.src;
        little_window6 = document.getElementById("little_window6");
        little_window6.src = little_window6.src;
        little_window7 = document.getElementById("little_window7");
        little_window7.src = little_window7.src;
        if(gate == "alpha" || gate == "beta" || gate == "gamma") {
          if(alpha_tiles >= 34) {
            $("#little_window3").remove();
            $("body").append("<iframe frameborder = '0' marginwidth = '0px;' id = 'little_window3' scrolling = 'no' src = 'http://de7.darkorbit.bigpoint.com/flashinput/galaxyGates.php?userID="+user_id+"&sid="+session_id+"&action=setupGate&gateID=1'>Dein Browser unterstützt keine iFrames.</iframe>");
          }
          if(beta_tiles >= 48) {
            $("#little_window3").remove();
            $("body").append("<iframe frameborder = '0' marginwidth = '0px;' id = 'little_window3' scrolling = 'no' src = 'http://de7.darkorbit.bigpoint.com/flashinput/galaxyGates.php?userID="+user_id+"&sid="+session_id+"&action=setupGate&gateID=2'>Dein Browser unterstützt keine iFrames.</iframe>");
          }
          if(gamma_tiles >= 82) {
            $("#little_window3").remove();
            $("body").append("<iframe frameborder = '0' marginwidth = '0px;' id = 'little_window3' scrolling = 'no' src = 'http://de7.darkorbit.bigpoint.com/flashinput/galaxyGates.php?userID="+user_id+"&sid="+session_id+"&action=setupGate&gateID=3'>Dein Browser unterstützt keine iFrames.</iframe>");
          }
          if(alpha == 1 && alpha_tiles >= 34) {
            play_status = false;
            $("#little_window1").contents().find("#click_start").prop("disabled", false);
            $("#little_window1").contents().find("#click_stop").prop("disabled", true);
            setTimeout(function() {
              little_window1.src = little_window1.src;
            },2000);
            clearInterval(klick_interval);
          } else if(beta == 1 && beta_tiles >= 48) {
            play_status = false;
            $("#little_window1").contents().find("#click_start").prop("disabled", false);
            $("#little_window1").contents().find("#click_stop").prop("disabled", true);
            setTimeout(function() {
              little_window1.src = little_window1.src;
            },2000);
            clearInterval(klick_interval);
          } else if(gamma == 1 && gamma_tiles >= 82) {
            play_status = false;
            $("#little_window1").contents().find("#click_start").prop("disabled", false);
            $("#little_window1").contents().find("#click_stop").prop("disabled", true);
            setTimeout(function() {
              little_window1.src = little_window1.src;
            },2000);
            clearInterval(klick_interval);
          }
        } else if(gate == "delta") {
          if(delta_tiles >= 128) {
            $("#little_window3").remove();
            $("body").append("<iframe frameborder = '0' marginwidth = '0px;' id = 'little_window3' scrolling = 'no' src = 'http://de7.darkorbit.bigpoint.com/flashinput/galaxyGates.php?userID="+user_id+"&sid="+session_id+"&action=setupGate&gateID=4'>Dein Browser unterstützt keine iFrames.</iframe>");
          }
          if(delta == 1 && delta_tiles >= 128) {
            play_status = false;
            $("#little_window1").contents().find("#click_start").prop("disabled", false);
            $("#little_window1").contents().find("#click_stop").prop("disabled", true);
            setTimeout(function() {
              little_window1.src = little_window1.src;
            },2000);
            clearInterval(klick_interval);
          }
        } else if(gate == "epsilon") {
          if(epsilon_tiles >= 99) {
            $("#little_window3").remove();
            $("body").append("<iframe frameborder = '0' marginwidth = '0px;' id = 'little_window3' scrolling = 'no' src = 'http://de7.darkorbit.bigpoint.com/flashinput/galaxyGates.php?userID="+user_id+"&sid="+session_id+"&action=setupGate&gateID=5'>Dein Browser unterstützt keine iFrames.</iframe>");
          }
          if(epsilon == 1 && epsilon_tiles >= 99) {
            play_status = false;
            $("#little_window1").contents().find("#click_start").prop("disabled", false);
            $("#little_window1").contents().find("#click_stop").prop("disabled", true);
            setTimeout(function() {
              little_window1.src = little_window1.src;
            },2000);
            clearInterval(klick_interval);
          }
        } else if(gate == "zeta") {
          if(zeta_tiles >= 111) {
            $("#little_window3").remove();
            $("body").append("<iframe frameborder = '0' marginwidth = '0px;' id = 'little_window3' scrolling = 'no' src = 'http://de7.darkorbit.bigpoint.com/flashinput/galaxyGates.php?userID="+user_id+"&sid="+session_id+"&action=setupGate&gateID=6'>Dein Browser unterstützt keine iFrames.</iframe>");
          }
          if(zeta == 1 && zeta_tiles >= 111) {
            play_status = false;
            $("#little_window1").contents().find("#click_start").prop("disabled", false);
            $("#little_window1").contents().find("#click_stop").prop("disabled", true);
            setTimeout(function() {
              little_window1.src = little_window1.src;
            },2000);
            clearInterval(klick_interval);
          }
        } else if(gate == "kappa") {
          if(kappa_tiles >= 120) {
            $("#little_window3").remove();
            $("body").append("<iframe frameborder = '0' marginwidth = '0px;' id = 'little_window3' scrolling = 'no' src = 'http://de7.darkorbit.bigpoint.com/flashinput/galaxyGates.php?userID="+user_id+"&sid="+session_id+"&action=setupGate&gateID=7'>Dein Browser unterstützt keine iFrames.</iframe>");
          }
          if(kappa == 1 && kappa_tiles >= 120) {
            play_status = false;
            $("#little_window1").contents().find("#click_start").prop("disabled", false);
            $("#little_window1").contents().find("#click_stop").prop("disabled", true);
            setTimeout(function() {
              little_window1.src = little_window1.src;
            },2000);
            clearInterval(klick_interval);
          }
        } else if(gate == "lambda") {
          if(lambda_tiles >= 45) {
            $("#little_window3").remove();
            $("body").append("<iframe frameborder = '0' marginwidth = '0px;' id = 'little_window3' scrolling = 'no' src = 'http://de7.darkorbit.bigpoint.com/flashinput/galaxyGates.php?userID="+user_id+"&sid="+session_id+"&action=setupGate&gateID=8'>Dein Browser unterstützt keine iFrames.</iframe>");
          }
          if(lambda == 1 && lambda_tiles >= 45) {
            play_status = false;
            $("#little_window1").contents().find("#click_start").prop("disabled", false);
            $("#little_window1").contents().find("#click_stop").prop("disabled", true);
            setTimeout(function() {
              little_window1.src = little_window1.src;
            },2000);
            clearInterval(klick_interval);
          }
        } else if(gate == "hades") {
          if(hades_tiles >= 45) {
            $("#little_window3").remove();
            $("body").append("<iframe frameborder = '0' marginwidth = '0px;' id = 'little_window3' scrolling = 'no' src = 'http://de7.darkorbit.bigpoint.com/flashinput/galaxyGates.php?userID="+user_id+"&sid="+session_id+"&action=setupGate&gateID=13'>Dein Browser unterstützt keine iFrames.</iframe>");
          }
          if(hades == 1 && hades_tiles >= 45) {
            play_status = false;
            $("#little_window1").contents().find("#click_start").prop("disabled", false);
            $("#little_window1").contents().find("#click_stop").prop("disabled", true);
            setTimeout(function() {
              little_window1.src = little_window1.src;
            },2000);
            clearInterval(klick_interval);
          }
        } else if(gate == "streuner") {
          if(streuner_tiles >= 100) {
            $("#little_window3").remove();
            $("body").append("<iframe frameborder = '0' marginwidth = '0px;' id = 'little_window3' scrolling = 'no' src = 'http://de7.darkorbit.bigpoint.com/flashinput/galaxyGates.php?userID="+user_id+"&sid="+session_id+"&action=setupGate&gateID=19'>Dein Browser unterstützt keine iFrames.</iframe>");
          }
          if(streuner == 1 && streuner_tiles >= 100) {
            play_status = false;
            $("#little_window1").contents().find("#click_start").prop("disabled", false);
            $("#little_window1").contents().find("#click_stop").prop("disabled", true);
            setTimeout(function() {
              little_window1.src = little_window1.src;
            },2000);
            clearInterval(klick_interval);
          }
        }
        //hier weitere Gates einbauen
      },100);
    });
    $($("#little_window1").contents().find("#click_stop")).click(function() {
      play_status = false;
      $("#little_window1").contents().find("#click_start").prop("disabled", false);
      $("#little_window1").contents().find("#click_stop").prop("disabled", true);
      setTimeout(function() {
        little_window1.src = little_window1.src;
      },2000);
      clearInterval(klick_interval);
    });
    $("#little_window1").contents().find("bonusrewardsday").after("</table></center>");
  }
}
