import React, { useState } from 'react';

const App = () => {
  const [activeTab, setActiveTab] = useState('about'); // По умолчанию отображаем "О нас"

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return <div>Информация о нас</div>;
      case 'contacts':
        return <div>Контактная информация</div>;
      case 'cabinet':
        return <div>Информация о кабинете</div>;
      default:
        return null;
    }
  };

  return (
    <div>
      <div>
        <button onClick={() => setActiveTab('about')}>О нас</button>
        <button onClick={() => setActiveTab('contacts')}>Контакты</button>
        <button onClick={() => setActiveTab('cabinet')}>Кабинет</button>
      </div>
      <div>
        {renderContent()}
      </div>
    </div>
  );
};

export default App;
