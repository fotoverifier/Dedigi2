const CFA = async () =>{
    setLoadResult(true)
    const blob  = await fetch(globalImage).then(r => r.blob());
    const formData = new FormData();
    formData.append('image', blob, 'image.jpg');

    const requestOptions = {
    method: 'POST',
    body: formData,
    };
    fetch('https://www.fotoverifier.eu/api/cfa', requestOptions)
    .then((response) => response.blob())
    .then((blob) => {
        setLoadResult(false)
        var url = URL.createObjectURL(blob);
        myCanvas = document.getElementById('resultCanvasCFA');
        var ctx = myCanvas.getContext('2d');
        const img = new Image;
        img.src = url;
        img.onload = function(){
            ctx.drawImage(img,0,0); // Or at whatever offset you like
        };
        setCFAResultImage(img)
    }).catch(e=>console.log(e));
}
const onLoadCFA=()=>{
    
    if (!CFAResultImage)
        CFA();
    else{
        var myCanvas = document.getElementById('resultCanvas');
        var ctx = myCanvas.getContext('2d');
        ctx.drawImage(CFAResultImage,0,0); // Or at whatever offset you like
    }
}
export default onLoadCFA;