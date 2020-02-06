function myFunction() {
  var asset;
  var isValid = false;
  var reg = /^\d+$/;

  do {
    asset = prompt("Enter asset");

    if (asset.length > 4 && reg.test(asset)) {
      isValid = true;
      window.location = `https://kdr21.ip.t-com.hr/Eng/Login?PAGE_ID=ServiceAdminSearch&lang=hr&search=${asset}&QUICK=${asset}`;
    } else alert("Unesite ispravan asset!");
  } while (!isValid);
}
myFunction();
