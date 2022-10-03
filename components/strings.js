import { Image } from 'react-native'

export const strings = {
    deletingText: 'Deletion du compte en cour...',
    contentHeader: 'Voici les étapes de la suppression définitive de votre compte Fidme',
    contentFooter: 'IMPORTANT: Cette action est irreversible! Passer un délai de 30 jours, il sera impossible de récupérer toutes vos informations, cartes et points de fidélité Fidme',
    cancelButton: 'Annuler la suppression',
    deleteButton: 'Demander la suppression',
};

export const timeLineData = [
      { time: 'jour 1', icon: require('../assets/checkvert.png'), title: 'Demande de suppression', description: 'E-mail de confirmation.\nDélai de 30 jours de reflexion pour annuler' },
      { time: 'jour 21', icon: require('../assets/emailPetit.png'),title: 'E-mail de rappel a J-7', description: ' ' },
      { time: 'jour 30', icon: require('../assets/warningDelete.png'),title: 'Suppression définitive', description: 'E-mail de confirmation' },
];