const backgrounds = [

// Background images
    'https://images.unsplash.com/photo-1467745695289-307cecbc3bf1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4b11fb5d44cdcb7f9bfa22f0cee7dd61&auto=format&fit=crop&w=1100&q=80',
    'https://images.unsplash.com/photo-1492892132812-a00a8b245c45?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=58aeac540226daf88bd141baba89171f&auto=format&fit=crop&w=1050&q=80',
    'https://images.unsplash.com/photo-1498429089284-41f8cf3ffd39?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=91f0fc08cef6f3bfbb32b3adf0065f39&auto=format&fit=crop&w=1050&q=80',
    'https://images.unsplash.com/photo-1517497052582-25e6fe8ec001?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4a796c72fc4b68772c227b39dc6c3754&auto=format&fit=crop&w=1050&q=80',
    'https://images.unsplash.com/photo-1474533883693-59a44dbb964e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0b3049cdd24fbdb4c598c991d8da2b5c&auto=format&fit=crop&w=1050&q=80',
    'https://images.unsplash.com/photo-1494633114655-819eb91fde40?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bb7b7bbfb9ced13abc8e21cf0fd205cf&auto=format&fit=crop&w=1050&q=80',
    'https://images.unsplash.com/photo-1488503674815-d6c13687ff65?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b44419eaf156aec956e391791af03b90&auto=format&fit=crop&w=1051&q=80',
    'https://images.unsplash.com/photo-1486899430790-61dbf6f6d98b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8ecdee5d1b3ed78ff16053b0227874a2&auto=format&fit=crop&w=1002&q=80',
    'https://images.unsplash.com/photo-1517421937867-725f85920dca?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=be7c99cdd3dccbb47d008bb9173d4b20&auto=format&fit=crop&w=1050&q=80',
];

// Change image background each page refresh

window.onload = function() {
    let n = Math.floor(Math.random()*backgrounds.length);
    document.body.style.background = 'linear-gradient(60deg, rgba(250, 105, 0, 0.4) 2%, rgba(105, 210, 231, 0.7)), url(' + backgrounds[n] + '), fixed';
    document.body.style.backgroundSize = 'cover';
};