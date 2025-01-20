function cone(radius, height) {
    let volume = (Math.PI * radius ** 2 * height / 3.0);
    let area = Math.PI * radius * (radius + Math.pow((radius * radius + height * height), 0.5));
    console.log("volume =",volume.toFixed(4));
    console.log("area =",area.toFixed(4));
}
cone(3,5)