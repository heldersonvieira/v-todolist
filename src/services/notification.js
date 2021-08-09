export const notify = (comment) => {
    if (!('Notification' in window)) {
        alert('Este browser não suporta notificações de Desktop');
    } else if (Notification.permission === 'granted') {
        return new Notification(comment);
    } else if (Notification.permission !== 'denied') {
        Notification.requestPermission((permission) => {
            if (permission === 'granted') {
                return new Notification(comment);
            }
        });
    }
};
