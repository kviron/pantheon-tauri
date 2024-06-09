import rosetta from 'rosetta';

const i18n = rosetta({
    ru: {
        intro: {
            welcome: 'Welcome, {{username}}!',
            text: 'I hope you find this useful.',
        },
        support(obj) {
            const hour = Math.floor(Math.random() * 3) + 9;
            let str = `For questions, I'm available on ${obj.date.toLocaleDateString()}`;
            str += `, any time after ${hour}:00.`;
            return str;
        },
    },
});

i18n.locale('ru');
