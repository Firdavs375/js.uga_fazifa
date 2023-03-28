const qiymat = +prompt("Sovg'ani narxini kiriting")

alert(a(50, 50, 50, 50, qiymat));
function a(a, b, c, d, e) {
    let num = a + b + c + d
    if (num <= e) {
        return "Pul yetarli"
    } else {
        return "Pul yetarli emas"
    }

}
