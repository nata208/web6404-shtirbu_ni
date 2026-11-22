// Создаем класс (Пункт 6 задания)
class ClientSubmission {
    constructor(login, password, direction, consent) {
        this.login = login;
        this.password = password;
        this.direction = direction;
        this.consent = consent;
        this.submittedAt = new Date().toLocaleString('ru-RU');
    }

    formatOutput() {
        const maskedPassword = '*'.repeat(this.password.length || 4);
        return [
            '=== Данные заявки Dolce & Gabbana ===',
            `Время:       ${this.submittedAt}`,
            `Логин:       ${this.login}`,
            `Пароль:      ${maskedPassword}`,
            `Направление: ${this.direction}`,
            `Согласие:    ${this.consent ? 'да' : 'нет'}`,
            '===================================='
        ].join('\n');
    }

    logToConsole() {
        console.log(this.formatOutput());
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('dg-form');
    const statusEl = document.getElementById('form-status');

    if (!form) return;

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const login = document.getElementById('login-input').value.trim();
        const password = document.getElementById('password-input').value;
        const direction = document.getElementById('direction-select').value;
        const consent = document.getElementById('consent-checkbox').checked;

        const submission = new ClientSubmission(login, password, direction, consent);
        submission.logToConsole();

        if (statusEl) {
            statusEl.textContent = 'Данные сформированы и выведены в консоль браузера.';
        }
    });
});