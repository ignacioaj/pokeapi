export function capitalize(txt) {
  txt = String(txt).charAt(0).toUpperCase() + String(txt).slice(1);
  if (txt == "Undefined") {
    return "";
  } else return txt;
}
