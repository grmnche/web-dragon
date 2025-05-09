import React from 'react';
import { Project } from './Project/Project.jsx';

export default function Projects() {
  return (
    <div id="projects" className="projects mt-32">
      <img
        data-aos="fade-up"
        className="projects__icon w-56 lg:w-80 mx-auto"
        src="./assets/images/dragon2.png"
      />

      <h2 data-aos="fade-up">Сокровищница</h2>

      <ul data-aos="fade-up">
        <li>
          <strong>
            Архитектурные Подвиги Event/E-commerce экосистемы (10K+ DAU):{' '}
          </strong>
          С нуля проектировал маркетплейсы, ЛК и админки (Vue3/Nuxt3 + Node.js)
          / Вынес 100+ компонентов в библиотеку-драконарий (ускорил разработку
          на 30%)
        </li>

        <li>
          <strong>Охотник за техническим долгом: </strong> Переписал 10+
          legacy-проектов, сократив долг на 70% (освободил 20+ чел/часов в
          неделю) / Обновил стек в legacy (Webpack → Vite, jQuery → Vue3) с
          нулевым downtime
        </li>
      </ul>

      <div className="projects__list grid">
        <Project index={0} />
        <Project index={1} />
        <Project index={2} />
        <Project index={3} />
      </div>

      <div data-aos="fade-up" className="projects__nda">
        <h3>NDA-Дракон | Секретные миссии</h3>

        <ul>
          <li>
            <strong>20+ NDA-проектов: </strong>анимированные интерфейсы,
            event-платформы, e-commerce
          </li>
          <li>
            <strong>Архитектура "под замком": </strong>проектировал системы с
            ограниченным доступом
          </li>
        </ul>
      </div>

      <div data-aos="fade-up" className="projects__contact">
        <h3>Почему Я — Дракончик Вашей Мечты?</h3>

        <ul>
          <li>
            <strong>Frontend-огонь: </strong>
            От Figma-макетов до продакшена
          </li>

          <li>
            <strong>Говорю на языке KPI: </strong>
            Мои оптимизации дают +10-30% к ключевым метрикам
          </li>

          <li>
            <strong>Командный полёт: </strong>
            Внедрил GitFlow для 10+ devs (мержи без конфликтов, -50% времени)
          </li>

          <li>
            <strong>Код-ревью как искусство: </strong>
            20+ ревью/месяц → -40% багов в продакшене
          </li>
        </ul>

        <a href="https://t.me/grmnche" target="_blank">
          <button>Обсудить сотрудничество</button>
        </a>
      </div>
    </div>
  );
}
