function gramophone(band, almbum, song) {
    let time = (almbum.length * band.length) * song.length / 2;
    let rotation = Math.ceil(time/2.5);
    console.log(`The plate was rotated ${rotation} times.`);
}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs');