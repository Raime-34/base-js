let username = 'Dima', balance = 4000;

switch (username) {
    case 'admin':
        console.log('Администратор');
        break;
    default:
        console.log('Гость');
}

switch (true) {
    case balance > 5000:
        console.log('Вип-клиент');
        break;
    case balance > 1000:
        console.log('Постоянный покупатель');
        break;
}