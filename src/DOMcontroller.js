function drawPage() {
    const siteContainer = document.createElement('div');
    siteContainer.id = 'siteContainer';
    const buttonContainer = document.createElement('div');
    buttonContainer.id = 'buttonContainer';
    const gameboardContainer = document.createElement('div');
    gameboardContainer.id = 'gameboardContainer';

    const placeKnightButton = document.createElement('button');
    placeKnightButton.id = 'placeKnightButton';
    placeKnightButton.type = 'button';
    placeKnightButton.textContent = 'Place Knight';

    const placeDestinationButton = document.createElement('button');
    placeDestinationButton.id = 'placeDestinationButton';
    placeDestinationButton.type = 'button';
    placeDestinationButton.textContent = 'Choose Destination';

    const calculateButton = document.createElement('button');
    calculateButton.id = 'calculateButton';
    calculateButton.type = 'button';
    calculateButton.textContent = 'Calculate Path';

    buttonContainer.appendChild(placeKnightButton);
    buttonContainer.appendChild(placeDestinationButton);
    buttonContainer.appendChild(calculateButton);
    siteContainer.appendChild(buttonContainer);
    siteContainer.appendChild(gameboardContainer);
    document.body.appendChild(siteContainer);
}

export { drawPage };