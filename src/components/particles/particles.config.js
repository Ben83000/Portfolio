const particlesConfig = {
    background: {
        color: {
            value: "#00001f", // Couleur de fond noire pour simuler l'espace
        },
    },
    fpsLimit: 60,
    particles: {
        number: {
            value: 160, // Nombre de particules pour les étoiles
            density: {
                enable: true,
                area: 1500, // Ajuste la densité des particules
            },
        },
        color: {
            value: "#ffffff", // Couleur des étoiles
        },
        shape: {
            type: "circle", // Forme des étoiles
        },
        opacity: {
            value: { min: 0.5, max: 1 }, // Opacité variable pour imiter la luminosité des étoiles
            random: {
                enable: true, // Variation aléatoire d'opacité
            },
            animation: {
                enable: true,
                speed: 1, // Vitesse d'animation de l'opacité
                minimumValue: 0.05, // Valeur minimale d'opacité
                sync: false,
            },
        },
        size: {
            value: 1, // Taille des étoiles
            random: {
                enable: true, // Taille aléatoire pour un effet plus naturel
            },
            animation: {
                enable: true,
                speed: 1, // Vitesse d'animation de la taille
                minimumValue: 1, // Valeur minimale de taille
                sync: false,
            },
        },
        move: {
            enable: true,
            speed: 0.05, // Vitesse très lente pour un mouvement subtil
            direction: "none", // Pas de direction spécifique pour le mouvement
            random: false,
            straight: false,
            outModes: {
                default: "out", // Les étoiles disparaissent en sortant de l'écran
            },
            bounce: false,
        },
        links: {
            enable: false, // Pas de liens entre les étoiles
        },
    },
    interactivity: {
        detectsOn: "canvas", // Détection de l'interaction sur le canevas
        events: {
            onHover: {
                enable: true, // Activation des effets de survol
                mode: "bubble", // Mode de survol
            },
            onClick: {
                enable: true, // Activation des effets au clic
                mode: "push", // Mode de clic
            },
            resize: true, // Réajustement lors du redimensionnement de la fenêtre
        },
        modes: {
            bubble: {
                distance: 250, // Distance de l'effet de survol
                size: 0, // Taille des particules lors du survol
                duration: 2, // Durée de l'effet de survol
                opacity: 0, // Opacité des particules lors du survol
                speed: 3, // Vitesse de l'effet de survol
            },
            push: {
                particles_nb: 1, // Nombre de particules ajoutées au clic
            },
        },
    },
    detectRetina: true, // Détection de la rétine
};

export default particlesConfig;
