const backgrounds = [
// Background images
    'https://images.unsplash.com/photo-1467745695289-307cecbc3bf1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4b11fb5d44cdcb7f9bfa22f0cee7dd61&auto=format&fit=crop&w=1100&q=80',
    'https://images.unsplash.com/photo-1492892132812-a00a8b245c45?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=58aeac540226daf88bd141baba89171f&auto=format&fit=crop&w=1050&q=80',
    'https://images.unsplash.com/photo-1498429089284-41f8cf3ffd39?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=91f0fc08cef6f3bfbb32b3adf0065f39&auto=format&fit=crop&w=1050&q=80',
    'https://images.unsplash.com/photo-1517497052582-25e6fe8ec001?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4a796c72fc4b68772c227b39dc6c3754&auto=format&fit=crop&w=1050&q=80',
];

window.onload = function() {
    let n = Math.floor(Math.random()*backgrounds.length);
    document.body.style.backgroundImage = 'url(' + backgrounds[n] + ')';
};