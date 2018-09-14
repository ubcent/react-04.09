//импортируем все изображения для статей блога
export const importAllIMG = (imgURL) =>{
    let images = {};
    imgURL.keys().map((item, index) => { images[item.replace('./', '')] = imgURL(item); });
    return images;
}