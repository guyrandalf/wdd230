const lastVisitedDisplay = document.querySelector(".lastVisited");

  const cookie1 = "lastTimeVisited";
  const prevTime = getCookie(cookie1);
  const curTime = new Date().getTime();
  setCookie(cookie1, curTime, 365);

  const milSecTimeDif = curTime - prevTime;
  const secTimeDif = milSecTimeDif / 1000;
  const minTimeDif = secTimeDif / 60;
  const hourTimeDif = minTimeDif / 60;
  const dayTimeDif = hourTimeDif / 24;

  lastVisitedDisplay.textContent = setLastTimeVisited(
    dayTimeDif,
    hourTimeDif,
    minTimeDif,
    secTimeDif,
    !prevTime
  );

  function setLastTimeVisited(
    dayTimeDif,
    hourTimeDif,
    minTimeDif,
    secTimeDif,
    firstTime
  ) {
    let duration = null;
    if (firstTime) {
      return "This is your first visit.";
    } else if (dayTimeDif > 1) {
      duration = Math.floor(dayTimeDif) + " day(s)";
    } else if (hourTimeDif > 1) {
      duration = Math.floor(hourTimeDif) + " hour(s)";
    } else if (minTimeDif > 1) {
      duration = Math.floor(minTimeDif) + " minute(s)";
    } else if (secTimeDif > 1) {
      duration = Math.floor(secTimeDif) + " second(s)";
    }
    return "It has been " + duration + " since your last visit.";
  }

  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }