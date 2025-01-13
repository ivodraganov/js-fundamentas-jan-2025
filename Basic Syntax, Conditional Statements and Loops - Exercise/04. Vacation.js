function vacation(count, group, dayOfWeek) {
    let price = 0;
    switch (dayOfWeek) {
        case 'Friday':
            if (group === 'Students') {
                price = 8.45;
            }
            else if (group === 'Business') {
                price = 10.90;
            }
            else if (group === 'Regular') {
                price = 15;
            }
        break;
        case 'Saturday':
            if (group === 'Students') {
                price = 9.80;
            }
            else if (group === 'Business') {
                price = 15.60;
            }
            else if (group === 'Regular') {
                price = 20;
            }
        break;
        case 'Sunday':
            if (group === 'Students') {
                price = 10.46;
            }
            else if (group === 'Business') {
                price = 16;
            }
            else if (group === 'Regular') {
                price = 22.50;
            }
        break;
    }
    if (count >= 30 && group === 'Students') {
        price *= 0.85;
    }
    else if (count >= 100 && group === 'Business') {
        count -= 10;
    }
    else if (group === 'Regular' && count >= 10 && count <= 20 ) {
        price *= 0.95;
    }
    let totalPrice = price * count;
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
vacation(100,
    "Business",
    "Sunday"
)    