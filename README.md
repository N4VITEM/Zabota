# Zabota: веб-сервис по сбору статистики и анализу потенциальных клиентов 

## Стэк
- Nest.js + sequelize (ORM) (TypeScript)
- React.js + Bootstrap
- Beget.com (vps + domen)
- Telegram Web Apps

### данный проект реализован в качестве тестового задания для компании Deneb, работа выполнена Меткалевым Иваном

#### конфигурация сервера
server {
    listen 80;
    server_name statistics.zabota-web-service.ru;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl;
    server_name statistics.zabota-web-service.ru;

    ssl_certificate /etc/letsencrypt/live/statistics.zabota-web-service.ru/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/statistics.zabota-web-service.ru/privkey.pem;

    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}

server {
    listen 80;
    server_name bot.zabota-web-service.ru;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl;
    server_name bot.zabota-web-service.ru;

    ssl_certificate /etc/letsencrypt/live/bot.zabota-web-service.ru/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/bot.zabota-web-service.ru/privkey.pem;

    location / {
        proxy_pass http://localhost:4000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}


server {
    listen 80;
    server_name zabota-web-service.ru;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl;
    server_name zabota-web-service.ru;

    ssl_certificate /etc/letsencrypt/live/zabota-web-service.ru/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/zabota-web-service.ru/privkey.pem;

    location / {
        proxy_pass https://localhost:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}

##### В случае если вы заинтересованны в услугах FullStack разработчика Node.js, то прошу вас ознакомится с моим резюме на HH.ru: https://petrozavodsk.hh.ru/resume/d33a5e53ff0d4034290039ed1f306559716739